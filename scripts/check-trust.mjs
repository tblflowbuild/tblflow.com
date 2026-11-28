/**
 * Two rules on the built site.
 * 1. The trust page, the Boldo page, the comparisons, the home page and the
 *    pricing page must not use a claim the company decided not to make:
 *    "conforme" and its translations, "DPO" as a word, "tout en UE". The data
 *    protection address (…@…) is stripped first: it is shown, but never
 *    labelled with the forbidden word, because no officer is appointed.
 * 2. Competitor names appear only on the comparison pages and the Boldo page,
 *    never on the home page, the changelog, the blog, the use cases, the
 *    audience pages or the pricing page.
 *
 * Run: npm run build && node scripts/check-trust.mjs
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'tr', 'uk', 'zh'];
const PAGES = [
  'trust',
  'boldo',
  'index',
  'pricing',
  'compare',
  'compare/airtable',
  'compare/baserow',
  'compare/nocodb',
  'compare/monday',
  'compare/notion',
  'compare/salesforce',
];
const COMPETITOR_NAMES =
  /\b(?:Airtable|Baserow|NocoDB|Notion|Salesforce|Boldo|ClickUp|Smartsheet|Teable)\b|monday\.com/i;
/** Pages and folders where a competitor name is never allowed. */
const NAME_FREE = ['index.html', 'pricing.html', 'trust.html', 'changelog.html', 'blog', 'use-cases', 'for'];
const FORBIDDEN = [
  /\bDPO\b/,
  /\bconforme?s?\b/i,
  /\bkonform\b|\bkonforme?[nrs]?\b|\bKonformität\b/i,
  /\bcompliant\b|\bcompliance\b/i,
  /\bcumpl(?:e|imiento)\b/i,
  /соответству|соответстви[ея]\b|відповідн(?:ість|ий вимог)/i,
  /合规|符合|準拠|(?<!不)適合/,
  /(?:GDPR|KVKK)\s+uyum|uyum\w*\s+(?:GDPR|KVKK)/i,
  /tout en (?:UE|Europe)|all (?:in|within) (?:the )?(?:EU|Europe)|alles in der EU|todo en la UE|tutto in UE/i,
];

const mainOf = (html) => html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;

const strip = (html) =>
  mainOf(html)
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, ' ');

const errors = [];
for (const lang of LOCALES) {
  for (const page of PAGES) {
    const file = `dist/${lang}/${page}.html`;
    if (!existsSync(file)) {
      if (page === 'trust') errors.push(`${file}: page not built`);
      continue;
    }
    const text = strip(readFileSync(file, 'utf8'));
    for (const re of FORBIDDEN) {
      const hit = text.match(re);
      if (hit) errors.push(`${file}: forbidden "${hit[0]}"`);
    }
  }
}
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]
  );
for (const lang of LOCALES) {
  for (const entry of NAME_FREE) {
    const target = `dist/${lang}/${entry}`;
    if (!existsSync(target)) continue;
    const files = entry.endsWith('.html') ? [target] : walk(target).filter((f) => f.endsWith('.html'));
    for (const file of files) {
      const hit = strip(readFileSync(file, 'utf8')).match(COMPETITOR_NAMES);
      if (hit) errors.push(`${file}: competitor name "${hit[0]}" outside the comparison pages`);
    }
  }
}
if (errors.length) {
  console.error(`check:trust failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`trust: ${LOCALES.length} locales free of forbidden claims and stray competitor names`);
