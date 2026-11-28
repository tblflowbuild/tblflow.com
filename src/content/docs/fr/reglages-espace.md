---
title: "Espaces et réglages d'espace"
translationKey: "space-settings"
description: "Créer et changer d'espace, ranger les bases en dossiers, parcourir les réglages : membres, domaines, IA, webhooks, e-mail, audit, RGPD, AI Act."
section: "Guides"
order: 17
---

Un **espace** réunit des bases et des collaborateurs. Cette page explique comment naviguer entre les espaces, ranger les bases dans des dossiers, puis ce que contient chaque onglet des réglages d'espace. Les réglages qui concernent votre seul compte sont dans [Compte et sécurité](/fr/docs/compte-securite).

## Espaces

Le nom de l'espace courant s'affiche en haut à gauche. Cliquez dessus pour ouvrir un menu à deux colonnes.

- **Colonne de droite** : la liste de vos espaces, avec un champ de recherche. L'espace courant porte une coche, une étoile permet d'épingler un espace, et **Créer un espace** en bas ouvre une confirmation avec un champ de nom. Si vous laissez le champ vide, TblFlow utilise le nom proposé. Une fois créé, l'espace s'ouvre.
- **Colonne de gauche** : les actions de l'espace : **Carte de l'espace**, **Carto des process** (voir [Cartographie des processus](/fr/docs/cartographie-processus)), **Créer une base**, **Modèle**, **Importer**, **DocIndex**, **Connecteurs**, **Corbeille** et **Paramètres de l'espace**. **Importer** n'apparaît que pour qui peut modifier l'espace, **Créer une base** est inactif sans le droit de créer une base, et **Paramètres de l'espace** apparaît pour le propriétaire et pour un rôle à qui un réglage est délégué.

La page d'un espace liste ses bases. Le sélecteur de tri propose **Récent** et **Ordre manuel** : en ordre manuel, un rôle autorisé à modifier les bases peut les réordonner par glisser-déposer.

La suppression d'un espace se fait depuis l'onglet **Général** (voir plus bas), et la restauration depuis la **Corbeille** : voir [Import, export et corbeille](/fr/docs/import-export-corbeille).

## Dossiers de bases

Les dossiers rangent les bases d'un espace. Ils sont **communs** : tous les membres de l'espace les voient. Ils s'affichent dans l'affichage en liste.

| Action | Comment |
|---|---|
| Créer un dossier | **Nouveau dossier** dans la barre au-dessus de la liste. |
| Créer un sous-dossier | Au survol d'un dossier, l'icône **Nouveau sous-dossier**. |
| Renommer | Double-clic sur le nom du dossier. |
| Ranger une base | Glissez la base sur le dossier. **Déposer ici pour sortir d'un dossier** la remet à la racine. |
| Supprimer | Au survol, l'icône **Supprimer le dossier**, après confirmation. |

Quelques règles :

- Seul qui peut modifier l'espace (le propriétaire) gère les dossiers.
- Il y a deux niveaux au plus : un sous-dossier ne peut pas contenir d'autre dossier, et un dossier qui a des sous-dossiers ne peut pas être rangé dans un autre.
- Un espace compte 500 dossiers au plus. Deux dossiers d'un même niveau ne peuvent pas porter le même nom.
- Supprimer un dossier supprime aussi ses sous-dossiers, mais **pas les bases** : elles remontent à la racine.

## Ouvrir les réglages d'espace

Dans le menu de l'espace, cliquez sur **Paramètres de l'espace**. La fenêtre affiche les réglages de l'espace à côté de vos réglages personnels.

Qui voit quoi :

- le **propriétaire** voit tous les onglets ;
- un **délégué** (rôle personnalisé) voit seulement les onglets qui lui sont délégués, voir [Habilitations et rôles](/fr/docs/habilitations) ;
- le **DPO** désigné de l'espace voit les onglets **AI Act** et **Données personnelles (RGPD)** (la vue RGPD est en lecture seule pour lui) ;
- l'onglet **Marque** est lisible par tous les membres de l'espace.

