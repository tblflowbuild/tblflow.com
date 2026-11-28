---
title: "Compte et sécurité"
translationKey: "account-security"
description: "Se connecter sans mot de passe (clé d'accès, lien par e-mail, connexion externe), gérer profil, langue, notifications et suppression du compte."
section: "Guides"
order: 16
---

Cette page décrit ce qui concerne **votre compte personnel** : la connexion, le profil, les préférences, la recherche rapide, l'export de vos données et la suppression du compte. Les réglages qui s'appliquent à tout un espace sont dans [Réglages de l'espace](/fr/docs/reglages-espace).

## Se connecter

L'écran de connexion ne propose **pas de mot de passe**. Trois moyens existent. Les deux premiers sont toujours présents, le troisième dépend de l'instance.

| Moyen | Comment l'utiliser |
|---|---|
| Clé d'accès | Cliquez sur **Se connecter avec une clé d'accès**, puis validez avec le moyen de votre appareil. |
| Lien par e-mail | Sous **Ou se connecter par e-mail**, saisissez votre adresse et cliquez sur **M'envoyer un lien**. |
| Connexion externe | Sous **Ou continuer avec**, choisissez un fournisseur : GitHub, Google ou OIDC. Seuls les fournisseurs activés sur l'instance s'affichent. |

### Clé d'accès

Une clé d'accès (passkey) s'appuie sur Face ID, Touch ID, Windows Hello ou une clé de sécurité. Elle s'ajoute **après** votre première connexion, depuis le profil (voir plus bas).

### Lien par e-mail

TblFlow envoie à votre adresse un lien de connexion et un code à 6 chiffres. Le message précise que le lien expire dans 10 minutes. Vous pouvez ouvrir le lien, ou saisir le code dans le champ **Code à 6 chiffres** puis cliquer sur **Se connecter**. **Renvoyer un lien** relance l'envoi.

- Cette voie ne fonctionne que pour une adresse qui a déjà un compte. Pour une adresse inconnue, l'écran réagit comme pour une adresse connue mais aucun e-mail n'est envoyé : c'est voulu, pour ne pas révéler quelles adresses ont un compte. Créez le compte par l'inscription.
- Les demandes sont espacées : l'écran indique le nombre de secondes à attendre avant d'en demander un autre.
- Après trop de codes erronés, la connexion est verrouillée pour quelques minutes.
- Si l'instance utilise un défi de vérification anti-robot, il s'affiche sous le champ et doit être validé avant l'envoi.

Un réglage d'instance permet de désactiver ce lien. L'écran affiche alors « La connexion sans mot de passe est indisponible sur cette instance ».

### Connexion externe et SSO

Les boutons **GitHub**, **Google** et **OIDC** redirigent vers le fournisseur. Ils n'apparaissent que si l'instance les a configurés. Le bouton **OIDC** correspond à un fournisseur OpenID Connect configuré au niveau de l'instance : il ne se règle pas dans les réglages d'espace.

## Créer un compte

Ouvrez **S'inscrire** depuis l'écran de connexion. Le formulaire demande :

- votre adresse e-mail ;
- l'acceptation des conditions d'utilisation et de la politique de confidentialité (obligatoire) ;
- un **code de vérification** envoyé par e-mail, lorsque l'instance le demande ;
- un **code d'invitation**, lorsque l'instance fonctionne avec une liste d'attente. Le lien **Rejoindre la liste d'attente** permet de s'y inscrire.

Aucun mot de passe n'est créé. Selon la configuration, l'instance peut aussi fermer les inscriptions : l'onglet d'inscription reste alors disponible uniquement via un lien d'invitation à un espace, une base ou une vue partagée.

## Mon profil

Ouvrez le menu de votre avatar, puis **Paramètres**. La fenêtre regroupe vos réglages personnels : **Mon compte**, puis **Mes notifications**, **Connecteurs**, **Jetons d'accès personnel**, **Mes skills** et **Applications OAuth**. Les réglages de l'espace actuel figurent dans la même fenêtre quand vous y avez accès.

L'onglet **Mon compte** (titre **Mon profil**) contient :

| Réglage | Détail |
|---|---|
| Avatar | **Changer l'avatar** ouvre le choix d'une image. |
| Nom d'affichage | Le nom sous lequel vous êtes appelé dans TblFlow. Il s'enregistre en quittant le champ. |
| **Prénom** et **NOM** | Le nom de famille est enregistré en majuscules. |
| Thème | **Clair**, **Sombre** ou **Système**. |
| Langue | Voir ci-dessous. |
| **Vue des bases** | Affichage de la liste des bases d'un espace : **Automatique**, **Carte** ou **Liste**. |
| **Vue dans une base** | Affichage à l'ouverture d'une base : mêmes trois choix. |
| **Mode d'interaction** | **Mode souris**, **Mode tactile** ou **Suivre le système**. Ce choix n'apparaît que sur un appareil qui gère à la fois le tactile et la souris. |

### Langue de l'interface

Le sélecteur **Langue** propose dix langues, plus une entrée **Default** (langue du navigateur) :

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe et Español (Latinoamérica).

Le choix est enregistré sur votre compte, puis la page se recharge.

### Sécurité du compte

La section **Sécurité du compte** regroupe les éléments suivants.

**Adresse e-mail.** **Changer l'adresse e-mail** demande la nouvelle adresse, envoie un code de vérification avec **Envoyer le code**, puis **Confirmer** valide. Votre session est alors fermée et vous revenez à l'écran de connexion. Cette opération exige d'avoir présenté une clé d'accès ou un code de secours dans les 15 dernières minutes : enrôlez une clé d'accès avant d'en avoir besoin.

**Clés d'accès.** **Ajouter une clé d'accès** lance l'enregistrement sur votre appareil et vous demande de nommer la clé. Chaque clé listée a un bouton **Supprimer**. Dès que votre compte possède une clé d'accès ou un code de secours, ajouter ou supprimer une clé exige la même présentation récente d'un facteur fort. Un compte qui n'en a encore aucun peut enrôler sa première clé directement.

**Codes de secours.** **Générer** crée dix codes à usage unique. Ils remplacent votre clé d'accès si vous la perdez, mais ils ne servent pas à vous connecter. Ils ne sont affichés qu'une fois : utilisez **Copier** ou **Télécharger** tout de suite. **Régénérer** remplace le lot entier, les anciens codes cessent de fonctionner. Le nombre de codes restants est indiqué.

**Accès du support TblFlow.** Un interrupteur autorise le support à se connecter à votre place lorsque vous demandez de l'aide. Il est désactivé par défaut. Selon le texte affiché, chaque session dure 30 minutes au plus, est en lecture seule sauf accord contraire et est enregistrée avec son motif. Vous pouvez le retirer à tout moment.

**Traitements de vos données.** Deux interrupteurs :

- **Limiter le traitement de mes données (RGPD Art. 18)** : gèle les traitements automatisés non essentiels, sans rien supprimer. Votre compte continue de fonctionner.
- **M'opposer au traitement IA de mes contenus (RGPD Art. 21)** : vos documents importés cessent d'être indexés et lus par les fonctions IA. Ils restent stockés et téléchargeables.

La limitation couvre déjà le traitement IA : dans ce cas, le second interrupteur est verrouillé.

La section affiche aussi vos intégrations tierces autorisées, que vous pouvez révoquer. Les connecteurs, les jetons personnels et les applications OAuth ont leurs propres pages : voir [Connecteurs](/fr/docs/connecteurs) et [API et développeurs](/fr/docs/api-developpeurs).

## Notifications

### Le centre de notifications

L'icône en forme de cloche affiche le nombre de notifications non lues. Le panneau propose deux listes, les non lues et les lues (**Lu**), le bouton **Marquer tout comme lu** et **Voir plus** pour charger la suite.

### Les e-mails

**Mes notifications** règle ce que vous recevez par e-mail. Trois niveaux :

| Niveau | Contenu |
|---|---|
| **Toutes les notifications** | Mentions et commentaires, plus les messages de la plateforme : fin d'import ou d'export, automatisation ou génération IA en échec, quotas et facturation. |
| **Mentions et commentaires seulement** | Uniquement quand quelqu'un vous nomme dans une cellule ou un commentaire, ou commente. |
| **Aucun e-mail** | Les notifications restent visibles dans l'application. |

Le relais vers Slack, Teams ou Google Chat est un réglage d'espace, pas personnel : voir [Réglages de l'espace](/fr/docs/reglages-espace).

