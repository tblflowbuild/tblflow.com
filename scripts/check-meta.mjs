// Fails when a built page's <title> or meta description is longer than what
// search engines show. `--json` prints every offender instead.
import fs from 'node:fs';
import path from 'node:path';

const TITLE_MAX = 60;
const DESC_MAX = 160;
const root = 'dist';
const width = (s) => [...s].reduce((w, c) => w + (/[　-鿿＀-￯]/.test(c) ? 2 : 1), 0);
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const files = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith('.html'));
const offenders = [];
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (width(title) > TITLE_MAX || width(description) > DESC_MAX) {
    offenders.push({ page: '/' + file.replace(/\.html$/, ''), title, tw: width(title), description, dw: width(description) });
  }
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(offenders, null, 1));
} else {
  for (const o of offenders) console.error(`${o.page}  title ${o.tw}/${TITLE_MAX}  description ${o.dw}/${DESC_MAX}`);
  console.log(`${files.length} pages, ${offenders.length} with a title or description too long`);
  if (offenders.length) process.exit(1);
}
