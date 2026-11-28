---
title: "Agenti IA"
translationKey: "ai-agents"
description: "Configurare un agente TblFlow: modello, strumenti attivi, memoria, trigger, approvazione delle scritture da una persona, skill e quote per piano."
section: "Guide"
order: 4
---

Un agente è un esecutore collegato a una base. Ha istruzioni, un insieme di strumenti, una memoria e, per impostazione predefinita, ciascuna delle sue scritture attende il tuo accordo.

Il profilo di un agente si organizza in cinque schede: **Istruzioni**, **Lavori**, **Competenze**, **Conoscenza** e **Memoria**.

## Scegliere il modello

I fornitori e le loro chiavi si configurano per spazio, in **Impostazioni IA dello spazio**. Solo un proprietario dello spazio può modificarli. Le chiavi sono cifrate a riposo e non compaiono più in chiaro dopo il salvataggio.

Tra i fornitori disponibili: OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, qualsiasi endpoint compatibile con OpenAI, oltre ai modelli locali tramite Ollama e LM Studio. Le chiavi che aggiungi si sommano a quelle dell'istanza, a meno che tu non disattivi **Usa i modelli dell'istanza come predefiniti**.

Nel profilo di un agente, il selettore **Modello** permette di assegnargli un modello proprio. Senza scelta, l'agente usa il modello di chat predefinito della configurazione IA.

## Definire il perimetro

Il perimetro di un agente dipende da tre elementi.

- **La sua base.** Un agente non legge né scrive nelle tabelle di un'altra base: una tabella che non si trova nella sua base viene rifiutata.
- **I suoi strumenti.** La scheda **Competenze** elenca le azioni che l'agente può compiere. Uno strumento disattivato non viene proposto al modello, che quindi non può richiamarlo. La maggior parte degli strumenti su record, tabelle e commenti è attiva per impostazione predefinita. Gli strumenti che agiscono verso l'esterno o producono file sono disattivati per impostazione predefinita e si attivano uno alla volta: ricerca sul Web, generazione di file Excel, Word, PowerPoint e PDF, esecuzione di una skill o di codice, e-mail, Slack, Microsoft Teams, GitHub, calendario, Drive e SharePoint, riproduzione di una skill browser. La delega ad altri agenti è attiva per impostazione predefinita solo per un agente orchestratore.
- **Le sue connessioni.** Gli account collegati in **Connettori** servono ai tuoi agenti. Quando nessuno avvia l'agente (orario, trigger), vengono usati gli account del suo creatore. Puoi anche aggiungere all'agente dei server MCP.

Per limitare ciò che l'agente può raggiungere, rimuovi gli strumenti di cui non ha bisogno. Un agente di smistamento del supporto non ha alcun motivo per inviare e-mail o eliminare record.

## Approvazione delle scritture

L'impostazione **Approvazione delle scritture** è attiva per impostazione predefinita, agente per agente. Finché è attiva, uno strumento con effetto reale non viene eseguito: l'agente si mette in attesa e chiede il tuo accordo. Riguarda in particolare la creazione, la modifica e l'eliminazione di record, la creazione di tabelle, campi e viste, i commenti, l'invio di e-mail o messaggi, l'avvio di un'automazione, l'esecuzione di codice o di una skill, e la scrittura in memoria.

Rispondi con **Approva** o **Rifiuta** (con un motivo facoltativo). Le richieste in sospeso si trovano nella pagina **Approvazioni** della base, raggiungibile dal link **Vedi le approvazioni in sospeso**. Senza risposta, la richiesta scade dopo 7 giorni e l'azione non viene eseguita.

Disattiva questa impostazione solo dopo aver osservato gli errori dell'agente. Una volta disattivata, l'agente scrive da solo, e questo per tutte le sue scritture: l'impostazione non si regola tabella per tabella.

## Memoria

La scheda **Memoria** attiva o disattiva la memoria dell'agente, che comprende due sezioni:

| Sezione | Contenuto |
| --- | --- |
| Recenti | ricordi a breve termine del lavoro recente, conservati per 7 giorni; vengono trattenuti i 50 più recenti e i 5 più recenti vengono forniti all'agente all'inizio di un'attività |
| Preferenze | istruzioni date dalle persone, sotto forma di chiave e valore, fornite all'agente a ogni attività |

Quando l'agente memorizza un'informazione, entità e relazioni possono essere estratte in un grafo dello spazio, che l'agente interroga con lo strumento **Cerca nella memoria**. La memoria quindi non è uno storico delle conversazioni: gli scambi sono conservati a parte, nello storico.

**Vedi i ricordi** apre l'elenco dei ricordi dell'agente. Gli editor della base possono **Correggere** o **Elimina** un ricordo: se l'agente ha memorizzato qualcosa di falso, si corregge la voce anziché le istruzioni.

## Skill

Una skill è un blocco di istruzioni con un nome, eventualmente accompagnato da uno script, che un agente può usare. Può essere personale (account) oppure condivisa nello spazio. Le skill disponibili per un agente sono quelle del suo creatore e quelle dello spazio; ciascuna è disattivata per impostazione predefinita e si attiva per l'agente nella scheda **Competenze**. L'esecuzione dello script di una skill passa dallo strumento **Esegui lo script di una skill**, anch'esso disattivato per impostazione predefinita.

## Trigger

La scheda **Lavori** indica quando l'agente si esegue.

| Trigger | Funzionamento |
| --- | --- |
| Menzione | l'agente analizza e risponde quando lo si menziona su un record (interruttore) |
| Messaggio privato | l'agente risponde ai messaggi che gli invii (interruttore) |
| **Avvia l'agente** | esecuzione su richiesta |
| Pianificato | a un orario ricorrente, o secondo un'espressione cron personalizzata; un intervallo inferiore a 15 minuti viene rifiutato per impostazione predefinita |
| Automatizzato | alla creazione o alla modifica di un record di una tabella |
| Webhook in entrata | una chiamata HTTP avvia l'agente |

Un trigger su record agisce solo se l'approvazione delle scritture è disattivata: finché è richiesta, resta inattivo, perché durante un avvio automatico nessuna persona può essere interpellata. Un orario o un webhook, invece, funzionano con l'approvazione: la richiesta di accordo arriva tra le approvazioni.

## Quote

Ogni esecuzione di un agente viene conteggiata nel mese, che sia avviata a mano, pianificata o attivata da un trigger.

| Piano | Esecuzioni di agente al mese |
| --- | --- |
| Gratuito | 100 |
| Essenziale | 5.000 |
| Team | 50.000 |
| Enterprise | illimitate |

In self-hosting, questi limiti non vengono applicati. L'uso dell'IA è inoltre soggetto ad altri limiti propri del piano. Le quote delle [automazioni](/it/docs/automations) sono conteggiate a parte.

## Storico

Ogni esecuzione viene conservata come una conversazione, con le chiamate agli strumenti dell'agente, i loro parametri e i loro risultati. Lo storico delle conversazioni è consultabile dalla chat dell'agente.

## Buone pratiche

- Un obiettivo per agente. Un agente «che gestisce il CRM» fallisce in modo diffuso; tre agenti mirati falliscono in modo leggibile.
- Lascia l'approvazione delle scritture attiva all'inizio, e disattivala solo dopo aver visto la natura dei suoi errori.
- Attiva solo gli strumenti necessari alla missione dell'agente.
