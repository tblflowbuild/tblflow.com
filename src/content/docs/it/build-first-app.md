---
title: "Crea la tua prima app"
translationKey: "first-app"
description: "Pubblica un'app aziendale a partire da una base TblFlow: generata dall'IA o costruita a mano, con autenticazione dei visitatori, controllo delle scritture e link pubblico."
section: "Guide"
order: 5
---

Una base TblFlow non si consulta solo nella griglia: può essere pubblicata come una vera applicazione, con le sue pagine, la sua autenticazione e il suo dominio. Questa pagina illustra entrambi i modi per crearne una.

## Opzione 1 — descrivila all'IA

Nel pannello chat della base, scegli **Applicazione completa**, poi descrivi ciò che vuoi: «Un CRM con una dashboard, l'elenco degli account e la pipeline delle opportunità come Kanban». L'IA propone una struttura di pagine e blocchi a partire dalle tue tabelle esistenti. Nulla viene pubblicato finché non approvi la proposta e non clicchi su **Pubblica**.

È il percorso più rapido, e quello che la homepage di TblFlow illustra nel dettaglio in «Pipeline di generazione».

## Opzione 2 — costruiscila a mano

Dalla base, **Nuova interfaccia**. Un'interfaccia è composta da pagine, e ogni pagina da blocchi: metriche numeriche, un elenco o una griglia collegati a una tabella, una casella di ricerca, un Kanban. Ogni blocco punta a una tabella o a una vista esistente, quindi non duplichi i dati: li metti in scena.

Aggiungi un blocco, scegli la sua fonte (una tabella o una vista specifica, compresa una vista Kanban o Calendario già filtrata), poi regola il layout. La navigazione a sinistra si costruisce pagina dopo pagina, nell'ordine in cui le crei.

## Pubblicazione

Il pulsante **Pubblica**, in alto nell'interfaccia, apre tre impostazioni:

- **Password** — se lasciata vuota, l'app è raggiungibile da chiunque abbia il link. Se impostata (o generata), la password è richiesta per entrare.
- **Consenti le scritture sui dati** — disattivato per impostazione predefinita. Un'app in sola lettura non può rompere nulla; attivalo solo se i visitatori hanno davvero bisogno di creare o modificare record dall'app.
- **Account visitatore** — attiva un sistema di account email + password limitato a questa applicazione, isolato dagli account TblFlow. È ciò che permette a un cliente esterno di accedere al proprio spazio senza mai toccare il tuo account TblFlow.

Cliccando su **Pubblica — genera il link pubblico** si ottiene subito un URL funzionante. Il piano Business aggiunge un dominio personalizzato.

## Il codice resta tuo

Un'app pubblicata è vero codice React e Tailwind, non una scatola nera: **Codice → Esporta il codice** lo recupera per intero. Viceversa, **Importa il codice** permette di partire da una base esistente per ritoccarla a mano dopo una generazione IA.

## Prossimi passi

- [Automazioni](/it/docs/automations) — collega i workflow a ciò che fanno i tuoi visitatori.
- [Agenti IA](/it/docs/ai-agents) — delega un'attività ricorrente invece di esporla nell'app.
- [Tabelle e campi](/it/docs/tables-and-fields) — rivedi la struttura dei dati prima di pubblicarli.
