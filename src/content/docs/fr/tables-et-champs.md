---
title: "Tables et champs"
translationKey: "tables-and-fields"
description: "Les 28 types de champs TblFlow, liens entre tables, champs Recherche et Résumé, formules, valeurs par défaut, validation et table dans PostgreSQL."
section: "Guides"
order: 2
---

Une table TblFlow est une vraie table PostgreSQL. Un champ est une vraie colonne. C'est ce qui rend cette page utile même si vous ne quittez jamais l'interface : ce que vous choisissez ici est ce qui existe dans la base.

## Les familles de champs

Le menu **Type** propose 28 types de champs, auxquels s'ajoutent deux entrées, **Recherche** et **Recherche conditionnelle**. Les types ne dépendent pas de votre palier.

**Valeurs simples** — Texte sur une seule ligne, Texte long, Email, Téléphone, URL, Nombre, Date, Case à cocher, Évaluation. Ils stockent ce que vous saisissez, rien de plus. Email, Téléphone et URL imposent un format valide.

**Durées** — Durée, qui s'affiche en 1:30, 1:30:00 ou 1h 30m, et Durée suivie, qui chronomètre le temps passé sur chaque ligne, par personne.

**Durée suivie.** La cellule affiche le temps total, en heures et minutes ; l'option **Afficher les secondes** du champ ajoute les secondes. Il n'y a rien à saisir dans la cellule : double-cliquez dessus (ou appuyez sur Entrée), ou ouvrez la fiche, pour atteindre le minuteur. **Démarrer** lance une période, **Arrêter** la clôture ; le total affiché avance chaque seconde pendant qu'elle court, et la valeur du champ est mise à jour à l'arrêt. Les périodes sont listées par personne, avec leur début. Chacun ne peut supprimer que ses propres périodes (**Supprimer cette période**), et le total est recalculé. Il n'y a qu'une période en cours par personne, par ligne et par champ. Démarrer et arrêter le minuteur demande le droit de modifier des enregistrements ; avec un rôle de lecture, le total et les périodes restent visibles sans le bouton.

**Valeurs contraintes** — Sélection unique, Sélection multiple, Utilisateur. Les choix sont définis au niveau du champ.

**Relations** — Lien vers un autre enregistrement, Recherche, Résumé, Recherche conditionnelle, Résumé conditionnel. Voir ci-dessous.

**Calculés** — Formule (plus de 200 fonctions), Numéro automatique, ID de ligne, Heure de création, Dernière modification, Créé par, Dernière modification par. Ils ne se saisissent pas à la main.

**Actifs** — Pièce jointe, Bouton, Champ IA, Canvas. Le Champ IA génère le contenu de la cellule à partir d'autres champs. Le champ Canvas crée un document par ligne dans la bibliothèque de documents.

**Formats.** Monétaire et Pourcentage ne sont pas des types à part : ce sont des formats du type **Nombre**, comme **Anneau** et **Barre**, deux manières d'afficher la valeur. De même, **Date** et **Date et heure** sont deux réglages du type **Date**.

Le champ principal de la table, qui identifie chaque enregistrement, n'accepte qu'une partie des types : par exemple ni Pièce jointe, ni Lien vers un autre enregistrement.

## Relier deux tables

Le champ **Lien vers un autre enregistrement** crée une relation entre deux tables : un-à-un, un-à-plusieurs, plusieurs-à-un ou plusieurs-à-plusieurs. Le lien peut être unidirectionnel ou bidirectionnel (**Créer un champ de lien réciproque dans la table de lien**), et pointer vers une autre base. Une fois la relation posée :

- une **Recherche** ramène un champ de la table liée (le nom de la société sur la ligne du contact) ;
- un **Résumé** agrège les enregistrements liés avec une fonction comme **SOMME** ou **COMPTER** (la somme des deals d'un compte, le nombre de tâches d'un projet).

Une **Recherche conditionnelle** et un **Résumé conditionnel** n'ont pas besoin de lien : vous choisissez une table, puis des conditions qui filtrent ses enregistrements (la somme des deals dont le statut est « Gagné »).

Ces champs se recalculent quand la donnée source change.

## Formules

Les formules s'écrivent au niveau du champ et s'appliquent à toutes les lignes. Les fonctions se rangent en six familles : numérique, texte, logique, date et heure, tableaux, système. Une formule peut lire les champs Recherche et Résumé, mais pas directement un champ d'une autre table.

```
IF(
  AND({Statut} = "Gagné", {Montant} > 10000),
  "Compte clé",
  "Standard"
)
```

Une formule ne peut pas produire d'effet de bord — pas d'écriture dans une autre table, pas d'appel réseau. Pour cela, il faut une [automatisation](/fr/docs/automatisations).

## Valeur par défaut et validation

Dans le panneau d'un champ, **Valeur par défaut** pré-remplit les nouvelles lignes. Elle existe pour les types Texte sur une seule ligne, Texte long, Nombre, Durée, Téléphone, Case à cocher, Utilisateur, Sélection unique et Sélection multiple. Le type Date propose à la place **Remplir automatiquement avec la date actuelle**.

Les **Règles de validation des valeurs de champ** sont deux interrupteurs :

- **Valeurs uniques uniquement** : pour les types Texte sur une seule ligne, Texte long, Nombre, Durée, Date, Email, Téléphone et URL ;
- **Obligatoire** : pour ces mêmes types, plus les sélections, Utilisateur, Évaluation, Durée suivie, Pièce jointe et Lien vers un autre enregistrement. Cette règle se règle en modifiant un champ existant, pas à sa création.

Ni l'une ni l'autre ne s'applique à un champ de type Recherche.

## Ce que ça donne dans Postgres

Chaque base est un schéma PostgreSQL, chaque table une table physique, chaque champ une colonne. Le propriétaire de la base peut ouvrir un **Accès Postgres en lecture seule** depuis la page **Conception** de la base, puis lire les données avec `psql`, un ORM ou un outil de BI. Cet accès ne donne que le droit de lecture : toute écriture passe par TblFlow. Sur l'offre hébergée, il est réservé à l'offre Entreprise. Voir [API et développeurs](/fr/docs/api-developpeurs).

## Limites à connaître

- Renommer un champ change son libellé, pas la référence utilisée par les formules, qui s'appuie sur l'identifiant interne du champ : rien ne casse.
- Changer le type d'un champ convertit les valeurs existantes. Quand la conversion est longue ou touche des champs de lien, la fenêtre **Confirmer la modification du champ** montre d'abord les champs concernés.
- Supprimer un champ ouvre une fenêtre qui liste les champs qui en dépendent. Le champ supprimé va dans la corbeille de la table, où vous pouvez le restaurer avec ses valeurs pendant la durée de conservation. Voir [Import, export et corbeille](/fr/docs/import-export-corbeille).
