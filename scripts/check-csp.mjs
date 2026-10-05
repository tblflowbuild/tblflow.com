/**
 * Diffs the inline scripts in the built pages against the sha256 allowlist in
 * public/_headers, and fails on any mismatch.
 *
 * The CSP carries no 'unsafe-inline' for script-src, so every inline script is
 * allowed by exact hash. Editing one changes its hash, and a hash that is not
 * re-declared here does not fail the build, does not fail in `astro dev` (no
 * CSP there) and does not fail in preview — it fails only in production, where
 * the browser silently refuses to run that script. The cookie banner is one of
 * them, so the failure mode is "consent stops working and nothing says so".
 *
 * On its first run this caught a hash that had never been declared at all
 * (src/pages/index.astro's language redirect), proving the point.
 *
 * <script type="application/ld+json"> blocks are skipped: they are data, not
 * executed, and browsers do not apply script-src to them.
 *
 * Run: npm run check:csp   (astro build && node scripts/check-csp.mjs)
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []
  );

const found = new Map();
for (const file of walk('dist')) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attrs, body] = m;
    if (attrs.includes('src=') || attrs.includes('ld+json')) continue;
    const hash = 'sha256-' + createHash('sha256').update(body).digest('base64');
    if (!found.has(hash)) found.set(hash, { file: relative('dist', file), head: body.trim().slice(0, 60) });
  }
}

const declared = new Set(
  [...readFileSync('public/_headers', 'utf8').matchAll(/'(sha256-[^']+)'/g)].map((m) => m[1])
);

const missing = [...found.keys()].filter((h) => !declared.has(h));
const stale = [...declared].filter((h) => !found.has(h));

for (const h of missing) {
  const { file, head } = found.get(h);
  console.error(`MANQUANT dans _headers: ${h}\n  vu dans ${file} — ${head}…`);
}
for (const h of stale) console.error(`PÉRIMÉ dans _headers (aucun script ne correspond): ${h}`);

if (missing.length || stale.length) {
  console.error(`\n${missing.length} manquant(s), ${stale.length} périmé(s). Le CSP bloquerait ces scripts en production.`);
  process.exit(1);
}
console.log(`csp: ${found.size} scripts inline, tous déclarés`);
