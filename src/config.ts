/**
 * Single source of truth for site-wide constants.
 *
 * SITE_URL matters more than it looks: Astro uses it to emit absolute canonical
 * URLs, the sitemap, and RSS links. Getting it wrong ships a sitemap full of
 * localhost URLs, which is the fastest way to lose the SEO work below.
 */
export const SITE_URL = 'https://tblflow.com';

export const DEFAULT_LOCALE = 'fr' as const;
export const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'tr', 'uk', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** BCP-47 tags for `hreflang` and `<html lang>` — not the same as our short keys. */
export const HREFLANG: Record<Locale, string> = {
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
};

/** Language name, in that language — what the switcher shows, not what an
 * English speaker would call it. */
export const LOCALE_NAME: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ru: 'Русский',
  tr: 'Türkçe',
  uk: 'Українська',
  zh: '中文',
};

/**
 * Flag emoji per locale. Deliberately a country flag standing in for a
 * language, which is an imperfect mapping (Chinese is not "Chinese-flag
 * language", Spanish is spoken well beyond Spain) — but it is the convention
 * every language switcher of this kind uses, and the alternative (no visual
 * marker at all) is worse for quick scanning in a dropdown.
 */
export const LOCALE_FLAG: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  ja: '🇯🇵',
  ru: '🇷🇺',
  tr: '🇹🇷',
  uk: '🇺🇦',
  zh: '🇨🇳',
};

export const APP_URL = 'https://app.tblflow.com';
export const GITHUB_URL = 'https://github.com/TomTomCoder/nSidr';
export const SUPPORT_EMAIL = 'support@tblflow.com';

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

/**
 * Fills the eight not-yet-translated locales with the English value, so a
 * `Record<Locale, string>` field can be authored with just `{ fr, en }` while
 * translation catches up. Every consumer keeps reading `field[locale]` exactly
 * as before — this only changes how the object is built, not how it's read.
 * A locale that falls back this way sees the real product copy in English
 * rather than a broken page or a fabricated translation.
 */
export function t9<T>({ fr, en }: { fr: T; en: T }): Record<Locale, T> {
  return { fr, en, de: en, es: en, it: en, ja: en, ru: en, tr: en, uk: en, zh: en };
}
