---
title: "Connettori"
translationKey: "connectors"
description: "Collegare TblFlow a un servizio esterno: account e chiavi API, operazioni, tabella sincronizzata, trigger «Nuovo elemento», permessi richiesti."
section: "Guide"
order: 13
---

Un connettore collega TblFlow a un servizio esterno: un account (Gmail, Slack…), un'API accessibile con una chiave, oppure un database PostgreSQL. Le tue colonne, tabelle, automazioni e agenti possono poi usarlo.

## Dove trovarli

In una base, apri **Automazioni**, poi la scheda **Connettori**. Due viste:

- **I tuoi**: gli account, le API e i database già collegati;
- **Scopri**: ciò che puoi aggiungere, con una ricerca e delle categorie (Messaggistica, CRM, Produttività…).

Il pulsante **Crea con l'IA** crea un connettore a partire dalla documentazione di un'API. Questa pagina non lo descrive.

## Collegarsi

### Un account (OAuth)

In **Scopri**, clicca sul pulsante **+** del servizio (descrizione «Connetti» seguita dal nome): si apre una finestra del servizio per autorizzare il tuo account. Puoi dare un **Nome dell'account** per riconoscerlo. Poi nel pannello del connettore sono disponibili **Ricollega** e **Disconnetti**. Disconnettere interrompe ciò che usa l'account (automazioni, colonne, agenti) fino al ricollegamento.

Se il server non ha un'applicazione OAuth per un servizio, quest'ultimo compare in **Non configurati (admin)**. Un amministratore dello spazio può allora inserire l'applicazione OAuth della propria organizzazione, nella sezione **Avanzate** della finestra di collegamento.

### Un'API con una chiave

I connettori API si trovano nella sezione **Catalogo** di **Scopri**. Un connettore API si installa prima (**Installa**), poi si collega (**Connetti**): incolli la tua chiave e l'indirizzo del tuo account se richiesto. TblFlow verifica subito che la chiave risponda.

L'impostazione **Account utilizzato** sceglie tra un **Account condiviso** per tutto lo spazio e un **Account di ciascun utente**. Con un account condiviso, tutte le chiamate passano da un unico account, collegato da un gestore dello spazio.

### Un database PostgreSQL

Il connettore **PostgreSQL** legge le tabelle di un database esistente, in sola lettura. Non viene inviata nessuna scrittura.

## Le operazioni

Il pannello di un connettore elenca **Cosa permette**. Ogni operazione è di uno dei tre tipi seguenti:

| Tipo | Significato |
|---|---|
| **Leggere** | Legge una scheda a partire da un valore |
| **Elencare** | Restituisce un elenco di elementi |
| **Agire** | Crea, modifica o invia qualcosa presso il servizio |

Il pulsante **Testa** prova un'operazione dal pannello. Un'operazione si usa poi in quattro punti (sezione **Dove usarla**): una colonna collegata, una tabella sincronizzata, un'automazione (passaggio **Chiama un'operazione**) o un agente, che può richiamare le operazioni come strumenti.

Per un connettore installato dal catalogo, l'impostazione **Consenti le scritture** è disattivata per impostazione predefinita. Se disattivata, le operazioni che creano, modificano o eliminano presso il servizio vengono rifiutate ovunque (automazioni, pulsanti, agenti); le letture continuano.

## Sincronizzare in una tabella

Una tabella sincronizzata importa un elenco dal servizio, poi lo mantiene aggiornato: ogni elemento diventa una riga.

1. Attiva il connettore, poi apri il suo pannello, sezione **Dove usarlo** → **Tabella sincronizzata**.
2. Scegli la base, poi **Crea una tabella sincronizzata**.
3. Scegli il **Connettore** e l'**Elenco** (un'operazione che restituisce un elenco). Un'**Anteprima** mostra i primi elementi.
4. Seleziona le **Colonne** (tipi: Testo, Testo lungo, Numero, Casella di controllo, Data, Link, E-mail) e l'**Identificatore univoco**, che ritrova ogni elemento da una sincronizzazione all'altra.
5. Imposta la **Sincronizzazione**: ogni 15 minuti, ogni ora, ogni 6 ore, ogni giorno, oppure manuale.
6. Scegli la sorte degli **Elementi scomparsi** (**Conserva le righe** o **Elimina le righe**), il **Numero massimo di elementi** e la **Modalità**, poi **Crea la tabella**.

La modalità **Incrementale** rilegge solo gli elementi modificati dall'ultima sincronizzazione, e l'elenco intero ogni 7 giorni per impostazione predefinita. È accettata solo se il connettore la dichiara per quell'elenco. La modalità **Completa** rilegge l'intero elenco ogni volta. Senza altra impostazione, la lettura si ferma a 5.000 elementi; il massimo regolabile è 50.000. Una tabella sincronizzata conta al massimo 100 colonne. Se il limite interrompe la lettura, un messaggio lo indica.

Il menu **Sincronizzazione** della tabella mostra lo stato, **Sincronizza ora**, **Risincronizza tutto** e **Interrompi la sincronizzazione** (la tabella e le sue righe vengono conservate).

Per impostazione predefinita la tabella è in sola lettura. L'opzione **Rimanda le modifiche all'API** propone **Dopo convalida da parte di un amministratore della base** oppure **Automaticamente, a ogni modifica**; richiede che le scritture siano consentite per il connettore.

