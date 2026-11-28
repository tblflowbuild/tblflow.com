---
title: "Chat IA"
translationKey: "ai-chat"
description: "Usare la Chat IA di TblFlow: menzioni @, impostazioni dell'invio, proposte da convalidare prima della scrittura, app complete e skill browser."
section: "Guide"
order: 14
---

La Chat IA è un pannello laterale, a destra della base. Qui poni domande sui tuoi dati, oppure chiedi all'assistente di creare tabelle, viste, automazioni, interfacce o agenti. Per una richiesta di modifica non fa nulla da solo: prepara una **proposta** che accetti o rifiuti.

## Aprire il pannello

Il pulsante **Chat IA** si trova nella barra degli strumenti della vista. Un secondo pulsante con lo stesso nome compare nella barra laterale della base, per le persone che possono modificare la base. Il pannello è chiuso alla prima visita; la tua ultima scelta (aperto o chiuso) viene poi mantenuta.

Finché la conversazione è vuota, il pannello propone dei suggerimenti (per esempio «Crea un CRM per me»). Un clic su un suggerimento lo copia nel campo di scrittura senza inviarlo: puoi modificarlo prima di confermare.

Invio invia il messaggio, Maiusc + Invio va a capo. Un messaggio può contenere fino a 100.000 caratteri.

## Conversazioni

- **Nuova conversazione** svuota il pannello e riparte da zero.
- **Cronologia** elenca le tue conversazioni (le cinquanta più recenti) e permette di cercarle per titolo. Vedi solo le tue conversazioni, collegate alla base aperta.

## Menzionare una tabella, una vista o un campo

Digita `@` nel campo di scrittura per aprire un selettore. Propone tre gruppi: **Tabelle**, **Viste** e **Campi**, presi dalle basi dello spazio che puoi leggere. Scegliere un oggetto lo inserisce nel messaggio sotto forma di etichetta, e l'assistente sa così di quale oggetto parli.

Alcune regole:

- Solo tabelle, viste e campi possono essere menzionati. Record, automazioni e interfacce no.
- Un messaggio accetta al massimo 20 menzioni.
- Incollare nel campo di scrittura l'indirizzo di una tabella di TblFlow inserisce direttamente una menzione di quella tabella.
- Il server ricontrolla ogni menzione: l'oggetto deve appartenere allo spazio e tu devi avere il diritto di leggere la sua tabella. Altrimenti la menzione viene rifiutata con il messaggio «Questa menzione non è accessibile: rimuovila o scegli un oggetto dall'elenco».
- Le menzioni non vengono trasmesse quando scambi messaggi con un agente specifico.

## Regolare l'invio

La barra sotto l'area di testo raccoglie le impostazioni del messaggio.

| Impostazione | Effetto |
|---|---|
| **Tipo di risultato** | Limita ciò che l'assistente può proporre: **Tabella**, **Interfaccia**, **Automazione**, **Agente** o **Dati fittizi**. Senza scelta, è «A scelta dell'IA». Oltre a **Tabella**, i tipi richiedono che nella base esista già una tabella. |
| Modello (icona del fornitore) | Apre l'elenco dei modelli disponibili, raggruppati per fornitore. Passa sopra l'icona per espanderla. L'elenco dipende dai modelli configurati per la base. |
| **Ragionamento** | **Rapido** (risposte più veloci, meno crediti), **Normale** (impostazione abituale del modello) o **Approfondito** (il modello riflette di più, fino a 8.000 token di ragionamento in più, quindi più crediti). **Approfondito** è riservato alle offerte Team ed Enterprise. |
| **Ricerca web** | Pulsante da attivare per la conversazione in corso. Resta disattivato finché la ricerca web non è configurata. |
| **Allega file** | Immagini e PDF, fino a 10 per messaggio. Il pulsante è disattivato se il modello scelto non accetta file. |
| **Detta messaggio** | Dettatura vocale, tramite il riconoscimento vocale del tuo browser. Il pulsante compare solo se il browser lo offre. |

Un indicatore **Finestra di contesto** stima la parte della memoria del modello già usata dalla conversazione.

L'uso dell'IA viene conteggiato in crediti; il livello di ragionamento incide su questo consumo. I volumi inclusi per offerta sono indicati in [Piani e limiti](/it/docs/plans-limits).

## Cosa può fare l'assistente

**Leggere, senza convalida.** L'assistente legge direttamente la struttura dello spazio, lo schema delle tabelle, i record, calcola aggregati e cerca nella base di conoscenza. Può anche generare un file Excel, Word, PowerPoint o PDF.

**Proporre, con convalida.** Per modificare qualcosa, emette una proposta mostrata nella chat sotto forma di scheda. Le proposte coprono in particolare:

- creare una base, una tabella, una vista, una cartella;
- rinominare una tabella o un campo, collegare due tabelle;
- creare o modificare un record;
- eliminare un campo;
- creare un'interfaccia, un'automazione o un agente, generare il codice di un'applicazione;
- creare o modificare un documento della base di conoscenza, collegare due documenti.

Su ogni scheda leggi l'anteprima, poi clicchi su **Accetta** o **Rifiuta**. Non viene scritto nulla prima dell'accettazione, e l'accettazione ricontrolla i tuoi diritti: l'assistente non può fare ciò che tu non sei autorizzato a fare.

Una proposta di eliminazione richiede una conferma esplicita (**Conferma eliminazione**). La scheda indica se la risorsa è ripristinabile dal **Cestino** e cosa dipende da essa (campi collegati o calcolati, viste, automazioni, interfacce).

