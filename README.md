# tblflow.com

Marketing site, blog, docs and changelog for **tblflow.com** — Astro, 10
languages, deployed as a Cloudflare Worker (static assets). Fully static: no
adapter, no server runtime.

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
| `npm run deploy` | `astro build && wrangler deploy` |
| `npm run og` | Regenerate `public/images/og-default.png` |

## Structure

```
site/
├── astro.config.mjs        # i18n routing, sitemap, Tailwind
├── wrangler.jsonc          # Cloudflare Worker: static assets, observability
├── .github/workflows/deploy.yml  # build + wrangler deploy on push to main
├── src/
│   ├── config.ts           # SITE_URL, LOCALES, HREFLANG, LOCALE_NAME/FLAG, t9() fallback helper
│   ├── content.config.ts   # blog / docs / changelog collection schemas (Zod)
│   ├── i18n/
│   │   ├── ui.ts           # every UI chrome string, all 10 locales, typed
│   │   ├── utils.ts        # locale paths, hreflang, dates
│   │   └── routes.ts       # cross-locale slug pairing for blog/docs (translationKey)
│   ├── data/
│   │   ├── pricing.ts      # tiers + quota grid
│   │   ├── content.ts      # surfaces, differentiators, view types, comparison table
│   │   ├── competitors.ts  # per-competitor comparison page content
│   │   ├── faq.ts          # Q&A — feeds the page, FAQPage schema, and llms-full.txt
│   │   └── legal.ts        # mentions légales / privacy / cookies / terms content
│   ├── components/
│   │   ├── BaseHead.astro       # canonical, hreflang, OG, Twitter, theme FOUC guard, Consent Mode default
│   │   ├── JsonLd.astro         # one connected @graph of structured data
│   │   ├── CookieConsent.astro  # consent banner — gates GA4, never Cloudflare Web Analytics
│   │   ├── LangSwitcher.astro   # flag dropdown, all 10 locales
│   │   ├── Faq.astro            # search + category filter, progressive enhancement
│   │   └── …
│   ├── layouts/Base.astro
│   ├── content/
│   │   ├── blog/{10 locale codes}/*.md
│   │   ├── docs/{10 locale codes}/*.md
│   │   └── changelog/{10 locale codes}/*.md
│   └── pages/
│       ├── index.astro           # `/` → locale redirect (noindex)
│       ├── 404.astro
│       ├── llms.txt.ts           # GEO index
│       ├── llms-full.txt.ts      # GEO corpus
│       └── [lang]/
│           ├── index.astro                    # landing page
│           ├── pricing.astro
│           ├── changelog.astro                # one feed page per locale, not one page per entry
│           ├── legal.astro                    # mentions légales — French text on every locale route
│           ├── privacy.astro
│           ├── cookies.astro
│           ├── terms.astro                    # CGVU — French text on every locale route
│           ├── rss.xml.ts
│           ├── blog/{index,[...slug]}.astro
│           ├── docs/{index,[...slug]}.astro
│           └── compare/{index,[competitor]}.astro   # hub + one page per competitor
└── public/
    ├── _headers            # CSP + cache policy (Cloudflare)
    ├── _redirects          # `/` → `/fr`, aliases (Cloudflare)
    └── robots.txt
```

## Languages

10 locales: `de`, `en`, `es`, `fr`, `it`, `ja`, `ru`, `tr`, `uk`, `zh`. Routing is
symmetric (`/fr/…`, `/de/…`, …), a flag dropdown switches between them, and each
page's `hreflang` cluster is generated from the same locale list — see
`src/config.ts` and `astro.config.mjs`.

Two different translation states coexist by design:

- **UI chrome** (`src/i18n/ui.ts`) — nav, buttons, labels — is genuinely
  translated into all 10 languages. A missing key is a **build-time TypeScript
  error** (`satisfies Record<Locale, …>`), not a silent fallback.
- **Long-form content** (pricing copy, FAQ answers, competitor pages, blog
  posts, docs, legal pages) is written in French and English by hand; the other
  8 locales fall back to the English text via the `t9()` helper in
  `src/config.ts`, so a page renders correctly in every locale even before
  it's translated. Every `t9({ fr, en })` call is a marked placeholder —
  grep for it to find what's still pending real translation.

The legal notice (`legal.astro`) and terms of service (`terms.astro`) are the
one exception that stays French on every locale route on purpose: both are
French-law documents, and a machine-fallback English paraphrase of a contract
has no legal standing — better to say so explicitly than to imply it does.

## Content

### Adding a blog post or docs page

Create a markdown file under the locale directory. **The directory is the
locale** — there is no `lang` frontmatter field, so a page cannot claim a
language that disagrees with its URL.

```
src/content/blog/fr/mon-article.md   →  /fr/blog/mon-article
src/content/docs/en/my-page.md       →  /en/docs/my-page
```

