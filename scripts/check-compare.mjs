/**
 * Fails when a comparison page is not backed by a recent, sourced check.
 *
 * A comparison states what competitors do today; it goes stale. Each entry of
 * src/data/compare-verification.json needs a `verifiedAt` (YYYY-MM-DD, not in
 * the future, at most `maxAgeDays` old) and an https `source`. When dist/
 * exists, every built compare page must also carry the date in its JSON-LD
 * `dateModified`.
 *
 * Run: node scripts/check-compare.mjs   (after `astro build` for the page check)
 */
import { existsSync, readFileSync } from 'node:fs';

const DAY_MS = 86_400_000;
const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'tr', 'uk', 'zh'];
const { maxAgeDays, entries } = JSON.parse(readFileSync('src/data/compare-verification.json', 'utf8'));
const today = Date.now();
const errors = [];

for (const [slug, { verifiedAt, source, page }] of Object.entries(entries)) {
  const built = page ?? `compare/${slug}`;
  const time = Date.parse(`${verifiedAt}T00:00:00Z`);
  if (!verifiedAt || Number.isNaN(time)) {
    errors.push(`${slug}: verifiedAt missing or not a YYYY-MM-DD date`);
  } else if (time > today + DAY_MS) {
    errors.push(`${slug}: verifiedAt ${verifiedAt} is in the future`);
  } else if ((today - time) / DAY_MS > maxAgeDays) {
    errors.push(`${slug}: verifiedAt ${verifiedAt} is older than ${maxAgeDays} days`);
  }
  if (!/^https:\/\//.test(source ?? '')) errors.push(`${slug}: source must be an https URL`);

  if (!existsSync('dist')) continue;
  for (const lang of LOCALES) {
    const file = `dist/${lang}/${built}.html`;
    if (!existsSync(file)) errors.push(`${file}: page not built`);
    else if (verifiedAt && !readFileSync(file, 'utf8').includes(`"dateModified":"${verifiedAt}T`)) {
      errors.push(`${file}: dateModified ${verifiedAt} missing from JSON-LD`);
    }
  }
}

if (errors.length) {
  console.error(`check:compare failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`compare: ${Object.keys(entries).length} comparisons verified within ${maxAgeDays} days`);
