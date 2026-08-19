import { t9, type Locale } from '@/config';

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
    title: t9({ fr: 'Tables', en: 'Tables' }),
    body: t9({
      fr: "Des bases contenant plusieurs tables, 28 types de champs, des enregistrements liés, des formules avec plus de 200 fonctions, des rollups et des lookups. Chaque cellule est écrite dans une vraie table PostgreSQL, sans format propriétaire.",
      en: 'Bases containing multiple tables, 28 field types, linked records, formulas with 200+ functions, rollups and lookups. Every cell is written to a real PostgreSQL table, with no proprietary format.',
    }),
  },
  {
    icon: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
    title: t9({ fr: 'Apps', en: 'Apps' }),
    body: t9({
      fr: 'Un App Builder pour publier une mini-application personnalisée avec sa propre authentification visiteur et une API injectée pour lire et écrire des enregistrements.',
      en: 'An App Builder to publish a custom mini-app with its own visitor authentication and an injected API to read and write records.',
    }),
  },
  {
    icon: 'M13 2 3 14h7l-1 8 10-12h-7z',
    title: t9({ fr: 'Automations', en: 'Automations' }),
    body: t9({
      fr: "Des workflows déclenchés par événement ou par cron, à étapes multiples, avec des étapes d'approbation humaine là où elles sont nécessaires. Exécutions illimitées sur tous les paliers.",
      en: 'Event-driven and cron-triggered workflows, multi-step, with human approval steps where they are needed. Unlimited runs on every tier.',
    }),
  },
  {
    icon: 'M12 3a9 9 0 1 0 9 9M12 3v9l7 4M8 8h.01M16 16h.01',
    title: t9({ fr: 'Knowledge graph', en: 'Knowledge graph' }),
    body: t9({
      fr: "Une bibliothèque de documents markdown avec recherche sémantique et recherche plein texte fusionnées, un graphe de liens entre documents, et un chunking qui respecte la structure du markdown.",
      en: 'A markdown document library with semantic and full-text search fused together, a link graph between documents, and chunking that respects markdown structure.',
    }),
  },
  {
    icon: 'M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zM5 20a7 7 0 0 1 14 0',
    title: t9({ fr: 'AI Agents', en: 'AI Agents' }),
    body: t9({
      fr: "Des agents autonomes avec planificateur, exécuteur, mémoire persistante et ordonnanceur. Ils lisent et écrivent dans vos données, et agissent sur vos services connectés — Gmail, GitHub, Slack, Google Calendar.",
      en: 'Autonomous agents with a planner, an executor, persistent memory and a scheduler. They read and write your data, and act across your connected services — Gmail, GitHub, Slack, Google Calendar.',
    }),
  },
  {
    icon: 'M3 4h18v12H3zM8 20h8M12 16v4M10 8l5 3-2 .7-.8 2z',
    title: t9({ fr: 'Computer use', en: 'Computer use' }),
    body: t9({
      fr: "Quand un service n'a pas d'API, l'agent pilote un navigateur : il ouvre la page, remplit le formulaire, récupère le résultat et l'écrit dans votre table. Chaque session est enregistrée et reste vérifiable.",
      en: 'When a service has no API, the agent drives a browser: it opens the page, fills the form, takes the result and writes it back to your table. Every session is recorded and stays auditable.',
    }),
  },
];

