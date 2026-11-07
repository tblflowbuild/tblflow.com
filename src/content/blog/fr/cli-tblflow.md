---
title: "Le CLI TblFlow : vos bases depuis le terminal et la CI"
translationKey: "cli"
description: "Le CLI TblFlow est publié sur npm : connexion par code appareil ou jeton de service, import et export CSV, automatisations et agents, et un serveur MCP local pour Claude Code ou Cursor."
publishedAt: 2026-11-07
author: "TblFlow"
tags: ["cli", "mcp", "produit"]
---

Une partie du travail sur les données se fait loin de l'interface : un script qui charge un export comptable chaque matin, une étape de CI qui vérifie une table avant une mise en production, un développeur qui veut regarder dix enregistrements sans ouvrir son navigateur. Pour ces usages, TblFlow publie un CLI : `@tblflow/cli`, sur npm.

```bash
npm install -g @tblflow/cli
tblflow login
```

## Deux façons de se connecter

Sur votre poste, `tblflow login` affiche un code que vous approuvez dans le navigateur. Le jeton obtenu est rangé dans le trousseau du système, et `tblflow logout` le révoque côté serveur.

En intégration continue, on ne se connecte pas à la main. Vous créez un **jeton de service** dans les réglages de l'espace (Sécurité et audit, Comptes de service), vous le rangez dans les secrets de la CI, et le CLI le lit dans la variable `TBLFLOW_TOKEN`. Il ne l'écrit jamais sur le disque et ne l'affiche dans aucune sortie.

## Ce qu'il fait

- **Lire et écrire** : lister des enregistrements avec filtre, tri et pagination, en lire un, en créer, en modifier, en supprimer. Une suppression montre d'abord un aperçu et ne s'exécute qu'avec `--confirm` ; les enregistrements vont à la corbeille.
- **Importer un CSV** : dans une table existante, ou dans une nouvelle table avec `tblflow import --new-table`. `--dry-run` montre ce qui serait créé sans rien écrire.
- **Exporter** une table ou une vue en CSV.
- **Lancer** une automatisation ou un agent que son propriétaire a exposé.
- **Appeler l'API** directement pour ce qui n'a pas de commande dédiée.

Chaque commande accepte `--json`, et les codes de sortie (0, 1, 2) permettent de l'enchaîner dans un script.

## Un serveur MCP local

Le [serveur MCP distant](/fr/mcp) connecte Claude (web, bureau, mobile) à vos bases sans rien installer. Certains clients préfèrent lancer un processus sur votre poste : c'est ce que fait `tblflow mcp serve`. Une ligne dans la configuration de Claude Code ou de Cursor suffit, et le client travaille sur vos bases avec vos droits TblFlow.

## Pour commencer

Le guide complet, avec toutes les commandes, est dans la [documentation du CLI](/fr/docs/cli). Le CLI est sous licence MIT ; son usage avec un compte TblFlow est régi par les conditions générales d'utilisation et la politique de confidentialité publiées sur app.tblflow.com.