Frontmatter is validated by `src/content.config.ts` — the build fails on a
mismatch. A post/page in one locale does not require a translation in the
others: `src/i18n/routes.ts` pairs slugs across locales via a `translationKey`
field when both exist, and falls back to that collection's index page (not a
broken link) for a locale with no translation yet.

### Adding a changelog entry

Same locale-in-the-path rule, under `src/content/changelog/`. Unlike blog/docs,
entries render inline on one feed page per locale (`/{lang}/changelog`) rather
than getting their own URL — sorted by `date`, no `order` field needed.

### Editing pricing, features, comparisons or the FAQ

Typed data modules, not page markup:

- **Pricing** — `src/data/pricing.ts`.
- **Features / comparison table / view types** — `src/data/content.ts`.
- **Per-competitor pages** — `src/data/competitors.ts`.
- **FAQ** — `src/data/faq.ts`. One entry feeds the rendered accordion, the
  `FAQPage` structured data, and `llms-full.txt` — they cannot drift apart.
- **Legal notice / privacy / cookies / terms** — `src/data/legal.ts`. Drafted
  content, not legal advice — has not been reviewed by a lawyer.

### Adding a locale

1. Add the code to `LOCALES` and `HREFLANG` (and `LOCALE_NAME`/`LOCALE_FLAG`) in
   `src/config.ts`.
2. Add it to `i18n.locales` and the sitemap `i18n.locales` map in
   `astro.config.mjs` (kept in sync by hand — Astro config can't import project
   source at that build stage).