export const DIFFERENTIATORS: Feature[] = [
  {
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7',
    title: t9({ fr: 'Du vrai PostgreSQL, pas une couche de synchro', en: 'Real PostgreSQL, not a sync layer' }),
    body: t9({
      fr: "La table que vous voyez dans TblFlow est la table dans Postgres. Vous pouvez brancher n'importe quel client SQL sur la même instance et requêter vos données directement. Il n'y a pas d'intermédiaire.",
      en: 'The table you see in TblFlow is the table in Postgres. You can point any SQL client at the same instance and query your data directly. There is no intermediary.',
    }),
  },
  {
    icon: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3',
    title: t9({ fr: 'Des agents qui agissent, pas seulement qui répondent', en: 'Agents that act, not just answer' }),
    body: t9({
      fr: "Airtable, Monday et Notion n'ont pas d'agents autonomes. TblFlow en a : ils surveillent vos données et déclenchent des actions — envoyer un email au changement d'étape d'un deal, ouvrir une issue GitHub, résumer la semaine chaque vendredi.",
      en: 'Airtable, Monday and Notion have no autonomous agents. TblFlow does: they watch your data and take action — email when a deal changes stage, open a GitHub issue, summarise the week every Friday.',
    }),
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: t9({ fr: 'Auto-hébergeable, sans verrouillage', en: 'Self-hostable, no lock-in' }),
    body: t9({
      fr: "Le palier Enterprise se déploie sur votre propre infrastructure ou dans un VPC dédié, sur devis, avec toutes les fonctionnalités débloquées. Vos données restent dans un Postgres standard : un pg_dump est une sauvegarde complète, réutilisable ailleurs sans conversion.",
      en: 'The Enterprise tier deploys on your own infrastructure or in a dedicated VPC, on quote, with every feature unlocked. Your data stays in standard Postgres: a pg_dump is a complete backup, reusable elsewhere with no conversion.',
    }),
  },
  {
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
    title: t9({ fr: 'Conçu pour des volumes de production', en: 'Built for production volumes' }),
    body: t9({
      fr: "Filtrez, triez, groupez et cherchez sur des millions de lignes en moins d'une seconde. La grille est rendue en canvas et ne redessine que la zone visible, donc la performance ne se dégrade pas avec le nombre de lignes.",
      en: 'Filter, sort, group and search across millions of rows in under a second. The grid renders to canvas and only redraws the visible region, so performance does not degrade with row count.',
    }),
  },
  {
    icon: 'M8 4 3 12l5 8M16 4l5 8-5 8',
    title: t9({ fr: 'API-first, dès la première base', en: 'API-first, from your very first base' }),
    body: t9({
      fr: "Chaque base créée dans TblFlow est automatiquement accessible via une API REST documentée (OpenAPI), avec authentification par token. Pas de palier à débloquer pour ça : c'est disponible dès le palier Gratuit.",
      en: 'Every base you create in TblFlow is automatically reachable through a documented REST API (OpenAPI), with token authentication. No tier to unlock for that — it is available from the Free tier onward.',
    }),
  },
];

