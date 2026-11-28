---
title: "Guida rapida"
translationKey: "quickstart"
description: "Crea la tua prima base TblFlow, importa i dati, apri una vista e condividi tutto con il tuo team in cinque minuti, senza scrivere una riga di SQL."
section: "Guide"
order: 1
---

Questa pagina ti porta da un account vuoto a una base condivisa con il tuo team. Ci vogliono cinque minuti.

## 1. Crea una base

In uno spazio, clicca su **Crea una base**. Una base raggruppa tabelle, automazioni e agenti; ogni tabella ha le proprie viste. Sotto il cofano, ogni base è uno schema PostgreSQL dedicato.

Una finestra ti chiede cosa vuoi costruire:

- **Descrivi l'app** — scrivi ciò che vuoi monitorare («uno strumento per gestire i calendari dei corsi di un centro di formazione»), poi clicca su **Genera l'app**. L'IA propone uno schema, delle viste, un'interfaccia e delle automazioni, che convalidi passo dopo passo. Serve un'IA configurata per lo spazio: altrimenti il pulsante diventa **Collega l'IA per generare** e porta alle impostazioni. Vedi [Chat IA](/it/docs/ai-chat).
- **Parti da una base vuota** — la base viene creata senza generazione IA; aggiungi le tabelle in seguito.

In uno spazio che non contiene ancora alcuna base, puoi anche **Usa modello**. Il modello **Gestione progetto** fa parte della galleria fornita con TblFlow: crea le tabelle Progetti, Attività (con sottoattività e dipendenze), Sprint e Persone, delle viste Kanban, Gantt e calendario, una vista **Dashboard** (griglia raggruppata per stato, con totali) e due automazioni che impostano o cancellano la data «Terminata il» di un'attività. Sono forniti un progetto, uno sprint e cinque attività di esempio; vanno adattati o eliminati. Un file **.tbl**, esportato da un'altra base, si reimporta nello spazio con **Importa**. Vedi [Importazione, esportazione e cestino](/it/docs/import-export-trash).

### Aggiungere una tabella

Nella barra laterale della base, il pulsante di aggiunta propone:

- **Nuova tabella** — definisci tu i campi;
- **Crea con l'IA** — descrivi la tabella, compare un'anteprima, e non viene creato nulla finché non clicchi su **Crea**;
- **Aggiungi da altre fonti** — importazione di un file CSV, TSV o Excel, oppure di un link a un file (**Link (URL)**). I tipi di campo vengono dedotti dai dati (opzione **Selezione automatica dei tipi di campo**) e puoi correggerli prima dell'importazione. Le celle copiate da un foglio di calcolo possono anche essere incollate in una vista a griglia.

## 2. Struttura i campi

Il tipo di campo è ciò che distingue una base da un foglio di calcolo. Prenditi il tempo di sceglierlo bene: il resto (formule, filtri, automazioni) ne dipende.

| Esigenza | Tipo da usare |
| --- | --- |
| Un valore tra un insieme fisso | Selezione singola |
| Un collegamento a un'altra tabella | Collegamento a un altro record |
| Un valore preso dalla tabella collegata | Ricerca |
| Un aggregato sui record collegati | Riepilogo |
| Un calcolo riga per riga | Formula |

I tipi di campo non dipendono dal tuo piano. Vedi [Tabelle e campi](/it/docs/tables-and-fields).

## 3. Apri una seconda vista

Una vista è una lettura della tabella, non una copia. Cambiare vista non duplica alcun dato.

Su una tabella con un campo di stato, aggiungi una vista **Kanban** raggruppata su questo stato. Su una tabella con date, aggiungi una vista **Calendario** o **Gantt**. Filtri, ordinamenti e gruppi vengono salvati in ogni vista. Per impostazione predefinita una vista è collaborativa: se un collega modifica il filtro di «I miei fascicoli in ritardo», tutti vedono la modifica. Il pulsante **Personale** limita le tue impostazioni a te solo. Vedi [Viste, filtri e schede](/it/docs/views-and-filters).

## 4. Invita il team

Il pulsante **Invita** della barra laterale della base apre la condivisione; è riservato ai ruoli che possono modificare la base. Ogni persona riceve un ruolo: creatore, editor, commentatore o lettore su una base (il ruolo di proprietario si imposta a livello di spazio). Su una base o una tabella si possono anche impostare ruoli personalizzati. Per pubblicare o condividere una vista all'esterno, vedi [Condivisione e pubblicazione](/it/docs/sharing-publishing). Vedi [Permessi e ruoli](/it/docs/permissions).

La modifica è collaborativa in tempo reale: due persone possono modificare la stessa tabella contemporaneamente, e la cella attiva di ciascun partecipante viene segnalata nella griglia.

## E poi

- [Tabelle e campi](/it/docs/tables-and-fields) — i tipi di campo nel dettaglio.
- [Automazioni](/it/docs/automations) — attivare azioni sui tuoi dati.
- [Agenti IA](/it/docs/ai-agents) — delegare attività ricorrenti.
- [Connettori](/it/docs/connectors) — collegare i tuoi strumenti.
- [API e sviluppatori](/it/docs/api-developers) — accedere ai dati via programma.
- [Account e sicurezza](/it/docs/account-security), [Impostazioni dello spazio](/it/docs/space-settings) e [Piani e limiti](/it/docs/plans-limits).
