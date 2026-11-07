---
title: "CLI TblFlow"
translationKey: "cli"
description: "Installer et utiliser le CLI TblFlow (@tblflow/cli) : connexion par code appareil ou par jeton de service, commandes, import CSV, export et serveur MCP local."
section: "Guides"
order: 8
---

Le CLI TblFlow pilote vos bases depuis un terminal : lire et écrire des enregistrements, importer et exporter des CSV, lancer les automatisations et agents exposés, et brancher un client MCP local (Claude Code, Cursor…) sur vos données. Il est publié sur npm sous le nom `@tblflow/cli`, sous licence MIT.

Il demande Node.js 20 ou plus et n'a aucune dépendance tierce.

## Installer

```bash
npm install -g @tblflow/cli
tblflow --help
```

Sans installation : `npx @tblflow/cli --help`.

## Se connecter

### Sur votre poste

```bash
tblflow login     # un code s'affiche, vous l'approuvez dans le navigateur
tblflow whoami
tblflow logout    # supprime la session locale et révoque le jeton côté serveur
```

Avant d'approuver, vérifiez que le code affiché dans le terminal est le même que dans le navigateur. Les jetons sont rangés dans le trousseau du système (macOS, Linux Secret Service). À défaut, ils sont rangés dans `~/.config/tblflow/credentials.json`, lisible par vous seul, et le CLI vous en avertit.

### En intégration continue

Créez un **jeton de service** dans TblFlow : Réglages de l'espace → Sécurité et audit → Comptes de service. Rangez-le dans les secrets de votre CI, puis exposez-le en variable d'environnement :

```bash
export TBLFLOW_TOKEN=...      # injecté par la CI, jamais écrit dans le dépôt
tblflow bases
```

`TBLFLOW_TOKEN` passe avant toute session enregistrée et n'est jamais écrit sur le disque. Pour enregistrer le jeton une fois sur une machine dédiée, lisez-le sur l'entrée standard :

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <jeton>` fonctionne aussi, mais le jeton reste alors dans l'historique du shell et dans la liste des processus : le CLI vous le rappelle. Le jeton est vérifié auprès du serveur avant d'être enregistré et n'apparaît dans aucune sortie ni message d'erreur. `tblflow logout` oublie un jeton enregistré ainsi sans le révoquer : la révocation se fait dans les réglages de l'espace.

### Choisir le serveur

Par défaut, le CLI parle à `https://app.tblflow.com`. Pour un autre serveur, utilisez `--host https://…` ou la variable `TBLFLOW_URL`. HTTPS est obligatoire, sauf pour `localhost`.

## Commandes

| Commande | Effet |
|---|---|
| `bases` | Espaces et bases accessibles |
| `tables <baseId>` | Tables d'une base |
| `records list <tableId>` | `--take N` (100 au plus), `--skip N`, `--fields a,b`, `--where "Champ=v"`, `--sort "Champ:desc"` |
| `records get <tableId> <recordId>` | Lit un enregistrement |
| `records create <tableId>` | `--data '<json>'` ou `--file f.json` (50 au plus) |
| `records update <tableId> [<recordId>]` | Met à jour un ou plusieurs enregistrements |
| `records delete <tableId> <recordId>…` | Aperçu, puis suppression (corbeille) avec `--confirm` |
| `import <tableId> <fichier.csv>` | Ajoute les lignes d'un CSV ; `--dry-run` |
| `import --new-table <baseId> <fichier.csv>` | Crée une table depuis un CSV ; `--name`, `--dry-run` |
| `export <tableId>` | CSV sur la sortie standard ou `--out fichier.csv` ; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Lance une automatisation exposée par son propriétaire |
| `run agent <baseId> <agentId> <tâche…>` | Lance un agent exposé par son propriétaire |
| `api <MÉTHODE> <chemin>` | Appel direct, chemins `/api/` uniquement ; `DELETE` exige `--confirm` |
| `mcp serve` | Serveur MCP local (stdio) |

`--json` fonctionne avec toutes les commandes. Codes de sortie : 0 en cas de succès, 1 en cas d'erreur, 2 pour une erreur d'usage ou une confirmation requise.

### Créer une table depuis un CSV

```bash
tblflow import --new-table <baseId> clients.csv --name "Clients" --dry-run
tblflow import --new-table <baseId> clients.csv --name "Clients"
```

`--dry-run` montre ce qui serait créé sans rien écrire.

## Brancher un client MCP local

`tblflow mcp serve` lance un serveur MCP local sur l'entrée et la sortie standard. Déclarez-le dans la configuration de votre client MCP :

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

Pour connecter Claude (web, bureau ou mobile) sans rien installer, utilisez plutôt le serveur MCP distant : voir le guide [Serveur MCP](/fr/docs/serveur-mcp).

## Conditions et données personnelles

L'usage du CLI avec un compte TblFlow est régi par les [conditions générales d'utilisation](https://app.tblflow.com/legal/terms) et la [politique de confidentialité](https://app.tblflow.com/legal/privacy). Le CLI ne collecte aucune télémétrie : il ne parle qu'au serveur TblFlow que vous configurez.
