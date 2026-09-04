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

/** GA4 property. Never fetched until the visitor grants analytics consent —
 * see CookieConsent.astro. */
export const GA_MEASUREMENT_ID = 'G-H4VC2RJFZY';
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
 * Stripe carries every Price in both EUR and USD at the *same* number
 * (Pro 29/319, Business 99/1089), and bills each customer in their own
 * currency. So only the formatting is locale-dependent — never the amount.
 */
const EURO_LOCALES: readonly Locale[] = ['de', 'es', 'fr', 'it'];

export const currencyCode = (locale: Locale): 'EUR' | 'USD' =>
  EURO_LOCALES.includes(locale) ? 'EUR' : 'USD';

/**
 * `29 €` / `1 089 €` / `26,58 €` in French, `$29` / `$1,089` / `$26.58` in
 * English, and the right thing in the other eight — decimal mark, thousands
 * separator and symbol placement all come from the locale.
 *
 * `narrowSymbol` matters: without it Ukrainian renders "319 USD" and Chinese
 * "US$319". `minimumFractionDigits: 0` keeps whole amounts clean ("29 €", not
 * "29,00 €") while still allowing the two decimals a monthly equivalent needs.
 */
export function formatPrice(locale: Locale, amount: number): string {
  return new Intl.NumberFormat(HREFLANG[locale], {
    style: 'currency',
    currency: currencyCode(locale),
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * The per-month equivalent of an annual total, for the annual toggle.
 *
 * Prefixed with "≈" unless the division lands exactly on the cent: 1089 / 12
 * is exactly 90.75, but 319 / 12 is 26.5833…, and "26,58 €/mois" next to
 * "319 €/an" invites a multiplication that comes out at 318,96. The hedge is
 * conditional rather than blanket because marking the exact one as approximate
 * would be its own small lie.
 */
export function formatMonthlyEquivalent(locale: Locale, annualTotal: number): string {
  const exact = Number.isInteger((annualTotal * 100) / 12);
  return (exact ? '' : '≈ ') + formatPrice(locale, annualTotal / 12);
}
