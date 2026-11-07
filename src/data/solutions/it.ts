import type { SolutionsLocale } from './types';

/**
 * Copy (it), translated from fr.ts of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const it = {
  ui: {
    forNav: 'Per chi',
    useCasesNav: 'Casi d’uso',
    forIndex: {
      metaTitle: 'Per chi è TblFlow? Direzione, finanza, amministrazione vendite, industria, commercio, studi',
      metaDescription:
        'TblFlow è pensato per le PMI che ridigitano le stesse informazioni da uno strumento all’altro: direzione, finanza, amministrazione vendite, industria, commercio e studi professionali.',
      title: 'Per chi',
      subtitle:
        'Per le PMI che vanno avanti con Excel e una decina di strumenti. Ogni funzione ridigita qualcosa di diverso: ecco cosa cambia TblFlow per la vostra.',
    },
    useCasesIndex: {
      metaTitle: 'Casi d’uso TblFlow: dal preventivo all’incasso, acquisti, chiusura, scorte, qualità',
      metaDescription:
        'Sei flussi completi in cui la stessa informazione viene ridigitata da uno strumento all’altro, e come TblFlow li mappa, li automatizza e li affida ad agenti sotto la vostra approvazione.',
      title: 'Casi d’uso',
      subtitle:
        'Sei flussi in cui la stessa informazione passa di mano in mano e di strumento in strumento. Per ciascuno: quanto costa oggi e cosa ne fa TblFlow.',
    },
    today: 'Oggi',
    withTblflow: 'Con TblFlow',
    journeyTitle: 'Come TblFlow lo prende in carico',
    limitsTitle: 'Cosa TblFlow non fa',
    promptsTitle: 'Cosa chiedereste a TblFlow',
    promptsNote: 'Richieste scritte con parole vostre. L’IA propone, nulla si attiva senza la vostra approvazione.',
    faqTitle: 'Domande frequenti',
    useCasesFor: 'Casi d’uso',
    audiencesFor: 'Per chi',
    planNote:
      'La mappa di un processo è gratuita, costi stimati inclusi. La mappa completa, Sostituisci e il report mensile sono inclusi a partire dal piano Essenziale.',
    cta: 'Inizia',
    secondaryCta: 'Vedi la Mappa dei processi',
    example: 'Esempio',
    more: 'Scopri di più',
  },

  useCases: {
    'quote-to-cash': {
      nav: 'Dal preventivo all’incasso',
      card: 'Preventivo, ordine, fattura e sollecito senza doppie digitazioni tra gli strumenti.',
      metaTitle: 'Dal preventivo all’incasso senza doppie digitazioni | TblFlow',
      metaDescription:
        'Il preventivo in Word, l’ordine in Excel, la fattura altrove: TblFlow collega preventivo, ordine, fattura e sollecito in un’unica base, con automazioni e agenti sotto approvazione.',
      eyebrow: 'Caso d’uso · Vendite e fatturazione',
      title: 'Dal preventivo all’incasso, senza digitare lo stesso importo quattro volte',
      subtitle:
        'Il preventivo accettato diventa l’ordine, l’ordine prepara la fattura, la fattura scaduta fa partire il sollecito. Una sola digitazione, all’inizio.',
      flow: {
        steps: [
          { title: 'Preventivo', tool: 'Word', after: 'human' },
          { title: 'Ordine', tool: 'Excel', after: 'automation' },
          { title: 'Fattura', tool: 'Google Sheets', after: 'automation' },
          { title: 'Sollecito', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · 4.820 €',
        calc: '40 preventivi al mese × 3 ridigitazioni × 10 minuti ≈ 20 ore al mese.',
      },
      problem: {
        title: 'Lo stesso cliente, lo stesso importo, quattro volte',
        body: 'Il preventivo parte da Word, l’ordine viene ricopiato in un foglio di calcolo, la fattura riprende le righe a mano e il sollecito si fa a memoria. Ogni copia è un’occasione di errore, e nessuno vede a colpo d’occhio cosa resta da incassare.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate la vostra procedura di fatturazione',
          body: 'La vostra procedura di fatturazione e le regole di sollecito, in PDF o Markdown, vengono indicizzate in DocIndex. Gli strumenti che mantenete restano collegati.',
        },
        {
          label: 'Mappare',
          title: 'Vedete dove l’importo viene ridigitato',
          body: 'Partite dal processo tipo «Fatturazione clienti» della biblioteca: richiesta, controllo dell’ordine, preparazione, approvazione degli importi elevati, invio, monitoraggio delle scadenze, sollecito, incasso. Inserite i vostri volumi: TblFlow stima il costo di ogni passaggio.',
        },
        {
          label: 'Costruire',
          title: 'Una base per preventivi, ordini e fatture',
          body: 'TblFlow genera le tabelle e i collegamenti tra loro: il cliente, il preventivo, l’ordine e la fattura si digitano una volta sola. I dati esistenti vengono importati dai vostri file CSV o Excel.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'La regola a un’automazione, il sollecito a un agente',
          body: 'Quando un preventivo passa a «Accettato», un’automazione crea l’ordine e prepara la fattura. Un agente sollecita le fatture scadute secondo la vostra procedura: prepara i messaggi, voi li approvate.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un monitoraggio dei preventivi', body: 'Per stato, dalla bozza all’accettazione, con importo e cliente collegati.' },
          { title: 'Uno scadenziario clienti', body: 'Le fatture future, scadute e incassate, con ciò che resta da incassare questo mese.' },
          { title: 'Solleciti preparati', body: 'Un agente che segue la vostra procedura e vi sottopone ogni sollecito prima dell’invio.' },
        ],
      },
      limits:
        'TblFlow non tiene la vostra contabilità e non emette fatture elettroniche conformi. La fattura parte dal vostro strumento di fatturazione; TblFlow mantiene il legame tra preventivo, ordine, fattura e sollecito, e ciò che resta da incassare.',
      prompts: [
        'Quando un preventivo passa a «Accettato», crea l’ordine con le stesse righe e avvisa l’amministrazione vendite.',
        'Elenca le fatture scadute da più di 30 giorni e prepara un sollecito per ciascuna, secondo la nostra procedura.',
        'Mostrami cosa resta da incassare questo mese, per cliente.',
      ],
      faq: [
        {
          q: 'Devo abbandonare il mio software di fatturazione?',
          a: 'No. TblFlow collega i passaggi e mantiene il monitoraggio; la fattura può continuare a partire dal vostro strumento attuale. Se quello strumento pubblica un’API, TblFlow può collegarsi.',
        },
        {
          q: 'I solleciti partono da soli?',
          a: 'No. L’agente prepara ogni sollecito a partire dalla vostra procedura e dalle vostre tabelle, e voi lo approvate prima dell’invio. Nulla si attiva senza il vostro consenso.',
        },
        {
          q: 'Posso riprendere i preventivi e le fatture esistenti?',
          a: 'Sì. Importate i vostri file CSV o Excel in una tabella esistente o in una nuova tabella.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'Dal fabbisogno al pagamento del fornitore',
      card: 'Richieste d’acquisto, ordini, ricevimenti e fatture fornitori collegati.',
      metaTitle: 'Acquisti e fatture fornitori senza doppie digitazioni | TblFlow',
      metaDescription:
        'Richiesta d’acquisto, ordine, ricevimento, fattura fornitore: TblFlow collega ogni passaggio in un’unica base e prepara la riconciliazione, sotto la vostra approvazione.',
      eyebrow: 'Caso d’uso · Acquisti e contabilità fornitori',
      title: 'Dal fabbisogno al pagamento del fornitore, ogni fattura riconciliata con il suo ordine',
      subtitle:
        'La richiesta diventa l’ordine, il ricevimento conferma ciò che è arrivato, la fattura viene riconciliata con l’ordine prima di andare in pagamento.',
      flow: {
        steps: [
          { title: 'Richiesta d’acquisto', tool: 'E-mail', after: 'human' },
          { title: 'Ordine fornitore', tool: 'Excel', after: 'automation' },
          { title: 'Ricevimento', tool: 'Bolla cartacea', after: 'human' },
          { title: 'Fattura fornitore', tool: 'Software contabile', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · 2.340 €',
        calc: '60 fatture fornitori al mese × 3 ridigitazioni × 6 minuti ≈ 18 ore al mese.',
      },
      problem: {
        title: 'Arriva la fattura, nessuno ritrova l’ordine',
        body: 'La richiesta d’acquisto è in un’e-mail, l’ordine in un foglio di calcolo, la bolla di ricevimento su carta. Quando arriva la fattura bisogna cercare tutto per capire se corrisponde a ciò che è stato ordinato e ricevuto.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate le vostre regole d’acquisto',
          body: 'Soglie di approvazione, fornitori censiti, circuito di firma: le vostre regole vengono indicizzate in DocIndex e fanno da contesto agli agenti.',
        },
        {
          label: 'Mappare',
          title: 'Vedete dove l’ordine viene ricopiato',
          body: 'Partite dal processo tipo «Acquisti e approvvigionamento»: fabbisogno, approvazione, preventivo, confronto delle offerte, ordine, ricevimento, riconciliazione con la fattura, pagamento. TblFlow stima il costo di ogni passaggio a partire dai vostri volumi.',
        },
        {
          label: 'Costruire',
          title: 'Richieste, ordini, ricevimenti e fatture collegati',
          body: 'Il modello «Controllo finanziario» fornisce le tabelle delle fatture fornitori e delle note spese. Una richiesta si inserisce con un modulo, l’ordine e la fattura le restano collegati.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'La riconciliazione proposta, la decisione che resta a voi',
          body: 'Un’automazione crea l’ordine non appena la richiesta è approvata. Caricate la fattura fornitore nella Chat IA: propone le righe, un agente le riconcilia con l’ordine e con il ricevimento, e voi approvate prima del pagamento.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un modulo di richiesta d’acquisto', body: 'I campi giusti, l’approvatore giusto in base all’importo, uno stato visibile a tutti.' },
          { title: 'Un registro delle fatture fornitori', body: 'Ogni fattura collegata al suo ordine e al suo ricevimento, con la scadenza.' },
          { title: 'Un controllo prima del pagamento', body: 'Le differenze tra ordinato, ricevuto e fatturato segnalate prima che la fattura vada in pagamento.' },
        ],
      },
      limits:
        'TblFlow non paga i vostri fornitori: il bonifico parte dalla vostra banca. Non legge automaticamente le fatture scansionate; la Chat IA propone le righe a partire dalla fattura caricata, e voi le approvate. Non fa la riconciliazione bancaria.',
      prompts: [
        'Crea un modulo di richiesta d’acquisto con un approvatore diverso oltre 1.500 €.',
        'Riconcilia questa fattura fornitore con l’ordine BC-1187 e con il suo ricevimento, e segnala le differenze.',
        'Elenca le fatture fornitori da pagare questa settimana, evidenziando quelle con una differenza.',
      ],
      faq: [
        {
          q: 'TblFlow legge le fatture PDF?',
          a: 'La Chat IA legge la fattura che caricate e propone i record corrispondenti; nulla viene creato prima della vostra accettazione. Non si tratta di una lettura automatica massiva delle fatture scansionate.',
        },
        {
          q: 'Il mio software contabile resta al suo posto?',
          a: 'Sì. TblFlow si occupa del circuito che precede la contabilità: richiesta, ordine, ricevimento, controllo. La registrazione contabile resta nel vostro software.',
        },
        {
          q: 'Si può imporre un’approvazione oltre un certo importo?',
          a: 'Sì: lo stato, l’importo e l’approvatore sono campi; un’automazione avvisa l’approvatore giusto in base alla soglia che fissate.',
        },
      ],
    },

    'financial-close': {
      nav: 'Chiusura e controllo finanziario',
      card: 'Margini, EBITDA e budget contro consuntivo, senza ricopiare ogni mese gli export.',
      metaTitle: 'Chiusura mensile, margini ed EBITDA senza fogli di calcolo ricopiati | TblFlow',
      metaDescription:
        'Importate i vostri export contabili, lasciate che le formule ricalcolino margini, EBITDA e budget contro consuntivo, e ricevete ogni mese una sintesi da approvare.',
      eyebrow: 'Caso d’uso · Finanza e controllo di gestione',
      title: 'La chiusura del mese senza ricopiare gli stessi export negli stessi fogli di calcolo',
      subtitle:
        'I vostri export contabili arrivano in una base; margini, EBITDA e scostamento dal budget si ricalcolano; la sintesi del mese viene preparata per la direzione.',
      flow: {
        steps: [
          { title: 'Export del bilancio di verifica', tool: 'Software contabile', after: 'human' },
          { title: 'Formattazione', tool: 'Excel', after: 'automation' },
          { title: 'Margini ed EBITDA', tool: 'Excel', after: 'automation' },
          { title: 'Sintesi del mese', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: 'Bilancio di verifica di ottobre · 186 righe',
        calc: '1 chiusura al mese × 4 file ricopiati × 1 h 30 ≈ 6 ore al mese.',
      },
      problem: {
        title: 'Ogni mese, gli stessi copia-incolla',
        body: 'L’export del bilancio di verifica viene ricopiato in un file di rielaborazione, poi nella tabella dei margini, poi nella presentazione per la direzione. Una formula rotta o una riga dimenticata, e il dato presentato non è più quello giusto.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate la vostra procedura di chiusura',
          body: 'Il calendario di chiusura e le regole di rielaborazione vengono indicizzati in DocIndex: i vostri team li consultano, gli agenti li usano.',
        },
        {
          label: 'Mappare',
          title: 'Vedete dove i numeri vengono ricopiati',
          body: 'Partite dal processo tipo «Chiusura mensile»: estratti conto bancari, riconciliazione bancaria, registrazione delle fatture, sollecito dei giustificativi, rettifiche, revisione, bilancio di verifica, presentazione alla direzione.',
        },
        {
          label: 'Costruire',
          title: 'Tabelle che calcolano al posto vostro',
          body: 'Importate ogni mese il bilancio di verifica o il libro mastro in CSV. Le formule e i rollup calcolano il margine per incarico, l’EBITDA e lo scostamento dal budget; i grafici e un’interfaccia di controllo li mostrano.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'La sintesi preparata, il commento approvato',
          body: 'Un’automazione ricalcola e avvisa non appena l’importazione è completata. Un agente redige la sintesi del mese a partire dalle tabelle: variazioni, voci da tenere sotto controllo. La rileggete prima che parta.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Una tabella dei margini', body: 'Per incarico, progetto o cliente, a partire dal modello «Controllo finanziario».' },
          { title: 'Un monitoraggio di EBITDA e budget', body: 'Il consuntivo del mese a confronto con il budget, con gli scostamenti che superano la vostra soglia.' },
          { title: 'Una sintesi mensile', body: 'Preparata da un agente a partire dalle vostre tabelle, riletta da voi prima della diffusione.' },
        ],
      },
      limits:
        'TblFlow non è un software contabile: non tiene le registrazioni e non si collega alla vostra banca. L’EBITDA e i margini sono calcolati dalle vostre formule, a partire dagli export che importate.',
      prompts: [
        'Importa il bilancio di verifica di ottobre e ricalcola l’EBITDA e lo scostamento dal budget.',
        'Mostra il margine per cliente negli ultimi tre mesi, dal più alto al più basso.',
        'Redigi la sintesi del mese per la direzione: variazioni, voci sopra il budget, punti da decidere.',
      ],
      faq: [
        {
          q: 'TblFlow calcola l’EBITDA da solo?',
          a: 'Non esiste un calcolo dell’EBITDA già pronto: lo definite una volta con formule e rollup, sui vostri conti, e si ricalcola a ogni importazione.',
        },
        {
          q: 'Bisogna collegare il software contabile?',
          a: 'No. Basta un export CSV del bilancio di verifica o del libro mastro. Se il vostro software pubblica un’API, TblFlow può generare un connettore per automatizzare l’importazione.',
        },
        {
          q: 'Chi vede gli importi?',
          a: 'I permessi si impostano per ruolo e per campo: scegliete chi legge gli importi, chi li modifica e chi non li vede.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: 'Dalla scorta alla spedizione',
      card: 'Inventari, soglie, riordino e preparazione in un’unica base.',
      metaTitle: 'Scorte, inventari e riordino senza doppie digitazioni | TblFlow',
      metaDescription:
        'Inventario a rotazione, avvisi di soglia, ordini di riordino, preparazione e spedizione: TblFlow collega articoli, movimenti e ordini, sotto la vostra approvazione.',
      eyebrow: 'Caso d’uso · Scorte e logistica',
      title: 'Dalla scorta alla spedizione, senza ricontare in tre file',
      subtitle:
        'Il conteggio aggiorna la scorta, la soglia fa partire il riordino, l’ordine cliente va in preparazione. Le quantità non si digitano più.',
      flow: {
        steps: [
          { title: 'Conteggio', tool: 'Foglio cartaceo', after: 'human' },
          { title: 'Differenze di scorta', tool: 'Excel', after: 'automation' },
          { title: 'Riordino', tool: 'E-mail al fornitore', after: 'agent' },
          { title: 'Preparazione', tool: 'Sito del corriere', after: 'human' },
        ],
        rekeyed: 'Rif. A-204 · 36 unità',
        calc: '150 riferimenti contati al mese × 2 ridigitazioni × 2 minuti ≈ 10 ore al mese.',
      },
      problem: {
        title: 'La scorta è giusta un solo giorno al mese',
        body: 'Il conteggio si fa su carta, le differenze si ricopiano in un foglio di calcolo, l’ordine di riordino parte per e-mail. Tra due inventari nessuno sa davvero cosa resta, e la rottura di scorta si scopre al momento di preparare.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate le vostre regole di scorta',
          body: 'Soglie, fornitori, tempi, regole di preparazione: indicizzati in DocIndex, fanno da contesto agli agenti.',
        },
        {
          label: 'Mappare',
          title: 'Vedete dove le quantità vengono ricopiate',
          body: 'Partite dai processi tipo «Inventario a rotazione», «Riordino e ordine fornitore» e «Preparazione e spedizione». TblFlow stima il costo di ogni passaggio a partire dai vostri volumi.',
        },
        {
          label: 'Costruire',
          title: 'Articoli, movimenti e inventari collegati',
          body: 'Il modello «Gestione delle scorte» fornisce articoli, movimenti, ubicazioni, fornitori, ordini di riordino e inventari fisici, con il valore della scorta e gli avvisi di soglia.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'La soglia avvisa, l’agente prepara l’ordine',
          body: 'Un’automazione calcola le differenze di inventario e segnala gli articoli sotto soglia. Un agente prepara l’ordine di riordino presso il fornitore giusto; voi lo approvate prima dell’invio.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Una scorta aggiornata', body: 'Ogni entrata e ogni uscita registrata come movimento, con il valore della scorta calcolato.' },
          { title: 'Inventari a rotazione', body: 'I riferimenti da contare, l’inserimento dei conteggi e le differenze da ricontare.' },
          { title: 'Un riordino preparato', body: 'Gli articoli sotto soglia e una bozza di ordine fornitore da approvare.' },
        ],
      },
      limits:
        'TblFlow non è un software di gestione del magazzino: non legge i codici a barre, non gestisce la preparazione con terminali radio e non segue la scorta in tempo reale. Non produce etichette per il corriere.',
      prompts: [
        'Elenca gli articoli sotto la soglia di riordino e prepara un ordine per fornitore.',
        'Crea l’inventario a rotazione della settimana: i 30 riferimenti più venduti.',
        'Mostra le differenze dell’ultimo inventario superiori al 5 %, con il loro valore.',
      ],
      faq: [
        {
          q: 'Si possono scansionare i codici a barre?',
          a: 'No. Il codice EAN è un campo dell’articolo, ma TblFlow non legge codici a barre. I conteggi si inseriscono da tastiera o tramite modulo.',
        },
        {
          q: 'TblFlow sostituisce il mio ERP?',
          a: 'No. Si occupa di ciò che l’ERP o i fogli di calcolo coprono male: inventari a rotazione, soglie, riordino, monitoraggio delle differenze. Se il vostro ERP pubblica un’API, TblFlow può collegarsi.',
        },
        {
          q: 'Gli ordini di riordino partono da soli?',
          a: 'No. L’agente prepara l’ordine; voi lo approvate prima che parta verso il fornitore.',
        },
      ],
    },

    quality: {
      nav: 'Qualità e non conformità',
      card: 'Controlli, non conformità e azioni correttive seguiti dall’inizio alla fine.',
      metaTitle: 'Non conformità e azioni correttive senza schede cartacee | TblFlow',
      metaDescription:
        'Controllo, registrazione, decisione, azione correttiva: TblFlow collega ogni non conformità al suo lotto, al costo di rilavorazione e alla sua azione, e prepara i solleciti sotto la vostra approvazione.',
      eyebrow: 'Caso d’uso · Qualità e produzione',
      title: 'Ogni non conformità seguita fino alla sua azione correttiva',
      subtitle:
        'Il controllo registra lo scostamento, il lotto viene bloccato, la decisione è tracciata, l’azione correttiva viene sollecitata fino alla chiusura. Niente più schede perse tra il reparto e l’ufficio.',
      flow: {
        steps: [
          { title: 'Controllo', tool: 'Scheda cartacea', after: 'human' },
          { title: 'Registrazione', tool: 'Excel', after: 'automation' },
          { title: 'Decisione', tool: 'E-mail', after: 'human' },
          { title: 'Azione correttiva', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Lotto 2611-B · 12 pezzi',
        calc: '30 non conformità al mese × 3 ridigitazioni × 8 minuti ≈ 12 ore al mese.',
      },
      problem: {
        title: 'La scheda del reparto non arriva in ufficio',
        body: 'Il controllore compila una scheda, qualcuno la ricopia in un foglio di calcolo, la decisione si prende per e-mail e l’azione correttiva vive in un altro file. Il costo della rilavorazione e la causa si perdono per strada.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate le vostre procedure qualità',
          body: 'Piani di controllo, criteri di accettazione, circuito decisionale: indicizzati in DocIndex, guidano gli agenti.',
        },
        {
          label: 'Mappare',
          title: 'Quantificate quanto costano le rilavorazioni',
          body: 'Partite dal processo tipo «Controllo qualità e non conformità»: campioni, misure, risultati, lotto accettato o meno, blocco, cause, decisione, azione correttiva. Il tasso di errore e il costo di rilavorazione fanno parte della stima.',
        },
        {
          label: 'Costruire',
          title: 'Un registro collegato ai lotti',
          body: 'Ogni non conformità è collegata al suo lotto, al suo fornitore o alla sua postazione, con la causa e la decisione: rilavorazione, scarto o deroga.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'La decisione resta umana, il monitoraggio non si perde più',
          body: 'Il modulo di controllo crea la registrazione e avvisa il responsabile. La decisione resta di una persona. Un agente sollecita le azioni correttive in ritardo e prepara la sintesi del mese.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un modulo di controllo', body: 'Compilato in reparto, crea la non conformità senza ricopiature.' },
          { title: 'Un registro delle non conformità', body: 'Per lotto, causa, decisione e costo di rilavorazione.' },
          { title: 'Un monitoraggio delle azioni correttive', body: 'Responsabile, scadenza, sollecito e chiusura.' },
        ],
      },
      limits:
        'TblFlow non è un sistema di gestione documentale certificato né un software di controllo del reparto produttivo: non governa le macchine e non sostituisce il vostro sistema qualità certificato. Collega i controlli, le decisioni e le azioni.',
      prompts: [
        'Crea un modulo di controllo che registri il lotto, la misura e la foto del pezzo.',
        'Elenca le azioni correttive in ritardo e prepara un sollecito per ogni responsabile.',
        'Mostra il costo delle rilavorazioni per fornitore nel trimestre.',
      ],
      faq: [
        {
          q: 'La decisione su un lotto può essere automatica?',
          a: 'Potete automatizzare il blocco di un lotto in base a una regola, ma la decisione di rilavorazione, scarto o deroga resta di una persona.',
        },
        {
          q: 'Si possono allegare foto dal reparto?',
          a: 'Sì: il modulo accetta allegati, e il modulo pubblico si apre su uno smartphone.',
        },
        {
          q: 'TblFlow sostituisce il nostro sistema qualità?',
          a: 'No. Segue le non conformità e le azioni; il vostro sistema documentale certificato resta al suo posto.',
        },
      ],
    },

    procedures: {
      nav: 'Le vostre procedure, finalmente aggiornate',
      card: 'Procedure indicizzate, riviste in tempo, e risposte tratte dai vostri documenti.',
      metaTitle: 'Procedure interne aggiornate e consultabili | TblFlow',
      metaDescription:
        'Caricate le vostre procedure, TblFlow le indicizza, vi avvisa quando una revisione è scaduta, e gli agenti rispondono a partire dai vostri documenti.',
      eyebrow: 'Caso d’uso · Documentazione interna',
      title: 'Procedure che si ritrovano, che si rileggono e di cui l’IA si serve',
      subtitle:
        'Le vostre procedure sono indicizzate in DocIndex, collegate ai processi della mappa, riviste in tempo grazie agli avvisi, e fanno da contesto agli agenti.',
      flow: {
        steps: [
          { title: 'Redazione', tool: 'Word', after: 'human' },
          { title: 'Diffusione', tool: 'Cartella condivisa', after: 'automation' },
          { title: 'Revisione', tool: 'Promemoria del calendario', after: 'automation' },
          { title: 'Domanda di un collega', tool: 'E-mail', after: 'agent' },
        ],
        rekeyed: 'Procedura solleciti v3',
        calc: '20 domande a settimana × 5 minuti ≈ 7 ore al mese.',
      },
      problem: {
        title: 'La versione giusta è da qualche parte',
        body: 'Le procedure dormono in una cartella condivisa, in più versioni. Nessuno sa quale sia quella aggiornata, la revisione viene dimenticata e le stesse domande tornano per e-mail.',
      },
      journey: [
        {
          label: 'Capire',
          title: 'Caricate i documenti così come sono',
          body: 'PDF, Word, Markdown: DocIndex li indicizza con ricerca semantica e a testo completo. I vostri team cercano con parole proprie.',
        },
        {
          label: 'Mappare',
          title: 'Collegate ogni procedura al suo processo',
          body: 'Sulla mappa, ogni processo ha la sua scheda procedura, il suo responsabile e la prossima data di revisione.',
        },
        {
          label: 'Costruire',
          title: 'Una base di conoscenza viva',
          body: 'Le procedure, le loro versioni e i loro responsabili riuniti, consultabili da tutto il team in base ai permessi.',
        },
        {
          label: 'Automatizzare, poi affidare',
          title: 'Le revisioni ricordate, le domande risolte',
          body: 'Ogni lunedì, un’e-mail elenca le procedure con la revisione scaduta o in scadenza. Gli agenti si basano sulle vostre procedure indicizzate per rispondere e per agire secondo le vostre regole.',
        },
      ],
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Una base di procedure', body: 'Indicizzata, ricercabile, collegata ai processi della mappa.' },
          { title: 'Revisioni a data fissa', body: 'Un responsabile e una data di revisione per procedura, con un avviso settimanale.' },
          { title: 'Agenti che seguono le vostre regole', body: 'Leggono le vostre procedure prima di proporre un’azione.' },
        ],
      },
      limits:
        'TblFlow non è una gestione elettronica dei documenti certificata: nessuna firma elettronica né circuito di approvazione documentale regolamentato. Indicizza le vostre procedure e le collega ai vostri processi.',
      prompts: [
        'Trova la procedura di sollecito clienti più recente e riassumila in cinque passaggi.',
        'Elenca le procedure senza responsabile o con la revisione scaduta.',
        'Rispondi a questa domanda di un collega a partire dalle nostre procedure, indicando la fonte.',
      ],
      faq: [
        {
          q: 'Quali formati vengono indicizzati?',
          a: 'I documenti PDF, Word, PowerPoint, Markdown e di testo. Il testo di PDF, Word e PowerPoint viene estratto e indicizzato.',
        },
        {
          q: 'Chi vede quali procedure?',
          a: 'Si applicano i permessi del vostro spazio: ciascuno vede solo ciò che il suo ruolo gli permette di leggere.',
        },
        {
          q: 'L’IA inventa le risposte?',
          a: 'Gli agenti cercano nelle vostre procedure indicizzate e vi mostrano la fonte. Verificate sempre prima di agire su una risposta importante.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Direzione',
      card: 'Vedere quanto costano le doppie digitazioni e decidere cosa affidare.',
      metaTitle: 'TblFlow per la direzione delle PMI: vedete quanto costano le vostre doppie digitazioni',
      metaDescription:
        'Una mappa dei vostri processi con i costi stimati, l’elenco dei processi in cui perdete di più, una vista direzione stampabile e un report mensile.',
      eyebrow: 'Per chi · Direzione',
      title: 'Vedete quanto vi costano le doppie digitazioni, poi decidete cosa affidare',
      subtitle:
        'Sapete che i vostri team passano tempo a ricopiare. TblFlow vi mostra dove, quanto, e cosa è possibile automatizzare o affidare ad agenti.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'Ore invisibili', body: 'La stessa informazione ridigitata da uno strumento all’altro non compare in nessuna dashboard.' },
          { title: 'Strumenti duplicati', body: 'Una decina di abbonamenti di cui nessuno sa quali siano ancora utili.' },
          { title: 'Decisioni al buio', body: 'I numeri arrivano tardi, ricopiati, e ognuno ha la sua versione.' },
        ],
      },
      build: {
        title: 'Cosa ottenete',
        items: [
          { title: 'La mappa dei vostri processi', body: 'Chi fa cosa, con quale strumento, dove l’informazione viene ridigitata, e i costi stimati.' },
          { title: '«Dove state perdendo denaro?»', body: 'I vostri processi ordinati per potenziale di guadagno, per scegliere da dove cominciare.' },
          { title: 'Una vista direzione e un report mensile', body: 'Costo, potenziale di guadagno, revisioni in ritardo: una pagina stampabile e un’e-mail il 1° del mese.' },
        ],
      },
      faq: [
        {
          q: 'I costi sono misurati?',
          a: 'No: sono stime basate sui volumi e sulle tariffe che inserite. Potete poi inserire misure reali per confrontare lo stimato con il reale.',
        },
        {
          q: 'Bisogna migrare tutto in una volta?',
          a: 'No. Cominciate da un processo. Gli strumenti che mantenete restano collegati, e ciò che TblFlow genera resta inattivo finché non lo avete approvato.',
        },
        {
          q: 'Cosa succede al mio team?',
          a: 'I compiti ripetitivi vanno alle automazioni e agli agenti; i vostri team mantengono la relazione con il cliente, la consulenza e la decisione.',
        },
      ],
    },

    finance: {
      nav: 'Finanza e contabilità',
      card: 'Acquisti, fatture, chiusura e controllo senza ricopiare gli export.',
      metaTitle: 'TblFlow per la finanza: fatture, chiusura e controllo senza doppie digitazioni',
      metaDescription:
        'Per il CFO, il controllo di gestione e la contabilità: fatture fornitori riconciliate, scadenziario clienti, margini ed EBITDA ricalcolati, sintesi mensile preparata.',
      eyebrow: 'Per chi · Finanza e contabilità',
      title: 'Il controllo finanziario che manca tra la vostra contabilità e i vostri fogli di calcolo',
      subtitle:
        'Il vostro software contabile tiene le registrazioni. TblFlow riprende tutto ciò che accade intorno: gli acquisti, le fatture, i solleciti, le rielaborazioni e le tabelle per la direzione.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'Fatture senza ordine', body: 'Bisogna ritrovare la richiesta, l’ordine e il ricevimento prima di pagare.' },
          { title: 'Export ricopiati', body: 'Ogni mese il bilancio di verifica passa di file in file fino alla presentazione.' },
          { title: 'Solleciti a memoria', body: 'Nessuno vede a colpo d’occhio cosa resta da incassare.' },
        ],
      },
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un circuito delle fatture fornitori', body: 'Richiesta, ordine, ricevimento e fattura collegati, controllati prima del pagamento.' },
          { title: 'Uno scadenziario e dei solleciti', body: 'Le fatture clienti seguite fino all’incasso, i solleciti preparati da un agente.' },
          { title: 'Margini ed EBITDA aggiornati', body: 'Ricalcolati a ogni importazione, con una sintesi mensile da rileggere.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow è un software contabile?',
          a: 'No. Non tiene le registrazioni, non emette fatture elettroniche conformi e non fa la riconciliazione bancaria. Collega i passaggi intorno alla vostra contabilità.',
        },
        {
          q: 'Come arrivano i dati contabili?',
          a: 'Tramite un export CSV del bilancio di verifica o del libro mastro, importato in una tabella. Se il vostro software pubblica un’API, TblFlow può generare un connettore.',
        },
        {
          q: 'Gli importi sono protetti?',
          a: 'I permessi si impostano per ruolo e per campo: decidete voi chi legge gli importi, chi li modifica e chi non li vede.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Amministrazione vendite',
      card: 'Dal preventivo alla fattura senza ricopiare gli ordini.',
      metaTitle: 'TblFlow per l’amministrazione vendite: dal preventivo alla fattura senza doppie digitazioni',
      metaDescription:
        'Preventivi, ordini, fatture e solleciti collegati in un’unica base: l’amministrazione vendite digita una volta, le automazioni fanno il resto, gli agenti preparano i solleciti.',
      eyebrow: 'Per chi · Amministrazione vendite',
      title: 'Digitate l’ordine una volta, non in ogni strumento',
      subtitle:
        'Il preventivo accettato diventa l’ordine, l’ordine prepara la fattura, la fattura scaduta viene sollecitata. L’amministrazione vendite mantiene la relazione con il cliente, non la digitazione.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'L’ordine ridigitato', body: 'Il preventivo accettato viene ricopiato nel foglio degli ordini, poi nella fattura.' },
          { title: 'Errori di prezzo', body: 'Ogni copia è un’occasione per sbagliare riga o sconto.' },
          { title: 'Il cliente che aspetta', body: 'Per sapere a che punto è il suo ordine bisogna aprire tre file.' },
        ],
      },
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Una pipeline preventivo-ordine', body: 'Lo stato del preventivo fa partire l’ordine, con le stesse righe.' },
          { title: 'Un monitoraggio degli ordini', body: 'A che punto è ogni ordine, visibile a tutto il team in base ai permessi.' },
          { title: 'Solleciti pronti', body: 'Un agente prepara i solleciti secondo la vostra procedura; voi approvate.' },
        ],
      },
      faq: [
        {
          q: 'Possiamo mantenere il nostro CRM?',
          a: 'Sì. Gli strumenti che mantenete restano collegati. TblFlow include anche un modello «Vendite e relazione con il cliente» se volete riunire tutto.',
        },
        {
          q: 'I clienti possono ordinare da soli?',
          a: 'Un modulo pubblico può alimentare i vostri ordini. Non esistono account cliente con permessi propri.',
        },
        {
          q: 'Quanto tempo serve per iniziare?',
          a: 'Un processo si mappa gratuitamente. Le tabelle si generano a partire dalla mappa, e i dati esistenti si importano in CSV o Excel.',
        },
      ],
    },

    manufacturing: {
      nav: 'Industria e produzione',
      card: 'Qualità, approvvigionamento e scorte gestiti attorno all’ERP.',
      metaTitle: 'TblFlow per l’industria: qualità, approvvigionamento e scorte attorno all’ERP',
      metaDescription:
        'Non conformità, approvvigionamento materiali, scorte e spedizione collegati attorno al vostro ERP, con il costo delle rilavorazioni stimato e agenti sotto approvazione.',
      eyebrow: 'Per chi · Industria e produzione',
      title: 'Governate il reparto attorno al vostro ERP, senza sostituirlo',
      subtitle:
        'Il vostro ERP gestisce la produzione. TblFlow riprende ciò che circola ancora su carta e nei fogli di calcolo: i controlli, le non conformità, le soglie, i riordini e i solleciti.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'Schede cartacee', body: 'Controlli e scostamenti inseriti due volte, tra il reparto e l’ufficio.' },
          { title: 'Rilavorazioni non quantificate', body: 'Il costo delle non conformità non emerge da nessuna parte.' },
          { title: 'Rotture di materiale', body: 'La soglia viene superata prima che qualcuno se ne accorga.' },
        ],
      },
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un registro qualità', body: 'Non conformità collegate ai lotti, cause, decisioni e azioni correttive.' },
          { title: 'Un approvvigionamento monitorato', body: 'Soglie, richieste, ordini e ricevimenti di materiali collegati.' },
          { title: 'Una mappa quantificata del reparto', body: 'Tasso di errore, costo di rilavorazione e vocabolario «ordine di produzione» sulla mappa.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow fa schedulazione o MRP?',
          a: 'No. Non pianifica la produzione e non segue il reparto in tempo reale; la mappa descrive i vostri processi, non li esegue. Riprende i flussi attorno all’ERP.',
        },
        {
          q: 'Si può usare il vocabolario della fabbrica?',
          a: 'Sì: la preimpostazione «Industria e logistica» mostra «ordine di produzione» al posto di «ordine» sulla mappa.',
        },
        {
          q: 'Il nostro ERP può essere collegato?',
          a: 'Se pubblica un’API, TblFlow può generare un connettore a partire dalla sua documentazione. Per uno strumento senza API, si può riprodurre un’attività web registrata.',
        },
      ],
    },

    retail: {
      nav: 'Commercio e distribuzione',
      card: 'Scorte, riordino, ordini e assistenza post-vendita in un’unica base.',
      metaTitle: 'TblFlow per il commercio: scorte, riordino e assistenza post-vendita senza doppie digitazioni',
      metaDescription:
        'Inventari a rotazione, avvisi di soglia, ordini di riordino, preparazione e assistenza post-vendita collegati in un’unica base, con agenti che preparano e voi che approvate.',
      eyebrow: 'Per chi · Commercio e distribuzione',
      title: 'Scorte, riordino e assistenza post-vendita in un’unica base',
      subtitle:
        'Gli articoli, i movimenti, gli ordini e i resi nello stesso posto. La soglia avvisa, l’agente prepara il riordino, voi approvate.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'Rotture scoperte troppo tardi', body: 'La scorta è giusta solo al momento dell’inventario.' },
          { title: 'Ordini ai fornitori fatti a mano', body: 'Ogni riordino è un’e-mail scritta a partire da un foglio di calcolo.' },
          { title: 'Un’assistenza post-vendita dispersa', body: 'Garanzia, reso, riparazione: ogni passaggio in uno strumento diverso.' },
        ],
      },
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Una scorta seguita per movimenti', body: 'Il modello «Gestione delle scorte»: articoli, movimenti, valore della scorta, avvisi di soglia.' },
          { title: 'Un riordino preparato', body: 'Gli articoli sotto soglia e una bozza di ordine per fornitore, da approvare.' },
          { title: 'Un monitoraggio dell’assistenza post-vendita', body: 'Richiesta, garanzia, diagnosi, reso e chiusura collegati all’ordine.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow si collega al mio negozio online?',
          a: 'Non esiste un connettore e-commerce integrato. Se la vostra piattaforma pubblica un’API, TblFlow può generare un connettore; altrimenti gli ordini si importano in CSV.',
        },
        {
          q: 'Si possono leggere i codici a barre?',
          a: 'No. Il codice EAN è un campo dell’articolo, ma non esiste la lettura dei codici a barre.',
        },
        {
          q: 'Da dove cominciare?',
          a: 'Dall’inventario a rotazione o dal riordino: due processi tipo pronti da importare sulla mappa, e un modello di base per la scorta.',
        },
      ],
    },

    firms: {
      nav: 'Studi e servizi',
      card: 'Incarichi, pratiche, tempi e fatturazione senza fogli di calcolo ricopiati.',
      metaTitle: 'TblFlow per studi e società di servizi: incarichi, pratiche e margini',
      metaDescription:
        'Per consulenza, commercialisti e studi legali: incarichi e pratiche seguiti, margine per incarico, fatturazione e solleciti, procedure indicizzate.',
      eyebrow: 'Per chi · Studi e servizi',
      title: 'I vostri incarichi e le vostre pratiche, dalla lettera d’incarico all’incasso',
      subtitle:
        'Ogni incarico o pratica collegato al suo cliente, al tempo impiegato, alla sua fattura e al suo margine. Le procedure dello studio indicizzate, i solleciti preparati.',
      pains: {
        title: 'Cosa vi costa oggi',
        items: [
          { title: 'Margini stimati a occhio', body: 'Il tempo impiegato e la fatturazione vivono in file separati.' },
          { title: 'Pratiche disperse', body: 'Documenti, scadenze e solleciti dei giustificativi nella posta elettronica.' },
          { title: 'Procedure tramandate a voce', body: 'Il know-how dello studio sta nella testa di poche persone.' },
        ],
      },
      build: {
        title: 'Cosa costruite',
        items: [
          { title: 'Un monitoraggio degli incarichi', body: 'Il modello «Controllo finanziario»: incarichi e progetti con il loro margine lordo.' },
          { title: 'Pratiche e scadenze', body: 'Ogni pratica, i suoi documenti, le sue scadenze e i suoi solleciti nello stesso posto.' },
          { title: 'Le procedure dello studio', body: 'Indicizzate in DocIndex, collegate ai processi, utilizzate dagli agenti.' },
        ],
      },
      faq: [
        {
          q: 'Il vocabolario può essere quello dello studio?',
          a: 'Sì: le preimpostazioni «Servizi e consulenza» e «Contabilità e legale» mostrano «incarico» o «pratica» sulla mappa.',
        },
        {
          q: 'Si può condividere un monitoraggio con un cliente?',
          a: 'Sì, in sola lettura tramite link o modulo pubblico. Non esiste uno spazio cliente con account e permessi propri per ogni cliente.',
        },
        {
          q: 'I dati dei clienti restano da noi?',
          a: 'Vivono in un vero PostgreSQL, esportabile, e TblFlow può essere self-hosted con il piano Enterprise.',
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default it;
