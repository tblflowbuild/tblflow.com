---
title: "Server MCP"
translationKey: "mcp-server"
description: "Collega TblFlow a Claude con il server MCP ufficiale: strumenti disponibili, permessi, scelta degli spazi, limiti e risoluzione dei problemi."
section: "Guide"
order: 6
---

Il server MCP ufficiale di TblFlow permette a Claude di lavorare sui tuoi dati direttamente dalla conversazione. È un server MCP remoto su Streamable HTTP, con autenticazione OAuth 2.1 (il tuo accesso TblFlow abituale). È disponibile dal piano Gratuito, come l'API REST.

URL del server: `https://app.tblflow.com/mcp`

## Collegare

### Claude (web, desktop e mobile)

1. Apri **Impostazioni → Connettori → Aggiungi connettore personalizzato**.
2. Inserisci l'URL `https://app.tblflow.com/mcp`.
3. Accedi con il tuo account TblFlow.
4. Scegli gli spazi e le basi accessibili, poi i permessi.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## I 23 strumenti

Il server espone 23 strumenti, raggruppati così:

- **Esplorare**: elencare i tuoi spazi e le tue basi, le viste di una tabella e i membri di uno spazio.
- **Capire**: descrivere lo schema di una base, leggere la mappa dei processi di uno spazio.
- **Leggere**: elencare, filtrare e leggere i record.
- **Calcolare**: calcolare statistiche su una tabella (somma, media, minimo, massimo, conteggio), con filtro e raggruppamento, senza leggere tutte le righe.
- **Cercare**: cercare nel grafo della conoscenza, con ricerca semantica e full-text.
- **Creare e modificare**: creare e modificare i record.
- **Importare**: importare un CSV, in una tabella esistente o in una nuova tabella.
- **Eliminare e ripristinare**: eliminare record o un campo, con un'anteprima e poi una conferma esplicita; elencare il cestino e ripristinare ciò che è stato eliminato.
- **Strutturare**: creare una tabella, creare o rinominare un campo.
- **Automatizzare**: elencare le automazioni e gli agenti esposti, avviare un'automazione.
- **Delegare**: avviare un agente IA e seguire lo stato delle sue ultime esecuzioni.

## Permessi e scelta degli spazi

Al momento del collegamento scegli gli spazi e le basi accessibili e i permessi. La **lettura** è attiva per impostazione predefinita; **scrittura**, **eliminazione**, **schema** e **avvio** sono opzioni. I tuoi diritti TblFlow esistenti si applicano a ogni richiesta: Claude non può mai fare più di quanto puoi fare tu.

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
- **Un agente non si avvia**: l'IA deve essere configurata sulla base e l'agente deve essere stato esposto dal suo proprietario.
- **`run_automation` non modifica nulla**: è una prova a vuoto con dati di esempio. Nessun dato viene modificato.

## Dati e privacy

Il contenuto delle conversazioni non viene registrato nei log: vengono conservati solo lo strumento chiamato, l'ora, la durata e lo stato. I risultati degli strumenti vengono trasmessi all'assistente (Claude) per rispondere alla tua richiesta. I dettagli sono nell'[informativa sulla privacy](/it/privacy) e nella [pagina del server MCP](/it/mcp).
