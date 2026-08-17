import type { Locale } from '@/config';

/**
 * The FAQ is doing double duty and is written accordingly.
 *
 * For SEO it feeds `FAQPage` structured data. For GEO it is the highest-value
 * content on the site: answer engines lift question/answer pairs almost verbatim,
 * so each answer is written to stand alone — it repeats the subject ("TblFlow…")
 * instead of relying on the question for context, states the fact in the first
 * sentence, and avoids "see above" or "as mentioned". An answer that only makes
 * sense in page order is an answer that gets quoted wrongly or not at all.
 */

export type FaqCategory = 'product' | 'pricing' | 'technical' | 'data';

export interface FaqItem {
  category: FaqCategory;
  question: Record<Locale, string>;
  /** Plain text, no markup — it is injected into JSON-LD as well as rendered. */
  answer: Record<Locale, string>;
}

export const FAQ_CATEGORIES: Array<{ id: FaqCategory; label: Record<Locale, string> }> = [
  { id: 'product', label: { fr: 'Produit', en: 'Product' } },
  { id: 'pricing', label: { fr: 'Tarifs', en: 'Pricing' } },
  { id: 'technical', label: { fr: 'Technique', en: 'Technical' } },
  { id: 'data', label: { fr: 'Données', en: 'Data' } },
];

