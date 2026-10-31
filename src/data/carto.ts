import type { Locale } from '@/config';

/**
 * Copy for the "measure, track, steer" section of the process-map page. Written in French and English only: the other eight
 * locales fall back to English until they are translated, rather than blocking
 * the release on a full ten-language pass (see `processMap.ts` for the fully
 * translated strings).
 */
type Pair = { fr: string; en: string };

export const CARTO_STRINGS = {
  'track.title': {
    fr: 'Mesurer, suivre dans le temps, piloter',
    en: 'Measure, track over time, steer',
  },
  'track.intro': {
    fr: 'Une carte utile reste à jour et se compare à la réalité. Les coûts restent des estimations que vous saisissez ; la Carto des process aide à les confronter à des mesures et à suivre les revues.',
    en: 'A useful map stays up to date and gets compared with reality. Costs remain estimates that you enter; the process map helps you check them against measurements and keep reviews on schedule.',
  },
  'track.1.title': {
    fr: 'Suivi dans le temps',
    en: 'Tracking over time',
  },
  'track.1.body': {
    fr: 'Chaque processus a sa fiche procédure, un propriétaire et une date de prochaine revue. Un courriel chaque lundi à 7 h signale les revues dépassées ou prévues sous 14 jours, et un rapport mensuel arrive le 1er à 8 h. Aucun courriel s’il n’y a rien à signaler. Base V2 requise.',
    en: 'Each process has its procedure sheet, an owner and a next review date. An email every Monday at 7:00 flags reviews that are overdue or due within 14 days, and a monthly report arrives on the 1st at 8:00. No email when there is nothing to report. V2 base required.',
  },
  'track.2.title': {
    fr: 'Estimé vs réel',
    en: 'Estimated vs actual',
  },
  'track.2.body': {
    fr: 'Saisissez des mesures sur les étapes (minutes, volume, taux d’erreur, source). Le panneau compare l’estimé au mesuré sur les seules étapes mesurées et indique la part des étapes mesurées.',
    en: 'Enter measurements on steps (minutes, volume, error rate, source). The panel compares the estimate with the measurement on the measured steps only, and shows the share of steps that are measured.',
  },
  'track.3.title': {
    fr: 'Avant / après',
    en: 'Before / after',
  },
  'track.3.body': {
    fr: 'Figez la carte dans une copie, changez vos pratiques, puis comparez le coût total du mois et le nombre d’étapes entre la copie et la carte courante.',
    en: 'Freeze the map in a copy, change how you work, then compare the total cost for the month and the number of steps between the copy and the current map.',
  },
  'track.4.title': {
    fr: 'Vue direction',
    en: 'Executive view',
  },
  'track.4.body': {
    fr: 'Une page de lecture, imprimable en PDF : coût, gain potentiel, les cinq processus où l’on perd le plus, les améliorations par statut et les revues en retard. Les montants restent masqués pour qui n’a pas le droit de les lire.',
    en: 'A read-only page, printable to PDF: cost, potential gain, the five processes where you lose the most, improvements by status and overdue reviews. Amounts stay hidden from anyone who is not allowed to read them.',
  },
  'track.5.title': {
    fr: 'Bibliothèque de processus types',
    en: 'Template process library',
  },
  'track.5.body': {
    fr: '13 processus prêts à importer un par un, regroupés par secteur : facturation client, recrutement, réclamations, achats, commerce, industrie et logistique, comptabilité et juridique. Aucun coût n’est prérempli.',
    en: '13 processes ready to import one at a time, grouped by sector: customer invoicing, recruitment, complaints, purchasing, retail, industry and logistics, accounting and legal. No cost is prefilled.',
  },
  'track.cta': {
    fr: 'Voir les nouveautés dans le changelog',
    en: 'See what is new in the changelog',
  },
} as const satisfies Record<string, Pair>;

export type CartoKey = keyof typeof CARTO_STRINGS;

/** French and English are written; every other locale reads the English copy. */
export function ct(locale: Locale, key: CartoKey): string {
  const pair = CARTO_STRINGS[key];
  return locale === 'fr' ? pair.fr : pair.en;
}