/** Views, listed explicitly — answer engines quote enumerations like this well. */
export const VIEWS: Array<{ name: Record<Locale, string>; use: Record<Locale, string> }> = [
  {
    name: t9({ fr: 'Grille', en: 'Grid' }),
    use: t9({ fr: 'Navigation et édition de type tableur', en: 'General-purpose spreadsheet browsing and editing' }),
  },
  {
    name: t9({ fr: 'Kanban', en: 'Kanban' }),
    use: t9({ fr: 'Workflows par statut, tableaux de projet', en: 'Status-based workflows, project boards' }),
  },
  {
    name: t9({ fr: 'Galerie', en: 'Gallery' }),
    use: t9({ fr: 'Enregistrements riches en images, catalogues', en: 'Image-heavy records, visual catalogs' }),
  },
  {
    name: t9({ fr: 'Calendrier', en: 'Calendar' }),
    use: t9({ fr: 'Données pilotées par les dates, planification', en: 'Date-driven data, scheduling' }),
  },
  {
    name: t9({ fr: 'Gantt', en: 'Gantt' }),
    use: t9({ fr: 'Plannings, dépendances, chemin critique', en: 'Project timelines, dependencies, critical path' }),
  },
  {
    name: t9({ fr: 'Formulaire', en: 'Form' }),
    use: t9({ fr: 'Collecte auprès d’utilisateurs externes, via URL publique', en: 'Collecting input from external users, via public URL' }),
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
  baserow: Support;
  nocodb: Support;
  monday: Support;
  notion: Support;
  salesforce: Support;
  tblflow: Support;
}

export const COMPETITORS = [
  'airtable',
  'baserow',
  'nocodb',
  'monday',
  'notion',
  'salesforce',
  'tblflow',
] as const;
export type Competitor = (typeof COMPETITORS)[number];

export const COMPETITOR_LABELS: Record<Competitor, string> = {
  airtable: 'Airtable',
  baserow: 'Baserow',
  nocodb: 'NocoDB',
  monday: 'Monday.com',
  notion: 'Notion',
  salesforce: 'Salesforce',
  tblflow: 'TblFlow',
};

export const COMPARISON: CompareRow[] = [
  {
    feature: t9({ fr: 'Vues multiples', en: 'Multi-view UI' }),
    airtable: 'yes', baserow: 'yes', nocodb: 'yes', monday: 'yes', notion: 'yes', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Collaboration temps réel', en: 'Real-time collaboration' }),
    airtable: 'yes', baserow: 'yes', nocodb: 'partial', monday: 'yes', notion: 'yes', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Agents IA autonomes', en: 'Autonomous AI agents' }),
    airtable: 'no', baserow: 'no', nocodb: 'no', monday: 'no', notion: 'no', salesforce: 'partial', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Workflows autonomes', en: 'Autonomous workflows' }),
    airtable: 'partial', baserow: 'partial', nocodb: 'partial', monday: 'yes', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Recherche sémantique', en: 'Semantic search' }),
    airtable: 'no', baserow: 'no', nocodb: 'no', monday: 'no', notion: 'partial', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Requêtes SQL', en: 'SQL queries' }),
    airtable: 'no', baserow: 'yes', nocodb: 'yes', monday: 'no', notion: 'no', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Option on-premise', en: 'On-premise option' }),
    airtable: 'no', baserow: 'yes', nocodb: 'yes', monday: 'no', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: t9({ fr: 'Conformité RGPD', en: 'GDPR compliance' }),
    airtable: 'partial', baserow: 'yes', nocodb: 'yes', monday: 'partial', notion: 'partial', salesforce: 'yes', tblflow: 'yes',
  },
];

/** Free-text rows that do not fit the yes/no/partial shape. */
export const COMPARISON_NOTES: Array<{
  feature: Record<Locale, string>;
  values: Record<Competitor, Record<Locale, string>>;
}> = [
  {
    feature: t9({ fr: 'Prix par utilisateur / mois', en: 'Price per user / month' }),
    values: {
      airtable: t9({ fr: '10–20 $', en: '$10–20' }),
      baserow: t9({ fr: '0–5 €', en: '€0–5' }),
      nocodb: t9({ fr: '0–19 $', en: '$0–19' }),
      monday: t9({ fr: '10–20 $', en: '$10–20' }),
      notion: t9({ fr: '8–15 $', en: '$8–15' }),
      salesforce: t9({ fr: '100 $ et plus', en: '$100+' }),
      tblflow: t9({ fr: '15–30 $', en: '$15–30' }),
    },
  },
  {
    feature: t9({ fr: 'Temps de déploiement', en: 'Deployment speed' }),
    values: {
      airtable: t9({ fr: '5 minutes', en: '5 minutes' }),
      baserow: t9({ fr: '5 min · self-host 1 h', en: '5 min · self-host 1 h' }),
      nocodb: t9({ fr: '5 min · self-host 1 h', en: '5 min · self-host 1 h' }),
      monday: t9({ fr: '5 minutes', en: '5 minutes' }),
      notion: t9({ fr: '5 minutes', en: '5 minutes' }),
      salesforce: t9({ fr: '6 mois', en: '6 months' }),
      tblflow: t9({ fr: '5 minutes', en: '5 minutes' }),
    },
  },
];
