import { DEFAULT_LOCALE, HREFLANG, SITE_URL, isLocale, type Locale } from '@/config';

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

/* hreflang alternates live in `@/i18n/routes` — they need the content
   collections to pair translated slugs, which this module deliberately avoids. */

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(HREFLANG[locale], {
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
