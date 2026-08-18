// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://tblflow.com';

export default defineConfig({
  site: SITE_URL,
  // Fully static: Cloudflare Pages serves the output directly from its CDN, so
  // there is no adapter and no server runtime to pay for.
  output: 'static',
  trailingSlash: 'never',

  // Astro's built-in i18n. `prefixDefaultLocale: true` keeps every locale
  // symmetric (/fr/... and /en/...) instead of leaving French at the bare root:
  // asymmetric locale roots make hreflang and canonical URLs much easier to get
  // subtly wrong, and cost nothing here since `/` redirects (see _redirects).
  i18n: {
    defaultLocale: 'fr',
    locales: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'tr', 'uk', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      // Tell search engines every locale is a translation of the others. This
      // emits xhtml:link alternates inside the sitemap, the machine-readable
      // half of the hreflang signal (the other half is in <head>). Kept in
      // sync with `HREFLANG` in `src/config.ts` by hand — Astro config files
      // cannot import project source at this stage of the build.
      i18n: {
        defaultLocale: 'fr',
        locales: {
          de: 'de',
          en: 'en',
          es: 'es',
          fr: 'fr-FR',
          it: 'it',
          ja: 'ja',
          ru: 'ru',
          tr: 'tr',
          uk: 'uk',
          zh: 'zh-Hans',
        },
      },
      // Excludes the 404, and the bare root — `/` is a noindex redirect stub with
      // no content of its own. Leaving it in listed a noindex URL as canonical and
      // gave it a bogus hreflang cluster alongside the real /fr and /en entries.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return path !== '' && !path.includes('/404');
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Emit `/fr/pricing.html` rather than `/fr/pricing/index.html`, which pairs
    // with trailingSlash: 'never' so canonical URLs have exactly one valid form.
    format: 'file',
    inlineStylesheets: 'auto',
  },

  // Cross-document view transitions, no JS: the browser animates navigations
  // natively and degrades to an instant cut where unsupported.
  experimental: {
    clientPrerender: true,
  },
});
