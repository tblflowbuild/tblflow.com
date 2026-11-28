---
title: "Import, export et corbeille"
translationKey: "import-export-trash"
description: "Importer un CSV, TSV ou Excel, exporter une table ou une base, restaurer depuis la corbeille, annuler une action, dupliquer ou partir d'un modèle."
section: "Guides"
order: 11
---

Cette page rassemble ce qui entre dans TblFlow, ce qui en sort, et comment revenir en arrière.

## Importer un fichier

TblFlow importe trois formats : **CSV**, **TSV** et **Excel** (extensions `.xlsx`, `.xls` et `.xlsm`). Pour un fichier local, le format est reconnu à l'extension. Un fichier Excel envoyé depuis votre poste ne peut pas dépasser 5 Mo.

Deux entrées existent, selon que vous voulez une nouvelle table ou ajouter des lignes à une table existante.

### Dans une nouvelle table

1. Dans la barre latérale de la base, ouvrez le menu **+**, rubrique **Ajouter depuis d'autres sources**, puis **Importer les données**.
2. Choisissez l'onglet **Fichiers locaux** (glissez le fichier dans la zone) ou **Lien(URL)** (collez l'adresse d'un fichier).
3. Un **Aperçu des données** montre les colonnes détectées. Vous pouvez activer **Analyser et implémenter avec l'IA** : l'IA propose des noms de colonnes et des types de champs, que vous gardez ou corrigez à l'étape suivante.
4. Réglez l'import :
   - **Utiliser la première ligne comme en-tête** ;
   - **Sélection automatique des types de champs** ;
   - le nom et le type de chaque champ, ou **Ne pas importer** pour écarter une colonne ;
   - le **Champ principal** ;
   - **Importer les données** (décochez-le pour ne créer que la structure) ;
   - pour un classeur Excel, la configuration se fait feuille par feuille (**Nom de la feuille**).
5. Cliquez sur **Importer**, puis sur **Confirmer et continuer** dans le message d'avertissement.

Les noms de champs doivent être uniques et non vides. L'import ne s'arrête qu'en cas de succès ou d'échec : son état s'affiche en haut à droite de la table, et une notification annonce le résultat. Évitez de modifier les champs pendant l'import.

### Dans une table existante

Ouvrez le menu de la table, **Importer les données**, puis **Fichier CSV** ou **Microsoft Excel**. Vous associez chaque colonne du fichier à un champ de la table, et vous pouvez cocher **Exclure la première ligne dans l'importation**. Les lignes sont ajoutées à celles qui existent.

Cette entrée demande le droit d'importer dans une table : rôles Propriétaire et Créateur. Créer une nouvelle table par import demande le droit de créer des tables.

### Limites et erreurs

L'import est soumis à la limite de lignes par table de votre offre : 5 000 en Gratuit, 100 000 en Essentiel, 1 000 000 en Équipe, sans plafond en Entreprise. Au-delà, l'import s'arrête avec le message « Limite de lignes atteinte ». Voir [Offres et limites](/fr/docs/offres-limites).

Les autres erreurs possibles : une date hors de la plage valide, un champ **Obligatoire** laissé vide, des doublons dans un champ qui n'accepte que des **Valeurs uniques**, ou un délai d'attente dépassé.

### Autres façons d'importer

- **Coller dans la grille.** Copiez des cellules d'un tableur et collez-les dans une vue en grille. Si le collage dépasse la table, TblFlow demande s'il doit ajouter des enregistrements, et il demande confirmation avant d'écraser des lignes existantes.
- **En ligne de commande** : `tblflow import --new-table` envoie un fichier CSV. Voir [La CLI](/fr/docs/cli).
- **Par un agent** : le serveur MCP expose un outil `import_csv`. Voir [Le serveur MCP](/fr/docs/serveur-mcp).

## Exporter

### Une table en CSV

Dans le menu de la table, **Télécharger csv**. Sur une vue en grille, le même choix existe dans le menu de l'onglet (clic droit) : l'export part alors de la vue et reprend son filtre et son tri. Tous les rôles qui lisent la table peuvent exporter.

### Une base entière

Dans la liste des bases de l'espace, le menu d'une base propose **Exporter**. La fenêtre **Exporter** offre l'option **Inclure les enregistrements** : désactivée, seules la structure et la configuration sont exportées.

