---
title: "API et accès développeurs"
translationKey: "api-developers"
description: "Appeler l'API TblFlow : jetons d'accès personnels, OAuth, comptes de service pour scripts et CI, documentation OpenAPI et webhooks entrants."
section: "Guides"
order: 15
---

L'API REST de TblFlow donne accès aux mêmes données que l'interface, avec les droits de la personne ou du compte qui appelle. Toutes ses routes commencent par `/api/`. Cette page présente les quatre façons de s'authentifier, puis les webhooks entrants.

| Besoin | Moyen |
|---|---|
| Un script ou un outil à vous | Jeton d'accès personnel |
| Une application tierce qui agit pour des utilisateurs | Application OAuth |
| Un script, une intégration ou une CI sans lien avec une personne | Compte de service |
| Un outil externe qui déclenche une automatisation ou un agent | Webhook entrant |

Les jetons s'envoient dans l'en-tête `Authorization: Bearer <jeton>`.

## Jetons d'accès personnels

Un jeton d'accès personnel agit avec vos droits, limités aux portées et aux espaces ou bases que vous choisissez. Vous ne pouvez accorder l'accès qu'aux bases et espaces auxquels vous avez vous-même accès.

Dans vos réglages personnels, ouvrez **Jetons d'accès personnel**, puis **Créer un nouveau jeton** :

- **Nom** et **Description** ;
- **Expiration** : 7, 30, 60, 90 ou 365 jours, ou une date personnalisée. Aucun jeton ne vit plus de 365 jours ;
- **Périmètres** : les actions autorisées ;
- **Accès** : une base, un espace (toutes ses bases actuelles et futures) ou **Toutes les ressources**.

Le jeton n'est affiché qu'une fois : copiez-le à ce moment. **Régénérer le jeton** en produit un nouveau, et les scripts qui utilisent l'ancien doivent être mis à jour. Une fois un jeton supprimé, les scripts qui l'utilisent n'accèdent plus à l'API. Un e-mail vous prévient avant l'expiration (seuils de 14 et 3 jours) ; il ne contient jamais le jeton.

| Action | Route |
|---|---|
| Lister, créer | `GET` et `POST /api/access-token` |
| Modifier, supprimer | `PUT` et `DELETE /api/access-token/:accessTokenId` |
| Régénérer | `POST /api/access-token/:accessTokenId/refresh` |

## Générateur de requêtes API

Depuis la page des jetons, le lien **Générateur de requêtes API** ouvre `/developer/tool/query-builder`. Choisissez une base et une table, réglez la vue, la recherche, le filtre, le tri et le format des cellules : l'onglet **Générateur API** construit la requête et un aperçu de la valeur de retour. L'onglet **Contexte IA** produit un texte à copier dans votre assistant IA, en version complète ou compacte, pour qu'il comprenne comment interagir avec la table.

## Documentation OpenAPI

L'application génère la description OpenAPI de son API et la publie aux chemins `/docs` (Swagger) et `/redocs` (Redoc), sauf si l'option de documentation est désactivée sur le serveur.

## Applications OAuth

Une application OAuth permet à un service tiers de demander l'accès au compte de vos utilisateurs. Dans vos réglages personnels, ouvrez **Applications OAuth**, puis **Nouvelle application OAuth** :

- **Nom de l'application OAuth**, **Description**, **URL de la page d'accueil**, **Logo** ;
- **URL de rappel** (plusieurs possibles) : l'adresse où l'utilisateur est renvoyé après avoir autorisé l'application ;
- **Périmètres** : les autorisations dont l'application a besoin ;
- **Secrets du client** : **Générer un nouveau secret client**. Le secret n'est visible qu'à sa création. Chaque secret affiche sa dernière utilisation.

L'**ID Client** se lit sur la page de l'application. Le flux est le code d'autorisation OAuth 2.0 :

1. L'application renvoie l'utilisateur vers `GET /api/oauth/authorize` (avec `client_id` et `response_type`).
2. L'utilisateur se connecte, voit « {nom} demande l'accès à votre compte » avec les périmètres demandés, puis choisit **Autoriser**.
3. L'application échange le code contre des jetons avec `POST /api/oauth/access_token`, en s'authentifiant avec son client. Un jeton de renouvellement permet d'en obtenir un nouveau.

