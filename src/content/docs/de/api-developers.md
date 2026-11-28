---
title: "API und Entwicklerzugriff"
translationKey: "api-developers"
description: "Die TblFlow-API nutzen: persönliche Zugriffstoken, OAuth-Apps, Servicekonten für Skripte und CI, OpenAPI-Dokumentation und eingehende Webhooks."
section: "Anleitungen"
order: 15
---

Die REST-API von TblFlow gibt Zugriff auf dieselben Daten wie die Oberfläche, mit den Rechten der Person oder des Kontos, das sie aufruft. Alle ihre Routen beginnen mit `/api/`. Diese Seite stellt die vier Arten der Authentifizierung vor und danach die eingehenden Webhooks.

| Bedarf | Mittel |
|---|---|
| Ein Skript oder ein eigenes Werkzeug | Persönliches Zugriffstoken |
| Eine Drittanwendung, die im Namen von Benutzern handelt | OAuth-Anwendung |
| Ein Skript, eine Integration oder eine CI ohne Bezug zu einer Person | Servicekonto |
| Ein externes Werkzeug, das eine Automatisierung oder einen Agenten auslöst | Eingehender Webhook |

Die Token werden im Header `Authorization: Bearer <token>` gesendet.

## Persönliche Zugriffstoken

Ein persönliches Zugriffstoken handelt mit Ihren Rechten und ist auf die Berechtigungsbereiche sowie die Spaces oder Bases beschränkt, die Sie auswählen. Sie können den Zugriff nur auf Bases und Spaces gewähren, auf die Sie selbst Zugriff haben.

Öffnen Sie in Ihren persönlichen Einstellungen **Persönliche Zugriffstoken** und dann **Neues Token erstellen**:

- **Name** und **Beschreibung**;
- **Ablauf**: 7, 30, 60, 90 oder 365 Tage oder ein benutzerdefiniertes Datum. Kein Token gilt länger als 365 Tage;
- **Berechtigungsbereiche**: die erlaubten Aktionen;
- **Zugriff**: eine Base, ein Space (alle seine aktuellen und künftigen Bases) oder **Alle Ressourcen**.

Das Token wird nur einmal angezeigt: Kopieren Sie es in diesem Moment. **Token neu generieren** erzeugt ein neues, und Skripte, die das alte verwenden, müssen aktualisiert werden. Nach dem Löschen eines Tokens haben die Skripte, die es verwenden, keinen Zugriff mehr auf die API. Eine E-Mail warnt Sie vor dem Ablauf (Schwellen von 14 und 3 Tagen); sie enthält nie das Token.

| Aktion | Route |
|---|---|
| Auflisten, erstellen | `GET` und `POST /api/access-token` |
| Ändern, löschen | `PUT` und `DELETE /api/access-token/:accessTokenId` |
| Neu generieren | `POST /api/access-token/:accessTokenId/refresh` |

## API-Abfragegenerator

Über die Seite der Tokens öffnet der Link **API-Abfragegenerator** `/developer/tool/query-builder`. Wählen Sie eine Base und eine Tabelle und stellen Sie Ansicht, Suche, Filter, Sortierung und Format der Zellen ein: Der Tab **API-Generator** erstellt die Abfrage und eine Vorschau des Rückgabewerts. Der Tab **KI-Kontext** erzeugt einen Text zum Kopieren in Ihren KI-Assistenten, in vollständiger oder kompakter Fassung, damit er versteht, wie er mit der Tabelle arbeiten kann.

## OpenAPI-Dokumentation

Die Anwendung erzeugt die OpenAPI-Beschreibung ihrer API und veröffentlicht sie unter den Pfaden `/docs` (Swagger) und `/redocs` (Redoc), sofern die Dokumentationsoption auf dem Server nicht deaktiviert ist.

## OAuth-Anwendungen

Eine OAuth-Anwendung erlaubt einem Drittdienst, den Zugriff auf das Konto Ihrer Benutzer anzufragen. Öffnen Sie in Ihren persönlichen Einstellungen **OAuth-Anwendungen** und dann **Neue OAuth-Anwendung**:

- **Name der OAuth-Anwendung**, **Beschreibung**, **URL der Startseite**, **Logo**;
- **Rückruf-URLs** (mehrere möglich): die Adresse, zu der der Benutzer nach der Freigabe der Anwendung zurückgeleitet wird;
- **Berechtigungsbereiche**: die Berechtigungen, die die Anwendung benötigt;
- **Client-Secrets**: **Neues Client-Secret generieren**. Das Secret ist nur bei seiner Erstellung sichtbar. Jedes Secret zeigt seine letzte Verwendung an.

Die **Client-ID** steht auf der Seite der Anwendung. Der Ablauf ist der OAuth-2.0-Autorisierungscode:

1. Die Anwendung leitet den Benutzer zu `GET /api/oauth/authorize` weiter (mit `client_id` und `response_type`).
2. Der Benutzer meldet sich an, sieht „{Name} fordert Zugriff auf Ihr Konto an“ mit den angefragten Berechtigungsbereichen und wählt **Autorisieren**.
3. Die Anwendung tauscht den Code mit `POST /api/oauth/access_token` gegen Token, wobei sie sich mit ihrem Client authentifiziert. Ein Aktualisierungstoken erlaubt, ein neues zu erhalten.

