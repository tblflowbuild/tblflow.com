/**
 * Copy for the MCP server page, its home band, its pricing line, the privacy
 * section and the footer link. French is the source: every other locale has the
 * same keys in a sibling file (`satisfies Record<McpKey, string>`, so a missing
 * key is a compile error rather than a silent English fallback).
 */
const fr = {
  nav: 'Serveur MCP',
  'meta.title': 'Serveur MCP officiel : TblFlow dans Claude',
  'meta.description':
    "Connectez TblFlow à Claude en un clic : le serveur MCP officiel lit et écrit vos données avec vos droits et vos espaces choisis. Dès le palier Gratuit.",
  breadcrumb: 'Serveur MCP',
  'hero.eyebrow': 'Serveur MCP officiel',
  'hero.title': 'Travaillez sur vos données TblFlow depuis Claude.',
  'hero.subtitle':
    "Ajoutez TblFlow comme connecteur dans Claude, connectez-vous avec votre compte habituel et choisissez les espaces accessibles. Claude peut alors interroger, créer et modifier vos enregistrements depuis la conversation.",
  'hero.cta.primary': 'Voir comment connecter',
  'hero.cta.secondary': 'Lire la documentation',
  'hero.note': "Disponible dès le palier Gratuit, comme l'API REST.",
  'hero.url.label': 'URL du serveur',
  'benefits.title': 'Ce que ça change',
  'benefits.1.title': 'Interroger vos données',
  'benefits.1.body':
    "Posez vos questions à Claude : il lit le schéma de vos bases, filtre les enregistrements et cherche dans le knowledge graph, en recherche sémantique et en plein texte.",
  'benefits.2.title': 'Agir depuis la conversation',
  'benefits.2.body':
    "Créez et modifiez des enregistrements, ajoutez une table ou un champ, déclenchez une automatisation ou lancez un agent IA, sans quitter Claude.",
  'benefits.3.title': 'Garder la main',
  'benefits.3.body':
    "À la connexion, vous choisissez les espaces et bases accessibles et les permissions. Vos droits TblFlow s'appliquent à chaque requête.",
  'tools.title': '13 outils, en langage simple',
  'tools.intro':
    "Voici ce que Claude peut faire. Les capacités les plus sensibles sont des options que vous activez à la connexion.",
  'tools.1.title': 'Explorer',
  'tools.1.body': 'Lister vos espaces et vos bases.',
  'tools.2.title': 'Comprendre',
  'tools.2.body': "Décrire le schéma d'une base.",
  'tools.3.title': 'Lire',
  'tools.3.body': 'Lister, filtrer et lire des enregistrements.',
  'tools.4.title': 'Rechercher',
  'tools.4.body': 'Chercher dans le knowledge graph, en recherche sémantique et en plein texte.',
  'tools.5.title': 'Créer et modifier',
  'tools.5.body': 'Créer et modifier des enregistrements.',
  'tools.6.title': 'Supprimer',
  'tools.6.body':
    "Supprimer des enregistrements : un aperçu d'abord, puis une confirmation explicite. Les enregistrements vont à la corbeille.",
  'tools.7.title': 'Structurer',
  'tools.7.body': 'Créer une table ou un champ.',
  'tools.8.title': 'Automatiser',
  'tools.8.body': "Déclencher une automatisation, si son propriétaire l'a exposée.",
  'tools.9.title': 'Déléguer',
  'tools.9.body': "Lancer un agent IA, si son propriétaire l'a exposé.",
  'tools.perm.read': 'Lecture (par défaut)',
  'tools.perm.write': 'Écriture (option)',
  'tools.perm.delete': 'Suppression (option)',
  'tools.perm.schema': 'Schéma (option)',
  'tools.perm.trigger': 'Déclenchement (option)',
  'steps.title': 'Connecter en trois étapes',
  'steps.1.title': 'Ajouter un connecteur personnalisé',
  'steps.1.body':
    "Dans Claude (web, bureau ou mobile) : Paramètres → Connecteurs → Ajouter un connecteur personnalisé, puis saisissez l'URL du serveur.",
  'steps.2.title': 'Se connecter',
  'steps.2.body': 'Connectez-vous avec votre compte TblFlow habituel (OAuth 2.1).',
  'steps.3.title': 'Choisir les espaces',
  'steps.3.body':
    "Sélectionnez les espaces et bases accessibles, puis les permissions. La lecture est active par défaut.",
  'steps.code.title': 'Avec Claude Code',
  'steps.code.body': 'Une commande suffit :',
  'control.title': 'Ce que vous contrôlez',
  'control.1':
    "Vous choisissez ce que Claude voit : espaces, bases et permissions. Lecture par défaut ; écriture, suppression, schéma et déclenchement sont des options.",
  'control.2': "Vos droits TblFlow existants s'appliquent à chaque requête.",
  'control.3':
    "Les automatisations et les agents ne sont déclenchables que si leur propriétaire les a exposés.",
  'control.4':
    "Une suppression passe par un aperçu puis une confirmation explicite, et les enregistrements vont à la corbeille.",
  'control.5':
    "Le contenu des conversations n'est pas journalisé : seuls l'outil appelé, l'heure, la durée et l'état sont conservés. Les résultats d'outils sont transmis à l'assistant (Claude) pour répondre à votre demande.",
  'control.6':
    "Conçu selon les pratiques ISO 27001 et ISO 42001, le RGPD et l'AI Act. C'est une démarche de conception : aucune certification n'est acquise à ce jour.",
  'limits.title': 'Limites de débit par palier',
  'limits.intro':
    "Le serveur MCP est inclus dans chaque palier. Seule la limite de requêtes par minute change.",
  'limits.col.tier': 'Palier',
  'limits.col.rate': 'Requêtes par minute',
  'status.title': 'Où le trouver',
  'status.body':
    "Le serveur est publié dans le registre MCP officiel sous le nom com.tblflow/tblflow (version 1.0.0). La soumission à l'annuaire de connecteurs de Claude est à venir. ChatGPT n'est pas encore pris en charge.",
  'faq.title': 'Questions fréquentes',
  'faq.1.q': 'Qui voit mes données ?',
  'faq.1.a':
    "Vous choisissez les espaces et bases accessibles à la connexion, et vos droits TblFlow s'appliquent à chaque requête. Les résultats des outils sont transmis à l'assistant (Claude) pour répondre à votre demande. TblFlow ne journalise pas le contenu des conversations : seuls l'outil appelé, l'heure, la durée et l'état sont conservés.",
  'faq.2.q': "Puis-je révoquer l'accès ?",
  'faq.2.a':
    "Oui. Supprimez le connecteur dans les paramètres de Claude : Claude cesse d'accéder à vos données TblFlow.",
  'faq.3.q': 'ChatGPT est-il pris en charge ?',
  'faq.3.a':
    "Pas encore. Le serveur est publié dans le registre MCP officiel (com.tblflow/tblflow, version 1.0.0) et se connecte à Claude. La soumission à l'annuaire de connecteurs de Claude est à venir.",
  'faq.4.q': 'Le serveur MCP est-il disponible dans le plan Gratuit ?',
  'faq.4.a':
    "Oui, dès le palier Gratuit, comme l'API REST. Seule la limite de débit change : 60, 120, 300 et 600 requêtes par minute pour Gratuit, Pro, Business et Enterprise.",
  'faq.5.q': 'Que peut faire Claude avec mes automatisations et mes agents ?',
  'faq.5.a':
    "Il peut les déclencher uniquement si leur propriétaire les a exposés. Pour une automatisation, run_automation lance un test à blanc avec des données d'exemple : aucune donnée n'est modifiée.",
  'home.line': 'Connectez TblFlow à Claude — serveur MCP officiel',
  'home.card.title': 'Claude',
  'home.card.body':
    "Interrogez et modifiez vos données TblFlow depuis la conversation, avec vos droits et les espaces que vous choisissez.",
  'home.card.cta': 'Découvrir le serveur MCP',
  'pricing.row': 'Serveur MCP : requêtes / minute',
  'pricing.highlight': 'Serveur MCP inclus : {n} requêtes / minute',
  'privacy.heading': 'Serveur MCP',
  'privacy.p1':
    "Cette section décrit les traitements propres au serveur MCP de TblFlow (https://app.tblflow.com/mcp), qui permet à un assistant d'IA tel que Claude d'accéder à votre espace TblFlow. Le serveur fait partie de l'application : ses documents (conditions, politique de confidentialité, accord de traitement) sont publiés sur app.tblflow.com.",
  'privacy.p2':
    "Données traitées : à la connexion, votre identité TblFlow (OAuth 2.1) et les espaces, bases et permissions que vous choisissez ; à chaque appel, les données de votre espace que l'outil demandé lit ou écrit, dans la limite de vos droits.",
  'privacy.p3':
    "Finalité : exécuter les actions que vous demandez à l'assistant et assurer la sécurité du service.",
  'privacy.p4':
    "Conservation : le contenu des conversations n'est jamais enregistré, pas plus que les arguments et les résultats des outils. Un journal d'audit conserve, pour chaque appel d'outil, l'identifiant de l'utilisateur, le nom de l'outil, l'heure, la durée en millisecondes et l'état (succès ou erreur), pendant 6 mois, puis il est purgé automatiquement. Les clients OAuth enregistrés dynamiquement et restés inutilisés sont purgés après 30 jours.",
  'privacy.p5':
    "Partage : les résultats des outils sont transmis à l'assistant que vous avez connecté (par exemple Claude, d'Anthropic), qui les traite pour répondre à votre demande selon sa propre politique de confidentialité. Ne connectez que les espaces dont vous acceptez que le contenu soit transmis à l'assistant.",
  'privacy.p6':
    "Cadre : le serveur est conçu selon les pratiques ISO 27001 et ISO 42001, le RGPD et l'AI Act. Aucune certification n'est acquise à ce jour.",
  'privacy.p7':
    "Vos droits (accès, rectification, effacement, limitation, opposition, portabilité, et réclamation auprès de l'autorité de contrôle) s'exercent pour ces traitements comme décrit plus haut. Contact protection des données :",
} as const;

export type McpKey = keyof typeof fr;
export default fr;
