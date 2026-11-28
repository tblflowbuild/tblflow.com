---
title: "Tabelle e campi"
translationKey: "tables-and-fields"
description: "I 28 tipi di campo di TblFlow, collegamenti tra tabelle, campi Ricerca e Riepilogo, formule, valori predefiniti, convalida e tabella in PostgreSQL."
section: "Guide"
order: 2
---

Una tabella TblFlow è una vera tabella PostgreSQL. Un campo è una vera colonna. È ciò che rende utile questa pagina anche se non lasci mai l'interfaccia: ciò che scegli qui è ciò che esiste nel database.

## Famiglie di campi

Il menu **Tipo** propone 28 tipi di campo, a cui si aggiungono due voci, **Ricerca** e **Ricerca condizionale**. I tipi non dipendono dal tuo piano.

**Valori semplici** — Testo su una riga, Testo lungo, Email, Telefono, URL, Numero, Data, Casella di controllo, Valutazione. Memorizzano ciò che scrivi, nient'altro. Email, Telefono e URL impongono un formato valido.

**Durate** — Durata, che si visualizza come 1:30, 1:30:00 o 1h 30m, e Durata tracciata, che cronometra il tempo trascorso su ogni riga, per persona.

**Durata tracciata.** La cella mostra il tempo totale, in ore e minuti; l'opzione **Mostra i secondi** del campo aggiunge i secondi. Nella cella non c'è nulla da inserire: fai doppio clic su di essa (o premi Invio), oppure apri la scheda, per accedere al cronometro. **Avvia** apre un periodo, **Ferma** lo chiude; il totale visualizzato aumenta ogni secondo mentre il periodo è in corso, e il valore del campo viene aggiornato allo stop. I periodi sono elencati per persona, con il loro inizio. Ciascuno può eliminare solo i propri periodi (**Elimina questo periodo**), e il totale viene ricalcolato. C'è un solo periodo in corso per persona, per riga e per campo. Avviare e fermare il cronometro richiede il diritto di modifica dei record; con un ruolo di **Sola lettura**, il totale e i periodi restano visibili senza il pulsante.

**Valori vincolati** — Selezione singola, Selezione multipla, Utente. Le scelte sono definite a livello di campo.

**Relazioni** — Collegamento a un altro record, Ricerca, Riepilogo, Ricerca condizionale, Riepilogo condizionale. Vedi sotto.

**Calcolati** — Formula (oltre 200 funzioni), Numero automatico, ID riga, Ora di creazione, Ultima modifica, Creato da, Ultima modifica di. Non si inseriscono a mano.

**Attivi** — Allegato, Pulsante, Campo IA, Canvas. Il Campo IA genera il contenuto della cella a partire da altri campi. Il campo Canvas crea un documento per riga nella libreria dei documenti.

**Formati.** Valuta e Percentuale non sono tipi a sé: sono formati del tipo **Numero**, come **Anello** e **Barra**, due modi di visualizzare il valore. Allo stesso modo, **Data** e **Data e ora** sono due impostazioni del tipo **Data**.

Il campo principale della tabella, che identifica ogni record, accetta solo una parte dei tipi: per esempio né Allegato né Collegamento a un altro record.

## Collegare due tabelle

Il campo **Collegamento a un altro record** crea una relazione tra due tabelle: uno-a-uno, uno-a-molti, molti-a-uno o molti-a-molti. Il collegamento può essere unidirezionale o bidirezionale (**Crea un campo di collegamento reciproco nella tabella collegata**), e puntare a un'altra base. Una volta stabilita la relazione:

- una **Ricerca** riporta un campo della tabella collegata (il nome dell'azienda nella riga del contatto);
- un **Riepilogo** aggrega i record collegati con una funzione come **SOMMA** o **CONTA** (la somma dei deal di un account, il numero di attività di un progetto).

Una **Ricerca condizionale** e un **Riepilogo condizionale** non richiedono un collegamento: si sceglie una tabella, poi le condizioni che filtrano i suoi record (la somma dei deal con stato « Vinto »).

Questi campi si ricalcolano quando cambia il dato di origine.

## Formule

Le formule si scrivono a livello di campo e si applicano a tutte le righe. Le funzioni si dividono in sei famiglie: numeriche, testo, logiche, data e ora, array, sistema. Una formula può leggere i campi Ricerca e Riepilogo, ma non direttamente un campo di un'altra tabella.

```
IF(
  AND({Statut} = "Gagné", {Montant} > 10000),
  "Compte clé",
  "Standard"
)
```

Una formula non può produrre effetti collaterali: nessuna scrittura in un'altra tabella, nessuna chiamata di rete. Per questo serve un'[automazione](/it/docs/automations).

## Valore predefinito e convalida

Nel pannello di un campo, **Valore predefinito** precompila le nuove righe. È disponibile per i tipi Testo su una riga, Testo lungo, Numero, Durata, Telefono, Casella di controllo, Utente, Selezione singola e Selezione multipla. Il tipo Data propone invece **Compila automaticamente con la data attuale**.

Le **Regole di convalida dei valori del campo** sono due interruttori:

- **Solo valori unici**: per i tipi Testo su una riga, Testo lungo, Numero, Durata, Data, Email, Telefono e URL;
- **Obbligatorio**: per gli stessi tipi, più le selezioni, Utente, Valutazione, Durata tracciata, Allegato e Collegamento a un altro record. Questa regola si imposta modificando un campo esistente, non alla sua creazione.

Nessuna delle due si applica a un campo di tipo Ricerca.

## Cosa diventa in Postgres

Ogni base è uno schema PostgreSQL, ogni tabella una tabella fisica, ogni campo una colonna. Il proprietario della base può aprire un **Accesso Postgres in sola lettura** dalla pagina **Progettazione** della base, poi leggere i dati con `psql`, un ORM o uno strumento di BI. Questo accesso dà solo il diritto di lettura: ogni scrittura passa da TblFlow. Sull'offerta ospitata è riservato al piano Enterprise. Vedi [API e sviluppatori](/it/docs/api-developers).

## Limiti da conoscere

- Rinominare un campo cambia la sua etichetta, non il riferimento usato dalle formule, che si basa sull'identificatore interno del campo: non si rompe nulla.
- Cambiare il tipo di un campo converte i valori esistenti. Quando la conversione è lunga o tocca campi di collegamento, la finestra **Conferma la modifica del campo** mostra prima i campi interessati.
- Eliminare un campo apre una finestra che elenca i campi che ne dipendono. Il campo eliminato va nel cestino della tabella, dove puoi ripristinarlo con i suoi valori entro il periodo di conservazione. Vedi [Importazione, esportazione e cestino](/it/docs/import-export-trash).
