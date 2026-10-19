---
title: "Mappa dei processi"
translationKey: "process-map"
description: "Crea la mappa dei processi di uno spazio, disegna i processi, leggi le rotture e i costi stimati, poi usa Sostituisci per far proporre a TblFlow un'alternativa."
section: "Guides"
order: 5
---

La mappa dei processi è una pagina del tuo spazio in cui disegni chi fa cosa e con quali strumenti, poi leggi le rotture e i costi stimati. Richiede il piano Pro o superiore.

## Aprire o creare la mappa

Ogni spazio ha al massimo una mappa dei processi. Ci arrivi dall'icona sul badge a destra dello spazio, dalla voce nel menu a sinistra o da una scorciatoia in ogni base.

Alla prima apertura, un clic crea la mappa. Scegli di crearla **con degli esempi** per esplorare, oppure **vuota** per partire dai tuoi processi. Poggia su una normale base dello spazio (processi, passaggi, strumenti, ruoli, responsabilità, oggetti di dati, passaggi di dati): sono vere tabelle PostgreSQL che puoi filtrare ed esportare.

## Descrivere i processi

Trascina per spostare la tela e usa la rotellina per ingrandire. Clicca su un passaggio per selezionarlo; doppio clic o Spazio ne apre la scheda. Invio crea il passaggio successivo, Tab un ramo, F2 lo rinomina.

Per fare più in fretta, importa un documento, rispondi alle domande dell'assistente o collega i tuoi strumenti di automazione. Ogni passaggio è affidato a una persona, a un'automazione o a un agente IA.

## Scegliere una lettura

Un selettore cambia la lettura senza cambiare la mappa:

- **Chi fa cosa**: l'esecutore e il responsabile di ogni passaggio.
- **Costi**: costo del personale (tariffa per ruolo), costo degli strumenti (abbonamenti, chiamate API, token IA), risparmi possibili e guadagno realizzato. Queste cifre sono **stime** che inserisci tu, non misurazioni. I costi del personale sono visibili solo al proprietario.
- **Rotture**: reinserimento manuale tra strumenti, dati senza fonte principale, oggetto usato senza produttore, passaggio senza responsabile, senza durata, isolato o senza seguito, automazione in errore.
- **Dati**: gli oggetti di dati e gli strumenti che li producono o li usano.

## Sostituire

Su un passaggio o su uno strumento, **Sostituisci** dà all'IA il contesto della mappa. Lei propone una sostituzione con TblFlow: uno strumento SaaS diventa una base con un'interfaccia, un connettore un'automazione, un passaggio umano un agente, l'inserimento dati su un sito web una riproduzione nel browser (Computer Use).

L'IA propone, poi crea elementi **inattivi**. Rileggili e attivali tu: finché non lo fai, non parte nulla.

## Condividere

Un link pubblico in sola lettura condivide la mappa, su richiesta. I campi sensibili riservati restano nascosti. Disattiva il link quando non ti serve più.
