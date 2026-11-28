---
title: "Mappa dei processi"
translationKey: "process-map"
description: "Creare la mappa dei processi di uno spazio, disegnare i processi, leggere rotture e costi stimati, confrontare stimato e reale, seguire le revisioni."
section: "Guide"
order: 5
---

La mappa dei processi è una pagina del tuo spazio in cui disegni chi fa cosa e con quali strumenti, poi leggi le rotture e i costi stimati. Un processo si può diagnosticare gratuitamente, con i costi stimati visibili, senza il pulsante «Sostituisci», senza il report mensile, senza il confronto tra stimato e reale e senza la libreria di processi tipo. Queste funzioni restano visibili, bloccate. La mappa completa richiede il piano Essenziale o superiore.

## Aprire o creare la mappa

Ogni spazio ha al massimo una mappa. Vi accedi dall'icona **Mappa dei processi** del gruppo di pulsanti in alto a destra dello spazio, dalla voce **Mappa dei processi** del menu che si apre sul nome dello spazio, oppure dalla scorciatoia **Mappa** presente in ogni base.

Quando lo spazio non ha ancora una mappa, **Crea la mappa di questo spazio** apre la domanda **Come iniziare?**:

- **Con gli esempi**: processi, fasi e passaggi di esempio, per vedere il modello in azione.
- **Vuota**: restano solo il catalogo degli strumenti e le funzioni di TblFlow, e inserisci i tuoi processi.
- **Esempio per settore**: un insieme di esempi per Servizi e consulenza, Commercio ed e-commerce, Industria e logistica, oppure Contabilità e legale. Le tariffe sono fittizie, da sostituire con le tue. Questa scelta è riservata ai proprietari dello spazio.

La mappa poggia su una normale base dello spazio (processi, fasi, strumenti, ruoli, responsabilità, oggetti di dati, passaggi di dati): puoi filtrare ed esportare le sue tabelle come quelle di qualsiasi altra base.

## Descrivere i processi

Il canvas si sposta trascinandolo e si ingrandisce con la rotellina. Clicca su una fase per selezionarla; doppio clic o Spazio ne apre la scheda. Invio crea la fase successiva, Tab un ramo, F2 rinomina. La barra degli strumenti che compare sopra la fase selezionata propone **Apri**, **Testa**, **Sostituisci**, **Rinomina**, **Duplica** ed **Elimina**.

Una mappa vuota propone quattro punti di partenza: **Importa un documento**, **Rispondi all'assistente**, **Collega i miei strumenti** oppure **Disegna da solo**. Per l'import, aggiungi un PDF, un documento Word, un foglio Excel, un CSV, un testo o un'immagine (foto di una lavagna, schema). L'IA prepara processi, fasi, responsabili, strumenti e passaggi di dati; non viene aggiunto nulla finché non accetti (**Aggiungi alla base** oppure **Aggiungi tutto**).

Ogni fase ha un esecutore: **Persona**, **Automazione**, **Agente IA**, **Esterno** o **Attrezzatura**.

### Scheda della fase

La scheda raggruppa quattro blocchi:

- **Dettagli**: stato, tipo, esecutore, strumenti e ruoli.
- **Costo e tempo**: durata, frequenza, costo (visibile solo se puoi leggere gli importi) e pista di miglioramento.
- **Dati**: gli input e gli output della fase.
- **Note**.

In alto, le frecce passano alla fase precedente o successiva, **Copia il link** copia l'indirizzo della scheda, e il menu **Altre azioni** offre **Tutte le colonne**. **Elimina la fase** chiede una conferma.

Le responsabilità si inseriscono nella tabella **Responsabilità** (fase, ruolo, tipo). Il tipo è **Responsabile**, **Approvatore**, **Consultato** oppure **Informato**.

### Collegare i tuoi strumenti

