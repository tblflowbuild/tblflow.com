---
title: "Server MCP"
translationKey: "mcp-server"
description: "Collegare TblFlow a Claude con il server MCP ufficiale: connessione, strumenti, permessi, spazi, automazioni esposte e risoluzione dei problemi."
section: "Guide"
order: 6
---

Il server MCP ufficiale di TblFlow permette a Claude di lavorare sui tuoi dati direttamente dalla conversazione. È un server MCP remoto in Streamable HTTP, con autenticazione OAuth 2.1 (il tuo accesso TblFlow abituale). È disponibile già dal piano Gratuito, come l'[API REST](/it/docs/api-developers).

URL del server: `https://app.tblflow.com/mcp`

## Collegarsi

### Claude (web, desktop e mobile)

1. Apri **Impostazioni → Connettori → Aggiungi connettore personalizzato**.
2. Inserisci l'URL `https://app.tblflow.com/mcp`.
3. Accedi con il tuo account TblFlow.
4. Scegli gli spazi e le basi accessibili, poi i permessi.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## I 27 strumenti

Il server espone 27 strumenti, raggruppati così:

- **Esplorare**: elencare i tuoi spazi e le tue basi (`list_workspaces`), le viste di una tabella (`list_views`) e i membri di uno spazio (`list_collaborators`, senza i loro indirizzi e-mail).
- **Capire**: descrivere lo schema di una base (`describe_base`), leggere la mappa dei processi di uno spazio (`get_process_map`).
- **Leggere**: elencare, filtrare e leggere i record, 100 al massimo per chiamata (`list_records`, `get_record`).
- **Calcolare**: calcolare statistiche su una tabella (`aggregate_records`), con filtro e raggruppamento, senza leggere tutte le righe. Funzioni: conteggio, vuoti, compilati, valori unici, minimo, massimo, somma, media, percentuali di vuoti, di compilati e di unici, data più vecchia e più recente.
- **Cercare**: cercare nel grafo della conoscenza, con ricerca semantica e full-text (`search_knowledge`).
- **Creare e modificare**: creare e modificare record, 50 al massimo per chiamata (`create_records`, `update_records`).
- **Importare**: importare un CSV di 2 MiB al massimo, in una tabella esistente o in una nuova tabella (`import_csv`). Per impostazione predefinita, una prima chiamata mostra solo le colonne, i tipi stimati e il numero di righe, senza scrivere nulla.
- **Eliminare e ripristinare**: eliminare record o un campo (`delete_records`, `delete_field`), con un'anteprima e poi una conferma esplicita; elencare il cestino di una tabella e ripristinare ciò che è stato eliminato (`list_trash`, `restore_records`).
- **Strutturare**: creare una tabella (`create_table`), creare un campo (`create_field`), modificare il nome, la descrizione e, per un campo Canvas, le opzioni del campo (`update_field`). Il tipo di un campo non cambia mai.
- **Documenti e schede Canvas**: leggere la scheda di una riga (`get_canvas_doc`), modificarla (`update_canvas_doc`), avviare la generazione delle schede di un campo Canvas per 25 righe al massimo per chiamata (`generate_canvas_docs`, che consuma crediti IA in modalità IA), e leggere un documento dello spazio (`get_doc`).
- **Automatizzare**: elencare le automazioni e gli agenti esposti (`list_exposed_actions`), eseguire a secco un'automazione (`run_automation`).
- **Delegare**: avviare un agente IA (`run_agent`, attesa di circa 100 secondi al massimo) e seguire lo stato delle sue ultime esecuzioni (`get_run_status`).

Ogni strumento chiama l'API REST con il tuo token: il server non apre alcun accesso in più.

## Risorse e prompt

Il server pubblica anche tre risorse in lettura e tre prompt pronti all'uso.

| Tipo | Nome | Contenuto |
|---|---|---|
| Risorsa | `tblflow://workspaces` | Spazi accessibili (30 al massimo) |
| Risorsa | `tblflow://bases/{baseId}` | Tabelle di una base |
| Risorsa | `tblflow://tables/{tableId}` | Campi di una tabella |
| Prompt | `summarize_table` | Descrivere una tabella e ricavarne i dati chiave, senza modificarla |
| Prompt | `audit_data_quality` | Individuare campi vuoti e probabili duplicati, senza correggere nulla |
| Prompt | `add_rows_safely` | Aggiungere record dopo aver verificato lo schema, e solo con il tuo accordo |

## Permessi e scelta degli spazi

Al collegamento, TblFlow mostra la schermata «richiede l'accesso al tuo account». Elenca i permessi richiesti, con queste etichette:

| Permesso | Etichetta mostrata |
| --- | --- |
| Lettura (predefinita) | Leggere i tuoi dati (spazi, tabelle, record, documenti) |
| Scrittura | Creare e modificare record |
| Eliminazione | Eliminare record (cestino) |
| Schema | Creare tabelle e campi |
| Avvio | Eseguire a secco le automazioni e avviare gli agenti che hai esposto |

Devi poi scegliere gli spazi e le basi accessibili all'applicazione. Uno spazio selezionato include tutte le sue basi. Se l'applicazione non è stata verificata da TblFlow, la schermata lo indica («Applicazione non verificata»): autorizza solo se hai avviato tu il collegamento e controlla l'host di reindirizzamento mostrato.

La **lettura** è attiva per impostazione predefinita; **scrittura**, **eliminazione**, **schema** e **avvio** sono opzioni. L'eliminazione comprende il ripristino dal cestino. L'importazione di un CSV in una tabella esistente richiede la scrittura; l'importazione che crea una tabella richiede lo schema. I tuoi diritti TblFlow esistenti si applicano a ogni richiesta: Claude non può mai fare più di quanto puoi fare tu.

## Esporre un'automazione o un agente

Un'automazione o un agente può essere avviato da Claude solo se il suo proprietario l'ha **esposto**. Oggi l'esposizione avviene tramite l'API: `PUT /api/base/:baseId/mcp-exposure`. Un interruttore nell'interfaccia è in arrivo.

## Limiti per piano

| Piano | Richieste al minuto |
| --- | --- |
| Gratuito | 60 |
| Essenziale | 120 |
| Team | 300 |
| Enterprise | 600 |

## Da un terminale

La [CLI di TblFlow](/it/docs/cli) fornisce anche un server MCP locale (`tblflow mcp serve`), per i client che avviano un processo sul tuo computer. Serve inoltre a importare un CSV o a esportare una tabella da riga di comando.

## Revocare l'accesso

Rimuovi il connettore nelle impostazioni di Claude: Claude smette di accedere ai tuoi dati TblFlow.

## Risoluzione dei problemi

- **Errore di autorizzazione**: ricollega il connettore, poi verifica che lo spazio o la base sia tra quelli che hai scelto, che il permesso necessario (scrittura, eliminazione, schema o avvio) sia attivo e che i tuoi diritti TblFlow lo consentano.
- **Un agente non si avvia**: l'IA deve essere configurata sulla base, e l'agente deve essere stato esposto dal suo proprietario.
- **`run_automation` non modifica nulla**: è una prova a secco con dati di esempio. Nessun dato viene modificato.

## Dati e privacy

Il contenuto delle conversazioni non viene registrato: vengono conservati solo lo strumento chiamato, l'ora, la durata e lo stato. I risultati degli strumenti vengono trasmessi all'assistente (Claude) per rispondere alla tua richiesta. I dettagli sono nell'[informativa sulla privacy](/it/privacy) e nella [pagina del server MCP](/it/mcp).