## Avviare un'automazione: «Nuovo elemento»

In un'[automazione](/it/docs/automations), il trigger **Nuovo elemento in un connettore** avvia l'automazione una volta per ogni nuovo elemento di un elenco.

- Scegli il connettore, un elenco i cui elementi hanno un identificatore, i suoi parametri e la frequenza di **Controlla**: 15 minuti, 1 ora, 6 ore o 1 giorno.
- La prima lettura trattiene gli elementi già presenti senza avviare nulla. Solo gli elementi comparsi dopo avviano l'automazione.
- I campi dell'elemento si leggono con `{{item.<percorso>}}`.
- Una lettura avvia al massimo 50 esecuzioni e scorre al massimo 5 pagine.

## Connettori proposti in Scopri

### Account (OAuth)

| Account | Cosa indica il pannello |
|---|---|
| Gmail | Cercare e leggere e-mail, inviare un'e-mail |
| Google Calendar | Elencare gli eventi, creare un evento |
| Google Drive | Cercare file, leggere le informazioni di un file |
| Google Meet | Creare un link di riunione |
| Google Chat | Elencare gli spazi, pubblicare un messaggio |
| Slack | Elencare i canali, leggere i messaggi di un canale, inviare un messaggio |
| GitHub | Elencare e leggere le issue, crearne, elencare le pull request, commentare |
| Outlook | Elencare le e-mail, inviare un'e-mail |
| Microsoft Teams | Elencare i tuoi team e i loro canali, leggere, pubblicare e rispondere, creare una riunione |
| Discord | Leggere il tuo profilo, elencare i tuoi server |

### API con una chiave

| Connettore | Cosa permette | Cosa fornire |
|---|---|---|
| Make | Leggere le tue organizzazioni, team e scenari, il loro stato e il loro blueprint (sola lettura) | Un token API di Make (scope `scenarios:read` e `teams:read`) e l'indirizzo della tua zona |
| n8n | Leggere i tuoi workflow e le loro esecuzioni, su un'istanza n8n Cloud | Una chiave API n8n e l'indirizzo della tua istanza |
| HubSpot | Leggere, cercare, creare e aggiornare contatti, aziende e trattative, e associarli | Il token di un'app privata HubSpot |

Make, n8n e HubSpot alimentano anche la [mappa dei processi](/it/docs/process-map).

### ClickUp (non ancora in Scopri)

Il connettore ClickUp esiste, ma è ancora in fase di collaudo su un account reale: non compare in **Scopri**, che mostra solo i connettori pubblicati. Non esiste un pulsante per installarlo dall'interfaccia. Finché non sarà pubblicato, non contarci per un uso regolare.

Si collega con un **token personale** ClickUp (inizia con `pk_`). La guida di collegamento indica dove generarlo: in ClickUp, il tuo avatar, **Impostazioni**, **Applicazioni**, sezione **Token API**. Il token non ha scope: agisce con i tuoi permessi, su tutti gli spazi di lavoro a cui hai accesso. Per limitare l'accesso, generalo da un account ospite solo sugli spazi utili.

| Tipo | Operazioni |
|---|---|
| **Elencare** | Gli spazi di lavoro; gli spazi di uno spazio di lavoro; le cartelle di uno spazio; le liste di una cartella; le liste collocate direttamente in uno spazio, fuori da ogni cartella; le attività di una lista; i membri di una lista |
| **Leggere** | Un'attività, con i suoi campi personalizzati e, se serve, le sue sottoattività |
| **Agire** | Creare un'attività in una lista; modificare un'attività o archiviarla (cambiano solo i campi inviati, i campi personalizzati non si modificano qui); commentare un'attività |

Le tre operazioni che agiscono sono scritture: vengono rifiutate finché l'impostazione **Consenti le scritture** è disattivata, come per gli altri connettori del catalogo. Le attività di una lista si leggono a pagine da 100, le più recenti per prime per impostazione predefinita.

TblFlow distanzia le chiamate a ClickUp: al massimo 2 contemporanee, con almeno 600 ms tra due chiamate. Questo resta sotto il limite di 100 richieste al minuto per token che ClickUp applica alle sue offerte più basse.

Il trigger **Nuovo elemento in un connettore** (vedi sopra) funziona con l'operazione **Elencare le attività di una lista**: un'automazione si avvia a ogni nuova attività di una lista ClickUp.

## Permessi richiesti

| Azione | Ruolo nello spazio |
|---|---|
| Usare un connettore, collegare il proprio account | Tutti i ruoli |
| Creare e modificare un connettore | Proprietario, creatore, editor |
| Installare dal catalogo | Proprietario; creatore se l'installazione è libera |
| Eliminare un connettore | Proprietario, creatore |

La governance del catalogo si imposta nello spazio: **Libera (proprietari e creatori dello spazio)** oppure **Su approvazione di un amministratore dello spazio**. In quest'ultimo caso, gli altri membri usano **Richiedi l'installazione**.

Creare una tabella sincronizzata richiede il permesso di creare una tabella nella base. I permessi dei ruoli sono descritti in dettaglio in [Permessi](/it/docs/permissions).

## Quota di chiamate

Ogni piano limita le chiamate effettive ai connettori API al mese (le risposte servite dalla cache non contano): Gratuito 1.000, Essenziale 50.000, Team 500.000. Vedi [Piani e limiti](/it/docs/plans-limits).