**Cosa non fa.** La chat non ha strumenti per eliminare record o tabelle. Una semplice domanda, per esempio «Come si crea una tabella?», riceve una risposta scritta e non genera alcuna proposta.

Gli agenti e le loro proposte sono descritti in [Agenti IA](/it/docs/ai-agents).

## Creare con l'IA fuori dalla chat

Due punti di accesso aprono una finestra di generazione breve, senza passare dal pannello:

- **Crea con l'IA**, nel menu di aggiunta di una tabella nella barra laterale, per una tabella;
- **Genera con l'IA**, in cima all'editor quando crei un campo: la finestra permette allora di scegliere tra un **Campo** e un **Pulsante**.

Descrivi ciò che vuoi, poi **Genera** mostra un'anteprima. Non viene creato nulla finché non clicchi su **Crea**; **Modifica la richiesta** torna al campo di scrittura.

## Generare un'applicazione completa

Nel campo di scrittura, **Applicazione completa** porta la chat in modalità generazione. Descrivi l'applicazione, e l'assistente la costruisce per fasi che convalidi:

1. l'analisi della richiesta, poi le **Tabelle**;
2. le **Relazioni**;
3. l'**Interfaccia**, le **Automazioni**, le **Viste**, i totali e i **Dati fittizi**;
4. il collegamento e il controllo dei dati, poi un **Agente IA**.

Ogni fase produce proposte. **Accetta tutto** le convalida in una volta, e **Modifica** permette di correggere la fase in corso finché nessuna proposta è accettata. L'opzione **Auto** lascia che l'IA accetti e concatena le fasi successive; si ferma in caso di errore.

Alla fine, un rapporto indica cosa è stato creato e segnala le automazioni ancora inattive: non si attivano finché non le abiliti. Per il seguito (pubblicazione, dominio), vedi [Crea la tua prima applicazione](/it/docs/build-first-app).

## Assistente progetto

Nel menu di aggiunta di una tabella, alla radice della base, **Assistente progetto** installa nella base tre tabelle, **Persone**, **Progetti** e **Attività** (nomi francesi per un'interfaccia in francese), oltre a un agente chiamato «Assistente progetto». Devi avere il diritto di creare tabelle nella base.

L'agente è pianificato dal lunedì al venerdì alle 7:30. Prepara l'ordine del giorno delle riunioni del giorno, propone scadenze nel calendario ed elenca le attività senza responsabile. Le sue scritture (aggiornamento di un progetto, creazione di un evento di calendario) passano sempre da un'approvazione. Installarlo una seconda volta non ricrea le tabelle già presenti.

## Skill browser

Una skill browser registra un percorso su un sito web, poi lo riproduce su richiesta. Si crea con **Nuova skill browser**, in «Altre risorse» del menu di aggiunta. Questa funzione non è attiva su tutte le istanze.

1. **Apri la sessione**: un browser remoto si avvia lato server, vedi il suo schermo in diretta e clicchi e digiti al suo interno. Una sessione dura al massimo 15 minuti e si chiude dopo 2 minuti di inattività.
2. Vai fino alla pagina di partenza, poi clicca su **Registra**. Ogni clic, digitazione e scorrimento diventa un passo. **Ferma** termina la registrazione.
3. **Riproduci** rilancia i passi in un browser separato e mostra un rapporto: passi eseguiti, oppure passo non riuscito.

Intorno alla registrazione:

- **Passi** elenca i passi, permette di rimuoverne uno o di correggere un testo digitato.
- **Credenziali** conserva una password, un codice 2FA o una chiave di sicurezza. Sono cifrate, riprodotte per riferimento, e non vengono mai restituite alla pagina né trasmesse al modello di IA. Una credenziale è collegata alla base: chiunque possa modificarla può usarla per accedere, senza vederne il valore.
- **Commenta** attiva il microfono per spiegare i tuoi gesti. Viene conservato il testo, non l'audio, fino alla convalida della skill, poi eliminato.
- **Analizza** ricava dalla registrazione una skill: un obiettivo, degli input, delle regole di business, ciascuna accompagnata dalla frase da cui deriva. Rileggile, poi **Convalida la skill**. Registrare di nuovo la rende obsoleta.
- **Riproduci con dati** applica la skill convalidata a valori che fornisci, invece di ripetere i gesti identici.

Per avviare una skill da un'automazione, aggiungi il passo **Gestisci un sito web** (vedi [Automazioni](/it/docs/automations)). Richiede una skill convalidata e l'autorizzazione ad agire senza sorveglianza, concessa nella skill.

## Base di conoscenza

La libreria di documenti dello spazio è accessibile tramite l'icona «DocIndex» nella barra laterale dello spazio. Vi crei documenti e cartelle, oppure importi file PDF, DOCX, TXT, MD e CSV (50 MB al massimo per un PDF, 25 MB per gli altri). Importare richiede il diritto di modificare lo spazio. Ogni documento mostra il suo stato: **Indicizzazione…**, poi **Indicizzato**.

La ricerca propone tre modalità: **Semantica**, **Parole chiave** e **Ibrida**. La ricerca semantica presuppone che un fornitore di embeddings sia configurato per lo spazio; senza di esso, la ricerca si limita alle parole chiave, e la chat risponde che nessun fornitore è configurato.

L'assistente della chat interroga questa base su tua richiesta. Gli agenti dispongono dello strumento **Cerca nella base di conoscenza** ([Agenti IA](/it/docs/ai-agents)), e gli assistenti esterni dello strumento `search_knowledge` del [server MCP](/it/docs/mcp-server).