**Collega i miei strumenti**, nel menu **Altre azioni**, collega la mappa a Make, n8n, HubSpot o Zapier. TblFlow legge soltanto: non scrive nulla presso di loro. Ogni scenario Make diventa un processo e ogni modulo una fase; lo stesso vale per i workflow n8n. HubSpot alimenta gli oggetti di dati. Per Zapier, un webhook riporta sulla mappa gli errori dei tuoi zap. La mappa si aggiorna ogni 15 minuti. **Scollega** interrompe le sincronizzazioni; le fasi già mappate restano. Questa funzione richiede il piano Essenziale o superiore.

### Aggiornare la presenza di TblFlow

**Aggiorna la presenza di TblFlow** rilegge il tuo spazio, elenca le risorse TblFlow già esistenti e suggerisce le fasi e gli strumenti che coprono. Accetti ogni suggerimento, oppure **Accetta tutto**. TblFlow propone una copertura solo per una fase collegata a un'automazione TblFlow o che porta lo stesso nome di una risorsa TblFlow. Una fase coperta riporta il badge **Coperto da TblFlow**.

### Adattare il vocabolario al tuo settore

Nelle impostazioni del canvas, sezione **Vocabolario**, un preset adatta le parole «cliente» e «ordine» al tuo mestiere:

| Preset | Cliente | Ordine |
|---|---|---|
| Servizi e consulenza | Cliente | Incarico |
| Commercio ed e-commerce | Cliente | Ordine |
| Industria e logistica | Cliente | Ordine di produzione |
| Contabilità e legale | Cliente | Fascicolo |
| Sanità e cura | Paziente | Fascicolo |

Cambiano solo le parole visualizzate: tabelle e campi non vengono rinominati.

## Scegliere una lettura

Un selettore **Lente** cambia la lettura senza cambiare la mappa. Propone sei lenti:

- **Chi fa cosa**: l'esecutore e il responsabile di ogni fase.
- **Costi**: costo umano (tariffa per ruolo), costo degli strumenti (abbonamenti, chiamate API, token IA), risparmi possibili e guadagno realizzato. Queste cifre sono **stime** che inserisci tu, non misurazioni. Gli importi sono riservati ai proprietari della base: senza questo diritto la lente non compare.
- **Rotture**: ogni fase mostra il proprio numero di rotture, con un pulsante **Correggi**. Le cause riconosciute sono la ri-digitazione manuale tra strumenti, un dato senza fonte master, nessun responsabile, più responsabili, l'assenza di una fase successiva, un dato letto che nessuna fase produce, un'automazione in errore e l'ultima esecuzione in errore del workflow TblFlow.
- **Dati**: gli oggetti di dati e gli strumenti che li producono o li consumano. Una corona segna lo strumento fonte master, e ogni strumento non ancora sostituito porta un pulsante **Sostituisci**.
- **Connettori**: i passaggi di dati tra strumenti, con la loro modalità (API, connettore TblFlow, file o esportazione, ri-digitazione manuale) e la frequenza. Il **Racconto dei passaggi** li riproduce uno alla volta. Per una ri-digitazione, **Simula con** mostra l'effetto di un connettore senza scrivere nulla; **Applica** scrive sul passaggio dopo conferma.
- **Sintesi**: una vista d'insieme dell'intera mappa (vedi più avanti).

La barra del canvas ricorda il costo, le rotture, i risparmi possibili, la ripartizione degli esecutori, il guadagno realizzato e la quota coperta da TblFlow. Segnala anche le fasi senza responsabile e le fasi senza durata: sono lacune di inserimento, non rotture. **Completa** porta alla prossima fase da compilare. **Presenta** nasconde gli importi e la lente Costi.

## Leggere la Sintesi

