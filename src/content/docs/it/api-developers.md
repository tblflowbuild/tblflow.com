---
title: "API e accesso sviluppatori"
translationKey: "api-developers"
description: "Chiamare l'API TblFlow: token personali, applicazioni OAuth, account di servizio per script e CI, documentazione OpenAPI e webhook in ingresso."
section: "Guide"
order: 15
---

L'API REST di TblFlow dà accesso agli stessi dati dell'interfaccia, con i diritti della persona o dell'account che effettua la chiamata. Tutte le sue route iniziano con `/api/`. Questa pagina presenta i quattro modi di autenticarsi, poi i webhook in ingresso.

| Esigenza | Strumento |
|---|---|
| Uno script o uno strumento personale | Token di accesso personale |
| Un'applicazione di terzi che agisce per conto degli utenti | Applicazione OAuth |
| Uno script, un'integrazione o una CI non legati a una persona | Account di servizio |
| Uno strumento esterno che avvia un'automazione o un agente | Webhook in ingresso |

I token si inviano nell'intestazione `Authorization: Bearer <token>`.

## Token di accesso personali

Un token di accesso personale agisce con i tuoi diritti, limitato agli ambiti e agli spazi o alle basi che scegli. Puoi concedere l'accesso solo alle basi e agli spazi a cui tu stesso hai accesso.

Nelle tue impostazioni personali apri **Token di accesso personale**, poi **Crea nuovo token**:

- **Nome** e **Descrizione**;
- **Scadenza**: 7, 30, 60, 90 o 365 giorni, oppure una data personalizzata. Nessun token vale più di 365 giorni;
- **Ambiti**: le azioni consentite;
- **Accesso**: una base, uno spazio (tutte le sue basi attuali e future) o **Tutte le risorse**.

Il token viene mostrato una sola volta: copialo in quel momento. **Rigenera token** ne produce uno nuovo, e gli script che usano quello vecchio devono essere aggiornati. Una volta eliminato un token, gli script che lo usano non accedono più all'API. Un'email ti avvisa prima della scadenza (soglie di 14 e 3 giorni); non contiene mai il token.

| Azione | Route |
|---|---|
| Elencare, creare | `GET` e `POST /api/access-token` |
| Modificare, eliminare | `PUT` e `DELETE /api/access-token/:accessTokenId` |
| Rigenerare | `POST /api/access-token/:accessTokenId/refresh` |

## Costruttore di query API

Dalla pagina dei token, il link **Costruttore di query API** apre `/developer/tool/query-builder`. Scegli una base e una tabella, imposta vista, ricerca, filtro, ordinamento e formato delle celle: la scheda **API Builder** costruisce la query e un'anteprima del valore restituito. La scheda **Contesto IA** produce un testo da copiare nel tuo assistente IA, in versione completa o compatta, perché capisca come interagire con la tabella.

## Documentazione OpenAPI

L'applicazione genera la descrizione OpenAPI della sua API e la pubblica ai percorsi `/docs` (Swagger) e `/redocs` (Redoc), a meno che l'opzione di documentazione sia disattivata sul server.

## Applicazioni OAuth

Un'applicazione OAuth permette a un servizio di terze parti di chiedere l'accesso all'account dei tuoi utenti. Nelle tue impostazioni personali apri **Applicazioni OAuth**, poi **Nuova applicazione OAuth**:

- **Nome dell'applicazione OAuth**, **Descrizione**, **URL della pagina iniziale**, **Logo**;
- **URL di callback** (più di uno è possibile): l'indirizzo a cui l'utente torna dopo aver autorizzato l'applicazione;
- **Ambiti**: le autorizzazioni di cui l'applicazione ha bisogno;
- **Segreti del client**: **Genera un nuovo segreto client**. Il segreto è visibile solo al momento della creazione. Ogni segreto mostra il suo ultimo utilizzo.

L'**ID client** si legge nella pagina dell'applicazione. Il flusso è il codice di autorizzazione OAuth 2.0:

1. L'applicazione rimanda l'utente a `GET /api/oauth/authorize` (con `client_id` e `response_type`).
2. L'utente accede, vede « {nome} richiede l'accesso al tuo account » con gli ambiti richiesti, poi sceglie **Autorizza**.
3. L'applicazione scambia il codice con dei token tramite `POST /api/oauth/access_token`, autenticandosi con il proprio client. Un token di rinnovo permette di ottenerne uno nuovo.

