---
title: "Mappa dei processi"
translationKey: "process-map"
description: "Crea la mappa dei processi di uno spazio, disegna i processi, leggi le rotture e i costi stimati, usa Sostituisci, poi segui le revisioni, misura i costi reali e riferisci alla direzione."
section: "Guide"
order: 5
---

La mappa dei processi è una pagina del tuo spazio in cui disegni chi fa cosa e con quali strumenti, poi leggi le rotture e i costi stimati. Richiede il piano Pro o superiore.

## Aprire o creare la mappa

Ogni spazio ha al massimo una mappa dei processi. Ci arrivi dall'icona sul badge a destra dello spazio, dalla voce nel menu a sinistra o da una scorciatoia in ogni base.

Alla prima apertura, un clic crea la mappa. Scegli di crearla **con degli esempi** per esplorare, oppure **vuota** per partire dai tuoi processi. Poggia su una normale base dello spazio (processi, fasi, strumenti, ruoli, responsabilità, oggetti di dati, passaggi di dati): sono vere tabelle PostgreSQL che puoi filtrare ed esportare.

## Descrivere i processi

Trascina per spostare la tela e usa la rotellina per ingrandire. Clicca su una fase per selezionarla; doppio clic o Spazio ne apre la scheda. Invio crea la fase successiva, Tab un ramo, F2 la rinomina.

Per fare più in fretta, importa un documento, rispondi alle domande dell'assistente o collega i tuoi strumenti di automazione. Ogni fase è affidata a una persona, a un'automazione o a un agente IA.

## Scegliere una lettura

Un selettore cambia la lettura senza cambiare la mappa:

- **Chi fa cosa**: l'esecutore e il responsabile di ogni fase.
- **Costi**: costo del personale (tariffa per ruolo), costo degli strumenti (abbonamenti, chiamate API, token IA), risparmi possibili e guadagno realizzato. Queste cifre sono **stime** che inserisci tu, non misurazioni. I costi del personale sono visibili solo al proprietario.
- **Rotture**: reinserimento manuale tra strumenti, dati senza fonte principale, oggetto usato senza produttore, fase senza responsabile, senza durata, isolata o senza seguito, automazione in errore.
- **Dati**: gli oggetti di dati e gli strumenti che li producono o li usano.

## Sostituire

Su una fase o su uno strumento, **Sostituisci** dà all'IA il contesto della mappa. Lei propone una sostituzione con TblFlow: uno strumento SaaS diventa una base con un'interfaccia, un connettore un'automazione, una fase umana un agente, l'inserimento dati su un sito web una riproduzione nel browser (Computer Use).

L'IA propone, poi crea elementi **inattivi**. Rileggili e attivali tu: finché non lo fai, non parte nulla.

## Seguire le revisioni

Ogni processo ha una **scheda procedura** (campo Canvas), un **responsabile**, una data dell'ultima revisione, una data della prossima revisione e uno **stato**. La documentazione e il diagramma vivono nello stesso posto, quindi si correggono insieme.

## Ricevere avvisi sulle procedure obsolete

Gli avvisi si attivano dal menu **Altre azioni** del canvas e richiedono una base V2. Ogni lunedì alle 7:00 (ora del server), un'email elenca i processi la cui prossima revisione è scaduta o cade entro 14 giorni. I processi archiviati vengono ignorati e non viene inviata alcuna email se non c'è nulla da rivedere. Per impostazione predefinita il destinatario è la persona che attiva gli avvisi; puoi cambiare i destinatari.

## Ricevere un report mensile

Il report mensile viene inviato per email il 1° del mese alle 8:00 (ora del server) e richiede anch'esso una base V2. Riporta il costo, il guadagno potenziale, i tre processi con il maggiore guadagno e il numero di revisioni in ritardo. Gli importi compaiono solo se il proprietario della base li attiva.

## Convalidare le fasi

Una fase può avere uno stato di convalida (**da convalidare**, **convalidata**, **da rivedere**), la persona che l'ha convalidata, la data e un commento. Un badge sulla fase, nel canvas, mostra lo stato a colpo d'occhio; il dettaglio compare al passaggio del mouse.

## Confrontare stimato e reale

Su ogni fase, inserisci delle **misurazioni**: minuti, volume, tasso di errore e fonte della misurazione. Il pannello **Stimato vs reale** confronta la stima con la misurazione, **solo sulle fasi misurate**, e mostra la quota di fasi misurate, così sai quanta fiducia dare al totale. Fornisce anche una lettura per processo e per fase, con un link alla fase nel canvas. I costi restano inserimenti fatti dal tuo team: TblFlow li confronta, non li misura.

## Confrontare prima e dopo

Prima di un cambiamento, **congela la mappa**: TblFlow crea una copia con la data nel nome. Una volta effettuato il cambiamento, apri **Prima / dopo** e confronta il **costo totale del mese** e il **numero di fasi** tra la copia e la mappa attuale.

## Seguire i miglioramenti

Il **registro dei miglioramenti** tiene traccia delle tue idee per stato, con le fasi collegate, il costo di implementazione e il guadagno atteso.

## Dove perdi denaro?

Questo percorso in sola lettura ordina i tuoi processi, poi le loro fasi, per guadagno potenziale: quota del guadagno totale, costo, rotture e un link diretto alla fase nel canvas. Per chi non ha il diritto di leggere gli importi, l'ordinamento è per numero di rotture e lo dice chiaramente.

## Presentare alla direzione

La **vista direzione** sta in una sola pagina in sola lettura, stampabile in PDF: costo, guadagno potenziale, i cinque processi in cui si perde di più, miglioramenti per stato e revisioni in ritardo.

## Partire da un processo tipo

La **libreria di processi tipo** propone 13 processi da importare uno alla volta, raggruppati per settore: fatturazione clienti, selezione del personale, reclami, acquisti, più serie per commercio, industria e logistica, e contabilità e area legale. Ogni processo arriva con le sue fasi concatenate, durate e frequenze di esempio, e ruoli senza tariffe: inserisci i tuoi costi. Importare due volte lo stesso processo non crea un duplicato. Per ora il contenuto importato è in francese.

## Aggiornare il modello

Le mappe esistenti passano al modello aggiornato tramite il banner **Aggiorna il modello**: TblFlow mostra un'anteprima delle modifiche e chiede conferma prima di applicare qualsiasi cosa.

## Condividere

Un link pubblico in sola lettura condivide la mappa. È **chiuso per impostazione predefinita**: attivalo su richiesta e disattivalo quando non ti serve più. I campi sensibili riservati restano nascosti, e gli importi e i campi di costo sono nascosti a chi non ha il diritto di leggerli. L'esportazione `.tbl` e la duplicazione vengono rifiutate se un campo non è leggibile per la persona che le richiede.