## Palette de commandes et recherche

**Ctrl+K** (**⌘+K** sur Mac) ouvre la palette **Actions rapides**. Un bouton en forme de loupe l'ouvre aussi, et le raccourci la referme.

- **Dans une base** : la palette liste les tables, applications et automatisations de la base. Elle propose aussi les actions de création, **Ouvrir l'assistant IA** (ou **Demander à l'assistant** avec le texte saisi), le choix du thème et l'ouverture des paramètres.
- **Dans un espace** : la saisie lance une recherche sur le serveur dans l'espace. Les résultats peuvent être des bases, tables, vues, tableaux de bord, automatisations ou applications, par pages de 10 avec **Charger plus**. Un résultat ouvre l'élément. L'action **Créer une base** y apparaît si votre rôle le permet.

Les actions proposées dépendent de vos droits : une action interdite n'apparaît pas.

**Dans une table**, **Ctrl+F** (**⌘+F** sur Mac) place le curseur dans la recherche de la barre d'outils. Elle offre la **Recherche globale** (tous les champs sauf les dates, cases à cocher et boutons) ou la **Recherche par champ**. Voir [Vues et filtres](/fr/docs/vues-filtres).

## Exporter mes données

En bas de l'onglet **Mon compte**, **Télécharger l'archive** produit un fichier zip. Il contient un fichier `profile.json` avec les champs de votre profil, un dossier par base dont vous êtes propriétaire au titre d'un espace (enregistrements et pièces jointes), et, si vous en avez, les métadonnées de vos identifiants de sites tiers. Les mots de passe associés ne sont pas exportés.

## Supprimer mon compte

En bas de l'onglet **Mon compte**, **Supprimer le compte** ouvre une confirmation. L'action est irréversible.

1. Quittez d'abord vos espaces. Tant que vous êtes membre d'un espace, ou propriétaire ou créateur d'un espace placé dans la corbeille, la suppression est refusée et l'écran liste les espaces concernés, avec un lien vers chacun.
2. Saisissez `DELETE` dans le champ de confirmation. Le bouton **Supprimer** reste inactif tant que la saisie diffère.
3. Le serveur exige une connexion de moins de 15 minutes (une clé d'accès ou un code de secours récent si vous en avez). Sinon, reconnectez-vous puis recommencez.

Ce qui se passe ensuite :

- votre adresse est remplacée, votre nom effacé, votre avatar remplacé par un avatar par défaut ;
- vos jetons d'accès, comptes liés, clés d'accès, codes de secours, notifications et conversations avec les agents sont supprimés ;
- vos commentaires sont vidés ;
- les enregistrements des bases partagées sont conservés : ils appartiennent à l'équipe et vous n'y figurez que sous le nom « Deleted User ».
