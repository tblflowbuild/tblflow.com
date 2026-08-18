import { t9, type Locale } from '@/config';

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
    name: t9({ fr: 'Gratuit', en: 'Free' }),
    tagline: t9({
      fr: 'Pour tester et pour les projets personnels.',
      en: 'For evaluating, and for personal projects.',
    }),
    cta: t9({ fr: 'Commencer', en: 'Get started' }),
    ctaHref: 'https://app.tblflow.com/auth/signup',
    highlights: t9({
      fr: ['1 base', '1 utilisateur', '1 Go de stockage', 'Agents IA, automatisations et requêtes API illimités', 'Support communautaire'],
      en: ['1 base', '1 user', '1 GB storage', 'Unlimited AI agents, automations and API requests', 'Community support'],
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
        'Agents IA, automatisations et requêtes API illimités',
        '100 Go de stockage',
        'Support par email · SLA 99,5 %',
      ],
      en: [
        '5 bases · 3 users',
        'Unlimited AI agents, automations and API requests',
        '100 GB storage',
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
        'Agents IA, automatisations et requêtes API illimités',
        '500 Go de stockage',
        'Support prioritaire · SLA 99,9 %',
      ],
      en: [
        '30 bases · 10 users',
        'Unlimited AI agents, automations and API requests',
        '500 GB storage',
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
 * The full quota grid. Values are strings (not numbers) because the source table
 * mixes exact figures, "100+", and "Unlimited" — normalising them into numbers
 * would lose information the pricing page needs to show as-is.
 */
export interface QuotaRow {
  label: Record<Locale, string>;
  values: Record<TierId, Record<Locale, string>>;
}

const NO: Record<Locale, string> = t9({ fr: '—', en: '—' });
const UNLIMITED: Record<Locale, string> = t9({ fr: 'Illimité', en: 'Unlimited' });

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
    label: t9({ fr: 'Agents IA / mois', en: 'AI agents / month' }),
    values: {
      free: UNLIMITED,
      pro: UNLIMITED,
      business: UNLIMITED,
      enterprise: UNLIMITED,
    },
  },
  {
    label: t9({ fr: 'Automatisations / mois', en: 'Automations / month' }),
    values: {
      free: UNLIMITED,
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
    label: t9({ fr: 'Requêtes API / mois', en: 'API requests / month' }),
    values: {
      free: UNLIMITED,
      pro: UNLIMITED,
      business: UNLIMITED,
      enterprise: UNLIMITED,
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
