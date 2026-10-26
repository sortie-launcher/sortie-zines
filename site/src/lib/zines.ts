// Reads the schema-version-2 packs in ../issues (read-only) and renders them to safe HTML for the web reader.
// SORTIE_ZINES_ISSUES names another packs folder instead, to preview unpublished drafts; prepare-media and check-site follow it.
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { autolink, blockImages, escapeHtml, inlineHtml, inlinePlain, parseMarkdown, type MdBlock } from './markdown';

export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const SITE_ROOT = process.cwd();
const ISSUES_DIR = process.env.SORTIE_ZINES_ISSUES ? path.resolve(process.env.SORTIE_ZINES_ISSUES) : path.resolve(SITE_ROOT, '..', 'issues');
const MEDIA: Record<string, MediaInfo> = JSON.parse(readFileSync(path.join(SITE_ROOT, '.generated', 'media.json'), 'utf8'));
const SLUG = /^[A-Za-z0-9][A-Za-z0-9_-]{0,79}$/;
// "credits" is the per-issue provenance page, so no article may use that id.
const CREDITS_SEGMENT = 'credits';

interface MediaInfo {
  width: number;
  height: number;
  bytes: number;
  sha256: string;
  variants: { url: string; width: number; height: number }[];
}

export interface Picture {
  /** Issue-relative path as written in the pack, e.g. media/cover.webp. */
  path: string;
  src: string;
  srcset: string;
  width: number;
  height: number;
  /** Anchor of this file's entry on the issue's credits page. */
  creditsHref: string;
}

export interface GameRef {
  id: string;
  title: string;
  systemId?: string;
  edition?: string;
}

export interface Article {
  id: string;
  index: number;
  title: string;
  gameTitle: string;
  system: string;
  games: GameRef[];
  deck: string;
  image?: Picture;
  imageCaption: string;
  readingMinutes?: number;
  href: string;
  blocks: MdBlock[];
  /** Markdown image paths in reading order. */
  bodyImages: string[];
}

export interface Issue {
  id: string;
  number?: string;
  title: string;
  subtitle: string;
  published: string;
  dateLabel: string;
  revision: number;
  cover?: Picture;
  coverCredit: string;
  editorial: string;
  rightsNotice: string;
  articles: Article[];
  sources: Record<string, unknown>;
  href: string;
  creditsHref: string;
}

function isSafeIssuePath(p: string): boolean {
  if (!p || p.length > 240 || p.startsWith('/') || p.startsWith('~')) return false;
  if (/[\\:\u0000-\u001f\u007f]/.test(p)) return false;
  return p.split('/').every((s) => s && s !== '.' && s !== '..');
}

