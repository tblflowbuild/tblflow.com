---
title: "Automazioni"
translationKey: "automations"
description: "Costruire un workflow TblFlow: trigger a evento e cron, fasi condizionali, chiamate in uscita e fasi di approvazione umana, con un registro delle esecuzioni riproducibile."
section: "Guide"
order: 3
---

Un'automazione è un workflow collegato a una base: un trigger, poi una sequenza di fasi. Viene eseguita lato server, anche quando nessuno ha la scheda aperta.

## Trigger

| Trigger | Si attiva quando |
| --- | --- |
| Record creato | una riga viene aggiunta alla tabella osservata |
| Record aggiornato | un campo osservato cambia valore |
| Record corrisponde a una condizione | una riga entra nell'ambito di un filtro |
| Cron | secondo la pianificazione indicata (espressione cron, fuso orario della base) |
| Webhook | una chiamata HTTP raggiunge l'URL generato |
| Manuale | qualcuno clicca su un campo Pulsante |

Limitare un trigger «aggiornato» ai campi che ti interessano davvero evita il classico ciclo: un'automazione che scrive nella tabella che osserva e si riattiva da sola.

## Fasi

Fasi disponibili: creare / aggiornare / eliminare un record, cercare record, inviare un'email, chiamare un URL, eseguire un ramo condizionale, iterare su un elenco, attendere, richiedere un'approvazione, chiamare un agente.

Ogni fase riceve l'output delle precedenti. Un valore si richiama con `{{step.field}}`, e l'editor propone i campi che esistono davvero in quel punto del workflow.

## Approvazione umana

La fase **Approvazione** mette in pausa l'esecuzione e avvisa le persone che indichi. Il workflow riprende quando viene accettata, si ferma quando viene rifiutata e scade dopo il timeout che imposti.

Mettila prima di qualsiasi cosa che parli con l'esterno: email a un cliente, chiamata API a pagamento, pubblicazione. Un'automazione che sbaglia internamente si può correggere; una che sbaglia presso un cliente è molto più difficile da rimediare.

## Registro delle esecuzioni

Ogni esecuzione viene conservata con il suo trigger, l'input e l'output di ogni fase e il motivo di un eventuale errore. Un'esecuzione fallita può essere rieseguita dal registro una volta corretta la causa, senza rieseguire le fasi già riuscite.

## Quote

Le esecuzioni mensili dipendono dal piano; sono illimitate dal piano Business in su e in self-hosting. Un'esecuzione corrisponde a un trigger, a prescindere dal numero di fasi che contiene.

## Automazione o agente?

Un'automazione esegue la sequenza che hai scritto: stesso input, stesso percorso, stesso risultato. È ciò che serve quando la regola è nota.

Un [agente](/it/docs/ai-agents) decide da solo le proprie fasi a partire da un obiettivo. È ciò che serve quando la regola dipende dal contenuto, per esempio nello smistamento di richieste in entrata eterogenee. I due si combinano: un'automazione può chiamare un agente come una fase tra le altre.
