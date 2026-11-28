---
title: "Autorizzazioni e ruoli"
translationKey: "permissions"
description: "Gestire le autorizzazioni in TblFlow: i cinque ruoli predefiniti, i ruoli personalizzati su spazio, base o tabella e le regole da conoscere."
section: "Guide"
order: 7
---

Le autorizzazioni decidono chi può vedere, modificare o amministrare cosa in TblFlow. Questa pagina spiega **dove** e **come** gestirle, ed elenca i diritti dei ruoli **presenti per impostazione predefinita**.

## Vocabolario

| Termine | Significato |
|---|---|
| **Azione** | Un diritto singolo, per esempio modificare un record o configurare i permessi di una base. |
| **Ruolo predefinito** | Uno dei cinque ruoli fissi: proprietario, creatore, editor, commentatore, lettore. Non si possono modificare. |
| **Matrice di permessi** | Un insieme di ruoli con un nome, su uno spazio, una base o una tabella. Nell'interfaccia si chiama «Permission». |
| **Ruolo personalizzato** | Un ruolo che nomini in una matrice, con l'elenco di azioni che scegli. |
| **Assegnazione** | Il legame tra un ruolo personalizzato e un utente. |

I ruoli personalizzati **si aggiungono** ai ruoli predefiniti: i loro diritti si sommano a quelli del ruolo dell'utente, senza sostituirli. La schermata di assegnazione propone solo i collaboratori dell'ambito.

## I ruoli predefiniti

### I cinque ruoli

La gerarchia è: proprietario, creatore, editor, commentatore, lettore (dal più al meno ricco di diritti). Un utente ottiene un ruolo diventando **collaboratore** di uno spazio o di una base: invito via e-mail, link di invito, oppure aggiunta di un membro o di un dipartimento dell'organizzazione. Su una base, i diritti del ruolo della base e quelli del ruolo dello spazio padre si **sommano**.

I ruoli che si possono proporre dipendono dal livello:

- **Spazio**: i cinque ruoli.
- **Base**: creatore, editor, commentatore e lettore (non proprietario).
- **Tabella**: creatore, editor e lettore.

I ruoli proprietario, creatore ed editor contano come un posto fatturabile.

### Cosa può fare ogni ruolo

✅ consentito, ❌ negato.

| Diritto | Proprietario | Creatore | Editor | Commentatore | Lettore |
|---|---|---|---|---|---|
| **Spazio**: creare, eliminare, modificare | ✅ | ❌ | ❌ | ❌ | ❌ |
| Spazio: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |
| Spazio: invitare via e-mail | ✅ | ✅ | ✅ | ✅ | ✅ |
| Spazio: creare un link di invito | ✅ | ✅ | ❌ | ❌ | ❌ |
| Spazio: configurare i permessi | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Base**: creare, eliminare, modificare | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: invitare via e-mail | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: creare un link di invito | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: esportare tabelle | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: importare tabelle | ✅ | ✅ | ✅ | ❌ | ❌ |
| Base: configurare i permessi | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: query sui dati | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: connessione al database | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tabella**: creare, modificare, eliminare, importare | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabella: leggere, esportare | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tabella: leggere e modificare il cestino | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tabella: svuotare il cestino | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabella: configurare i permessi | ✅ | ✅ | ❌ | ❌ | ❌ |
| Cronologia dei record | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Vista**: creare, modificare, eliminare, condividere | ✅ | ✅ | ✅ | ❌ | ❌ |
| Vista: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Campo**: creare, modificare, eliminare | ✅ | ✅ | ❌ | ❌ | ❌ |
| Campo: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Record**: creare, modificare, eliminare | ✅ | ✅ | ✅ | ❌ | ❌ |
| Record: leggere, copiare | ✅ | ✅ | ✅ | ✅ | ✅ |
| Record: commentare | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automazione**: creare, modificare, eliminare | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automazione: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Connettore**: creare, modificare | ✅ | ✅ | ✅ | ❌ | ❌ |
| Connettore: eliminare, installare dal catalogo | ✅ | ✅ | ❌ | ❌ | ❌ |
| Connettore: collegare il proprio account | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Applicazione**: creare, modificare, eliminare | ✅ | ✅ | ❌ | ❌ | ❌ |
| Applicazione: leggere | ✅ | ✅ | ✅ | ✅ | ✅ |