La lente **Sintesi** aggrega l'intera mappa. Mostra indicatori (costo al mese e all'anno, risparmi possibili, guadagno realizzato, copertura TblFlow, ore liberate, tasso di automazione, costo degli strumenti, ritorno sull'investimento, rotture, fasi senza responsabile, completezza), la ripartizione degli esecutori, una tabella per dominio e tre classifiche: i processi più costosi, quelli con i risparmi maggiori e quelli con più rotture. I filtri **Dominio** e **Stato** restringono la vista. Un indicatore privo di dati invita a completare la mappa: non mostra mai zero al posto del dato mancante.

Gli importi sono riservati ai proprietari della base. Il ritorno sull'investimento si calcola a partire dal **Costo mensile di TblFlow**, inserito nella sezione **ROI** della **Configurazione della mappa**.

Il blocco **Evoluzione** confronta lo stato attuale con un'istantanea: un'istantanea mensile viene presa il 1° del mese alle 8 (ora del server), e i proprietari possono farne una in qualsiasi momento con **Fissa lo stato attuale**. Il confronto riguarda l'intera mappa, filtri ignorati.

**Esporta** propone **Esporta in PDF** (stampa della vista) e **Esporta in CSV**. Il CSV contiene una riga per processo: processo, dominio, stato, numero di fasi, rotture, completezza e copertura TblFlow, più il costo mensile, i risparmi possibili e il guadagno realizzato per un proprietario. È codificato per Excel (UTF-8, separatore punto e virgola) e copre l'intera mappa, senza tenere conto dei filtri della vista. È limitato a 5.000 processi; oltre, TblFlow lo segnala.

## Stimare la mappa

La **Stima** della mappa (pulsante **Stima** della barra) raccoglie ciò che serve per stimare i costi: **Da completare**, **Tariffe orarie**, **Strumenti** e **Opportunità**. Nessun valore è precompilato: tutto viene da te, e nulla viene scritto senza la tua conferma.

- **Tariffe orarie**: inserisci una tariffa oraria diretta, oppure una RAL annua che TblFlow converte con un coefficiente di oneri e un numero di ore produttive annue. Puoi anche indicare una tariffa giornaliera fatturabile (TJM).
- **Strumenti**: il prezzo mensile per licenza (abbonamento), il costo per chiamata (API) oppure il prezzo per un milione di token (modello IA). Gli strumenti si avvicinano al catalogo SaaS.
- **Opportunità**: ciò che TblFlow può sostituire in tutto o in parte, ciò che un'automazione o un agente può riprendere, e la leva di miglioramento di ogni fase (automatizzare, eliminare la fase, ridurre gli errori, rinegoziare).

Tariffe e prezzi sono leggibili solo dai proprietari. La **Configurazione della mappa** (icona **Configurazione della mappa** della barra degli strumenti) raggruppa costi, campi letti, vocabolario, frequenze, liste di valori, soglie e ROI. Solo i proprietari dello spazio la modificano. Le soglie fissano il termine di revisione in giorni e la completezza minima di una scheda.

## Sostituisci

Su una fase o uno strumento, **Sostituisci** fornisce all'IA il contesto della mappa. Propone una sostituzione con TblFlow, da scegliere tra **Base + interfaccia**, **Automazione**, **Agente IA** e **Attività web (RPA)**; la scelta suggerita è segnalata. Uno strumento SaaS diventa una base e un'interfaccia, un connettore un'automazione, una fase umana un agente, un inserimento su un sito web una riproduzione nel browser (Computer Use).

Non viene creato nulla prima della tua validazione. Un'automazione viene creata **inattiva**, e anche la pianificazione di un agente: rileggile e attivala tu stesso, nulla gira prima. Per uno strumento SaaS, scegli una nuova base (TblFlow propone prima la suddivisione, che rileggi) oppure una base esistente (la creazione si svolge passo dopo passo nella procedura guidata, dove convalidi ogni passo). La mappa indica lo stato di sostituzione: **Sostituzione proposta**, **Sostituito · creato inattivo**, poi **Sostituito da TblFlow** una volta che la risorsa è attiva. Solo quest'ultimo conta nel guadagno realizzato.