export const mediaAnchor = (file: string) => 'm-' + file.replace(/^media\//, '').replace(/[^A-Za-z0-9_-]+/g, '-');

function picture(issueId: string, file: string): Picture {
  if (!isSafeIssuePath(file)) throw new Error(`${issueId}: unsafe image path ${file}`);
  const info = MEDIA[`${issueId}/${file}`];
  if (!info) throw new Error(`${issueId}: image ${file} is missing from the pack`);
  const original = `${BASE}${issueId}/${file}`;
  return {
    path: file,
    src: original,
    srcset: [...info.variants.map((v) => `${BASE}${v.url} ${v.width}w`), `${original} ${info.width}w`].join(', '),
    width: info.width,
    height: info.height,
    creditsHref: `${BASE}${issueId}/credits/#${mediaAnchor(file)}`,
  };
}

function dateLabel(iso: string): string {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!d) return iso;
  return new Date(Date.UTC(+d[1], +d[2] - 1, +d[3])).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function loadIssue(id: string): Issue {
  const dir = path.join(ISSUES_DIR, id);
  const j = JSON.parse(readFileSync(path.join(dir, 'issue.json'), 'utf8').replace(/^\uFEFF/, ''));
  if (j.schemaVersion !== 2 || j.id !== id || !SLUG.test(id)) throw new Error(`${id}: not a schema-version-2 pack named after its id`);
  const sources = JSON.parse(readFileSync(path.join(dir, 'sources.json'), 'utf8'));
  const href = `${BASE}${id}/`;
  const seen = new Set<string>();
  const articles: Article[] = j.articles.map((a: Record<string, any>, index: number) => {
    if (!SLUG.test(a.id) || seen.has(a.id) || a.id === CREDITS_SEGMENT) throw new Error(`${id}: article id ${a.id} is invalid, repeated or reserved`);
    seen.add(a.id);
    if (!isSafeIssuePath(a.body)) throw new Error(`${id}/${a.id}: unsafe body path`);
    const blocks = parseMarkdown(readFileSync(path.join(dir, a.body), 'utf8'));
    if (!blocks.length) throw new Error(`${id}/${a.id}: empty body`);
    const bodyImages = blocks.flatMap((b) => blockImages(b).map((i) => i.src));
    for (const src of bodyImages) picture(id, src);
    return {
      id: a.id,
      index,
      title: str(a.title),
      gameTitle: str(a.gameTitle),
      system: str(a.system),
      games: (a.games ?? []).map((g: Record<string, string>) => ({ id: g.id, title: g.title, systemId: g.systemId, edition: g.edition })),
      deck: str(a.deck),
      image: a.image ? picture(id, a.image) : undefined,
      imageCaption: str(a.imageCaption),
      readingMinutes: a.readingMinutes,
      href: `${href}${a.id}/`,
      blocks,
      bodyImages,
    };
  });
  const media = Array.isArray(sources.media) ? (sources.media as Record<string, unknown>[]) : [];
  const coverEntry = j.cover ? media.find((m) => (m.file ?? m.path) === j.cover) : undefined;
  return {
    id,
    number: /-(\d+)$/.exec(id)?.[1],
    title: str(j.title),
    subtitle: str(j.subtitle),
    published: str(j.published),
    dateLabel: dateLabel(str(j.published)),
    revision: j.revision,
    cover: j.cover ? picture(id, j.cover) : undefined,
    coverCredit: str(coverEntry?.credit) || str(coverEntry?.source) || str(coverEntry?.rightsHolder) || str(coverEntry?.rights),
    editorial: str(j.editorial),
    rightsNotice: str(j.rightsNotice),
    articles,
    sources,
    href,
    creditsHref: `${href}credits/`,
  };
}

/** Every issue, newest first (publication date, then issue number). */
export const issues: Issue[] = readdirSync(ISSUES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
  .map((d) => loadIssue(d.name))
  .sort((a, b) => b.published.localeCompare(a.published) || b.id.localeCompare(a.id, 'en', { numeric: true }));

export function paragraphsHtml(text: string): string {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${inlineHtml(p.replace(/\s*\n\s*/g, ' '))}</p>`)
    .join('\n');
}

export function figureHtml(pic: Picture, caption: string, sizes: string, extraClass = '', eager = false): string {
  const portrait = pic.height > pic.width * 1.1 ? ' fig--portrait' : '';
  return figureMarkup(pic, caption, sizes, `fig${portrait}${extraClass ? ' ' + extraClass : ''}`, eager);
}

function figureMarkup(pic: Picture, caption: string, sizes: string, classes: string, eager = false): string {
  return `<figure class="${classes}">
<img src="${pic.src}" srcset="${pic.srcset}" sizes="${sizes}" width="${pic.width}" height="${pic.height}" alt="${escapeHtml(inlinePlain(caption))}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
<figcaption><span class="fig__cap">${inlineHtml(caption)}</span> <a class="fig__prov" href="${pic.creditsHref}">Image provenance</a></figcaption>
</figure>`;
}

const SEQUENCE_PANEL_SIZES = '(min-width: 52rem) 36rem, 100vw';

/**
 * A picture sequence: one row of captioned panels that snaps panel by panel (a stack on narrow screens, see site.css). The
 * strip is focusable; the article page's script makes ← and → move between its panels only while it has the focus, and
 * remembers the chosen panel. [n] numbers the article's sequences for that memory.
 */
function sequenceHtml(issue: Issue, panels: { caption: string; src: string }[], n: number): string {
  const count = panels.length;
  const items = panels
    .map((p, i) => `<li class="seq__panel"${i === 0 ? ' aria-current="true"' : ''}>${figureMarkup(picture(issue.id, p.src), p.caption, SEQUENCE_PANEL_SIZES, 'fig fig--seq')}</li>`)
    .join('\n');
  return `<section class="seq" data-seq="${n}" tabindex="0" aria-roledescription="picture sequence" aria-label="Picture sequence, ${count} images">
<ol class="seq__track">
${items}
</ol>
<div class="seq__bar"><span class="seq__count" aria-live="polite">1 of ${count}</span><span class="seq__keys">← and → move between the pictures</span><span class="seq__nav" hidden><button type="button" class="seq__btn" data-step="-1" aria-label="Previous picture">←</button><button type="button" class="seq__btn" data-step="1" aria-label="Next picture">→</button></span></div>
</section>`;
}

export const slugify = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';

export interface Outline {
  id: string;
  text: string;
}

const BODY_FIGURE_SIZES = '(min-width: 52rem) 46rem, 100vw';

/** The article body as HTML: headings get anchors; the "Sources" section is wrapped for its own typography. */
export function articleBodyHtml(issue: Issue, article: Article): { html: string; outline: Outline[] } {
  const out: string[] = [];
  const outline: Outline[] = [];
  const ids = new Set<string>();
  let list: 'bullet' | null = null;
  let inSources = false;
  let sequences = 0;
  const closeList = () => {
    if (list) out.push('</ul>');
    list = null;
  };
  for (const b of article.blocks) {
    if (b.kind !== 'bullet') closeList();
    switch (b.kind) {
      case 'heading': {
        if (inSources) out.push('</section>');
        let id = slugify(b.text);
        while (ids.has(id)) id += '-x';
        ids.add(id);
        inSources = /^sources$/i.test(b.text);
        if (inSources) {
          id = 'sources';
          out.push('<section class="sources" aria-labelledby="sources">');
        }
        if (b.level < 3) outline.push({ id, text: b.text });
        const tag = b.level === 3 ? 'h3' : 'h2';
        out.push(`<${tag} id="${id}">${escapeHtml(b.text)}</${tag}>`);
        break;
      }
      case 'paragraph':
        out.push(`<p>${inlineHtml(b.text)}</p>`);
        break;
      case 'bullet':
        if (!list) out.push('<ul>');
        list = 'bullet';
        out.push(`<li>${inlineHtml(b.text)}</li>`);
        break;
      case 'quote':
        out.push(`<blockquote><p>${inlineHtml(b.text)}</p></blockquote>`);
        break;
      case 'image':
        out.push(figureHtml(picture(issue.id, b.src), b.caption, BODY_FIGURE_SIZES));
        break;
      case 'sequence':
        out.push(sequenceHtml(issue, b.panels, sequences++));
        break;
      case 'rule':
        out.push('<hr>');
        break;
    }
  }
  closeList();
  if (inSources) out.push('</section>');
  return { html: out.join('\n'), outline };
}

// ---- sources.json (provenance) rendering -------------------------------------------------------------------------

const LABELS: Record<string, string> = {
  rightsHolder: 'Rights holder',
  rightsHolders: 'Rights holders',
  rightsNotice: 'Rights notice',
  rightsNote: 'Rights note',
  researchNote: 'Research note',
  derivedFrom: 'Derived from',
  usedFor: 'Used for',
  accessDate: 'Accessed',
  dateNote: 'Date note',
  reviewedEdition: 'Reviewed edition',
  rejectedMedia: 'Images considered and not used',
  sha256: 'SHA-256',
};

export function label(key: string): string {
  if (LABELS[key]) return LABELS[key];
  const words = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[-_]+/g, ' ').toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function isEmpty(v: unknown): boolean {
  return v === null || v === undefined || (typeof v === 'string' && !v.trim()) || (Array.isArray(v) && !v.length);
}

/** Any JSON value as readable HTML; URLs become links, nothing is dropped except empty values. */
export function valueHtml(v: unknown, ctx: { issue: Issue }): string {
  if (typeof v === 'string') return autolink(v);
  if (typeof v === 'number' || typeof v === 'boolean') return escapeHtml(String(v));
  if (Array.isArray(v)) {
    const cls = v.every((x) => typeof x === 'object' && x && ('url' in x || 'title' in x || 'source' in x)) ? ' class="cites"' : '';
    return `<ul${cls}>${v.map((x) => `<li>${valueHtml(x, ctx)}</li>`).join('')}</ul>`;
  }
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>;
    const head = str(o.title) || (typeof o.source === 'string' ? str(o.source) : '');
    if (head && ('url' in o || 'author' in o || 'publisher' in o)) return citationHtml(o, head, ctx);
    return dlHtml(o, ctx);
  }
  return '';
}

function dlHtml(o: Record<string, unknown>, ctx: { issue: Issue }, skip: string[] = []): string {
  const rows = Object.entries(o)
    .filter(([k, v]) => !skip.includes(k) && !isEmpty(v))
    .map(([k, v]) => {
      const value = k === 'games' && Array.isArray(v) ? gamesHtml(v as string[], ctx.issue) : valueHtml(v, ctx);
      return `<div><dt>${escapeHtml(label(k))}</dt><dd${k === 'sha256' ? ' class="hash"' : ''}>${value}</dd></div>`;
    });
  return rows.length ? `<dl class="kv">${rows.join('')}</dl>` : '';
}

function citationHtml(o: Record<string, unknown>, head: string, ctx: { issue: Issue }): string {
  const byline = ['author', 'publisher', 'date'].map((k) => str(o[k])).filter(Boolean).map(escapeHtml).join(', ');
  const headKey = str(o.title) ? 'title' : 'source';
  const url = str(o.url);
  const rest = dlHtml(o, ctx, [headKey, 'author', 'publisher', 'date', 'url']);
  return `<div class="cite"><cite>${escapeHtml(head)}</cite>${byline ? `<span class="cite__by">${byline}</span>` : ''}${
    url ? `<span class="url">${autolink(url)}</span>` : ''
  }${rest}</div>`;
}

function gamesHtml(ids: string[], issue: Issue): string {
  const titles = new Map(issue.articles.flatMap((a) => a.games).map((g) => [g.id, g]));
  return `<ul class="games">${ids
    .map((id) => {
      const g = titles.get(id);
      return `<li>${g ? `${escapeHtml(g.title)}${g.systemId ? ` <span class="sys">${escapeHtml(g.systemId)}</span>` : ''}` : escapeHtml(id)}</li>`;
    })
    .join('')}</ul>`;
}

export interface CreditsModel {
  meta: { key: string; value: string }[];
  rights: { key: string; html: string }[];
  media: { file: string; anchor: string; pic?: Picture; html: string; usedIn: Article[] }[];
  perArticle: { key: string; article?: Article; html: string }[];
  perArticleHeading: string;
  notes: { key: string; html: string }[];
}

const META_KEYS = ['issue', 'revision', 'prepared', 'compiled', 'revised'];
const RIGHTS_KEYS = ['rightsNotice', 'rightsHolders', 'rights', 'rightsNote'];

/** sources.json grouped for the credits page. Every non-empty field appears in exactly one group. */
export function creditsModel(issue: Issue): CreditsModel {
  const s = issue.sources;
  const ctx = { issue };
  const model: CreditsModel = { meta: [], rights: [], media: [], perArticle: [], perArticleHeading: 'Sources by article', notes: [] };
  const articleById = new Map(issue.articles.map((a) => [a.id, a]));
  for (const [key, v] of Object.entries(s)) {
    if (isEmpty(v)) continue;
    if (META_KEYS.includes(key)) model.meta.push({ key: label(key), value: String(v) });
    else if (RIGHTS_KEYS.includes(key)) model.rights.push({ key: label(key), html: typeof v === 'string' ? `<p>${autolink(v)}</p>` : valueHtml(v, ctx) });
    else if (key === 'media' && Array.isArray(v)) {
      for (const m of v as Record<string, unknown>[]) {
        const file = str(m.file) || str(m.path);
        const fileKey = m.file ? 'file' : 'path';
        const usedIn = issue.articles.filter((a) => a.image?.path === file || a.bodyImages.includes(file));
        model.media.push({
          file,
          anchor: mediaAnchor(file),
          pic: MEDIA[`${issue.id}/${file}`] ? picture(issue.id, file) : undefined,
          html: dlHtml(m, ctx, [fileKey]),
          usedIn,
        });
      }
    } else if (
      (key === 'articles' || key === 'research') &&
      v &&
      typeof v === 'object' &&
      !Array.isArray(v) &&
      Object.keys(v).every((k) => articleById.has(k))
    ) {
      model.perArticleHeading = key === 'research' ? 'Research by article' : 'Sources by article';
      for (const [aid, entry] of Object.entries(v as Record<string, unknown>)) {
        const html =
          entry && typeof entry === 'object' && !Array.isArray(entry)
            ? dlHtml(entry as Record<string, unknown>, ctx)
            : valueHtml(entry, ctx);
        model.perArticle.push({ key: aid, article: articleById.get(aid), html });
      }
    } else model.notes.push({ key: label(key), html: typeof v === 'string' ? `<p>${autolink(v)}</p>` : valueHtml(v, ctx) });
  }
  return model;
}
