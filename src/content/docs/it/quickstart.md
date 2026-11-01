---
title: "Guida rapida"
translationKey: "quickstart"
description: "Crea la tua prima base TblFlow, importa i dati, apri una seconda vista e condividila con il tuo team, in cinque minuti e senza scrivere una riga di SQL."
section: "Per iniziare"
order: 1
---

Questa pagina ti porta da un account vuoto a una base in cui il tuo team può lavorare. Calcola cinque minuti.

## 1. Crea una base

Dalla dashboard, **Nuova base**. Una base è uno spazio di lavoro: contiene più tabelle, le proprie viste, automazioni e agenti. Sotto il cofano, è uno schema PostgreSQL dedicato.

Tre modi per iniziare:

- **Tabella vuota** — definisci tu i campi.
- **Importazione** — CSV, Excel, oppure incolla direttamente da un foglio di calcolo. I tipi di campo vengono dedotti dai dati e puoi correggerli prima di confermare.
- **Descrizione in linguaggio naturale** — descrivi ciò che monitori («una pipeline di vendita con contatti, aziende e trattative») e l'assistente propone uno schema. Nulla viene creato finché non accetti la proposta.

## 2. Scegli bene i tipi di campo

Il tipo di campo è ciò che distingue un database da un foglio di calcolo. Dedicagli un minuto: formule, filtri e automazioni dipendono da esso.

| Di cosa hai bisogno | Tipo di campo |
| --- | --- |
| Un valore tra un insieme fisso | Selezione singola |
| Un collegamento a un'altra tabella | Record collegato |
| Un valore preso dalla tabella collegata | Lookup |
| Un'aggregazione sui record collegati | Rollup |
| Un calcolo per riga | Formula |

Tutti i 28 tipi sono disponibili in ogni piano, self-hosting compreso.

## 3. Apri una seconda vista

Una vista è una lettura della tabella, non una copia. Cambiare vista non duplica nulla.

Su una tabella con un campo di stato, aggiungi una vista **Kanban** raggruppata per quello stato. Su una tabella con date, aggiungi una vista **Calendario** o **Gantt**. Filtri, ordinamenti e raggruppamenti appartengono alla vista: la vista «Le mie attività in ritardo» di un collega non modifica la tua.

## 4. Invita il tuo team

**Condividi**, in alto a destra. I permessi si impostano a livello di base (proprietario, editor, commentatore, lettore) e possono essere ristretti per tabella e per campo.

La modifica è collaborativa in tempo reale: due persone possono lavorare nella stessa tabella contemporaneamente, con cursori e modifiche visibili subito.

## Prossimi passi

- [Tabelle e campi](/it/docs/tables-and-fields) — i tipi di campo nel dettaglio.
- [Automazioni](/it/docs/automations) — avvia azioni sui tuoi dati.
- [Agenti IA](/it/docs/ai-agents) — delega il lavoro ricorrente.
