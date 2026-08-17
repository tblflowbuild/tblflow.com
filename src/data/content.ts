import type { Locale } from '@/config';

/**
 * Landing-page content, kept out of the templates.
 *
 * Beyond tidiness, this is a GEO decision: an answer engine that reads this site
 * should find complete, self-contained factual statements rather than sentence
 * fragments glued together by markup. Each `body` below reads as a standalone
 * claim for that reason.
 */

export interface Feature {
  /** Inline SVG path data, 24×24 grid. Avoids an icon-font request. */
  icon: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export const SURFACES: Feature[] = [
  {
    icon: 'M3 5h18M3 12h18M3 19h18M8 5v14M16 5v14',
    title: { fr: 'Tables', en: 'Tables' },
    body: {
      fr: "Des bases contenant plusieurs tables, 28 types de champs, des enregistrements liés, des formules avec plus de 200 fonctions, des rollups et des lookups. Chaque cellule est écrite dans une vraie table PostgreSQL, sans format propriétaire.",
      en: 'Bases containing multiple tables, 28 field types, linked records, formulas with 200+ functions, rollups and lookups. Every cell is written to a real PostgreSQL table, with no proprietary format.',
    },
  },
  {
    icon: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
    title: { fr: 'Apps & Dashboards', en: 'Apps & Dashboards' },
    body: {
      fr: "Un canevas de widgets multi-pages par base, et un App Builder pour publier une mini-application personnalisée avec sa propre authentification visiteur et une API injectée pour lire et écrire des enregistrements.",
      en: 'A multi-page widget canvas per base, and an App Builder to publish a custom mini-app with its own visitor authentication and an injected API to read and write records.',
    },
  },
  {
    icon: 'M13 2 3 14h7l-1 8 10-12h-7z',
    title: { fr: 'Automations', en: 'Automations' },
    body: {
      fr: "Des workflows déclenchés par événement ou par cron, à étapes multiples, avec des étapes d'approbation humaine là où elles sont nécessaires. Exécutions illimitées à partir du palier Business.",
      en: 'Event-driven and cron-triggered workflows, multi-step, with human approval steps where they are needed. Unlimited runs from the Business tier up.',
    },
  },
  {
    icon: 'M12 3a9 9 0 1 0 9 9M12 3v9l7 4M8 8h.01M16 16h.01',
    title: { fr: 'Knowledge graph', en: 'Knowledge graph' },
    body: {
      fr: "Une bibliothèque de documents markdown avec recherche sémantique et recherche plein texte fusionnées, un graphe de liens entre documents, et un chunking qui respecte la structure du markdown.",
      en: 'A markdown document library with semantic and full-text search fused together, a link graph between documents, and chunking that respects markdown structure.',
    },
  },
  {
    icon: 'M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zM5 20a7 7 0 0 1 14 0',
    title: { fr: 'AI Agents', en: 'AI Agents' },
    body: {
      fr: "Des agents autonomes avec planificateur, exécuteur, mémoire persistante et ordonnanceur. Ils lisent et écrivent dans vos données, et agissent sur vos services connectés — Gmail, GitHub, Slack, Google Calendar.",
      en: 'Autonomous agents with a planner, an executor, persistent memory and a scheduler. They read and write your data, and act across your connected services — Gmail, GitHub, Slack, Google Calendar.',
    },
  },
];

export const DIFFERENTIATORS: Feature[] = [
  {
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7',
    title: { fr: 'Du vrai PostgreSQL, pas une couche de synchro', en: 'Real PostgreSQL, not a sync layer' },
    body: {
      fr: "La table que vous voyez dans TblFlow est la table dans Postgres. Vous pouvez brancher n'importe quel client SQL sur la même instance et requêter vos données directement. Il n'y a pas d'intermédiaire.",
      en: 'The table you see in TblFlow is the table in Postgres. You can point any SQL client at the same instance and query your data directly. There is no intermediary.',
    },
  },
  {
    icon: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3',
    title: { fr: 'Des agents qui agissent, pas seulement qui répondent', en: 'Agents that act, not just answer' },
    body: {
      fr: "Airtable, Monday et Notion n'ont pas d'agents autonomes. TblFlow en a : ils surveillent vos données et déclenchent des actions — envoyer un email au changement d'étape d'un deal, ouvrir une issue GitHub, résumer la semaine chaque vendredi.",
      en: 'Airtable, Monday and Notion have no autonomous agents. TblFlow does: they watch your data and take action — email when a deal changes stage, open a GitHub issue, summarise the week every Friday.',
    },
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: { fr: 'Auto-hébergeable, sans verrouillage', en: 'Self-hostable, no lock-in' },
    body: {
      fr: "Déployez sur votre propre infrastructure avec toutes les fonctionnalités Enterprise débloquées : aucune clé de licence, aucun abonnement, aucun plafond d'usage. Vos données restent dans votre Postgres.",
      en: 'Deploy on your own infrastructure with every Enterprise feature unlocked: no license key, no subscription, no usage caps. Your data stays in your Postgres.',
    },
  },
  {
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
    title: { fr: 'Conçu pour des volumes de production', en: 'Built for production volumes' },
    body: {
      fr: "Filtrez, triez, groupez et cherchez sur des millions de lignes en moins d'une seconde. La grille est rendue en canvas et ne redessine que la zone visible, donc la performance ne se dégrade pas avec le nombre de lignes.",
      en: 'Filter, sort, group and search across millions of rows in under a second. The grid renders to canvas and only redraws the visible region, so performance does not degrade with row count.',
    },
  },
];

/** Views, listed explicitly — answer engines quote enumerations like this well. */
export const VIEWS: Array<{ name: Record<Locale, string>; use: Record<Locale, string> }> = [
  {
    name: { fr: 'Grille', en: 'Grid' },
    use: { fr: 'Navigation et édition de type tableur', en: 'General-purpose spreadsheet browsing and editing' },
  },
  {
    name: { fr: 'Kanban', en: 'Kanban' },
    use: { fr: 'Workflows par statut, tableaux de projet', en: 'Status-based workflows, project boards' },
  },
  {
    name: { fr: 'Galerie', en: 'Gallery' },
    use: { fr: 'Enregistrements riches en images, catalogues', en: 'Image-heavy records, visual catalogs' },
  },
  {
    name: { fr: 'Calendrier', en: 'Calendar' },
    use: { fr: 'Données pilotées par les dates, planification', en: 'Date-driven data, scheduling' },
  },
  {
    name: { fr: 'Gantt', en: 'Gantt' },
    use: { fr: 'Plannings, dépendances, chemin critique', en: 'Project timelines, dependencies, critical path' },
  },
  {
    name: { fr: 'Formulaire', en: 'Form' },
    use: { fr: 'Collecte auprès d’utilisateurs externes, via URL publique', en: 'Collecting input from external users, via public URL' },
  },
  {
    name: { fr: 'Plugin', en: 'Plugin' },
    use: { fr: 'Intégrer l’UI d’un plugin comme une vue', en: "Embedding a plugin's custom UI as a view" },
  },
];

/**
 * Competitive comparison, transcribed from `.planning/SALES-POSITIONING-2026.md`
 * ("Competitive Advantages"). Rendered as a real <table> with scoped headers:
 * comparison tables are among the most frequently cited structures by generative
 * engines, and only if the markup says which cell belongs to which column.
 */
export type Support = 'yes' | 'no' | 'partial';

export interface CompareRow {
  feature: Record<Locale, string>;
  airtable: Support;
  monday: Support;
  notion: Support;
  salesforce: Support;
  tblflow: Support;
}

export const COMPETITORS = ['airtable', 'monday', 'notion', 'salesforce', 'tblflow'] as const;
export type Competitor = (typeof COMPETITORS)[number];

export const COMPETITOR_LABELS: Record<Competitor, string> = {
  airtable: 'Airtable',
  monday: 'Monday.com',
  notion: 'Notion',
  salesforce: 'Salesforce',
  tblflow: 'TblFlow',
};

export const COMPARISON: CompareRow[] = [
  {
    feature: { fr: 'Vues multiples', en: 'Multi-view UI' },
    airtable: 'yes', monday: 'yes', notion: 'yes', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: { fr: 'Collaboration temps réel', en: 'Real-time collaboration' },
    airtable: 'yes', monday: 'yes', notion: 'yes', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: { fr: 'Agents IA autonomes', en: 'Autonomous AI agents' },
    airtable: 'no', monday: 'no', notion: 'no', salesforce: 'partial', tblflow: 'yes',
  },
  {
    feature: { fr: 'Workflows autonomes', en: 'Autonomous workflows' },
    airtable: 'partial', monday: 'yes', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: { fr: 'Recherche sémantique', en: 'Semantic search' },
    airtable: 'no', monday: 'no', notion: 'partial', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: { fr: 'Requêtes SQL', en: 'SQL queries' },
    airtable: 'no', monday: 'no', notion: 'no', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: { fr: 'Option on-premise', en: 'On-premise option' },
    airtable: 'no', monday: 'no', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: { fr: 'Conformité RGPD', en: 'GDPR compliance' },
    airtable: 'partial', monday: 'partial', notion: 'partial', salesforce: 'yes', tblflow: 'yes',
  },
];

/** Free-text rows that do not fit the yes/no/partial shape. */
export const COMPARISON_NOTES: Array<{
  feature: Record<Locale, string>;
  values: Record<Competitor, Record<Locale, string>>;
}> = [
  {
    feature: { fr: 'Prix par utilisateur / mois', en: 'Price per user / month' },
    values: {
      airtable: { fr: '10–20 $', en: '$10–20' },
      monday: { fr: '10–20 $', en: '$10–20' },
      notion: { fr: '8–15 $', en: '$8–15' },
      salesforce: { fr: '100 $ et plus', en: '$100+' },
      tblflow: { fr: '15–30 $', en: '$15–30' },
    },
  },
  {
    feature: { fr: 'Temps de déploiement', en: 'Deployment speed' },
    values: {
      airtable: { fr: '5 minutes', en: '5 minutes' },
      monday: { fr: '5 minutes', en: '5 minutes' },
      notion: { fr: '5 minutes', en: '5 minutes' },
      salesforce: { fr: '6 mois', en: '6 months' },
      tblflow: { fr: '5 minutes', en: '5 minutes' },
    },
  },
];
