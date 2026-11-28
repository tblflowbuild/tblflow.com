---
title: "Connecteurs"
translationKey: "connectors"
description: "Relier TblFlow à un service externe : comptes et clés d'API, opérations, synchronisation vers une table, déclencheur « Nouvel élément », droits."
section: "Guides"
order: 13
---

Un connecteur relie TblFlow à un service externe : un compte (Gmail, Slack…), une API accessible avec une clé, ou une base PostgreSQL. Vos colonnes, tables, automatisations et agents peuvent ensuite l'utiliser.

## Où les trouver

Dans une base, ouvrez **Automatiser**, puis l'onglet **Connecteurs**. Deux affichages :

- **Les vôtres** : les comptes, API et bases de données déjà connectés ;
- **Découvrir** : ce que vous pouvez ajouter, avec une recherche et des catégories (Messagerie, CRM, Productivité…).

Le bouton **Créer avec l'IA** crée un connecteur à partir de la documentation d'une API. Cette page ne le décrit pas.

## Se connecter

### Un compte (OAuth)

Dans **Découvrir**, cliquez sur le bouton **+** du service (info-bulle « Connecter » suivie du nom) : une fenêtre du service s'ouvre pour autoriser votre compte. Vous pouvez donner un **Nom du compte** pour le reconnaître. Ensuite, **Reconnecter** et **Déconnecter** sont disponibles dans le panneau du connecteur. Déconnecter arrête ce qui utilise le compte (automatisations, colonnes, agents) jusqu'à la reconnexion.

Si le serveur n'a pas d'application OAuth pour un service, celui-ci apparaît sous **Non configurés (admin)**. Un administrateur de l'espace peut alors renseigner l'application OAuth de son organisation, dans la zone **Avancé** de la fenêtre de connexion.

### Une API avec une clé

Les connecteurs d'API sont dans la section **Catalogue** de **Découvrir**. Un connecteur d'API s'installe d'abord (**Installer**), puis se connecte (**Connecter**) : vous collez votre clé, et l'adresse de votre compte si elle est demandée. TblFlow vérifie aussitôt que la clé répond.

Le réglage **Compte utilisé** choisit entre un **Compte partagé** pour tout l'espace et un **Compte de chaque utilisateur**. Avec un compte partagé, tous les appels passent par un seul compte, connecté par un gestionnaire de l'espace.

### Une base PostgreSQL

Le connecteur **PostgreSQL** lit les tables d'une base existante, en lecture seule. Aucune écriture n'est envoyée.

## Les opérations

Le panneau d'un connecteur liste **Ce qu'il permet**. Chaque opération est de l'un des trois genres suivants :

| Genre | Sens |
|---|---|
| **Lire** | Lit une fiche à partir d'une valeur |
| **Lister** | Renvoie une liste d'éléments |
| **Agir** | Crée, modifie ou envoie quelque chose chez le service |

Le bouton **Tester** essaie une opération depuis le panneau. Une opération s'utilise ensuite à quatre endroits (section **Où l'utiliser**) : une colonne connectée, une table synchronisée, une automatisation (étape **Appeler une opération**) ou un agent, qui peut appeler les opérations comme des outils.

Pour un connecteur installé depuis le catalogue, le réglage **Autoriser les écritures** est désactivé par défaut. Désactivé, les opérations qui créent, modifient ou suppriment chez le service sont refusées partout (automatisations, boutons, agents) ; les lectures continuent.

## Synchroniser vers une table

Une table synchronisée importe une liste du service, puis la tient à jour : chaque élément devient une ligne.

1. Activez le connecteur, puis ouvrez son panneau, section **Où l'utiliser** → **Table synchronisée**.
2. Choisissez la base, puis **Créer une table synchronisée**.
3. Choisissez le **Connecteur** et la **Liste** (une opération qui renvoie une liste). Un **Aperçu** montre les premiers éléments.
4. Cochez les **Colonnes** (types : Texte, Texte long, Nombre, Case à cocher, Date, Lien, E-mail) et l'**Identifiant unique**, qui retrouve chaque élément d'une synchronisation à l'autre.
5. Réglez la **Synchronisation** : toutes les 15 minutes, toutes les heures, toutes les 6 heures, tous les jours, ou manuelle.
6. Choisissez le sort des **Éléments disparus** (**Conserver les lignes** ou **Supprimer les lignes**), le **Nombre maximal d'éléments** et le **Mode**, puis **Créer la table**.

Le mode **Incrémentale** relit seulement les éléments modifiés depuis la dernière synchronisation, et la liste entière tous les 7 jours par défaut. Il n'est accepté que si le connecteur le déclare pour cette liste. Le mode **Complète** relit toute la liste à chaque fois. Sans autre réglage, la lecture s'arrête à 5 000 éléments ; le maximum réglable est 50 000. Une table synchronisée compte 100 colonnes au plus. Si la limite arrête la lecture, un message l'indique.

Le menu **Synchronisation** de la table donne l'état, **Synchroniser maintenant**, **Tout resynchroniser** et **Arrêter la synchronisation** (la table et ses lignes sont conservées).

Par défaut, la table est en lecture seule. L'option **Renvoyer les modifications à l'API** propose **Après validation par un administrateur de la base** ou **Automatiquement, à chaque modification** ; elle exige que les écritures soient autorisées pour le connecteur.

## Déclencher une automatisation : « Nouvel élément »

