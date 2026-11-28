---
title: "Partage et publication"
translationKey: "sharing-publishing"
description: "Partager une vue ou une base par lien, ouvrir un formulaire au public, publier une app en accès public ou sur invitation, inviter des collègues."
section: "Guides"
order: 12
---

TblFlow propose cinq façons de donner accès à vos données. Elles ne demandent pas les mêmes droits et ne donnent pas les mêmes pouvoirs, alors choisissez la plus étroite qui suffit.

| Vous voulez | Où | Droit requis (rôles par défaut) |
|---|---|---|
| Montrer une vue en lecture, par lien | Barre d'outils de la table, **Partager** | Modifier la vue et la partager : propriétaire, créateur, éditeur |
| Montrer un tableau ou une base, par lien | **Partager** (barre d'outils ou menu de la base) | Modifier la base : propriétaire, créateur |
| Recevoir des réponses | Vue Formulaire partagée | Idem vue |
| Publier une application | Bouton **Publier** de l'application | Modifier l'application : propriétaire, créateur |
| Faire travailler quelqu'un dans l'espace ou la base | Bouton **Inviter** | Inviter : voir [Habilitations et rôles](/fr/docs/habilitations) |

## Partager une vue par lien

Dans la barre d'outils d'une table, **Partager** ouvre un petit menu : **Partager le tableau** et **Partager la vue**. Le bouton est grisé sans le droit de modifier la vue.

Choisissez **Partager la vue**, puis activez **Partager la vue sur le web**. Un lien apparaît, avec une copie en un clic, un code QR et un bouton pour générer un nouveau lien. Les personnes qui ont le lien voient la vue, sans compte.

Sous **Avancé**, selon le type de vue :

- **Autoriser les spectateurs à copier des données depuis cette vue** et **Afficher tous les champs dans les enregistrements étendus** (vue Grille seulement).
- **Sur invitation uniquement** : voir plus bas.
- **Configuration d'intégration** : copie un code `iframe` à coller dans une autre page, avec un aperçu. Vous y choisissez le thème (système, clair ou sombre) et, hors formulaire, **Masquer la barre d'outils**. Ces réglages changent le lien : copiez-le de nouveau après les avoir modifiés.

Les champs de type Mot de passe ne sont jamais envoyés à une personne qui consulte un lien de partage. Un champ que la base interdit de lire ne l'est pas non plus.

Désactivez le commutateur pour fermer le lien. Générer un nouveau lien change l'adresse.

## Partager un tableau ou une base par lien

Pour une base entière, utilisez **Partager** dans le menu de la base (liste des bases de l'espace). Pour un tableau, **Partager** puis **Partager le tableau**. Il faut pouvoir modifier la base : propriétaire ou créateur par défaut.

Activez **Partager sur le web**. Le lien s'ouvre sur `/share/…/base`. Le menu **Personne disposant du lien** règle ce que le lien permet :

| Réglage | Effet |
|---|---|
| **Peut consulter** | Toute personne disposant du lien consulte les données. |
| **Peut modifier** | Les utilisateurs connectés modifient les enregistrements de la table : ils reçoivent des droits d'éditeur. Proposé pour une base, un tableau ou un dossier. |
| **Enregistrer une copie** | Toute personne disposant du lien peut enregistrer une copie dans son espace. |

Sous **Avancé** : **Autoriser les lecteurs à copier les données**, **Sur invitation uniquement** et **Configuration d'intégration** (code `iframe`). **Régénérer le lien** change l'adresse. Désactiver **Partager sur le web** demande confirmation : l'action est irréversible et les personnes qui avaient le lien perdent l'accès.

Même avec **Peut modifier**, un lien de base ne donne ni l'invitation par e-mail, ni le partage de vue, ni les requêtes de données.

## Restreindre un lien à des invités

**Sur invitation uniquement** s'applique aux liens de vue et de base. Un champ **Invités** apparaît : saisissez des adresses séparées par une virgule, un point-virgule ou un espace, puis cliquez sur **Inviter**.

- Le lien doit être activé avant d'inviter. Jusqu'à 50 adresses par envoi.
- Seules les adresses nouvelles reçoivent un e-mail avec le lien.
- La personne doit se connecter à TblFlow. Si son compte n'a pas été invité, elle voit « Accès sur invitation » et peut changer de compte.
- Les membres de la base y ont accès sans invitation.
- Ajouter ou retirer des invités demande le droit de modifier l'espace, réservé au propriétaire par défaut.

## Formulaire public

Une vue Formulaire se partage comme une autre vue : **Partager** > **Partager la vue** > **Partager la vue sur le web**. Toute personne qui ouvre le lien peut remplir le formulaire et l'envoyer ; les réponses arrivent comme des enregistrements de la table.

L'option **Connexion requise pour soumettre** oblige la personne à se connecter à TblFlow avant l'envoi. Un message et le bouton **Se connecter** recouvrent alors le formulaire. Avec **Sur invitation uniquement**, seuls les invités et les membres de la base accèdent au formulaire.

## Publier une application

Dans l'éditeur d'une application, le bouton **Publier** ouvre le panneau **Publication de l'app**. Vous y réglez :

| Réglage | Valeurs |
|---|---|
| **Accès** | **Publique — toute personne qui a le lien**, ou **Sur invitation — personnes invitées et membres de la base** |
| **Autoriser l'écriture des données** | Désactivé par défaut : les visiteurs sont en lecture seule |

L'accès proposé par défaut est **Sur invitation**. Choisir **Publique** demande une confirmation : sans compte ni invitation, quiconque reçoit le lien ouvre l'app et voit les données qu'elle affiche.

Cliquez sur **Publier — générer le lien**. Le panneau affiche alors le lien, que vous pouvez copier. Vous pouvez ensuite changer l'accès et l'écriture sans republier.

En mode **Sur invitation**, chaque personne se connecte avec son compte TblFlow, sans mot de passe : lien magique ou clé de sécurité. Elle entre si elle a été invitée ou si elle est membre de la base ; sinon la page le lui indique. Le champ **Invités** fonctionne comme pour les liens de vue, mais l'app doit être publiée avant d'inviter. Il n'y a ni mot de passe de partage ni compte visiteur propre à l'application.

La section **Personnalisation** permet de téléverser une icône d'onglet (favicon) et d'écrire la **Description de la page**, affichée par les moteurs de recherche et les aperçus de lien.

**Dépublier (révoque le lien)** coupe le lien après confirmation. Republier génère un nouveau lien. Publier, dépublier et régler l'accès demandent le droit de modifier l'application ; gérer les invités demande celui de modifier l'espace.

Pour la construction de l'application elle-même, voir [Créer votre première application](/fr/docs/creer-premiere-app).

## Domaine personnalisé

Une application publiée peut être servie à la racine d'un nom de domaine qui vous appartient. Il faut d'abord le faire vérifier dans les réglages de l'espace.

1. Dans les réglages de l'espace, onglet **Domaines vérifiés**, cliquez sur **Ajouter un domaine** et saisissez le nom (par exemple `app.mondomaine.com`).
2. Ajoutez chez votre fournisseur DNS l'enregistrement TXT affiché : son nom commence par `_tblflow-verify.`, sa valeur par `tblflow-verify=`.
3. Cliquez sur **Vérifier**. Le domaine passe à **Vérifié**.
4. Dans le panneau de publication de l'application, section **Domaine personnalisé**, choisissez le domaine dans **Choisir un domaine vérifié…**. **Dissocier** le retire.

Un domaine sert une seule application et ne peut être vérifié que dans un seul espace. Sans domaine vérifié, le panneau indique : « Aucun domaine vérifié disponible ». L'enregistrement TXT prouve que le domaine est à vous ; c'est la seule chose que TblFlow vérifie. Au bout de sept jours, la preuve est relue quand le domaine sert l'application : si l'enregistrement a disparu, le domaine repasse en non vérifié.

## Inviter des collaborateurs

Inviter un collaborateur lui donne un rôle dans l'espace ou la base ; ce n'est pas un partage par lien. Les droits de chaque rôle sont décrits dans [Habilitations et rôles](/fr/docs/habilitations).

- **Espace** : bouton **Inviter** de l'espace, fenêtre « Partager l'espace ». Un collaborateur de l'espace accède à toutes ses bases.
- **Base** : bouton d'invitation (icône d'utilisateur, infobulle **Inviter**) de la barre de la base, fenêtre « Partager » suivie du nom de la base.

Chaque fenêtre propose :

- **Inviter par email** : saisissez des adresses (validez chacune avec Entrée ou Espace), choisissez le rôle, puis **Envoyer l'invitation**.
- **Inviter par lien** : choisissez un rôle, **Créer le lien**. Quiconque ouvre le lien obtient ce rôle, après connexion. Le rôle d'un lien se modifie, et **Supprimer le lien** le révoque. Réservé au propriétaire et au créateur par défaut.
- L'ajout d'un membre ou d'un département de l'organisation, quand votre compte relève d'une organisation.
- La liste des collaborateurs, avec recherche par nom ou e-mail, changement de rôle et **Supprimer le collaborateur**.

## Et ensuite

- [Habilitations et rôles](/fr/docs/habilitations) — ce que chaque rôle peut faire, rôles personnalisés.
- [Créer votre première application](/fr/docs/creer-premiere-app) — générer ou construire l'application à publier.
- [Vues et filtres](/fr/docs/vues-filtres) — les types de vue que vous pouvez partager.
