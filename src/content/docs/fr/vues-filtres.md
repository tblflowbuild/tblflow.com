---
title: "Vues, filtres et fiches"
translationKey: "views-and-filters"
description: "Six types de vues, filtres, tris, groupements, mode personnel, commentaires, tableaux blancs et graphiques : travailler une table sans copier ses données."
section: "Guides"
order: 10
---

Une vue est une manière de lire une table : elle ne copie aucune donnée. Une même table peut avoir autant de vues que vous le souhaitez, chacune avec ses filtres, ses tris et ses champs visibles.

## Les types de vue

Le bouton **+** à droite des onglets de vues propose six types. Une nouvelle vue prend le nom de son type (« Kanban », « Calendrier »…), suivi d'un numéro si ce nom existe déjà.

| Type | Ce qu'il affiche | Réglages propres |
|---|---|---|
| **Vue en grille** | Les enregistrements en lignes, les champs en colonnes. | Hauteur de ligne, champs cachés, mise en forme conditionnelle. |
| **Vue en galerie** | Un enregistrement par carte. | Champ de couverture, **Personnaliser les cartes**. |
| **Vue Kanban** | Des cartes empilées en colonnes. | **Choisir un champ d'empilement**, **Masquer l'empilement vide**, **Personnaliser les cartes**. |
| **Vue en calendrier** | Les enregistrements placés sur leurs dates. | **Configuration du calendrier** : champ de date de début, de fin, de titre, de couleur. |
| **Vue Gantt** | Des barres sur une échelle de temps. | **Paramètres** : champ de début, de fin, de titre, de dépendance, de couleur. |
| **Vue en formulaire** | Un formulaire de saisie sur la table. | Champs, pages, conditions d'affichage, couleur de thème. |

Quelques précisions :

- **Calendrier et Gantt** demandent des champs de date. Le Gantt exige au moins un champ date ou date/heure. Les barres se déplacent à la souris, et l'échelle passe de **Jour** à **Semaine**, **Mois** ou **Trimestre**.
- **Gantt** : le champ de dépendance est en général un champ **Lien vers un autre enregistrement**. Les options **Week-ends** et **Chemin critique** se règlent dans la barre d'outils. Une dépendance circulaire est signalée, et le chemin critique peut alors être incomplet.
- **Calendrier et Gantt** affichent un panneau **À planifier** : il liste les enregistrements sans dates. Glissez-en un sur la vue pour lui poser ses dates.
- **Formulaire** : vous choisissez les champs affichés, vous ajoutez des sauts de page et vous pouvez afficher un champ seulement si une condition est remplie. Un champ défini comme **Obligatoire** ne peut pas être retiré du formulaire. Pour publier un formulaire, voir [Partage et publication](/fr/docs/partage-publication).
- **Générer avec l'IA** : dans le même menu **+**, vous décrivez la vue voulue et TblFlow en crée une, avec son type, ses filtres, ses tris et ses colonnes.

## Gérer les vues

Un clic droit sur l'onglet d'une vue ouvre son menu :

| Action | Droit requis |
|---|---|
| **Renommer**, **Verrouiller** / **Déverrouiller**, **Partager** | Modifier les vues |
| **Dupliquer** | Créer des vues |
| **Supprimer** | Supprimer des vues |
| **Télécharger csv** (vues en grille) | Exporter la table |
| **Ajouter aux favoris** / **Retirer des favoris** | Aucun droit particulier |

Les rôles Propriétaire, Créateur et Éditeur peuvent créer, modifier et supprimer des vues. Les rôles Commentateur et Lecteur ne le peuvent pas. Voir [Habilitations et rôles](/fr/docs/habilitations).

Une vue **verrouillée** affiche un cadenas. Pour en changer l'affichage, il faut passer en mode personnel (voir plus bas).

## Filtrer, trier, grouper, masquer

Ces réglages se trouvent dans la barre d'outils de la vue.

**Filtrer.** **Ajouter une condition** ajoute une ligne : un champ, un opérateur, une valeur. **Ajouter un groupe de conditions** imbrique des conditions, sur trois niveaux au plus. Vous choisissez si les enregistrements doivent **répondre à toutes les conditions** ou **à une condition**.