Quatre actions de réglage peuvent être déléguées à un rôle personnalisé :

| Action déléguée | Onglets ouverts |
|---|---|
| `space\|settings_notifications` | **Notifications** |
| `space\|settings_mail` | **E-mail** |
| `space\|settings_domains` | **Domaines vérifiés** |
| `space\|settings_ai` | **Paramètres IA** et **Recherche web** |

## Général

Le nom de l'espace se modifie en cliquant dessus ; l'identifiant de l'espace est affiché avec un bouton de copie. La **Zone de danger** contient **Supprimer l'espace**, réservé à qui a le droit de supprimer l'espace. Une confirmation propose **Déplacer dans la corbeille**.

Sur le cloud, la suppression est refusée pour un espace en formule Essentiel ou Équipe : « Cet espace a un abonnement actif. Veuillez annuler l'abonnement avant de supprimer l'espace. »

## Collaborateurs

L'onglet liste les collaborateurs de l'espace, avec leur rôle, et le bouton **Inviter**. On invite par e-mail (**Inviter par email**, adresses séparées par Entrée) ou par lien (**Inviter par lien**). Un collaborateur de l'espace a accès à toutes les bases de cet espace. Les liens d'invitation créés sont listés et peuvent être supprimés, et **Supprimer le collaborateur** retire une personne. Les rôles et leurs droits sont détaillés dans [Habilitations et rôles](/fr/docs/habilitations).

## Permissions

Cet onglet gère les matrices de rôles personnalisés de l'espace. Voir [Habilitations et rôles](/fr/docs/habilitations).

## Abonnement et consommation IA

Ces deux onglets, **Abonnement** et **Consommation IA**, sont décrits dans [Offres et limites](/fr/docs/offres-limites).

## Domaines vérifiés

Un domaine vérifié sert une application publiée sur votre propre adresse.

1. **Ajouter un domaine**, puis saisissez un nom comme `app.mondomaine.com`.
2. TblFlow affiche un enregistrement DNS TXT à créer chez votre hébergeur de domaine : le nom est `_tblflow-verify.` suivi du domaine, la valeur commence par `tblflow-verify=`.
3. Cliquez sur **Vérifier**. Le domaine passe à **Vérifié**.
4. Associez le domaine à une application depuis l'onglet **Publier** de son éditeur. Visiter la racine du domaine affiche alors l'application, si son partage est activé.

La preuve DNS est relue au bout de sept jours : si l'enregistrement a disparu, le domaine repasse à non vérifié et ne sert plus l'application. **Retirer ce domaine** le supprime. Voir aussi [Partage et publication](/fr/docs/partage-publication).

## Paramètres IA

Cet onglet configure l'IA de l'espace. Le réglage s'applique à tous ses collaborateurs.

- **Fournisseurs** : ajoutez vos propres clés de fournisseurs de modèles. Elles sont chiffrées au repos et ne réapparaissent jamais en clair. Chaque fournisseur peut être testé, modifié ou supprimé.
- **Modèles et routage** : une fois un fournisseur disponible, vous choisissez le modèle de chat, les paliers (léger, standard, grand), les modèles d'image, d'audio et de vidéo et le fournisseur d'embeddings.
- **Utiliser les modèles de l'instance à défaut** : désactivé, l'espace n'utilise que vos clés. Activé, il peut consommer celles de l'éditeur en l'absence de clé.
- **Utiliser les connecteurs d'API dans l'application complète** : désactivé, la génération d'une application complète n'appelle aucune API connectée à l'espace.

### Ajouter un fournisseur ou un modèle personnalisé

Seul un propriétaire de l'espace peut modifier ces réglages. Dans **Fournisseurs**, **Ajouter un fournisseur LLM** ouvre un formulaire :

