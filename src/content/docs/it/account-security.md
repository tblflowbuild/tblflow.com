---
title: "Account e sicurezza"
translationKey: "account-security"
description: "Accedere a TblFlow senza password (passkey, link via e-mail, accesso esterno) e gestire profilo, lingua, notifiche ed eliminazione dell'account."
section: "Guide"
order: 16
---

Questa pagina descrive ciò che riguarda il **tuo account personale**: l'accesso, il profilo, le preferenze, la ricerca rapida, l'esportazione dei tuoi dati e l'eliminazione dell'account. Le impostazioni che valgono per un intero spazio sono in [Impostazioni dello spazio](/it/docs/space-settings).

## Accedere

La schermata di accesso non propone **alcuna password**. Esistono tre modalità. Le prime due sono sempre presenti, la terza dipende dall'istanza.

| Modalità | Come usarla |
|---|---|
| Passkey | Clicca su **Accedi con una passkey**, poi conferma con il metodo del tuo dispositivo. |
| Link via e-mail | Sotto **Oppure accedi via e-mail**, inserisci il tuo indirizzo e clicca su **Inviami un link di accesso**. |
| Accesso esterno | Sotto **Oppure continua con**, scegli un fornitore: GitHub, Google o OIDC. Compaiono solo i fornitori attivati sull'istanza. |

### Passkey

Una passkey si basa su Face ID, Touch ID, Windows Hello o una chiave di sicurezza. Si aggiunge **dopo** il primo accesso, dal profilo (vedi più avanti).

### Link via e-mail

TblFlow invia al tuo indirizzo un link di accesso e un codice a 6 cifre. Il messaggio indica che il link scade tra 10 minuti. Puoi aprire il link, oppure inserire il codice nel campo **Codice a 6 cifre** e cliccare su **Accedi**. **Invia di nuovo un link** ripete l'invio.

- Questa modalità funziona solo per un indirizzo che ha già un account. Per un indirizzo sconosciuto, la schermata si comporta come per un indirizzo noto, ma non viene inviata alcuna e-mail: è voluto, per non rivelare quali indirizzi hanno un account. Crea l'account con la registrazione.
- Le richieste sono distanziate: la schermata indica quanti secondi attendere prima di chiederne un'altra.
- Dopo troppi codici errati, l'accesso viene bloccato per alcuni minuti.
- Se l'istanza usa una verifica anti-robot, questa compare sotto il campo e va completata prima dell'invio.

Un'impostazione dell'istanza permette di disattivare questo link. In tal caso la schermata mostra «L'accesso senza password non è disponibile su questa istanza».

### Accesso esterno e SSO

I pulsanti **GitHub**, **Google** e **OIDC** reindirizzano al fornitore. Compaiono solo se l'istanza li ha configurati. Il pulsante **OIDC** corrisponde a un fornitore OpenID Connect configurato a livello di istanza: non si regola nelle impostazioni dello spazio.

## Creare un account

Apri **Registrati** dalla schermata di accesso. Il modulo chiede:

- il tuo indirizzo e-mail;
- l'accettazione dei termini di servizio e dell'informativa sulla privacy (obbligatoria);
- un **codice di verifica** inviato via e-mail, quando l'istanza lo richiede;
- un **codice di invito**, quando l'istanza funziona con una lista d'attesa. Il link **Unisciti alla lista d'attesa** permette di iscriversi.

Non viene creata alcuna password. A seconda della configurazione, l'istanza può anche chiudere le registrazioni: la scheda di registrazione resta allora disponibile solo tramite un link di invito a uno spazio, a una base o a una vista condivisa.

## Il mio profilo

Apri il menu del tuo avatar, poi **Impostazioni**. La finestra raccoglie le tue impostazioni personali: **Il mio account**, poi **Le mie notifiche**, **Connettori**, **Token di accesso personali**, **Le mie skill** e **Applicazioni OAuth**. Le impostazioni dello spazio attuale compaiono nella stessa finestra quando vi hai accesso.

La scheda **Il mio account** (titolo **Il mio profilo**) contiene:

| Impostazione | Dettaglio |
|---|---|
| Avatar | **Cambia avatar** apre la scelta di un'immagine. |
| Nome visualizzato | Il nome con cui sei chiamato in TblFlow. Viene salvato uscendo dal campo. |
| **Nome** e **COGNOME** | Il cognome viene salvato in maiuscolo. |
| Tema | **Chiaro**, **Scuro** o **Sistema**. |
| Lingua | Vedi sotto. |
| **Vista delle basi** | Visualizzazione dell'elenco delle basi di uno spazio: **Automatica**, **Scheda** o **Elenco**. |
| **Vista in una base** | Visualizzazione all'apertura di una base: stesse tre scelte. |
| **Modalità di interazione** | **Modalità mouse**, **Modalità touch** o **Segui il sistema**. Questa scelta compare solo su un dispositivo che gestisce sia il touch sia il mouse. |

### Lingua dell'interfaccia

Il selettore **Lingua** propone dieci lingue, più la voce **Default** (lingua del browser):

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe e Español (Latinoamérica).

La scelta viene salvata sul tuo account, poi la pagina si ricarica.

### Sicurezza dell'account

La sezione **Sicurezza dell'account** raccoglie le seguenti voci.

**Indirizzo e-mail.** **Cambia indirizzo e-mail** chiede il nuovo indirizzo, invia un codice di verifica con **Invia codice**, poi **Conferma** lo convalida. La tua sessione viene chiusa e torni alla schermata di accesso. Questa operazione richiede di aver presentato una passkey o un codice di backup negli ultimi 15 minuti: registra una passkey prima di averne bisogno.

