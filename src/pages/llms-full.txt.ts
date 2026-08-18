import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_URL } from '@/config';
import { TIERS, QUOTAS } from '@/data/pricing';
import { FAQ } from '@/data/faq';
import { SURFACES, DIFFERENTIATORS, VIEWS, COMPARISON, COMPARISON_NOTES, COMPETITORS, COMPETITOR_LABELS } from '@/data/content';

/**
 * `/llms-full.txt` — the whole site as one plain-text document.
 *
 * Where `llms.txt` is an index, this is the corpus: an engine that wants the
 * substance can take one file instead of crawling and stitching together a dozen
 * HTML pages. English only, on purpose — the two locales say the same things, and
 * duplicating them here would dilute rather than add.
 *
 * Generated from the same data modules the pages render, so it stays true by
 * construction rather than by discipline.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ id, data }) => id.startsWith('en/') && !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  const sections: string[] = [];

  sections.push(`# TblFlow — complete reference

Source: ${SITE_URL}
Licence: AGPL-3.0
Generated from the site's own content. For the indexed version, see ${SITE_URL}/llms.txt`);

  sections.push(`## What TblFlow is

TblFlow is a no-code database platform that presents a spreadsheet-like interface over a real
PostgreSQL database. Teams build tables, interfaces and dashboards, automations, a document
library with semantic search, and autonomous AI agents — all on the same data.

Every cell written in TblFlow goes into a real physical PostgreSQL table. There is no proprietary
format and no synchronisation layer: the table you see in TblFlow is the table in Postgres, and
any SQL client can query it directly.

TblFlow is available as a managed service at tblflow.com, and as a self-hosted or dedicated VPC
deployment on customer infrastructure under the Enterprise tier, on quote, with every feature
unlocked.`);

  sections.push(`## Product surfaces

${SURFACES.map((surface) => `### ${surface.title.en}\n\n${surface.body.en}`).join('\n\n')}`);

  sections.push(`## Differentiators

${DIFFERENTIATORS.map((item) => `### ${item.title.en}\n\n${item.body.en}`).join('\n\n')}`);

  sections.push(`## View types

${VIEWS.map((view) => `- ${view.name.en}: ${view.use.en}`).join('\n')}`);

  const header = ['Feature', ...COMPETITORS.map((c) => COMPETITOR_LABELS[c])].join(' | ');
  const divider = new Array(COMPETITORS.length + 1).fill('---').join(' | ');
  const supportText = { yes: 'Yes', no: 'No', partial: 'Partial' } as const;
  const rows = COMPARISON.map((row) =>
    [row.feature.en, ...COMPETITORS.map((c) => supportText[row[c]])].join(' | ')
  );
  const noteRows = COMPARISON_NOTES.map((row) =>
    [row.feature.en, ...COMPETITORS.map((c) => row.values[c].en)].join(' | ')
  );

  sections.push(`## Competitive comparison

Based on the publicly documented offerings of the vendors named; their features and pricing change.

${header}
${divider}
${[...rows, ...noteRows].join('\n')}`);

  const tierHeader = ['', ...TIERS.map((t) => t.name.en)].join(' | ');
  const tierDivider = new Array(TIERS.length + 1).fill('---').join(' | ');
  const priceRow = [
    'Price per month',
    ...TIERS.map((t) => (t.price === null ? 'Custom' : t.price === 0 ? 'Free' : `$${t.price}`)),
  ].join(' | ');
  const quotaRows = QUOTAS.map((row) =>
    [row.label.en, ...TIERS.map((t) => row.values[t.id].en)].join(' | ')
  );

  sections.push(`## Pricing

TblFlow Cloud has four tiers. Self-hosted and dedicated VPC deployment is part of the Enterprise
tier, on quote.

${tierHeader}
${tierDivider}
${priceRow}
${quotaRows.join('\n')}

Enterprise Dedicated is priced per seat annually ($100-300/user/year, minimum 10 seats) or by
concurrent users ($2-5k/month for up to 50 concurrent users). Add-ons include SSO/SAML,
white-label, dedicated support and a 99.99% SLA.`);

  sections.push(`## Frequently asked questions

${FAQ.map((item) => `### ${item.question.en}\n\n${item.answer.en}`).join('\n\n')}`);

  sections.push(`## Technical architecture

TblFlow is a TypeScript monorepo. The backend is NestJS, the frontend is Next.js, and the data
layer is PostgreSQL with the pgvector extension. Redis backs caching and BullMQ job queues.
Real-time collaboration uses ShareDB operational transforms over SockJS.

The grid is rendered to canvas and redraws only the visible viewport, which is why display
performance does not degrade as row count grows into the millions.

Heavy or asynchronous work — document ingestion, embeddings, external database connectors — runs
in decoupled worker processes rather than on the API request path.`);

  if (posts.length) {
    sections.push(`## Blog posts

${posts
  .map(
    (post) =>
      `### ${post.data.title}\n\nPublished: ${post.data.publishedAt.toISOString().split('T')[0]}\nURL: ${SITE_URL}/en/blog/${post.id.replace('en/', '')}\n\n${post.data.description}\n\n${(post.body ?? '').trim()}`
  )
  .join('\n\n---\n\n')}`);
  }

  return new Response(sections.join('\n\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