### Diritti che nessun ruolo di spazio concede

Alcuni diritti non passano dai ruoli qui sopra e sono negati a tutti:

- **Amministrazione dell'istanza** (pagine di amministrazione, importazione dell'organigramma): riservata agli amministratori dell'istanza.
- **Configurazione dell'azienda** (azioni «enterprise»): nessun ruolo di spazio le include, e un ruolo personalizzato non può concederle.

## Dove gestire le autorizzazioni

Esistono due operazioni: **assegnare un ruolo predefinito** e **creare un ruolo personalizzato**.

### Assegnare un ruolo predefinito

A livello di spazio o di base, invita un utente (via e-mail o tramite link) scegliendo il suo ruolo. Bisogna avere il diritto di invitare a quel livello (vedi la tabella: l'invito tramite link è riservato al proprietario e al creatore).

### Creare un ruolo personalizzato

Ci sono tre ambiti, con la stessa schermata:

| Ambito | Dove nell'interfaccia | Diritto richiesto |
|---|---|---|
| **Spazio** | Impostazioni dello spazio, scheda **Permissions** | Configurare i permessi dello spazio |
| **Base** | Icone della base, **Permission** (lucchetto) | Configurare i permessi della base |
| **Tabella** | Menu della tabella, voce **Permissions** (lucchetto) | Configurare i permessi della tabella |

Per impostazione predefinita, la voce **Permission** di una base compare solo per il proprietario e il creatore, e richiede il piano Team o superiore: sotto questo piano porta un badge del piano e conduce all'upgrade. Per una tabella, gli utenti che si possono selezionare sono i **collaboratori della base padre**: una tabella non ha collaboratori propri.

## Creare un ruolo personalizzato, passo dopo passo

1. **Crea la matrice.** Nella schermata Permission dell'ambito desiderato, clicca su **Nuova permission**. Basta un nome, la descrizione è facoltativa. Una matrice raggruppa più ruoli.
2. **Aggiungi un ruolo** (**Aggiungi un ruolo**) nella matrice: dagli un nome, poi spunta le azioni. Sono ordinate in gruppi comprimibili (Tabelle, Campi, Viste, Record, Collaborazione, Base, Automazioni, Altro), con una ricerca.
3. **Assegna il ruolo** (**Assegna**) a uno o più utenti, scelti tra i collaboratori dell'ambito. L'effetto è immediato: i diritti dell'utente vengono ricalcolati subito all'assegnazione e alla revoca.
4. **Modifica o rimuovi.** Un ruolo può essere rinominato, cambiare azioni o essere eliminato. Un'assegnazione si può rimuovere. Eliminare una matrice elimina anche i suoi ruoli e le sue assegnazioni.

## Regole e limiti da conoscere

- **Solo additivo.** I diritti di un ruolo personalizzato si aggiungono a quelli del ruolo predefinito, senza toglierli. Su una tabella, si aggiungono a quelli che la base concede già.
- **Azioni convalidate.** Il server rifiuta qualsiasi azione che non appartenga all'elenco ufficiale. Rifiuta anche l'amministrazione dello spazio (creare, eliminare o modificare lo spazio, assegnare un ruolo, configurare i permessi dello spazio) e le azioni di istanza e di azienda. Le altre azioni, comprese quelle dei connettori e quelle che aprono un'impostazione di spazio (notifiche, e-mail, domini, IA), possono essere concesse.
- **Coerenza dell'ambito.** Il server verifica che la matrice appartenga alla risorsa interessata e che il ruolo appartenga alla matrice.
- **Un'assegnazione è unica** per una coppia ruolo e utente: rifarla non la duplica.
- **Token di accesso personale.** Può solo restringere i diritti del suo proprietario, mai estenderli.
