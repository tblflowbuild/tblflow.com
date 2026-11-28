---
title: "Spazi e impostazioni dello spazio"
translationKey: "space-settings"
description: "Creare e cambiare spazio, organizzare le basi in cartelle e scorrere le impostazioni: membri, domini, IA, webhook, e-mail, audit, GDPR e AI Act."
section: "Guide"
order: 17
---

Uno **spazio** raccoglie basi e collaboratori. Questa pagina spiega come passare da uno spazio all'altro, organizzare le basi in cartelle, e poi cosa contiene ogni scheda delle impostazioni dello spazio. Le impostazioni che riguardano solo il tuo account si trovano in [Account e sicurezza](/it/docs/account-security).

## Spazi

Il nome dello spazio corrente compare in alto a sinistra. Fai clic su di esso per aprire un menu a due colonne.

- **Colonna di destra**: l'elenco dei tuoi spazi, con un campo di ricerca. Lo spazio corrente porta un segno di spunta, una stella permette di fissare uno spazio, e **Crea spazio** in fondo apre una conferma con un campo per il nome. Se lasci vuoto il campo, TblFlow usa il nome proposto. Una volta creato, lo spazio si apre.
- **Colonna di sinistra**: le azioni dello spazio: **Mappa dello spazio**, **Mappa dei processi** (vedi [Mappa dei processi](/it/docs/process-map)), **Crea una base**, **Modello**, **Importa**, **DocIndex**, **Connettori**, **Cestino** e **Impostazioni dello spazio**. **Importa** compare solo per chi può modificare lo spazio, **Crea una base** è inattivo senza il permesso di creare basi, e **Impostazioni dello spazio** compare per il proprietario e per un ruolo al quale è delegata un'impostazione.

La pagina di uno spazio elenca le sue basi. Il selettore di ordinamento propone **Recenti** e **Ordine manuale**: in ordine manuale, un ruolo autorizzato a modificare le basi può riordinarle trascinandole.

L'eliminazione di uno spazio si fa dalla scheda **Generale** (vedi più sotto), e il ripristino dal **Cestino**: vedi [Importazione, esportazione e cestino](/it/docs/import-export-trash).

## Cartelle delle basi

Le cartelle organizzano le basi di uno spazio. Sono **comuni**: tutti i membri dello spazio le vedono. Compaiono nella visualizzazione a elenco.

| Azione | Come |
|---|---|
| Creare una cartella | **Nuova cartella** nella barra sopra l'elenco. |
| Creare una sottocartella | Passando sopra una cartella, l'icona **Nuova sottocartella**. |
| Rinominare | Doppio clic sul nome della cartella. |
| Organizzare una base | Trascina la base sulla cartella. **Rilascia qui per uscire da una cartella** la riporta alla radice. |
| Eliminare | Passando sopra, l'icona **Elimina cartella**, dopo conferma. |

Alcune regole:

- Solo chi può modificare lo spazio (il proprietario) gestisce le cartelle.
- Ci sono al massimo due livelli: una sottocartella non può contenere altre cartelle, e una cartella che ha sottocartelle non può essere spostata dentro un'altra.
- Uno spazio conta al massimo 500 cartelle. Due cartelle dello stesso livello non possono avere lo stesso nome.
- Eliminare una cartella elimina anche le sue sottocartelle, ma **non le basi**: queste risalgono alla radice.

## Aprire le impostazioni dello spazio

Nel menu dello spazio, fai clic su **Impostazioni dello spazio**. La finestra mostra le impostazioni dello spazio accanto alle tue impostazioni personali.

Chi vede cosa:

- il **proprietario** vede tutte le schede;
- un **delegato** (ruolo personalizzato) vede solo le schede che gli sono delegate, vedi [Autorizzazioni e ruoli](/it/docs/permissions);
- il **DPO** designato dello spazio vede le schede **AI Act** e **Dati personali (GDPR)** (la vista GDPR è in sola lettura per lui);
- la scheda **Marchio** è leggibile da tutti i membri dello spazio.

