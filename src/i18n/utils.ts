import { DEFAULT_LOCALE, LOCALES, SITE_URL, isLocale, type Locale } from '@/config';

/**
 * Builds a locale-prefixed path. Every internal link goes through this rather
 * than hardcoding `/fr/...`, so a page never accidentally links a French visitor
 * into the English tree (the most common i18n leak, and one that hreflang
 * validators flag as a "conflicting" alternate).
 */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Absolute URL, required for canonical, OG tags, JSON-LD and RSS. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

/** Extracts the locale from a URL pathname, falling back to the default. */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/**
 * Strips the locale prefix, giving the "same page, other language" path.
 * Used by the language switcher and to generate hreflang alternates.
 */
export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0]!)) segments.shift();
  return segments.join('/');
}

/**
 * The full hreflang set for a page, including x-default.
 *
 * x-default is not optional decoration: without it, Google picks a locale for
 * users whose language matches neither alternate, and it does not always pick
 * the one you would.
 */
export function alternateLinks(pathname: string): Array<{ hreflang: string; href: string }> {
  const bare = pathWithoutLocale(pathname);
  const alternates = LOCALES.map((locale) => ({
    hreflang: locale === 'fr' ? 'fr-FR' : 'en',
    href: absoluteUrl(localePath(locale, bare)),
  }));
  return [
    ...alternates,
    { hreflang: 'x-default', href: absoluteUrl(localePath(DEFAULT_LOCALE, bare)) },
  ];
}

const DATE_LOCALE: Record<Locale, string> = { fr: 'fr-FR', en: 'en-US' };

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Machine-readable date for <time datetime> and JSON-LD. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}

/** Rough reading time; 200 wpm is the conventional figure for prose. */
export function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
