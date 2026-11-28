---
title: "Habilitations et rôles"
translationKey: "permissions"
description: "Gérer les habilitations dans TblFlow : les cinq rôles par défaut et leurs droits, les rôles personnalisés sur un espace, une base ou une table, et les règles."
section: "Guides"
order: 7
---

Les habilitations décident qui peut voir, modifier ou administrer quoi dans TblFlow. Cette page explique **où** et **comment** les gérer, et liste les droits des rôles **présents par défaut**.

## Vocabulaire

| Terme | Sens |
|---|---|
| **Action** | Un droit unitaire, par exemple modifier un enregistrement ou configurer les permissions d'une base. |
| **Rôle par défaut** | L'un des cinq rôles fixes : propriétaire, créateur, éditeur, commentateur, lecteur. Ils ne se modifient pas. |
| **Matrice de permissions** | Un ensemble nommé de rôles sur un espace, une base ou une table. Elle s'appelle « Permission » dans l'interface. |
| **Rôle personnalisé** | Un rôle que vous nommez dans une matrice, avec la liste d'actions que vous choisissez. |
| **Attribution** | Le lien entre un rôle personnalisé et un utilisateur. |

Les rôles personnalisés **s'ajoutent** aux rôles par défaut : leurs droits s'additionnent à ceux du rôle de l'utilisateur, ils ne les remplacent pas. L'écran d'attribution ne propose que les collaborateurs de la portée.

## Les rôles par défaut

### Les cinq rôles

La hiérarchie est : propriétaire, créateur, éditeur, commentateur, lecteur (du plus au moins de droits). Un utilisateur obtient un rôle en devenant **collaborateur** d'un espace ou d'une base : invitation par e-mail, lien d'invitation ou ajout d'un membre ou d'un département de l'organisation. Sur une base, les droits du rôle de la base et ceux du rôle de l'espace parent se **cumulent**.

Les rôles que l'on peut proposer dépendent du niveau :

- **Espace** : les cinq rôles.
- **Base** : créateur, éditeur, commentateur et lecteur (pas propriétaire).
- **Table** : créateur, éditeur et lecteur.

Les rôles propriétaire, créateur et éditeur comptent comme un siège facturable.

### Ce que chaque rôle peut faire

✅ autorisé, ❌ refusé.

| Droit | Propriétaire | Créateur | Éditeur | Commentateur | Lecteur |
|---|---|---|---|---|---|
| **Espace** : créer, supprimer, modifier | ✅ | ❌ | ❌ | ❌ | ❌ |
| Espace : lire | ✅ | ✅ | ✅ | ✅ | ✅ |
| Espace : inviter par e-mail | ✅ | ✅ | ✅ | ✅ | ✅ |
| Espace : créer un lien d'invitation | ✅ | ✅ | ❌ | ❌ | ❌ |
| Espace : configurer les permissions | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Base** : créer, supprimer, modifier | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base : lire | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base : inviter par e-mail | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base : créer un lien d'invitation | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base : exporter des tables | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base : importer des tables | ✅ | ✅ | ✅ | ❌ | ❌ |
| Base : configurer les permissions | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base : requêtes de données | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base : connexion à la base de données | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Table** : créer, modifier, supprimer, importer | ✅ | ✅ | ❌ | ❌ | ❌ |
| Table : lire, exporter | ✅ | ✅ | ✅ | ✅ | ✅ |
| Table : lire et modifier la corbeille | ✅ | ✅ | ✅ | ❌ | ❌ |
| Table : vider la corbeille | ✅ | ✅ | ❌ | ❌ | ❌ |
| Table : configurer les permissions | ✅ | ✅ | ❌ | ❌ | ❌ |
| Historique des enregistrements | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Vue** : créer, modifier, supprimer, partager | ✅ | ✅ | ✅ | ❌ | ❌ |
| Vue : lire | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Champ** : créer, modifier, supprimer | ✅ | ✅ | ❌ | ❌ | ❌ |
| Champ : lire | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Enregistrement** : créer, modifier, supprimer | ✅ | ✅ | ✅ | ❌ | ❌ |
| Enregistrement : lire, copier | ✅ | ✅ | ✅ | ✅ | ✅ |
| Enregistrement : commenter | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automatisation** : créer, modifier, supprimer | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automatisation : lire | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Connecteur** : créer, modifier | ✅ | ✅ | ✅ | ❌ | ❌ |
| Connecteur : supprimer, installer depuis le catalogue | ✅ | ✅ | ❌ | ❌ | ❌ |
| Connecteur : connecter son propre compte | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Application** : créer, modifier, supprimer | ✅ | ✅ | ❌ | ❌ | ❌ |
| Application : lire | ✅ | ✅ | ✅ | ✅ | ✅ |

