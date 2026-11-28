---
title: "Automatisations"
translationKey: "automations"
description: "Automatisations TblFlow : déclencheurs sur enregistrement, formulaire, horaire, webhook ou e-mail, étapes conditionnelles, test sans effet, quotas."
section: "Guides"
order: 3
---

Une automatisation est un workflow attaché à une base : un déclencheur, puis une suite d'étapes. Elle s'exécute côté serveur, y compris quand personne n'a l'onglet ouvert.

Vous la créez avec **Nouvelle automatisation**, ou en décrivant ce que vous voulez avec **Générer avec l'IA** : l'IA propose une configuration que vous relisez et ajustez dans l'éditeur. Un interrupteur active ou désactive l'automatisation. Elle ne peut pas être activée tant que son déclencheur n'est pas configuré.

## Déclencheurs

| Déclencheur | Se déclenche quand |
| --- | --- |
| **Lorsqu'un enregistrement est créé** | une ligne est ajoutée à la table choisie |
| **Lorsqu'un enregistrement est modifié** | une ligne de la table choisie est modifiée |
| **Lorsqu'un enregistrement correspond aux conditions** | une ligne remplit toutes vos conditions (champ, opérateur, valeur) |
| **Lorsqu'un enregistrement est supprimé** | une ligne est supprimée |
| **Lorsqu'un formulaire est soumis** | un formulaire de la table est soumis (une vue formulaire précise, ou tous) |
| **Lorsqu'un bouton est cliqué** | quelqu'un clique un champ Bouton de la table (un champ précis, ou tous) |
| **À l'heure programmée** | à l'intervalle choisi : minutes, heures, jours, semaines ou mois |
| **Lorsqu'un webhook est reçu** | un appel HTTP arrive sur l'URL affichée dans l'éditeur |
| **Lorsqu'un nouvel e-mail est reçu** | un nouvel e-mail non lu arrive dans la boîte de réception d'un compte Gmail connecté |
| **Nouvel élément dans un connecteur** | un nouvel élément apparaît dans une liste d'un connecteur |
| **Depuis une interface** | une interface générée de la base lance l'automatisation |

Quelques précisions :

- **Horaire.** Les automatisations programmées s'exécutent dans le fuseau horaire de l'espace, ou en UTC si l'espace n'en a pas. Un intervalle inférieur à 15 minutes est refusé par défaut.
- **Webhook.** L'appel est un `POST` et doit porter l'en-tête `X-Webhook-Secret`. Le secret se règle dans l'éditeur ; sans secret valide, l'appel est refusé. Le corps reçu est lisible directement à la racine des variables.
- **E-mail reçu.** Seuls les nouveaux e-mails non lus de la boîte de réception déclenchent l'automatisation ; ceux déjà présents à l'activation sont ignorés. Le compte Gmail se connecte dans l'écran Connecteurs.
- **Chaînes de déclenchements.** Une étape qui écrit dans la table qu'elle surveille peut redéclencher l'automatisation. Le moteur coupe une telle chaîne au-delà de cinq générations successives, mais mieux vaut concevoir l'automatisation pour ne pas en dépendre.

## Étapes

Le menu **Ajouter une étape** regroupe les étapes en trois familles.

| Famille | Étapes |
| --- | --- |
| Construire avec l'IA | **Exécuter un script**, **Slack**, **Microsoft Teams**, **Envoyer un e-mail**, **Génération IA**, **Créer & mettre à jour & obtenir des enregistrements**, **Envoyer une requête HTTP** |
| Construire manuellement | **Créer un enregistrement**, **Obtenir des enregistrements**, **Mettre à jour un enregistrement**, **Créer ou mettre à jour selon une clé**, **Exécuter le champ IA**, **Synchroniser maintenant**, **Piloter un site web** |
| Logique | **Si les conditions sont remplies** (branches Alors et Sinon), **Boucle (pour chaque)** |

Le bouton **Connecter une API** ajoute une étape **Appeler une API connectée**, qui exécute une opération d'une API tierce connectée via sa documentation OpenAPI.

L'éditeur n'a pas d'étape de suppression d'enregistrement, ni d'attente, ni d'approbation humaine. Pour un accord humain avant une écriture, utilisez un [agent](/fr/docs/agents-ia) avec la validation des écritures.

Chaque étape lit les données du déclencheur et la sortie des étapes précédentes. Le bouton **Insérer une variable** propose les valeurs réellement disponibles à ce point du workflow. Les formes de base sont `{{record.fields.<identifiant du champ>}}` pour l'enregistrement du déclencheur et `{{steps.<identifiant de l'étape>.<chemin>}}` pour la sortie d'une étape. Un filtre ajouté après `|` transforme une valeur (date, nombre, liste, valeur par défaut, casse). Une étape en erreur interrompt l'exécution : les étapes suivantes ne sont pas jouées.

L'étape **Envoyer un e-mail** peut partir d'un compte Gmail connecté ; sans compte choisi, l'envoi passe par le service d'envoi de TblFlow.

## Tester

**Exécuter le test** joue l'automatisation à blanc, avec des données d'exemple pour le déclencheur. Une fenêtre affiche le résultat de chaque étape. Le message « Ceci est une simulation — aucune donnée réelle n'a été modifiée » le rappelle. Le test apparaît dans l'historique avec le statut **Test**.

## Historique d'exécution

Le bouton **Historique d'exécution** liste les exécutions de l'automatisation, les plus récentes d'abord. Chacune indique son statut (**Succès**, **Erreur**, **En cours** ou **Test**), sa durée, son heure de début, son déclencheur et, pour chaque étape, le type, le statut et une note. L'historique conserve les 50 dernières exécutions. Il n'existe pas de relance depuis l'historique : après correction, relancez l'automatisation par son déclencheur.

## Quotas

Le nombre d'exécutions par mois dépend du palier. Une exécution est comptée à chaque déclenchement, quel que soit le nombre d'étapes. Les e-mails envoyés par les automatisations sont comptés à part.

| Palier | Exécutions par mois | E-mails d'automatisation par mois |
| --- | --- | --- |
| Gratuit | 500 | 50 |
| Essentiel | 25 000 | 2 000 |
| Équipe | 250 000 | 20 000 |
| Entreprise | illimitées | illimités |

En auto-hébergement, ces plafonds ne sont pas appliqués. Les quotas des agents sont détaillés sur la page [Agents IA](/fr/docs/agents-ia).

## Automatisation ou agent ?

Une automatisation exécute la suite d'étapes que vous avez écrite : même entrée, même chemin, même résultat. C'est ce qu'il faut quand la règle est connue.

Un [agent](/fr/docs/agents-ia) décide lui-même des étapes à partir d'un objectif. C'est ce qu'il faut quand la règle dépend du contenu — trier des demandes entrantes hétérogènes, par exemple. Les deux se combinent : un agent peut lister et lancer vos automatisations avec ses outils, sous réserve de la validation des écritures.