1. Cliquez sur **Commencer l'exportation**. Elle peut prendre du temps ; vous pouvez fermer la fenêtre.
2. Une notification annonce que les données sont prêtes.
3. **Télécharger** le fichier `.tbl`.

Pour le réimporter, déposez le fichier `.tbl` sur la page de l'espace : « Déposez votre fichier .tbl pour l'importer ». Les champs de lien vers une autre base sont convertis en texte sur une seule ligne dans l'export.

Exporter ou dupliquer une base demande le droit de modifier la base : rôles Propriétaire et Créateur.

## Annuler et rétablir

Les boutons **Annuler** et **Rétablir** de la barre d'outils (raccourcis Ctrl ou Cmd + Z, et Ctrl ou Cmd + Maj + Z) défont ou refont vos dernières actions sur la table. Ils sont actifs si vous pouvez modifier des enregistrements.

Sont concernés : la saisie et le collage de cellules, la création, la suppression et le réordonnancement d'enregistrements, la création, la suppression et la conversion de champs, la création, la modification et la suppression de vues.

L'historique d'annulation est propre à chaque personne et à chaque table. Par défaut, il garde les 200 dernières actions pendant 24 heures. Une nouvelle action vide la pile de rétablissement.

L'**historique des enregistrements** est un autre outil : il garde la trace de qui a changé quoi, avec les valeurs avant et après. Voir [Vues, filtres et fiches](/fr/docs/vues-filtres).

## La corbeille

Supprimer une table, une base, un enregistrement, un champ ou une vue ne l'efface pas tout de suite : l'élément va dans une corbeille, d'où vous pouvez le **Récupérer**.

| Corbeille | Où la trouver | Ce qu'elle contient |
|---|---|---|
| **Corbeille de Table** | Menu de la table | Vues, champs et enregistrements supprimés |
| **Corbeille** de la base | Icône **Corbeille** de la barre latérale de la base | Tables, applications, automatisations, agents et skills navigateur supprimés |
| **Corbeille** de l'espace | Menu de l'espace | Bases supprimées de cet espace |
| **Corbeille de l'espace** | Sélecteur d'espaces | Espaces, bases et tables supprimés, en trois onglets |

Les colonnes **Type**, **Par** et **Date** indiquent ce qui a été supprimé, par qui et quand ; dans la corbeille d'une table, les filtres **Du** et **Au** restreignent la période. La page **Corbeille de l'espace** offre aussi **Suppression permanente**.

- **Durée de conservation.** Par défaut, 30 jours. Passé ce délai, une purge automatique supprime définitivement l'élément. Les corbeilles de base et d'espace affichent la durée appliquée à votre instance (« supprimées au cours des N derniers jours »).
- **Vider** supprime définitivement le contenu de la corbeille de la base, après confirmation.
- **Quota.** Les données en corbeille comptent toujours dans votre utilisation d'enregistrements et de pièces jointes.
- **Ordre de restauration.** On ne peut pas récupérer un élément dont le parent est lui-même dans la corbeille : restaurez d'abord la base, puis ses tables.
- **Champs.** Restaurer un champ rétablit ses valeurs. Une fenêtre de progression s'affiche, car l'opération peut porter sur beaucoup d'enregistrements.

Lire et restaurer la corbeille d'une table est réservé aux rôles Propriétaire, Créateur et Éditeur. Les rôles Commentateur et Lecteur n'y ont pas accès. Voir [Habilitations et rôles](/fr/docs/habilitations).

## Dupliquer une table ou une base

**Une table.** Menu de la table, **Dupliquer**. Vous nommez la copie et choisissez avec **Inclure les enregistrements** si les lignes sont copiées (activé par défaut). Il faut pouvoir lire la table et en créer dans la base : rôles Propriétaire et Créateur.

**Une base.** Menu de la base, **Dupliquer**, puis **Dupliquer la base**. Vous choisissez l'espace de destination et si les enregistrements sont dupliqués. Votre historique des révisions et vos collaborateurs ne sont pas dupliqués.

## Partir d'un modèle

Un modèle est une base prête à l'emploi. Après avoir choisi un modèle, la fenêtre **Créer une base à partir d'un modèle** demande l'espace de destination et propose **Dupliquer les enregistrements** : activé, la base reprend les données d'exemple du modèle ; désactivé, seule la structure est copiée. Il faut pouvoir créer des bases dans l'espace choisi.

Pour proposer vos propres modèles, voir [Partage et publication](/fr/docs/partage-publication).
