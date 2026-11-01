import type { Locale } from '@/config';

/**
 * Customer quotes and measured results for the homepage.
 *
 * Nothing here is rendered unless `published` is true. The entries below are
 * EXAMPLES of the shape and tone wanted: they are not real customers and must
 * never be published as such. Replace them with a real quote, the customer's
 * written consent, and for `result` a measured figure with its period and
 * how it was measured.
 *
 * Quotes are shown in the language they were given in (`lang`), not machine
 * translated: a translated quote is no longer what the person said.
 */
export interface Testimonial {
  published: boolean;
  quote: string;
  /** Language the quote was given in. */
  lang: Locale;
  name: string;
  role: string;
  company: string;
  /** Optional measured result, e.g. "−12 h/month of re-entry". */
  result?: {
    value: string;
    label: string;
    /** Period and method, shown in small print, e.g. "measured over Q3 2026 from time logs". */
    source: string;
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    published: false,
    quote:
      'On ressaisissait chaque commande deux fois. La cartographie l’a montré en une après-midi, et nous avons supprimé l’étape Excel la semaine suivante.',
    lang: 'fr',
    name: '[Prénom Nom]',
    role: 'Directeur des opérations',
    company: '[PME industrielle, 45 personnes]',
    result: {
      value: '−12 h/mois',
      label: 'de ressaisie entre CRM et facturation',
      source: '[période et méthode de mesure]',
    },
  },
  {
    published: false,
    quote:
      'Je voyais enfin ce que nous coûtaient nos outils en doublon. Nous avons arrêté deux abonnements dès le premier mois.',
    lang: 'fr',
    name: '[Prénom Nom]',
    role: 'Dirigeante',
    company: '[Société de services, 20 personnes]',
  },
];

export const PUBLISHED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.published);