L'utente ritrova le applicazioni autorizzate in **Profilo → Sicurezza → Applicazioni autorizzate** e può revocarne l'accesso (pulsante di revoca).

| Azione | Route |
|---|---|
| Elencare, creare un'applicazione | `GET` e `POST /api/oauth/client` |
| Leggere, modificare, eliminare | `GET`, `PUT` e `DELETE /api/oauth/client/:clientId` |
| Creare o eliminare un segreto | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Revocare l'accesso a tutti gli utenti | `POST /api/oauth/client/:clientId/revoke-access` |
| Revocare la tua autorizzazione | `POST /api/oauth/client/:clientId/revoke-token` |
| Elencare le applicazioni autorizzate | `GET /api/oauth/client/authorized/list` |

Il [server MCP](/it/docs/mcp-server) e la [CLI](/it/docs/cli) passano anch'essi dal server OAuth di TblFlow.

## Account di servizio

Un account di servizio dà a uno script, a un'integrazione o a una CI l'accesso a uno spazio che non dipende da nessuna persona. È membro dello spazio con il ruolo scelto (mai proprietario), non occupa un posto e i suoi token valgono solo per quello spazio.

La pagina è riservata ai proprietari dello spazio: **Impostazioni dello spazio → Sicurezza e audit → Account di servizio**.

1. Inserisci il **Nome dell'account** e scegli il **Ruolo**: **Lettore**, **Editor** o **Creatore**, poi **Crea account**.
2. Per emettere un token, indica un **Nome del token**, un **Accesso** (**Sola lettura**, **Lettura e scrittura dei record** o **Tutto ciò che consente il ruolo**) e una **Validità** di 30, 90, 180 o 365 giorni, poi **Emetti un token**.
3. Copia il token: non verrà più mostrato.

L'accesso effettivo è l'intersezione tra gli ambiti del token e il ruolo dell'account. **Revoca** di un token o **Elimina** di un account ha effetto alla conferma. Uno spazio conta al massimo 50 account di servizio, e un account al massimo 20 token. Ogni creazione, cambio di ruolo, emissione e revoca è registrata nel registro dello spazio, e i proprietari ricevono un'email prima della scadenza di un token. La [CLI](/it/docs/cli) lo usa in integrazione continua.

| Azione | Route (proprietario dello spazio) |
|---|---|
| Elencare, creare | `GET` e `POST /api/space/:spaceId/service-account` |
| Cambiare ruolo, eliminare | `PATCH` e `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Emettere un token | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, `baseIds` facoltativo) |
| Revocare un token | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Webhook in ingresso

### Avviare un'automazione

Un'[automazione](/it/docs/automations) il cui trigger è **Quando viene ricevuto un webhook** parte con una richiesta HTTP:

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- L'indirizzo appare nell'editor dell'automazione e in **Automazioni → Webhook** con **Copia indirizzo**.
- Il segreto è obbligatorio. Senza il giusto `X-Webhook-Secret`, la richiesta riceve un errore 401. L'identificatore dell'automazione non basta per autenticarsi.
- `Idempotency-Key` (o `X-Idempotency-Key`, 255 caratteri al massimo) evita di elaborare due volte lo stesso evento: la risposta riporta allora `duplicate: true`.
- La risposta è `{ "received": true, "queued": true, "eventId": "…" }` non appena l'evento è registrato. Se la registrazione fallisce, il server risponde 503: riprova.
- Il corpo JSON si legge alla radice nei passaggi dell'automazione.
- Se l'automazione è inattiva, la richiesta risponde `{ "received": true, "steps": 0 }` senza eseguire nulla.

Ogni chiamata accettata conta nel contingente mensile di esecuzioni delle automazioni.

### Avviare un agente

Un [agente](/it/docs/ai-agents) può anche avere un trigger **Webhook in ingresso**. La richiesta è `POST /api/agent/:agentId/webhook` con l'intestazione `X-Agent-Secret` e un corpo JSON. Un segreto non valido riceve un errore 401. La risposta è `{ "received": true }` e l'agente viene eseguito dopo; la chiamata consuma il contingente di esecuzioni degli agenti.
