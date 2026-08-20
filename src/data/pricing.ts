import { t9, type Locale } from '@/config';

/**
 * SaaS Cloud tiers. Prices and quotas are transcribed from `PLAN_LIMITS` in
 * `packages/openapi/src/billing/plan-limits.ts` in the `teable-ee` repo — the
 * constant the backend actually enforces (`quota.service.ts` for
 * bases/seats/storage/agents/workflows/computer-use, `creditCheck()` in
 * `record.service.ts` for rows per table). If a figure here disagrees with
 * that file, that file is right and this one is stale — check there first.
 *
 * "Unlimited AI agents/automations" describes the *number of objects* you can
 * create, not how often they run — execution counts are metered separately
 * (`maxAgentRunsPerMonth`, `maxWorkflowRunsPerMonth`) and shown per tier
 * below. Stating "unlimited" without that distinction on the pricing page is
 * what a customer actually reads as a commercial promise, so it does not
 * appear here without the execution number attached.
 */

export type TierId = 'free' | 'pro' | 'business' | 'enterprise';

export interface Tier {
  id: TierId;
  /** USD per month. `null` = quote-based. */
  price: number | null;
  featured: boolean;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  cta: Record<Locale, string>;
  ctaHref: string;
  /** Headline bullets on the card — the full grid lives in `quotas` below. */
  highlights: Record<Locale, string[]>;
}

export const TIERS: Tier[] = [
  {
    id: 'free',
    price: 0,
    featured: false,
    name: t9({ fr: 'Gratuit', en: 'Free' }),
    tagline: t9({
      fr: 'Pour tester et pour les projets personnels.',
      en: 'For evaluating, and for personal projects.',
    }),
    cta: t9({ fr: 'Commencer', en: 'Get started' }),
    ctaHref: 'https://app.tblflow.com/auth/signup',
    highlights: t9({
      fr: [
        '1 base · 1 espace · 1 utilisateur',
        '1 Go de stockage · 5 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 100 exécutions/mois',
        'Support communautaire',
      ],
      en: [
        '1 base · 1 space · 1 user',
        '1 GB storage · 5,000 rows per table',
        'Unlimited AI agents and automations — 100 runs/month',
        'Community support',
      ],
    }),
  },
  {
    id: 'pro',
    price: 29,
    featured: true,
    name: t9({ fr: 'Pro', en: 'Pro' }),
    tagline: t9({
      fr: 'Pour les petites équipes qui automatisent.',
      en: 'For small teams that automate.',
    }),
    cta: t9({ fr: 'Commencer', en: 'Get started' }),
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=pro',
    highlights: t9({
      fr: [
        '5 bases · 3 utilisateurs',
        '100 Go de stockage · 100 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 5 000 exécutions/mois',
        'Support par email · SLA 99,5 %',
      ],
      en: [
        '5 bases · 3 users',
        '100 GB storage · 100,000 rows per table',
        'Unlimited AI agents and automations — 5,000 runs/month',
        'Email support · 99.5% SLA',
      ],
    }),
  },
  {
    id: 'business',
    price: 99,
    featured: false,
    name: t9({ fr: 'Business', en: 'Business' }),
    tagline: t9({
      fr: 'Pour les équipes qui font tourner leurs opérations dessus.',
      en: 'For teams running their operations on it.',
    }),
    cta: t9({ fr: 'Commencer', en: 'Get started' }),
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=business',
    highlights: t9({
      fr: [
        '30 bases · 10 utilisateurs',
        '500 Go de stockage · 1 000 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 50 000 exécutions/mois',
        'SSO / SAML · marque blanche · audit avancé',
        'Support prioritaire · SLA 99,9 %',
      ],
      en: [
        '30 bases · 10 users',
        '500 GB storage · 1,000,000 rows per table',
        'Unlimited AI agents and automations — 50,000 runs/month',
        'SSO / SAML · white-label · advanced audit',
        'Priority support · 99.9% SLA',
      ],
    }),
  },
  {
    id: 'enterprise',
    price: null,
    featured: false,
    name: t9({ fr: 'Enterprise', en: 'Enterprise' }),
    tagline: t9({
      fr: 'Sur votre infrastructure ou en VPC dédié.',
      en: 'On your infrastructure or in a dedicated VPC.',
    }),
    cta: t9({ fr: 'Nous contacter', en: 'Contact us' }),
    ctaHref: 'mailto:contact@tblflow.com?subject=TblFlow%20Enterprise',
    highlights: t9({
      fr: [
        'Tout en illimité',
        'Déploiement on-premise ou VPC',
        'SSO / SAML · marque blanche',
        'Support dédié 24/7 · SLA 99,99 %',
      ],
      en: [
        'Everything unlimited',
        'On-premise or VPC deployment',
        'SSO / SAML · white-label',
        'Dedicated 24/7 support · 99.99% SLA',
      ],
    }),
  },
];

/**
 * The full quota grid. Values are strings (not numbers) because the source
 * mixes exact figures and "Unlimited" — normalising them into numbers would
 * lose information the pricing page needs to show as-is.
 */
