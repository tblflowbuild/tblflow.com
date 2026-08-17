import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_URL } from '@/config';
import { TIERS } from '@/data/pricing';

/**
 * `/llms.txt` — the GEO counterpart to robots.txt and sitemap.xml.
 *
 * The emerging convention (llmstxt.org) is a markdown index that tells a language
 * model what a site is and where its authoritative pages are, in the format models
 * parse most reliably. Two reasons this is generated rather than hand-written:
 * the pricing figures come from the same `data/pricing.ts` the pages render, and
 * the post list comes from the content collection — so this file cannot quietly
 * describe a version of the site that no longer exists.
 *
 * It is not a ranking trick and no engine is obliged to read it. It is cheap,
 * machine-readable, and it removes the guesswork for the engines that do.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  const priceLine = TIERS.map((tier) =>
    tier.price === null
      ? `${tier.name.en}: custom quote`
      : tier.price === 0
        ? `${tier.name.en}: $0`
        : `${tier.name.en}: $${tier.price}/month`
  ).join(' · ');

  const postLines = posts
    .slice(0, 30)
    .map((post) => {
      const [lang, ...rest] = post.id.split('/');
      const slug = rest.join('/');
      return `- [${post.data.title}](${SITE_URL}/${lang}/blog/${slug}): ${post.data.description}`;
    })
    .join('\n');

  const body = `# TblFlow

> TblFlow is a no-code database platform that puts a spreadsheet-like interface over a real
> PostgreSQL database, and adds autonomous AI agents, event-driven automations, semantic
> document search and publishable custom apps on top of the same data. It is available as a
> managed service at tblflow.com and as a free self-hosted deployment with every Enterprise
> feature unlocked.

## Key facts

- Storage: every table is a real physical PostgreSQL table. Data is queryable with SQL from any
  client. There is no proprietary format and no sync layer, so a \`pg_dump\` is a complete export.
- Field types: 28, including formula, rollup, conditional rollup, lookup via link, AI, button,
  attachment, user and rating.
- View types: 7 — Grid, Kanban, Gallery, Calendar, Gantt, Form, Plugin.
- Formulas: 200+ functions.
- AI agents: autonomous, with a planner, an executor, persistent entity/relation memory and a
  scheduler. They read and write records and act on connected services (Gmail, GitHub, Slack,
  Google Calendar, Drive, Meet).
- AI providers: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere,
  any OpenAI-compatible endpoint, plus local models via Ollama and LM Studio. Configured per base
  with your own API keys.
- Search: PostgreSQL full-text and pgvector semantic search, fused with reciprocal rank fusion.
- Scale: filters, sorts, groups and searches across millions of rows with sub-second response.
  The grid renders to canvas and redraws only the visible region.
- Deployment: managed cloud, self-hosted (free, all Enterprise features), or dedicated
  Enterprise on customer infrastructure or a VPC.
- Licence: AGPL-3.0.
- Stack: NestJS, Next.js, PostgreSQL with pgvector, Redis, BullMQ, ShareDB.

## Pricing

${priceLine}. Self-hosting is free with no licence key, no subscription and no usage caps.
Full tier detail: ${SITE_URL}/en/pricing

## Pages

- [Home (English)](${SITE_URL}/en): product overview, feature surfaces, competitive comparison, FAQ.
- [Home (French)](${SITE_URL}/fr): same content in French.
- [Pricing (English)](${SITE_URL}/en/pricing): four tiers with the full quota grid.
- [Pricing (French)](${SITE_URL}/fr/pricing)
- [Blog (English)](${SITE_URL}/en/blog)
- [Blog (French)](${SITE_URL}/fr/blog)

## Blog posts

${postLines || '- (none published yet)'}

## Optional

- [Full text of every page](${SITE_URL}/llms-full.txt): one document, for ingestion.
- [Sitemap](${SITE_URL}/sitemap-index.xml)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