**Passkey.** **Aggiungi una passkey** avvia la registrazione sul tuo dispositivo e ti chiede di dare un nome alla chiave. Ogni chiave elencata ha un pulsante **Elimina**. Non appena il tuo account possiede una passkey o un codice di backup, aggiungere o eliminare una chiave richiede la stessa verifica recente con un fattore forte. Un account che non ne ha ancora nessuna può registrare la prima direttamente.

**Codici di backup.** **Genera** crea dieci codici monouso. Sostituiscono la tua passkey se la perdi, ma non servono per accedere. Vengono mostrati una sola volta: usa subito **Copia** o **Scarica**. **Rigenera** sostituisce l'intero lotto, e i vecchi codici smettono di funzionare. Viene indicato il numero di codici rimasti.

**Accesso del supporto TblFlow.** Un interruttore permette al supporto di accedere al posto tuo quando richiedi assistenza. È disattivato per impostazione predefinita. Secondo il testo mostrato, ogni sessione dura al massimo 30 minuti, è in sola lettura salvo diverso accordo ed è registrata con il suo motivo. Puoi revocarlo in qualsiasi momento.

**Trattamento dei tuoi dati.** Due interruttori:

- **Limita il trattamento dei miei dati (GDPR Art. 18)**: blocca i trattamenti automatizzati non essenziali, senza eliminare nulla. Il tuo account continua a funzionare.
- **Oppormi al trattamento IA dei miei contenuti (GDPR Art. 21)**: i documenti importati smettono di essere indicizzati e letti dalle funzioni IA. Restano archiviati e scaricabili.

La limitazione include già il trattamento IA: in tal caso il secondo interruttore è bloccato.

La sezione mostra anche le integrazioni di terze parti autorizzate, che puoi revocare. I connettori, i token personali e le applicazioni OAuth hanno pagine dedicate: vedi [Connettori](/it/docs/connectors) e [API e sviluppatori](/it/docs/api-developers).

## Notifiche

### Il centro notifiche

L'icona a forma di campanella mostra il numero di notifiche non lette. Il pannello propone due elenchi, quelle non lette e quelle lette (**Letto**), il pulsante **Segna tutto come letto** e **Mostra altro** per caricare il resto.

### Le e-mail

**Le mie notifiche** regola ciò che ricevi via e-mail. Tre livelli:

| Livello | Contenuto |
|---|---|
| **Tutte le notifiche** | Menzioni e commenti, più i messaggi della piattaforma: fine di un import o di un export, automazione o generazione IA fallita, quote e fatturazione. |
| **Solo menzioni e commenti** | Solo quando qualcuno ti nomina in una cella o in un commento, oppure commenta. |
| **Nessuna e-mail** | Le notifiche restano visibili nell'applicazione. |

L'inoltro verso Slack, Teams o Google Chat è un'impostazione dello spazio, non personale: vedi [Impostazioni dello spazio](/it/docs/space-settings).

## Palette dei comandi e ricerca

**Ctrl+K** (**⌘+K** su Mac) apre la palette **Azioni rapide**. Anche un pulsante con l'icona della lente la apre, e la stessa scorciatoia la chiude.

- **In una base**: la palette elenca le tabelle, le applicazioni e le automazioni della base. Propone anche le azioni di creazione, **Apri l'assistente IA** (oppure **Chiedi all'assistente** con il testo inserito), la scelta del tema e l'apertura delle impostazioni.
- **In uno spazio**: la digitazione avvia una ricerca sul server nello spazio. I risultati possono essere basi, tabelle, viste, dashboard, automazioni o applicazioni, a pagine di 10 con **Carica altro**. Un risultato apre l'elemento. L'azione **Crea una base** compare se il tuo ruolo lo consente.

Le azioni proposte dipendono dai tuoi diritti: un'azione non consentita non compare.

**In una tabella**, **Ctrl+F** (**⌘+F** su Mac) porta il cursore nella ricerca della barra degli strumenti. Offre la **Ricerca globale** (tutti i campi tranne date, caselle di controllo e pulsanti) oppure la **Ricerca per campo**. Vedi [Viste e filtri](/it/docs/views-and-filters).

## Esportare i miei dati

In fondo alla scheda **Il mio account**, **Scarica l'archivio** produce un file zip. Contiene un file `profile.json` con i campi del tuo profilo, una cartella per ogni base di cui sei proprietario in uno spazio (record e allegati) e, se ne hai, i metadati delle tue credenziali di siti di terze parti. Le password associate non vengono esportate.

## Eliminare il mio account

In fondo alla scheda **Il mio account**, **Elimina l'account** apre una conferma. L'azione è irreversibile.

1. Lascia prima i tuoi spazi. Finché sei membro di uno spazio, oppure proprietario o creatore di uno spazio spostato nel cestino, l'eliminazione viene rifiutata e la schermata elenca gli spazi interessati, con un link a ciascuno.
2. Inserisci `DELETE` nel campo di conferma. Il pulsante **Elimina** resta inattivo finché il testo è diverso.
3. Il server richiede un accesso recente di meno di 15 minuti (una passkey o un codice di backup usati di recente, se ne hai). Altrimenti, accedi di nuovo e ripeti l'operazione.

Cosa succede poi:

- il tuo indirizzo viene sostituito, il tuo nome cancellato e il tuo avatar sostituito con un avatar predefinito;
- i tuoi token di accesso, gli account collegati, le passkey, i codici di backup, le notifiche e le conversazioni con gli agenti vengono eliminati;
- i tuoi commenti vengono svuotati;
- i record delle basi condivise vengono conservati: appartengono al team e compari solo con il nome «Deleted User».
