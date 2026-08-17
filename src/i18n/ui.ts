import type { Locale } from '@/config';

/**
 * All UI chrome strings, both locales side by side.
 *
 * Deliberately a flat typed object rather than JSON files: the `Record<Locale, ...>`
 * shape makes a missing translation a build-time type error instead of a silent
 * fallback to the French string on the English page — which is exactly the bug
 * that quietly wrecks an `hreflang` setup.
 */
export const ui = {
  fr: {
    'nav.product': 'Produit',
    'nav.pricing': 'Tarifs',
    'nav.blog': 'Blog',
    'nav.docs': 'Documentation',
    'nav.login': 'Se connecter',
    'nav.cta': 'Commencer gratuitement',
    'nav.menu': 'Menu',
    'nav.skip': 'Aller au contenu principal',

    'hero.eyebrow': 'Base de données · Agents IA · Workflows',
    'hero.title': "L'interface moderne de base de données pour les équipes",
    'hero.subtitle':
      "Collaboration en temps réel, agents IA autonomes et automatisations, sur un vrai PostgreSQL. Entièrement infogéré, ou sur vos serveurs.",
    'hero.cta.primary': 'Commencer gratuitement',
    'hero.cta.secondary': 'Voir les tarifs',
    'hero.note': 'Aucune carte bancaire requise · Auto-hébergeable · Sans verrouillage propriétaire',

    'proof.rows': 'lignes par base',
    'proof.rows.value': 'Des millions',
    'proof.views': 'types de vues',
    'proof.fields': 'types de champs',
    'proof.deploy': 'pour démarrer',
    'proof.deploy.value': '5 minutes',

    'features.title': 'Une plateforme, cinq surfaces',
    'features.subtitle':
      "Vos données structurées deviennent du logiciel qui tourne — sans quitter la plateforme.",

    'why.title': 'Pourquoi TblFlow',
    'why.subtitle': 'Ce que les autres outils ne font pas.',

    'compare.title': 'Comparatif',
    'compare.subtitle': 'Face aux plateformes que vous connaissez déjà.',
    'compare.feature': 'Fonctionnalité',
    'compare.yes': 'Oui',
    'compare.no': 'Non',
    'compare.partial': 'Partiel',

    'pricing.title': 'Tarifs',
    'pricing.subtitle': 'Commencez gratuitement. Changez de palier quand votre équipe grandit.',
    'pricing.month': '/mois',
    'pricing.free': 'Gratuit',
    'pricing.custom': 'Sur devis',
    'pricing.cta': 'Commencer',
    'pricing.cta.enterprise': 'Nous contacter',
    'pricing.popular': 'Le plus choisi',
    'pricing.compare': 'Comparer les paliers en détail',
    'pricing.selfhost.title': 'Ou auto-hébergez gratuitement',
    'pricing.selfhost.body':
      "TblFlow est auto-hébergeable avec toutes les fonctionnalités Enterprise débloquées : aucune clé de licence, aucun abonnement, aucun plafond d'usage.",
    'pricing.selfhost.cta': 'Voir le dépôt',

    'faq.title': 'Questions fréquentes',
    'faq.subtitle': 'Ce qu’on nous demande le plus souvent.',
    'faq.search': 'Rechercher une question…',
    'faq.empty': 'Aucune question ne correspond à cette recherche.',
    'faq.all': 'Tout',

    'cta.title': 'Prêt à transformer vos données en logiciel ?',
    'cta.body': 'Créez votre première base en quelques minutes. Gratuit, sans carte bancaire.',
    'cta.primary': 'Commencer gratuitement',
    'cta.secondary': 'Parler à quelqu’un',

    'blog.title': 'Blog',
    'blog.subtitle': 'Notes de produit, guides et retours d’ingénierie.',
    'blog.readmore': 'Lire',
    'blog.back': 'Tous les articles',
    'blog.published': 'Publié le',
    'blog.updated': 'Mis à jour le',
    'blog.readingtime': 'min de lecture',
    'blog.empty': 'Aucun article pour le moment.',
    'blog.toc': 'Sommaire',

    'footer.product': 'Produit',
    'footer.resources': 'Ressources',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.rights': 'Tous droits réservés.',
    'footer.lang': 'Langue',

    'lang.fr': 'Français',
    'lang.en': 'English',

    '404.title': 'Page introuvable',
    '404.body': "Cette page n'existe pas ou a été déplacée.",
    '404.cta': "Retour à l'accueil",
  },

  en: {
    'nav.product': 'Product',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.docs': 'Docs',
    'nav.login': 'Log in',
    'nav.cta': 'Start for free',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to main content',

    'hero.eyebrow': 'Database · AI agents · Workflows',
    'hero.title': 'The modern database UI for teams',
    'hero.subtitle':
      'Real-time collaboration, autonomous AI agents and workflows, on real PostgreSQL. Fully managed, or on your servers.',
    'hero.cta.primary': 'Start for free',
    'hero.cta.secondary': 'See pricing',
    'hero.note': 'No credit card required · Self-hostable · No vendor lock-in',

    'proof.rows': 'rows per base',
    'proof.rows.value': 'Millions',
    'proof.views': 'view types',
    'proof.fields': 'field types',
    'proof.deploy': 'to get started',
    'proof.deploy.value': '5 minutes',

    'features.title': 'One platform, five surfaces',
    'features.subtitle':
      'Your structured data becomes working software — without leaving the platform.',

    'why.title': 'Why TblFlow',
    'why.subtitle': 'What the other tools do not do.',

    'compare.title': 'Comparison',
    'compare.subtitle': 'Against the platforms you already know.',
    'compare.feature': 'Feature',
    'compare.yes': 'Yes',
    'compare.no': 'No',
    'compare.partial': 'Partial',

    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Start free. Move up a tier when your team grows.',
    'pricing.month': '/month',
    'pricing.free': 'Free',
    'pricing.custom': 'Custom',
    'pricing.cta': 'Get started',
    'pricing.cta.enterprise': 'Contact us',
    'pricing.popular': 'Most popular',
    'pricing.compare': 'Compare tiers in detail',
    'pricing.selfhost.title': 'Or self-host for free',
    'pricing.selfhost.body':
      'TblFlow is self-hostable with every Enterprise feature unlocked: no license key, no subscription, no usage caps.',
    'pricing.selfhost.cta': 'View the repository',

    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'What people ask us most.',
    'faq.search': 'Search a question…',
    'faq.empty': 'No question matches that search.',
    'faq.all': 'All',

    'cta.title': 'Ready to turn your data into software?',
    'cta.body': 'Build your first base in minutes. Free, no credit card.',
    'cta.primary': 'Start for free',
    'cta.secondary': 'Talk to someone',

    'blog.title': 'Blog',
    'blog.subtitle': 'Product notes, guides and engineering write-ups.',
    'blog.readmore': 'Read',
    'blog.back': 'All posts',
    'blog.published': 'Published',
    'blog.updated': 'Updated',
    'blog.readingtime': 'min read',
    'blog.empty': 'No posts yet.',
    'blog.toc': 'Contents',

    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.lang': 'Language',

    'lang.fr': 'Français',
    'lang.en': 'English',

    '404.title': 'Page not found',
    '404.body': 'This page does not exist or has moved.',
    '404.cta': 'Back to home',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fr'];

/** Returns a bound translator, so components read `t('nav.pricing')`. */
export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key];
  };
}