### Droits qu'aucun rôle d'espace ne donne

Certains droits ne passent pas par les rôles ci-dessus, ils sont refusés à tous :

- **Administration de l'instance** (pages d'administration, import de l'organigramme) : réservée aux administrateurs de l'instance.
- **Configuration de l'entreprise** (actions « enterprise ») : aucun rôle d'espace ne les porte, et un rôle personnalisé ne peut pas les accorder.

## Où gérer les habilitations

Deux gestes existent : **donner un rôle par défaut** et **créer un rôle personnalisé**.

### Donner un rôle par défaut

Au niveau d'un espace ou d'une base, invitez un utilisateur (par e-mail ou par lien) en choisissant son rôle. Il faut avoir le droit d'inviter à ce niveau (voir le tableau : l'invitation par lien est réservée au propriétaire et au créateur).

### Créer un rôle personnalisé

Il y a trois portées, avec le même écran :

| Portée | Où dans l'interface | Droit requis |
|---|---|---|
| **Espace** | Réglages de l'espace, onglet **Permissions** | Configurer les permissions de l'espace |
| **Base** | Icônes de la base, **Permission** (cadenas) | Configurer les permissions de la base |
| **Table** | Menu de la table, entrée **Permissions** (cadenas) | Configurer les permissions de la table |

Par défaut, l'entrée **Permission** d'une base n'apparaît que pour le propriétaire et le créateur, et elle demande l'offre Équipe ou supérieure : en dessous, elle porte un badge d'offre et mène à la mise à niveau. Pour une table, les utilisateurs que l'on peut cibler sont les **collaborateurs de la base parente** : une table n'a pas de collaborateurs propres.

## Créer un rôle personnalisé, pas à pas

1. **Créez la matrice.** Sur l'écran Permission de la portée voulue, cliquez sur **Nouvelle permission**. Un nom suffit, la description est facultative. Une matrice regroupe plusieurs rôles.
2. **Ajoutez un rôle** (**Ajouter un rôle**) dans la matrice : donnez-lui un nom, puis cochez les actions. Elles sont rangées en groupes repliables (Tables, Champs, Vues, Enregistrements, Collaboration, Base, Automatisations, Autres), avec une recherche.
3. **Assignez le rôle** (**Assigner**) à un ou plusieurs utilisateurs, choisis parmi les collaborateurs de la portée. L'effet est immédiat : les droits de l'utilisateur sont recalculés dès l'attribution et dès la révocation.
4. **Modifiez ou retirez.** Un rôle se renomme, change d'actions ou se supprime. Une attribution se retire. Supprimer une matrice supprime aussi ses rôles et ses attributions.

## Règles et limites à connaître

- **Additif seulement.** Les droits d'un rôle personnalisé s'ajoutent à ceux du rôle par défaut, sans les retirer. Sur une table, ils s'ajoutent à ceux que la base donne déjà.
- **Actions validées.** Le serveur refuse toute action qui n'appartient pas à la liste officielle. Il refuse aussi l'administration de l'espace (créer, supprimer ou modifier l'espace, attribuer un rôle, configurer les permissions de l'espace) et les actions d'instance et d'entreprise. Les autres actions, y compris celles des connecteurs et celles qui ouvrent un réglage d'espace (notifications, e-mail, domaines, IA), peuvent être accordées.
- **Cohérence de portée.** Le serveur vérifie que la matrice appartient à la ressource concernée et que le rôle appartient à la matrice.
- **Une attribution est unique** pour un couple rôle et utilisateur : la refaire ne la duplique pas.
- **Jeton d'accès personnel.** Il ne peut que restreindre les droits de son propriétaire, jamais les étendre.
