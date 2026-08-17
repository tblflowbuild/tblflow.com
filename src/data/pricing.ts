import type { Locale } from '@/config';

/**
 * SaaS Cloud tiers, transcribed verbatim from `.planning/SALES-POSITIONING-2026.md`
 * ("SaaS Cloud Pricing Table"). Figures are not invented or rounded here — if a
 * price changes, it changes in that document first and then here.
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
    name: { fr: 'Gratuit', en: 'Free' },
    tagline: {
      fr: 'Pour tester et pour les projets personnels.',
      en: 'For evaluating, and for personal projects.',
    },
    cta: { fr: 'Commencer', en: 'Get started' },
    ctaHref: 'https://app.tblflow.com/auth/signup',
    highlights: {
      fr: ['3 bases', '2 utilisateurs', '10 Go de stockage', '10 000 requêtes API / mois', 'Support communautaire'],
      en: ['3 bases', '2 users', '10 GB storage', '10k API requests / month', 'Community support'],
    },
  },
  {
    id: 'pro',
    price: 29,
    featured: true,
    name: { fr: 'Pro', en: 'Pro' },
    tagline: {
      fr: 'Pour les petites équipes qui automatisent.',
      en: 'For small teams that automate.',
    },
    cta: { fr: 'Commencer', en: 'Get started' },
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=pro',
    highlights: {
      fr: [
        '30 bases · 5 utilisateurs',
        '2 agents IA / mois',
        '100 automatisations / mois',
        '100 Go de stockage',
        'Support par email · SLA 99,5 %',
      ],
      en: [
        '30 bases · 5 users',
        '2 AI agents / month',
        '100 automations / month',
        '100 GB storage',
        'Email support · 99.5% SLA',
      ],
    },
  },
  {
    id: 'business',
    price: 99,
    featured: false,
    name: { fr: 'Business', en: 'Business' },
    tagline: {
      fr: 'Pour les équipes qui font tourner leurs opérations dessus.',
      en: 'For teams running their operations on it.',
    },
    cta: { fr: 'Commencer', en: 'Get started' },
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=business',
    highlights: {
      fr: [
        '100+ bases · 20 utilisateurs',
        '50 agents IA / mois',
        '1 000 automatisations / mois',
        '500 Go · 1 M de requêtes API / mois',
        'Support prioritaire · SLA 99,9 %',
      ],
      en: [
        '100+ bases · 20 users',
        '50 AI agents / month',
        '1,000 automations / month',
        '500 GB · 1M API requests / month',
        'Priority support · 99.9% SLA',
      ],
    },
  },
  {
    id: 'enterprise',
    price: null,
    featured: false,
    name: { fr: 'Enterprise', en: 'Enterprise' },
    tagline: {
      fr: 'Sur votre infrastructure ou en VPC dédié.',
      en: 'On your infrastructure or in a dedicated VPC.',
    },
    cta: { fr: 'Nous contacter', en: 'Contact us' },
    ctaHref: 'mailto:contact@tblflow.com?subject=TblFlow%20Enterprise',
    highlights: {
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
    },
  },
];

/**
 * The full quota grid. Values are strings (not numbers) because the source table
 * mixes exact figures, "100+", and "Unlimited" — normalising them into numbers
 * would lose information the pricing page needs to show as-is.
 */
export interface QuotaRow {
  label: Record<Locale, string>;
  values: Record<TierId, Record<Locale, string>>;
}

const NO: Record<Locale, string> = { fr: '—', en: '—' };
const UNLIMITED: Record<Locale, string> = { fr: 'Illimité', en: 'Unlimited' };

export const QUOTAS: QuotaRow[] = [
  {
    label: { fr: 'Bases', en: 'Bases' },
    values: {
      free: { fr: '3', en: '3' },
      pro: { fr: '30', en: '30' },
      business: { fr: '100+', en: '100+' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Utilisateurs', en: 'Users' },
    values: {
      free: { fr: '2', en: '2' },
      pro: { fr: '5', en: '5' },
      business: { fr: '20', en: '20' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Agents IA / mois', en: 'AI agents / month' },
    values: {
      free: NO,
      pro: { fr: '2', en: '2' },
      business: { fr: '50', en: '50' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Automatisations / mois', en: 'Automations / month' },
    values: {
      free: NO,
      pro: { fr: '100', en: '100' },
      business: { fr: '1 000', en: '1,000' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Stockage', en: 'Storage' },
    values: {
      free: { fr: '10 Go', en: '10 GB' },
      pro: { fr: '100 Go', en: '100 GB' },
      business: { fr: '500 Go', en: '500 GB' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Requêtes API / mois', en: 'API requests / month' },
    values: {
      free: { fr: '10 000', en: '10k' },
      pro: { fr: '100 000', en: '100k' },
      business: { fr: '1 million', en: '1M' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Recherches sémantiques / mois', en: 'Semantic searches / month' },
    values: {
      free: NO,
      pro: { fr: '100', en: '100' },
      business: { fr: '1 000', en: '1k' },
      enterprise: UNLIMITED,
    },
  },
  {
    label: { fr: 'Support', en: 'Support' },
    values: {
      free: { fr: 'Communauté', en: 'Community' },
      pro: { fr: 'Email', en: 'Email' },
      business: { fr: 'Prioritaire', en: 'Priority' },
      enterprise: { fr: 'Dédié 24/7', en: '24/7 dedicated' },
    },
  },
  {
    label: { fr: 'SLA', en: 'SLA' },
    values: {
      free: { fr: 'Aucun', en: 'None' },
      pro: { fr: '99,5 %', en: '99.5%' },
      business: { fr: '99,9 %', en: '99.9%' },
      enterprise: { fr: '99,99 %', en: '99.99%' },
    },
  },
];
