---
title: "Viste, filtri e schede"
translationKey: "views-and-filters"
description: "Sei tipi di vista (griglia, galleria, Kanban, calendario, Gantt, modulo), filtri, ordinamenti, modalità personale, commenti, whiteboard e grafici."
section: "Guide"
order: 10
---

Una vista è un modo di leggere una tabella: non copia alcun dato. Una stessa tabella può avere tutte le viste che desiderate, ciascuna con i propri filtri, ordinamenti e campi visibili.

## I tipi di vista

Il pulsante **+** a destra delle schede delle viste propone sei tipi. Una nuova vista prende il nome del suo tipo («Kanban», «Calendario»…), seguito da un numero se quel nome esiste già.

| Tipo | Cosa mostra | Impostazioni specifiche |
|---|---|---|
| **Vista griglia** | I record in righe, i campi in colonne. | Altezza riga, campi nascosti, formattazione condizionale. |
| **Vista galleria** | Un record per carta. | Campo di copertina, **Personalizza carte**. |
| **Vista Kanban** | Carte impilate in colonne. | **Scegli un campo di pila**, **Nascondi pila vuota**, **Personalizza carte**. |
| **Vista calendario** | I record posizionati sulle loro date. | **Configurazione del calendario**: campo di data di inizio, di fine, di titolo, di colore. |
| **Vista Gantt** | Barre su una scala temporale. | **Impostazioni**: campo di inizio, di fine, di titolo, di dipendenza, di colore. |
| **Vista modulo** | Un modulo di inserimento sulla tabella. | Campi, pagine, condizioni di visualizzazione, colore del tema. |

Qualche precisazione:

- **Calendario e Gantt** richiedono campi data. Il Gantt richiede almeno un campo data o data/ora. Le barre si spostano con il mouse, e la scala passa da **Giorno** a **Settimana**, **Mese** o **Trimestre**.
- **Gantt**: il campo di dipendenza è di solito un campo **Collegamento a un altro record**. Le opzioni **Fine settimana** e **Percorso critico** si regolano nella barra degli strumenti. Una dipendenza circolare viene segnalata, e in tal caso il percorso critico può risultare incompleto.
- **Calendario e Gantt** mostrano un pannello **Da pianificare**: elenca i record senza date. Trascinate un record sulla vista per assegnargli le date.
- **Modulo**: scegliete i campi da mostrare, aggiungete interruzioni di pagina e potete visualizzare un campo solo se una condizione è soddisfatta. Un campo impostato come **Obbligatorio** non può essere rimosso dal modulo. Per pubblicare un modulo, vedi [Condivisione e pubblicazione](/it/docs/sharing-publishing).
- **Genera con l'IA**: nello stesso menu **+** descrivete la vista che vi serve e TblFlow ne crea una, con il suo tipo, i filtri, gli ordinamenti e le colonne.

## Gestire le viste

Un clic destro sulla scheda di una vista apre il suo menu:

| Azione | Permesso richiesto |
|---|---|
| **Rinomina**, **Blocca** / **Sblocca**, **Condividi** | Modificare le viste |
| **Duplica** | Creare viste |
| **Elimina** | Eliminare viste |
| **Scarica csv** (viste griglia) | Esportare la tabella |
| **Aggiungi ai preferiti** / **Rimuovi dai preferiti** | Nessun permesso particolare |

I ruoli Proprietario, Creatore ed Editor possono creare, modificare ed eliminare viste. I ruoli Commentatore e Lettore non possono. Vedi [Autorizzazioni e ruoli](/it/docs/permissions).

Una vista **bloccata** mostra un lucchetto. Per cambiarne la visualizzazione bisogna passare alla modalità personale (vedi più avanti).

## Filtrare, ordinare, raggruppare, nascondere

Queste impostazioni si trovano nella barra degli strumenti della vista.

**Filtrare.** **Aggiungi condizione** aggiunge una riga: un campo, un operatore, un valore. **Aggiungi gruppo di condizioni** annida delle condizioni, su tre livelli al massimo. Scegliete se i record devono **soddisfare tutte le condizioni** oppure **una condizione**.

- Gli operatori dipendono dal tipo di campo: «è», «contiene», «è vuoto», «è maggiore di», «è uno dei»…
- Su un campo utente, il valore **Io (utente attuale)** segue la persona che guarda la vista.
- Su una data, potete filtrare per valore relativo (oggi, ieri, la settimana scorsa, questo mese, un numero di giorni passati o futuri) oppure per data esatta.
- Una condizione diventata non valida, ad esempio perché una scelta di elenco è stata eliminata, viene ignorata e segnalata con un avviso.