Dans une [automatisation](/fr/docs/automatisations), le déclencheur **Nouvel élément dans un connecteur** lance l'automatisation une fois pour chaque nouvel élément d'une liste.

- Choisissez le connecteur, une liste dont les éléments ont un identifiant, ses paramètres, et la fréquence de **Vérifier** : 15 minutes, 1 heure, 6 heures ou 1 jour.
- La première lecture retient les éléments déjà présents sans rien lancer. Seuls les éléments apparus ensuite déclenchent l'automatisation.
- Les champs de l'élément se lisent avec `{{item.<chemin>}}`.
- Une lecture lance 50 exécutions au plus et parcourt 5 pages au plus.

## Connecteurs proposés dans Découvrir

### Comptes (OAuth)

| Compte | Ce que le panneau indique |
|---|---|
| Gmail | Rechercher et lire des e-mails, envoyer un e-mail |
| Google Agenda | Lister les événements, créer un événement |
| Google Drive | Rechercher des fichiers, lire les informations d'un fichier |
| Google Meet | Créer un lien de réunion |
| Google Chat | Lister les espaces, publier un message |
| Slack | Lister les canaux, lire les messages d'un canal, envoyer un message |
| GitHub | Lister et lire les issues, en créer, lister les pull requests, commenter |
| Outlook | Lister les e-mails, envoyer un e-mail |
| Microsoft Teams | Lister vos équipes et leurs canaux, lire, publier et répondre, créer une réunion |
| Discord | Lire votre profil, lister vos serveurs |

### API avec une clé

| Connecteur | Ce qu'il permet | Ce qu'il faut fournir |
|---|---|---|
| Make | Lire vos organisations, équipes et scénarios, leur état et leur blueprint (lecture seule) | Un jeton API Make (portées `scenarios:read` et `teams:read`) et l'adresse de votre zone |
| n8n | Lire vos workflows et leurs exécutions, sur une instance n8n Cloud | Une clé API n8n et l'adresse de votre instance |
| HubSpot | Lire, rechercher, créer et mettre à jour des contacts, entreprises et transactions, et les associer | Le jeton d'une application privée HubSpot |

Make, n8n et HubSpot alimentent aussi la [cartographie des processus](/fr/docs/cartographie-processus).

### ClickUp (pas encore dans Découvrir)

Le connecteur ClickUp existe, mais il est encore en phase de recette sur un vrai compte : il n'apparaît pas dans **Découvrir**, qui ne montre que les connecteurs publiés. Il n'existe pas de bouton pour l'installer depuis l'interface. Tant qu'il n'est pas publié, ne comptez pas dessus pour un usage courant.

Il se connecte avec un **jeton personnel** ClickUp (il commence par `pk_`). Le guide de connexion indique où le générer : dans ClickUp, votre avatar, **Paramètres**, **Applications**, section **Jeton d'API**. Le jeton n'a pas de portées : il agit avec vos droits, sur tous les espaces de travail auxquels vous avez accès. Pour limiter l'accès, générez-le depuis un compte invité seulement dans les espaces utiles.

| Genre | Opérations |
|---|---|
| **Lister** | Les espaces de travail ; les espaces d'un espace de travail ; les dossiers d'un espace ; les listes d'un dossier ; les listes rangées directement dans un espace, hors de tout dossier ; les tâches d'une liste ; les membres d'une liste |
| **Lire** | Une tâche, avec ses champs personnalisés et, au besoin, ses sous-tâches |
| **Agir** | Créer une tâche dans une liste ; modifier une tâche ou l'archiver (seuls les champs envoyés changent, les champs personnalisés ne se modifient pas ici) ; commenter une tâche |

Les trois opérations qui agissent sont des écritures : elles sont refusées tant que le réglage **Autoriser les écritures** est désactivé, comme pour les autres connecteurs du catalogue. Les tâches d'une liste se lisent par pages de 100, les plus récentes d'abord par défaut.

TblFlow espace ses appels à ClickUp : 2 au plus en même temps, au moins 600 ms entre deux appels. Cela reste sous la limite de 100 requêtes par minute et par jeton que ClickUp applique à ses offres les plus basses.

Le déclencheur **Nouvel élément dans un connecteur** (voir plus haut) fonctionne avec la liste **Lister les tâches d'une liste** : une automatisation se lance à chaque nouvelle tâche d'une liste ClickUp.

## Droits requis

| Action | Rôle d'espace |
|---|---|
| Utiliser un connecteur, connecter son propre compte | Tous les rôles |
| Créer et modifier un connecteur | Propriétaire, créateur, éditeur |
| Installer depuis le catalogue | Propriétaire ; créateur si l'installation est libre |
| Supprimer un connecteur | Propriétaire, créateur |

La gouvernance du catalogue est réglée dans l'espace : **Libre (propriétaires et créateurs de l'espace)** ou **Sur approbation d'un administrateur de l'espace**. Dans ce second cas, les autres membres utilisent **Demander l'installation**.

Créer une table synchronisée demande le droit de créer une table dans la base. Les droits des rôles sont détaillés dans [Habilitations et rôles](/fr/docs/habilitations).

## Quota d'appels

Chaque palier plafonne les appels réels aux connecteurs d'API par mois (les réponses servies par le cache ne comptent pas) : Gratuit 1 000, Essentiel 50 000, Équipe 500 000. Voir [Offres et limites](/fr/docs/offres-limites).
