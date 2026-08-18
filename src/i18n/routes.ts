import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE, HREFLANG, LOCALES, isLocale, type Locale } from '@/config';
import { absoluteUrl, localePath, pathWithoutLocale } from '@/i18n/utils';

/**
 * Cross-locale routing for collection pages.
 *
 * Marketing pages have the same path in both locales (`pricing`, `blog`), so the
 * bare path is its own translation. Posts and docs do not: their slugs are
 * translated, and a language switcher that just swaps the prefix sends the reader
 * to a 404 — and tells crawlers about an alternate that does not exist.
 *
 * The pairing comes from the `translationKey` frontmatter rather than a mapping
 * file, so adding a page is one file and cannot drift out of sync with a list
 * somebody forgot to update.
 */
type BarePaths = Record<Locale, string>;

const COLLECTIONS = ['blog', 'docs'] as const;

/** Built once per build; every page then reads it instead of rescanning content. */
let cache: Promise<Map<string, BarePaths>> | undefined;

async function pairs(): Promise<Map<string, BarePaths>> {
  const byKey = new Map<string, Partial<BarePaths>>();

  for (const collection of COLLECTIONS) {
    for (const entry of await getCollection(collection)) {
      const [lang, ...rest] = entry.id.split('/');
      if (!lang || !isLocale(lang) || rest.length === 0) continue;
      if (!entry.data.translationKey) continue;

      const key = `${collection}:${entry.data.translationKey}`;
      byKey.set(key, { ...byKey.get(key), [lang]: `${collection}/${rest.join('/')}` });
    }
  }

  const map = new Map<string, BarePaths>();
  for (const [key, group] of byKey.entries()) {
    // The collection's own index page — the fallback for a locale that has no
    // article at all yet. Reusing another locale's slug there would link to a
    // path that was never built (a 404), where the index page always exists.
    const collection = key.split(':', 1)[0]!;
    for (const lang of LOCALES) {
      const own = group[lang];
      if (!own) continue;
      map.set(
        own,
        Object.fromEntries(LOCALES.map((l) => [l, group[l] ?? collection])) as BarePaths
      );
    }
  }
  return map;
}

/** The equivalent bare path (no locale prefix) in each locale, for one page. */
export async function barePathsFor(pathname: string): Promise<BarePaths> {
  cache ??= pairs();
  const bare = pathWithoutLocale(pathname);
  return (
    (await cache).get(bare) ?? (Object.fromEntries(LOCALES.map((l) => [l, bare])) as BarePaths)
  );
}

/**
 * The full hreflang set for a page, including x-default.
 *
 * x-default is not optional decoration: without it, Google picks a locale for
 * users whose language matches neither alternate, and it does not always pick
 * the one you would.
 */
export async function alternateLinks(
  pathname: string
): Promise<Array<{ hreflang: string; href: string }>> {
  const paths = await barePathsFor(pathname);
  return [
    ...LOCALES.map((locale) => ({
      hreflang: HREFLANG[locale],
      href: absoluteUrl(localePath(locale, paths[locale])),
    })),
    { hreflang: 'x-default', href: absoluteUrl(localePath(DEFAULT_LOCALE, paths[DEFAULT_LOCALE])) },
  ];
}