### Valutare la sostituibilità

**Sostituibilità IA** classifica ogni fase e ogni strumento della mappa: tabella, interfaccia, automazione, agente IA, browser (RPA) oppure non sostituibile. Un modello IA spiega ogni classificazione, con un livello di confidenza e un guadagno stimato; le proposte incerte sono contrassegnate **Da confermare**. **Accetta** apre **Sostituisci** con la modalità proposta, **Ignora** la scarta. Nulla viene creato prima del pulsante **Crea** di quella finestra. L'analisi riguarda al massimo 250 elementi.

### Testare una fase

**Testa** avvia una prova a vuoto dell'automazione collegata alla fase: non viene inviato né scritto nulla, e la finestra indica lo stato di ogni passo dell'automazione. Il test è possibile solo se il campo «Origine automazione» della fase indica un'automazione TblFlow; altrimenti il pulsante resta inattivo e spiega il motivo.

## Seguire le revisioni

Ogni processo ha un **responsabile**, una data di **ultima revisione**, una data di **prossima revisione**, uno **stato** (Bozza, In revisione, Convalidato o Archiviato nel modello), un campo «Approvato da» e una versione. Ogni fase ha una **scheda procedura**: un documento di tipo Canvas (vedi più avanti). Documentazione e schema vivono nello stesso posto: si correggono insieme.

## Essere avvisati delle procedure scadute

Gli avvisi si attivano dal menu **Altre azioni** del canvas (voce **Avvisi di scadenza**) e richiedono una base V2. Poiché l'avviso è un'automazione della base, bisogna poter modificare le automazioni della base. Ogni lunedì alle 7 (ora del server), un'e-mail elenca i processi la cui prossima revisione è scaduta o scade entro 14 giorni. I processi archiviati vengono ignorati, e nessuna e-mail parte se non c'è nulla da rileggere. Al massimo 100 processi vengono esaminati a ogni invio. Di default il destinatario è la persona che attiva gli avvisi; puoi modificare i destinatari (10 al massimo). Sono accettati solo gli indirizzi il cui dominio è quello di un membro dello spazio.

## Ricevere un report mensile

Il report mensile parte il 1° del mese alle 8 (ora del server), via e-mail, e anch'esso richiede una base V2 e il diritto di modificare le automazioni. Si attiva da **Altre azioni**, voce **Report mensile**. Riporta il costo, il guadagno potenziale, i tre processi con il guadagno più alto e il numero di revisioni in ritardo. Gli importi compaiono solo se la persona che lo attiva è proprietaria della base. Altrimenti, il report non contiene alcun importo e classifica i processi per numero di rotture. Un report che contiene importi può essere attivato, né vedere i propri destinatari modificati, solo da un proprietario; gli altri possono spegnerlo. Se lo spazio torna al piano gratuito di diagnosi, il report resta configurato ma viene sospeso: nessuna e-mail parte finché il piano Essenziale non viene ripristinato.

## Convalidare le fasi

Una fase può avere uno stato di convalida, la persona che ha convalidato, la data e un commento. Il modello fornisce gli stati **Da convalidare**, **Convalidata** e **Da rivedere**; il badge mostra lo stato con il nome che gli dà la tua base. Un badge sulla fase, nel canvas, mostra lo stato a colpo d'occhio; il dettaglio compare al passaggio del mouse. Queste informazioni si inseriscono nella tabella delle fasi (campi «Stato di convalida», «Convalidato da», «Data di convalida» e «Commento di convalida»).

## Confrontare stimato e reale

Il pannello **Stimato vs reale** confronta lo stimato con il misurato, **solo sulle fasi misurate**, e indica la quota di fasi misurate, per sapere quanta fiducia dare al totale. Uno scarto positivo significa che il reale costa più del previsto. Propone una lettura **Per processo** e **Per fase**, con un link alla fase nel canvas. Senza il diritto di leggere gli importi, compaiono solo la quota di fasi misurate e la provenienza delle misure.

