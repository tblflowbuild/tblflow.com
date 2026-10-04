/**
 * Renders the two brand artefacts that cannot be Astro components: the default
 * Open Graph card (PNG) and the standalone mark used as favicon, apple-touch
 * icon and the `logo` of the Organization in the JSON-LD graph (SVG).
 *
 * PNG for the card, and that is the whole reason this script exists: most social
 * and chat platforms (Facebook, LinkedIn, Slack, X) do not render SVG previews at
 * all, so an `og:image` pointing at an SVG silently produces no card. Sharp
 * rasterises it once at build-authoring time and the PNG is committed, which keeps
 * it off the deploy-time critical path.
 *
 * Both draw the mark from `src/data/logo-mark.mjs`, the same module the Astro
 * component uses — so the favicon cannot quietly fall a redesign behind.
 *
 * Run with: npm run og
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MARK_VIEWBOX, markSvg } from '../src/data/logo-mark.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/images/og-default.png');
const faviconOut = resolve(here, '../public/images/tblflow-logo.svg');

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * The mark, placed on the card. Its own coordinates run -172…172 on both axes
 * (see MARK_VIEWBOX), so it is shifted to its own top-left corner before being
 * scaled — a plain transform rather than a nested <svg>, which rasterisers
 * handle less consistently.
 */
const MARK_SIZE = 150;
const markScale = MARK_SIZE / 344;
const markTransform = `translate(88, 96) scale(${markScale}) translate(172, 145)`;

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

  <g transform="${markTransform}">
${markSvg({ gradientId: 'mark', indent: '    ' })}
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

/* The standalone mark. Fixed gradient id, since nothing else shares the file. */
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}" width="344" height="344">
${markSvg({ gradientId: 'g', indent: '  ' })}
</svg>
`;
await writeFile(faviconOut, favicon);
console.log(`Wrote ${faviconOut} (${(favicon.length / 1024).toFixed(1)} kB)`);