- **Nom** : le nom affiché du fournisseur ;
- **Type de fournisseur** : OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** et d'autres. Un exemple d'**URL de base** s'affiche selon le type choisi ;
- **Clé API** : absente pour LM Studio ;
- **Modèles** : les noms des modèles à proposer. Selon le type, **Charger les modèles** (Ollama, LM Studio) ou **Charger depuis models.dev** remplit la liste, et **Détecter** complète les caractéristiques des modèles déjà saisis.

Cliquez sur **Test** : TblFlow essaie chaque modèle saisi. Quand le test réussit (**Test réussi**), le bouton **Ajouter** apparaît. Un fournisseur ajouté se modifie par l'icône crayon et se retire par l'icône corbeille.

Pour Ollama, LM Studio et Unsloth installés sur votre machine : sur une instance TblFlow hébergée, « localhost » désigne le serveur TblFlow, pas votre poste. Exposez votre serveur en HTTPS et collez son URL publique dans **URL de base**. Protégez un Ollama exposé par un proxy à jeton, et saisissez ce jeton comme **Clé API**.

Les appels faits avec votre propre clé ne consomment pas de crédits IA TblFlow. Voir aussi [Agents IA](/fr/docs/agents-ia).

## Recherche web

Permet à l'assistant et aux agents de l'espace de chercher sur le web. Saisissez une clé d'API Tavily : elle est testée avant d'être enregistrée (**Clé valide** ou **Clé invalide**). Sans clé propre, l'espace utilise la recherche web de l'instance si elle existe, sauf si vous désactivez **Utiliser la clé de l'instance à défaut**.

## Notifications

Relaie les notifications de l'espace vers un canal de messagerie : **Slack**, **Microsoft Teams** et **Google Chat**. Collez l'URL du webhook entrant de chaque service. Cette URL est un secret : elle n'est plus affichée après enregistrement, et un champ rempli la remplace.

Les notifications relayées sont les mentions, les commentaires, la fin d'un export, l'échec d'une automatisation, l'échec d'une génération IA, la facturation et les notifications système.

L'interrupteur **Utiliser les webhooks de l'instance à défaut** décide si les webhooks de l'instance servent quand l'espace n'a pas les siens. Cliquez sur **Enregistrer** pour appliquer.

## E-mail

Configure le serveur SMTP par lequel partent les e-mails des **automatisations** de l'espace : **Serveur SMTP**, **Port**, **Adresse expéditrice**, **Nom de l'expéditeur**, **Utilisateur** et **Mot de passe**. Le mot de passe n'est jamais réaffiché. Les e-mails système de TblFlow, comme les invitations, ne passent pas par ce serveur. L'interrupteur **Utiliser le SMTP de l'instance à défaut** a le même rôle que pour les webhooks. Voir [Automatisations](/fr/docs/automatisations).

## Organigramme

Gère la structure organisationnelle de l'espace : des **départements** en arborescence, leurs membres, et un organigramme calculé à partir du manager renseigné sur la fiche de chaque personne. Une fiche porte le poste, le manager, la date d'entrée, le pays, le statut d'emploi, la date de départ, la quotité et le lieu. L'onglet permet d'exporter, et d'importer un fichier CSV : cliquez d'abord sur **Aperçu**, rien n'est écrit tant que vous n'avez pas confirmé.

## Marque

Le nom de la marque et le design system (couleurs, typographie, composants, illustrations) guident les applications, interfaces et documents générés pour l'espace. Seul le propriétaire modifie la marque ; les autres membres peuvent la consulter et exporter le `design.md`. **Compléter avec la marque de l'instance** reprend ce que vous ne renseignez pas.

## Sécurité et audit

Réservé au propriétaire de l'espace.