**Ordinare.** **Ordina** accetta più campi; **Aggiungi un altro ordinamento** ne aggiunge uno. L'opzione **Ordina automaticamente i record** mantiene l'ordine aggiornato. Quando è attiva, il trascinamento manuale delle righe è disattivato.

**Raggruppare.** **Raggruppa** raggruppa le righe per un campo, e **Aggiungi un sottogruppo** aggiunge un livello.

**Campi nascosti.** Questo elenco nasconde dei campi nella vista senza eliminarli. **Mostra tutto** e **Nascondi tutto** agiscono in un colpo solo. Il campo principale non può essere né nascosto né eliminato.

**Altezza riga.** Quattro livelli: corta, media, grande, molto grande.

**Formattazione condizionale.** Delle regole colorano una cella o un'intera riga (testo o sfondo). L'opzione **Applica a tutte le viste** estende la regola alle altre viste della tabella.

**Interruttori rapidi.** Nella griglia, **Assegnato a me** e **Nascondi completati** si aggiungono al filtro della vista, senza scrivere nulla al suo interno. Compaiono solo se la tabella ha un campo utente oppure un campo «completato» (casella di controllo o elenco in cui una scelta significa completato).

## Modalità collaborativa e modalità personale

Per impostazione predefinita, una vista è **collaborativa**: filtri, ordinamenti, raggruppamenti, campi nascosti e altezza riga sono salvati nella vista. Quando qualcuno li modifica, tutti i membri che aprono quella vista vedono la modifica.

Il pulsante **Personale** della barra degli strumenti cambia questo comportamento: la configurazione si applica allora solo a voi. È conservata nel vostro browser, non sul server. Uscendo dalla modalità personale, scegliete se abbandonarla (**Conferma uscita**) oppure applicarla a tutti (**Esci e sincronizza**). Questa seconda opzione richiede il permesso di modificare le viste.

È anche l'unico modo per regolare la visualizzazione di una vista bloccata.

## La scheda del record

Ogni riga si apre in una scheda: una pagina che mostra tutti i campi del record. Il menu **Posizione** la colloca al centro, in un pannello laterale o a schermo intero, e i pulsanti **Scheda precedente** e **Scheda successiva** passano da una riga all'altra.

L'intestazione della scheda offre il pulsante **Copia URL del record**, per condividere un link diretto, e un pulsante per visualizzare la cronologia. Il suo menu permette di **Visualizza nella tabella**, **Stampa / PDF**, **Duplica il record** ed **Elimina il record**.

I campi nascosti nella vista restano accessibili tramite **Mostra N campi nascosti**.

**Layout.** Il menu **Layout** regola l'ordine dei campi, la loro larghezza (mezza larghezza o larghezza intera) e delle sezioni ripiegabili. Potete creare più layout con nome. Le modifiche valgono per tutti gli utenti della vista.

**Cronologia.** La cronologia elenca le modifiche con il valore **Prima** e il valore **Dopo**. Si filtra per intervallo di tempo, per campo e per utente, e si visualizza come tabella (**Vedi in tabella**) o come frasi (**Vedi in frasi**). Il menu della tabella propone anche **Cronologia dei record della tabella**, riservata ai ruoli Proprietario, Creatore ed Editor.

## Commenti

La scheda **Commenti** della scheda del record apre la discussione del record. Un commento può contenere un link, un'immagine, una menzione, un'emoji, un messaggio vocale o un clip dello schermo. Scegliete se ricevere notifiche per **tutti i commenti** oppure solo per quelli che vi riguardano. La scheda **Attività** mostra la cronologia del record; compare solo per i ruoli che possono modificare i record.

Scrivere un commento richiede il permesso di commentare: i ruoli Proprietario, Creatore, Editor e Commentatore lo hanno, il ruolo Lettore no.

**Messaggio vocale e clip dello schermo.** La barra degli strumenti dell'editor dei commenti propone **Registra un messaggio vocale** e **Registra un clip dello schermo**. Il browser chiede l'accesso al microfono o allo schermo; se viene negato, compare il messaggio «Accesso al microfono o allo schermo negato.». Durante la registrazione è visibile il tempo trascorso e **Interrompi** termina la cattura, che viene poi inviata e allegata al commento. La durata massima è di 5 minuti per un messaggio vocale e di 3 minuti per un clip dello schermo; oltre questo limite la registrazione si ferma da sola.