Quattro azioni di impostazione possono essere delegate a un ruolo personalizzato:

| Azione delegata | Schede aperte |
|---|---|
| `space\|settings_notifications` | **Notifiche** |
| `space\|settings_mail` | **E-mail** |
| `space\|settings_domains` | **Domini verificati** |
| `space\|settings_ai` | **Impostazioni IA** e **Ricerca web** |

## Generale

Il nome dello spazio si modifica facendo clic su di esso; l'identificativo dello spazio è mostrato con un pulsante di copia. La **Zona pericolosa** contiene **Elimina spazio**, riservato a chi ha il diritto di eliminare lo spazio. Una conferma propone **Sposta nel cestino**.

Sul cloud, l'eliminazione è rifiutata per uno spazio con piano Essenziale o Team: «Questo spazio ha un abbonamento attivo. Annulla l'abbonamento prima di eliminare lo spazio.»

## Collaboratori

La scheda elenca i collaboratori dello spazio, con il loro ruolo, e il pulsante **Invita**. Si invita via e-mail (**Invita via e-mail**, indirizzi separati da Invio) oppure tramite link (**Invita tramite link**). Un collaboratore dello spazio ha accesso a tutte le basi di questo spazio. I link di invito creati sono elencati e possono essere eliminati, e **Elimina collaboratore** rimuove una persona. I ruoli e i relativi diritti sono descritti in [Autorizzazioni e ruoli](/it/docs/permissions).

## Autorizzazioni

Questa scheda gestisce le matrici dei ruoli personalizzati dello spazio. Vedi [Autorizzazioni e ruoli](/it/docs/permissions).

## Abbonamento e consumo IA

Queste due schede, **Abbonamento** e **Consumo IA**, sono descritte in [Piani e limiti](/it/docs/plans-limits).

## Domini verificati

Un dominio verificato serve un'applicazione pubblicata sul tuo indirizzo.

1. **Aggiungi dominio**, poi inserisci un nome come `app.miodominio.com`.
2. TblFlow mostra un record DNS TXT da creare presso il tuo fornitore di dominio: il nome è `_tblflow-verify.` seguito dal dominio, il valore inizia con `tblflow-verify=`.
3. Fai clic su **Verifica**. Il dominio passa a **Verificato**.
4. Associa il dominio a un'applicazione dalla scheda **Pubblica** del suo editor. Visitando la radice del dominio, viene allora mostrata l'applicazione, se la sua condivisione è attiva.

La prova DNS viene riletta dopo sette giorni: se il record è scomparso, il dominio torna a non verificato e non serve più l'applicazione. **Rimuovi questo dominio** lo elimina. Vedi anche [Condivisione e pubblicazione](/it/docs/sharing-publishing).

## Impostazioni IA

Questa scheda configura l'IA dello spazio. L'impostazione si applica a tutti i suoi collaboratori.

- **Fornitori**: aggiungi le tue chiavi dei fornitori di modelli. Sono cifrate a riposo e non riappaiono mai in chiaro. Ogni fornitore può essere testato, modificato o eliminato.
- **Modelli e instradamento**: una volta disponibile un fornitore, scegli il modello di chat, i livelli (leggero, standard, grande), i modelli di immagine, audio e video e il fornitore di embedding.
- **Usa i modelli dell'istanza predefinita**: disattivato, lo spazio usa solo le tue chiavi. Attivato, può consumare quelle dell'editore in assenza di una chiave.
- **Usa i connettori API nell'applicazione completa**: disattivato, la generazione di un'applicazione completa non chiama alcuna API collegata allo spazio.

### Aggiungere un fornitore o un modello personalizzato

Solo un proprietario dello spazio può modificare queste impostazioni. In **Fornitori**, **Aggiungi un fornitore LLM** apre un modulo:

