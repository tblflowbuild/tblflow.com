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
  fr: "Cette page décrit les données que ce site (tblflow.com) collecte, pourquoi, et les droits dont vous disposez. Elle ne couvre pas l'application TblFlow elle-même (app.tblflow.com), régie par un document séparé.",
  en: 'This page describes what data this site (tblflow.com) collects, why, and the rights you have. It does not cover the TblFlow application itself (app.tblflow.com), which has its own document.',
});

/** Bump by hand whenever a PRIVACY_SECTIONS paragraph changes. */
export const PRIVACY_LAST_UPDATED: Record<Locale, string> = t9({
  fr: 'Dernière mise à jour : 18 août 2026.',
  en: 'Last updated: August 18, 2026.',
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
        "Ce site vitrine ne comporte aucun formulaire d'inscription ni de compte utilisateur : il ne collecte donc aucune donnée d'identification directe (nom, mot de passe, coordonnées de paiement).",
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
      ],
    },
    {
      heading: 'Destinataires des données',
      body: [
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
      ],
    },
    {
      heading: 'Sécurité des données',
      body: [
        'Le site est servi exclusivement en HTTPS et hébergé sur l’infrastructure Cloudflare, qui assure le chiffrement en transit et la protection contre les attaques réseau courantes. Ce site vitrine ne stockant aucune donnée de compte ni de paiement, il n’existe pas de base de données propriétaire à sécuriser côté SPACE UNITY pour ce périmètre.',
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
        'This marketing site has no sign-up form or user account, so it collects no direct identification data (name, password, payment details).',
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
      ],
    },
    {
      heading: 'Data recipients',
      body: [
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
      ],
    },
    {
      heading: 'Data security',
      body: [
        'The site is served exclusively over HTTPS and hosted on Cloudflare\'s infrastructure, which handles encryption in transit and protection against common network attacks. This marketing site stores no account or payment data, so there is no proprietary database on SPACE UNITY\'s side to secure for this scope.',
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
