---
title: "Server MCP: importazione CSV, 23 strumenti e pagina Sicurezza e audit"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **23 strumenti** invece di 13: importazione di un CSV (`import_csv`), statistiche su una tabella, cestino e ripristino, rinomina ed eliminazione di un campo, viste di una tabella, membri di uno spazio, lettura della mappa dei processi, monitoraggio delle esecuzioni di un agente.
- **Importazione CSV**: in una tabella esistente o in una nuova tabella. Una prima chiamata mostra le colonne, i tipi dedotti e il numero di righe senza scrivere nulla; l'importazione avviene solo dopo il tuo consenso. Fino a 2 MiB per chiamata; oltre, subentra la [CLI](/it/docs/cli).
- **Pagina Sicurezza e audit** nelle impostazioni dello spazio, riservata ai proprietari: registro dello spazio filtrabile per tipo di evento e per periodo, esportazione CSV e un registro MCP dettagliato da attivare se vuoi conservare gli identificatori degli oggetti toccati. I contenuti (valori, richieste, istruzioni) non vengono mai conservati.
- **Applicazioni non verificate segnalate**: un'applicazione che si è registrata da sola presso TblFlow mostra «Applicazione non verificata» nella schermata di consenso.
- **Token personali**: un'email ti avvisa 14 giorni e poi 3 giorni prima della scadenza di un token.

Guida: [Server MCP](/it/docs/mcp-server).
