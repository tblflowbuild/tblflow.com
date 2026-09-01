import { t9, type Locale } from '@/config';

/**
 * Content for the three statutory/compliance pages (mentions légales, privacy,
 * cookies). Kept here rather than inline in the page files because the
 * mentions légales body is reused verbatim across every locale route (French
 * administrative law does not translate), while privacy/cookies follow the
 * rest of the site's fr/en-written, English-fallback pattern via `t9`.
 *
 * IMPORTANT: this is drafted content, not legal advice. Have it reviewed by a
 * lawyer before it goes live — in particular the data-retention periods and
 * the subprocessor list, which only the company can state authoritatively.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

/** Company identity, used by both the legal notice and the privacy policy. */
export const COMPANY = {
  name: 'SPACE UNITY',
  form: 'SAS (société par actions simplifiée)',
  capital: '40 000 €',
  siren: '994 377 208',
  siret: '994 377 208 00016',
  rcs: 'RCS Charleville-Mézières',
  vat: 'FR38994377208',
  address: '34 Route Nationale, 08140 Douzy, France',
  publisher: 'Tommy Lambert, Président',
  email: 'contact@tblflow.com',
} as const;

export const HOST = {
  name: 'Cloudflare, Inc.',
  address: '101 Townsend St, San Francisco, CA 94107, USA',
} as const;

/** Payment processor, named in both the privacy policy and the CGVU. The EU
 * entity is the one a French SAS contracts with — confirm against the Stripe
 * dashboard's own legal entity before this is filed anywhere binding. */
export const PSP = {
  name: 'Stripe Payments Europe, Ltd.',
  address: '1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irlande',
} as const;

/** Shown once at the top of the (French-only) legal notice on non-French routes. */
export const LEGAL_NOTICE_NOTE: Record<Locale, string> = t9({
  fr: '',
  en: 'French law requires this notice to be published in French — the text below is not translated.',
});

export const LEGAL_NOTICE_TITLE: Record<Locale, string> = t9({
  fr: 'Mentions légales',
  en: 'Legal notice',
});