Der Benutzer findet die Anwendungen, die er autorisiert hat, unter **Profil → Sicherheit → Autorisierte Anwendungen** und kann ihnen den Zugriff entziehen (Widerrufsschaltfläche).

| Aktion | Route |
|---|---|
| Anwendungen auflisten und erstellen | `GET` und `POST /api/oauth/client` |
| Lesen, ändern, löschen | `GET`, `PUT` und `DELETE /api/oauth/client/:clientId` |
| Ein Secret erstellen oder löschen | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Den Zugriff aller Benutzer entziehen | `POST /api/oauth/client/:clientId/revoke-access` |
| Ihre eigene Autorisierung entziehen | `POST /api/oauth/client/:clientId/revoke-token` |
| Autorisierte Anwendungen auflisten | `GET /api/oauth/client/authorized/list` |

Der [MCP-Server](/de/docs/mcp-server) und das [CLI](/de/docs/cli) laufen ebenfalls über den OAuth-Server von TblFlow.

## Servicekonten

Ein Servicekonto gibt einem Skript, einer Integration oder einer CI Zugriff auf einen Space, der von keiner Person abhängt. Es ist Mitglied des Spaces mit der gewählten Rolle (nie Eigentümer), belegt keinen Platz, und seine Token gelten nur für diesen Space.

Die Seite ist den Eigentümern des Spaces vorbehalten: **Space-Einstellungen → Sicherheit und Audit → Servicekonten**.

1. Geben Sie den **Kontonamen** ein und wählen Sie die **Rolle**: **Betrachter**, **Editor** oder **Ersteller**, dann **Konto erstellen**.
2. Um ein Token auszustellen, geben Sie einen **Tokennamen**, einen **Zugriff** (**Nur Lesen**, **Datensätze lesen und schreiben** oder **Alles, was die Rolle erlaubt**) und eine **Gültigkeit** von 30, 90, 180 oder 365 Tagen an, dann **Token ausstellen**.
3. Kopieren Sie das Token: Es wird nie wieder angezeigt.

Der tatsächliche Zugriff ist die Schnittmenge der Berechtigungsbereiche des Tokens und der Rolle des Kontos. **Widerrufen** eines Tokens oder **Löschen** eines Kontos wirkt ab der Bestätigung. Ein Space zählt höchstens 50 Servicekonten, und ein Konto höchstens 20 Token. Jede Erstellung, Rollenänderung, Ausstellung und jeder Widerruf wird im Protokoll des Spaces eingetragen, und die Eigentümer erhalten eine E-Mail vor dem Ablauf eines Tokens. Das [CLI](/de/docs/cli) nutzt es in der kontinuierlichen Integration.

| Aktion | Route (Eigentümer des Spaces) |
|---|---|
| Auflisten, erstellen | `GET` und `POST /api/space/:spaceId/service-account` |
| Rolle ändern, löschen | `PATCH` und `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Token ausstellen | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, `baseIds` optional) |
| Token widerrufen | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Eingehende Webhooks

### Eine Automatisierung auslösen

Eine [Automatisierung](/de/docs/automations), deren Auslöser **Wenn ein Webhook empfangen wird** ist, wird durch eine HTTP-Anfrage gestartet:

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- Die Adresse wird im Editor der Automatisierung und unter **Automatisieren → Webhooks** mit **Adresse kopieren** angezeigt.
- Das Secret ist Pflicht. Ohne den richtigen `X-Webhook-Secret` erhält die Anfrage einen Fehler 401. Die Kennung der Automatisierung allein genügt nicht zur Authentifizierung.
- `Idempotency-Key` (oder `X-Idempotency-Key`, höchstens 255 Zeichen) verhindert, dass dasselbe Ereignis zweimal verarbeitet wird: Die Antwort enthält dann `duplicate: true`.
- Die Antwort ist `{ "received": true, "queued": true, "eventId": "…" }`, sobald das Ereignis erfasst ist. Schlägt die Erfassung fehl, antwortet der Server mit 503: Versuchen Sie es erneut.
- Der JSON-Body wird in den Schritten der Automatisierung auf der obersten Ebene gelesen.
- Ist die Automatisierung inaktiv, antwortet die Anfrage mit `{ "received": true, "steps": 0 }`, ohne etwas auszuführen.

Jeder angenommene Aufruf zählt auf das monatliche Ausführungskontingent der Automatisierungen.

### Einen Agenten auslösen

Ein [Agent](/de/docs/ai-agents) kann ebenfalls einen Auslöser **Eingehender Webhook** haben. Die Anfrage ist `POST /api/agent/:agentId/webhook` mit dem Header `X-Agent-Secret` und einem JSON-Body. Ein ungültiges Secret erhält einen Fehler 401. Die Antwort ist `{ "received": true }`, und der Agent läuft danach; der Aufruf verbraucht das Kontingent an Agentenausführungen.
