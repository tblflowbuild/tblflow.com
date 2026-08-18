import { t9, type Locale } from '@/config';
import { COMPETITOR_LABELS, type Competitor } from '@/data/content';

/**
 * Editorial copy for the one-page-per-competitor comparisons.
 *
 * The shared comparison table alone would give four pages with the same body
 * and a swapped column — which is exactly the thin, templated content search
 * engines discount, and which helps nobody deciding between two products. So
 * each page carries its own positioning, its own honest "pick them instead"
 * section, and its own verdict.
 *
 * `honest` is not a hedge: a comparison page that finds no case for the
 * competitor reads as marketing and gets treated as such by readers and by
 * engines assessing usefulness. Naming where the other tool genuinely wins is
 * what makes the rest credible.
 */
export type CompetitorSlug = Exclude<Competitor, 'tblflow'>;

export const COMPETITOR_SLUGS = [
  'airtable',
  'baserow',
  'nocodb',
  'monday',
  'notion',
  'salesforce',
] as const;

interface CompetitorPage {
  /** Short category descriptor, used in the intro sentence. */
  category: Record<Locale, string>;
  /** The one-sentence answer, straight after the H1 — the quotable bit. */
  summary: Record<Locale, string>;
  /** Three substantive differences, beyond what the table conveys. */
  differences: Array<{ title: Record<Locale, string>; body: Record<Locale, string> }>;
  /** Where the competitor is the better call. */
  honest: Record<Locale, string>;
}

