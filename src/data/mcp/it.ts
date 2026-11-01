import type { McpKey } from './fr';

const it = {
  nav: 'Server MCP',
  'meta.title': 'Server MCP ufficiale: TblFlow in Claude',
  'meta.description':
    "Collega TblFlow a Claude in un clic: il server MCP ufficiale legge e scrive i tuoi dati con i tuoi diritti e gli spazi che scegli. Dal piano Gratuito.",
  breadcrumb: 'Server MCP',
  'hero.eyebrow': 'Server MCP ufficiale',
  'hero.title': 'Lavora sui tuoi dati TblFlow da Claude.',
  'hero.subtitle':
    "Aggiungi TblFlow come connettore in Claude, accedi con il tuo account abituale e scegli gli spazi accessibili. Claude può così interrogare, creare e modificare i tuoi record direttamente dalla conversazione.",
  'hero.cta.primary': 'Scopri come collegare',
  'hero.cta.secondary': 'Leggi la documentazione',
  'hero.note': "Disponibile dal piano Gratuito, come l'API REST.",
  'hero.url.label': 'URL del server',
  'benefits.title': 'Cosa cambia',
  'benefits.1.title': 'Interrogare i tuoi dati',
  'benefits.1.body':
    "Fai le tue domande a Claude: legge lo schema delle tue basi, filtra i record e cerca nel knowledge graph, con ricerca semantica e full-text.",
  'benefits.2.title': 'Agire dalla conversazione',
  'benefits.2.body':
    "Crea e modifica record, aggiungi una tabella o un campo, avvia un'automazione o un agente IA, senza uscire da Claude.",
  'benefits.3.title': 'Mantenere il controllo',
  'benefits.3.body':
    "Al momento del collegamento scegli gli spazi e le basi accessibili e i permessi. I tuoi diritti TblFlow si applicano a ogni richiesta.",
  'tools.title': '13 strumenti, in parole semplici',
  'tools.intro':
    "Ecco cosa può fare Claude. Le funzioni più sensibili sono opzioni che attivi al momento del collegamento.",
  'tools.1.title': 'Esplorare',
  'tools.1.body': 'Elencare i tuoi spazi e le tue basi.',
  'tools.2.title': 'Capire',
  'tools.2.body': 'Descrivere lo schema di una base.',
  'tools.3.title': 'Leggere',
  'tools.3.body': 'Elencare, filtrare e leggere i record.',
  'tools.4.title': 'Cercare',
  'tools.4.body': 'Cercare nel knowledge graph, con ricerca semantica e full-text.',
  'tools.5.title': 'Creare e modificare',
  'tools.5.body': 'Creare e modificare i record.',
  'tools.6.title': 'Eliminare',
  'tools.6.body':
    "Eliminare i record: prima un'anteprima, poi una conferma esplicita. I record vanno nel cestino.",
  'tools.7.title': 'Strutturare',
  'tools.7.body': 'Creare una tabella o un campo.',
  'tools.8.title': 'Automatizzare',
  'tools.8.body': "Avviare un'automazione, se il suo proprietario l'ha esposta.",
  'tools.9.title': 'Delegare',
  'tools.9.body': "Avviare un agente IA, se il suo proprietario l'ha esposto.",
  'tools.perm.read': 'Lettura (predefinita)',
  'tools.perm.write': 'Scrittura (opzione)',
  'tools.perm.delete': 'Eliminazione (opzione)',
  'tools.perm.schema': 'Schema (opzione)',
  'tools.perm.trigger': 'Avvio (opzione)',
  'steps.title': 'Collegare in tre passaggi',
  'steps.1.title': 'Aggiungere un connettore personalizzato',
  'steps.1.body':
    "In Claude (web, desktop o mobile): Impostazioni → Connettori → Aggiungi connettore personalizzato, poi inserisci l'URL del server.",
  'steps.2.title': 'Accedere',
  'steps.2.body': 'Accedi con il tuo account TblFlow abituale (OAuth 2.1).',
  'steps.3.title': 'Scegliere gli spazi',
  'steps.3.body':
    "Seleziona gli spazi e le basi accessibili, poi i permessi. La lettura è attiva per impostazione predefinita.",
  'steps.code.title': 'Con Claude Code',
  'steps.code.body': 'Basta un comando:',
  'control.title': 'Ciò che controlli',
  'control.1':
    "Scegli ciò che Claude vede: spazi, basi e permessi. Lettura per impostazione predefinita; scrittura, eliminazione, schema e avvio sono opzioni.",
  'control.2': 'I tuoi diritti TblFlow esistenti si applicano a ogni richiesta.',
  'control.3':
    "Le automazioni e gli agenti possono essere avviati solo se il loro proprietario li ha esposti.",
  'control.4':
    "Un'eliminazione passa da un'anteprima e poi da una conferma esplicita, e i record vanno nel cestino.",
  'control.5':
    "Il contenuto delle conversazioni non viene registrato nei log: vengono conservati solo lo strumento chiamato, l'ora, la durata e lo stato. I risultati degli strumenti vengono trasmessi all'assistente (Claude) per rispondere alla tua richiesta.",
  'control.6':
    "Progettato secondo le pratiche ISO 27001 e ISO 42001, il GDPR e l'AI Act. È un approccio di progettazione: a oggi non è stata ottenuta alcuna certificazione.",
  'limits.title': 'Limiti di frequenza per piano',
  'limits.intro':
    "Il server MCP è incluso in ogni piano. Cambia solo il limite di richieste al minuto.",
  'limits.col.tier': 'Piano',
  'limits.col.rate': 'Richieste al minuto',
  'status.title': 'Dove trovarlo',
  'status.body':
    "Il server è pubblicato nel registro MCP ufficiale con il nome com.tblflow/tblflow (versione 1.0.0). L'invio alla directory dei connettori di Claude è in arrivo. ChatGPT non è ancora supportato.",
  'faq.title': 'Domande frequenti',
  'faq.1.q': 'Chi vede i miei dati?',
  'faq.1.a':
    "Scegli gli spazi e le basi accessibili al momento del collegamento, e i tuoi diritti TblFlow si applicano a ogni richiesta. I risultati degli strumenti vengono trasmessi all'assistente (Claude) per rispondere alla tua richiesta. TblFlow non registra nei log il contenuto delle conversazioni: vengono conservati solo lo strumento chiamato, l'ora, la durata e lo stato.",
  'faq.2.q': "Posso revocare l'accesso?",
  'faq.2.a':
    "Sì. Rimuovi il connettore nelle impostazioni di Claude: Claude smette di accedere ai tuoi dati TblFlow.",
  'faq.3.q': 'ChatGPT è supportato?',
  'faq.3.a':
    "Non ancora. Il server è pubblicato nel registro MCP ufficiale (com.tblflow/tblflow, versione 1.0.0) e si collega a Claude. L'invio alla directory dei connettori di Claude è in arrivo.",
  'faq.4.q': 'Il server MCP è disponibile nel piano Gratuito?',
  'faq.4.a':
    "Sì, dal piano Gratuito, come l'API REST. Cambia solo il limite di frequenza: 60, 120, 300 e 600 richieste al minuto per Gratuito, Pro, Business ed Enterprise.",
  'faq.5.q': 'Cosa può fare Claude con le mie automazioni e i miei agenti?',
  'faq.5.a':
    "Può avviarli solo se il loro proprietario li ha esposti. Per un'automazione, run_automation esegue una prova a vuoto con dati di esempio: nessun dato viene modificato.",
  'home.line': 'Collega TblFlow a Claude — server MCP ufficiale',
  'home.card.title': 'Claude',
  'home.card.body':
    "Interroga e modifica i tuoi dati TblFlow dalla conversazione, con i tuoi diritti e gli spazi che scegli.",
  'home.card.cta': 'Scopri il server MCP',
  'pricing.row': 'Server MCP: richieste / minuto',
  'pricing.highlight': 'Server MCP incluso: {n} richieste / minuto',
  'privacy.heading': 'Server MCP',
  'privacy.p1':
    "Questa sezione descrive i trattamenti propri del server MCP di TblFlow (https://app.tblflow.com/mcp), che consente a un assistente IA come Claude di accedere al tuo spazio TblFlow. Il server fa parte dell'applicazione: i suoi documenti (condizioni, informativa sulla privacy, accordo sul trattamento dei dati) sono pubblicati su app.tblflow.com.",
  'privacy.p2':
    "Dati trattati: al momento del collegamento, la tua identità TblFlow (OAuth 2.1) e gli spazi, le basi e i permessi che scegli; a ogni chiamata, i dati del tuo spazio che lo strumento richiesto legge o scrive, nei limiti dei tuoi diritti.",
  'privacy.p3':
    "Finalità: eseguire le azioni che chiedi all'assistente e garantire la sicurezza del servizio.",
  'privacy.p4':
    "Conservazione: il contenuto delle conversazioni, gli argomenti e i risultati degli strumenti non vengono mai registrati. Un registro di audit conserva, per ogni chiamata a uno strumento, l'identificativo dell'utente, il nome dello strumento, l'ora, la durata in millisecondi e lo stato (successo o errore) per 6 mesi, poi viene eliminato automaticamente. I client OAuth registrati dinamicamente e rimasti inutilizzati vengono eliminati dopo 30 giorni.",
  'privacy.p5':
    "Condivisione: i risultati degli strumenti vengono trasmessi all'assistente che hai collegato (ad esempio Claude, di Anthropic), che li tratta per rispondere alla tua richiesta secondo la propria informativa sulla privacy. Collega solo gli spazi il cui contenuto accetti che sia trasmesso all'assistente.",
  'privacy.p6':
    "Quadro di riferimento: il server è progettato secondo le pratiche ISO 27001 e ISO 42001, il GDPR e l'AI Act. A oggi non è stata ottenuta alcuna certificazione.",
  'privacy.p7':
    "I tuoi diritti (accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e reclamo all'autorità di controllo) si esercitano per questi trattamenti come descritto sopra. Contatto per la protezione dei dati:",
} as const satisfies Record<McpKey, string>;

export default it;
