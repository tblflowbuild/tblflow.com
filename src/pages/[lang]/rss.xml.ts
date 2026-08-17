import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES, SITE_URL, HREFLANG, isLocale, type Locale } from '@/config';

/** One feed per locale — a mixed-language feed is useful to nobody. */
export const getStaticPaths: GetStaticPaths = () => LOCALES.map((lang) => ({ params: { lang } }));

const TITLES: Record<Locale, string> = {
  fr: 'TblFlow — Blog',
  en: 'TblFlow — Blog',
};

const DESCRIPTIONS: Record<Locale, string> = {
  fr: "Notes de produit, guides et retours d'ingénierie sur TblFlow.",
  en: 'Product notes, guides and engineering write-ups on TblFlow.',
};

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang;
  if (!lang || !isLocale(lang)) {
    return new Response('Not found', { status: 404 });
  }

  const posts = (
    await getCollection('blog', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft)
  ).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: TITLES[lang],
    description: DESCRIPTIONS[lang],
    site: SITE_URL,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    customData: `<language>${HREFLANG[lang]}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/${lang}/blog/${post.id.replace(`${lang}/`, '')}`,
      categories: post.data.tags,
      customData: `<dc:creator>${post.data.author}</dc:creator>`,
    })),
  });
};