export const COMPETITOR_PAGES: Record<CompetitorSlug, CompetitorPage> = {
  airtable: {
    category: t9({ fr: 'base de données no-code', en: 'no-code database' }),
    summary: t9({
      fr: "Airtable et TblFlow couvrent le même terrain — tables, vues, automatisations. La différence tient à ce qu'il y a dessous : Airtable stocke vos données dans son propre format, TblFlow écrit dans une vraie table PostgreSQL que vous pouvez requêter en SQL.",
      en: 'Airtable and TblFlow cover the same ground — tables, views, automations. The difference is underneath: Airtable stores your data in its own format, TblFlow writes to a real PostgreSQL table you can query in SQL.',
    }),
    differences: [
      {
        title: t9({ fr: 'Le stockage, et ce qu’il implique', en: 'Storage, and what follows from it' }),
        body: t9({
          fr: "Chez Airtable, l'export est un CSV ou un appel d'API : une copie, prise à un instant donné. Chez TblFlow, un `pg_dump` est la base elle-même, restaurable ailleurs. C'est la différence entre pouvoir extraire ses données et ne jamais en avoir été séparé.",
          en: 'With Airtable, an export is a CSV or an API call: a copy, taken at a point in time. With TblFlow, a `pg_dump` is the database itself, restorable elsewhere. That is the difference between being able to extract your data and never having been separated from it.',
        }),
      },
      {
        title: t9({ fr: 'Des agents, pas des automatisations scriptées', en: 'Agents, not scripted automations' }),
        body: t9({
          fr: "Les automatisations Airtable exécutent la suite d'étapes que vous avez écrite. Les agents TblFlow décident eux-mêmes des étapes à partir d'un objectif, avec mémoire persistante et propositions soumises à validation. Les deux ont leur place ; seul le second traite les cas où la règle dépend du contenu.",
          en: 'Airtable automations run the sequence you wrote. TblFlow agents decide their own steps from a goal, with persistent memory and proposals that require approval. Both have their place; only the second handles cases where the rule depends on the content.',
        }),
      },
      {
        title: t9({ fr: 'Les plafonds d’enregistrements', en: 'Record ceilings' }),
        body: t9({
          fr: "Les paliers Airtable plafonnent le nombre d'enregistrements par base, ce qui pousse à découper artificiellement ses données. TblFlow s'appuie sur Postgres : la grille est rendue en canvas et ne redessine que la zone visible, donc la performance ne se dégrade pas avec le nombre de lignes.",
          en: "Airtable's tiers cap records per base, which pushes teams to split their data artificially. TblFlow sits on Postgres: the grid renders to canvas and redraws only the visible region, so performance does not degrade with row count.",
        }),
      },
    ],
    honest: t9({
      fr: "Airtable a un écosystème d'extensions et de modèles bien plus fourni, et une communauté large. Si votre besoin est couvert par un modèle existant et que la question du stockage vous est indifférente, Airtable vous fera gagner du temps au démarrage.",
      en: 'Airtable has a far richer extension and template ecosystem, and a large community. If an existing template covers your need and the storage question is not one you care about, Airtable will get you started faster.',
    }),
  },

  baserow: {
    category: t9({ fr: 'base no-code open source', en: 'open-source no-code database' }),
    summary: t9({
      fr: "Baserow et TblFlow partagent l'essentiel : open source, auto-hébergeable, bâtis sur PostgreSQL. La différence n'est pas dans l'infrastructure mais dans ce qui tourne dessus — Baserow s'arrête à la base et aux vues, TblFlow y ajoute des agents autonomes, une recherche sémantique et la publication d'applications.",
      en: 'Baserow and TblFlow share the essentials: open source, self-hostable, built on PostgreSQL. The difference is not the infrastructure but what runs on top — Baserow stops at the database and its views, TblFlow adds autonomous agents, semantic search and app publishing.',
    }),
    differences: [
      {
        title: t9({ fr: 'La couche IA', en: 'The AI layer' }),
        body: t9({
          fr: "C'est l'écart principal. Baserow n'a ni agents autonomes, ni mémoire persistante, ni recherche vectorielle. Si votre besoin est une base collaborative propre et auto-hébergée, cet écart ne vous coûte rien ; s'il est de déléguer du travail récurrent, il est décisif.",
          en: 'This is the main gap. Baserow has no autonomous agents, no persistent memory, no vector search. If your need is a clean, self-hosted collaborative database, that gap costs you nothing; if it is delegating recurring work, it is decisive.',
        }),
      },
      {
        title: t9({ fr: 'Du logiciel publiable', en: 'Publishable software' }),
        body: t9({
          fr: "Baserow expose des formulaires et des vues partagées. TblFlow publie une application complète sur votre propre domaine, avec authentification visiteur et API injectée — la donnée devient un produit utilisable par des gens qui n'ont pas de compte sur l'outil.",
          en: 'Baserow exposes forms and shared views. TblFlow publishes a full app on your own domain, with visitor authentication and an injected API — the data becomes a product usable by people who have no account on the tool.',
        }),
      },
      {
        title: t9({ fr: 'Licence', en: 'Licence' }),
        body: t9({
          fr: "Baserow est sous MIT pour son cœur, avec des fonctionnalités avancées en licence propriétaire. TblFlow est sous AGPL-3.0 ; le déploiement auto-hébergé, avec toutes les fonctionnalités débloquées, relève du palier Enterprise, sur devis. Les deux modèles se défendent — ils ne conviennent simplement pas aux mêmes contraintes juridiques ou budgétaires.",
          en: 'Baserow is MIT at its core, with advanced features under a proprietary licence. TblFlow is AGPL-3.0; a self-hosted deployment with every feature unlocked falls under the Enterprise tier, on quote. Both models are defensible — they simply suit different legal or budget constraints.',
        }),
      },
    ],
    honest: t9({
      fr: "Baserow est plus mature sur son périmètre, avec une communauté active et une base de code plus stabilisée. Pour une équipe qui veut un Airtable auto-hébergé, sans couche IA et sans publication d'applications, Baserow est le choix le plus direct — et sa licence MIT est plus permissive que notre AGPL.",
      en: 'Baserow is more mature within its scope, with an active community and a more settled codebase. For a team that wants a self-hosted Airtable, with no AI layer and no app publishing, Baserow is the more direct choice — and its MIT licence is more permissive than our AGPL.',
    }),
  },

  nocodb: {
    category: t9({ fr: 'interface no-code sur base existante', en: 'no-code layer over an existing database' }),
    summary: t9({
      fr: "NocoDB se branche sur une base que vous avez déjà — MySQL, Postgres, SQLite — et lui pose une interface tableur. TblFlow crée et pilote la base. Le point de départ n'est pas le même : convertir une base existante, ou en construire une avec ses agents et ses applications.",
      en: 'NocoDB connects to a database you already have — MySQL, Postgres, SQLite — and puts a spreadsheet interface on it. TblFlow creates and drives the database. The starting point differs: converting an existing database, or building one complete with its agents and apps.',
    }),
    differences: [
      {
        title: t9({ fr: 'Se brancher ou construire', en: 'Connect or build' }),
        body: t9({
          fr: "La force de NocoDB est de s'attacher à une base existante sans la migrer — précieux quand le schéma vit déjà et appartient à une autre équipe. TblFlow crée son schéma : c'est plus direct pour partir de zéro, moins adapté pour habiller une base héritée.",
          en: "NocoDB's strength is attaching to an existing database without migrating it — valuable when the schema already lives and belongs to another team. TblFlow creates its own schema: more direct from scratch, less suited to dressing up a legacy database.",
        }),
      },
      {
        title: t9({ fr: 'Support multi-SGBD', en: 'Multi-engine support' }),
        body: t9({
          fr: "NocoDB parle MySQL, MariaDB, Postgres, SQLite et SQL Server. TblFlow ne parle que PostgreSQL, délibérément : la recherche vectorielle, les rollups conditionnels et les agents s'appuient sur des mécanismes propres à Postgres, qu'un dénominateur commun multi-moteurs interdirait.",
          en: 'NocoDB speaks MySQL, MariaDB, Postgres, SQLite and SQL Server. TblFlow speaks only PostgreSQL, deliberately: vector search, conditional rollups and the agents rely on Postgres-specific machinery that a multi-engine common denominator would rule out.',
        }),
      },
      {
        title: t9({ fr: 'Ce qui tourne au-dessus', en: 'What runs on top' }),
        body: t9({
          fr: "NocoDB fournit vues, formulaires et automatisations. TblFlow ajoute des agents avec mémoire persistante et propositions validées, une bibliothèque documentaire à recherche sémantique, et la publication d'applications sur votre domaine.",
          en: 'NocoDB provides views, forms and automations. TblFlow adds agents with persistent memory and approved proposals, a document library with semantic search, and app publishing on your own domain.',
        }),
      },
    ],
    honest: t9({
      fr: "Si vous avez déjà une base en production et que vous voulez simplement donner à des non-techniciens une interface dessus, sans toucher au schéma ni migrer quoi que ce soit, NocoDB fait exactement ça et TblFlow est le mauvais outil. C'est aussi le seul des deux à supporter MySQL et SQL Server.",
      en: 'If you already have a production database and simply want to give non-technical people an interface onto it, without touching the schema or migrating anything, NocoDB does exactly that and TblFlow is the wrong tool. It is also the only one of the two supporting MySQL and SQL Server.',
    }),
  },

  monday: {
    category: t9({ fr: 'plateforme de gestion du travail', en: 'work management platform' }),
    summary: t9({
      fr: "Monday.com est une plateforme de gestion du travail : elle excelle à suivre des projets et des équipes. TblFlow est une base de données : elle excelle à modéliser des données liées et à les faire travailler. Le recouvrement est réel, la vocation ne l'est pas.",
      en: 'Monday.com is a work management platform: it excels at tracking projects and teams. TblFlow is a database: it excels at modelling related data and putting it to work. The overlap is real, the purpose is not the same.',
    }),
    differences: [
      {
        title: t9({ fr: 'Modèle de données relationnel', en: 'Relational data model' }),
        body: t9({
          fr: "Les tableaux Monday sont conçus autour d'éléments et de sous-éléments. Dès qu'il faut relier plusieurs entités — contacts, sociétés, deals, factures — avec lookups et rollups conditionnels, on atteint vite la limite du modèle. C'est le terrain natif d'une base relationnelle.",
          en: 'Monday boards are built around items and subitems. As soon as you need several related entities — contacts, companies, deals, invoices — with lookups and conditional rollups, the model runs out of room. That is a relational database\'s native ground.',
        }),
      },
      {
        title: t9({ fr: 'Accès SQL direct', en: 'Direct SQL access' }),
        body: t9({
          fr: "Monday expose une API GraphQL ; toute analyse passe par elle ou par un connecteur BI. Avec TblFlow, votre outil de BI se branche directement sur l'instance Postgres, sans intermédiaire ni délai de synchronisation.",
          en: 'Monday exposes a GraphQL API; any analysis goes through it or through a BI connector. With TblFlow, your BI tool points straight at the Postgres instance — no intermediary, no sync lag.',
        }),
      },
      {
        title: t9({ fr: 'Facturation', en: 'Billing' }),
        body: t9({
          fr: "Monday facture par siège, par paliers de sièges, avec un minimum de 3. Un usage où la valeur vient d'agents qui tournent sans compte utilisateur s'y modélise mal.",
          en: 'Monday bills per seat, in seat tiers, with a minimum of 3. Usage whose value comes from agents running without a user account maps poorly onto that.',
        }),
      },
    ],
    honest: t9({
      fr: "Pour du suivi de projet pur — planning d'équipe, charge, dépendances, reporting de portefeuille — Monday est plus abouti et plus immédiat. Si votre besoin s'arrête à la gestion de projet, TblFlow vous demandera de construire ce que Monday fournit déjà.",
      en: 'For pure project tracking — team planning, workload, dependencies, portfolio reporting — Monday is more complete and more immediate. If your need stops at project management, TblFlow will ask you to build what Monday already ships.',
    }),
  },

  notion: {
    category: t9({ fr: 'espace de travail documentaire', en: 'document workspace' }),
    summary: t9({
      fr: "Notion est d'abord un espace documentaire auquel on a ajouté des bases. TblFlow est d'abord une base de données à laquelle on a ajouté des documents. Cet ordre décide de tout le reste : performance, structure et automatisation.",
      en: 'Notion is a document workspace with databases added. TblFlow is a database with documents added. That ordering decides everything else: performance, structure and automation.',
    }),
    differences: [
      {
        title: t9({ fr: 'Structure imposée ou facultative', en: 'Structure enforced or optional' }),
        body: t9({
          fr: "Dans Notion, une propriété de base reste souple, ce qui est une qualité pour des notes et un défaut pour des données : deux orthographes d'un même statut coexistent sans bruit. TblFlow contraint au niveau du champ, donc les regroupements et les filtres sont fiables.",
          en: "In Notion a database property stays loose — a virtue for notes, a flaw for data: two spellings of the same status coexist silently. TblFlow constrains at field level, so grouping and filtering are trustworthy.",
        }),
      },
      {
        title: t9({ fr: 'Volume', en: 'Volume' }),
        body: t9({
          fr: "Les bases Notion deviennent lentes à quelques milliers d'entrées, filtres et rollups compris. TblFlow est conçu pour des millions de lignes par base, avec des temps de réponse sous la seconde.",
          en: 'Notion databases get slow at a few thousand entries, filters and rollups included. TblFlow is built for millions of rows per base, with sub-second response.',
        }),
      },
      {
        title: t9({ fr: 'Recherche sémantique sur vos documents', en: 'Semantic search over your documents' }),
        body: t9({
          fr: "Les deux produits ont une bibliothèque de documents. TblFlow y ajoute une recherche vectorielle et plein texte fusionnées par reciprocal rank fusion, et un graphe de liens entre documents — de quoi alimenter un agent, pas seulement un humain qui cherche.",
          en: 'Both have a document library. TblFlow adds vector and full-text search fused with reciprocal rank fusion, plus a link graph between documents — enough to feed an agent, not just a human searching.',
        }),
      },
    ],
    honest: t9({
      fr: "Pour rédiger, structurer une base de connaissances ou tenir un wiki d'équipe, Notion reste supérieur : l'édition de texte y est de meilleure qualité et la prise en main immédiate. Beaucoup d'équipes gagnent à garder Notion pour l'écrit et à mettre les données ailleurs.",
      en: 'For writing, structuring a knowledge base or running a team wiki, Notion remains better: the text editing is stronger and the learning curve shorter. Plenty of teams are best served keeping Notion for prose and putting data elsewhere.',
    }),
  },

  salesforce: {
    category: t9({ fr: 'CRM d’entreprise', en: 'enterprise CRM' }),
    summary: t9({
      fr: "Salesforce est un CRM d'entreprise, profond et paramétrable, dont la mise en œuvre suppose un intégrateur. TblFlow est une base de données généraliste sur laquelle un CRM se construit en quelques jours — et qui sert aussi à tout le reste.",
      en: 'Salesforce is a deep, configurable enterprise CRM whose rollout assumes an integrator. TblFlow is a general-purpose database on which a CRM takes a few days to build — and which serves everything else too.',
    }),
    differences: [
      {
        title: t9({ fr: 'Délai de mise en œuvre', en: 'Time to value' }),
        body: t9({
          fr: "Un déploiement Salesforce se compte en mois et mobilise généralement un intégrateur. Une base TblFlow se crée en quelques minutes et se modifie sans ticket : le schéma, les vues et les automatisations sont modifiables par l'équipe qui s'en sert.",
          en: 'A Salesforce rollout is measured in months and usually needs an integrator. A TblFlow base is created in minutes and changed without a ticket: schema, views and automations are editable by the team that uses them.',
        }),
      },
      {
        title: t9({ fr: 'Périmètre', en: 'Scope' }),
        body: t9({
          fr: "Salesforce modélise le cycle de vente. Tout ce qui n'en relève pas — RH, opérations, suivi produit — demande un autre outil ou un développement sur mesure. TblFlow ne présuppose aucun domaine métier.",
          en: 'Salesforce models the sales cycle. Anything outside it — HR, operations, product tracking — needs another tool or custom development. TblFlow presupposes no business domain.',
        }),
      },
      {
        title: t9({ fr: 'Propriété des données', en: 'Data ownership' }),
        body: t9({
          fr: "Salesforce est infogéré, sans option d'auto-hébergement. Le palier Enterprise de TblFlow, sur devis, se déploie sur votre propre infrastructure ou dans votre VPC — ce qui change la conversation avec un DPO ou une équipe conformité.",
          en: "Salesforce is managed only, with no self-hosting option. TblFlow's Enterprise tier, on quote, deploys on your own infrastructure or in your VPC — which changes the conversation with a DPO or a compliance team.",
        }),
      },
    ],
    honest: t9({
      fr: "Pour une force de vente de plusieurs centaines de personnes, avec prévisions, territoires, gestion des commissions et un écosystème de partenaires certifiés, Salesforce fait des choses que TblFlow ne prétend pas faire. À cette échelle, la comparaison n'a pas lieu d'être.",
      en: 'For a sales force of several hundred people, with forecasting, territories, commission management and a certified partner ecosystem, Salesforce does things TblFlow does not claim to. At that scale the comparison does not apply.',
    }),
  },
};

/** Display name, reused in titles and headings. */
export const labelOf = (slug: CompetitorSlug) => COMPETITOR_LABELS[slug];
