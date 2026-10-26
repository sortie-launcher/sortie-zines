// Prepares the site's generated public directory from the read-only issue packs in ../issues (or SORTIE_ZINES_ISSUES, a
// folder of unpublished draft packs to preview). Originals are copied byte-for-byte; narrower WebP derivatives are written
// beside them under _w/. Never writes inside the packs folder.
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(site, '..');
const issuesDir = process.env.SORTIE_ZINES_ISSUES ? path.resolve(process.env.SORTIE_ZINES_ISSUES) : path.join(repo, 'issues');
const out = path.join(site, '.generated');
const pub = path.join(out, 'public');
const WIDTHS = [480, 800, 1200];

await rm(out, { recursive: true, force: true });
await mkdir(pub, { recursive: true });

for (const [from, to] of [
  ['branding/icon.svg', 'icon.svg'],
  ['branding/icon.png', 'icon.png'],
  ['branding/social-preview.png', 'social-preview.png'],
  ['branding/mark.svg', 'mark.svg'],
]) {
  await copyFile(path.join(repo, from), path.join(pub, to));
}

const media = {};
const issueIds = (await readdir(issuesDir, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
  .map((d) => d.name)
  .sort();

let originals = 0;
let derived = 0;
for (const id of issueIds) {
  const srcMedia = path.join(issuesDir, id, 'media');
  const dstMedia = path.join(pub, id, 'media');
  await mkdir(path.join(dstMedia, '_w'), { recursive: true });
  for (const name of (await readdir(srcMedia)).sort()) {
    const src = path.join(srcMedia, name);
    if (!(await stat(src)).isFile()) continue;
    const bytes = await readFile(src);
    await copyFile(src, path.join(dstMedia, name));
    originals++;
    const meta = await sharp(bytes).metadata();
    const rel = `${id}/media/${name}`;
    const stem = name.replace(/\.[^.]+$/, '');
    const variants = [];
    for (const w of WIDTHS) {
      if (w >= meta.width * 0.85) continue; // the original already serves this width well
      const file = `${id}/media/_w/${stem}-${w}.webp`;
      const info = await sharp(bytes).resize({ width: w }).webp({ quality: 82 }).toFile(path.join(pub, file));
      variants.push({ url: file, width: info.width, height: info.height });
      derived++;
    }
    media[rel] = {
      width: meta.width,
      height: meta.height,
      bytes: bytes.length,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      variants,
    };
  }
}

await writeFile(path.join(out, 'media.json'), JSON.stringify(media, null, 1));
console.log(`prepare-media: ${issueIds.length} issues, ${originals} originals copied, ${derived} derivatives written`);
