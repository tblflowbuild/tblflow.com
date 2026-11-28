---
title: "Carto des process"
translationKey: "process-map"
description: "Créer la Carto des process d'un espace, dessiner les processus, lire ruptures et coûts estimés, comparer estimé et réel, suivre les revues."
section: "Guides"
order: 5
---

La Carto des process est une page de votre espace où vous dessinez qui fait quoi, avec quels outils, puis lisez les ruptures et les coûts estimés. Un processus se diagnostique gratuitement, avec ses coûts estimés visibles, sans bouton « Remplacer », sans rapport mensuel, sans comparaison de l’estimé au réel et sans bibliothèque de processus types. Ces fonctions restent visibles, verrouillées. La carte complète demande le palier Essentiel ou supérieur.

## Ouvrir ou créer la cartographie

Chaque espace a au plus une cartographie. Vous y accédez par l'icône **Carto des process** du groupe de boutons en haut à droite de l'espace, par l'entrée **Carto des process** du menu qui s'ouvre sur le nom de l'espace, ou par le raccourci **Cartographie** présent dans chaque base.

Quand l'espace n'a pas encore de cartographie, **Créer la cartographie de cet espace** ouvre la question **Comment démarrer ?** :

- **Avec les exemples** : des processus, étapes et passages d'exemple, pour voir le modèle à l'œuvre.
- **Vide** : seuls le catalogue d'outils et les capacités TblFlow sont conservés, vous saisissez vos propres processus.
- **Exemple par secteur** : un jeu d'exemple pour Services et conseil, Commerce et e-commerce, Industrie et logistique, ou Comptabilité et juridique. Les taux sont fictifs, à remplacer par les vôtres. Ce choix est réservé aux propriétaires de l'espace.

La cartographie repose sur une base ordinaire de l'espace (processus, étapes, outils, rôles, responsabilités, objets de données, passages de données) : vous pouvez filtrer et exporter ses tables comme celles de n'importe quelle base.

## Décrire les processus

Le canvas se déplace en le glissant et se zoome à la molette. Cliquez une étape pour la sélectionner ; double-clic ou Espace ouvre sa fiche. Entrée crée l'étape suivante, Tab une branche, F2 renomme. La barre d'outils qui apparaît au-dessus de l'étape sélectionnée propose **Ouvrir**, **Tester**, **Remplacer**, **Renommer**, **Dupliquer** et **Supprimer**.

Une carte vide propose quatre départs : **Importer un document**, **Répondre à l'assistant**, **Connecter mes outils** ou **Dessiner moi-même**. Pour l'import, ajoutez un PDF, un document Word, un tableur Excel, un CSV, un texte ou une image (photo de tableau blanc, schéma). L'IA prépare les processus, étapes, responsables, outils et passages de données ; rien n'est ajouté avant que vous acceptiez (**Ajouter à la base** ou **Tout ajouter**).

Chaque étape a un exécutant : **Humain**, **Automatisation**, **Agent IA**, **Externe** ou **Équipement**.

### Fiche d'étape

La fiche regroupe quatre blocs :

- **Détails** : statut, type, exécutant, outils et rôles.
- **Coût et temps** : durée, fréquence, coût (visible seulement si vous pouvez lire les montants) et piste d'amélioration.
- **Données** : les entrées et les sorties de l'étape.
- **Notes**.

En haut, les flèches passent à l'étape précédente ou suivante, **Copier le lien** copie l'adresse de la fiche et le menu **Plus d'actions** donne **Toutes les colonnes**. **Supprimer l'étape** demande une confirmation.

Les responsabilités se saisissent dans la table **Responsabilités** (étape, rôle, type). Le type est **Responsable**, **Approbateur**, **Consulté** ou **Informé**.

### Connecter vos outils

**Connecter mes outils**, dans le menu **Plus d'actions**, branche la carte sur Make, n8n, HubSpot ou Zapier. TblFlow ne fait que lire : rien n'est écrit chez eux. Chaque scénario Make devient un processus et chaque module une étape ; il en va de même pour les workflows n8n. HubSpot alimente les objets de données. Pour Zapier, un webhook remonte les erreurs de vos zaps sur la carte. La carte se met à jour toutes les 15 minutes. **Débrancher** arrête les synchronisations ; les étapes déjà cartographiées restent. Cette fonction demande le palier Essentiel ou supérieur.

### Actualiser la présence de TblFlow

