// A faithful port of Sortie's Markdown subset (app/.../data/markdown/Markdown.kt): `#`-`###` headings, paragraphs joined
// across soft line breaks, `- ` bullets (an indented line continues a bullet), `>` quotes, standalone image lines, `---`
// rules and inline **bold**, *italic* and [text](url). Raw HTML is never interpreted: everything is escaped as text.

export type MdBlock =
  | { kind: 'heading'; level: 1 | 2 | 3; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullet'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'image'; caption: string; src: string }
  | { kind: 'rule' };

const HEADING = /^(#{1,6})\s+(.*)$/;
const IMAGE = /^!\[([^\]]*)]\(\s*([^)\s]+)(?:\s+"([^"]*)")?\s*\)$/;
const RULE = /^(-{3,}|\*{3,}|_{3,})$/;
const INLINE = /\[([^\]\n]+)]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
const BARE_URL = /https?:\/\/[^\s<>"]+/g;

export function parseMarkdown(md: string): MdBlock[] {
  const out: MdBlock[] = [];
  let para = '';
  let quote = '';
  const flush = () => {
    if (para) out.push({ kind: 'paragraph', text: para });
    para = '';
    if (quote) out.push({ kind: 'quote', text: quote });
    quote = '';
  };
  for (const raw of md.replace(/^\uFEFF/, '').split(/\r\n|\n|\r/)) {
    const line = raw.trim();
    const heading = HEADING.exec(line);
    const image = IMAGE.exec(line);
    const last = out[out.length - 1];
    if (!line) flush();
    else if (heading) {
      flush();
      out.push({ kind: 'heading', level: Math.min(heading[1].length, 3) as 1 | 2 | 3, text: heading[2].trim() });
    } else if (line.startsWith('>')) {
      if (para) flush();
      const text = line.slice(1).trim();
      if (!text) flush();
      else quote += (quote ? ' ' : '') + text;
    } else if (image) {
      flush();
      out.push({ kind: 'image', caption: image[1].trim() || (image[3] ?? '').trim(), src: image[2] });
    } else if (RULE.test(line)) {
      flush();
      out.push({ kind: 'rule' });
    } else if (line.startsWith('- ')) {
      flush();
      out.push({ kind: 'bullet', text: line.slice(2).trim() });
    } else if (last?.kind === 'bullet' && !para && !quote && raw.startsWith('  ')) {
      last.text += ' ' + line;
    } else {
      if (quote) flush();
      para += (para ? ' ' : '') + line;
    }
  }
  flush();
  return out;
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const LINK_REL = 'rel="external noopener noreferrer"';

/** Plain text with bare http(s) URLs turned into links; trailing sentence punctuation stays outside the link. */
export function autolink(text: string): string {
  let html = '';
  let i = 0;
  for (const m of text.matchAll(BARE_URL)) {
    let url = m[0];
    // Drop trailing sentence punctuation and any closing parenthesis the URL did not open.
    while (/[.,;:!?'’”]$/.test(url) || (url.endsWith(')') && url.split(')').length > url.split('(').length)) url = url.slice(0, -1);
    const start = m.index!;
    html += escapeHtml(text.slice(i, start)) + `<span class="url"><a href="${escapeHtml(url)}" ${LINK_REL}>${escapeHtml(url)}</a></span>`;
    i = start + url.length;
  }
  return html + escapeHtml(text.slice(i));
}

/** Inline spans as safe HTML. Spans do not nest, exactly as in the app. */
export function inlineHtml(text: string): string {
  let html = '';
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const start = m.index!;
    if (start > i) html += autolink(text.slice(i, start));
    if (m[1] !== undefined) {
      html += /^https?:\/\/\S+$/i.test(m[2])
        ? `<a href="${escapeHtml(m[2])}" ${LINK_REL}>${escapeHtml(m[1])}</a>`
        : `${escapeHtml(m[1])} (${escapeHtml(m[2])})`;
    } else if (m[3] !== undefined) html += `<strong>${autolink(m[3])}</strong>`;
    else html += `<em>${autolink(m[4])}</em>`;
    i = start + m[0].length;
  }
  return html + autolink(text.slice(i));
}

/** Inline markup removed: the words a reader would see, for alt text and meta descriptions. */
export function inlinePlain(text: string): string {
  return text.replace(INLINE, (_all, lt, _lu, b, it) => lt ?? b ?? it);
}