Nella lettura per fase, **Inserisci le misure** apre un editor: minuti misurati, volume misurato al mese, tasso di errore misurato (tra 0 e 100%) e fonte della misura. Lascia vuoto un campo per mantenere la stima. Il costo misurato si ricalcola da solo. I costi restano inserimenti del tuo team: TblFlow li confronta, non li misura.

Su una fase eseguita da un'automazione, il pulsante **Importa dall'automazione** compila le misure a partire dalle esecuzioni degli ultimi 30 giorni: durata media in minuti, volume al mese e tasso di errore. Un'anteprima mostra il prima e il dopo, e nulla viene scritto senza la tua conferma. L'import sostituisce le misure inserite a mano. Non è proposto per una fase umana, esterna o affidata a un agente. Se l'automazione non ha esecuzioni negli ultimi 30 giorni, un messaggio lo segnala e non viene importato nulla.

## Confrontare prima e dopo

Prima di un cambiamento, **fissa la mappa** (menu **Altre azioni**, voce **Prima / dopo**): TblFlow ne crea una copia, denominata con il nome che dai e con la data. Una volta effettuato il cambiamento, confronta il **costo totale del mese** e il **numero di fasi** tra la copia e la mappa corrente. Fissare la mappa richiede il piano Essenziale o superiore e, poiché la copia riprende tutti i campi, solo un proprietario della base può farlo quando dei campi di costo sono chiusi agli altri. Gli importi del confronto sono riservati ai proprietari.

## Seguire i miglioramenti

Il **registro dei miglioramenti** segue le tue idee per stato (**Idea**, **Pianificata**, **In corso**, **Realizzata**, **Abbandonata**), con le fasi collegate, il costo di attuazione, il guadagno previsto e un ritorno (guadagno su 12 mesi diviso per il costo di attuazione). È in sola lettura: aggiungi o modifica le righe nella tabella **Miglioramenti**.

## Dove perdi denaro?

Questo percorso in sola lettura classifica i tuoi processi, poi le loro fasi, per guadagno potenziale: quota del guadagno totale, costo, rotture e link diretto alla fase nel canvas. Per le persone che non hanno il diritto di leggere gli importi, la classifica si basa sul numero di rotture, e lo indica chiaramente. Vengono lette solo le prime 1.000 fasi.

## Presentare alla direzione

La **vista direzione** sta in una sola pagina di lettura, stampabile in PDF con **Stampa / PDF**: costo e guadagno potenziale al mese, numero di processi attivi, i cinque processi in cui si perde di più, i miglioramenti per stato e le revisioni in ritardo. Gli importi compaiono solo per i proprietari della base.

## Partire da un processo tipo

La **libreria di processi tipo** propone 13 processi da importare uno alla volta, raggruppati per settore: fatturazione clienti, selezione del personale, reclami, acquisti, e serie per il commercio, l'industria e la logistica, la contabilità e il legale. Ogni processo arriva con le sue fasi collegate in sequenza, durate e frequenze di esempio, e ruoli senza tariffe: inserisci i tuoi costi. L'import aggiunge soltanto righe: un ruolo già presente viene riutilizzato con la sua tariffa, nessuno strumento viene creato e un processo con lo stesso nome non viene importato una seconda volta. Il contenuto importato è per ora in francese.

## Aggiornare il modello

Le mappe esistenti passano al modello aggiornato tramite il banner **Aggiorna il modello**, riservato ai proprietari: **Vedi le modifiche** mostra un'anteprima, poi **Conferma l'aggiornamento** applica le modifiche. Nulla viene eliminato, e i tuoi totali non cambiano finché i nuovi campi sono vuoti. Se l'aggiornamento si interrompe, rilancialo per riprendere da dove si era fermato.

