---
title: "Importazione, esportazione e cestino"
translationKey: "import-export-trash"
description: "Importare CSV, TSV o Excel, esportare tabelle o basi, ripristinare dal cestino, annullare un'azione, duplicare o partire da un modello."
section: "Guide"
order: 11
---

Questa pagina raccoglie ciò che entra in TblFlow, ciò che ne esce e come tornare indietro.

## Importare un file

TblFlow importa tre formati: **CSV**, **TSV** ed **Excel** (estensioni `.xlsx`, `.xls` e `.xlsm`). Per un file locale il formato viene riconosciuto dall'estensione. Un file Excel inviato dal tuo computer non può superare 5 MB.

Esistono due percorsi, a seconda che tu voglia una nuova tabella o aggiungere righe a una tabella esistente.

### In una nuova tabella

1. Nella barra laterale della base, apri il menu **+**, sezione **Aggiungi da altre fonti**, poi **Importa dati**.
2. Scegli la scheda **File locali** (trascina il file nell'area) oppure **Link (URL)** (incolla l'indirizzo di un file).
3. Un'**Anteprima dei dati** mostra le colonne rilevate. Puoi attivare **Analizza e implementa con l'IA**: l'IA propone nomi di colonne e tipi di campo, che mantieni o correggi nel passo successivo.
4. Imposta l'importazione:
   - **Usa la prima riga come intestazione**;
   - **Selezione automatica dei tipi di campo**;
   - il nome e il tipo di ogni campo, oppure **Non importare** per escludere una colonna;
   - il **Campo principale**;
   - **Importa i dati** (deselezionalo per creare solo la struttura);
   - per una cartella di lavoro Excel, la configurazione avviene foglio per foglio (**Nome del foglio**).
5. Clicca su **Importa**, poi su **Conferma e continua** nel messaggio di avviso.

I nomi dei campi devono essere unici e non vuoti. L'importazione si ferma solo in caso di successo o di errore: il suo stato compare in alto a destra della tabella, e una notifica annuncia il risultato. Evita di modificare i campi durante l'importazione.

### In una tabella esistente

Apri il menu della tabella, **Importa dati**, poi **File CSV** o **Microsoft Excel**. Associ ogni colonna del file a un campo della tabella, e puoi spuntare **Escludi la prima riga dall'importazione**. Le righe vengono aggiunte a quelle esistenti.

Questa voce richiede il diritto di importare in una tabella: ruoli Proprietario e Creatore. Creare una nuova tabella con un'importazione richiede il diritto di creare tabelle.

### Limiti ed errori

L'importazione è soggetta al limite di righe per tabella della tua offerta: 5.000 nel piano Gratuito, 100.000 in Essenziale, 1.000.000 in Team, senza tetto in Enterprise. Oltre, l'importazione si ferma con il messaggio «Limite di righe raggiunto». Vedi [Offerte e limiti](/it/docs/plans-limits).

Gli altri errori possibili: una data fuori dall'intervallo valido, un campo **Obbligatorio** lasciato vuoto, duplicati in un campo che accetta solo **Valori unici**, oppure un tempo di attesa scaduto.

### Altri modi di importare

- **Incollare nella griglia.** Copia celle da un foglio di calcolo e incollale in una vista a griglia. Se l'incolla supera la tabella, TblFlow chiede se aggiungere record, e chiede conferma prima di sovrascrivere righe esistenti.
- **Da riga di comando**: `tblflow import --new-table` invia un file CSV. Vedi [CLI di TblFlow](/it/docs/cli).
- **Tramite un agente**: il server MCP espone uno strumento `import_csv`. Vedi [Server MCP](/it/docs/mcp-server).

## Esportare

### Una tabella in CSV

Nel menu della tabella, **Scarica csv**. Su una vista a griglia, la stessa scelta esiste nel menu della scheda (clic destro): l'esportazione parte allora dalla vista e riprende il suo filtro e il suo ordinamento. Tutti i ruoli che leggono la tabella possono esportare.

### Una base intera

Nell'elenco delle basi dello spazio, il menu di una base propone **Esporta**. La finestra **Esporta** offre l'opzione **Includi i record**: disattivata, vengono esportate solo struttura e configurazione.