- **Nome**: il nome visualizzato del fornitore;
- **Tipo di fornitore**: OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** e altri. Un esempio di **URL di base** compare in base al tipo scelto;
- **Chiave API**: assente per LM Studio;
- **Modelli**: i nomi dei modelli da proporre. A seconda del tipo, **Carica i modelli** (Ollama, LM Studio) oppure **Carica da models.dev** riempie l'elenco, e **Rileva** completa le caratteristiche dei modelli già inseriti.

Fai clic su **Test**: TblFlow prova ogni modello inserito. Quando il test riesce (**Test riuscito**), compare il pulsante **Aggiungi**. Un fornitore aggiunto si modifica con l'icona a matita e si rimuove con l'icona del cestino.

Per Ollama, LM Studio e Unsloth installati sulla tua macchina: su un'istanza TblFlow ospitata, «localhost» indica il server di TblFlow, non il tuo computer. Esponi il tuo server in HTTPS e incolla il suo URL pubblico in **URL di base**. Proteggi un Ollama esposto tramite un proxy con token, e inserisci quel token come **Chiave API**.

Le chiamate fatte con la tua chiave non consumano i crediti IA di TblFlow. Vedi anche [Agenti IA](/it/docs/ai-agents).

## Ricerca web

Permette all'assistente e agli agenti dello spazio di cercare sul web. Inserisci una chiave API Tavily: viene testata prima di essere salvata (**Chiave valida** o **Chiave non valida**). Senza una chiave propria, lo spazio usa la ricerca web dell'istanza, se esiste, a meno che tu non disattivi **Usa la chiave dell'istanza predefinita**.

## Notifiche

Inoltra le notifiche dello spazio a un canale di messaggistica: **Slack**, **Microsoft Teams** e **Google Chat**. Incolla l'URL del webhook in entrata di ciascun servizio. Questo URL è un segreto: non viene più mostrato dopo il salvataggio, e un campo compilato lo sostituisce.

Le notifiche inoltrate sono le menzioni, i commenti, la fine di un'esportazione, il fallimento di un'automazione, il fallimento di una generazione IA, la fatturazione e le notifiche di sistema.

L'interruttore **Usa i webhook dell'istanza predefinita** decide se i webhook dell'istanza vengono usati quando lo spazio non ha i propri. Fai clic su **Salva** per applicare.

## E-mail

Configura il server SMTP da cui partono le e-mail delle **automazioni** dello spazio: **Server SMTP**, **Porta**, **Indirizzo mittente**, **Nome del mittente**, **Utente** e **Password**. La password non viene mai ri-mostrata. Le e-mail di sistema di TblFlow, come gli inviti, non passano da questo server. L'interruttore **Usa l'SMTP dell'istanza predefinita** ha lo stesso ruolo di quello dei webhook. Vedi [Automazioni](/it/docs/automations).

## Organigramma

Gestisce la struttura organizzativa dello spazio: **reparti** in forma di albero, i loro membri, e un organigramma calcolato a partire dal responsabile indicato nella scheda di ciascuna persona. Una scheda riporta il ruolo, il responsabile, la data di ingresso, il paese, lo stato di impiego, la data di uscita, la percentuale di impiego e la sede. La scheda permette di esportare, e di importare un file CSV: fai prima clic su **Anteprima**, perché non viene scritto nulla finché non confermi.

## Marchio

Il nome del marchio e il design system (colori, tipografia, componenti, illustrazioni) guidano le applicazioni, le interfacce e i documenti generati per lo spazio. Solo il proprietario modifica il marchio; gli altri membri possono consultarlo ed esportare il `design.md`. **Completa con il marchio dell'istanza** riprende ciò che non compili.

## Sicurezza e audit

Riservato al proprietario dello spazio.

