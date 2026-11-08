import type { Locale } from '@/config';

/**
 * Copy for the home page journey: seven steps in the order a company lives
 * them, from the problem to the time handed back to the team, then what the
 * customer keeps. Kept in one table so the ten languages stay aligned;
 * translations other than French and English are to be reviewed by a native
 * speaker (see docs/positionnement.md).
 */
export interface JourneyCopy {
  signature: string;
  steps: { label: string; title: string; body: string }[];
  docs: { files: string; tools: string; indexed: string; status: string; names: string[] };
  auto: { when: string; trigger: string; then: string; actions: string[] };
  agent: { prompt: string; sources: string; items: string[]; status: string };
  split: { agents: string; team: string; agentItems: string[]; teamItems: string[] };
  keep: { title: string; items: { title: string; body: string }[] };
}

export const JOURNEY: Record<Locale, JourneyCopy> = {
  de: {
    "signature": "Wiederkehrende Aufgaben an Agenten, Beziehungen an Menschen.",
    "steps": [
      {
        "label": "Das Problem",
        "title": "Ihre Daten sind längst da. Sie fließen nur nicht.",
        "body": "Das Angebot in einem Tool, der Auftrag in einer Tabelle, die Rechnung in einem dritten: Dieselbe Information wird mehrfach eingetippt – von Menschen, deren Beruf etwas anderes ist."
      },
      {
        "label": "Verstehen",
        "title": "Bringen Sie TblFlow zuerst Ihr Unternehmen bei",
        "body": "Laden Sie Ihre Abläufe als PDF oder Markdown hoch und verbinden Sie die Tools, die Sie schon nutzen. DocIndex indexiert diese Dokumentation: Ihr Team kann sie durchsuchen, die KI damit arbeiten."
      },
      {
        "label": "Kartieren",
        "title": "Erhalten Sie die Karte Ihrer Prozesse und verfeinern Sie sie",
        "body": "TblFlow erstellt die Prozesslandkarte aus Ihren Dokumenten und Tools: wer was tut, mit welchem Tool, wo Daten doppelt erfasst werden. Sie korrigieren und ergänzen, geben Mengen und Sätze ein, und TblFlow schätzt, was jeder Schritt kostet."
      },
      {
        "label": "Aufbauen",
        "title": "TblFlow erzeugt die Tabellen, die Ihre Tools ersetzen",
        "body": "Aus der Karte: Analyse, Blueprint, Tabellen, Beziehungen, Oberfläche, Automatisierungen, Agenten. Ihre Geschäftsregeln sind eingebaut, Ihre anderen Tools bleiben verbunden, damit kein Ablauf abreißt, Ihre Daten werden importiert, und die alten Anwendungen können abgeschaltet werden."
      },
      {
        "label": "Automatisieren",
        "title": "Automatisieren Sie zuerst, was einer Regel folgt",
        "body": "Folgt ein Schritt einer einfachen Regel, genügt eine Automatisierung: vorhersehbar, schnell, ohne KI-Aufruf. Agenten kommen danach – dort, wo gelesen, abgewogen oder formuliert werden muss."
      },
      {
        "label": "An Agenten übergeben",
        "title": "Übergeben Sie den Rest an Agenten, die Ihr Haus kennen",
        "body": "Die Agenten stützen sich auf Ihre Tabellen und auf Ihre internen Abläufe, die in DocIndex indexiert sind. Sie schlagen vor, Sie geben frei: Nichts läuft ohne Ihre Zustimmung."
      },
      {
        "label": "Zeit zurückgeben",
        "title": "Wiederkehrende Aufgaben an Agenten. Beziehungen an Menschen.",
        "body": "Die gewonnene Zeit fließt dorthin, wo Ihr Team den Unterschied macht: Kundenbeziehung, Beratung, Entscheidung. Definieren Sie die Rollen gemeinsam neu und begleiten Sie den Wandel."
      }
    ],
    "docs": {
      "files": "Abläufe",
      "tools": "Verbundene Tools",
      "indexed": "Indexiert",
      "status": "DocIndex · 3 Dokumente indexiert",
      "names": [
        "rechnungsablauf.pdf",
        "kundenmahnungen.md",
        "kunden-onboarding.pdf"
      ]
    },
    "auto": {
      "when": "Wenn",
      "trigger": "Ein Angebot wechselt auf Angenommen",
      "then": "Dann",
      "actions": [
        "Auftrag anlegen",
        "Rechnung vorbereiten"
      ]
    },
    "agent": {
      "prompt": "Mahne Rechnungen, die seit über 30 Tagen fällig sind, gemäß unserem Ablauf",
      "sources": "Quellen",
      "items": [
        "Tabelle · Rechnungen",
        "kundenmahnungen.md"
      ],
      "status": "Entwurf zur Freigabe bereit"
    },
    "split": {
      "agents": "An Agenten übergeben",
      "team": "Bei Ihrem Team",
      "agentItems": [
        "Auftragserfassung",
        "Rechnungsmahnungen",
        "Dashboards aktualisieren"
      ],
      "teamItems": [
        "Kundenbeziehung",
        "Verhandlung",
        "Wachstum steuern"
      ]
    },
    "keep": {
      "title": "Was Sie behalten",
      "items": [
        {
          "title": "Ihre Daten",
          "body": "In einem echten PostgreSQL, exportierbar und selbst hostbar."
        },
        {
          "title": "Die Entscheidung",
          "body": "Was die KI erzeugt, bleibt inaktiv, bis Sie es freigeben."
        },
        {
          "title": "Die Lesbarkeit",
          "body": "Alles bleibt lesbar: in SQL, in DocIndex, auf der Karte."
        }
      ]
    }
  },
  en: {
    "signature": "Repetitive tasks to agents, relationships to people.",
    "steps": [
      {
        "label": "The problem",
        "title": "Your data already exists. It just doesn’t flow.",
        "body": "A quote in one tool, the order in a spreadsheet, the invoice in a third: the same information is typed again and again, by people whose job is something else."
      },
      {
        "label": "Understand",
        "title": "Start by helping TblFlow understand your company",
        "body": "Upload your procedures as PDF or Markdown and connect the tools you already use. DocIndex indexes that documentation, so your team can search it and AI can work from it."
      },
      {
        "label": "Map",
        "title": "Get the map of your processes, then refine it",
        "body": "TblFlow generates the process map from your documents and tools: who does what, in which tool, where information is re-entered. You correct and complete it, enter your volumes and rates, and TblFlow estimates what each step costs."
      },
      {
        "label": "Build",
        "title": "TblFlow generates the tables that replace your tools",
        "body": "From the map: analysis, blueprint, tables, relations, interface, automations, agents. Your business rules are built in, your other tools stay connected so no flow is cut, your data is imported, and the old applications can be retired."
      },
      {
        "label": "Automate",
        "title": "Automate what follows a rule first",
        "body": "When a step follows a simple rule, an automation is enough: predictable, fast, no AI call. Agents come next, where something has to be read, judged or written."
      },
      {
        "label": "Delegate to agents",
        "title": "Hand the rest to agents that know how you work",
        "body": "Agents work from your tables and from the internal procedures indexed in DocIndex. They propose, you approve: nothing runs without your go-ahead."
      },
      {
        "label": "Give time back",
        "title": "Repetitive tasks to agents. Relationships to people.",
        "body": "The time you free up goes where your team makes the difference: customers, advice, decisions. Redefine roles with them and lead the change."
      }
    ],
    "docs": {
      "files": "Procedures",
      "tools": "Connected tools",
      "indexed": "Indexed",
      "status": "DocIndex · 3 documents indexed",
      "names": [
        "invoicing-procedure.pdf",
        "customer-reminders.md",
        "customer-onboarding.pdf"
      ]
    },
    "auto": {
      "when": "When",
      "trigger": "A quote moves to Accepted",
      "then": "Then",
      "actions": [
        "Create the order",
        "Draft the invoice"
      ]
    },
    "agent": {
      "prompt": "Send reminders for invoices more than 30 days overdue, following our procedure",
      "sources": "Sources",
      "items": [
        "Table · Invoices",
        "customer-reminders.md"
      ],
      "status": "Draft ready to approve"
    },
    "split": {
      "agents": "Handed to agents",
      "team": "Kept by your team",
      "agentItems": [
        "Entering orders",
        "Invoice reminders",
        "Updating dashboards"
      ],
      "teamItems": [
        "Customer relationships",
        "Negotiation",
        "Steering growth"
      ]
    },
    "keep": {
      "title": "What you keep",
      "items": [
        {
          "title": "Your data",
          "body": "In a real PostgreSQL database, exportable and self-hostable."
        },
        {
          "title": "The decision",
          "body": "Whatever AI generates stays inactive until you approve it."
        },
        {
          "title": "Visibility",
          "body": "Everything stays readable: in SQL, in DocIndex, on the map."
        }
      ]
    }
  },
  es: {
    "signature": "Las tareas repetitivas, a los agentes; las relaciones, a las personas.",
    "steps": [
      {
        "label": "El problema",
        "title": "Tus datos ya existen. Lo que no hacen es circular.",
        "body": "Un presupuesto en una herramienta, el pedido en una hoja de cálculo, la factura en una tercera: la misma información se introduce varias veces, por personas cuyo oficio es otro."
      },
      {
        "label": "Comprender",
        "title": "Empieza por hacer que TblFlow entienda tu empresa",
        "body": "Sube tus procedimientos en PDF o Markdown y conecta las herramientas que ya utilizas. DocIndex indexa esa documentación: tu equipo la consulta y la IA trabaja con ella."
      },
      {
        "label": "Cartografiar",
        "title": "Obtén el mapa de tus procesos y afínalo",
        "body": "TblFlow genera el mapa a partir de tus documentos y herramientas: quién hace qué, con qué herramienta, dónde se vuelve a introducir la información. Tú lo corriges y completas, introduces volúmenes y tarifas, y TblFlow estima lo que cuesta cada paso."
      },
      {
        "label": "Construir",
        "title": "TblFlow genera las tablas que sustituyen a tus herramientas",
        "body": "A partir del mapa: análisis, blueprint, tablas, relaciones, interfaz, automatizaciones, agentes. Tus reglas de negocio se integran, tus demás herramientas siguen conectadas para no cortar los flujos, tus datos se importan y las aplicaciones antiguas pueden retirarse."
      },
      {
        "label": "Automatizar",
        "title": "Automatiza primero lo que sigue una regla",
        "body": "Cuando un paso obedece a una regla sencilla, basta una automatización: previsible, rápida y sin llamar a la IA. Los agentes llegan después, donde hay que leer, valorar o redactar."
      },
      {
        "label": "Confiar a agentes",
        "title": "Confía el resto a agentes que conocen tu casa",
        "body": "Los agentes se basan en tus tablas y en los procedimientos internos indexados en DocIndex. Ellos proponen, tú validas: nada se activa sin tu acuerdo."
      },
      {
        "label": "Devolver tiempo",
        "title": "Las tareas repetitivas, a los agentes. Las relaciones, a las personas.",
        "body": "El tiempo liberado se reinvierte donde tu equipo marca la diferencia: la relación con el cliente, el asesoramiento, la decisión. Redefine los roles con ellos y acompaña el cambio."
      }
    ],
    "docs": {
      "files": "Procedimientos",
      "tools": "Herramientas conectadas",
      "indexed": "Indexado",
      "status": "DocIndex · 3 documentos indexados",
      "names": [
        "procedimiento-facturacion.pdf",
        "recordatorios-clientes.md",
        "alta-de-clientes.pdf"
      ]
    },
    "auto": {
      "when": "Cuando",
      "trigger": "Un presupuesto pasa a Aceptado",
      "then": "Entonces",
      "actions": [
        "Crear el pedido",
        "Preparar la factura"
      ]
    },
    "agent": {
      "prompt": "Envía recordatorios de las facturas vencidas hace más de 30 días, según nuestro procedimiento",
      "sources": "Fuentes",
      "items": [
        "Tabla · Facturas",
        "recordatorios-clientes.md"
      ],
      "status": "Borrador listo para validar"
    },
    "split": {
      "agents": "Confiado a los agentes",
      "team": "En manos de tu equipo",
      "agentItems": [
        "Registro de pedidos",
        "Recordatorios de facturas",
        "Actualización de paneles"
      ],
      "teamItems": [
        "Relación con el cliente",
        "Negociación",
        "Dirección del crecimiento"
      ]
    },
    "keep": {
      "title": "Lo que conservas",
      "items": [
        {
          "title": "Tus datos",
          "body": "En un PostgreSQL real, exportable y autoalojable."
        },
        {
          "title": "La decisión",
          "body": "Lo que genera la IA queda inactivo hasta que lo validas."
        },
        {
          "title": "La legibilidad",
          "body": "Todo se puede leer: en SQL, en DocIndex, en el mapa."
        }
      ]
    }
  },
  fr: {
    "signature": "Les tâches répétitives aux agents, les relations aux humains.",
    "steps": [
      {
        "label": "Le problème",
        "title": "Vos données existent déjà. Elles ne circulent pas.",
        "body": "Un devis dans un outil, la commande dans un tableur, la facture dans un troisième : la même information est saisie plusieurs fois, par des personnes dont ce n’est pas le métier."
      },
      {
        "label": "Comprendre",
        "title": "Commencez par faire comprendre votre entreprise",
        "body": "Déposez vos procédures en PDF ou en Markdown et connectez les outils que vous utilisez déjà. DocIndex indexe cette documentation : vos équipes la consultent, l’IA s’en sert."
      },
      {
        "label": "Cartographier",
        "title": "Obtenez la carte de vos process, puis affinez-la",
        "body": "TblFlow génère la cartographie à partir de vos documents et de vos outils : qui fait quoi, avec quel outil, où l’information est ressaisie. Vous la corrigez, la complétez, saisissez vos volumes et vos taux, et TblFlow estime ce que coûte chaque étape."
      },
      {
        "label": "Construire",
        "title": "TblFlow génère les tables qui remplacent vos outils",
        "body": "À partir de la carte : analyse, plan, tables, liaisons, interface, automatisations, agents. Vos règles métier sont intégrées, vos autres outils restent connectés pour ne pas couper les flux, vos données sont importées, et les anciennes applications peuvent être décommissionnées."
      },
      {
        "label": "Automatiser",
        "title": "Automatisez d’abord ce qui suit une règle",
        "body": "Quand une étape obéit à une règle simple, une automatisation suffit : prévisible, rapide, sans appel à l’IA. Les agents viennent ensuite, là où il faut lire, juger ou rédiger."
      },
      {
        "label": "Confier aux agents",
        "title": "Confiez le reste à des agents qui connaissent votre maison",
        "body": "Les agents s’appuient sur vos tables et sur vos procédures internes indexées dans DocIndex. Ils proposent, vous validez : rien ne s’active sans votre accord."
      },
      {
        "label": "Rendre du temps",
        "title": "Les tâches répétitives aux agents. Les relations aux humains.",
        "body": "Le temps libéré se réinvestit là où vos équipes font la différence : la relation client, le conseil, la décision. Redéfinissez les rôles avec elles et accompagnez le changement."
      }
    ],
    "docs": {
      "files": "Procédures",
      "tools": "Outils connectés",
      "indexed": "Indexé",
      "status": "DocIndex · 3 documents indexés",
      "names": [
        "procedure-facturation.pdf",
        "relances-clients.md",
        "accueil-client.pdf"
      ]
    },
    "auto": {
      "when": "Quand",
      "trigger": "Un devis passe à Accepté",
      "then": "Alors",
      "actions": [
        "Créer la commande",
        "Préparer la facture"
      ]
    },
    "agent": {
      "prompt": "Relance les factures échues depuis plus de 30 jours, selon notre procédure",
      "sources": "Sources",
      "items": [
        "Table · Factures",
        "relances-clients.md"
      ],
      "status": "Brouillon prêt à valider"
    },
    "split": {
      "agents": "Confié aux agents",
      "team": "Gardé par vos équipes",
      "agentItems": [
        "Saisie des commandes",
        "Relances de factures",
        "Mise à jour des tableaux de bord"
      ],
      "teamItems": [
        "Relation client",
        "Négociation",
        "Pilotage de la croissance"
      ]
    },
    "keep": {
      "title": "Ce que vous gardez",
      "items": [
        {
          "title": "Vos données",
          "body": "Dans un vrai PostgreSQL, exportable et auto-hébergeable."
        },
        {
          "title": "La décision",
          "body": "Ce que l’IA génère reste inactif tant que vous ne l’avez pas validé."
        },
        {
          "title": "La lisibilité",
          "body": "Tout se lit : en SQL, dans DocIndex, sur la carte."
        }
      ]
    }
  },
  it: {
    "signature": "I compiti ripetitivi agli agenti, le relazioni alle persone.",
    "steps": [
      {
        "label": "Il problema",
        "title": "I tuoi dati esistono già. Solo che non circolano.",
        "body": "Un preventivo in uno strumento, l’ordine in un foglio di calcolo, la fattura in un terzo: la stessa informazione viene digitata più volte, da persone che di mestiere fanno altro."
      },
      {
        "label": "Capire",
        "title": "Inizia facendo capire a TblFlow la tua azienda",
        "body": "Carica le tue procedure in PDF o Markdown e collega gli strumenti che già usi. DocIndex indicizza questa documentazione: il team la consulta, l’IA la utilizza."
      },
      {
        "label": "Mappare",
        "title": "Ottieni la mappa dei tuoi processi, poi affinala",
        "body": "TblFlow genera la mappa dai tuoi documenti e strumenti: chi fa cosa, con quale strumento, dove l’informazione viene ridigitata. Tu la correggi e completi, inserisci volumi e tariffe, e TblFlow stima quanto costa ogni passaggio."
      },
      {
        "label": "Costruire",
        "title": "TblFlow genera le tabelle che sostituiscono i tuoi strumenti",
        "body": "A partire dalla mappa: analisi, blueprint, tabelle, relazioni, interfaccia, automazioni, agenti. Le regole di business sono integrate, gli altri strumenti restano collegati per non interrompere i flussi, i dati vengono importati e le vecchie applicazioni possono essere dismesse."
      },
      {
        "label": "Automatizzare",
        "title": "Automatizza prima ciò che segue una regola",
        "body": "Quando un passaggio segue una regola semplice, basta un’automazione: prevedibile, veloce, senza chiamate all’IA. Gli agenti arrivano dopo, dove bisogna leggere, valutare o scrivere."
      },
      {
        "label": "Affidare agli agenti",
        "title": "Affida il resto ad agenti che conoscono la tua azienda",
        "body": "Gli agenti si basano sulle tue tabelle e sulle procedure interne indicizzate in DocIndex. Propongono, tu approvi: nulla si attiva senza il tuo consenso."
      },
      {
        "label": "Restituire tempo",
        "title": "I compiti ripetitivi agli agenti. Le relazioni alle persone.",
        "body": "Il tempo liberato si reinveste dove il tuo team fa la differenza: la relazione con il cliente, la consulenza, la decisione. Ridefinisci i ruoli insieme al team e accompagna il cambiamento."
      }
    ],
    "docs": {
      "files": "Procedure",
      "tools": "Strumenti collegati",
      "indexed": "Indicizzato",
      "status": "DocIndex · 3 documenti indicizzati",
      "names": [
        "procedura-fatturazione.pdf",
        "solleciti-clienti.md",
        "accoglienza-clienti.pdf"
      ]
    },
    "auto": {
      "when": "Quando",
      "trigger": "Un preventivo passa ad Accettato",
      "then": "Allora",
      "actions": [
        "Creare l’ordine",
        "Preparare la fattura"
      ]
    },
    "agent": {
      "prompt": "Sollecita le fatture scadute da più di 30 giorni, secondo la nostra procedura",
      "sources": "Fonti",
      "items": [
        "Tabella · Fatture",
        "solleciti-clienti.md"
      ],
      "status": "Bozza pronta da approvare"
    },
    "split": {
      "agents": "Affidato agli agenti",
      "team": "Al tuo team",
      "agentItems": [
        "Inserimento degli ordini",
        "Solleciti delle fatture",
        "Aggiornamento delle dashboard"
      ],
      "teamItems": [
        "Relazione con il cliente",
        "Negoziazione",
        "Guida della crescita"
      ]
    },
    "keep": {
      "title": "Ciò che conservi",
      "items": [
        {
          "title": "I tuoi dati",
          "body": "In un vero PostgreSQL, esportabile e self-hosted."
        },
        {
          "title": "La decisione",
          "body": "Ciò che l’IA genera resta inattivo finché non lo approvi."
        },
        {
          "title": "La leggibilità",
          "body": "Tutto resta leggibile: in SQL, in DocIndex, sulla mappa."
        }
      ]
    }
  },
  ja: {
    "signature": "繰り返しの作業はエージェントに、人との関係は人に。",
    "steps": [
      {
        "label": "課題",
        "title": "データはすでにある。ただ、流れていない。",
        "body": "見積はあるツールに、受注は表計算に、請求書はまた別のツールに。同じ情報が何度も手入力されています。それも、本来その仕事をするはずではない人の手で。"
      },
      {
        "label": "理解する",
        "title": "まず、TblFlow に会社を理解させる",
        "body": "手順書を PDF や Markdown でアップロードし、いま使っているツールを接続します。DocIndex がこのドキュメントをインデックス化し、チームは検索でき、AI はそれを活用できます。"
      },
      {
        "label": "マップ化する",
        "title": "プロセスマップを手に入れ、磨き上げる",
        "body": "TblFlow はドキュメントとツールからプロセスマップを生成します。誰が、どのツールで、何をしているか。どこで情報が二重入力されているか。マップを修正・補完し、件数と単価を入力すると、各工程のコストを TblFlow が試算します。"
      },
      {
        "label": "構築する",
        "title": "ツールを置き換えるテーブルを TblFlow が生成",
        "body": "マップをもとに、分析、ブループリント、テーブル、リレーション、インターフェース、自動化、エージェントへ。業務ルールを組み込み、ほかのツールは接続したままなので流れは途切れません。データを取り込めば、古いアプリケーションは廃止できます。"
      },
      {
        "label": "自動化する",
        "title": "まずはルールどおりに進む作業を自動化",
        "body": "単純なルールで決まる工程なら、自動化で十分です。予測でき、速く、AI を呼び出しません。読む、判断する、書くことが必要な場面で、エージェントの出番です。"
      },
      {
        "label": "エージェントに任せる",
        "title": "残りは、社内を知るエージェントに任せる",
        "body": "エージェントは、あなたのテーブルと、DocIndex にインデックス化された社内手順をもとに動きます。提案するのはエージェント、承認するのはあなた。承認なしには何も動きません。"
      },
      {
        "label": "時間を取り戻す",
        "title": "繰り返しの作業はエージェントに。人との関係は人に。",
        "body": "生まれた時間は、チームが本領を発揮できるところへ。顧客との関係、助言、意思決定です。チームと一緒に役割を見直し、変化を進めましょう。"
      }
    ],
    "docs": {
      "files": "手順書",
      "tools": "接続済みツール",
      "indexed": "インデックス済み",
      "status": "DocIndex · 3 件のドキュメントをインデックス化",
      "names": [
        "請求手順.pdf",
        "督促ルール.md",
        "顧客受け入れ.pdf"
      ]
    },
    "auto": {
      "when": "条件",
      "trigger": "見積が「承認済み」になったとき",
      "then": "実行",
      "actions": [
        "受注を作成",
        "請求書を下書き"
      ]
    },
    "agent": {
      "prompt": "支払期限を 30 日以上過ぎた請求書を、社内の手順どおりに督促して",
      "sources": "参照元",
      "items": [
        "テーブル · 請求書",
        "督促ルール.md"
      ],
      "status": "承認待ちの下書き"
    },
    "split": {
      "agents": "エージェントに任せる",
      "team": "チームが担う",
      "agentItems": [
        "受注の入力",
        "請求書の督促",
        "ダッシュボードの更新"
      ],
      "teamItems": [
        "顧客との関係",
        "交渉",
        "成長の舵取り"
      ]
    },
    "keep": {
      "title": "手元に残るもの",
      "items": [
        {
          "title": "データ",
          "body": "本物の PostgreSQL に。エクスポートもセルフホストも可能です。"
        },
        {
          "title": "決定権",
          "body": "AI が生成したものは、承認するまで動きません。"
        },
        {
          "title": "見通し",
          "body": "SQL でも、DocIndex でも、マップでも、すべて読み取れます。"
        }
      ]
    }
  },
  ru: {
    "signature": "Рутинные задачи — агентам, отношения — людям.",
    "steps": [
      {
        "label": "Проблема",
        "title": "Ваши данные уже есть. Они просто не движутся.",
        "body": "Коммерческое предложение в одном инструменте, заказ в таблице, счёт в третьем: одну и ту же информацию вводят несколько раз — люди, чья работа совсем в другом."
      },
      {
        "label": "Понять",
        "title": "Сначала помогите TblFlow понять вашу компанию",
        "body": "Загрузите регламенты в PDF или Markdown и подключите инструменты, которыми уже пользуетесь. DocIndex индексирует эту документацию: команда может в ней искать, а ИИ — на неё опираться."
      },
      {
        "label": "Картировать",
        "title": "Получите карту процессов и уточните её",
        "body": "TblFlow строит карту по вашим документам и инструментам: кто что делает, в каком инструменте, где данные вводятся повторно. Вы исправляете и дополняете её, указываете объёмы и ставки, а TblFlow оценивает стоимость каждого шага."
      },
      {
        "label": "Построить",
        "title": "TblFlow создаёт таблицы, которые заменят ваши инструменты",
        "body": "На основе карты: анализ, blueprint, таблицы, связи, интерфейс, автоматизации, агенты. Бизнес-правила встроены, остальные инструменты остаются подключены, чтобы потоки не прерывались, данные импортируются, а старые приложения можно вывести из эксплуатации."
      },
      {
        "label": "Автоматизировать",
        "title": "Сначала автоматизируйте то, что подчиняется правилу",
        "body": "Если шаг следует простому правилу, достаточно автоматизации: предсказуемо, быстро, без обращения к ИИ. Агенты нужны дальше — там, где надо читать, оценивать или писать."
      },
      {
        "label": "Доверить агентам",
        "title": "Остальное доверьте агентам, которые знают вашу компанию",
        "body": "Агенты опираются на ваши таблицы и на внутренние регламенты, проиндексированные в DocIndex. Они предлагают, вы утверждаете: без вашего согласия ничего не запускается."
      },
      {
        "label": "Вернуть время",
        "title": "Рутинные задачи — агентам. Отношения — людям.",
        "body": "Освободившееся время уходит туда, где ваша команда незаменима: отношения с клиентами, консультации, решения. Пересмотрите роли вместе с командой и проведите изменения."
      }
    ],
    "docs": {
      "files": "Регламенты",
      "tools": "Подключённые инструменты",
      "indexed": "Проиндексировано",
      "status": "DocIndex · 3 документа проиндексированы",
      "names": [
        "регламент-счетов.pdf",
        "напоминания-клиентам.md",
        "приём-клиентов.pdf"
      ]
    },
    "auto": {
      "when": "Когда",
      "trigger": "Предложение переходит в статус «Принято»",
      "then": "Тогда",
      "actions": [
        "Создать заказ",
        "Подготовить счёт"
      ]
    },
    "agent": {
      "prompt": "Напомни об оплате счетов, просроченных более чем на 30 дней, по нашему регламенту",
      "sources": "Источники",
      "items": [
        "Таблица · Счета",
        "напоминания-клиентам.md"
      ],
      "status": "Черновик ждёт утверждения"
    },
    "split": {
      "agents": "Доверено агентам",
      "team": "Остаётся за командой",
      "agentItems": [
        "Ввод заказов",
        "Напоминания по счетам",
        "Обновление дашбордов"
      ],
      "teamItems": [
        "Отношения с клиентами",
        "Переговоры",
        "Управление ростом"
      ]
    },
    "keep": {
      "title": "Что остаётся у вас",
      "items": [
        {
          "title": "Ваши данные",
          "body": "В настоящем PostgreSQL, с экспортом и возможностью самостоятельного размещения."
        },
        {
          "title": "Решение",
          "body": "Всё, что создаёт ИИ, остаётся неактивным, пока вы это не утвердите."
        },
        {
          "title": "Прозрачность",
          "body": "Всё остаётся читаемым: в SQL, в DocIndex, на карте."
        }
      ]
    }
  },
  tr: {
    "signature": "Tekrarlayan işler ajanlara, ilişkiler insanlara.",
    "steps": [
      {
        "label": "Sorun",
        "title": "Verileriniz zaten var. Sadece akmıyorlar.",
        "body": "Teklif bir araçta, sipariş bir tabloda, fatura üçüncü bir araçta: aynı bilgi, asıl işi bu olmayan kişiler tarafından defalarca giriliyor."
      },
      {
        "label": "Anlamak",
        "title": "Önce TblFlow’a şirketinizi tanıtın",
        "body": "Prosedürlerinizi PDF veya Markdown olarak yükleyin ve zaten kullandığınız araçları bağlayın. DocIndex bu dokümantasyonu dizinler: ekibiniz içinde arama yapar, yapay zekâ onu kullanır."
      },
      {
        "label": "Haritalamak",
        "title": "Süreç haritanızı alın, sonra inceltin",
        "body": "TblFlow, belgelerinizden ve araçlarınızdan süreç haritasını üretir: kim neyi, hangi araçla yapıyor, bilgi nerede yeniden giriliyor. Haritayı düzeltir ve tamamlarsınız, hacimlerinizi ve ücretlerinizi girersiniz; TblFlow her adımın maliyetini tahmin eder."
      },
      {
        "label": "Kurmak",
        "title": "TblFlow, araçlarınızın yerini alacak tabloları üretir",
        "body": "Haritadan yola çıkarak: analiz, blueprint, tablolar, ilişkiler, arayüz, otomasyonlar, ajanlar. İş kurallarınız dahil edilir, akışlar kesilmesin diye diğer araçlarınız bağlı kalır, verileriniz içe aktarılır ve eski uygulamalar devreden çıkarılabilir."
      },
      {
        "label": "Otomatikleştirmek",
        "title": "Önce bir kurala uyan işleri otomatikleştirin",
        "body": "Bir adım basit bir kurala uyuyorsa otomasyon yeterlidir: öngörülebilir, hızlı ve yapay zekâ çağrısı gerektirmez. Ajanlar daha sonra, okumak, değerlendirmek ya da yazmak gereken yerlerde devreye girer."
      },
      {
        "label": "Ajanlara emanet etmek",
        "title": "Gerisini şirketinizi tanıyan ajanlara bırakın",
        "body": "Ajanlar tablolarınıza ve DocIndex’te dizinlenen iç prosedürlerinize dayanır. Onlar önerir, siz onaylarsınız: onayınız olmadan hiçbir şey çalışmaz."
      },
      {
        "label": "Zamanı geri vermek",
        "title": "Tekrarlayan işler ajanlara. İlişkiler insanlara.",
        "body": "Kazanılan zaman, ekibinizin fark yarattığı yere yatırılır: müşteri ilişkisi, danışmanlık, karar. Rolleri ekibinizle birlikte yeniden tanımlayın ve değişime liderlik edin."
      }
    ],
    "docs": {
      "files": "Prosedürler",
      "tools": "Bağlı araçlar",
      "indexed": "Dizinlendi",
      "status": "DocIndex · 3 belge dizinlendi",
      "names": [
        "faturalama-proseduru.pdf",
        "musteri-hatirlatmalari.md",
        "musteri-karsilama.pdf"
      ]
    },
    "auto": {
      "when": "Ne zaman",
      "trigger": "Bir teklif Kabul edildi durumuna geçtiğinde",
      "then": "O zaman",
      "actions": [
        "Siparişi oluştur",
        "Faturayı hazırla"
      ]
    },
    "agent": {
      "prompt": "30 günden fazla gecikmiş faturalar için prosedürümüze göre hatırlatma gönder",
      "sources": "Kaynaklar",
      "items": [
        "Tablo · Faturalar",
        "musteri-hatirlatmalari.md"
      ],
      "status": "Taslak onaya hazır"
    },
    "split": {
      "agents": "Ajanlara emanet",
      "team": "Ekibinizde kalan",
      "agentItems": [
        "Sipariş girişi",
        "Fatura hatırlatmaları",
        "Panoların güncellenmesi"
      ],
      "teamItems": [
        "Müşteri ilişkisi",
        "Pazarlık",
        "Büyümeyi yönetmek"
      ]
    },
    "keep": {
      "title": "Sizde kalanlar",
      "items": [
        {
          "title": "Verileriniz",
          "body": "Gerçek bir PostgreSQL’de; dışa aktarılabilir ve kendi sunucunuzda barındırılabilir."
        },
        {
          "title": "Karar",
          "body": "Yapay zekânın ürettiği her şey, siz onaylayana kadar pasif kalır."
        },
        {
          "title": "Okunabilirlik",
          "body": "Her şey okunabilir kalır: SQL’de, DocIndex’te, haritada."
        }
      ]
    }
  },
  uk: {
    "signature": "Рутинні завдання — агентам, стосунки — людям.",
    "steps": [
      {
        "label": "Проблема",
        "title": "Ваші дані вже є. Вони просто не рухаються.",
        "body": "Комерційна пропозиція в одному інструменті, замовлення в таблиці, рахунок у третьому: ту саму інформацію вводять кілька разів — люди, чия робота зовсім інша."
      },
      {
        "label": "Зрозуміти",
        "title": "Спершу допоможіть TblFlow зрозуміти вашу компанію",
        "body": "Завантажте регламенти у PDF або Markdown і підключіть інструменти, якими вже користуєтеся. DocIndex індексує цю документацію: команда шукає в ній, а ШІ на неї спирається."
      },
      {
        "label": "Картувати",
        "title": "Отримайте карту процесів і уточніть її",
        "body": "TblFlow будує карту з ваших документів та інструментів: хто що робить, у якому інструменті, де дані вводять повторно. Ви виправляєте й доповнюєте її, вказуєте обсяги та ставки, а TblFlow оцінює вартість кожного кроку."
      },
      {
        "label": "Побудувати",
        "title": "TblFlow створює таблиці, які замінять ваші інструменти",
        "body": "На основі карти: аналіз, blueprint, таблиці, звʼязки, інтерфейс, автоматизації, агенти. Бізнес-правила вбудовано, інші інструменти лишаються підключеними, щоб потоки не переривалися, дані імпортуються, а старі застосунки можна вивести з експлуатації."
      },
      {
        "label": "Автоматизувати",
        "title": "Спершу автоматизуйте те, що підкоряється правилу",
        "body": "Якщо крок іде за простим правилом, вистачить автоматизації: передбачувано, швидко, без звернення до ШІ. Агенти потрібні далі — там, де треба читати, оцінювати чи писати."
      },
      {
        "label": "Довірити агентам",
        "title": "Решту довірте агентам, які знають вашу компанію",
        "body": "Агенти спираються на ваші таблиці та внутрішні регламенти, проіндексовані в DocIndex. Вони пропонують, ви затверджуєте: без вашої згоди нічого не запускається."
      },
      {
        "label": "Повернути час",
        "title": "Рутинні завдання — агентам. Стосунки — людям.",
        "body": "Вивільнений час іде туди, де ваша команда незамінна: стосунки з клієнтами, консультації, рішення. Перегляньте ролі разом із командою та проведіть зміни."
      }
    ],
    "docs": {
      "files": "Регламенти",
      "tools": "Підключені інструменти",
      "indexed": "Проіндексовано",
      "status": "DocIndex · 3 документи проіндексовано",
      "names": [
        "регламент-рахунків.pdf",
        "нагадування-клієнтам.md",
        "прийом-клієнтів.pdf"
      ]
    },
    "auto": {
      "when": "Коли",
      "trigger": "Пропозиція переходить у статус «Прийнято»",
      "then": "Тоді",
      "actions": [
        "Створити замовлення",
        "Підготувати рахунок"
      ]
    },
    "agent": {
      "prompt": "Нагадай про оплату рахунків, прострочених понад 30 днів, згідно з нашим регламентом",
      "sources": "Джерела",
      "items": [
        "Таблиця · Рахунки",
        "нагадування-клієнтам.md"
      ],
      "status": "Чернетка чекає затвердження"
    },
    "split": {
      "agents": "Довірено агентам",
      "team": "Лишається за командою",
      "agentItems": [
        "Введення замовлень",
        "Нагадування за рахунками",
        "Оновлення дашбордів"
      ],
      "teamItems": [
        "Стосунки з клієнтами",
        "Переговори",
        "Керування зростанням"
      ]
    },
    "keep": {
      "title": "Що лишається у вас",
      "items": [
        {
          "title": "Ваші дані",
          "body": "У справжньому PostgreSQL, з експортом і можливістю власного розміщення."
        },
        {
          "title": "Рішення",
          "body": "Усе, що створює ШІ, лишається неактивним, доки ви це не затвердите."
        },
        {
          "title": "Прозорість",
          "body": "Усе лишається читабельним: у SQL, у DocIndex, на карті."
        }
      ]
    }
  },
  zh: {
    "signature": "重复的任务交给智能体，人与人的关系留给人。",
    "steps": [
      {
        "label": "问题",
        "title": "数据早已存在，只是没有流动起来。",
        "body": "报价在一个工具里，订单在电子表格里，发票又在第三个工具里：同一条信息被反复录入，而录入的人本职工作并不是这个。"
      },
      {
        "label": "理解",
        "title": "先让 TblFlow 理解你的企业",
        "body": "以 PDF 或 Markdown 上传你的流程文档，并连接你已经在用的工具。DocIndex 会为这些文档建立索引：团队可以检索，AI 可以直接利用。"
      },
      {
        "label": "绘制地图",
        "title": "获得流程地图，再逐步完善",
        "body": "TblFlow 根据你的文档和工具生成流程地图：谁在做什么、用的是哪个工具、信息在哪里被重复录入。你来修正和补充，填写业务量和费率，TblFlow 估算每个环节的成本。"
      },
      {
        "label": "构建",
        "title": "TblFlow 生成数据表，取代你现有的工具",
        "body": "以地图为基础：分析、蓝图、数据表、关联、界面、自动化、智能体。业务规则内置其中，其他工具保持连接，流程不会中断；数据导入后，旧的应用即可下线。"
      },
      {
        "label": "自动化",
        "title": "先把遵循规则的工作自动化",
        "body": "如果某个环节遵循简单的规则，用自动化就够了：可预期、速度快，也不调用 AI。需要阅读、判断或撰写的地方，再交给智能体。"
      },
      {
        "label": "交给智能体",
        "title": "其余的，交给了解你企业的智能体",
        "body": "智能体以你的数据表和在 DocIndex 中建立索引的内部流程为依据。它们提出方案，由你审批：未经你同意，什么都不会启动。"
      },
      {
        "label": "把时间还给团队",
        "title": "重复的任务交给智能体。人与人的关系留给人。",
        "body": "省下的时间，投入到团队真正能创造价值的地方：客户关系、专业建议、决策。和团队一起重新定义角色，推动变革。"
      }
    ],
    "docs": {
      "files": "流程文档",
      "tools": "已连接的工具",
      "indexed": "已索引",
      "status": "DocIndex · 已索引 3 份文档",
      "names": [
        "开票流程.pdf",
        "客户催款.md",
        "客户接待.pdf"
      ]
    },
    "auto": {
      "when": "当",
      "trigger": "报价变为“已接受”时",
      "then": "则",
      "actions": [
        "创建订单",
        "准备发票"
      ]
    },
    "agent": {
      "prompt": "按照我们的流程，催收逾期超过 30 天的发票",
      "sources": "来源",
      "items": [
        "数据表 · 发票",
        "客户催款.md"
      ],
      "status": "草稿待审批"
    },
    "split": {
      "agents": "交给智能体",
      "team": "由团队负责",
      "agentItems": [
        "录入订单",
        "发票催收",
        "更新仪表盘"
      ],
      "teamItems": [
        "客户关系",
        "商务谈判",
        "引领增长"
      ]
    },
    "keep": {
      "title": "你始终掌握的",
      "items": [
        {
          "title": "你的数据",
          "body": "保存在真正的 PostgreSQL 中，可导出，也可自托管。"
        },
        {
          "title": "决定权",
          "body": "AI 生成的一切，在你审批之前都不会启用。"
        },
        {
          "title": "可读性",
          "body": "一切都清晰可读：在 SQL 里、在 DocIndex 中、在地图上。"
        }
      ]
    }
  },
};
