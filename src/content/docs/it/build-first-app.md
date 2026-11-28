---
title: "Crea la tua prima app"
translationKey: "first-app"
description: "Crea un'app aziendale da una base TblFlow, generata dall'IA o costruita nell'editor, poi pubblicala con accesso pubblico o riservato agli invitati."
section: "Guide"
order: 5
---

Una base TblFlow non si consulta solo nella griglia: può essere pubblicata come una vera applicazione, con le sue pagine, un link pubblico o riservato agli invitati e un nome di dominio tutto tuo. Questa pagina illustra i due modi per costruirne una.

## Opzione 1 — descriverla all'IA

Nel pannello di chat della base, scegli la modalità **Applicazione completa**, poi descrivi ciò che vuoi: «Un CRM con una dashboard, l'elenco degli account e la pipeline delle opportunità in Kanban». La generazione procede per fasi: prima le tabelle e le loro relazioni, poi l'interfaccia, le automazioni, le viste e dati di esempio, infine un agente IA. Ogni fase produce proposte che accetti prima di passare alla successiva, e puoi modificare la proposta in corso finché nessuna è stata accettata. Non viene pubblicato nulla finché non clicchi su **Pubblica**.

## Opzione 2 — costruirla nell'editor

Nella base, il menu di creazione propone **Nuova app** (se la chat IA è attiva e puoi creare applicazioni). L'editor si apre con tre schede, **Anteprima**, **Codice** e **Log**, e la chat IA a destra: descrivi lì la tua applicazione, poi affinala.

Cliccare su un blocco dell'anteprima lo riferisce nella chat. **Modifica il testo direttamente** corregge un testo visualizzato senza passare da una richiesta. **Cronologia** elenca le versioni dell'applicazione; **Ripristina questa versione** torna a quella selezionata.

## Pubblicare

Il pulsante **Pubblica**, in cima all'editor, apre il pannello **Pubblicazione dell'app**. Propone due modalità di accesso, a scelta:

- **Su invito — persone invitate e membri della base** (proposta per impostazione predefinita). Ogni persona accede con il proprio account TblFlow, senza password: tramite link magico o chiave di sicurezza.
- **Pubblica — chiunque abbia il link.** Viene richiesta una conferma: chiunque riceva il link apre l'app, senza account, e vede i dati che essa mostra.

**Consenti la scrittura dei dati** è disattivato per impostazione predefinita. Un'app in sola lettura non può rompere nulla; attivalo solo se i visitatori devono davvero creare o modificare record dall'app.

Cliccare su **Pubblica — genera il link** produce subito un URL. Non esistono password di condivisione né un account visitatore proprio dell'applicazione. Gli invitati, la personalizzazione della pagina, la rimozione della pubblicazione e il dominio personalizzato sono descritti in [Condivisione e pubblicazione](/it/docs/sharing-publishing).

## Il codice resta tuo

Un'applicazione pubblicata è vero codice React e Tailwind, non una scatola nera: **Codice → Esporta il codice** ne recupera l'intero contenuto. Al contrario, **Importa codice** permette di ripartire da una base esistente per adattarla a mano dopo una generazione IA.

## E poi

- [Automazioni](/it/docs/automations) — collegare workflow alle azioni dei visitatori.
- [Agenti IA](/it/docs/ai-agents) — delegare un'attività ricorrente invece di esporla nell'app.
- [Tabelle e campi](/it/docs/tables-and-fields) — rivedere la struttura dei dati prima di pubblicarla.
- [Condivisione e pubblicazione](/it/docs/sharing-publishing) — inviti, dominio personalizzato, link di vista e di base.
