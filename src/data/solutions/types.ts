/**
 * Shape of the "Who is it for?" and "Use cases" pages. One file per locale
 * (`fr.ts` is the source) so a missing key is a compile error, not a silent
 * English fallback. Slugs are shared across locales, like every other route
 * of the site (`process-map`, `pricing`).
 *
 * Every page follows the home page journey in short: the problem as it runs
 * today, then understand, map, build, automate and hand to agents, then what
 * the customer keeps (see docs/positionnement.md).
 */
export const USE_CASE_SLUGS = [
  'quote-to-cash',
  'procure-to-pay',
  'financial-close',
  'stock-to-shipping',
  'quality',
  'procedures',
] as const;
export type UseCaseSlug = (typeof USE_CASE_SLUGS)[number];

export const AUDIENCE_SLUGS = ['leaders', 'finance', 'sales-admin', 'manufacturing', 'retail', 'firms'] as const;
export type AudienceSlug = (typeof AUDIENCE_SLUGS)[number];

/** Who runs a step once TblFlow is in place: the same three executors as the process map. */
export type Exec = 'human' | 'automation' | 'agent';

export interface Flow {
  /** Three or four steps, in order. `tool` is where the step lives today. */
  steps: { title: string; tool: string; after: Exec }[];
  /** The piece of data retyped on every link, shown on the dashed edges. */
  rekeyed: string;
  /** Worked example of the time lost, always labelled as an example. */
  calc: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Card {
  title: string;
  body: string;
}

export interface UseCaseCopy {
  /** Short name, for menus and cards. */
  nav: string;
  /** One line under the name on index cards. */
  card: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  flow: Flow;
  problem: Card;
  /** Four steps: understand, map, build, automate then hand to agents. */
  journey: { label: string; title: string; body: string }[];
  build: { title: string; items: Card[] };
  /** What TblFlow does not do here, said plainly. */
  limits: string;
  /** Requests a user would type into TblFlow, in their own words. */
  prompts: string[];
  faq: Faq[];
}

export interface AudienceCopy {
  nav: string;
  card: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pains: { title: string; items: Card[] };
  build: { title: string; items: Card[] };
  faq: Faq[];
}

export interface SolutionsUi {
  forNav: string;
  useCasesNav: string;
  forIndex: { metaTitle: string; metaDescription: string; title: string; subtitle: string };
  useCasesIndex: { metaTitle: string; metaDescription: string; title: string; subtitle: string };
  today: string;
  withTblflow: string;
  journeyTitle: string;
  limitsTitle: string;
  promptsTitle: string;
  promptsNote: string;
  faqTitle: string;
  useCasesFor: string;
  audiencesFor: string;
  /** Plan line: what the free tier covers and what needs Essential. */
  planNote: string;
  cta: string;
  secondaryCta: string;
  example: string;
  more: string;
}

export interface SolutionsLocale {
  ui: SolutionsUi;
  useCases: Record<UseCaseSlug, UseCaseCopy>;
  audiences: Record<AudienceSlug, AudienceCopy>;
}