- Les opérateurs dépendent du type de champ : « est », « contient », « est vide », « est supérieur à », « est l'un des »…
- Sur un champ utilisateur, la valeur **Moi (utilisateur actuel)** suit la personne qui regarde la vue.
- Sur une date, vous pouvez filtrer par valeur relative (aujourd'hui, hier, la semaine dernière, ce mois-ci, un nombre de jours passés ou à venir) ou par date exacte.
- Une condition devenue invalide, par exemple parce qu'un choix de liste a été supprimé, est ignorée et signalée par un avertissement.

**Trier.** **Trier** accepte plusieurs champs ; **Ajouter un autre tri** en ajoute un. L'option **Trier automatiquement les enregistrements** garde l'ordre à jour. Quand elle est active, le glisser-déposer manuel des lignes est désactivé.

**Grouper.** **Grouper** regroupe les lignes par un champ, et **Ajouter un sous-groupe** ajoute un niveau.

**Champs cachés.** Cette liste masque des champs dans la vue sans les supprimer. **Tout afficher** et **Tout masquer** agissent d'un coup. Le champ principal ne peut être ni caché ni supprimé.

**Hauteur de ligne.** Quatre niveaux : court, moyen, grand, très grand.

**Mise en forme conditionnelle.** Des règles colorent une cellule ou une ligne entière (texte ou fond). L'option **Appliquer à toutes les vues** étend la règle aux autres vues de la table.

**Bascules rapides.** Dans la grille, **Assigné à moi** et **Masquer les terminés** s'ajoutent au filtre de la vue, sans rien écrire dedans. Elles n'apparaissent que si la table a un champ utilisateur, ou un champ « terminé » (case à cocher ou liste dont un choix signifie terminé).

## Mode collaboratif et mode personnel

Par défaut, une vue est **collaborative** : filtres, tris, groupes, champs cachés et hauteur de ligne sont enregistrés dans la vue. Quand quelqu'un les modifie, tous les membres qui ouvrent cette vue voient le changement.

Le bouton **Personnel** de la barre d'outils change cela : la configuration ne s'applique alors qu'à vous. Elle est conservée dans votre navigateur, pas sur le serveur. En quittant le mode personnel, vous choisissez de l'abandonner (**Confirmer la sortie**) ou de l'appliquer à tout le monde (**Quitter et synchroniser**). Cette seconde option demande le droit de modifier les vues.

C'est aussi la seule manière d'ajuster l'affichage d'une vue verrouillée.

## La fiche d'enregistrement

Chaque ligne s'ouvre en une fiche : une page qui montre tous les champs de l'enregistrement. Le menu **Position** la place au centre, dans un panneau latéral ou en plein écran, et les boutons **Fiche précédente** et **Fiche suivante** passent d'une ligne à l'autre.

L'en-tête de la fiche offre un bouton **Copier l'URL de l'enregistrement**, pour partager un lien direct, et un bouton pour afficher l'historique. Son menu permet de **Voir dans la table**, **Imprimer / PDF**, **Dupliquer l'enregistrement** et **Supprimer l'enregistrement**.

Les champs masqués dans la vue restent accessibles par **Afficher N champs cachés**.

**Mise en page.** Le menu **Mise en page** règle l'ordre des champs, leur largeur (demi-largeur ou pleine largeur) et des sections repliables. Vous pouvez créer plusieurs mises en page nommées. Les changements valent pour tous les utilisateurs de la vue.

**Historique.** L'historique liste les modifications avec la valeur **Avant** et la valeur **Après**. Il se filtre par plage horaire, par champ et par utilisateur, et s'affiche en tableau (**Voir en tableau**) ou en phrases (**Voir en phrases**). Le menu de la table propose aussi **Historique des enregistrements de la table**, réservé aux rôles Propriétaire, Créateur et Éditeur.

## Commentaires

L'onglet **Commentaires** de la fiche ouvre la discussion de l'enregistrement. Un commentaire peut contenir un lien, une image, une mention, un emoji, un message vocal ou un clip d'écran. Vous choisissez de recevoir les notifications de **tous les commentaires** ou seulement de ceux qui vous concernent. L'onglet **Activité** affiche l'historique de l'enregistrement ; il n'apparaît que pour les rôles qui peuvent modifier des enregistrements.

Écrire un commentaire demande le droit de commenter : les rôles Propriétaire, Créateur, Éditeur et Commentateur l'ont, le rôle Lecteur non.

**Message vocal et clip d'écran.** La barre d'outils de l'éditeur de commentaire propose **Enregistrer un message vocal** et **Enregistrer un clip d'écran**. Le navigateur demande l'accès au micro ou à l'écran ; s'il est refusé, le message « Accès au micro ou à l'écran refusé. » s'affiche. Pendant l'enregistrement, le temps écoulé est visible et **Arrêter** termine la prise, qui est alors envoyée et jointe au commentaire. La durée maximale est de 5 minutes pour un message vocal et de 3 minutes pour un clip d'écran ; au-delà, l'enregistrement s'arrête de lui-même.

**Demander à l'assistant IA.** Dans un commentaire, tapez **@** puis choisissez **IA** (**Assistant IA** dans la liste de mentions) : l'assistant de la base lit la ligne, puis répond par un commentaire signé « Assistant IA ». Il est créé au premier appel, dans la base. Il peut chercher et lire des enregistrements, des tables, leur structure et l'activité d'une ligne, et consulter la base de connaissances. Il peut aussi créer ou modifier des enregistrements, mais chaque écriture est soumise à une approbation humaine (voir **Validation des écritures** dans [Agents IA](/fr/docs/agents-ia)). Sa réponse est tronquée à 4 000 caractères. Le quota d'IA et les droits qui s'appliquent sont ceux de la personne qui l'a mentionné ; si l'IA est refusée (quota atteint, opposition au traitement), le commentaire de réponse l'indique. Si l'agent « Assistant IA » est désactivé dans la base, @IA ne répond plus.

## Tableaux de bord

L'entrée **Tableaux de bord** de la barre latérale de la base ouvre une page qui réunit les graphiques et indicateurs. Elle liste **Vos tableaux de bord**, c'est-à-dire les vues de type bloc graphique des tables de la base. Pour en créer un, **Créer avec l'IA** lance le chat avec une demande libre, et la rubrique **Modèles** propose trois points de départ : **Suivi de projet**, **CRM** et **Coûts de cartographie**. Cette entrée est visible avec le droit de lire la base.

## Tableaux blancs

Un tableau blanc est une ressource de la base, à côté des tables : un espace libre pour réfléchir avant de structurer. Il se crée depuis le menu **+** de la barre latérale, rubrique **Autres ressources**, par **Nouveau tableau blanc**. Cela demande le droit de modifier la base : rôles Propriétaire et Créateur.

- Les outils : **Sélection**, **Post-it**, **Texte**, **Cadre**, **Enregistrement**, **Stylo**, **Image**, **Commentaire**. L'outil **Enregistrement** place sur le tableau une carte liée à un enregistrement existant.
- Six modèles de départ : Brainstorming, Cadrage de projet, Processus, Conception de base, Rétrospective, Organigramme. Vous pouvez aussi partir d'un canevas vide.
- **Exploiter ce tableau** transforme la sélection en enregistrements d'une table. Pour les cadres, il propose aussi des tables, que vous approuvez avant toute création.
- **Exporter** produit une image PNG ou un document PDF.

## Graphiques

Un graphique se place dans le **Panneau de plugins**, à côté de la table, sans créer de vue. Le bouton du panneau (une icône en forme de pièce de puzzle) se trouve dans la barre d'outils de la table.

1. Ouvrez le panneau. S'il est vide, cliquez sur **Créer un panneau plugin**, donnez-lui un nom et validez avec **Confirmer**.
2. Dans le panneau, cliquez sur **Ajouter un plugin**, puis sur **Installer** en face de **Graphique**.
3. Un premier écran, **Configuration de requête de données**, vous demande de construire la requête qui alimente le graphique, avec les blocs **De**, **Sélectionner**, **Où**, **Grouper par**, **Agrégation**, **Trier par**, **Limite**, **Décalage** et **Joindre**. Cliquez sur **Enregistrer**.
4. Choisissez ensuite le **Type de graphique** dans le volet de droite : **Barres**, **Ligne**, **Secteurs**, **Zone** ou **Tableau**.

Les réglages dépendent du type :

- **Barres, Ligne, Zone** : **Axe X**, **Axe Y**, **Ajouter une autre série**, **Ajouter une répartition de série**, **Empiler**, **Ligne d'objectif**, **Plage** (**Minimum**, **Maximum**), **Style de ligne**, **Position de l'axe Y** ;
- **Secteurs** : **Dimension**, **Mesure**, **Afficher le total** ;
- **Afficher les étiquettes de valeurs sur le graphique** et **Afficher la légende** pour les types qui en disposent.

L'en-tête de chaque graphique propose **Développer**, **Dupliquer**, **Renommer** et **Supprimer**. **Renommer** et **Supprimer** demandent le droit de modifier la table. Le bouton **Mettre à jour la requête** rouvre la configuration de la requête, et **Recharger la requête** relit les données.
