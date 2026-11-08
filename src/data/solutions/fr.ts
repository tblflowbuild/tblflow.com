import type { SolutionsLocale } from './types';

/**
 * Source copy (French) of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const fr = {
  ui: {
    forNav: 'Pour qui ?',
    useCasesNav: "Cas d'usage",
    forIndex: {
      metaTitle: 'Pour qui est TblFlow ? Dirigeants, finance, ADV, industrie',
      metaDescription:
        "TblFlow s'adresse aux PME qui ressaisissent les mêmes informations d'un outil à l'autre : dirigeants, finance, ventes, industrie, commerce et cabinets.",
      title: 'Pour qui ?',
      subtitle:
        "Pour les PME qui tournent sur Excel et une dizaine d'outils. Chaque métier y ressaisit autre chose : voici ce que TblFlow change pour le vôtre.",
    },
    useCasesIndex: {
      metaTitle: "Cas d'usage TblFlow : du devis à l'encaissement, achats",
      metaDescription:
        "Six flux où la même information est ressaisie d'outil en outil, et comment TblFlow les cartographie, les automatise et les confie à des agents validés par vous.",
      title: "Cas d'usage",
      subtitle:
        "Six flux où la même information passe de main en main et d'outil en outil. Pour chacun : ce qu'il coûte aujourd'hui, et ce que TblFlow en fait.",
    },
    today: "Aujourd'hui",
    withTblflow: 'Avec TblFlow',
    journeyTitle: 'Comment TblFlow le reprend',
    limitsTitle: 'Ce que TblFlow ne fait pas',
    promptsTitle: 'Ce que vous demanderiez à TblFlow',
    promptsNote: "Des demandes écrites dans vos mots. L'IA propose, rien ne s'active sans votre validation.",
    faqTitle: 'Questions fréquentes',
    useCasesFor: "Cas d'usage",
    audiencesFor: 'Pour qui',
    planNote:
      "La carte d'un processus est gratuite, coûts estimés compris. La carte complète, Remplacer et le rapport mensuel sont inclus dès le palier Essentiel.",
    cta: 'Commencer',
    secondaryCta: 'Voir la Carto des process',
    example: 'Exemple',
    more: 'En savoir plus',
  },

  useCases: {
    'quote-to-cash': {
      nav: "Du devis à l'encaissement",
      card: 'Devis, commande, facture et relance sans ressaisie entre les outils.',
      metaTitle: "Du devis à l'encaissement sans ressaisie | TblFlow",
      metaDescription:
        "Le devis dans Word, la commande dans Excel, la facture ailleurs : TblFlow relie devis, commande, facture et relance dans une base, avec agents sous validation.",
      eyebrow: "Cas d'usage · Ventes et facturation",
      title: "Du devis à l'encaissement, sans retaper le même montant quatre fois",
      subtitle:
        "Le devis accepté devient la commande, la commande prépare la facture, la facture échue déclenche la relance. Une seule saisie, au début.",
      flow: {
        steps: [
          { title: 'Devis', tool: 'Word', after: 'human' },
          { title: 'Commande', tool: 'Excel', after: 'automation' },
          { title: 'Facture', tool: 'Google Sheets', after: 'automation' },
          { title: 'Relance', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · 4 820 €',
        calc: '40 devis par mois × 3 ressaisies × 10 minutes ≈ 20 heures par mois.',
      },
      problem: {
        title: 'Le même client, le même montant, quatre fois',
        body: "Le devis part de Word, la commande est recopiée dans un tableur, la facture reprend les lignes à la main et la relance se fait de mémoire. Chaque copie est une occasion d'erreur, et personne ne voit d'un coup d'œil ce qui reste à encaisser.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: 'Déposez votre procédure de facturation',
          body: "Votre procédure de facturation et vos règles de relance, en PDF ou en Markdown, sont indexées dans DocIndex. Les outils que vous gardez restent connectés.",
        },
        {
          label: 'Cartographier',
          title: 'Voyez où le montant est retapé',
          body: "Partez du processus type « Facturation client » de la bibliothèque : demande, contrôle de la commande, préparation, validation des gros montants, envoi, suivi des échéances, relance, encaissement. Saisissez vos volumes : TblFlow estime le coût de chaque étape.",
        },
        {
          label: 'Construire',
          title: 'Une base pour les devis, les commandes et les factures',
          body: "TblFlow génère les tables et leurs liaisons : le client, le devis, la commande et la facture ne se saisissent qu'une fois. Vos données existantes sont importées depuis vos fichiers CSV ou Excel.",
        },
        {
          label: 'Automatiser, puis confier',
          title: 'La règle à une automatisation, la relance à un agent',
          body: "Quand un devis passe à « Accepté », une automatisation crée la commande et prépare la facture. Un agent relance les factures échues selon votre procédure : il prépare les messages, vous les validez.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un suivi des devis', body: 'Par statut, du brouillon à l’acceptation, avec le montant et le client liés.' },
          { title: 'Un échéancier client', body: 'Les factures à venir, échues et encaissées, avec ce qui reste à encaisser ce mois-ci.' },
          { title: 'Des relances préparées', body: 'Un agent qui suit votre procédure et vous soumet chaque relance avant envoi.' },
        ],
      },
      limits:
        "TblFlow ne tient pas votre comptabilité et n'émet pas de facture électronique conforme. Votre facture part de votre outil de facturation ; TblFlow garde le lien entre le devis, la commande, la facture et la relance, et ce qu'il reste à encaisser.",
      prompts: [
        "Quand un devis passe à « Accepté », crée la commande avec les mêmes lignes et préviens l'ADV.",
        'Liste les factures échues depuis plus de 30 jours et prépare une relance pour chacune, selon notre procédure.',
        "Montre-moi ce qu'il reste à encaisser ce mois-ci, par client.",
      ],
      faq: [
        {
          q: 'Faut-il abandonner mon logiciel de facturation ?',
          a: "Non. TblFlow relie les étapes et garde le suivi ; la facture peut continuer à partir de votre outil actuel. Si cet outil publie une API, TblFlow peut s'y connecter.",
        },
        {
          q: 'Les relances partent-elles toutes seules ?',
          a: "Non. L'agent prépare chaque relance à partir de votre procédure et de vos tables, et vous la validez avant envoi. Rien ne s'active sans votre accord.",
        },
        {
          q: 'Puis-je reprendre mes devis et factures existants ?',
          a: 'Oui. Importez vos fichiers CSV ou Excel dans une table existante ou dans une nouvelle table.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'Du besoin au paiement fournisseur',
      card: "Demandes d'achat, commandes, réceptions et factures fournisseurs reliées.",
      metaTitle: 'Achats et factures fournisseurs sans ressaisie | TblFlow',
      metaDescription:
        "Demande d'achat, commande, réception, facture fournisseur : TblFlow relie chaque étape dans une seule base et prépare le rapprochement, sous votre validation.",
      eyebrow: "Cas d'usage · Achats et comptabilité fournisseurs",
      title: 'Du besoin au paiement fournisseur, chaque facture rapprochée de sa commande',
      subtitle:
        'La demande devient la commande, la réception confirme ce qui est arrivé, la facture est rapprochée de la commande avant de partir au paiement.',
      flow: {
        steps: [
          { title: "Demande d'achat", tool: 'E-mail', after: 'human' },
          { title: 'Commande fournisseur', tool: 'Excel', after: 'automation' },
          { title: 'Réception', tool: 'Bon papier', after: 'human' },
          { title: 'Facture fournisseur', tool: 'Logiciel comptable', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · 2 340 €',
        calc: '60 factures fournisseurs par mois × 3 ressaisies × 6 minutes ≈ 18 heures par mois.',
      },
      problem: {
        title: 'La facture arrive, personne ne retrouve la commande',
        body: "La demande d'achat est dans un e-mail, la commande dans un tableur, le bon de réception sur papier. Quand la facture arrive, il faut tout rechercher pour savoir si elle correspond à ce qui a été commandé et reçu.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: "Déposez vos règles d'achat",
          body: 'Seuils de validation, fournisseurs référencés, circuit de signature : vos règles sont indexées dans DocIndex et servent de contexte aux agents.',
        },
        {
          label: 'Cartographier',
          title: 'Voyez où la commande est recopiée',
          body: "Partez du processus type « Achat et approvisionnement » : besoin, validation, devis, comparaison des offres, commande, réception, rapprochement avec la facture, paiement. TblFlow estime le coût de chaque étape à partir de vos volumes.",
        },
        {
          label: 'Construire',
          title: 'Demandes, commandes, réceptions et factures liées',
          body: 'Le modèle « Pilotage financier » apporte les tables de factures fournisseurs et de notes de frais. Une demande se saisit par formulaire, la commande et la facture lui restent liées.',
        },
        {
          label: 'Automatiser, puis confier',
          title: 'Le rapprochement proposé, la décision gardée',
          body: "Une automatisation crée la commande dès que la demande est validée. Déposez la facture fournisseur dans le Chat IA : il propose les lignes, un agent les rapproche de la commande et de la réception, et vous validez avant le paiement.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: "Un formulaire de demande d'achat", body: 'Les bons champs, le bon valideur selon le montant, un statut visible par tous.' },
          { title: 'Un registre des factures fournisseurs', body: 'Chaque facture liée à sa commande et à sa réception, avec son échéance.' },
          { title: 'Un contrôle avant paiement', body: 'Les écarts entre commandé, reçu et facturé signalés avant que la facture parte au paiement.' },
        ],
      },
      limits:
        "TblFlow ne paie pas vos fournisseurs : le virement part de votre banque. Il ne lit pas automatiquement les factures scannées ; le Chat IA propose les lignes à partir de la facture déposée, et vous les validez. Il ne fait pas le rapprochement bancaire.",
      prompts: [
        'Crée un formulaire de demande d’achat avec un valideur différent au-delà de 1 500 €.',
        'Rapproche cette facture fournisseur de la commande BC-1187 et de sa réception, et signale les écarts.',
        'Liste les factures fournisseurs à payer cette semaine, avec celles qui ont un écart.',
      ],
      faq: [
        {
          q: 'TblFlow lit-il les factures PDF ?',
          a: "Le Chat IA lit la facture que vous déposez et propose les enregistrements correspondants ; rien n'est créé avant votre acceptation. Il ne s'agit pas d'une lecture automatique en masse des factures scannées.",
        },
        {
          q: 'Mon logiciel comptable reste-t-il en place ?',
          a: "Oui. TblFlow s'occupe du circuit avant la comptabilité : demande, commande, réception, contrôle. La saisie comptable reste dans votre logiciel.",
        },
        {
          q: 'Peut-on imposer une validation au-delà d’un montant ?',
          a: 'Oui : le statut, le montant et le valideur sont des champs ; une automatisation prévient le bon valideur selon le seuil que vous fixez.',
        },
      ],
    },

    'financial-close': {
      nav: 'Clôture et pilotage financier',
      card: "Marges, EBITDA et budget contre réel, sans recopier les exports chaque mois.",
      metaTitle: 'Clôture mensuelle, marges et EBITDA sans tableurs | TblFlow',
      metaDescription:
        'Importez vos exports comptables, laissez les formules recalculer marges, EBITDA et budget contre réel, et recevez chaque mois une synthèse à valider.',
      eyebrow: "Cas d'usage · Finance et contrôle de gestion",
      title: 'La clôture du mois sans recopier les mêmes exports dans les mêmes tableurs',
      subtitle:
        "Vos exports comptables arrivent dans une base ; les marges, l'EBITDA et l'écart au budget se recalculent ; la synthèse du mois est préparée pour la direction.",
      flow: {
        steps: [
          { title: 'Export de la balance', tool: 'Logiciel comptable', after: 'human' },
          { title: 'Mise en forme', tool: 'Excel', after: 'automation' },
          { title: 'Marges et EBITDA', tool: 'Excel', after: 'automation' },
          { title: 'Synthèse du mois', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: "Balance d'octobre · 186 lignes",
        calc: '1 clôture par mois × 4 fichiers recopiés × 1 h 30 ≈ 6 heures par mois.',
      },
      problem: {
        title: "Chaque mois, les mêmes copier-coller",
        body: "L'export de la balance est recopié dans un fichier de retraitement, puis dans le tableau de marges, puis dans la présentation de la direction. Une formule cassée ou une ligne oubliée, et le chiffre présenté n'est plus le bon.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: 'Déposez votre procédure de clôture',
          body: 'Votre calendrier de clôture et vos règles de retraitement sont indexés dans DocIndex : vos équipes les consultent, les agents s’en servent.',
        },
        {
          label: 'Cartographier',
          title: 'Voyez où les chiffres sont recopiés',
          body: "Partez du processus type « Clôture mensuelle » : relevés bancaires, rapprochement bancaire, saisie des factures, relance des justificatifs, régularisations, revue, balance, présentation à la direction.",
        },
        {
          label: 'Construire',
          title: 'Des tables qui calculent à votre place',
          body: "Importez la balance ou le grand livre en CSV chaque mois. Les formules et les rollups calculent la marge par mission, l'EBITDA et l'écart au budget ; les graphiques et une interface de pilotage les montrent.",
        },
        {
          label: 'Automatiser, puis confier',
          title: 'La synthèse préparée, le commentaire validé',
          body: "Une automatisation recalcule et prévient dès que l'import est fait. Un agent rédige la synthèse du mois à partir des tables : variations, postes à surveiller. Vous la relisez avant qu'elle parte.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un tableau de marges', body: 'Par mission, projet ou client, à partir du modèle « Pilotage financier ».' },
          { title: 'Un suivi EBITDA et budget', body: 'Le réel du mois face au budget, avec les écarts qui dépassent votre seuil.' },
          { title: 'Une synthèse mensuelle', body: 'Préparée par un agent à partir de vos tables, relue par vous avant diffusion.' },
        ],
      },
      limits:
        "TblFlow n'est pas un logiciel comptable : il ne tient pas les écritures et ne se connecte pas à votre banque. L'EBITDA et les marges sont calculés par vos formules, à partir des exports que vous importez.",
      prompts: [
        "Importe la balance d'octobre et recalcule l'EBITDA et l'écart au budget.",
        'Montre la marge par client sur les trois derniers mois, du plus haut au plus bas.',
        'Rédige la synthèse du mois pour la direction : variations, postes au-dessus du budget, points à décider.',
      ],
      faq: [
        {
          q: "TblFlow calcule-t-il l'EBITDA tout seul ?",
          a: "Il n'y a pas de calcul d'EBITDA tout fait : vous le définissez une fois avec des formules et des rollups, sur vos propres comptes, et il se recalcule à chaque import.",
        },
        {
          q: 'Faut-il connecter le logiciel comptable ?',
          a: "Non. Un export CSV de la balance ou du grand livre suffit. Si votre logiciel publie une API, TblFlow peut générer un connecteur pour automatiser l'import.",
        },
        {
          q: 'Qui voit les montants ?',
          a: 'Les droits sont fixés par rôle et par champ : vous choisissez qui lit les montants, qui les modifie, et qui ne les voit pas.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: "Du stock à l'expédition",
      card: 'Inventaires, seuils, réassort et préparation dans une seule base.',
      metaTitle: 'Stocks, inventaires et réassort sans ressaisie | TblFlow',
      metaDescription:
        "Inventaire tournant, alertes de seuil, commandes de réassort, préparation et expédition : TblFlow relie articles, mouvements et commandes sous validation.",
      eyebrow: "Cas d'usage · Stocks et logistique",
      title: "Du stock à l'expédition, sans recompter dans trois fichiers",
      subtitle:
        "Le comptage met à jour le stock, le seuil déclenche le réassort, la commande client part en préparation. Les quantités ne se retapent plus.",
      flow: {
        steps: [
          { title: 'Comptage', tool: 'Feuille papier', after: 'human' },
          { title: 'Écarts de stock', tool: 'Excel', after: 'automation' },
          { title: 'Réassort', tool: 'E-mail fournisseur', after: 'agent' },
          { title: 'Préparation', tool: 'Site du transporteur', after: 'human' },
        ],
        rekeyed: 'Réf. A-204 · 36 unités',
        calc: '150 références comptées par mois × 2 ressaisies × 2 minutes ≈ 10 heures par mois.',
      },
      problem: {
        title: 'Le stock juste un jour par mois',
        body: "Le comptage se fait sur papier, les écarts se recopient dans un tableur, la commande de réassort part par e-mail. Entre deux inventaires, personne ne sait vraiment ce qu'il reste, et la rupture se découvre au moment de préparer.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: 'Déposez vos règles de stock',
          body: 'Seuils, fournisseurs, délais, règles de préparation : indexés dans DocIndex, ils servent de contexte aux agents.',
        },
        {
          label: 'Cartographier',
          title: 'Voyez où les quantités sont recopiées',
          body: "Partez des processus types « Inventaire tournant », « Réassort et commande fournisseur » et « Préparation et expédition ». TblFlow estime le coût de chaque étape à partir de vos volumes.",
        },
        {
          label: 'Construire',
          title: 'Articles, mouvements et inventaires liés',
          body: 'Le modèle « Gestion des stocks » apporte les articles, les mouvements, les emplacements, les fournisseurs, les commandes de réassort et les inventaires physiques, avec la valeur du stock et les alertes de seuil.',
        },
        {
          label: 'Automatiser, puis confier',
          title: 'Le seuil prévient, l’agent prépare la commande',
          body: "Une automatisation calcule les écarts d'inventaire et signale les articles sous le seuil. Un agent prépare la commande de réassort chez le bon fournisseur ; vous la validez avant envoi.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un stock à jour', body: 'Chaque entrée et chaque sortie enregistrée comme un mouvement, la valeur du stock calculée.' },
          { title: 'Des inventaires tournants', body: 'Les références à compter, la saisie des comptages et les écarts à recompter.' },
          { title: 'Un réassort préparé', body: 'Les articles sous le seuil et un brouillon de commande fournisseur à valider.' },
        ],
      },
      limits:
        "TblFlow n'est pas un logiciel de gestion d'entrepôt : il ne lit pas les codes-barres, ne gère pas la préparation par terminal radio et ne suit pas le stock en temps réel. Il ne produit pas d'étiquettes transporteur.",
      prompts: [
        'Liste les articles sous leur seuil de réassort et prépare une commande par fournisseur.',
        "Crée l'inventaire tournant de la semaine : les 30 références les plus vendues.",
        "Montre les écarts du dernier inventaire supérieurs à 5 %, avec leur valeur.",
      ],
      faq: [
        {
          q: 'Peut-on scanner les codes-barres ?',
          a: "Non. Le code EAN est un champ de l'article, mais TblFlow ne lit pas de code-barres. La saisie des comptages se fait au clavier ou par formulaire.",
        },
        {
          q: "TblFlow remplace-t-il mon ERP ?",
          a: "Non. Il s'occupe de ce que l'ERP ou les tableurs couvrent mal : inventaires tournants, seuils, réassort, suivi des écarts. Si votre ERP publie une API, TblFlow peut s'y connecter.",
        },
        {
          q: 'Les commandes de réassort partent-elles seules ?',
          a: "Non. L'agent prépare la commande ; vous la validez avant qu'elle parte au fournisseur.",
        },
      ],
    },

    quality: {
      nav: 'Qualité et non-conformités',
      card: 'Contrôles, non-conformités et actions correctives suivis de bout en bout.',
      metaTitle: 'Non-conformités et actions correctives sans papier | TblFlow',
      metaDescription:
        "Contrôle, enregistrement, décision, action corrective : TblFlow relie chaque non-conformité à son lot, son coût de reprise et son action, relances à valider.",
      eyebrow: "Cas d'usage · Qualité et production",
      title: 'Chaque non-conformité suivie jusqu’à son action corrective',
      subtitle:
        "Le contrôle enregistre l'écart, le lot est bloqué, la décision est tracée, l'action corrective est relancée jusqu'à sa clôture. Plus de fiche perdue entre l'atelier et le bureau.",
      flow: {
        steps: [
          { title: 'Contrôle', tool: 'Fiche papier', after: 'human' },
          { title: 'Enregistrement', tool: 'Excel', after: 'automation' },
          { title: 'Décision', tool: 'E-mail', after: 'human' },
          { title: 'Action corrective', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Lot 2611-B · 12 pièces',
        calc: '30 non-conformités par mois × 3 ressaisies × 8 minutes ≈ 12 heures par mois.',
      },
      problem: {
        title: "La fiche de l'atelier n'arrive pas au bureau",
        body: "Le contrôleur remplit une fiche, quelqu'un la recopie dans un tableur, la décision se prend par e-mail et l'action corrective vit dans un autre fichier. Le coût de la reprise et la cause se perdent en route.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: 'Déposez vos procédures qualité',
          body: 'Gammes de contrôle, critères d’acceptation, circuit de décision : indexés dans DocIndex, ils guident les agents.',
        },
        {
          label: 'Cartographier',
          title: "Chiffrez ce que coûtent les reprises",
          body: "Partez du processus type « Contrôle qualité et non-conformités » : échantillons, mesures, résultats, lot accepté ou non, blocage, causes, décision, action corrective. Le taux d'erreur et le coût de reprise font partie du chiffrage.",
        },
        {
          label: 'Construire',
          title: 'Un registre relié aux lots',
          body: "Chaque non-conformité est liée à son lot, à son fournisseur ou à son poste, avec sa cause et sa décision : retouche, rebut ou dérogation.",
        },
        {
          label: 'Automatiser, puis confier',
          title: 'La décision reste humaine, le suivi ne se perd plus',
          body: "Le formulaire de contrôle crée l'enregistrement et prévient le responsable. La décision reste celle d'une personne. Un agent relance les actions correctives en retard et prépare la synthèse du mois.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un formulaire de contrôle', body: "Rempli à l'atelier, il crée la non-conformité sans recopie." },
          { title: 'Un registre des non-conformités', body: 'Par lot, cause, décision et coût de reprise.' },
          { title: 'Un suivi des actions correctives', body: 'Responsable, échéance, relance et clôture.' },
        ],
      },
      limits:
        "TblFlow n'est pas un système de gestion documentaire certifié ni un logiciel de pilotage d'atelier : il ne pilote pas les machines et ne remplace pas votre système qualité certifié. Il relie les contrôles, les décisions et les actions.",
      prompts: [
        'Crée un formulaire de contrôle qui enregistre le lot, la mesure et la photo de la pièce.',
        'Liste les actions correctives en retard et prépare une relance à chaque responsable.',
        'Montre le coût des reprises par fournisseur sur le trimestre.',
      ],
      faq: [
        {
          q: 'La décision sur un lot peut-elle être automatique ?',
          a: "Vous pouvez automatiser le blocage d'un lot selon une règle, mais la décision de retouche, de rebut ou de dérogation reste celle d'une personne.",
        },
        {
          q: "Peut-on joindre des photos depuis l'atelier ?",
          a: "Oui : le formulaire accepte des pièces jointes, et le formulaire public s'ouvre sur un téléphone.",
        },
        {
          q: 'TblFlow remplace-t-il notre système qualité ?',
          a: "Non. Il suit les non-conformités et les actions ; votre système documentaire certifié reste en place.",
        },
      ],
    },

    procedures: {
      nav: 'Vos procédures, enfin à jour',
      card: 'Procédures indexées, relues à temps, et des réponses tirées de vos documents.',
      metaTitle: 'Procédures internes à jour et consultables | TblFlow',
      metaDescription:
        'Déposez vos procédures, TblFlow les indexe, vous prévient quand une revue est dépassée, et les agents répondent à partir de vos documents.',
      eyebrow: "Cas d'usage · Documentation interne",
      title: 'Des procédures que l’on retrouve, que l’on relit, et dont l’IA se sert',
      subtitle:
        "Vos procédures sont indexées dans DocIndex, rattachées aux processus de la carte, relues à temps grâce aux alertes, et servent de contexte aux agents.",
      flow: {
        steps: [
          { title: 'Rédaction', tool: 'Word', after: 'human' },
          { title: 'Diffusion', tool: 'Dossier partagé', after: 'automation' },
          { title: 'Relecture', tool: 'Rappel d’agenda', after: 'automation' },
          { title: "Question d'un collègue", tool: 'E-mail', after: 'agent' },
        ],
        rekeyed: 'Procédure relances v3',
        calc: '20 questions par semaine × 5 minutes ≈ 7 heures par mois.',
      },
      problem: {
        title: 'La bonne version est quelque part',
        body: "Les procédures dorment dans un dossier partagé, en plusieurs versions. Personne ne sait laquelle est à jour, la relecture est oubliée, et les mêmes questions reviennent par e-mail.",
      },
      journey: [
        {
          label: 'Comprendre',
          title: 'Déposez vos documents tels qu’ils sont',
          body: 'PDF, Word, Markdown : DocIndex les indexe en recherche sémantique et en plein texte. Vos équipes cherchent dans leurs mots.',
        },
        {
          label: 'Cartographier',
          title: 'Rattachez chaque procédure à son processus',
          body: "Sur la carte, chaque processus a sa fiche procédure, son propriétaire et sa prochaine date de revue.",
        },
        {
          label: 'Construire',
          title: 'Une base de connaissances vivante',
          body: 'Les procédures, leurs versions et leurs propriétaires réunis, consultables par toute l’équipe selon ses droits.',
        },
        {
          label: 'Automatiser, puis confier',
          title: 'Les revues rappelées, les réponses apportées',
          body: "Chaque lundi, un courriel liste les procédures dont la revue est dépassée ou proche. Les agents s'appuient sur vos procédures indexées pour répondre et pour agir selon vos règles.",
        },
      ],
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Une base de procédures', body: 'Indexée, cherchable, rattachée aux processus de la carte.' },
          { title: 'Des revues à date', body: 'Un propriétaire et une date de revue par procédure, avec une alerte hebdomadaire.' },
          { title: 'Des agents qui suivent vos règles', body: 'Ils lisent vos procédures avant de proposer une action.' },
        ],
      },
      limits:
        "TblFlow n'est pas une gestion électronique de documents certifiée : pas de signature électronique ni de circuit d'approbation documentaire réglementé. Il indexe vos procédures et les rattache à vos processus.",
      prompts: [
        'Trouve la procédure de relance client la plus récente et résume-la en cinq étapes.',
        'Liste les procédures sans propriétaire ou dont la revue est dépassée.',
        "Réponds à cette question d'un collègue à partir de nos procédures, avec la source.",
      ],
      faq: [
        {
          q: 'Quels formats sont indexés ?',
          a: 'Les documents PDF, Word, PowerPoint, Markdown et texte. Le texte des PDF, Word et PowerPoint est extrait et indexé.',
        },
        {
          q: 'Qui voit quelles procédures ?',
          a: 'Les droits de votre espace s’appliquent : chacun ne voit que ce que son rôle lui permet de lire.',
        },
        {
          q: "L'IA invente-t-elle des réponses ?",
          a: 'Les agents cherchent dans vos procédures indexées et vous montrent la source. Vérifiez toujours avant d’agir sur une réponse importante.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Dirigeants',
      card: 'Voir ce que les ressaisies coûtent, et décider quoi confier.',
      metaTitle: 'TblFlow pour les dirigeants : le coût de vos ressaisies',
      metaDescription:
        "Une carte de vos processus avec leurs coûts estimés, la liste des processus où vous perdez le plus, une vue direction imprimable et un rapport mensuel.",
      eyebrow: 'Pour qui · Dirigeants',
      title: 'Voyez ce que vos ressaisies vous coûtent, puis décidez quoi confier',
      subtitle:
        "Vous savez que vos équipes passent du temps à recopier. TblFlow vous montre où, combien, et ce qu'il est possible d'automatiser ou de confier à des agents.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'Des heures invisibles', body: 'La même information retapée d’un outil à l’autre ne figure dans aucun tableau de bord.' },
          { title: 'Des outils en doublon', body: 'Une dizaine d’abonnements, sans que personne sache lesquels sont encore utiles.' },
          { title: 'Des décisions à l’aveugle', body: 'Les chiffres arrivent tard, recopiés, et chacun a sa version.' },
        ],
      },
      build: {
        title: 'Ce que vous obtenez',
        items: [
          { title: 'La carte de vos processus', body: 'Qui fait quoi, avec quel outil, où l’information est ressaisie, et les coûts estimés.' },
          { title: '« Où perdez-vous de l’argent ? »', body: 'Vos processus classés par gain potentiel, pour choisir par où commencer.' },
          { title: 'Une vue direction et un rapport mensuel', body: 'Coût, gain potentiel, revues en retard : une page imprimable et un courriel le 1er du mois.' },
        ],
      },
      faq: [
        {
          q: 'Les coûts sont-ils mesurés ?',
          a: 'Non : ce sont des estimations à partir des volumes et des taux que vous saisissez. Vous pouvez ensuite saisir des mesures réelles pour comparer l’estimé au réel.',
        },
        {
          q: 'Faut-il tout migrer d’un coup ?',
          a: 'Non. Commencez par un processus. Les outils que vous gardez restent connectés, et ce que TblFlow génère reste inactif tant que vous ne l’avez pas validé.',
        },
        {
          q: 'Que devient mon équipe ?',
          a: 'Les tâches répétitives vont aux automatisations et aux agents ; vos équipes gardent la relation client, le conseil et la décision.',
        },
      ],
    },

    finance: {
      nav: 'Finance et comptabilité',
      card: 'Achats, factures, clôture et pilotage sans recopier les exports.',
      metaTitle: 'TblFlow pour la finance : factures, clôture et pilotage',
      metaDescription:
        "Pour le DAF, le contrôle de gestion et la comptabilité : factures fournisseurs rapprochées, échéancier client, marges et EBITDA recalculés, synthèse mensuelle.",
      eyebrow: 'Pour qui · Finance et comptabilité',
      title: 'Le pilotage financier qui manque entre votre comptabilité et vos tableurs',
      subtitle:
        "Votre logiciel comptable tient les écritures. TblFlow reprend tout ce qui se passe autour : les achats, les factures, les relances, les retraitements et les tableaux de la direction.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'Des factures sans commande', body: 'Il faut retrouver la demande, la commande et la réception avant de payer.' },
          { title: 'Des exports recopiés', body: 'Chaque mois, la balance passe de fichier en fichier jusqu’à la présentation.' },
          { title: 'Des relances de mémoire', body: 'Personne ne voit d’un coup d’œil ce qui reste à encaisser.' },
        ],
      },
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un circuit des factures fournisseurs', body: 'Demande, commande, réception et facture liées, contrôlées avant paiement.' },
          { title: 'Un échéancier et des relances', body: 'Les factures clients suivies jusqu’à l’encaissement, les relances préparées par un agent.' },
          { title: 'Des marges et un EBITDA à jour', body: 'Recalculés à chaque import, avec une synthèse mensuelle à relire.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow est-il un logiciel comptable ?',
          a: "Non. Il ne tient pas les écritures, n'émet pas de facture électronique conforme et ne fait pas le rapprochement bancaire. Il relie les étapes autour de votre comptabilité.",
        },
        {
          q: 'Comment arrivent les données comptables ?',
          a: 'Par un export CSV de la balance ou du grand livre, importé dans une table. Si votre logiciel publie une API, TblFlow peut générer un connecteur.',
        },
        {
          q: 'Les montants sont-ils protégés ?',
          a: 'Les droits se règlent par rôle et par champ : vous décidez qui lit, qui modifie et qui ne voit pas les montants.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Administration des ventes',
      card: 'Du devis à la facture sans recopier les commandes.',
      metaTitle: "TblFlow pour l'ADV : du devis à la facture sans ressaisie",
      metaDescription:
        'Devis, commandes, factures et relances reliés dans une seule base : l’ADV saisit une fois, les automatisations font le reste, les agents préparent les relances.',
      eyebrow: 'Pour qui · Administration des ventes',
      title: 'Saisissez la commande une fois, pas à chaque outil',
      subtitle:
        "Le devis accepté devient la commande, la commande prépare la facture, la facture échue est relancée. L'ADV garde la relation avec le client, pas la saisie.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'La commande retapée', body: 'Le devis accepté est recopié dans le tableur des commandes, puis dans la facture.' },
          { title: 'Des erreurs de prix', body: 'Chaque recopie est une occasion de se tromper de ligne ou de remise.' },
          { title: 'Le client qui attend', body: 'Pour savoir où en est sa commande, il faut ouvrir trois fichiers.' },
        ],
      },
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un pipeline devis-commande', body: 'Le statut du devis déclenche la commande, avec les mêmes lignes.' },
          { title: 'Un suivi des commandes', body: 'Où en est chaque commande, visible par toute l’équipe selon ses droits.' },
          { title: 'Des relances prêtes', body: 'Un agent prépare les relances selon votre procédure ; vous validez.' },
        ],
      },
      faq: [
        {
          q: 'Peut-on garder notre CRM ?',
          a: 'Oui. Les outils que vous gardez restent connectés. TblFlow comprend aussi un modèle « Ventes et relation client » si vous voulez tout réunir.',
        },
        {
          q: 'Les clients peuvent-ils passer commande eux-mêmes ?',
          a: "Un formulaire public peut alimenter vos commandes. Il n'y a pas de comptes clients avec leurs propres droits.",
        },
        {
          q: 'Combien de temps pour démarrer ?',
          a: 'Un processus se cartographie gratuitement. Les tables se génèrent à partir de la carte, et vos données existantes s’importent en CSV ou Excel.',
        },
      ],
    },

    manufacturing: {
      nav: 'Industrie et production',
      card: "Qualité, approvisionnement et stocks pilotés autour de l'ERP.",
      metaTitle: "TblFlow pour l'industrie : qualité, achats et stocks",
      metaDescription:
        "Non-conformités, approvisionnement matières, stocks et expédition reliés autour de votre ERP, avec le coût des reprises estimé et des agents sous validation.",
      eyebrow: 'Pour qui · Industrie et production',
      title: "Pilotez l'atelier autour de votre ERP, sans le remplacer",
      subtitle:
        "Votre ERP gère la production. TblFlow reprend ce qui circule encore sur papier et dans les tableurs : les contrôles, les non-conformités, les seuils, les réassorts et les relances.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'Des fiches papier', body: 'Contrôles et écarts saisis deux fois, entre l’atelier et le bureau.' },
          { title: 'Des reprises non chiffrées', body: 'Le coût des non-conformités ne remonte nulle part.' },
          { title: 'Des ruptures de matière', body: 'Le seuil est franchi avant que quelqu’un le voie.' },
        ],
      },
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un registre qualité', body: 'Non-conformités liées aux lots, causes, décisions et actions correctives.' },
          { title: 'Un approvisionnement suivi', body: 'Seuils, demandes, commandes et réceptions de matières reliés.' },
          { title: 'Une carte chiffrée de l’atelier', body: 'Taux d’erreur, coût de reprise et vocabulaire « ordre de fabrication » sur la carte.' },
        ],
      },
      faq: [
        {
          q: "TblFlow fait-il de l'ordonnancement ou du MRP ?",
          a: "Non. Il ne planifie pas la production et ne suit pas l'atelier en temps réel ; la carte décrit vos processus, elle ne les exécute pas. Il reprend les flux autour de l'ERP.",
        },
        {
          q: 'Peut-on utiliser le vocabulaire de l’usine ?',
          a: 'Oui : le préréglage « Industrie et logistique » affiche « ordre de fabrication » à la place de « commande » sur la carte.',
        },
        {
          q: 'Notre ERP peut-il être connecté ?',
          a: "S'il publie une API, TblFlow peut générer un connecteur à partir de sa documentation. Pour un outil sans API, une tâche web enregistrée peut être rejouée.",
        },
      ],
    },

    retail: {
      nav: 'Commerce et distribution',
      card: 'Stocks, réassort, commandes et SAV dans une seule base.',
      metaTitle: 'TblFlow pour le commerce : stocks, réassort et SAV',
      metaDescription:
        'Inventaires tournants, alertes de seuil, commandes de réassort, préparation et SAV reliés dans une base, avec des agents qui préparent et vous qui validez.',
      eyebrow: 'Pour qui · Commerce et distribution',
      title: 'Stocks, réassort et SAV dans une seule base',
      subtitle:
        "Les articles, les mouvements, les commandes et les retours au même endroit. Le seuil prévient, l'agent prépare le réassort, vous validez.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'Des ruptures découvertes trop tard', body: 'Le stock n’est juste qu’au moment de l’inventaire.' },
          { title: 'Des commandes fournisseurs à la main', body: 'Chaque réassort est un e-mail rédigé à partir d’un tableur.' },
          { title: 'Un SAV éparpillé', body: 'Garantie, retour, réparation : chaque étape dans un outil différent.' },
        ],
      },
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un stock suivi par mouvements', body: 'Le modèle « Gestion des stocks » : articles, mouvements, valeur du stock, alertes de seuil.' },
          { title: 'Un réassort préparé', body: 'Les articles sous le seuil et un brouillon de commande par fournisseur, à valider.' },
          { title: 'Un suivi du SAV', body: 'Demande, garantie, diagnostic, retour et clôture reliés à la commande.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow se connecte-t-il à ma boutique en ligne ?',
          a: "Il n'y a pas de connecteur e-commerce intégré. Si votre plateforme publie une API, TblFlow peut générer un connecteur ; sinon, les commandes s'importent en CSV.",
        },
        {
          q: 'Peut-on lire les codes-barres ?',
          a: 'Non. Le code EAN est un champ de l’article, mais il n’y a pas de lecture de code-barres.',
        },
        {
          q: 'Par où commencer ?',
          a: 'Par l’inventaire tournant ou le réassort : deux processus types prêts à importer sur la carte, et un modèle de base de stock.',
        },
      ],
    },

    firms: {
      nav: 'Cabinets et services',
      card: 'Missions, dossiers, temps et facturation sans tableurs recopiés.',
      metaTitle: 'TblFlow pour les cabinets : missions, dossiers et marges',
      metaDescription:
        'Pour le conseil, l’expertise comptable et le juridique : missions et dossiers suivis, marge par mission, facturation et relances, procédures indexées.',
      eyebrow: 'Pour qui · Cabinets et services',
      title: 'Vos missions et vos dossiers, de la lettre de mission à l’encaissement',
      subtitle:
        "Chaque mission ou dossier relié à son client, à son temps passé, à sa facture et à sa marge. Les procédures du cabinet indexées, les relances préparées.",
      pains: {
        title: 'Ce qui vous coûte aujourd’hui',
        items: [
          { title: 'Des marges devinées', body: 'Le temps passé et la facturation vivent dans des fichiers séparés.' },
          { title: 'Des dossiers éparpillés', body: 'Pièces, échéances et relances de justificatifs dans la messagerie.' },
          { title: 'Des procédures orales', body: 'Le savoir-faire du cabinet tient dans la tête de quelques personnes.' },
        ],
      },
      build: {
        title: 'Ce que vous construisez',
        items: [
          { title: 'Un suivi des missions', body: 'Le modèle « Pilotage financier » : missions et projets avec leur marge brute.' },
          { title: 'Des dossiers et des échéances', body: 'Chaque dossier, ses pièces, ses échéances et ses relances au même endroit.' },
          { title: 'Les procédures du cabinet', body: 'Indexées dans DocIndex, rattachées aux processus, utilisées par les agents.' },
        ],
      },
      faq: [
        {
          q: 'Le vocabulaire peut-il être celui du cabinet ?',
          a: 'Oui : les préréglages « Services et conseil » et « Comptabilité et juridique » affichent « mission » ou « dossier » sur la carte.',
        },
        {
          q: 'Peut-on partager un suivi avec un client ?',
          a: "Oui, en lecture par lien ou par formulaire public. Il n'y a pas d'espace client avec des comptes et des droits propres à chaque client.",
        },
        {
          q: 'Les données des clients restent-elles chez nous ?',
          a: 'Elles vivent dans un vrai PostgreSQL, exportable, et TblFlow peut être auto-hébergé avec le palier Entreprise.',
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default fr;