1. Clicca su **Avvia l'esportazione**. Può richiedere tempo; puoi chiudere la finestra.
2. Una notifica annuncia che i dati sono pronti.
3. **Scarica** il file `.tbl`.

Per reimportarlo, trascina il file `.tbl` nella pagina dello spazio: «Trascina il file .tbl per importarlo». I campi di collegamento verso un'altra base vengono convertiti in testo su una riga nell'esportazione.

Esportare o duplicare una base richiede il diritto di modificare la base: ruoli Proprietario e Creatore.

## Annullare e ripetere

I pulsanti **Annulla** e **Ripeti** della barra degli strumenti (scorciatoie Ctrl o Cmd + Z, e Ctrl o Cmd + Maiusc + Z) disfano o rifanno le ultime azioni sulla tabella. Sono attivi se puoi modificare i record.

Riguardano: la digitazione e l'incolla di celle, la creazione, l'eliminazione e il riordino di record, la creazione, l'eliminazione e la conversione di campi, la creazione, la modifica e l'eliminazione di viste.

La cronologia di annullamento è propria di ogni persona e di ogni tabella. Di default conserva le ultime 200 azioni per 24 ore. Una nuova azione svuota la pila di ripetizione.

La **cronologia dei record** è un altro strumento: tiene traccia di chi ha cambiato cosa, con i valori prima e dopo. Vedi [Viste, filtri e schede](/it/docs/views-and-filters).

## Il cestino

Eliminare una tabella, una base, un record, un campo o una vista non lo cancella subito: l'elemento va in un cestino, da dove puoi **Ripristinarlo**.

| Cestino | Dove trovarlo | Cosa contiene |
|---|---|---|
| **Cestino della tabella** | Menu della tabella | Viste, campi e record eliminati |
| **Cestino** della base | Icona **Cestino** della barra laterale della base | Tabelle, applicazioni, automazioni, agenti e skill browser eliminati |
| **Cestino** dello spazio | Menu dello spazio | Basi eliminate da questo spazio |
| **Cestino dello spazio** | Selettore di spazi | Spazi, basi e tabelle eliminati, in tre schede |

Le colonne **Tipo**, **Da** e **Data** indicano cosa è stato eliminato, da chi e quando; nel cestino di una tabella i filtri **Dal** e **Al** limitano il periodo. La pagina **Cestino dello spazio** offre anche **Eliminazione definitiva**.

- **Durata di conservazione.** Di default 30 giorni. Scaduto il termine, una pulizia automatica elimina definitivamente l'elemento. I cestini di base e di spazio mostrano la durata applicata alla tua istanza («eliminati negli ultimi N giorni»).
- **Svuota** elimina definitivamente il contenuto del cestino della base, dopo conferma.
- **Quota.** I dati nel cestino contano sempre nel tuo utilizzo di record e allegati.
- **Ordine di ripristino.** Non si può ripristinare un elemento il cui genitore si trova a sua volta nel cestino: ripristina prima la base, poi le sue tabelle.
- **Campi.** Ripristinare un campo ne ripristina i valori. Compare una finestra di avanzamento, perché l'operazione può riguardare molti record.

Leggere e ripristinare il cestino di una tabella è riservato ai ruoli Proprietario, Creatore ed Editor. I ruoli Commentatore e Lettore non vi hanno accesso. Vedi [Autorizzazioni e ruoli](/it/docs/permissions).

## Duplicare una tabella o una base

**Una tabella.** Menu della tabella, **Duplica**. Dai un nome alla copia e scegli con **Includi i record** se le righe vengono copiate (attivo di default). Bisogna poter leggere la tabella e crearne nella base: ruoli Proprietario e Creatore.

**Una base.** Menu della base, **Duplica**, poi **Duplica la base**. Scegli lo spazio di destinazione e se i record vengono duplicati. La cronologia delle revisioni e i collaboratori non vengono duplicati.

## Partire da un modello

Un modello è una base pronta all'uso. Dopo aver scelto un modello, la finestra **Crea una base da un modello** chiede lo spazio di destinazione e propone **Duplica i record**: attivo, la base riprende i dati di esempio del modello; disattivo, viene copiata solo la struttura. Bisogna poter creare basi nello spazio scelto.

Per proporre i tuoi modelli, vedi [Condivisione e pubblicazione](/it/docs/sharing-publishing).