## Esportare e condividere

Il pulsante **Esporta** della barra degli strumenti propone **Immagine (PNG)**, **PDF (stampa)** ed **Esporta tutti i dati**. Quest'ultimo è riservato a chi può modificare la base e ti avvisa con una notifica che contiene il link di download.

Un link pubblico in sola lettura condivide la mappa, da **Condividi**. È **chiuso per impostazione predefinita**: attivalo su richiesta, e disattivalo quando non ti serve più, il che interrompe subito il link. Solo le persone che possono modificare la base gestiscono la condivisione. Costi, tariffe e guadagni non vengono mai condivisi, e il link non mostra mai gli autori. I campi sensibili riservati restano nascosti, e importi e campi di costo sono mascherati per chi non ha il diritto di leggerli. L'export `.tbl` e la duplicazione vengono rifiutati se un campo è illeggibile per la persona che li richiede.

## Sapere cosa dipende da un campo

Prima di eliminare o modificare un campo, puoi elencare ciò che ne dipende. Tre punti lo mostrano:

- La conferma di eliminazione di un campo elenca gli elementi coinvolti, incluse le viste e le automazioni.
- Quando un agente propone di eliminare un campo, la proposta mostra **Cosa ne dipende e verrà toccato**: campi collegati o calcolati, viste, automazioni e interfacce, oltre alla possibilità di ripristinare dal cestino. Se questo elenco non può essere calcolato, l'eliminazione viene rifiutata.
- L'API `GET /api/table/{tableId}/field/{fieldId}/impact` (diritto di lettura del campo) restituisce i campi, le viste e le automazioni che ne dipendono, con una gravità: l'oggetto **si rompe**, **si degrada** oppure **da verificare**. L'elenco è limitato a 200 elementi; un indicatore segnala le dipendenze in basi che non puoi leggere, senza nominarle.

## Generare la documentazione di una riga (campo Canvas)

Un campo Canvas porta un documento per riga, come la **Scheda procedura** di una fase. Fai doppio clic sulla cella nella griglia: si apre il pannello **Documento della riga**, e aprire una cella vuota crea il documento. Le opzioni del campo scelgono il contenuto iniziale: **Modello** (copia di un documento della libreria, in cui i nomi dei campi vengono sostituiti con i valori della riga), **IA** (il documento è redatto a partire dai campi della riga), **Pagina IA** (una scheda prospect o una presentazione) oppure **Vuoto**. L'opzione **Crea all'aggiunta di una riga** crea automaticamente il documento; gli import non creano mai documenti.

Nel pannello, titolo e contenuto si salvano automaticamente. **Rigenera** riscrive il documento; se è stato modificato a mano, TblFlow chiede **Sovrascrivere le tue modifiche?** prima di sostituirlo. **Pagina** mostra la resa, **Modifica** torna all'editor, e **Apri nella libreria** porta alla libreria documenti dello spazio. Se il documento è stato modificato altrove, un messaggio lo indica e **Ricarica** riprende la versione salvata. **Genera i documenti** crea in una sola volta i documenti delle righe che ne sono prive, al massimo 100 per avvio. Ogni documento redatto dall'IA conta nel consumo di IA.

## Organigramma dello spazio

Le impostazioni dello spazio hanno una scheda **Organigramma**, la cui pagina propone tre schede: **Organigramma** (albero «chi riporta a chi», calcolato in base al manager indicato nel profilo di ciascuna persona), **Dipartimenti** (struttura ad albero e membri) e **Da sostituire**. Un collaboratore senza manager compare come radice. Un dipartimento si elimina solo se è vuoto.

**Importa** carica un organigramma da un file CSV: clicca prima su **Anteprima**, nulla viene scritto finché non confermi, e reimportare lo stesso file non crea duplicati. **Scarica il modello** fornisce le colonne attese. **Esporta** scarica l'organigramma in CSV.
