import type { FeaturesCopy } from './types';

/** French is the source; the other locales translate these same ids. */
const fr = {
  nav: 'Fonctionnalités',
  metaTitle: 'Fonctionnalités : tout ce que fait TblFlow',
  metaDescription:
    "Tables, interfaces, automatisations, tableaux blancs, agents IA, documentation, droits, audits RGPD et AI Act : le catalogue des fonctionnalités de TblFlow.",
  eyebrow: 'Fonctionnalités',
  title: 'Tout ce que TblFlow fait pour vous.',
  subtitle:
    "Sept ressources que TblFlow génère à partir de vos process, et les fonctions qui les entourent : droits, IA maîtrisée, connexions à vos outils.",
  availability: "La disponibilité de certaines fonctions dépend de l'offre.",
  pricingLink: 'Voir les tarifs',
  home: {
    title: 'Tout ce que TblFlow sait faire',
    body: "Tables, interfaces, automatisations, tableaux blancs, agents, documentation, droits, audits : le catalogue complet, regroupé en quatre familles.",
    link: 'Voir toutes les fonctionnalités',
  },
  groups: {
    build: {
      title: 'Ce que TblFlow génère',
      intro: "Sept ressources, créées à partir de la carte de vos process. Vous relisez avant de mettre en service.",
    },
    team: {
      title: 'Travailler à plusieurs, en gardant le contrôle',
      intro: "Chacun voit et fait ce que vous avez décidé, et ce qui se passe reste traçable.",
    },
    ai: {
      title: "Une IA que vous maîtrisez",
      intro: "Le fournisseur, le contexte, la consommation et les audits : l'IA reste sous votre contrôle.",
    },
    connect: {
      title: 'Relié à vos outils, prêt pour la production',
      intro: "Vos autres outils restent connectés, et vous testez avant de publier.",
    },
  },
  items: {
    tables: {
      title: 'Des tables avec leur API',
      body: "Des tables sur du vrai PostgreSQL, chacune accessible par l'API REST.",
    },
    interfaces: {
      title: 'Des interfaces, publiables en ligne',
      body: "Des interfaces construites sur vos tables, que vous pouvez publier en ligne.",
    },
    automations: {
      title: 'Des automatisations',
      body: "Des enchaînements d'actions qui remplacent la ressaisie. Ils sont créés inactifs : vous les relisez avant de les activer.",
    },
    whiteboards: {
      title: 'Des tableaux blancs',
      body: "Un tableau blanc collaboratif au sein d'une base, pour schématiser et réfléchir à plusieurs, avec l'aide de l'IA.",
    },
    browsers: {
      title: 'Des automatisations de navigateur',
      body: "Pour un site sans API, un navigateur piloté par l'IA (computer use) rejoue la tâche à votre place, après votre accord.",
    },
    agents: {
      title: 'Des agents IA',
      body: "Des agents chargés d'une mission précise, avec les outils et les droits que vous leur donnez, sous vos règles et votre validation.",
    },
    docs: {
      title: "Une documentation indexée par l'IA (DocIndex)",
      body: "Vos documents sont indexés pour une recherche par le sens comme par les mots, que l'IA et vos agents peuvent consulter.",
    },
    permissions: {
      title: 'Des habilitations sur mesure',
      body: "Des rôles et des droits granulaires que vous définissez, appliqués à chaque requête, y compris celles de l'IA.",
    },
    invitations: {
      title: 'Collaborateurs et personnes externes',
      body: "Invitez vos collaborateurs ou des personnes extérieures à l'entreprise, avec uniquement les accès que vous choisissez.",
    },
    orgchart: {
      title: "Un organigramme d'entreprise",
      body: "Importez l'organigramme de votre entreprise pour que TblFlow reflète votre organisation.",
    },
    tokens: {
      title: "Jetons d'accès personnels",
      body: "Chaque utilisateur crée et gère ses propres jetons pour appeler l'API.",
    },
    myNotifications: {
      title: 'Vos notifications, à votre façon',
      body: "Chaque utilisateur règle les notifications qu'il reçoit.",
    },
    logs: {
      title: 'Un journal de logs',
      body: "Une trace des actions réalisées dans votre espace, à consulter pour comprendre ce qui s'est passé.",
    },
    providers: {
      title: "Le fournisseur d'IA de votre choix",
      body: "TblFlow n'est lié à aucun fournisseur d'IA : branchez celui de votre entreprise ou un compte individuel.",
    },
    context: {
      title: 'Une IA qui connaît votre contexte',
      body: "L'assistant connaît la structure de votre espace (bases, champs, processus) et répond à partir d'elle.",
    },
    usage: {
      title: "Votre consommation d'IA",
      body: "Suivez ce que l'IA consomme dans votre espace.",
    },
    aiAct: {
      title: 'Audit AI Act',
      body: "Une solution générée par l'IA est auditée automatiquement pour vous aider à préparer vos obligations liées au règlement européen sur l'IA. Cela ne remplace pas un avis juridique.",
    },
    gdpr: {
      title: 'Audit RGPD automatique',
      body: "Un audit RGPD automatique de ce que vous construisez, pour repérer les points à traiter.",
    },
    designMd: {
      title: 'Votre charte avec design.md',
      body: "Intégrez votre fichier design.md : l'IA s'en sert pour que les interfaces générées suivent votre charte.",
    },
    skills: {
      title: 'Skills : générer et importer',
      body: "Générez ou importez des Skills pour donner à vos agents des savoir-faire réutilisables.",
    },
    connectors: {
      title: 'Un générateur de connecteurs API',
      body: "Créez, avec l'aide de l'IA, un connecteur vers l'API d'un outil qui n'en a pas de prêt à l'emploi.",
    },
    oauth: {
      title: 'Applications OAuth',
      body: "Connectez vos applications par OAuth, sans partager de mot de passe.",
    },
    mcp: {
      title: "MCP, partout où l'IA agit",
      body: "Branchez des serveurs MCP : ils sont utilisables dans le chat IA, les automatisations et les agents. TblFlow a aussi son propre serveur MCP.",
    },
    chatNotifications: {
      title: 'Notifications Slack, Teams, Google Chat',
      body: "Recevez les notifications de TblFlow dans l'outil de messagerie de votre équipe.",
    },
    email: {
      title: 'E-mails des automatisations',
      body: "Configurez l'envoi d'e-mails depuis vos automatisations.",
    },
    preprod: {
      title: 'Un espace de pré-production',
      body: "Testez vos solutions dans un espace séparé avant de les mettre en service.",
    },
  },
} satisfies FeaturesCopy;

export default fr;