**Actualiser la présence TblFlow** relit votre espace, liste les ressources TblFlow qui existent déjà et suggère les étapes et outils qu'elles couvrent. Vous acceptez chaque suggestion, ou **Tout accepter**. TblFlow ne suggère une couverture que pour une étape reliée à une automatisation TblFlow ou portant le même nom qu'une ressource TblFlow. Une étape couverte porte le badge **Couvert par TblFlow**.

### Adapter le vocabulaire à votre secteur

Dans les réglages du canvas, section **Vocabulaire**, un préréglage adapte les mots « client » et « commande » à votre métier :

| Préréglage | Client | Commande |
|---|---|---|
| Services et conseil | Client | Mission |
| Commerce et e-commerce | Client | Commande |
| Industrie et logistique | Client | Ordre de fabrication |
| Comptabilité et juridique | Client | Dossier |
| Santé et soins | Patient | Dossier |

Seuls les mots affichés changent : les tables et les champs ne sont pas renommés.

## Choisir une lecture

Un sélecteur **Lentille** change la lecture sans changer la carte. Il propose six lentilles :

- **Qui fait quoi** : l'exécutant et le responsable de chaque étape.
- **Coûts** : coût humain (taux par rôle), coût des outils (abonnements, appels d'API, jetons d'IA), économies possibles et gain réalisé. Ces chiffres sont des **estimations** que vous saisissez, pas des mesures. Les montants sont réservés aux propriétaires de la base : sans ce droit, la lentille n'apparaît pas.
- **Ruptures** : chaque étape affiche son nombre de ruptures, avec un bouton **Corriger**. Les causes reconnues sont la ressaisie manuelle entre outils, une donnée sans source maître, aucun responsable, plusieurs responsables, l'absence d'étape suivante, une donnée lue qu'aucune étape ne produit, une automatisation en échec et la dernière exécution du workflow TblFlow en échec.
- **Données** : les objets de données et les outils qui les produisent ou les consomment. Une couronne marque l'outil source maître, et chaque outil non encore remplacé porte un bouton **Remplacer**.
- **Connecteurs** : les passages de données entre outils, avec leur mode (API, connecteur TblFlow, fichier ou export, ressaisie manuelle) et leur fréquence. Le **Récit des passages** les rejoue un par un. Pour une ressaisie, **Simuler avec** montre l'effet d'un connecteur sans rien écrire ; **Appliquer** écrit sur le passage après confirmation.
- **Synthèse** : une vue d'ensemble de toute la carte (voir plus bas).

Le bandeau du canvas rappelle le coût, les ruptures, les économies possibles, la répartition des exécutants, le gain réalisé et la part couverte par TblFlow. Il signale aussi les étapes sans responsable et les étapes sans durée : ce sont des manques de saisie, pas des ruptures. **Compléter** mène à la prochaine étape à renseigner. **Présenter** masque les montants et la lentille Coûts.

## Lire la Synthèse