- **Registro dello spazio**: chi ha fatto cosa, con le colonne **Quando**, **Evento**, **Utente**, **Risorsa** e **Dettaglio**. Filtra per evento e per periodo (**Dal**, **Al**), poi **Esporta in CSV**: l'esportazione riprende il filtro e si ferma a 5.000 righe. Le voci più vecchie di sei mesi vengono eliminate automaticamente, eccetto gli eventi legati alle richieste GDPR e alle cancellazioni.
- **Registro dettagliato delle chiamate MCP**: disattivato per impostazione predefinita. Ogni chiamata di un assistente IA (MCP) o della CLI viene sempre registrata con lo strumento, l'esito, la durata e il suo autore. Attivato, il registro conserva in più gli identificativi degli oggetti coinvolti. I contenuti (valori delle celle, query, istruzioni degli agenti) non vengono mai conservati: se ne conserva solo la dimensione. Per impostazione predefinita, queste voci vengono cancellate dopo 180 giorni. Vedi [Server MCP](/it/docs/mcp-server).
- **Account di servizio**: danno a uno script o a una catena di integrazione continua un accesso allo spazio che non dipende da nessuna persona. Scegli un ruolo (**Lettore**, **Editor** o **Creatore**), poi emetti un token con un accesso (**Sola lettura**, **Lettura e scrittura dei record** o **Tutto ciò che consente il ruolo**) e una durata di validità. Il token viene mostrato una sola volta. **Revoca** lo rende subito inutilizzabile. Vedi [Riga di comando](/it/docs/cli).

## AI Act

Riservato al proprietario e al DPO. La scheda **I miei usi dell'IA** elenca gli usi dell'IA creati nello spazio: campo IA, agente, automazione con un passaggio IA, esposizione MCP, ricerca documentale, chat e generazione. Ogni uso ha una categoria di rischio (**Vietato**, **Alto rischio**, **Trasparenza**, **Minimo**, **Non valutato**), uno stato (**Aggiornato**, **Da rivedere**, **Revisione annuale dovuta**) e l'elenco di ciò che resta da correggere.

**Descrivi la finalità** pone quattro domande brevi e suggerisce una categoria che puoi correggere. **Segna come rivisto** rinnova la revisione. Gli avvisi non bloccano nulla. La scheda **Funzioni IA di TblFlow** presenta le funzioni IA fornite da TblFlow.

Questo inventario aiuta a individuare gli usi da esaminare; non sostituisce la tua analisi.

## Dati personali (GDPR)

Riservato al proprietario, con una vista in sola lettura per il DPO. Quattro schede:

- **Inventario**: classifica ogni campo (**Non personale**, **Personale**, **Identificatore diretto**, **Sensibile (art. 9)**) con una finalità e una durata di conservazione in giorni. **Suggerisci** propone una categoria, che non viene mai applicata senza la tua convalida. **Registro art. 30 (CSV)** esporta il registro.
- **Registro**: le letture, le esportazioni e le modifiche delle tabelle che contengono campi personali, e le richieste delle persone.
- **Richieste**: cerca una persona per e-mail, nome o identificativo nei campi di testo di tutte le basi dello spazio (almeno 3 caratteri). Puoi **Esporta (CSV)** le righe trovate oppure **Cancella la selezione** (solo proprietario). Le righe cancellate vanno nel cestino; i loro vecchi valori nella cronologia vengono eliminati.
- **DPO**: il proprietario designa un DPO tra i membri. Il DPO consulta la vista in sola lettura e non ha alcun diritto di modifica sulle basi.

## Pre-produzione

Riservato al proprietario, sui piani Team ed Enterprise. Una pre-produzione è una copia dello spazio per testare le modifiche. Puoi **Crea la pre-produzione**, **Apri la pre-produzione**, **Aggiorna dalla produzione** (le modifiche non pubblicate vanno perse) e **Pubblica in produzione**. Vengono pubblicate in produzione solo la struttura e la logica, mai i dati: tabelle, campi, viste, automazioni, agenti e applicazioni. Un elemento modificato in entrambi i lati viene segnalato come conflitto e la pubblicazione viene bloccata.

## Estensioni

Elenca i server MCP di terze parti installati nello spazio. Al momento dell'installazione, una schermata di consenso presenta le autorizzazioni richieste. Puoi attivare o revocare queste autorizzazioni in seguito.
