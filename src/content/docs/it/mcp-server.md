---
title: "Server MCP"
translationKey: "mcp-server"
description: "Collega TblFlow a Claude con il server MCP ufficiale: collegamento, strumenti disponibili, permessi e scelta degli spazi, esposizione di automazioni e agenti, limiti e risoluzione dei problemi."
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

## I 13 strumenti

Il server espone 13 strumenti, raggruppati così:

- **Esplorare**: elencare i tuoi spazi e le tue basi.
- **Capire**: descrivere lo schema di una base.
- **Leggere**: elencare, filtrare e leggere i record.
- **Cercare**: cercare nel knowledge graph, con ricerca semantica e full-text.
- **Creare e modificare**: creare e modificare i record.
- **Eliminare**: eliminare i record, con un'anteprima e poi una conferma esplicita. I record vanno nel cestino.
- **Strutturare**: creare una tabella o un campo.
- **Automatizzare**: avviare un'automazione.
- **Delegare**: avviare un agente IA.

## Permessi e scelta degli spazi

Al momento del collegamento scegli gli spazi e le basi accessibili e i permessi. La **lettura** è attiva per impostazione predefinita; **scrittura**, **eliminazione**, **schema** e **avvio** sono opzioni. I tuoi diritti TblFlow esistenti si applicano a ogni richiesta: Claude non può mai fare più di quanto puoi fare tu.

## Esporre un'automazione o un agente

Un'automazione o un agente può essere avviato da Claude solo se il suo proprietario l'ha **esposto**. Oggi l'esposizione avviene tramite l'API: `PUT /api/base/:baseId/mcp-exposure`. Un interruttore nell'interfaccia è in arrivo.

## Limiti per piano

| Piano | Richieste al minuto |
| --- | --- |
| Gratuito | 60 |
| Pro | 120 |
| Business | 300 |
| Enterprise | 600 |

## Revocare l'accesso

Rimuovi il connettore nelle impostazioni di Claude: Claude smette di accedere ai tuoi dati TblFlow.

## Risoluzione dei problemi

- **Errore di autorizzazione**: ricollega il connettore, poi verifica che lo spazio o la base sia tra quelli che hai scelto, che il permesso necessario (scrittura, eliminazione, schema o avvio) sia attivo e che i tuoi diritti TblFlow lo consentano.
- **Un agente non si avvia**: l'IA deve essere configurata sulla base e l'agente deve essere stato esposto dal suo proprietario.
- **`run_automation` non modifica nulla**: è una prova a vuoto con dati di esempio. Nessun dato viene modificato.

## Dati e privacy

Il contenuto delle conversazioni non viene registrato nei log: vengono conservati solo lo strumento chiamato, l'ora, la durata e lo stato. I risultati degli strumenti vengono trasmessi all'assistente (Claude) per rispondere alla tua richiesta. I dettagli sono nell'[informativa sulla privacy](/it/privacy) e nella [pagina del server MCP](/it/mcp).
