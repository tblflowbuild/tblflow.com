---
title: "Serveur MCP : import CSV, 23 outils et page Sécurité et audit"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **23 outils** au lieu de 13 : import d'un CSV (`import_csv`), statistiques sur une table, corbeille et restauration, renommage et suppression d'un champ, vues d'une table, membres d'un espace, lecture de la carte des process, suivi des exécutions d'un agent.
- **Import CSV** : dans une table existante ou dans une nouvelle table. Un premier appel montre les colonnes, les types devinés et le nombre de lignes sans rien écrire ; l'import n'a lieu qu'après votre accord. Jusqu'à 2 Mio par appel ; au-delà, le [CLI](/fr/docs/cli) prend le relais.
- **Page Sécurité et audit** dans les réglages de l'espace, réservée aux propriétaires : journal de l'espace filtrable par type d'événement et par période, export CSV, et un journal MCP détaillé à activer si vous voulez garder les identifiants des objets touchés. Les contenus (valeurs, requêtes, consignes) ne sont jamais conservés.
- **Applications non vérifiées signalées** : une application qui s'est enregistrée elle-même auprès de TblFlow affiche « Application non vérifiée » sur l'écran de consentement.
- **Jetons personnels** : un e-mail vous prévient 14 jours puis 3 jours avant l'expiration d'un jeton.

Guide : [Serveur MCP](/fr/docs/serveur-mcp).
