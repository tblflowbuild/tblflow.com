// French non-breaking spaces, applied to the built HTML of the French pages.
//
// French typography wants a narrow no-break space (U+202F) before ? ! ; and a
// no-break space (U+00A0) before :, inside « », and between a number and € or
// %. The copy is authored with ordinary spaces (hundreds of them, across data
// modules, Markdown and components), so the rule is applied once, at the end of
// `astro build`, on the rendered pages rather than in every source string.
//
// Only text between tags is touched. Tags and their attributes (URLs, meta
// descriptions, data-*), comments, and the content of script/style/textarea
// (JSON-LD included) and pre/code/kbd/samp are copied verbatim.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NNBSP = ' ';
const NBSP = ' ';

/** Elements whose content is raw text: skipped up to their closing tag. */
const RAW_TEXT = new Set(['script', 'style', 'textarea']);
/** Elements whose text is code or literal input: left as typed. */
const LITERAL = new Set(['pre', 'code', 'kbd', 'samp']);

const TAG = /<!--[\s\S]*?-->|<\/?([a-zA-Z][\w:-]*)(?:[^>"']|"[^"]*"|'[^']*')*>/g;

/** The French spacing rules on one run of text (no markup inside). */
export function frenchSpaces(text) {
  return text
    .replace(/ ([?!;])/g, `${NNBSP}$1`)
    .replace(/ :/g, `${NBSP}:`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`)
    .replace(/(\d) (€|%)/g, `$1${NBSP}$2`);
}

/** Ordinary spaces the rules above would have replaced — empty when the text is clean. */
export function violations(text) {
  return text.match(/ [?!;:»]|« |\d [€%]/g) ?? [];
}

/**
 * Walks the HTML and hands every text run outside skipped elements to `onText`,
 * which returns its replacement. Everything else is copied as is.
 */
export function mapText(html, onText) {
  let out = '';
  let last = 0;
  let literalDepth = 0;
  TAG.lastIndex = 0;
  for (let match = TAG.exec(html); match; match = TAG.exec(html)) {
    const text = html.slice(last, match.index);
    out += literalDepth > 0 ? text : onText(text);
    out += match[0];
    last = TAG.lastIndex;
    const name = match[1]?.toLowerCase();
    if (!name) continue;
    const closing = match[0].startsWith('</');
    if (!closing && RAW_TEXT.has(name)) {
      const end = html.toLowerCase().indexOf(`</${name}`, last);
      const stop = end === -1 ? html.length : end;
      out += html.slice(last, stop);
      last = stop;
      TAG.lastIndex = stop;
    } else if (LITERAL.has(name) && !match[0].endsWith('/>')) {
      literalDepth = Math.max(0, literalDepth + (closing ? -1 : 1));
    }
  }
  const tail = html.slice(last);
  return out + (literalDepth > 0 ? tail : onText(tail));
}

export const applyFrenchSpaces = (html) => mapText(html, frenchSpaces);

/** Every rule violation left in the text of a page, for the build-time check. */
export function findViolations(html) {
  const found = [];
  mapText(html, (text) => {
    found.push(...violations(text));
    return text;
  });
  return found;
}

/** The French pages of a build: `fr.html` and everything under `fr/`. */
export function frenchPages(distDir) {
  const root = path.join(distDir, 'fr');
  const nested = fs.existsSync(root)
    ? fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith('.html')).map((f) => path.join(root, f))
    : [];
  const index = path.join(distDir, 'fr.html');
  return fs.existsSync(index) ? [index, ...nested] : nested;
}

/** Astro integration: rewrites the French pages after the build, then checks them. */
export default function typoFr() {
  return {
    name: 'typo-fr',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const pages = frenchPages(fileURLToPath(dir));
        const broken = [];
        for (const file of pages) {
          const html = applyFrenchSpaces(fs.readFileSync(file, 'utf8'));
          fs.writeFileSync(file, html);
          const left = findViolations(html);
          if (left.length) broken.push(`${file}: ${JSON.stringify(left.slice(0, 5))}`);
        }
        if (broken.length) {
          throw new Error(`typo-fr: ordinary spaces left on French pages\n${broken.join('\n')}`);
        }
        logger.info(`French non-breaking spaces applied to ${pages.length} pages`);
      },
    },
  };
}
