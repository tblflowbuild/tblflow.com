---
title: "Condivisione e pubblicazione"
translationKey: "sharing-publishing"
description: "Condividere vista, tabella o base con un link, aprire un modulo al pubblico, pubblicare un'app pubblica o su invito e invitare collaboratori."
section: "Guide"
order: 12
---

TblFlow offre cinque modi per dare accesso ai tuoi dati. Non richiedono gli stessi diritti e non danno gli stessi poteri, quindi scegli il più ristretto che basta.

| Vuoi | Dove | Diritto richiesto (ruoli predefiniti) |
|---|---|---|
| Mostrare una vista in lettura, tramite link | Barra degli strumenti della tabella, **Condividi** | Modificare la vista e condividerla: proprietario, creatore, editor |
| Mostrare una tabella o una base, tramite link | **Condividi** (barra degli strumenti o menu della base) | Modificare la base: proprietario, creatore |
| Ricevere risposte | Vista Modulo condivisa | Come per la vista |
| Pubblicare un'app | Pulsante **Pubblica** dell'app | Modificare l'app: proprietario, creatore |
| Far lavorare qualcuno nello spazio o nella base | Pulsante **Invita** | Invitare: vedi [Permessi e ruoli](/it/docs/permissions) |

## Condividere una vista tramite link

Nella barra degli strumenti di una tabella, **Condividi** apre un piccolo menu: **Condividi la tabella** e **Condividi la vista**. Il pulsante è disattivato senza il diritto di modificare la vista.

Scegli **Condividi la vista**, poi attiva **Condividi la vista sul web**. Compare un link, con copia con un clic, un codice QR e un pulsante per generare un nuovo link. Chi ha il link vede la vista, senza account.

Nella sezione **Avanzate**, a seconda del tipo di vista:

- **Consenti agli spettatori di copiare dati da questa vista** e **Mostra tutti i campi nei record estesi** (solo vista Griglia).
- **Solo su invito**: vedi più sotto.
- **Configurazione di integrazione**: copia un codice `iframe` da incollare in un'altra pagina, con un'anteprima. Qui scegli il tema (sistema, chiaro o scuro) e, fuori dal modulo, **Nascondi la barra degli strumenti**. Queste impostazioni modificano il link: copialo di nuovo dopo averle cambiate.

I campi di tipo Password non vengono mai inviati a chi consulta un link di condivisione. Non lo sono nemmeno i campi che la base vieta di leggere.

Disattiva l'interruttore per chiudere il link. Generare un nuovo link cambia l'indirizzo.

## Condividere una tabella o una base tramite link

Per un'intera base, usa **Condividi** nel menu della base (elenco delle basi dello spazio). Per una tabella, **Condividi** e poi **Condividi la tabella**. Bisogna poter modificare la base: proprietario o creatore per impostazione predefinita.

Attiva **Condividi sul web**. Il link si apre su `/share/…/base`. Il menu **Chiunque abbia il link** definisce ciò che il link consente:

| Impostazione | Effetto |
|---|---|
| **Può consultare** | Chiunque abbia il link consulta i dati. |
| **Può modificare** | Gli utenti connessi modificano i record della tabella: ricevono diritti di editor. Proposto per una base, una tabella o una cartella. |
| **Salva una copia** | Chiunque abbia il link può salvare una copia nel proprio spazio. |

Nella sezione **Avanzate**: **Consenti ai lettori di copiare i dati**, **Solo su invito** e **Configurazione di integrazione** (codice `iframe`). **Rigenera il link** cambia l'indirizzo. Disattivare **Condividi sul web** chiede conferma: l'azione è irreversibile e chi aveva il link perde l'accesso.

Anche con **Può modificare**, un link di base non dà né l'invito via e-mail, né la condivisione di vista, né le richieste di dati.

## Limitare un link agli invitati

**Solo su invito** si applica ai link di vista e di base. Compare un campo **Invitati**: inserisci degli indirizzi separati da una virgola, da un punto e virgola o da uno spazio, poi clicca su **Invita**.

- Il link deve essere attivato prima di invitare. Fino a 50 indirizzi per invio.
- Solo gli indirizzi nuovi ricevono un'e-mail con il link.
- La persona deve accedere a TblFlow. Se il suo account non è stato invitato, vede « Accesso su invito » e può cambiare account.
- I membri della base vi accedono senza invito.
- Aggiungere o rimuovere invitati richiede il diritto di modificare lo spazio, riservato al proprietario per impostazione predefinita.

## Modulo pubblico

Una vista Modulo si condivide come qualsiasi altra vista: **Condividi** > **Condividi la vista** > **Condividi la vista sul web**. Chiunque apra il link può compilare il modulo e inviarlo; le risposte arrivano come record della tabella.

