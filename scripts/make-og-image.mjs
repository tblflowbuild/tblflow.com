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
import { ICON_BOXES, ICON_VIEWBOX, MARK_VIEWBOX, markSvg } from '../src/data/logo-mark.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/images/og-default.png');
const markOut = resolve(here, '../public/images/tblflow-logo.svg');
const iconOut = resolve(here, '../public/images/tblflow-icon.svg');
const appleOut = resolve(here, '../public/images/apple-touch-icon.png');

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

/* Fixed gradient ids: nothing else shares these files. */
const file = (viewBox, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="344" height="344">\n${body}\n</svg>\n`;

/* The full mark: the Organization `logo` in the JSON-LD graph, and the
   apple-touch icon, which is rendered at 180px where the full mark reads. */
const mark = file(MARK_VIEWBOX, markSvg({ gradientId: 'g', indent: '  ' }));
await writeFile(markOut, mark);
console.log(`Wrote ${markOut} (${(mark.length / 1024).toFixed(1)} kB)`);

/* The browser-tab favicon: the floating box alone, which is the only version
   that survives 16px. See ICON_BOXES. */
const icon = file(ICON_VIEWBOX, markSvg({ gradientId: 'g', indent: '  ', boxes: ICON_BOXES }));
await writeFile(iconOut, icon);
console.log(`Wrote ${iconOut} (${(icon.length / 1024).toFixed(1)} kB)`);

/*
 * The apple-touch icon, as PNG and not SVG: iOS ignores an SVG here, so the
 * previous `rel="apple-touch-icon"` pointing at the mark's SVG silently did
 * nothing and the home screen fell back to a screenshot of the page.
 *
 * Opaque, because iOS does not honour transparency — it composites onto black,
 * which would have turned the dark faces of the mark into a hole. The fill is
 * the same #0b1020 the Open Graph card starts on, so the two generated raster
 * artefacts read as one set.
 *
 * The mark takes 65% of the square. iOS masks the icon with a rounded
 * superellipse and clips roughly the outer eighth, so a full-bleed mark would
 * lose its corners.
 */
const APPLE = 180;
const APPLE_MARK = Math.round(APPLE * 0.65);
const appleInset = (APPLE - APPLE_MARK) / 2;
const appleScale = APPLE_MARK / 344;
const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${APPLE}" height="${APPLE}" viewBox="0 0 ${APPLE} ${APPLE}">
  <rect width="${APPLE}" height="${APPLE}" fill="#0b1020"/>
  <g transform="translate(${appleInset}, ${appleInset}) scale(${appleScale}) translate(172, 145)">
${markSvg({ gradientId: 'apple', indent: '    ' })}
  </g>
</svg>`;
const applePng = await sharp(Buffer.from(appleSvg), { density: 600 })
  .resize(APPLE, APPLE)
  /* Flattened to three channels: the rect already covers every pixel, so the
     alpha channel carried nothing but the chance of a renderer treating it as
     meaningful. */
  .flatten({ background: '#0b1020' })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(appleOut, applePng);
console.log(`Wrote ${appleOut} (${(applePng.length / 1024).toFixed(1)} kB, ${APPLE}×${APPLE})`);