/** Single French body, reused on every locale route — see the module comment. */
export const LEGAL_NOTICE_SECTIONS: LegalSection[] = [
  {
    heading: 'Éditeur du site',
    body: [
      `${COMPANY.name}, ${COMPANY.form} au capital de ${COMPANY.capital}, immatriculée au ${COMPANY.rcs} sous le numéro ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Numéro de TVA intracommunautaire : ${COMPANY.vat}.`,
      `Siège social : ${COMPANY.address}.`,
      `Directeur de la publication : ${COMPANY.publisher}.`,
      `Contact : ${COMPANY.email}.`,
    ],
  },
  {
    heading: 'Hébergement',
    body: [
      `Le site est hébergé par ${HOST.name}, ${HOST.address}.`,
    ],
  },
  {
    heading: 'Propriété intellectuelle',
    body: [
      "L'ensemble des éléments de ce site (textes, logos, illustrations, structure) est la propriété de SPACE UNITY ou de ses concédants, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    heading: 'Responsabilité',
    body: [
      "SPACE UNITY s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. SPACE UNITY ne saurait être tenue responsable des erreurs, omissions ou de l'indisponibilité temporaire du site.",
    ],
  },
  {
    heading: 'Données personnelles',
    body: [
      "Les données à caractère personnel traitées via ce site sont décrites dans la politique de confidentialité, accessible depuis le pied de page. L'utilisation des cookies est détaillée dans la politique cookies, également accessible depuis le pied de page.",
    ],
  },
  {
    heading: 'Droit applicable',
    body: [
      'Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.',
    ],
  },
];

export const PRIVACY_TITLE: Record<Locale, string> = t9({
  fr: 'Politique de confidentialité',
  en: 'Privacy policy',
});

export const PRIVACY_LEDE: Record<Locale, string> = t9({
  fr: "Cette page décrit les données que SPACE UNITY traite dans le cadre du site tblflow.com et de la relation commerciale avec ses clients (souscription, facturation, paiement), pourquoi, et les droits dont vous disposez. Elle ne couvre pas les données que vous hébergez vous-même dans l'application TblFlow (app.tblflow.com) : SPACE UNITY n'y agit qu'en qualité de sous-traitant, dans le cadre d'un accord de sous-traitance (DPA) distinct, disponible sur demande à " + COMPANY.email + '.',
  en: 'This page describes the data SPACE UNITY processes for the tblflow.com site and for the commercial relationship with its customers (subscription, billing, payment), why, and the rights you have. It does not cover the data you host yourself in the TblFlow application (app.tblflow.com): there SPACE UNITY acts only as a processor, under a separate data processing agreement (DPA) available on request at ' + COMPANY.email + '.',
});

/** Bump by hand whenever a PRIVACY_SECTIONS paragraph changes. */
export const PRIVACY_LAST_UPDATED: Record<Locale, string> = t9({
  fr: 'Dernière mise à jour : 1er septembre 2026.',
  en: 'Last updated: September 1, 2026.',
});

export const PRIVACY_SECTIONS: Record<Locale, LegalSection[]> = t9({
  fr: [
    {
      heading: 'Responsable du traitement',
      body: [
        `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, immatriculée sous le numéro ${COMPANY.siren} (${COMPANY.rcs}). Contact : ${COMPANY.email}.`,
        "SPACE UNITY n'a pas désigné de délégué à la protection des données (DPO) — sa taille ne l'y oblige pas. Toute demande relative à vos données personnelles peut être adressée directement à l'adresse ci-dessus.",
      ],
    },
    {
      heading: 'Données collectées',
      body: [
        "Le site tblflow.com ne comporte aucun formulaire d'inscription ni de compte utilisateur : la souscription et la connexion s'effectuent depuis l'application (app.tblflow.com).",
        "Si vous souscrivez un palier payant, nous traitons les données nécessaires à la facturation : adresse email, nom ou raison sociale, adresse de facturation, pays, numéro de TVA le cas échéant, palier et cycle de facturation souscrits, et historique des paiements. Les coordonnées de carte bancaire sont saisies directement sur les pages hébergées par notre prestataire de paiement : elles ne transitent pas par nos serveurs, SPACE UNITY n'y a pas accès et n'en conserve aucune copie.",
        "Une préférence d'affichage (thème clair ou sombre) est enregistrée localement dans votre navigateur (localStorage). Cette information reste sur votre appareil et n'est jamais transmise à SPACE UNITY ni à un tiers.",
        "Si vous consentez à la mesure d'audience (voir la politique cookies), Google Analytics 4 collecte des données de navigation pseudonymisées : pages visitées, durée de visite, type d'appareil, provenance approximative (pays/région, jamais l'adresse IP complète — l'anonymisation IP est activée).",
        'Si vous nous contactez par email, nous traitons les données que vous nous transmettez (adresse email, contenu du message) dans le seul but de répondre à votre demande.',
      ],
    },
    {
      heading: 'Finalités et bases légales',
      body: [
        "Mesure d'audience (Google Analytics 4) : sur la base de votre consentement (article 6.1.a du RGPD), révocable à tout moment via le lien « Gérer les cookies » en pied de page.",
        "Réponse aux demandes de contact : sur la base de l'intérêt légitime à assurer le support et la relation commerciale (article 6.1.f du RGPD).",
        "Gestion des souscriptions, des paiements et de la facturation : sur la base de l'exécution du contrat vous liant à SPACE UNITY (article 6.1.b du RGPD). La conservation des factures et pièces comptables repose quant à elle sur le respect d'une obligation légale (article 6.1.c du RGPD).",
      ],
    },
    {
      heading: 'Destinataires des données',
      body: [
        `${PSP.name} (${PSP.address}), en tant que prestataire de paiement, pour le traitement des souscriptions, des paiements, de la facturation et des remboursements des paliers payants. Stripe agit en qualité de responsable de traitement autonome pour la prévention de la fraude et le respect de ses propres obligations réglementaires.`,
        "Google LLC (Google Analytics), uniquement si vous avez consenti à la mesure d'audience. Les données peuvent être traitées par Google en dehors de l'Union européenne ; ce transfert est encadré par les clauses contractuelles types de la Commission européenne.",
        "Cloudflare, Inc., en tant qu'hébergeur technique du site et fournisseur de la mesure d'audience native (Cloudflare Web Analytics), qui ne dépose aucun cookie et ne collecte aucune donnée personnelle identifiable.",
        'Aucune donnée n’est vendue ni louée à des tiers.',
      ],
    },
    {
      heading: 'Durée de conservation',
      body: [
        "Les données Google Analytics 4 sont conservées 14 mois à compter de la collecte, conformément à la configuration retenue pour ce site, puis supprimées automatiquement par Google.",
        'Votre choix de consentement est conservé localement (localStorage) pendant 6 mois maximum, conformément aux recommandations de la CNIL, ou jusqu’à ce que vous le modifiiez ou effaciez les données de votre navigateur.',
        "Les factures et pièces comptables sont conservées dix ans à compter de la clôture de l'exercice concerné, conformément à l'article L123-22 du Code de commerce.",
        "Les données de compte et d'abonnement sont conservées pendant toute la durée de l'abonnement, puis supprimées ou anonymisées, sous réserve des durées légales de conservation ci-dessus.",
      ],
    },
    {
      heading: 'Sécurité des données',
      body: [
        'Le site est servi exclusivement en HTTPS et hébergé sur l’infrastructure Cloudflare, qui assure le chiffrement en transit et la protection contre les attaques réseau courantes. Le site lui-même ne stocke aucune donnée de compte ni de paiement.',
        `Les coordonnées bancaires sont traitées exclusivement par ${PSP.name}, certifié PCI-DSS niveau 1 ; aucune donnée de carte n’est stockée par SPACE UNITY.`,
      ],
    },
    {
      heading: 'Vos droits',
      body: [
        "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez également retirer votre consentement à tout moment sans que cela affecte la licéité des traitements antérieurs.",
        `Pour exercer ces droits, contactez-nous à ${COMPANY.email}. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
      ],
    },
  ],
  en: [
    {
      heading: 'Data controller',
      body: [
        `${COMPANY.name}, a French ${COMPANY.form}, ${COMPANY.address}, registered as ${COMPANY.siren} (${COMPANY.rcs}). Contact: ${COMPANY.email}.`,
        'SPACE UNITY has not appointed a Data Protection Officer — its size does not require one. Any request about your personal data can be sent directly to the address above.',
      ],
    },
    {
      heading: 'Data we collect',
      body: [
        'The tblflow.com site has no sign-up form or user account: subscribing and signing in happen in the application (app.tblflow.com).',
        'If you subscribe to a paid tier, we process the data needed for billing: email address, name or company name, billing address, country, VAT number where applicable, the tier and billing cycle you subscribed to, and payment history. Card details are entered directly on pages hosted by our payment processor: they do not pass through our servers, SPACE UNITY has no access to them and keeps no copy.',
        'A display preference (light or dark theme) is stored locally in your browser (localStorage). It never leaves your device and is never sent to SPACE UNITY or any third party.',
        'If you consent to analytics (see the cookie policy), Google Analytics 4 collects pseudonymized browsing data: pages visited, time on page, device type, approximate location (country/region — never the full IP address, IP anonymization is enabled).',
        'If you contact us by email, we process the data you send us (email address, message content) solely to answer your request.',
      ],
    },
    {
      heading: 'Purposes and legal bases',
      body: [
        'Analytics (Google Analytics 4): based on your consent (GDPR Article 6.1.a), revocable at any time via the "Manage cookies" link in the footer.',
        'Responding to contact requests: based on the legitimate interest of providing support and managing the business relationship (GDPR Article 6.1.f).',
        'Managing subscriptions, payments and billing: based on performance of the contract between you and SPACE UNITY (GDPR Article 6.1.b). Retaining invoices and accounting records rests instead on compliance with a legal obligation (GDPR Article 6.1.c).',
      ],
    },
    {
      heading: 'Data recipients',
      body: [
        `${PSP.name} (${PSP.address}), as payment processor, to handle subscriptions, payments, billing and refunds for the paid tiers. Stripe acts as an independent controller for fraud prevention and for meeting its own regulatory obligations.`,
        'Google LLC (Google Analytics), only if you consented to analytics. Data may be processed by Google outside the European Union; this transfer is governed by the European Commission\'s standard contractual clauses.',
        'Cloudflare, Inc., as the site\'s technical host and provider of native analytics (Cloudflare Web Analytics), which sets no cookies and collects no personally identifiable data.',
        'No data is sold or rented to third parties.',
      ],
    },
    {
      heading: 'Retention period',
      body: [
        'Google Analytics 4 data is retained for 14 months from collection, per this site\'s configuration, then automatically deleted by Google.',
        'Your consent choice is stored locally (localStorage) for up to 6 months, per CNIL guidance, or until you change it or clear your browser data.',
        'Invoices and accounting records are retained for ten years from the close of the financial year concerned, as required by Article L123-22 of the French Commercial Code.',
        'Account and subscription data is retained for the duration of the subscription, then deleted or anonymized, subject to the statutory retention periods above.',
      ],
    },
    {
      heading: 'Data security',
      body: [
        'The site is served exclusively over HTTPS and hosted on Cloudflare\'s infrastructure, which handles encryption in transit and protection against common network attacks. The site itself stores no account or payment data.',
        `Card details are handled exclusively by ${PSP.name}, certified PCI-DSS Level 1; no card data is stored by SPACE UNITY.`,
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Under the GDPR, you have the right to access, rectify, erase, restrict, object to, and port your data. You can also withdraw consent at any time without affecting the lawfulness of processing carried out before that withdrawal.',
        `To exercise these rights, contact us at ${COMPANY.email}. You also have the right to lodge a complaint with the CNIL (www.cnil.fr), or your local data protection authority.`,
      ],
    },
  ],
});

export const COOKIES_TITLE: Record<Locale, string> = t9({
  fr: "Politique d'utilisation des cookies",
  en: 'Cookie policy',
});

export const COOKIES_LEDE: Record<Locale, string> = t9({
  fr: 'Ce site utilise un nombre volontairement réduit de traceurs. Voici la liste complète, sans exception.',
  en: 'This site uses a deliberately small number of trackers. Here is the complete list, with no exceptions.',
});

export interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  consent: string;
}

export const COOKIE_TABLE: Record<Locale, CookieRow[]> = t9({
  fr: [
    {
      name: 'theme',
      provider: 'SPACE UNITY (localStorage, pas un cookie)',
      purpose: "Mémorise votre préférence d'affichage clair/sombre.",
      duration: 'Jusqu’à suppression manuelle',
      consent: 'Aucun — strictement nécessaire',
    },
    {
      name: 'cookie-consent',
      provider: 'SPACE UNITY (localStorage, pas un cookie)',
      purpose: 'Mémorise votre choix de consentement pour ne pas vous le redemander.',
      duration: '6 mois, puis le bandeau réapparaît',
      consent: 'Aucun — nécessaire au fonctionnement du bandeau',
    },
    {
      name: '(sans nom, requêtes API)',
      provider: 'Cloudflare Web Analytics',
      purpose: "Mesure d'audience agrégée, sans identifiant individuel ni fingerprinting.",
      duration: "Aucune donnée stockée côté navigateur",
      consent: "Aucun — technologie sans cookie, exemptée par la CNIL",
    },
    {
      name: '_ga, _ga_*',
      provider: 'Google Analytics 4',
      purpose: "Distingue les visiteurs et les sessions pour produire des statistiques d'audience.",
      duration: '14 mois',
      consent: 'Requis — déposé uniquement après acceptation',
    },
  ],
  en: [
    {
      name: 'theme',
      provider: 'SPACE UNITY (localStorage, not a cookie)',
      purpose: 'Remembers your light/dark display preference.',
      duration: 'Until manually cleared',
      consent: 'None — strictly necessary',
    },
    {
      name: 'cookie-consent',
      provider: 'SPACE UNITY (localStorage, not a cookie)',
      purpose: 'Remembers your consent choice so we don\'t ask again.',
      duration: '6 months, then the banner reappears',
      consent: 'None — required for the banner to work',
    },
    {
      name: '(unnamed, API requests)',
      provider: 'Cloudflare Web Analytics',
      purpose: 'Aggregate audience measurement, with no individual identifier or fingerprinting.',
      duration: 'No data stored in the browser',
      consent: 'None — cookieless technology',
    },
    {
      name: '_ga, _ga_*',
      provider: 'Google Analytics 4',
      purpose: 'Distinguishes visitors and sessions to produce audience statistics.',
      duration: '14 months',
      consent: 'Required — set only after acceptance',
    },
  ],
});

export const COOKIE_TABLE_HEADERS: Record<Locale, [string, string, string, string, string]> = t9({
  fr: ['Nom', 'Fournisseur', 'Finalité', 'Durée', 'Consentement'],
  en: ['Name', 'Provider', 'Purpose', 'Duration', 'Consent'],
});

export const COOKIES_MANAGE_NOTE: Record<Locale, string> = t9({
  fr: 'Vous pouvez changer d’avis à tout moment via le lien « Gérer les cookies » en pied de page, qui rouvre le panneau de consentement avec votre choix actuel. Ce choix est de toute façon redemandé automatiquement tous les 6 mois, conformément aux recommandations de la CNIL.',
  en: 'You can change your mind at any time via the "Manage cookies" link in the footer, which reopens the consent panel with your current choice. Either way, we ask again automatically every 6 months, per CNIL guidance.',
});

export const TERMS_TITLE: Record<Locale, string> = t9({
  fr: 'Conditions générales de vente et d’utilisation',
  en: 'Terms of service',
});

/** Same rationale as LEGAL_NOTICE_NOTE — a contract governed by French law is
 * not made more valid by an unofficial translation. */
export const TERMS_NOTE: Record<Locale, string> = t9({
  fr: '',
  en: 'These terms are governed by French law and provided in French — the text below is not translated. Contact us if you need an informal English summary.',
});

/** Single French body, reused on every locale route — see TERMS_NOTE. */
export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: 'Objet',
    body: [
      `Les présentes conditions générales de vente et d'utilisation (« CGVU ») régissent l'accès et l'utilisation des services TblFlow (le « Service »), édités par ${COMPANY.name}. Elles s'appliquent à l'exclusion de toute autre condition, notamment celles pouvant figurer dans les documents du client.`,
      "Le Service est réservé à un usage professionnel : il n'est pas proposé aux consommateurs au sens du Code de la consommation.",
    ],
  },
  {
    heading: 'Acceptation',
    body: [
      "La création d'un compte ou l'utilisation du Service vaut acceptation pleine et entière des présentes CGVU. Si vous les acceptez au nom d'une entreprise, vous déclarez disposer du pouvoir de l'engager.",
    ],
  },
  {
    heading: 'Description du Service et paliers',
    body: [
      "TblFlow est une plateforme de base de données no-code : interface tableur sur un vrai PostgreSQL, agents IA, automatisations et vues multiples sur les mêmes données.",
      "Le Service est proposé selon quatre paliers (Gratuit, Pro, Business, Enterprise), dont les caractéristiques, quotas et tarifs en vigueur sont décrits sur la page tarifs (tblflow.com/pricing). Ces paramètres peuvent évoluer ; toute modification substantielle est communiquée avec un préavis raisonnable et ne s'applique pas rétroactivement à une période déjà facturée.",
    ],
  },
  {
    heading: 'Compte et sécurité des accès',
    body: [
      "Le client est responsable de la confidentialité de ses identifiants et de toute activité effectuée depuis son compte. Toute suspicion d'accès non autorisé doit être signalée sans délai à " + COMPANY.email + ".",
    ],
  },
  {
    heading: 'Tarifs et facturation',
    body: [
      "Les paliers payants (Pro, Business) sont proposés au choix en facturation mensuelle ou annuelle, au tarif affiché sur la page tarifs au moment de la souscription. Le palier Enterprise fait l'objet d'un devis et d'un contrat spécifique.",
      "La facturation annuelle est réglée en une fois et d'avance, pour douze mois, et bénéficie de la remise indiquée sur la page tarifs. La facturation mensuelle est réglée chaque mois d'avance. Dans les deux cas l'abonnement est reconduit tacitement à chaque échéance, jusqu'à résiliation par le client dans les conditions prévues à l'article suivant.",
      "Les tarifs sont libellés en euros ou en dollars américains selon la devise applicable au client, pour un montant identique dans l'une et l'autre devise. Le client est débité du montant affiché.",
      `Les paiements sont traités par notre prestataire de paiement, ${PSP.name} (${PSP.address}). À défaut de paiement à échéance, TblFlow peut suspendre l'accès au Service après relance restée sans effet, sans préjudice des sommes dues.`,
    ],
  },
  {
    heading: 'Durée et résiliation',
    body: [
      "Les paliers Gratuit, Pro et Business sont sans engagement au-delà de la période de facturation souscrite : le client peut résilier ou changer de palier à tout moment depuis son compte, avec effet à la fin de la période de facturation en cours.",
      "Pour un abonnement annuel, la résiliation prend donc effet au terme de la période de douze mois en cours ; le client conserve l'accès au Service jusqu'à cette date et les sommes déjà réglées au titre de cette période ne font pas l'objet d'un remboursement au prorata.",
      "TblFlow peut résilier l'accès d'un client en cas de manquement grave aux présentes CGVU non corrigé sous 15 jours après mise en demeure, ou d'usage frauduleux ou illicite du Service, avec effet immédiat dans ce dernier cas.",
    ],
  },
  {
    heading: 'Auto-hébergement et palier Enterprise',
    body: [
      "Le déploiement auto-hébergé ou en VPC dédié fait partie du palier Enterprise, sur devis. Il n'est pas gratuit et n'est pas inclus dans les autres paliers. Les conditions spécifiques (support, niveaux de service, licence) sont précisées dans le contrat Enterprise signé séparément.",
    ],
  },
  {
    heading: 'Propriété des données et réversibilité',
    body: [
      "Les données que le client héberge sur le Service (« Données Client ») restent sa propriété exclusive. TblFlow ne revendique aucun droit sur ces données et ne les utilise pas à d'autres fins que la fourniture du Service.",
      "Les Données Client sont stockées dans un schéma PostgreSQL standard, exportable à tout moment par le client au format `pg_dump`, y compris en cas de résiliation. Cette réversibilité n'est pas une option payante : elle est disponible sur tous les paliers.",
    ],
  },
  {
    heading: 'Propriété intellectuelle du Service',
    body: [
      "Le Service, son code, ses marques et sa documentation sont la propriété exclusive de " + COMPANY.name + " ou de ses concédants. L'accès au Service ne confère au client qu'un droit d'usage, non exclusif et non transférable, pour la durée de son abonnement.",
    ],
  },
  {
    heading: 'Disponibilité du Service',
    body: [
      "TblFlow met en œuvre les moyens raisonnables pour assurer la disponibilité du Service, avec un objectif de disponibilité mensuelle croissant selon le palier souscrit (indiqué sur la page tarifs). Ces objectifs constituent une cible et non une garantie contractuelle de résultat, sauf stipulation contraire dans un contrat Enterprise signé séparément.",
      "Des interruptions programmées pour maintenance peuvent survenir ; TblFlow s'efforce d'en informer les clients à l'avance lorsque cela est raisonnablement possible.",
    ],
  },
  {
    heading: 'Données personnelles',
    body: [
      "Le traitement des données personnelles par TblFlow dans le cadre du site tblflow.com est décrit dans la politique de confidentialité. Le traitement des données personnelles que le client fait transiter par le Service, pour son propre compte, fait l'objet d'un accord de sous-traitance (DPA) distinct, disponible sur demande à " + COMPANY.email + ".",
    ],
  },
  {
    heading: 'Responsabilité',
    body: [
      "TblFlow est tenue à une obligation de moyens dans la fourniture du Service. Sa responsabilité, tous préjudices confondus, est limitée aux sommes effectivement versées par le client au titre des douze derniers mois précédant le fait générateur, à l'exclusion de tout préjudice indirect (perte d'exploitation, perte de données non imputable à TblFlow, perte de chance).",
      "Cette limitation ne s'applique pas en cas de faute lourde ou intentionnelle, ni dans les cas où la loi l'exclut expressément.",
    ],
  },
  {
    heading: 'Modification des CGVU',
    body: [
      "TblFlow peut modifier les présentes CGVU ; la version en vigueur est celle publiée sur cette page, avec sa date de mise à jour. Toute modification substantielle est communiquée aux clients actifs par email avec un préavis raisonnable avant son entrée en vigueur.",
    ],
  },
  {
    heading: 'Droit applicable et juridiction',
    body: [
      `Les présentes CGVU sont soumises au droit français. Tout litige relatif à leur validité, leur interprétation ou leur exécution relève, à défaut de résolution amiable, de la compétence exclusive des tribunaux du ressort du ${COMPANY.rcs}.`,
    ],
  },
];

/** Bump by hand whenever a TERMS_SECTIONS paragraph changes. */
export const TERMS_LAST_UPDATED: Record<Locale, string> = t9({
  fr: 'Dernière mise à jour : 1er septembre 2026.',
  en: 'Last updated: September 1, 2026.',
});