**Chiedere all'assistente IA.** In un commento, digitate **@** e scegliete **IA** (**Assistente IA** nell'elenco delle menzioni): l'assistente della base legge la riga, poi risponde con un commento firmato «Assistente IA». Viene creato al primo richiamo, nella base. Può cercare e leggere record, tabelle, la loro struttura e l'attività di una riga, e consultare la base di conoscenza. Può anche creare o modificare record, ma ogni scrittura è soggetta a un'approvazione umana (vedi **Approvazione delle scritture** in [Agenti IA](/it/docs/ai-agents)). La sua risposta è troncata a 4.000 caratteri. La quota IA e i permessi applicabili sono quelli della persona che l'ha menzionato; se l'IA viene rifiutata (quota raggiunta, opposizione al trattamento), il commento di risposta lo indica. Se l'agente «Assistente IA» è disattivato nella base, @IA non risponde più.

## Dashboard

La voce **Dashboard** della barra laterale della base apre una pagina che raccoglie grafici e indicatori. Elenca **I tuoi dashboard**, cioè le viste di tipo blocco grafico delle tabelle della base. Per crearne uno, **Crea con l'IA** avvia la chat con una richiesta libera, e la sezione **Modelli** propone tre punti di partenza: **Monitoraggio progetti**, **CRM** e **Costi di mappatura**. Questa voce è visibile con il permesso di leggere la base.

## Whiteboard

Un whiteboard è una risorsa della base, accanto alle tabelle: uno spazio libero per riflettere prima di strutturare. Si crea dal menu **+** della barra laterale, nella sezione **Altre risorse**, con **Nuovo whiteboard**. Questo richiede il permesso di modificare la base: ruoli Proprietario e Creatore.

- Gli strumenti: **Selezione**, **Post-it**, **Testo**, **Cornice**, **Record**, **Penna**, **Immagine**, **Commento**. Lo strumento **Record** inserisce sul whiteboard una scheda collegata a un record esistente.
- Sei modelli di partenza: Brainstorming, Definizione del progetto, Processo, Progettazione della base, Retrospettiva, Organigramma. Potete anche partire da una tela vuota.
- **Sfrutta questo whiteboard** trasforma la selezione in record di una tabella. Per gli schemi, propone anche delle tabelle, che approvate prima di qualsiasi creazione.
- **Esporta** produce un'immagine PNG o un documento PDF.

## Grafici

Un grafico si inserisce nel **Pannello plugin**, accanto alla tabella, senza creare una vista. Il pulsante del pannello (un'icona a forma di pezzo di puzzle) si trova nella barra degli strumenti della tabella.

1. Aprite il pannello. Se è vuoto, cliccate su **Crea un pannello plugin**, datele un nome e confermate con **Conferma**.
2. Nel pannello, cliccate su **Aggiungi un plugin**, poi su **Installa** di fronte a **Grafico**.
3. Una prima schermata, **Configurazione della query di dati**, vi chiede di costruire la query che alimenta il grafico, con i blocchi **Da**, **Seleziona**, **Dove**, **Raggruppa per**, **Aggregazione**, **Ordina per**, **Limite**, **Offset** e **Unisci**. Cliccate su **Salva**.
4. Scegliete poi il **Tipo di grafico** nel pannello di destra: **Barre**, **Linea**, **Torta**, **Area** o **Tabella**.

Le impostazioni dipendono dal tipo:

- **Barre, Linea, Area**: **Asse X**, **Asse Y**, **Aggiungi un'altra serie**, **Aggiungi una suddivisione di serie**, **Impila**, **Linea obiettivo**, **Intervallo** (**Minimo**, **Massimo**), **Stile di linea**, **Posizione dell'asse Y**;
- **Torta**: **Dimensione**, **Misura**, **Mostra il totale**;
- **Mostra le etichette dei valori sul grafico** e **Mostra la legenda** per i tipi che le prevedono.

L'intestazione di ogni grafico propone **Espandi**, **Duplica**, **Rinomina** ed **Elimina**. **Rinomina** ed **Elimina** richiedono il permesso di modificare la tabella. Il pulsante **Aggiorna la query** riapre la configurazione della query, e **Ricarica la query** rilegge i dati.