- **Journal de l'espace** : qui a fait quoi, avec les colonnes **Quand**, **Événement**, **Utilisateur**, **Ressource** et **Détail**. Filtrez par événement et par période (**Du**, **Au**), puis **Exporter en CSV** : l'export reprend le filtre et s'arrête à 5 000 lignes. Les entrées de plus de six mois sont purgées automatiquement, hors événements liés aux demandes RGPD et aux effacements.
- **Journal détaillé des appels MCP** : désactivé par défaut. Chaque appel d'un assistant IA (MCP) ou du CLI est toujours journalisé avec l'outil, l'issue, la durée et son auteur. Activé, le journal garde en plus les identifiants des objets touchés. Les contenus (valeurs de cellules, requêtes, consignes d'agent) ne sont jamais conservés, seule leur taille l'est. Par défaut, ces entrées sont effacées après 180 jours. Voir [Serveur MCP](/fr/docs/serveur-mcp).
- **Comptes de service** : donnent à un script ou à une chaîne d'intégration continue un accès à l'espace qui ne dépend d'aucune personne. Choisissez un rôle (**Lecteur**, **Éditeur** ou **Créateur**), puis émettez un jeton avec un accès (**Lecture seule**, **Lecture et écriture des enregistrements** ou **Tout ce que permet le rôle**) et une durée de validité. Le jeton n'est affiché qu'une fois. **Révoquer** le rend inutilisable aussitôt. Voir [Ligne de commande](/fr/docs/cli).

## AI Act

Réservé au propriétaire et au DPO. L'onglet **Mes usages de l'IA** inventorie les usages de l'IA créés dans l'espace : champ IA, agent, automatisation avec étape IA, exposition MCP, recherche documentaire, chat et génération. Chaque usage a une catégorie de risque (**Interdit**, **Haut risque**, **Transparence**, **Minimal**, **Non évalué**), un état (**À jour**, **À revoir**, **Revue annuelle due**) et la liste de ce qui reste à corriger.

**Décrire la finalité** pose quatre questions courtes et suggère une catégorie que vous pouvez corriger. **Marquer comme revu** renouvelle la revue. Les avertissements ne bloquent rien. L'onglet **Fonctions IA de TblFlow** présente les fonctions IA fournies par TblFlow.

Cet inventaire aide à repérer les usages à examiner ; il ne remplace pas votre propre analyse.

## Données personnelles (RGPD)

Réservé au propriétaire, avec une vue en lecture pour le DPO. Quatre onglets :

- **Inventaire** : classez chaque champ (**Non personnelle**, **Personnelle**, **Identifiant direct**, **Sensible (art. 9)**) avec une finalité et une durée de conservation en jours. **Suggérer** propose une catégorie, jamais appliquée sans votre validation. **Registre art. 30 (CSV)** exporte le registre.
- **Journal** : les lectures, exports et modifications de tables contenant des champs personnels, et les demandes des personnes.
- **Demandes** : cherchez une personne par e-mail, nom ou identifiant dans les champs texte de toutes les bases de l'espace (3 caractères au moins). Vous pouvez **Exporter (CSV)** les lignes trouvées ou **Effacer la sélection** (propriétaire seulement). Les lignes effacées vont à la corbeille ; leurs anciennes valeurs dans l'historique sont supprimées.
- **DPO** : le propriétaire désigne un DPO parmi les membres. Le DPO consulte la vue en lecture seule et n'a aucun droit de modification sur les bases.

## Pré-prod

Réservé au propriétaire, sur les formules Équipe et Entreprise. Une pré-prod est une copie de l'espace pour tester des changements. Vous pouvez **Créer la pré-prod**, **Ouvrir la pré-prod**, **Rafraîchir depuis la prod** (les changements non publiés sont perdus) et **Publier vers la prod**. Seules la structure et la logique sont publiées vers la prod, jamais les données : tables, champs, vues, automatisations, agents et applications. Un élément modifié des deux côtés est signalé en conflit et la publication est bloquée.

## Extensions

Liste les serveurs MCP tiers installés dans l'espace. À l'installation, un écran de consentement présente les permissions demandées. Vous pouvez activer ou révoquer ces permissions ensuite.