La lentille **Synthèse** agrège toute la carte. Elle montre des indicateurs (coût par mois et par an, économies possibles, gain réalisé, couverture TblFlow, heures libérées, taux d'automatisation, coût des outils, retour sur investissement, ruptures, étapes sans responsable, complétude), la répartition des exécutants, un tableau par domaine et trois classements : les processus les plus coûteux, les plus fortes économies et le plus de ruptures. Les filtres **Domaine** et **Statut** restreignent la vue. Un indicateur sans donnée invite à compléter la carte : il n'affiche jamais zéro à la place.

Les montants sont réservés aux propriétaires de la base. Le retour sur investissement se calcule à partir du **Coût mensuel de TblFlow**, saisi dans la section **ROI** de la **Configuration de la carte**.

Le bloc **Évolution** compare l'état actuel à un instantané : un instantané mensuel est pris le 1er du mois à 8 h (heure du serveur), et les propriétaires peuvent en prendre un à tout moment avec **Figer l'état actuel**. La comparaison porte sur toute la carte, filtres ignorés.

**Exporter** propose **Exporter en PDF** (impression de la vue) et **Exporter en CSV**. Le CSV compte une ligne par processus : processus, domaine, statut, nombre d'étapes, ruptures, complétude et couverture TblFlow, plus le coût mensuel, les économies possibles et le gain réalisé pour un propriétaire. Il est encodé pour Excel en français (UTF-8, séparateur point-virgule) et couvre toute la carte, sans tenir compte des filtres de la vue. Il est limité à 5 000 processus ; au-delà, TblFlow le signale.

## Chiffrer la carte

Le **Chiffrage** de la carte (bouton **Chiffrage** du bandeau) rassemble ce qu'il faut pour estimer les coûts : **À compléter**, **Taux horaires**, **Outils** et **Opportunités**. Aucune valeur n'est fournie : tout vient de vous, et rien n'est écrit sans votre confirmation.

- **Taux horaires** : saisissez un taux horaire direct, ou un salaire annuel chargé que TblFlow convertit avec un coefficient de charges et un nombre d'heures productives par an. Vous pouvez aussi proposer un taux facturable (TJM).
- **Outils** : le prix mensuel par licence (abonnement), le coût par appel (API) ou le prix pour un million de jetons (modèle d'IA). Les outils se rapprochent du catalogue SaaS.
- **Opportunités** : ce que TblFlow peut remplacer en tout ou en partie, ce qu'une automatisation ou un agent peut reprendre, et le levier d'amélioration de chaque étape (automatiser, supprimer l'étape, réduire les erreurs, renégocier).

Les taux et les prix ne sont lisibles que par les propriétaires. La **Configuration de la carte** (icône **Configuration de la carte** de la barre d'outils) regroupe les coûts, les champs lus, le vocabulaire, les fréquences, les listes de valeurs, les seuils et le ROI. Seuls les propriétaires de l'espace la modifient. Les seuils fixent le délai de revue en jours et la complétude minimale d'une fiche.

## Remplacer

Sur une étape ou un outil, **Remplacer** donne à l'IA le contexte de la carte. Elle propose un remplacement par TblFlow, que vous choisissez entre **Base + interface**, **Automatisation**, **Agent IA** et **Tâche web (RPA)** ; le choix suggéré est signalé. Un outil SaaS devient une base et une interface, un connecteur une automatisation, une étape humaine un agent, une saisie sur un site web un rejeu dans le navigateur (Computer Use).

Rien n'est créé avant votre validation. Une automatisation est créée **inactive**, et la planification d'un agent aussi : relisez-les et activez-les vous-même, rien ne tourne avant. Pour un outil SaaS, vous choisissez une nouvelle base (TblFlow propose d'abord le découpage, que vous relisez) ou une base existante (la création se déroule étape par étape dans l'assistant, où vous validez chaque étape). La carte indique le statut de remplacement : **Remplacement proposé**, **Remplacé · créé inactif**, puis **Remplacé par TblFlow** une fois la ressource active. Seul ce dernier compte dans le gain réalisé.

### Évaluer la remplaçabilité

**Remplaçabilité IA** classe chaque étape et chaque outil de la carte : table, interface, automatisation, agent IA, navigateur (RPA) ou non remplaçable. Un modèle d'IA explique chaque classement, avec un niveau de confiance et un gain estimé ; les propositions incertaines sont marquées **À confirmer**. **Accepter** ouvre **Remplacer** avec le mode proposé, **Ignorer** l'écarte. Rien n'est créé avant le bouton **Créer** de cette fenêtre. L'analyse porte sur 250 éléments au plus.

### Tester une étape

**Tester** lance un essai à blanc de l'automatisation reliée à l'étape : rien n'est envoyé ni écrit, et la fenêtre indique le statut de chaque étape de l'automatisation. Le test n'est possible que si le champ « Source automatisation » de l'étape désigne une automatisation TblFlow ; sinon le bouton reste inactif et indique pourquoi.

## Suivre les revues

Chaque processus porte un **propriétaire**, une date de **dernière revue**, une date de **prochaine revue**, un **statut** (Brouillon, En revue, Validé ou Archivé dans le modèle), un champ « Approuvé par » et une version. Chaque étape porte une **fiche procédure** : un document de type Canvas (voir plus bas). La documentation et le schéma vivent au même endroit : ils se corrigent ensemble.

## Être alerté des procédures périmées

Les alertes s'activent depuis le menu **Plus d'actions** du canvas (entrée **Alertes de péremption**) et demandent une base V2. Comme l'alerte est une automatisation de la base, il faut pouvoir modifier les automatisations de la base. Chaque lundi à 7 h (heure du serveur), un e-mail liste les processus dont la prochaine revue est dépassée ou tombe dans les 14 jours. Les processus archivés sont ignorés, et aucun e-mail ne part s'il n'y a rien à relire. Au plus 100 processus sont examinés à chaque envoi. Par défaut, le destinataire est la personne qui active les alertes ; vous pouvez modifier les destinataires (10 au plus). Seules sont acceptées les adresses dont le domaine est celui d'un membre de l'espace.

## Recevoir un rapport mensuel

Le rapport mensuel part le 1er du mois à 8 h (heure du serveur), par e-mail, et demande lui aussi une base V2 et le droit de modifier les automatisations. Il s'active depuis **Plus d'actions**, entrée **Rapport mensuel**. Il donne le coût, le gain potentiel, les trois processus au plus gros gain et le nombre de revues en retard. Les montants n'y figurent que si la personne qui l'active est propriétaire de la base. Sinon, le rapport ne contient aucun montant et classe les processus par nombre de ruptures. Un rapport qui contient des montants ne peut être activé, ni voir ses destinataires changés, que par un propriétaire ; les autres peuvent l'éteindre. Si l'espace revient au diagnostic gratuit, le rapport reste configuré mais est suspendu : aucun e-mail ne part tant que le palier Essentiel n'est pas rétabli.

## Valider les étapes

Une étape peut porter un statut de validation, la personne qui a validé, la date et un commentaire. Le modèle fournit les statuts **À valider**, **Validée** et **À revoir** ; le badge affiche le statut tel que votre base le nomme. Un badge sur l'étape, dans le canvas, montre l'état d'un coup d'œil ; le détail apparaît au survol. Ces informations se saisissent dans la table des étapes (champs « Statut de validation », « Validé par », « Date de validation » et « Commentaire de validation »).

## Comparer l'estimé au réel

Le panneau **Estimé vs réel** compare l'estimé au mesuré, **sur les seules étapes mesurées**, et indique la part des étapes mesurées, pour savoir quelle confiance accorder au total. Un écart positif signifie que le réel coûte plus que prévu. Il propose une lecture **Par processus** et **Par étape**, avec un lien vers l'étape dans le canvas. Sans le droit de lire les montants, seules la part des étapes mesurées et la provenance des mesures s'affichent.

Dans la lecture par étape, **Saisir les mesures** ouvre un éditeur : minutes mesurées, volume mesuré par mois, taux d'erreur mesuré (entre 0 et 100 %) et source de la mesure. Laissez un champ vide pour garder l'estimé. Le coût mesuré se recalcule tout seul. Les coûts restent des saisies de votre équipe : TblFlow les compare, il ne les mesure pas.

Sur une étape exécutée par une automatisation, le bouton **Importer depuis l'automatisation** remplit les mesures à partir des 30 derniers jours d'exécutions : durée moyenne en minutes, volume par mois et taux d'échec. Un aperçu montre l'avant et l'après, et rien n'est écrit avant votre confirmation. L'import remplace les mesures saisies à la main. Il n'est pas proposé pour une étape humaine, externe ou assurée par un agent. Si l'automatisation n'a aucune exécution sur 30 jours, un message l'indique et rien n'est importé.

## Comparer avant et après

Avant un changement, **figez la carte** (menu **Plus d'actions**, entrée **Avant / après**) : TblFlow en crée une copie, nommée avec le nom que vous donnez et la date. Une fois le changement fait, comparez le **coût total du mois** et le **nombre d'étapes** entre la copie et la carte courante. Figer la carte demande le palier Essentiel ou supérieur et, comme la copie reprend tous les champs, seul un propriétaire de la base peut le faire lorsque des champs de coût sont fermés aux autres. Les montants de la comparaison sont réservés aux propriétaires.

## Suivre les améliorations

Le **registre d'améliorations** suit vos idées par statut (**Idée**, **Planifiée**, **En cours**, **Réalisée**, **Abandonnée**), avec les étapes liées, le coût de mise en œuvre, le gain visé et un retour (gain sur 12 mois divisé par le coût de mise en œuvre). Il est en lecture seule : ajoutez ou modifiez les lignes dans la table **Améliorations**.

## Où perdez-vous de l'argent ?

Ce parcours en lecture seule classe vos processus, puis leurs étapes, par gain potentiel : part du gain total, coût, ruptures et lien direct vers l'étape dans le canvas. Pour les personnes qui n'ont pas le droit de lire les montants, le classement se fait par nombre de ruptures et l'indique clairement. Seules les 1 000 premières étapes sont lues.

## Présenter à la direction

La **vue direction** tient sur une page de lecture, imprimable en PDF avec **Imprimer / PDF** : coût et gain potentiel par mois, nombre de processus actifs, les cinq processus où l'on perd le plus, les améliorations par statut et les revues en retard. Les montants n'y figurent que pour les propriétaires de la base.

## Partir d'un processus type

La **bibliothèque de processus types** propose 13 processus à importer un par un, regroupés par secteur : facturation client, recrutement, réclamations, achats, et des séries pour le commerce, l'industrie et la logistique, la comptabilité et le juridique. Chaque processus arrive avec ses étapes chaînées, des durées et fréquences d'exemple, et des rôles sans taux : renseignez vos propres coûts. L'import n'ajoute que des lignes : un rôle déjà présent est réutilisé avec son taux, aucun outil n'est créé et un processus de même nom n'est pas importé une seconde fois. Le contenu importé est en français pour l'instant.

## Mettre à jour le modèle

Les cartes existantes passent au modèle à jour via le bandeau **Mettre à jour le modèle**, réservé aux propriétaires : **Voir les changements** affiche un aperçu, puis **Confirmer la mise à jour** applique les changements. Rien n'est supprimé, et vos totaux ne changent pas tant que les nouveaux champs sont vides. Si la mise à jour s'arrête, relancez-la pour reprendre là où elle s'est arrêtée.

## Exporter et partager

Le bouton **Exporter** de la barre d'outils propose **Image (PNG)**, **PDF (impression)** et **Exporter toutes les données**. Ce dernier est réservé à qui peut modifier la base et vous prévient par une notification qui contient le lien de téléchargement.

Un lien public en lecture seule partage la carte, depuis **Partager**. Il est **fermé par défaut** : activez-le sur demande, et désactivez-le quand vous n'en avez plus besoin, ce qui coupe le lien aussitôt. Seules les personnes qui peuvent modifier la base gèrent le partage. Les coûts, taux et gains ne sont jamais partagés, et le lien n'affiche jamais les auteurs. Les champs sensibles réservés restent masqués, et les montants et champs de coût sont masqués pour qui n'a pas le droit de les lire. L'export `.tbl` et la duplication sont refusés si un champ est illisible pour la personne qui les demande.

## Savoir ce qui dépend d'un champ

Avant de supprimer ou de modifier un champ, vous pouvez lister ce qui en dépend. Trois endroits le montrent :

- La confirmation de suppression d'un champ liste les éléments touchés, dont les vues et les automatisations.
- Quand un agent propose de supprimer un champ, la proposition affiche **Ce qui en dépend et sera touché** : champs liés ou calculés, vues, automatisations et interfaces, ainsi que la possibilité de restaurer depuis la corbeille. Si cette liste ne peut pas être calculée, la suppression est refusée.
- L'API `GET /api/table/{tableId}/field/{fieldId}/impact` (droit de lecture du champ) renvoie les champs, vues et automatisations qui en dépendent, avec une gravité : l'objet **casse**, **se dégrade** ou est **à vérifier**. La liste est limitée à 200 éléments ; un indicateur signale les dépendances dans des bases que vous ne pouvez pas lire, sans les nommer.

## Générer la documentation d'une ligne (champ Canvas)

Un champ Canvas porte un document par ligne, comme la **Fiche procédure** d'une étape. Double-cliquez la cellule dans la grille : le panneau **Document de la ligne** s'ouvre, et ouvrir une cellule vide crée le document. Les options du champ choisissent le contenu de départ : **Modèle** (copie d'un document de la bibliothèque, où les noms de champ sont remplacés par les valeurs de la ligne), **IA** (le document est rédigé à partir des champs de la ligne), **Page IA** (une fiche prospect ou une présentation) ou **Vide**. L'option **Créer à l'ajout d'une ligne** crée le document automatiquement ; les imports ne créent jamais de documents.

Dans le panneau, le titre et le contenu s'enregistrent automatiquement. **Régénérer** réécrit le document ; s'il a été modifié à la main, TblFlow demande **Écraser vos modifications ?** avant de le remplacer. **Page** affiche le rendu, **Modifier** revient à l'éditeur, et **Ouvrir dans la bibliothèque** mène à la bibliothèque de documents de l'espace. Si le document a été modifié ailleurs, un message l'indique et **Recharger** reprend la version enregistrée. **Générer les documents** crée en une fois les documents des lignes qui n'en ont pas, 100 au plus par lancement. Chaque document rédigé par l'IA compte dans la consommation d'IA.

## Organigramme de l'espace

Les paramètres de l'espace ont un onglet **Organigramme**, dont la page propose trois onglets : **Organigramme** (arbre « qui rapporte à qui », calculé d'après le manager renseigné sur le profil de chaque personne), **Départements** (arborescence et membres) et **À remplacer**. Un collaborateur sans manager apparaît comme racine. Un département ne se supprime que s'il est vide.

**Importer** charge un organigramme depuis un fichier CSV : cliquez d'abord sur **Aperçu**, rien n'est écrit tant que vous n'avez pas confirmé, et réimporter le même fichier ne crée aucun doublon. **Télécharger le modèle** donne les colonnes attendues. **Exporter** télécharge l'organigramme en CSV.
