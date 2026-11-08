// Checks the French non-breaking spaces (integrations/typo-fr.mjs):
//  1. the rule itself, on fixed cases — what must change and what must not;
//  2. the built French pages, with a scan independent of the integration's own
//     HTML walker: no ordinary space left where French typography wants a
//     non-breaking one, in the visible text.
// Run: npm run build && npm run check:typo-fr
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { applyFrenchSpaces, frenchPages } from '../integrations/typo-fr.mjs';

const NNBSP = ' ';
const NBSP = ' ';

const cases = [
  ['<p>Pourquoi ? Vraiment ! Oui ; non</p>', `<p>Pourquoi${NNBSP}? Vraiment${NNBSP}! Oui${NNBSP}; non</p>`],
  ['<p>Tarifs : 39 € et 5 %</p>', `<p>Tarifs${NBSP}: 39${NBSP}€ et 5${NBSP}%</p>`],
  ['<p>« Bonjour »</p>', `<p>«${NBSP}Bonjour${NBSP}»</p>`],
  // Attributes, URLs and comments are not text.
  ['<a href="/fr?x=1" title="Quoi ?">Lien</a>', '<a href="/fr?x=1" title="Quoi ?">Lien</a>'],
  ['<meta name="description" content="Prix : 39 €">', '<meta name="description" content="Prix : 39 €">'],
  ['<!-- note : ici ? -->', '<!-- note : ici ? -->'],
  // Raw-text and literal elements are left as typed, JSON-LD included.
  ['<script type="application/ld+json">{"a": "b ?", "c": 1 }</script>', '<script type="application/ld+json">{"a": "b ?", "c": 1 }</script>'],
  ['<script>if (a < b && c ? d : e) {}</script><p>Et ?</p>', `<script>if (a < b && c ? d : e) {}</script><p>Et${NNBSP}?</p>`],
  ['<style>a :hover {}</style>', '<style>a :hover {}</style>'],
  ['<p>Tapez <code>a ? b : c</code> puis ?</p>', `<p>Tapez <code>a ? b : c</code> puis${NNBSP}?</p>`],
  ['<pre><code>x : 1</code></pre><p>y : 2</p>', `<pre><code>x : 1</code></pre><p>y${NBSP}: 2</p>`],
  // Already correct text is not touched twice.
  [`<p>Déjà${NNBSP}? 39${NBSP}€</p>`, `<p>Déjà${NNBSP}? 39${NBSP}€</p>`],
];

let checks = 0;
for (const [input, expected] of cases) {
  assert.equal(applyFrenchSpaces(input), expected, `rule: ${input}`);
  checks++;
}

/** Visible text of a page, by a different route than the integration: drop
 * raw-text and literal elements, comments and tags with plain regexes. */
const visibleText = (html) =>
  html
    .replace(/<(script|style|textarea|pre|code|kbd|samp)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(?:[^>"']|"[^"]*"|'[^']*')*>/g, '\n');

if (fs.existsSync('dist')) {
  const pages = frenchPages('dist');
  assert.ok(pages.length > 0, 'no French page in dist/');
  for (const file of pages) {
    const left = visibleText(fs.readFileSync(file, 'utf8')).match(/[^\s] [?!;:»]|« [^\s]|\d [€%]/g) ?? [];
    assert.deepEqual(left, [], `${file}: ordinary spaces left`);
    checks++;
  }
  // The other locales are not French: their text must not be rewritten.
  const en = fs.readFileSync('dist/en/pricing.html', 'utf8');
  assert.ok(!en.includes(`${NNBSP}?`), 'dist/en/pricing.html was rewritten');
  checks++;
}

console.log(`typo-fr: ${checks} checks passed`);