export const FAQ: FaqItem[] = [
  {
    category: 'product',
    question: {
      fr: "Qu'est-ce que TblFlow ?",
      en: 'What is TblFlow?',
    },
    answer: {
      fr: "TblFlow est une plateforme no-code de base de données qui présente une interface de type tableur au-dessus d'une vraie base PostgreSQL. Les équipes y construisent des tables, des interfaces et des tableaux de bord, des automatisations, une bibliothèque de documents avec recherche sémantique, et des agents IA autonomes — sur les mêmes données. TblFlow est disponible en version infogérée sur tblflow.com et en auto-hébergement.",
      en: 'TblFlow is a no-code database platform that puts a spreadsheet-like interface over a real PostgreSQL database. Teams use it to build tables, interfaces and dashboards, automations, a document library with semantic search, and autonomous AI agents — all on the same data. TblFlow is available as a managed service at tblflow.com and as a self-hosted deployment.',
    },
  },
  {
    category: 'product',
    question: {
      fr: 'En quoi TblFlow est-il différent d’Airtable ?',
      en: 'How is TblFlow different from Airtable?',
    },
    answer: {
      fr: "TblFlow diffère d'Airtable sur quatre points. D'abord, les données vivent dans un vrai PostgreSQL que vous pouvez requêter en SQL depuis n'importe quel client, alors qu'Airtable n'expose pas d'accès SQL. Ensuite, TblFlow inclut des agents IA autonomes qui agissent sur vos données et vos services connectés, absents d'Airtable. Il ajoute une recherche sémantique sur une bibliothèque de documents. Enfin, TblFlow peut être auto-hébergé sur votre propre infrastructure, ce qu'Airtable ne propose pas.",
      en: 'TblFlow differs from Airtable in four ways. First, data lives in a real PostgreSQL database you can query with SQL from any client, whereas Airtable exposes no SQL access. Second, TblFlow includes autonomous AI agents that act on your data and connected services, which Airtable does not have. Third, it adds semantic search over a document library. Fourth, TblFlow can be self-hosted on your own infrastructure, which Airtable does not offer.',
    },
  },
  {
    category: 'product',
    question: {
      fr: 'Quels types de vues TblFlow propose-t-il ?',
      en: 'What view types does TblFlow offer?',
    },
    answer: {
      fr: "TblFlow propose sept types de vues sur n'importe quelle table, sans dupliquer les données : Grille, Kanban, Galerie, Calendrier, Gantt, Formulaire et Plugin. La vue Gantt gère les plannings, les dépendances entre tâches et le chemin critique. La vue Formulaire génère une URL publique pour collecter des données auprès de personnes extérieures.",
      en: 'TblFlow offers seven view types on any table, without duplicating data: Grid, Kanban, Gallery, Calendar, Gantt, Form and Plugin. The Gantt view handles project timelines, task dependencies and the critical path. The Form view generates a public URL for collecting data from people outside your team.',
    },
  },
  {
    category: 'product',
    question: {
      fr: 'Que peuvent faire les agents IA de TblFlow ?',
      en: 'What can TblFlow AI agents do?',
    },
    answer: {
      fr: "Les agents TblFlow sont autonomes : ils disposent d'un planificateur, d'un exécuteur, d'une mémoire persistante sous forme de graphe entité/relation, et d'un ordonnanceur. Ils lisent et écrivent vos enregistrements, interrogent votre bibliothèque de documents comme contexte, et agissent sur les services connectés — Gmail, GitHub, Slack, Google Calendar, Drive et Meet. Vous pouvez aussi leur donner des outils personnalisés à partir de n'importe quelle spécification OpenAPI, ou écrire vos propres outils JavaScript exécutés en bac à sable.",
      en: 'TblFlow agents are autonomous: they have a planner, an executor, persistent memory as an entity/relation graph, and a scheduler. They read and write your records, query your document library as context, and act on connected services — Gmail, GitHub, Slack, Google Calendar, Drive and Meet. You can also give them custom tools generated from any OpenAPI specification, or write your own sandboxed JavaScript tools.',
    },
  },
  {
    category: 'pricing',
    question: {
      fr: 'Combien coûte TblFlow ?',
      en: 'How much does TblFlow cost?',
    },
    answer: {
      fr: "TblFlow Cloud compte quatre paliers. Le palier Gratuit couvre 3 bases et 2 utilisateurs. Le palier Pro est à 29 $ par mois et couvre 30 bases, 5 utilisateurs, 2 agents IA et 100 automatisations par mois. Le palier Business est à 99 $ par mois et couvre plus de 100 bases, 20 utilisateurs, 50 agents IA et 1 000 automatisations par mois. Le palier Enterprise est sur devis et lève toutes les limites. L'auto-hébergement est gratuit, avec toutes les fonctionnalités Enterprise débloquées.",
      en: 'TblFlow Cloud has four tiers. The Free tier covers 3 bases and 2 users. The Pro tier is $29 per month and covers 30 bases, 5 users, 2 AI agents and 100 automations per month. The Business tier is $99 per month and covers 100+ bases, 20 users, 50 AI agents and 1,000 automations per month. The Enterprise tier is quote-based and removes every limit. Self-hosting is free, with every Enterprise feature unlocked.',
    },
  },
  {
    category: 'pricing',
    question: {
      fr: 'TblFlow a-t-il une offre gratuite ?',
      en: 'Does TblFlow have a free plan?',
    },
    answer: {
      fr: "Oui, de deux façons. TblFlow Cloud a un palier Gratuit permanent avec 3 bases, 2 utilisateurs, 10 Go de stockage et 10 000 requêtes API par mois, sans carte bancaire. Et l'auto-hébergement de TblFlow est entièrement gratuit, avec toutes les fonctionnalités Enterprise débloquées : aucune clé de licence, aucun abonnement, aucun plafond d'usage.",
      en: 'Yes, in two ways. TblFlow Cloud has a permanent Free tier with 3 bases, 2 users, 10 GB of storage and 10,000 API requests per month, with no credit card. And self-hosting TblFlow is entirely free, with every Enterprise feature unlocked: no license key, no subscription, no usage caps.',
    },
  },
  {
    category: 'pricing',
    question: {
      fr: 'Puis-je auto-héberger TblFlow gratuitement ?',
      en: 'Can I self-host TblFlow for free?',
    },
    answer: {
      fr: "Oui. TblFlow s'auto-héberge gratuitement avec l'ensemble des fonctionnalités Enterprise activées, dont les agents autonomes, les permissions avancées, le journal d'audit, le SSO, la gestion d'organisation et les serveurs d'extension MCP. Il n'y a ni clé de licence, ni abonnement, ni plafond d'usage. Il vous faut PostgreSQL et Redis.",
      en: 'Yes. TblFlow self-hosts for free with the full Enterprise feature set enabled, including autonomous agents, advanced permissions, audit log, SSO, organization management and MCP extension servers. There is no license key, no subscription and no usage cap. You need PostgreSQL and Redis.',
    },
  },
  {
    category: 'technical',
    question: {
      fr: 'Quelle base de données TblFlow utilise-t-il ?',
      en: 'What database does TblFlow use?',
    },
    answer: {
      fr: "TblFlow utilise PostgreSQL, avec l'extension pgvector pour la recherche sémantique et Redis pour le cache et les files de tâches de fond. Chaque table que vous créez dans TblFlow est une vraie table PostgreSQL physique, pas une ligne dans un magasin générique : vous pouvez donc requêter vos données directement en SQL.",
      en: 'TblFlow uses PostgreSQL, with the pgvector extension for semantic search and Redis for caching and background job queues. Every table you create in TblFlow is a real physical PostgreSQL table, not a row in a generic store — which is why you can query your data directly with SQL.',
    },
  },
  {
    category: 'technical',
    question: {
      fr: 'TblFlow a-t-il une API ?',
      en: 'Does TblFlow have an API?',
    },
    answer: {
      fr: "Oui. TblFlow expose une API REST documentée par une spécification OpenAPI, avec authentification par token. Les quotas de requêtes vont de 10 000 par mois sur le palier Gratuit à illimité sur le palier Enterprise. Une API JavaScript est également injectée dans les applications publiées via l'App Builder, pour lire et écrire des enregistrements depuis votre propre code.",
      en: 'Yes. TblFlow exposes a REST API documented by an OpenAPI specification, with token authentication. Request quotas run from 10,000 per month on the Free tier to unlimited on Enterprise. A JavaScript API is also injected into apps published through the App Builder, so your own code can read and write records.',
    },
  },
  {
    category: 'technical',
    question: {
      fr: 'Quels fournisseurs d’IA TblFlow prend-il en charge ?',
      en: 'Which AI providers does TblFlow support?',
    },
    answer: {
      fr: "TblFlow prend en charge OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, tout point de terminaison compatible OpenAI, ainsi que les modèles locaux via Ollama et LM Studio. Les fournisseurs et les modèles se configurent par base, avec vos propres clés d'API.",
      en: 'TblFlow supports OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, any OpenAI-compatible endpoint, and local models through Ollama and LM Studio. Providers and models are configured per base, using your own API keys.',
    },
  },
  {
    category: 'technical',
    question: {
      fr: 'Combien de lignes TblFlow gère-t-il ?',
      en: 'How many rows can TblFlow handle?',
    },
    answer: {
      fr: "TblFlow filtre, trie, groupe et cherche sur des millions de lignes avec un temps de réponse inférieur à la seconde. La grille est rendue en canvas et ne redessine que la zone visible, ce qui fait que la performance d'affichage ne se dégrade pas avec le nombre de lignes. Le palier Cloud gratuit et les paliers payants n'imposent pas de limite de lignes par base.",
      en: 'TblFlow filters, sorts, groups and searches across millions of rows with sub-second response times. The grid renders to canvas and only redraws the visible region, so display performance does not degrade as row count grows. Neither the free Cloud tier nor the paid tiers impose a row limit per base.',
    },
  },
  {
    category: 'data',
    question: {
      fr: 'Où mes données sont-elles stockées ?',
      en: 'Where is my data stored?',
    },
    answer: {
      fr: "Cela dépend du mode de déploiement. Sur TblFlow Cloud, vos données sont dans l'infrastructure infogérée de TblFlow. En auto-hébergement ou en Enterprise dédié, elles sont dans votre propre PostgreSQL, sur votre infrastructure ou dans un VPC dédié — TblFlow n'y a pas accès. Dans les deux cas, les données sont stockées en PostgreSQL standard, sans format propriétaire.",
      en: 'It depends on the deployment. On TblFlow Cloud, your data sits in TblFlow-managed infrastructure. Self-hosted or on dedicated Enterprise, it sits in your own PostgreSQL, on your infrastructure or in a dedicated VPC — TblFlow has no access to it. In both cases the data is stored in standard PostgreSQL, with no proprietary format.',
    },
  },
  {
    category: 'data',
    question: {
      fr: 'Puis-je exporter mes données et partir ?',
      en: 'Can I export my data and leave?',
    },
    answer: {
      fr: "Oui, et sans conversion. Vos données sont déjà dans des tables PostgreSQL standard : un dump `pg_dump` suffit, et il s'importe dans n'importe quel Postgres. Il n'y a pas de format propriétaire à convertir, ni de couche de synchronisation à démêler. C'est le sens de « sans verrouillage propriétaire » sur ce site.",
      en: 'Yes, and with no conversion step. Your data already lives in standard PostgreSQL tables, so a `pg_dump` is enough and it imports into any Postgres. There is no proprietary format to convert and no sync layer to unpick. That is what "no vendor lock-in" means on this site.',
    },
  },
  {
    category: 'data',
    question: {
      fr: 'TblFlow est-il conforme au RGPD ?',
      en: 'Is TblFlow GDPR compliant?',
    },
    answer: {
      fr: "TblFlow est conçu pour un usage conforme au RGPD et fournit un journal d'audit, un historique de révisions, des permissions granulaires et une gestion du consentement. En auto-hébergement ou en Enterprise dédié, vous maîtrisez entièrement la localisation des données, ce qui simplifie la conformité pour les organisations soumises à des contraintes de résidence des données.",
      en: 'TblFlow is built for GDPR-compliant use and provides an audit log, revision history, granular permissions and consent management. Self-hosted or on dedicated Enterprise, you fully control data location, which simplifies compliance for organisations with data-residency requirements.',
    },
  },
];
