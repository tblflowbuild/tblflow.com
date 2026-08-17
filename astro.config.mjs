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

  // Astro's built-in i18n. `prefixDefaultLocale: true` keeps both locales
  // symmetric (/fr/... and /en/...) instead of leaving French at the bare root:
  // asymmetric locale roots make hreflang and canonical URLs much easier to get
  // subtly wrong, and cost nothing here since `/` redirects (see _redirects).
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      // Tell search engines the two locales are translations of each other.
      // This emits xhtml:link alternates inside the sitemap, which is the
      // machine-readable half of the hreflang signal (the other half is in <head>).
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en' },
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