L'opzione **Accesso richiesto per inviare** obbliga la persona a connettersi a TblFlow prima dell'invio. Un messaggio e il pulsante **Accedi** coprono allora il modulo. Con **Solo su invito**, solo gli invitati e i membri della base accedono al modulo.

## Pubblicare un'app

Nell'editor di un'app, il pulsante **Pubblica** apre il pannello **Pubblicazione dell'app**. Qui imposti:

| Impostazione | Valori |
|---|---|
| **Accesso** | **Pubblico — chiunque abbia il link**, oppure **Su invito — persone invitate e membri della base** |
| **Consenti la scrittura dei dati** | Disattivato per impostazione predefinita: i visitatori sono in sola lettura |

L'accesso proposto per impostazione predefinita è **Su invito**. Scegliere **Pubblico** chiede una conferma: senza account né invito, chiunque riceva il link apre l'app e vede i dati che mostra.

Clicca su **Pubblica — genera il link**. Il pannello mostra allora il link, che puoi copiare. Puoi poi cambiare l'accesso e la scrittura senza ripubblicare.

In modalità **Su invito**, ogni persona si connette con il proprio account TblFlow, senza password: link magico o chiave di sicurezza. Entra se è stata invitata o se è membro della base; altrimenti la pagina glielo indica. Il campo **Invitati** funziona come per i link di vista, ma l'app deve essere pubblicata prima di invitare. Non esistono né password di condivisione né un account visitatore proprio dell'applicazione.

La sezione **Personalizzazione** permette di caricare un'icona di scheda (favicon) e di scrivere la **Descrizione della pagina**, mostrata dai motori di ricerca e dalle anteprime dei link.

**Annulla pubblicazione (revoca il link)** interrompe il link dopo conferma. Ripubblicare genera un nuovo link. Pubblicare, annullare la pubblicazione e regolare l'accesso richiedono il diritto di modificare l'app; gestire gli invitati richiede quello di modificare lo spazio.

Per la costruzione dell'app in sé, vedi [Crea la tua prima app](/it/docs/build-first-app).

## Dominio personalizzato

Un'app pubblicata può essere servita alla radice di un nome di dominio che ti appartiene. Bisogna prima farlo verificare nelle impostazioni dello spazio.

1. Nelle impostazioni dello spazio, scheda **Domini verificati**, clicca su **Aggiungi un dominio** e inserisci il nome (per esempio `app.tuodominio.com`).
2. Aggiungi presso il tuo fornitore DNS il record TXT mostrato: il suo nome inizia con `_tblflow-verify.`, il suo valore con `tblflow-verify=`.
3. Clicca su **Verifica**. Il dominio passa a **Verificato**.
4. Nel pannello di pubblicazione dell'app, sezione **Dominio personalizzato**, scegli il dominio in **Scegli un dominio verificato…**. **Dissocia** lo rimuove.

Un dominio serve una sola app e può essere verificato in un solo spazio. Senza dominio verificato, il pannello indica: « Nessun dominio verificato disponibile ». Il record TXT dimostra che il dominio è tuo; è l'unica cosa che TblFlow verifica. Dopo sette giorni, la prova viene riletta quando il dominio serve l'app: se il record è sparito, il dominio torna non verificato.

## Invitare collaboratori

Invitare un collaboratore gli assegna un ruolo nello spazio o nella base; non è una condivisione tramite link. I diritti di ciascun ruolo sono descritti in [Permessi e ruoli](/it/docs/permissions).

- **Spazio**: pulsante **Invita** dello spazio, finestra « Condividi lo spazio ». Un collaboratore dello spazio accede a tutte le sue basi.
- **Base**: pulsante di invito (icona utente, descrizione comando **Invita**) nella barra della base, finestra « Condividi » seguita dal nome della base.

Ogni finestra propone:

- **Invita via e-mail**: inserisci degli indirizzi (conferma ciascuno con Invio o Spazio), scegli il ruolo, poi **Invia l'invito**.
- **Invita tramite link**: scegli un ruolo, **Crea il link**. Chiunque apra il link ottiene quel ruolo, dopo la connessione. Il ruolo di un link si modifica, e **Elimina il link** lo revoca. Riservato al proprietario e al creatore per impostazione predefinita.
- L'aggiunta di un membro o di un reparto dell'organizzazione, quando il tuo account fa parte di un'organizzazione.
- L'elenco dei collaboratori, con ricerca per nome o e-mail, cambio di ruolo e **Rimuovi il collaboratore**.

## E poi

- [Permessi e ruoli](/it/docs/permissions) — cosa può fare ogni ruolo, ruoli personalizzati.
- [Crea la tua prima app](/it/docs/build-first-app) — generare o costruire l'app da pubblicare.
- [Viste e filtri](/it/docs/views-and-filters) — i tipi di vista che puoi condividere.
