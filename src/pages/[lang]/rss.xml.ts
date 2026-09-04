import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES, SITE_URL, HREFLANG, isLocale, type Locale } from '@/config';

/** One feed per locale — a mixed-language feed is useful to nobody. */
export const getStaticPaths: GetStaticPaths = () => LOCALES.map((lang) => ({ params: { lang } }));

/** Same word in every locale that uses the Latin alphabet for it. */
const TITLES: Record<Locale, string> = {
  de: 'TblFlow — Blog', en: 'TblFlow — Blog', es: 'TblFlow — Blog', fr: 'TblFlow — Blog',
  it: 'TblFlow — Blog', ja: 'TblFlow — ブログ', ru: 'TblFlow — Блог', tr: 'TblFlow — Blog',
  uk: 'TblFlow — Блог', zh: 'TblFlow — 博客',
};

const DESCRIPTIONS: Record<Locale, string> = {
  de: 'Produktnotizen, Anleitungen und Engineering-Berichte zu TblFlow.',
  en: 'Product notes, guides and engineering write-ups on TblFlow.',
  es: 'Notas de producto, guías y artículos de ingeniería sobre TblFlow.',
  fr: "Notes de produit, guides et retours d'ingénierie sur TblFlow.",
  it: 'Note di prodotto, guide e approfondimenti di ingegneria su TblFlow.',
  ja: 'TblFlow のプロダクトノート、ガイド、エンジニアリング記事。',
  ru: 'Заметки о продукте, руководства и инженерные материалы о TblFlow.',
  tr: 'TblFlow hakkında ürün notları, kılavuzlar ve mühendislik yazıları.',
  uk: 'Нотатки про продукт, посібники та інженерні матеріали про TblFlow.',
  zh: '关于 TblFlow 的产品笔记、指南与工程文章。',
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
