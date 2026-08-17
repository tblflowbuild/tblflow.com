/**
 * Single source of truth for site-wide constants.
 *
 * SITE_URL matters more than it looks: Astro uses it to emit absolute canonical
 * URLs, the sitemap, and RSS links. Getting it wrong ships a sitemap full of
 * localhost URLs, which is the fastest way to lose the SEO work below.
 */
export const SITE_URL = 'https://tblflow.com';

export const DEFAULT_LOCALE = 'fr' as const;
export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** BCP-47 tags for `hreflang` and `<html lang>` — not the same as our short keys. */
export const HREFLANG: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en',
};

export const APP_URL = 'https://app.tblflow.com';
export const HELP_URL = 'https://help.tblflow.com';
export const GITHUB_URL = 'https://github.com/TomTomCoder/nSidr';

/**
 * Organization identity, reused by the JSON-LD graph. Kept here rather than
 * inlined per-page so the `@id` values stay stable across pages — inconsistent
 * `@id`s make search engines treat each page's Organization as a distinct entity.
 */
export const ORG = {
  name: 'TblFlow',
  legalName: 'TblFlow',
  logo: `${SITE_URL}/images/tblflow-logo.svg`,
  email: 'contact@tblflow.com',
  sameAs: [GITHUB_URL],
} as const;
