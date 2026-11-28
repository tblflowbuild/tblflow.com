---
title: "Offres et limites"
translationKey: "plans-limits"
description: "Les quatre paliers (Gratuit, Essentiel, Équipe, Entreprise) et leurs limites : personnes, lignes, stockage, quotas mensuels, crédits IA, devis."
section: "Guides"
order: 18
---

Chaque espace TblFlow est sur un palier. Le palier fixe le nombre de personnes, de bases et de lignes, le stockage, les quotas mensuels d'exécution et les crédits IA inclus. Cette page décrit ces limites et ce qui se passe quand l'une d'elles est atteinte. Les prix sont sur la page [Tarifs](/fr/pricing), qui fait foi.

## Où voir votre palier

Ouvrez les paramètres de l'espace, puis l'onglet **Abonnement**. Il affiche la formule actuelle, les quatre paliers avec leurs limites, et le compteur de lecteurs gratuits de votre espace. Les crédits IA se suivent dans l'onglet **Consommation IA**, réservé au propriétaire de l'espace. Les autres réglages d'espace sont décrits dans [Réglages de l'espace](/fr/docs/reglages-espace).

Les paliers s'appellent **Gratuit**, **Essentiel**, **Équipe** et **Entreprise**.

## Personnes et lecteurs

Le prix est celui de l'espace, pas celui de chaque personne : chaque palier inclut un nombre de personnes.

| | Gratuit | Essentiel | Équipe | Entreprise |
|---|---|---|---|---|
| Personnes incluses | 2 | 5 | 15 | 50 |
| Lecteurs gratuits | 2 | 10 | 30 | illimité |
| Personnes supplémentaires achetables | non | jusqu'à 30 | jusqu'à 30 | jusqu'à 50 |

Une personne compte comme **facturable** si elle est propriétaire, créatrice ou éditrice de l'espace (voir [Habilitations](/fr/docs/habilitations)). Les rôles lecteur et commentateur partagent un seul compteur de lecteurs gratuits. Au-delà de ce compteur, chaque lecteur occupe une personne incluse ou supplémentaire ; si l'espace est plein, l'ajout est refusé.

Pour ajouter des personnes supplémentaires, sur l'offre payante en cours, saisissez le nombre dans **Personnes supplémentaires** puis cliquez sur **Enregistrer**. Ce réglage est indisponible pendant l'essai. Le bouton **Gérer mon abonnement** ouvre le portail de paiement, où se gèrent moyen de paiement, factures et résiliation. Il reste inactif tant qu'aucun paiement n'a eu lieu pour l'espace.

## Limites de contenu

| | Gratuit | Essentiel | Équipe | Entreprise |
|---|---|---|---|---|
| Bases par espace | 1 | 5 | 30 | illimité |
| Lignes par table | 5 000 | 100 000 | 1 000 000 | illimité |
| Stockage des bases | 1 Go | 100 Go | 500 Go | illimité |
| Bibliothèque Médias, total | 200 Mo | 20 Go | 100 Go | illimité |
| Bibliothèque Médias, par fichier | 25 Mo | 200 Mo | 500 Mo | 500 Mo |
| Espaces gratuits par personne | 1 | illimité | illimité | illimité |

La Carto des process (voir [Cartographie des processus](/fr/docs/cartographie-processus)) ne compte pas parmi les bases de l'espace. Sur le palier Gratuit, elle est en diagnostic : un seul processus. Les paliers payants ont la carte complète.

Certaines fonctions dépendent aussi du palier :

| | Gratuit | Essentiel | Équipe | Entreprise |
|---|---|---|---|---|
| Vérification de domaine | non | oui | oui | oui |
| Journal d'audit | non | non | oui | oui |
| Permissions avancées | non | non | oui | oui |
| Domaine personnalisé | non | non | oui | oui |

## Quotas mensuels

Ces quotas mesurent ce qui s'exécute. Chaque compteur repart de zéro au début de chaque mois (calendrier UTC).