L'utilisateur retrouve les applications qu'il a autorisées dans **Profil → Sécurité → Applications autorisées**, et peut leur retirer l'accès (bouton de révocation).

| Action | Route |
|---|---|
| Lister, créer une application | `GET` et `POST /api/oauth/client` |
| Lire, modifier, supprimer | `GET`, `PUT` et `DELETE /api/oauth/client/:clientId` |
| Créer ou supprimer un secret | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Retirer l'accès de tous les utilisateurs | `POST /api/oauth/client/:clientId/revoke-access` |
| Retirer votre propre autorisation | `POST /api/oauth/client/:clientId/revoke-token` |
| Lister les applications autorisées | `GET /api/oauth/client/authorized/list` |

Le [serveur MCP](/fr/docs/serveur-mcp) et le [CLI](/fr/docs/cli) passent aussi par le serveur OAuth de TblFlow.

## Comptes de service

Un compte de service donne à un script, une intégration ou une CI un accès à un espace qui ne dépend d'aucune personne. Il est membre de l'espace avec le rôle choisi (jamais propriétaire), n'occupe pas de siège, et ses jetons ne valent que pour cet espace.

La page est réservée aux propriétaires de l'espace : **Réglages de l'espace → Sécurité et audit → Comptes de service**.

1. Saisissez le **Nom du compte** et choisissez le **Rôle** : **Lecteur**, **Éditeur** ou **Créateur**, puis **Créer le compte**.
2. Pour émettre un jeton, donnez un **Nom du jeton**, un **Accès** (**Lecture seule**, **Lecture et écriture des enregistrements** ou **Tout ce que permet le rôle**) et une **Validité** de 30, 90, 180 ou 365 jours, puis **Émettre un jeton**.
3. Copiez le jeton : il ne sera plus jamais affiché.

L'accès réel est l'intersection des portées du jeton et du rôle du compte. **Révoquer** un jeton ou **Supprimer** un compte prend effet dès la confirmation. Un espace compte 50 comptes de service au plus, et un compte 20 jetons au plus. Chaque création, changement de rôle, émission et révocation est inscrit au journal de l'espace, et les propriétaires reçoivent un e-mail avant l'expiration d'un jeton. Le [CLI](/fr/docs/cli) l'utilise en intégration continue.

| Action | Route (propriétaire de l'espace) |
|---|---|
| Lister, créer | `GET` et `POST /api/space/:spaceId/service-account` |
| Changer le rôle, supprimer | `PATCH` et `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Émettre un jeton | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, `baseIds` facultatif) |
| Révoquer un jeton | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Webhooks entrants

### Déclencher une automatisation

Une [automatisation](/fr/docs/automatisations) dont le déclencheur est **Lorsqu'un webhook est reçu** se lance par une requête HTTP :

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- L'adresse s'affiche dans l'éditeur de l'automatisation, et dans **Automatiser → Webhooks** avec **Copier l'adresse**.
- Le secret est obligatoire. Sans le bon `X-Webhook-Secret`, la requête reçoit une erreur 401. L'identifiant de l'automatisation ne suffit pas à s'authentifier.
- `Idempotency-Key` (ou `X-Idempotency-Key`, 255 caractères au plus) évite de traiter deux fois le même événement : la réponse porte alors `duplicate: true`.
- La réponse est `{ "received": true, "queued": true, "eventId": "…" }` dès que l'événement est enregistré. Si l'enregistrement échoue, le serveur répond 503 : réessayez.
- Le corps JSON se lit à la racine dans les étapes de l'automatisation.
- Si l'automatisation est inactive, la requête répond `{ "received": true, "steps": 0 }` sans rien exécuter.

Chaque appel accepté compte dans le quota mensuel d'exécutions d'automatisation.

### Déclencher un agent

Un [agent](/fr/docs/agents-ia) peut aussi avoir un déclencheur **Webhook entrant**. La requête est `POST /api/agent/:agentId/webhook` avec l'en-tête `X-Agent-Secret` et un corps JSON. Un secret invalide reçoit une erreur 401. La réponse est `{ "received": true }` et l'agent s'exécute ensuite ; l'appel consomme le quota d'exécutions d'agent.