3. Everything using `t9()` picks up the new locale automatically via the
   English fallback; `src/i18n/ui.ts` needs the new locale's block added by
   hand (the `satisfies` constraint will point at exactly what's missing).

## Cookie consent and analytics

Two trackers, handled differently:

- **Cloudflare Web Analytics** — cookieless, auto-injected at the edge via the
  Cloudflare dashboard toggle. No code here, no consent required.
- **Google Analytics 4** — sets real cookies, so `gtag.js` is never fetched
  until the visitor explicitly accepts in the cookie banner
  (`CookieConsent.astro`). `BaseHead.astro` seeds a Google Consent Mode v2
  default (`denied`, local `dataLayer` bookkeeping only, no network request)
  on every page load so Google's own tooling recognizes the signal even before
  a visitor has chosen.

Consent is stored in `localStorage` (not a cookie) with a timestamp, and
treated as expired after 6 months per CNIL guidance — the banner re-prompts
rather than keeping a stale choice forever. A "Manage cookies" link in the
footer reopens the panel pre-filled with the current choice.

## SEO

| Concern | Where it lives |
|---|---|
| Canonical URLs | `BaseHead.astro`, absolute, one per page |
| `hreflang` | `BaseHead.astro` + sitemap `xhtml:link` alternates, all 10 locales plus `x-default` and a self-referencing alternate |
| Structured data | `JsonLd.astro` — one `@graph` with stable `@id`s (Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication + Offers, FAQPage, BlogPosting) |
| Sitemap | `@astrojs/sitemap`; `/` and `/404` are filtered out |
| `robots.txt` | `public/robots.txt` |
| RSS | one feed per locale at `/{lang}/rss.xml` |
| Open Graph | `og-default.png`, 1200×630 — **PNG, not SVG**, because most platforms render no card at all for an SVG `og:image` |

URL shape is `trailingSlash: 'never'` + `build.format: 'file'`, so each page has
exactly one valid URL (`/fr/pricing`, not also `/fr/pricing/`). The Worker's
static assets binding serves `fr/pricing.html` at that extension-less path —
note that `Astro.url.pathname` still carries the literal `.html` suffix
*during the build*, which is why `pathWithoutLocale()` in `src/i18n/utils.ts`
strips it before any locale/slug lookup.

## GEO (generative engine optimization)

Being cited by an AI answer is a distinct channel from ranking in a result
list, and it rewards different things. What this site does about it:

- **`/llms.txt`** — a markdown index of what TblFlow is and where the
  authoritative pages are, per the [llmstxt.org](https://llmstxt.org)
  convention.
- **`/llms-full.txt`** — the whole site as one plain-text document, so an
  engine can ingest one file instead of stitching a dozen HTML pages together.
  Both are **generated from the same data modules the pages render**, so they
  cannot describe a version of the site that no longer exists.
- **Answer-shaped FAQ copy.** Each answer repeats its subject ("TblFlow…"),
  states the fact in the first sentence, and avoids "see above" — an answer
  that only makes sense in page order gets quoted wrongly or not at all.
- **Real tables with `scope` attributes** for the comparison and quota grids,
  each ✓/✗ glyph paired with a text label and the glyph itself `aria-hidden`.
  Icon-only cells transcribe as nothing.
- **Concrete, quotable figures** rather than superlatives ("28 field types",
  "$29 per month", "6 view types"). Vague claims are what summarisers drop.
- **Answer-engine crawlers explicitly allowed** in `robots.txt` (GPTBot,
  ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended…).

No engine is obliged to read any of this. It is cheap and machine-readable, and
it removes the guesswork for the ones that do.

## UI, animation and accessibility

- **No third-party UI framework, no bundled analytics SDK.** The only scripts
  the site ships itself are small, hand-written, and inlined: theme FOUC
  guard, theme-toggle reveal, FAQ filter, cookie-consent banner, Consent Mode
  default. GA4's `gtag.js` is the one external script, and only after consent.
- **Every animation is gated on `prefers-reduced-motion`.** A visitor who asked
  their OS to reduce motion gets the finished state immediately, not a slower
  version of the same movement.
- **Scroll-driven reveals** use `animation-timeline: view()` inside an
  `@supports` guard. The guard is load-bearing: without it, browsers lacking
  support would hold elements at `opacity: 0` permanently.
- **The mobile menu, language switcher and cookie-manage panel are native
  `<details>`/`<summary>` disclosures**, so keyboard and screen-reader
  behaviour is correct without extra script.
- **The logo is inlined SVG** so its four tiles can animate independently.
- Skip link, visible focus ring on `:focus-visible`, `lang` on locale-switcher
  labels so screen readers pronounce each language's name correctly inside a
  page in a different one.
- Wide tables (comparisons, cookie policy) scroll inside their own
  `overflow-x-auto` container; the page body never scrolls sideways.

Light and dark themes are both defined on `:root`, with only the *roles*
swapped under `prefers-color-scheme: dark` — no colour has its single
definition inside a media block.

The AI gradient (violet → indigo → sky → cyan) is reserved for AI-related
surfaces and wayfinding; general accents reuse its indigo step rather than
introducing a second "brand" colour.

## Content Security Policy

`public/_headers` ships a strict CSP: `default-src 'self'`, no
`'unsafe-inline'` on `script-src`/`script-src-elem`. Two consequences worth
knowing before editing a component with a `<script>` tag:

- Astro **inlines** this site's small scripts directly into the HTML rather
  than extracting them to `/_astro/*.js`. Each is allowed by an exact sha256
  hash instead of `'unsafe-inline'`. **Changing any inlined script's source
  changes its hash** — rebuild, recompute
  (`shasum -a 256 <<< '<script content>' | ...` or read the hash the browser
  console reports as blocked), and update `_headers`, or the deployed page
  silently loses that script.
- Two external hosts are allowlisted by name: `static.cloudflareinsights.com`
  (Cloudflare Web Analytics) and `googletagmanager.com` /
  `google-analytics.com` (GA4, fetched only post-consent).

## Deploying to Cloudflare Workers

Static output, no adapter — served through a Worker's static assets binding.
`wrangler.jsonc` at the repo root is the source of truth for the deployment
(name, assets directory, observability).

**Automatic**: `.github/workflows/deploy.yml` builds and deploys on every push
to `main`, given two repository secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token with "Edit Cloudflare Workers" permission |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

**Manual**:

```bash
npm run deploy
```

Custom domain setup (one-time, via the dashboard): **Workers & Pages → this
Worker → Settings → Domains & Routes** → add `tblflow.com` and `www.tblflow.com`
as custom domains. `public/_redirects` and `public/_headers` are read from the
built `dist/` directory by the static assets binding — nothing further to
configure for those.

## Relationship to the app repo

This site is standalone: it shares no build tooling, no package and no
TypeScript project reference with the TblFlow application.

Two things are copied rather than shared, and need a manual re-sync if they
change in the app:

- **The logo**, `apps/nextjs-app/public/images/tblflow-logo.svg` in the app
  repo → `public/images/tblflow-logo.svg` here. `src/components/Logo.astro`
  also inlines the same four-tile geometry, so it needs the same update.
- **Pricing figures**, which come from `.planning/SALES-POSITIONING-2026.md`
  in the app repo and live in `src/data/pricing.ts` here.

## Not built yet

- **A git-backed CMS (Decap).** The content collections are markdown-in-repo
  for now; their schemas in `content.config.ts` are already the contract a CMS
  would need to satisfy.
- **Real translations for 8 of the 10 locales**, everywhere `t9()` is used —
  see the Languages section above.
- **A separate DPA** (data processing agreement), referenced from
  `terms.astro` but not yet drafted as its own document.
- **Legal review.** `legal.astro`, `privacy.astro`, `cookies.astro` and
  `terms.astro` are a solid first draft, not legal advice — have them reviewed
  before relying on them.
- **Screenshots and product imagery.** The landing page is typography,
  animated diagrams and layout only; there is no product screenshot yet.