| Par mois | Gratuit | Essentiel | Équipe | Entreprise |
|---|---|---|---|---|
| Exécutions d'agent | 100 | 5 000 | 50 000 | illimité |
| Exécutions d'automatisation | 500 | 25 000 | 250 000 | illimité |
| E-mails d'automatisation | 50 | 2 000 | 20 000 | illimité |
| Appels aux connecteurs | 1 000 | 50 000 | 500 000 | illimité |
| Minutes d'utilisation de l'ordinateur | 30 | 600 | 3 000 | illimité |
| Rejeux d'utilisation de l'ordinateur | 10 | 200 | 1 000 | illimité |
| Jetons IA | 2 000 000 | 100 000 000 | 1 000 000 000 | illimité |
| Images IA | 20 | 500 | 5 000 | illimité |
| Sons IA | 20 | 500 | 5 000 | illimité |
| Vidéos IA | 0 | 20 | 200 | illimité |

Les appels aux connecteurs sont les appels réels : les réponses servies par le cache ne comptent pas. Le palier Gratuit n'inclut pas de vidéos IA (plafond à 0). Les automatisations et agents sont décrits dans [Automatisations](/fr/docs/automatisations) et [Agents IA](/fr/docs/agents-ia).

La note affichée dans l'onglet **Abonnement** donne un ordre de grandeur : une source synchronisée toutes les 15 minutes pour la carte vivante consomme environ 3 000 exécutions d'automatisation par mois, plus ses appels aux connecteurs.

## Crédits IA

Les crédits IA paient l'IA fournie par TblFlow. Les appels faits avec votre propre clé n'en consomment pas. Ils sont dotés par mois selon le palier :

| | Gratuit | Essentiel | Équipe | Entreprise |
|---|---|---|---|---|
| Crédits IA inclus par mois | 0 | 4 000 | 15 000 | 40 000 |

Pour en avoir davantage, l'onglet **Consommation IA** propose :

- **Option par utilisateur** : 5 000 crédits par mois pour chaque personne que vous cochez ;
- **Pool partagé** : un pool mensuel de 20 000 ou de 100 000 crédits ;
- **Plafond mensuel par membre** : limite ce qu'un membre peut consommer des crédits partagés et des recharges (vide : aucun plafond) ;
- **Recharger des crédits** : des recharges de 5 000, 20 000 ou 100 000 crédits, en paiement unique et sans expiration. Les crédits arrivent dès la confirmation du paiement.

L'option par utilisateur et le pool se souscrivent une fois le palier payant activé. Les tarifs sont sur la page [Tarifs](/fr/pricing). 1 000 crédits correspondent à 1 dollar de coût réel de modèle. L'onglet affiche aussi le solde, la consommation par utilisateur et par source, et l'historique des mouvements.

## Crédit d'accueil

Un espace Gratuit neuf, créé sans démarrer l'essai, reçoit une seule fois 200 crédits IA. Ce crédit n'a pas de date d'expiration et il s'ajoute au solde des recharges. Il se dépense seulement si l'IA fournie par TblFlow est active et que le décompte des crédits est appliqué ; sinon, il reste sans effet.

Conditions :

- il n'est accordé qu'une fois par adresse e-mail ;
- une adresse d'entreprise n'en reçoit qu'un par domaine, toutes adresses du domaine confondues ; les messageries grand public n'ont que la limite par adresse ;
- l'essai et l'accueil partagent la même limite par adresse : une personne reçoit l'un ou l'autre, pas les deux ;
- il ne concerne que les espaces créés après son introduction : un espace existant ne le reçoit pas.

Avec votre propre clé, vous n'en consommez aucun. Quand il est épuisé, rechargez des crédits ou utilisez votre clé.

## Quand une limite est atteinte

