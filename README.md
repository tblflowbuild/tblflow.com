# tblflow.com

Marketing site and blog for **tblflow.com** — Astro, bilingual FR/EN, deployed on
Cloudflare Pages. Fully static, and it ships **zero external JavaScript files**
(the only script is a ~700-byte inlined FAQ filter).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run check` | `astro check` — types and template diagnostics |
| `npm run og` | Regenerate `public/images/og-default.png` |

## Structure

```
site/
├── astro.config.mjs        # i18n routing, sitemap, Tailwind
├── src/
│   ├── config.ts           # SITE_URL, locales, org identity — single source of truth
│   ├── content.config.ts   # blog collection schema (Zod)
│   ├── i18n/
│   │   ├── ui.ts           # every UI string, both locales, typed
│   │   └── utils.ts        # locale paths, hreflang, dates, reading time
│   ├── data/
│   │   ├── pricing.ts      # tiers + quota grid
│   │   ├── content.ts      # features, views, competitive comparison
│   │   └── faq.ts          # Q&A — feeds both the page and FAQPage schema
│   ├── components/
│   │   ├── BaseHead.astro  # canonical, hreflang, OG, Twitter
│   │   ├── JsonLd.astro    # one connected @graph of structured data
│   │   ├── Faq.astro       # search + category filter, progressive enhancement
│   │   └── …
│   ├── layouts/Base.astro
│   ├── content/blog/{fr,en}/*.md
│   └── pages/
│       ├── index.astro           # `/` → locale redirect (noindex)
│       ├── 404.astro             # bilingual
│       ├── llms.txt.ts           # GEO index
│       ├── llms-full.txt.ts      # GEO corpus
│       └── [lang]/
│           ├── index.astro       # landing page
│           ├── pricing.astro
│           ├── rss.xml.ts
│           └── blog/{index,[...slug]}.astro
└── public/
    ├── _headers            # CSP + cache policy (Cloudflare)
    ├── _redirects          # `/` → `/fr`, aliases (Cloudflare)
    └── robots.txt
```

## Content

### Adding a blog post

Create a markdown file under the locale directory. **The directory is the locale** —
there is no `lang` frontmatter field, so a post cannot claim a language that
disagrees with its URL.

```
src/content/blog/fr/mon-article.md   →  /fr/blog/mon-article
src/content/blog/en/my-post.md       →  /en/blog/my-post
```

Frontmatter (validated by `src/content.config.ts` — the build fails on a mismatch):

```yaml
---
title: "Titre, 120 caractères maximum"
description: "Entre 50 et 300 caractères. Sert de meta description et d'extrait."
publishedAt: 2026-08-17
updatedAt: 2026-08-20      # optionnel
author: "TblFlow"          # défaut : TblFlow
tags: ["postgresql"]       # optionnel
image: "/images/post.png"  # optionnel, racine-relatif
draft: false               # true = exclu des listes, du RSS et du sitemap
featured: false
---
```

A post in one locale does **not** require a translation in the other. The two blog
indexes are independent.

### Editing pricing, features or the FAQ

These are typed data modules, not page markup:

- **Pricing** — `src/data/pricing.ts`. Figures are transcribed from
  `.planning/SALES-POSITIONING-2026.md` in the main repo. Change them there first,
  then here. `JsonLd.astro` emits matching `Offer` nodes, and `llms.txt` reads the
  same module, so a price only has to be changed once.
- **Features / comparison** — `src/data/content.ts`.
- **FAQ** — `src/data/faq.ts`. One entry feeds the rendered accordion, the
  `FAQPage` structured data and `llms-full.txt` — they cannot drift apart.

### Adding a locale

1. Add the code to `LOCALES` and `HREFLANG` in `src/config.ts`.
2. Add it to `i18n.locales` and the sitemap `i18n.locales` map in `astro.config.mjs`.
3. Add the full string set to `src/i18n/ui.ts` — the `satisfies Record<Locale, …>`
   constraint turns a missing translation into a **type error**, not a silent
   fallback.
4. Create `src/content/blog/<code>/`.

## SEO

| Concern | Where it lives |
|---|---|
| Canonical URLs | `BaseHead.astro`, absolute, one per page |
| `hreflang` | `BaseHead.astro` + sitemap `xhtml:link` alternates, including `x-default` and a self-referencing alternate |
| Structured data | `JsonLd.astro` — one `@graph` with stable `@id`s (Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication + Offers, FAQPage, BlogPosting) |
| Sitemap | `@astrojs/sitemap`; `/` and `/404` are filtered out |
| `robots.txt` | `public/robots.txt` |
| RSS | one feed per locale at `/{lang}/rss.xml` |
| Open Graph | `og-default.png`, 1200×630 — **PNG, not SVG**, because most platforms render no card at all for an SVG `og:image` |

URL shape is `trailingSlash: 'never'` + `build.format: 'file'`, so each page has
exactly one valid URL (`/fr/pricing`, not also `/fr/pricing/`). Cloudflare Pages
serves `fr/pricing.html` at that extension-less path.

## GEO (generative engine optimization)

Being cited by an AI answer is a distinct channel from ranking in a result list,
and it rewards different things. What this site does about it:

- **`/llms.txt`** — a markdown index of what TblFlow is and where the
  authoritative pages are, per the [llmstxt.org](https://llmstxt.org) convention.
- **`/llms-full.txt`** — the whole site as one plain-text document, so an engine
  can ingest one file instead of stitching a dozen HTML pages together.
  Both are **generated from the same data modules the pages render**, so they
  cannot describe a version of the site that no longer exists.
- **Answer-shaped FAQ copy.** Each answer repeats its subject ("TblFlow…"), states
  the fact in the first sentence, and avoids "see above" — an answer that only
  makes sense in page order gets quoted wrongly or not at all.
- **Real tables with `scope` attributes** for the comparison and quota grids, each
  ✓/✗ glyph paired with a text label and the glyph itself `aria-hidden`. Icon-only
  cells transcribe as nothing. Comparison tables are among the structures answer
  engines quote most readily — but only when the markup states the relationships
  instead of implying them visually.
- **Concrete, quotable figures** rather than superlatives ("28 field types", "$29
  per month", "7 view types"). Vague claims are what summarisers drop.
- **Answer-engine crawlers explicitly allowed** in `robots.txt` (GPTBot,
  ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended…).

No engine is obliged to read any of this. It is cheap and machine-readable, and it
removes the guesswork for the ones that do.

## UI, animation and accessibility

- **Zero external JavaScript.** All motion is CSS. The FAQ's search/filter is the
  only script, inlined at ~700 bytes.
- **Every animation is gated on `prefers-reduced-motion`.** A visitor who asked
  their OS to reduce motion gets the finished state immediately, not a slower
  version of the same movement.
- **Scroll-driven reveals** use `animation-timeline: view()` inside an `@supports`
  guard. The guard is load-bearing: without it, browsers lacking support would
  hold elements at `opacity: 0` permanently — content invisible, not merely
  un-animated.
- **The mobile menu is a native `<details>`/`<summary>` disclosure**, so keyboard
  and screen-reader behaviour is correct without a line of script.
- **The logo is inlined SVG** so its four tiles can animate independently (a
  staggered entrance, in the hero only — a mark that re-animates on every
  navigation stops reading as delight).
- Skip link, visible focus ring on `:focus-visible`, `lang` on locale-switcher
  labels so screen readers pronounce "Français" correctly inside an English page.
- Wide tables scroll inside their own `overflow-x-auto` container; the page body
  never scrolls sideways.

Light and dark themes are both defined on `:root`, with only the *roles* swapped
under `prefers-color-scheme: dark` — no colour has its single definition inside a
media block.

The AI gradient (violet → indigo → sky → cyan) is carried over verbatim from the
app's `global.css`. Per the app's own design-system note it is reserved for
AI-related surfaces: it is a wayfinding signal, and spending it on generic CTAs is
what makes it stop meaning anything.

## Deploying to Cloudflare Pages

Static output, no adapter, no server runtime.

**Dashboard → Workers & Pages → Create → Pages → Connect to Git**, then:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave empty — the site is the repo root)* |
| Node version | `22` (set `NODE_VERSION=22` in the environment variables) |

No secrets or environment variables are required — the build reads nothing from
the environment.

Then, under the Pages project:

1. **Custom domains** → add `tblflow.com` and `www.tblflow.com`. Certificates are
   Cloudflare-managed and automatic.
2. `public/_redirects` and `public/_headers` are picked up from the build output —
   nothing to configure in the dashboard for those.
3. Per-PR preview deployments are on by default.

`public/_headers` sets a strict CSP (`default-src 'self'`, no third-party origins),
HSTS, `X-Frame-Options: DENY` and immutable caching for `/_astro/*`. `style-src`
carries `'unsafe-inline'` because Astro emits scoped component styles inline;
`script-src` deliberately does not.

## Relationship to the app repo

This site is standalone: it shares no build tooling, no package and no TypeScript
project reference with the TblFlow application. It was originally scaffolded inside
the app monorepo and extracted here with `git subtree split`, so the commit history
of the site's own files is preserved.

Two things are copied rather than shared, and need a manual re-sync if they change
in the app:

- **The logo**, `apps/nextjs-app/public/images/tblflow-logo.svg` in the app repo →
  `public/images/tblflow-logo.svg` here. `src/components/Logo.astro` also inlines
  the same four-tile geometry, so it needs the same update.
- **Pricing figures**, which come from `.planning/SALES-POSITIONING-2026.md` in the
  app repo and live in `src/data/pricing.ts` here. Change them there first.

## Not built yet

Deliberately out of scope for this pass, and tracked in
`.planning/SUBPLAN-marketing-site.md` in the main repo:

- **`help.tblflow.com`** — the sub-plan recommends one Astro codebase deployed as
  two Cloudflare Pages projects, gated on confirming actual doc volume first.
- **A git-backed CMS (Decap).** The blog is markdown-in-repo for now. The
  frontmatter schema in `content.config.ts` is already the contract a CMS would
  need to satisfy, so adding one later requires no content migration.
- **`/templates`** — referenced in the OSS README's nav; currently redirected to
  the home page rather than left to 404.
- **Screenshots and product imagery.** The landing page is typography and layout
  only; there is no product screenshot yet.
