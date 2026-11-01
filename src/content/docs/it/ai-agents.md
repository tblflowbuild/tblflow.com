---
title: "Agenti IA"
translationKey: "ai-agents"
description: "Configurare un agente TblFlow: provider del modello, ambito degli strumenti, memoria a grafo persistente, pianificazione e proposte da approvare prima di qualsiasi scrittura."
section: "Guide"
order: 4
---

Un agente è un lavoratore autonomo collegato a una base. Ha un obiettivo, un ambito di strumenti, una memoria, e produce proposte anziché scritture dirette.

## Scegliere il provider del modello

Il modello si configura per base, con le tue chiavi API: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, qualsiasi endpoint compatibile con OpenAI, oltre ai modelli locali tramite Ollama e LM Studio.

In self-hosting con un modello locale, nessun dato della base lascia la tua infrastruttura.

## Definire l'ambito

L'ambito è la parte che conta per la sicurezza. Un agente riceve solo gli strumenti che corrispondono al suo intento dichiarato: tabella, interfaccia, automazione, agente, app, dati di test. Gli altri strumenti non fanno parte del suo schema, quindi non può chiamarli, e ogni strumento ricontrolla la propria autorizzazione al momento dell'esecuzione.

Limita anche le tabelle raggiungibili. Un agente di smistamento del supporto non ha motivo di raggiungere la tabella degli stipendi.

## Proposte

Quando un agente vuole modificare la struttura o i dati, emette una **proposta**: un'anteprima della modifica, con un id. Non viene scritto nulla finché non la accetti.

Puoi autorizzare le scritture dirette su tabelle specifiche per lavori a basso rischio (arricchire un campo, applicare un'etichetta). Decidilo tabella per tabella, mai in modo globale.

## Memoria

La memoria di un agente è un grafo di entità e relazioni estratte dalle sue esecuzioni passate, non un registro di conversazione. Ogni attività ricarica solo i frammenti pertinenti: l'agente ricorda senza che il costo di contesto cresca senza limiti.

La memoria è ispezionabile e modificabile. Quando un agente ha imparato qualcosa di sbagliato, correggi la voce anziché il prompt.

## Pianificazione

Un agente può essere eseguito su richiesta, secondo una pianificazione (cron), oppure essere chiamato come fase di un'[automazione](/it/docs/automations). Le esecuzioni mensili degli agenti dipendono dal piano.

## Pratiche che reggono

- Un solo obiettivo per agente. Un agente che «gestisce il CRM» fallisce in modo diffuso; tre agenti mirati falliscono in modo leggibile.
- Parti con proposte per tutto e passa alle scritture dirette solo dopo aver visto che aspetto hanno i suoi errori.
- Conserva il registro: ogni esecuzione mantiene il suo piano, le sue chiamate agli strumenti e le sue scritture.
