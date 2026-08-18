---
title: "Pourquoi TblFlow écrit dans un vrai Postgres, et ce que ça change"
translationKey: "real-postgres"
description: "La plupart des bases no-code stockent vos données dans un format à elles. TblFlow crée une vraie table PostgreSQL par table. Voici les conséquences concrètes, y compris les moins agréables."
publishedAt: 2026-08-12
author: "TblFlow"
tags: ["postgresql", "architecture"]
---

Une base de données no-code doit choisir comment stocker vos données. Le choix le plus courant est un magasin générique : une table `records` avec une colonne JSON, ou un modèle entité-attribut-valeur. C'est souple, ça facilite l'ajout de types de champs, et ça rend l'export pénible.

TblFlow fait l'autre choix. Quand vous créez une table dans l'interface, TblFlow exécute un `CREATE TABLE` dans PostgreSQL. Vos colonnes deviennent des colonnes. Vos types deviennent des types Postgres.

## Ce que ça vous donne

**Vous pouvez requêter vos données sans nous.** Branchez `psql`, DBeaver, Metabase ou votre ORM sur la même instance, et écrivez du SQL. Pas d'API à apprendre, pas de quota de requêtes, pas d'attente d'un endpoint qu'on n'a pas encore construit.

**L'export est un `pg_dump`.** Il n'y a pas de conversion, parce qu'il n'y a rien à convertir. Le dump s'importe dans n'importe quel Postgres. C'est le sens précis de « sans verrouillage propriétaire » : la porte de sortie n'est pas une fonctionnalité qu'on vous accorde, c'est une propriété du format.

**Les performances viennent du moteur, pas d'une couche de cache.** Filtrer sur un million de lignes est un index Postgres qui fait son travail. Trier, grouper, agréger : ce sont des opérations que Postgres fait bien depuis trente ans.

**Vos contraintes sont réelles.** Une relation entre deux tables est une vraie clé étrangère, avec l'intégrité référentielle que ça implique.

## Ce que ça coûte

Il serait malhonnête de ne présenter que la colonne des avantages.

**Le DDL est une opération lourde.** Ajouter un champ à une table de plusieurs millions de lignes, c'est un `ALTER TABLE`. Sur une table générique en JSON, ajouter un champ ne touche pas les données existantes. Chez nous, ça prend un verrou. Nous avons dû construire un pont de partage de session Postgres pour éviter les interblocages entre le DDL et les lectures concurrentes — un problème que le stockage générique n'a simplement pas.

**Les types sont contraignants, par construction.** Changer un champ texte en champ numérique demande une conversion réelle, avec des lignes qui peuvent échouer. Un magasin JSON aurait accepté silencieusement le changement et vous aurait laissé découvrir le problème plus tard. On considère que l'échec explicite est préférable, mais c'est un arbitrage, pas une évidence.

**Le nombre de tables croît.** Une instance qui héberge beaucoup de bases se retrouve avec beaucoup de tables physiques. Ça se gère, mais ça demande d'y penser.

## Le raisonnement

Nous avons pris ce parti parce que la question à laquelle nous voulions répondre n'était pas « comment ajouter des types de champs le plus vite possible », mais « qu'est-ce qui se passe dans trois ans, quand l'équipe voudra brancher un outil de BI, ou partir ».

Un magasin générique répond bien à la première question. Un vrai schéma répond bien à la seconde.

Si vous voulez vérifier par vous-même, lancez une instance auto-hébergée, créez une table, et allez regarder dans `psql`. Elle est là.
