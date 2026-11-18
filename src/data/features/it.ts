import type { FeaturesCopy } from './types';

const it = {
  nav: 'Funzionalità',
  metaTitle: 'Funzionalità: tutto ciò che fa TblFlow',
  metaDescription:
    "Tabelle, interfacce, automazioni, lavagne, agenti IA, documentazione, permessi, audit GDPR e AI Act: il catalogo delle funzionalità di TblFlow.",
  eyebrow: 'Funzionalità',
  title: 'Tutto ciò che TblFlow fa per te.',
  subtitle:
    "Sette risorse che TblFlow genera a partire dai tuoi processi, e le funzioni che le circondano: permessi, IA sotto controllo, collegamenti ai tuoi strumenti.",
  availability: "La disponibilità di alcune funzioni dipende dal piano.",
  pricingLink: 'Vedi i prezzi',
  home: {
    title: 'Tutto ciò che TblFlow sa fare',
    body: "Tabelle, interfacce, automazioni, lavagne, agenti, documentazione, permessi, audit: il catalogo completo, raggruppato in quattro famiglie.",
    link: 'Vedi tutte le funzionalità',
  },
  groups: {
    build: {
      title: 'Ciò che TblFlow genera',
      intro: "Sette risorse, create a partire dalla mappa dei tuoi processi. Le rivedi prima di metterle in servizio.",
    },
    team: {
      title: 'Lavorare insieme, mantenendo il controllo',
      intro: "Ognuno vede e fa ciò che hai deciso, e ciò che accade resta tracciabile.",
    },
    ai: {
      title: "Un'IA che controlli",
      intro: "Il provider, il contesto, il consumo e gli audit: l'IA resta sotto il tuo controllo.",
    },
    connect: {
      title: 'Collegato ai tuoi strumenti, pronto per la produzione',
      intro: "I tuoi altri strumenti restano collegati, e testi prima di pubblicare.",
    },
  },
  items: {
    tables: {
      title: 'Tabelle con la loro API',
      body: "Tabelle su vero PostgreSQL, ciascuna accessibile tramite l'API REST.",
    },
    interfaces: {
      title: 'Interfacce pubblicabili online',
      body: "Interfacce costruite sulle tue tabelle, che puoi pubblicare online.",
    },
    automations: {
      title: 'Automazioni',
      body: "Sequenze di azioni che sostituiscono la ridigitazione. Vengono create inattive: le rivedi prima di attivarle.",
    },
    whiteboards: {
      title: 'Lavagne',
      body: "Una lavagna collaborativa all'interno di una base, per schematizzare e ragionare insieme, con l'aiuto dell'IA.",
    },
    browsers: {
      title: 'Automazioni del browser',
      body: "Per un sito senza API, un browser guidato dall'IA (computer use) ripete l'attività al posto tuo, dopo il tuo consenso.",
    },
    agents: {
      title: 'Agenti IA',
      body: "Agenti incaricati di una missione precisa, con gli strumenti e i permessi che assegni loro, nel rispetto delle tue regole e della tua approvazione.",
    },
    docs: {
      title: "Documentazione indicizzata dall'IA (DocIndex)",
      body: "I tuoi documenti vengono indicizzati per una ricerca basata sul significato oltre che sulle parole, che l'IA e i tuoi agenti possono consultare.",
    },
    permissions: {
      title: 'Permessi su misura',
      body: "Ruoli e diritti granulari che definisci tu, applicati a ogni richiesta, comprese quelle dell'IA.",
    },
    invitations: {
      title: 'Colleghi e persone esterne',
      body: "Invita i tuoi colleghi o persone esterne all'azienda, con solo gli accessi che scegli.",
    },
    orgchart: {
      title: "Un organigramma aziendale",
      body: "Importa l'organigramma della tua azienda perché TblFlow rifletta la tua organizzazione.",
    },
    tokens: {
      title: 'Token di accesso personali',
      body: "Ogni utente crea e gestisce i propri token per chiamare l'API.",
    },
    myNotifications: {
      title: 'Le tue notifiche, a modo tuo',
      body: "Ogni utente imposta le notifiche che riceve.",
    },
    logs: {
      title: 'Un registro delle attività',
      body: "Una traccia delle azioni eseguite nel tuo spazio, da consultare per capire cosa è successo.",
    },
    providers: {
      title: "Il provider di IA che preferisci",
      body: "TblFlow non è legato ad alcun provider di IA: collega quello della tua azienda o un account individuale.",
    },
    context: {
      title: "Un'IA che conosce il tuo contesto",
      body: "L'assistente conosce la struttura del tuo spazio (basi, campi, processi) e risponde a partire da essa.",
    },
    usage: {
      title: "Il tuo consumo di IA",
      body: "Segui ciò che l'IA consuma nel tuo spazio.",
    },
    aiAct: {
      title: 'Audit AI Act',
      body: "Una soluzione generata dall'IA viene sottoposta automaticamente ad audit per aiutarti a preparare i tuoi obblighi legati al regolamento europeo sull'IA. Non sostituisce una consulenza legale.",
    },
    gdpr: {
      title: 'Audit GDPR automatico',
      body: "Un audit GDPR automatico di ciò che costruisci, per individuare i punti da trattare.",
    },
    designMd: {
      title: 'Il tuo brand con design.md',
      body: "Integra il tuo file design.md: l'IA lo usa perché le interfacce generate seguano il tuo brand.",
    },
    skills: {
      title: 'Skills: generare e importare',
      body: "Genera o importa Skills per dare ai tuoi agenti competenze riutilizzabili.",
    },
    connectors: {
      title: 'Un generatore di connettori API',
      body: "Crea, con l'aiuto dell'IA, un connettore verso l'API di uno strumento che non ne ha uno già pronto.",
    },
    oauth: {
      title: 'Applicazioni OAuth',
      body: "Collega le tue applicazioni tramite OAuth, senza condividere alcuna password.",
    },
    mcp: {
      title: "MCP, ovunque l'IA agisca",
      body: "Collega server MCP: sono utilizzabili nella chat IA, nelle automazioni e negli agenti. TblFlow ha anche il proprio server MCP.",
    },
    chatNotifications: {
      title: 'Notifiche Slack, Teams, Google Chat',
      body: "Ricevi le notifiche di TblFlow nello strumento di messaggistica del tuo team.",
    },
    email: {
      title: 'E-mail delle automazioni',
      body: "Configura l'invio di e-mail dalle tue automazioni.",
    },
    preprod: {
      title: 'Uno spazio di pre-produzione',
      body: "Testa le tue soluzioni in uno spazio separato prima di metterle in servizio.",
    },
  },
} satisfies FeaturesCopy;

export default it;