export interface QuotaRow {
  label: Record<Locale, string>;
  values: Record<TierId, Record<Locale, string>>;
}

const NO: Record<Locale, string> = t9({ fr: '—', en: '—' });
const UNLIMITED: Record<Locale, string> = t9({ fr: 'Illimité', en: 'Unlimited' });
/** `maxRowsPerTable`, `maxAgentRunsPerMonth`, etc. — every tier below Enterprise
 * genuinely caps this. */
const NO_MONTHLY_QUOTA: Record<Locale, string> = t9({
  fr: 'Sans quota mensuel',
  en: 'No monthly quota',
});

export const QUOTAS: QuotaRow[] = [
  {
    label: t9({ fr: 'Bases', en: 'Bases' }),
    values: {
      free: t9({ fr: '1', en: '1' }),
      pro: t9({ fr: '5', en: '5' }),
      business: t9({ fr: '30', en: '30' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Utilisateurs', en: 'Users' }),
    values: {
      free: t9({ fr: '1', en: '1' }),
      pro: t9({ fr: '3', en: '3' }),
      business: t9({ fr: '10', en: '10' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Espaces gratuits par utilisateur', en: 'Free spaces per user' }),
    values: {
      free: t9({ fr: '1', en: '1' }),
      pro: UNLIMITED,
      business: UNLIMITED,
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Stockage', en: 'Storage' }),
    values: {
      free: t9({ fr: '1 Go', en: '1 GB' }),
      pro: t9({ fr: '100 Go', en: '100 GB' }),
      business: t9({ fr: '500 Go', en: '500 GB' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Lignes par table', en: 'Rows per table' }),
    values: {
      free: t9({ fr: '5 000', en: '5,000' }),
      pro: t9({ fr: '100 000', en: '100,000' }),
      business: t9({ fr: '1 000 000', en: '1,000,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Exécutions d’agents IA / mois', en: 'AI agent runs / month' }),
    values: {
      free: t9({ fr: '100', en: '100' }),
      pro: t9({ fr: '5 000', en: '5,000' }),
      business: t9({ fr: '50 000', en: '50,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Exécutions de workflows / mois', en: 'Workflow runs / month' }),
    values: {
      free: t9({ fr: '500', en: '500' }),
      pro: t9({ fr: '25 000', en: '25,000' }),
      business: t9({ fr: '250 000', en: '250,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'E-mails d’automatisation / mois', en: 'Automation emails / month' }),
    values: {
      free: t9({ fr: '50', en: '50' }),
      pro: t9({ fr: '2 000', en: '2,000' }),
      business: t9({ fr: '20 000', en: '20,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Computer use — minutes / mois', en: 'Computer use — minutes / month' }),
    values: {
      free: t9({ fr: '30', en: '30' }),
      pro: t9({ fr: '600', en: '600' }),
      business: t9({ fr: '3 000', en: '3,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Computer use — replays / mois', en: 'Computer use — replays / month' }),
    values: {
      free: t9({ fr: '10', en: '10' }),
      pro: t9({ fr: '200', en: '200' }),
      business: t9({ fr: '1 000', en: '1,000' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Requêtes API / mois', en: 'API requests / month' }),
    values: {
      free: NO_MONTHLY_QUOTA,
      pro: NO_MONTHLY_QUOTA,
      business: NO_MONTHLY_QUOTA,
      enterprise: NO_MONTHLY_QUOTA,
    },
  },
  {
    label: t9({ fr: 'Recherches sémantiques / mois', en: 'Semantic searches / month' }),
    values: {
      free: NO,
      pro: t9({ fr: '100', en: '100' }),
      business: t9({ fr: '1 000', en: '1k' }),
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Support', en: 'Support' }),
    values: {
      free: t9({ fr: 'Communauté', en: 'Community' }),
      pro: t9({ fr: 'Email', en: 'Email' }),
      business: t9({ fr: 'Prioritaire', en: 'Priority' }),
      enterprise: t9({ fr: 'Dédié 24/7', en: '24/7 dedicated' }),
    },
  },
  {
    label: t9({ fr: 'SLA', en: 'SLA' }),
    values: {
      free: t9({ fr: 'Aucun', en: 'None' }),
      pro: t9({ fr: '99,5 %', en: '99.5%' }),
      business: t9({ fr: '99,9 %', en: '99.9%' }),
      enterprise: t9({ fr: '99,99 %', en: '99.99%' }),
    },
  },
];

/** Shown once, below the quota table — the API row's "no monthly quota" is not
 * the same claim as "no limit at all": a global, tier-independent rate limit
 * still applies (`BACKEND_THROTTLE_LIMIT`/`BACKEND_THROTTLE_TTL_MS`). */
export const API_RATE_LIMIT_NOTE: Record<Locale, string> = t9({
  fr: 'Aucun quota mensuel sur les requêtes API, mais une limitation de débit globale de 100 requêtes par minute par défaut s’applique à tous les paliers.',
  en: 'No monthly quota on API requests, but a global rate limit of 100 requests per minute by default applies across every tier.',
});
