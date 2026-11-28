---
title: "Automazioni"
translationKey: "automations"
description: "Creare un'automazione TblFlow: trigger su record, modulo, orario, webhook o e-mail, fasi condizionali, test a vuoto e cronologia delle esecuzioni."
section: "Guide"
order: 3
---

Un'automazione è un workflow collegato a una base: un trigger, poi una sequenza di fasi. Viene eseguita lato server, anche quando nessuno ha la scheda aperta.

Puoi crearla con **Nuova automazione**, oppure descrivendo ciò che vuoi con **Genera con l'IA**: l'IA propone una configurazione che rileggi e modifichi nell'editor. Un interruttore attiva o disattiva l'automazione. Non può essere attivata finché il suo trigger non è configurato.

## Trigger

| Trigger | Si attiva quando |
| --- | --- |
| **Quando un record viene creato** | una riga viene aggiunta alla tabella scelta |
| **Quando un record viene modificato** | una riga della tabella scelta viene modificata |
| **Quando un record corrisponde alle condizioni** | una riga soddisfa tutte le condizioni impostate (campo, operatore, valore) |
| **Quando un record viene eliminato** | una riga viene eliminata |
| **Quando un modulo viene inviato** | un modulo della tabella viene inviato (una vista modulo precisa, oppure tutti) |
| **Quando un pulsante viene cliccato** | qualcuno clicca un campo Pulsante della tabella (un campo preciso, oppure tutti) |
| **All'orario programmato** | all'intervallo scelto: minuti, ore, giorni, settimane o mesi |
| **Quando viene ricevuto un webhook** | una chiamata HTTP arriva sull'URL mostrato nell'editor |
| **Quando arriva una nuova email** | una nuova email non letta arriva nella casella di posta di un account Gmail collegato |
| **Nuovo elemento in un connettore** | un nuovo elemento compare in un elenco di un connettore |
| **Da un'interfaccia** | un'interfaccia generata dalla base avvia l'automazione |

Alcuni dettagli:

- **Orario.** Le automazioni programmate vengono eseguite nel fuso orario dello spazio, oppure in UTC se lo spazio non ne ha uno. Un intervallo inferiore a 15 minuti viene rifiutato per impostazione predefinita.
- **Webhook.** La chiamata è un `POST` e deve includere l'intestazione `X-Webhook-Secret`. Il segreto si imposta nell'editor; senza un segreto valido, la chiamata viene rifiutata. Il corpo ricevuto è leggibile direttamente alla radice delle variabili.
- **Email ricevuta.** Solo le nuove email non lette della casella di posta attivano l'automazione; quelle già presenti all'attivazione vengono ignorate. L'account Gmail si collega nella schermata **Connettori**.
- **Catene di trigger.** Una fase che scrive nella tabella che sta osservando può riattivare l'automazione. Il motore interrompe una catena del genere oltre cinque generazioni successive, ma è meglio progettare l'automazione in modo da non dipendere da essa.

## Fasi

Il menu **Aggiungi una fase** raggruppa le fasi in tre famiglie.

| Famiglia | Fasi |
| --- | --- |
| Costruire con l'IA | **Esegui uno script**, **Slack**, **Microsoft Teams**, **Invia un'email**, **Generazione IA**, **Crea, aggiorna e leggi record**, **Invia una richiesta HTTP** |
| Costruire manualmente | **Crea un record**, **Leggi record**, **Aggiorna un record**, **Crea o aggiorna in base a una chiave**, **Esegui il campo IA**, **Sincronizza ora**, **Controlla un sito web** |
| Logica | **Se le condizioni sono soddisfatte** (rami **Allora** e **Altrimenti**), **Ciclo (per ogni)** |

Il pulsante **Collega un'API** aggiunge una fase **Chiama un'API collegata**, che esegue un'operazione di un'API di terze parti collegata tramite la sua documentazione OpenAPI.

L'editor non ha una fase di eliminazione di record, né una fase di attesa o di approvazione umana. Per un accordo umano prima di una scrittura, usa un [agente](/it/docs/ai-agents) con la convalida delle scritture.

Ogni fase legge i dati del trigger e l'output delle fasi precedenti. Il pulsante **Inserisci una variabile** propone i valori realmente disponibili in quel punto del workflow. Le forme di base sono `{{record.fields.<identificatore del campo>}}` per il record del trigger e `{{steps.<identificatore della fase>.<percorso>}}` per l'output di una fase. Un filtro aggiunto dopo `|` trasforma un valore (data, numero, elenco, valore predefinito, maiuscole/minuscole). Una fase in errore interrompe l'esecuzione: le fasi successive non vengono eseguite.

La fase **Invia un'email** può partire da un account Gmail collegato; se non ne è scelto alcuno, l'invio passa dal servizio di invio di TblFlow.

## Test

**Esegui il test** simula l'automazione a vuoto, con dati di esempio per il trigger. Una finestra mostra il risultato di ogni fase. Il messaggio «Questa è una simulazione — nessun dato reale è stato modificato» lo ricorda. Il test compare nella cronologia con lo stato **Test**.

## Cronologia delle esecuzioni

Il pulsante **Cronologia delle esecuzioni** elenca le esecuzioni dell'automazione, le più recenti per prime. Ognuna indica il suo stato (**Successo**, **Errore**, **In corso** o **Test**), la durata, l'ora di inizio, il trigger e, per ogni fase, il tipo, lo stato e una nota. La cronologia conserva le ultime 50 esecuzioni. Non esiste una riesecuzione dalla cronologia: dopo una correzione, rilancia l'automazione tramite il suo trigger.

## Quote

Il numero di esecuzioni al mese dipende dal piano. Un'esecuzione viene conteggiata a ogni attivazione, indipendentemente dal numero di fasi. Le email inviate dalle automazioni vengono conteggiate a parte.

| Piano | Esecuzioni al mese | Email di automazione al mese |
| --- | --- | --- |
| Gratuito | 500 | 50 |
| Essenziale | 25.000 | 2.000 |
| Team | 250.000 | 20.000 |
| Enterprise | illimitate | illimitate |

In self-hosting questi limiti non vengono applicati. Le quote degli agenti sono descritte nella pagina [Agenti IA](/it/docs/ai-agents).

## Automazione o agente?

Un'automazione esegue la sequenza di fasi che hai scritto: stesso input, stesso percorso, stesso risultato. È ciò che serve quando la regola è nota.

Un [agente](/it/docs/ai-agents) decide da solo le fasi a partire da un obiettivo. È ciò che serve quando la regola dipende dal contenuto, per esempio nello smistamento di richieste in entrata eterogenee. I due si combinano: un agente può elencare e avviare le tue automazioni con i suoi strumenti, nel rispetto della convalida delle scritture.