| Limite | Ce qui se passe |
|---|---|
| Bases | La création est refusée : « Votre offre autorise au plus N bases. » |
| Lignes par table | L'ajout de lignes est refusé : « Limite maximale de lignes N dépassée ». |
| Personnes | La fenêtre **Plafond de personnes atteint** s'ouvre. Le propriétaire peut cliquer sur **Ajouter une personne** (si l'offre en vend encore) ou **Mettre à niveau**. Un autre membre est invité à prévenir l'administrateur. |
| Stockage | Les envois de fichiers sont refusés : « La limite de stockage de votre offre est atteinte ». Le calcul s'appuie sur la dernière mesure enregistrée. |
| Fichier de la bibliothèque Médias | Un fichier trop gros ou un total dépassé est refusé. |
| Espace gratuit | Un second espace Gratuit est refusé : l'offre gratuite autorise un seul espace. |
| Quota mensuel | L'exécution est refusée : « Votre quota mensuel de … est épuisé. » Elle reprend au mois suivant. |
| Crédits IA | « Vos crédits IA sont épuisés. Achetez une recharge pour continuer. » |

Pour un quota mensuel, le propriétaire de l'espace reçoit un e-mail à 80 %, à 90 % puis à l'épuisement, sauf pour un quota à 0, qui signifie « non inclus ». Quand l'application affiche la fenêtre **Dépassement des limites**, son bouton **Mettre à niveau** ouvre l'onglet **Abonnement**.

## Essai Essentiel

Un espace peut démarrer par un essai Essentiel de 14 jours. Un bandeau indique **Essai Essentiel : N jours restants**, avec le bouton **Passer à Essentiel**. Pendant l'essai, les limites sont celles d'Essentiel, sauf quatre plafonds réduits : 10 000 000 jetons IA, 60 minutes d'utilisation de l'ordinateur, 200 e-mails d'automatisation et 2 vidéos IA par mois. L'essai reçoit un crédit IA unique de 1 000 crédits, sans expiration, et non la dotation mensuelle. Ce crédit remplace le crédit d'accueil : il n'est accordé qu'une fois par adresse et par domaine d'entreprise.

Sans abonnement à la fin de l'essai, l'espace repasse sur le palier Gratuit. Aucune donnée n'est supprimée : ce qui dépasse les limites du palier Gratuit est en lecture seule jusqu'à l'abonnement.

## Souscrire, changer d'offre, facturer

Depuis l'onglet **Abonnement**, choisissez **Mensuel** ou **Annuel** (quand les deux sont proposés), puis **Souscrire** et suivez le paiement. Pour un espace déjà abonné, le bouton devient **Changer d'offre**. Une confirmation indique que l'abonnement change tout de suite, au même rythme de facturation ; le prorata apparaît sur la prochaine facture et les personnes supplémentaires sont ajustées à l'effectif de l'espace. Le passage à un palier trop petit pour le nombre de personnes de l'espace est refusé : retirez d'abord des collaborateurs.

La section **Factures et avoirs** liste vos documents, téléchargeables en **PDF** ou en **Factur-X**. Si votre SIREN manque, l'onglet vous invite à le renseigner : sans lui, vos factures ne peuvent pas vous être transmises.

## Palier Entreprise sur devis

Entreprise se prend sur devis. Sur la carte du palier, le bouton **Demander un devis** ouvre un formulaire public : **Courriel professionnel**, **Société**, **Taille de l'équipe**, **Votre besoin**, et en option **Outils à connecter** et **IA souhaitée**. Cliquez sur **Envoyer la demande**.

Vous recevez ensuite un lien vers la proposition. La page affiche son numéro, l'engagement (mensuel sans engagement, annuel, 2 ans ou 3 ans), le déploiement (serveur mutualisé, cloud dédié ou sur site), les lignes du devis et le total hors taxes. Pour accepter, cochez l'acceptation des conditions générales de vente au nom de la société, puis cliquez sur **J'accepte** : vous êtes redirigé vers le paiement sécurisé, par carte ou prélèvement SEPA. Si la proposition ne peut pas être acceptée, la page en donne la raison. Un lien invalide ou remplacé par un envoi plus récent affiche « Devis introuvable ».
