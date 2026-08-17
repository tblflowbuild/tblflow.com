/**
 * Renders the default Open Graph image to PNG.
 *
 * PNG, not SVG, and that is the whole reason this script exists: most social and
 * chat platforms (Facebook, LinkedIn, Slack, X) do not render SVG previews at all,
 * so an `og:image` pointing at an SVG silently produces no card. Sharp rasterises
 * it once at build-authoring time and the PNG is committed, which keeps it off the
 * deploy-time critical path.
 *
 * Run with: npm run og
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/images/og-default.png');

const WIDTH = 1200;
const HEIGHT = 630;

/** The 2×2 mark, scaled and positioned for the card. */
const tile = (x, y, fill) =>
  `<rect x="${x}" y="${y}" width="66" height="66" rx="17" fill="${fill}"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1020"/>
      <stop offset="55%" stop-color="#141a35"/>
      <stop offset="100%" stop-color="#0a1626"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="35%" stop-color="#4f46e5"/>
      <stop offset="72%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <circle cx="985" cy="150" r="330" fill="url(#glow)"/>

  <g transform="translate(88, 96)">
    ${tile(0, 0, '#8b5cf6')}
    ${tile(78, 0, '#4f46e5')}
    ${tile(0, 78, '#0ea5e9')}
    ${tile(78, 78, '#06b6d4')}
  </g>

  <text x="88" y="330" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-2">TblFlow</text>

  <text x="88" y="404" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="36" font-weight="500" fill="#c3cbd9">The modern database UI for teams</text>

  <text x="88" y="462" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="27" fill="#8c97a8">Real-time collaboration · Autonomous AI agents · Workflows</text>

  <rect x="88" y="524" width="228" height="6" rx="3" fill="url(#accent)"/>

  <text x="88" y="576" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="24" fill="#6f7b8d">tblflow.com</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(out, png);
console.log(`Wrote ${out} (${(png.length / 1024).toFixed(1)} kB, ${WIDTH}×${HEIGHT})`);
