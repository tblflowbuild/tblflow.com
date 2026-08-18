---
title: "Tables et champs"
translationKey: "tables-and-fields"
description: "Les 28 types de champs de TblFlow, les enregistrements liés, les lookups et les rollups, et ce que chaque type devient réellement dans votre base PostgreSQL."
section: "Guides"
order: 2
---

Une table TblFlow est une vraie table PostgreSQL. Un champ est une vraie colonne. C'est ce qui rend cette page utile même si vous ne quittez jamais l'interface : ce que vous choisissez ici est ce qui existe dans la base.

## Les familles de champs

**Valeurs simples** — Texte court, Texte long, Nombre, Devise, Pourcentage, Date, Case à cocher, Note, Email, Téléphone, URL. Ils stockent ce que vous saisissez, rien de plus.

**Valeurs contraintes** — Sélection unique, Sélection multiple, Utilisateur. Les options sont définies au niveau du champ, ce qui rend le groupement et le filtrage fiables : deux orthographes de « En cours » ne peuvent pas coexister.

**Relations** — Enregistrement lié, Lookup, Rollup, Rollup conditionnel. Voir ci-dessous.

**Calculés** — Formule (plus de 200 fonctions), Auto-numéro, Créé le, Modifié le, Créé par, Modifié par. Ils ne sont pas saisissables : ils sont recalculés à l'écriture.

**Actifs** — Pièce jointe, Bouton, IA. Le champ IA appelle le modèle configuré sur la base et écrit la réponse dans la cellule.

## Relier deux tables

Le champ **Enregistrement lié** crée une relation entre deux tables. Une fois la relation posée :

- un **Lookup** ramène un champ de la table liée (le nom de la société sur la ligne du contact) ;
- un **Rollup** agrège les enregistrements liés (`SUM` des deals d'un compte, `COUNT` des tâches d'un projet) ;
- un **Rollup conditionnel** fait la même chose sur un sous-ensemble (`SUM` des deals dont le statut est « Gagné »).

Ces trois champs se recalculent quand la donnée source change, y compris quand elle est modifiée depuis un client SQL externe.

## Formules

Les formules s'écrivent au niveau du champ et s'appliquent à toutes les lignes. Les familles disponibles : texte, numérique, date, logique, agrégats sur enregistrements liés.

```
IF(
  AND({Statut} = "Gagné", {Montant} > 10000),
  "Compte clé",
  "Standard"
)
```

Une formule ne peut pas produire d'effet de bord — pas d'écriture dans une autre table, pas d'appel réseau. Pour cela, il faut une [automatisation](/fr/docs/automatisations).

## Ce que ça donne dans Postgres

Chaque base est un schéma, chaque table une table physique, chaque champ une colonne typée. Vous pouvez brancher `psql`, un ORM ou un outil de BI sur la même instance et lire vos données directement — sans export, sans couche de synchronisation, sans délai de réplication.

Corollaire pratique : un `pg_dump` est une sauvegarde complète et réutilisable ailleurs. C'est la définition de l'absence de verrouillage propriétaire.

## Limites à connaître

- Renommer un champ change son libellé, pas la référence utilisée par les formules : rien ne casse.
- Changer le type d'un champ tente une conversion et vous prévient des valeurs qui seraient perdues.
- Supprimer un champ supprime la colonne. L'opération est journalisée mais n'est pas annulable au-delà de la corbeille de la base.
