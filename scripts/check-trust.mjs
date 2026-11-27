/**
 * Fails when a built trust or Boldo page uses a claim the company decided not
 * to make: "conforme" and its translations, "DPO" as a word, "tout en UE".
 * The data protection address (…@…) is stripped first: it is shown, but never
 * labelled with the forbidden word, because no officer is appointed.
 *
 * Run: npm run build && node scripts/check-trust.mjs
 */
import { existsSync, readFileSync } from 'node:fs';

const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'tr', 'uk', 'zh'];
const PAGES = ['trust', 'boldo'];
const FORBIDDEN = [
  /\bDPO\b/,
  /\bconforme?s?\b/i,
  /\bkonform\b|\bkonforme?[nrs]?\b|\bKonformität\b/i,
  /\bcompliant\b|\bcompliance\b/i,
  /\bcumpl(?:e|imiento)\b/i,
  /соответству|соответстви[ея]\b|відповідн(?:ість|ий вимог)/i,
  /合规|符合|準拠|(?<!不)適合/,
  /\buyumlu\b/i,
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
if (errors.length) {
  console.error(`check:trust failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`trust: ${LOCALES.length} locales free of forbidden claims`);
