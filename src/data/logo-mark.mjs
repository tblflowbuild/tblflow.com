/**
 * The TblFlow mark: four isometric boxes, three resting and one floating above.
 *
 * Plain `.mjs` rather than `.ts` so the one definition can serve all three
 * places the mark appears — the Astro component, the standalone favicon, and
 * the Open Graph card, the last of which is rendered by a Node script that has
 * no TypeScript loader. Three hand-maintained copies of twelve polygons is
 * exactly the kind of thing that drifts: the favicon ends up a version behind
 * and nobody notices, because nobody looks at a 16px square on purpose.
 *
 * Geometry. Every box is the same shape translated, so it is generated rather
 * than transcribed: `W` is the half-width, `R` the rise from the top vertex to
 * the two side vertices, `H` the height of the vertical faces. Faces are listed
 * left, right, top and drawn in that order, which is also back-to-front.
 */

/** Half-width, rise of the top face, height of the side faces. */
const W = 74.5;
const R = 43;
const H = 42;

/* 86.6 - 74.5 is 12.099999999999994 in binary floating point, which would be
   written into the favicon and into every page's header. One decimal is more
   precision than a 344-unit box can show. */
const n = (v) => +v.toFixed(1);

/** One box, from the x of its centre and the y of its topmost vertex. */
const box = (cx, cy) => {
  const [l, r, t, m, b2] = [n(cx - W), n(cx + W), n(cy), n(cy + R), n(cy + 2 * R)];
  const [sideTop, sideBottom] = [n(cy + R + H), n(cy + 2 * R + H)];
  return {
    left: `${l},${m} ${cx},${b2} ${cx},${sideBottom} ${l},${sideTop}`,
    right: `${r},${m} ${cx},${b2} ${cx},${sideBottom} ${r},${sideTop}`,
    top: `${cx},${t} ${r},${m} ${cx},${b2} ${l},${m}`,
  };
};

/**
 * Square, and centred on the art rather than on the origin: the boxes span
 * x −161.1…161.1 and y −139…193, so the square is sized on the taller axis and
 * offset to put 6 units of air above and below. A non-square viewBox would be
 * squashed by the component, which passes one `size` to both width and height,
 * and would sit off-centre as a favicon.
 */
export const MARK_VIEWBOX = '-172 -145 344 344';

/** The gradient on the floating box's top face — the one lit surface. */
export const MARK_GRADIENT = [
  { offset: '0', color: '#7c3aed' },
  { offset: '0.45', color: '#4f46e5' },
  { offset: '0.85', color: '#0ea5e9' },
  { offset: '1', color: '#06b6d4' },
];

/**
 * Back to front. The three resting boxes first, the floating one last, which
 * is also the order the staggered entrance animation reads best in: the base
 * assembles, then the top block lands on it.
 */
export const MARK_BOXES = [
  { name: 'right', points: box(86.6, 15), fill: { left: '#241bbd', right: '#191283', top: '#4f46e5' } },
  { name: 'left', points: box(-86.6, 15), fill: { left: '#0a77a8', right: '#075274', top: '#0ea5e9' } },
  { name: 'front', points: box(0, 65), fill: { left: '#048399', right: '#035b6a', top: '#06b6d4' } },
  /* `top: null` means "use the gradient" — the only face that is not flat. */
  { name: 'floating', points: box(0, -139), fill: { left: '#5312c3', right: '#3a0c87', top: null } },
];

/**
 * The floating box on its own, for the browser-tab favicon.
 *
 * The full mark does not survive 16px: four boxes of three faces each, with
 * gaps between them, come out as a smudge — rendered and compared at 16, 20 and
 * 32px before choosing this. The floating box alone keeps a readable silhouette
 * and the one gradient face, so the tab still looks like TblFlow.
 *
 * Cropped tight rather than centred in the full mark's square: at 16px every
 * unit of padding is a pixel of ink given away. The box spans 149 × 128, so the
 * square is sized on the wider axis with three units of air either side.
 */
export const ICON_BOXES = MARK_BOXES.filter((b) => b.name === 'floating');
export const ICON_VIEWBOX = '-77.5 -152.5 155 155';

/** The mark as standalone SVG markup, for consumers outside Astro. */
export const markSvg = ({ gradientId = 'g', indent = '', boxes = MARK_BOXES } = {}) =>
  [
    `${indent}<defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="1">`,
    ...MARK_GRADIENT.map((s) => `${indent}  <stop offset="${s.offset}" stop-color="${s.color}"/>`),
    `${indent}</linearGradient></defs>`,
    ...boxes.flatMap((b) =>
      ['left', 'right', 'top'].map(
        (face) =>
          `${indent}<polygon points="${b.points[face]}" fill="${
            b.fill[face] ?? `url(#${gradientId})`
          }"/>`
      )
    ),
  ].join('\n');
