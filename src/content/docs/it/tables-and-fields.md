---
title: "Tabelle e campi"
translationKey: "tables-and-fields"
description: "I 28 tipi di campo di TblFlow, record collegati, lookup e rollup, e in cosa si trasforma ciascuno di essi all'interno del tuo database PostgreSQL."
section: "Guide"
order: 2
---

Una tabella TblFlow è una vera tabella PostgreSQL. Un campo è una vera colonna. Per questo questa pagina è utile anche se non esci mai dall'interfaccia: ciò che scegli qui è ciò che esiste nel database.

## Famiglie di campi

**Valori semplici** — Testo su una riga, Testo lungo, Numero, Valuta, Percentuale, Data, Casella di controllo, Valutazione, Email, Telefono, URL. Memorizzano ciò che scrivi, nient'altro.

**Valori vincolati** — Selezione singola, Selezione multipla, Utente. Le opzioni sono definite sul campo, ed è questo che rende affidabili raggruppamenti e filtri: due grafie di «In corso» non possono coesistere.

**Relazionali** — Record collegato, Lookup, Rollup, Rollup condizionale. Vedi sotto.

**Calcolati** — Formula (oltre 200 funzioni), Numerazione automatica, Data di creazione, Data dell'ultima modifica, Creato da, Modificato da. Non sono modificabili: vengono ricalcolati a ogni scrittura.

**Attivi** — Allegato, Pulsante, IA. Il campo IA chiama il modello configurato sulla base e scrive la risposta nella cella.

## Collegare due tabelle

Un campo **Record collegato** crea una relazione tra due tabelle. Una volta creata la relazione:

- un **Lookup** recupera un campo dalla tabella collegata (il nome dell'azienda sulla riga del contatto);
- un **Rollup** aggrega i record collegati (`SUM` delle trattative di un account, `COUNT` delle attività di un progetto);
- un **Rollup condizionale** fa lo stesso su un sottoinsieme (`SUM` delle trattative la cui fase è «Vinta»).

Tutti e tre vengono ricalcolati quando cambiano i dati di origine, anche quando la modifica arriva da un client SQL esterno.

## Formule

Le formule sono definite sul campo e si applicano a ogni riga. Famiglie disponibili: testo, numeriche, data, logiche e aggregazioni sui record collegati.

```
IF(
  AND({Stage} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

Una formula non può produrre effetti collaterali: nessuna scrittura in un'altra tabella, nessuna chiamata di rete. Per questo serve un'[automazione](/it/docs/automations).

## Come appare in Postgres

Ogni base è uno schema, ogni tabella una tabella fisica, ogni campo una colonna tipizzata. Puoi puntare `psql`, un ORM o uno strumento di BI sulla stessa istanza e leggere direttamente i tuoi dati: nessuna esportazione, nessun livello di sincronizzazione, nessun ritardo di replica.

Il corollario pratico: un `pg_dump` è un backup completo e utilizzabile altrove. È questo che qui significa «nessun lock-in».

## Da sapere

- Rinominare un campo cambia la sua etichetta, non il riferimento usato dalle formule: nulla si rompe.
- Cambiare il tipo di un campo tenta una conversione e ti avvisa dei valori che andrebbero persi.
- Eliminare un campo elimina la colonna. L'operazione viene registrata, ma non è annullabile oltre il cestino della base.
