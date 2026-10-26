// Checks the built site in dist/: every internal link, image, srcset candidate and fragment resolves; nothing is loaded
// from another origin; every issue, article and picture of ../issues (or SORTIE_ZINES_ISSUES, as the build used) is
// rendered; copied originals are byte-identical.
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(site, 'dist');
const issuesDir = process.env.SORTIE_ZINES_ISSUES ? path.resolve(process.env.SORTIE_ZINES_ISSUES) : path.resolve(site, '..', 'issues');
const ORIGIN = 'https://sortie-launcher.github.io';
const BASE = '/sortie-zines/';

const errors = [];
const fail = (msg) => errors.push(msg);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = path.join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const html = new Map(pages.map((p) => [p, readFileSync(p, 'utf8')]));
const idsByPage = new Map([...html].map(([p, h]) => [p, new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => decode(m[1])))]));

/** dist file for a site path, or null. */
function target(urlPath) {
  if (!urlPath.startsWith(BASE)) return null;
  let rel = decodeURIComponent(urlPath.slice(BASE.length));
  if (rel === '' || rel.endsWith('/')) rel += 'index.html';
  const file = path.join(dist, rel);
  return existsSync(file) && statSync(file).isFile() ? file : null;
}

let internal = 0;
const external = new Set();
for (const [page, h] of html) {
  const pageUrl = new URL(path.relative(dist, page).replace(/index\.html$/, '').replace(/\\/g, '/'), ORIGIN + BASE);
  const refs = [];
  for (const m of h.matchAll(/<(a|link|img|script|source|meta)\b([^>]*)>/g)) {
    const [, tag, attrs] = m;
    const attr = (name) => {
      const a = new RegExp(`\\s${name}="([^"]*)"`).exec(attrs);
      return a ? decode(a[1]) : null;
    };
    if (tag === 'a' || tag === 'link') {
      const href = attr('href');
      if (href !== null) refs.push({ tag, url: href, rel: attr('rel') ?? '' });
    }
    if (tag === 'img' || tag === 'script' || tag === 'source') {
      const src = attr('src');
      if (src !== null) refs.push({ tag, url: src, rel: 'resource' });
      for (const cand of (attr('srcset') ?? '').split(',').map((s) => s.trim().split(/\s+/)[0]).filter(Boolean)) refs.push({ tag, url: cand, rel: 'resource' });
      if (tag === 'img' && attr('alt') === null) fail(`${page}: <img> without alt`);
      if (tag === 'img' && (!attr('width') || !attr('height'))) fail(`${page}: <img> without width/height`);
    }
    if (tag === 'meta' && /property="og:image"/.test(attrs)) refs.push({ tag, url: attr('content'), rel: 'resource' });
  }
  for (const m of h.matchAll(/url\((['"]?)([^'")]+)\1\)/g)) refs.push({ tag: 'css', url: m[2], rel: 'resource' });
  for (const r of refs) {
    const u = new URL(r.url, pageUrl);
    if (u.origin !== ORIGIN || !u.pathname.startsWith(BASE)) {
      if (r.tag !== 'a' && r.rel !== 'canonical') fail(`${page}: external resource ${r.url}`);
      if (r.tag === 'a') external.add(u.href);
      continue;
    }
    internal++;
    const file = target(u.pathname);
    if (!file) {
      fail(`${path.relative(dist, page)}: broken ${r.tag} ${r.url}`);
      continue;
    }
    if (u.hash && file.endsWith('.html') && !idsByPage.get(file)?.has(decodeURIComponent(u.hash.slice(1)))) {
      fail(`${path.relative(dist, page)}: missing fragment ${r.url}`);
    }
  }
}

// CSS files: fonts and other url() references.
for (const css of files.filter((f) => f.endsWith('.css'))) {
  const cssUrl = new URL(path.relative(dist, css).replace(/\\/g, '/'), ORIGIN + BASE);
  for (const m of readFileSync(css, 'utf8').matchAll(/url\((['"]?)([^'")]+)\1\)/g)) {
    if (m[2].startsWith('data:')) continue;
    const u = new URL(m[2], cssUrl);
    if (u.origin !== ORIGIN) fail(`${css}: external url(${m[2]})`);
    else if (!target(u.pathname)) fail(`${css}: broken url(${m[2]})`);
    else internal++;
  }
}

// Content coverage against the packs.
const IMG_LINE = /^!\[([^\]]*)]\(\s*([^)\s]+)(?:\s+"([^"]*)")?\s*\)$/;
let issueCount = 0;
let articleCount = 0;
let imageRefs = 0;
let originals = 0;
for (const id of readdirSync(issuesDir).filter((n) => statSync(path.join(issuesDir, n)).isDirectory()).sort()) {
  const issue = JSON.parse(readFileSync(path.join(issuesDir, id, 'issue.json'), 'utf8'));
  issueCount++;
  const issuePage = html.get(path.join(dist, id, 'index.html'));
  if (!issuePage) fail(`missing issue page ${id}`);
  if (!html.get(path.join(dist, id, 'credits', 'index.html'))) fail(`missing credits page ${id}`);
  if (issue.cover) {
    imageRefs++;
    if (!issuePage?.includes(`src="${BASE}${id}/${issue.cover}"`)) fail(`${id}: cover not rendered`);
  }
  for (const a of issue.articles) {
    articleCount++;
    const page = html.get(path.join(dist, id, a.id, 'index.html'));
    if (!page) {
      fail(`missing article page ${id}/${a.id}`);
      continue;
    }
    const lines = readFileSync(path.join(issuesDir, id, a.body), 'utf8').split(/\r\n|\n|\r/);
    const expected = [a.image, ...lines.map((l) => IMG_LINE.exec(l.trim())?.[2]).filter(Boolean)].filter(Boolean);
    imageRefs += expected.length;
    const rendered = [...page.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
    const want = expected.map((p) => `${BASE}${id}/${p}`);
    if (JSON.stringify(rendered) !== JSON.stringify(want)) fail(`${id}/${a.id}: images ${JSON.stringify(rendered)} != ${JSON.stringify(want)}`);
    if (!/id="sources"/.test(page)) fail(`${id}/${a.id}: no Sources section`);
    if (!page.includes(`${BASE}${id}/credits/`)) fail(`${id}/${a.id}: no credits link`);
    // every run of two or more consecutive image lines titled "sequence" is one picture sequence strip
    let runs = 0;
    let run = 0;
    for (const l of [...lines, '']) {
      if (IMG_LINE.exec(l.trim())?.[3] === 'sequence') run++;
      else {
        if (run > 1) runs++;
        run = 0;
      }
    }
    const strips = (page.match(/<section class="seq"/g) ?? []).length;
    if (strips !== runs) fail(`${id}/${a.id}: ${strips} picture sequence strips rendered, ${runs} in the body`);
  }
  for (const name of readdirSync(path.join(issuesDir, id, 'media'))) {
    const src = readFileSync(path.join(issuesDir, id, 'media', name));
    const copy = path.join(dist, id, 'media', name);
    originals++;
    if (!existsSync(copy)) fail(`${id}/media/${name} not published`);
    else if (createHash('sha256').update(readFileSync(copy)).digest('hex') !== createHash('sha256').update(src).digest('hex')) fail(`${id}/media/${name} differs from the pack`);
  }
}

console.log(
  `check-site: ${pages.length} pages, ${internal} internal references, ${external.size} distinct external links (not fetched); ` +
    `${issueCount} issues, ${articleCount} articles, ${imageRefs} image placements, ${originals} byte-identical originals`,
);
if (errors.length) {
  console.error(errors.slice(0, 50).join('\n'));
  console.error(`check-site: ${errors.length} problem(s)`);
  process.exit(1);
}
