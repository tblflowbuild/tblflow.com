---
title: "CLI di TblFlow"
translationKey: "cli"
description: "Installare e usare la CLI di TblFlow (@tblflow/cli): accesso con codice dispositivo o token di servizio, comandi, importazione CSV, esportazione e server MCP locale."
section: "Guide"
order: 8
---

La CLI di TblFlow gestisce le tue basi da un terminale: leggere e scrivere record, importare ed esportare CSV, avviare le automazioni e gli agenti esposti e collegare un client MCP locale (Claude Code, Cursor…) ai tuoi dati. È pubblicata su npm con il nome `@tblflow/cli`, con licenza MIT.

Richiede Node.js 20 o superiore e non ha alcuna dipendenza di terze parti.

## Installare

```bash
npm install -g @tblflow/cli
tblflow --help
```

Senza installazione: `npx @tblflow/cli --help`.

## Accedere

### Sul tuo computer

```bash
tblflow login     # appare un codice, lo approvi nel browser
tblflow whoami
tblflow logout    # elimina la sessione locale e revoca il token lato server
```

Prima di approvare, verifica che il codice mostrato nel terminale sia lo stesso del browser. I token vengono conservati nel portachiavi del sistema (macOS, Linux Secret Service). In mancanza, vengono salvati in `~/.config/tblflow/credentials.json`, leggibile solo da te, e la CLI ti avvisa.

### In integrazione continua

Crea un **token di servizio** in TblFlow: Impostazioni dello spazio → Sicurezza e audit → Account di servizio. Conservalo nei segreti della tua CI, poi esponilo come variabile d'ambiente:

```bash
export TBLFLOW_TOKEN=...      # iniettato dalla CI, mai scritto nel repository
tblflow bases
```

`TBLFLOW_TOKEN` ha la precedenza su qualsiasi sessione salvata e non viene mai scritto su disco. Per salvare il token una sola volta su una macchina dedicata, leggilo dallo standard input:

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

Anche `tblflow login --token <token>` funziona, ma il token resta allora nella cronologia della shell e nell'elenco dei processi: la CLI te lo ricorda. Il token viene verificato presso il server prima di essere salvato e non compare in nessun output né messaggio di errore. `tblflow logout` dimentica un token salvato in questo modo senza revocarlo: la revoca si fa nelle impostazioni dello spazio.

### Scegliere il server

Per impostazione predefinita, la CLI parla con `https://app.tblflow.com`. Per un altro server, usa `--host https://…` o la variabile `TBLFLOW_URL`. HTTPS è obbligatorio, tranne per `localhost`.

## Comandi

| Comando | Effetto |
|---|---|
| `bases` | Spazi e basi accessibili |
| `tables <baseId>` | Tabelle di una base |
| `records list <tableId>` | `--take N` (al massimo 100), `--skip N`, `--fields a,b`, `--where "Campo=v"`, `--sort "Campo:desc"` |
| `records get <tableId> <recordId>` | Legge un record |
| `records create <tableId>` | `--data '<json>'` o `--file f.json` (al massimo 50) |
| `records update <tableId> [<recordId>]` | Aggiorna uno o più record |
| `records delete <tableId> <recordId>…` | Anteprima, poi eliminazione (cestino) con `--confirm` |
| `import <tableId> <file.csv>` | Aggiunge le righe di un CSV; `--dry-run` |
| `import --new-table <baseId> <file.csv>` | Crea una tabella da un CSV; `--name`, `--dry-run` |
| `export <tableId>` | CSV sullo standard output o `--out file.csv`; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Avvia un'automazione esposta dal suo proprietario |
| `run agent <baseId> <agentId> <attività…>` | Avvia un agente esposto dal suo proprietario |
| `api <METODO> <percorso>` | Chiamata diretta, solo percorsi `/api/`; `DELETE` richiede `--confirm` |
| `mcp serve` | Server MCP locale (stdio) |

`--json` funziona con tutti i comandi. Codici di uscita: 0 in caso di successo, 1 in caso di errore, 2 per un errore d'uso o una conferma richiesta.

### Creare una tabella da un CSV

```bash
tblflow import --new-table <baseId> clienti.csv --name "Clienti" --dry-run
tblflow import --new-table <baseId> clienti.csv --name "Clienti"
```

`--dry-run` mostra cosa verrebbe creato senza scrivere nulla.

## Collegare un client MCP locale

`tblflow mcp serve` avvia un server MCP locale sullo standard input e output. Dichiaralo nella configurazione del tuo client MCP:

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

Per collegare Claude (web, desktop o mobile) senza installare nulla, usa invece il server MCP remoto: vedi la guida [Server MCP](/it/docs/mcp-server).

## Condizioni e dati personali

L'uso della CLI con un account TblFlow è disciplinato dalle [condizioni generali d'uso](https://app.tblflow.com/legal/terms) e dall'[informativa sulla privacy](https://app.tblflow.com/legal/privacy). La CLI non raccoglie alcuna telemetria: parla soltanto con il server TblFlow che configuri.
