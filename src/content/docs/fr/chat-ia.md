---
title: "Chat IA"
translationKey: "ai-chat"
description: "Utiliser le chat IA d'une base : mentions @, réglages de saisie, propositions validées avant écriture, applications complètes, skills navigateur."
section: "Guides"
order: 14
---

Le chat IA est un panneau latéral, à droite de la base. Vous y posez des questions sur vos données, ou vous demandez à l'assistant de créer des tables, des vues, des automatisations, des interfaces ou des agents. Pour une demande de modification, il ne fait rien lui-même : il prépare une **proposition** que vous acceptez ou refusez.

## Ouvrir le panneau

Le bouton **Chat IA** se trouve dans la barre d'outils de la vue. Un second bouton du même nom figure dans la barre latérale de la base, pour les personnes qui peuvent modifier la base. Le panneau est fermé à la première visite ; votre dernier choix (ouvert ou fermé) est ensuite conservé.

Tant que la conversation est vide, le panneau propose des suggestions (par exemple « Créer un CRM pour moi »). Un clic sur une suggestion la recopie dans la saisie sans l'envoyer : vous pouvez la modifier avant de valider.

Entrée envoie le message, Maj + Entrée passe à la ligne. Un message peut contenir jusqu'à 100 000 caractères.

## Conversations

- **Nouvelle conversation** vide le panneau et repart de zéro.
- **Historique** liste vos conversations (les cinquante plus récentes) et permet de les rechercher par titre. Vous ne voyez que vos propres conversations, rattachées à la base ouverte.

## Mentionner une table, une vue ou un champ

Tapez `@` dans la saisie pour ouvrir un sélecteur. Il propose trois groupes : **Tables**, **Vues** et **Champs**, pris dans les bases de l'espace que vous pouvez lire. Choisir un objet l'insère dans le message sous forme de pastille, et l'assistant sait alors de quel objet vous parlez.

Quelques règles :

- Seuls les tables, les vues et les champs sont mentionnables. Les enregistrements, les automatisations ou les interfaces ne le sont pas.
- Un message accepte au plus 20 mentions.
- Coller dans la saisie l'adresse d'une table de TblFlow insère directement une mention de cette table.
- Le serveur revérifie chaque mention : l'objet doit appartenir à l'espace et vous devez avoir le droit de lire sa table. Sinon la mention est refusée avec le message « Cette mention n'est pas accessible : retirez-la ou choisissez un objet dans la liste ».
- Les mentions ne sont pas transmises quand vous échangez avec un agent précis.

## Régler la saisie

La barre située sous la zone de texte regroupe les réglages du message.

| Réglage | Effet |
|---|---|
| **Type de résultat** | Limite ce que l'assistant peut proposer : **Table**, **Interface**, **Automation**, **Agent** ou **Données fictives**. Sans choix, c'est « Au choix de l'IA ». Hors **Table**, les types demandent qu'une table existe déjà dans la base. |
| Modèle (icône du fournisseur) | Ouvre la liste des modèles disponibles, regroupés par fournisseur. Survolez l'icône pour la déplier. La liste dépend des modèles configurés pour la base. |
| **Réflexion** | **Rapide** (réponses plus rapides, moins de crédits), **Normal** (réglage habituel du modèle) ou **Approfondi** (le modèle réfléchit davantage, jusqu'à 8 000 jetons de réflexion en plus, donc plus de crédits). **Approfondi** est réservé aux offres Équipe et Entreprise. |
| **Recherche web** | Bouton à activer pour la conversation en cours. Il reste grisé tant que la recherche web n'est pas configurée. |
| **Joindre des fichiers** | Images et PDF, jusqu'à 10 par message. Le bouton est grisé si le modèle choisi n'accepte pas les fichiers. |
| **Dicter un message** | Saisie vocale, via la reconnaissance vocale de votre navigateur. Le bouton n'apparaît que si le navigateur la propose. |

Une jauge **Fenêtre de contexte** estime la part de la mémoire du modèle déjà utilisée par la conversation.

L'usage de l'IA est décompté en crédits ; le niveau de réflexion joue sur cette consommation. Les volumes inclus par offre figurent dans [Offres et limites](/fr/docs/offres-limites).

## Ce que l'assistant peut faire

**Lire, sans validation.** L'assistant lit directement la structure de l'espace, le schéma des tables, les enregistrements, calcule des agrégats et cherche dans la base de connaissances. Il peut aussi générer un fichier Excel, Word, PowerPoint ou PDF.

**Proposer, avec validation.** Pour modifier quoi que ce soit, il émet une proposition affichée dans le chat sous forme de carte. Les propositions couvrent notamment :

- créer une base, une table, une vue, un dossier ;
- renommer une table ou un champ, relier deux tables ;
- créer ou modifier un enregistrement ;
- supprimer un champ ;
- créer une interface, une automatisation ou un agent, générer le code d'une application ;
- créer ou modifier un document de la base de connaissances, lier deux documents.

Sur chaque carte, vous lisez l'aperçu, puis vous cliquez sur **Accepter** ou **Refuser**. Rien n'est écrit avant l'acceptation, et l'acceptation revérifie vos droits : l'assistant ne peut pas faire ce que vous n'avez pas le droit de faire.

Une proposition de suppression demande une confirmation explicite (**Confirmer la suppression**). La carte indique si la ressource est restaurable depuis la corbeille et ce qui en dépend (champs liés ou calculés, vues, automatisations, interfaces).

**Ce qu'il ne fait pas.** Le chat n'a pas d'outil pour supprimer des enregistrements ou des tables. Une simple question, par exemple « Comment créer une table ? », reçoit une réponse écrite et ne déclenche aucune proposition.

Les agents et leurs propositions sont décrits dans [Agents IA](/fr/docs/agents-ia).

## Créer avec l'IA hors du chat

Deux entrées ouvrent une fenêtre de génération courte, sans passer par le panneau :

- **Créer avec l'IA**, dans le menu d'ajout d'une table de la barre latérale, pour une table ;
- **Générer avec l'IA**, en haut de l'éditeur lors de la création d'un champ : la fenêtre permet alors de choisir entre un **Champ** et un **Bouton**.

Vous décrivez ce que vous voulez, puis **Générer** affiche un aperçu. Rien n'est créé tant que vous n'avez pas cliqué sur **Créer** ; **Modifier la demande** revient à la saisie.

## Générer une application complète

Dans la saisie, **Application complète** passe le chat en mode génération. Vous décrivez l'application, et l'assistant la construit par étapes que vous validez :

1. l'analyse de la demande, puis les **Tables** ;
2. les **Relations** ;
3. l'**Interface**, les **Automatisations**, les **Vues**, les totaux et les **Données fictives** ;
4. la liaison et le contrôle des données, puis un **Agent IA**.

Chaque étape produit des propositions. **Accepter tout** les valide d'un coup, et **Modifier** permet d'ajuster l'étape en cours tant qu'aucune proposition n'est acceptée. L'option **Auto** laisse l'IA accepter et enchaîner les étapes suivantes ; elle s'arrête en cas d'échec.

À la fin, un rapport indique ce qui a été créé et signale les automatisations encore inactives : elles ne se déclenchent pas tant que vous ne les avez pas activées. Pour la suite (publication, domaine), voir [Créer votre première application](/fr/docs/creer-premiere-app).

## Assistant projet

Dans le menu d'ajout d'une table, à la racine de la base, **Assistant projet** installe dans la base trois tables, **Personnes**, **Projets** et **Tâches** (noms français pour une interface en français), ainsi qu'un agent nommé « Assistant projet ». Il faut avoir le droit de créer des tables dans la base.

L'agent est planifié du lundi au vendredi à 7 h 30. Il prépare l'ordre du jour des réunions du jour, propose des repères d'échéance dans l'agenda et liste les tâches sans responsable. Ses écritures (mise à jour d'un projet, création d'un événement d'agenda) passent toujours par une approbation. Installer une seconde fois ne recrée pas les tables déjà présentes.

## Skills navigateur

Un skill navigateur enregistre un parcours sur un site web, puis le rejoue à la demande. Il se crée avec **Nouveau skill navigateur**, dans « Autres ressources » du menu d'ajout. Cette fonction n'est pas activée sur toutes les instances.

1. **Ouvrir la session** : un navigateur distant démarre côté serveur, vous voyez son écran en direct et vous cliquez et tapez dedans. Une session dure 15 minutes au plus et se ferme après 2 minutes d'inactivité.
2. Allez jusqu'à la page de départ, puis cliquez sur **Enregistrer**. Chaque clic, frappe et défilement devient une étape. **Arrêter** termine l'enregistrement.
3. **Rejouer** relance les étapes dans un navigateur séparé et affiche un rapport : étapes exécutées, ou étape en échec.

Autour de l'enregistrement :

- **Étapes** liste les étapes, permet d'en retirer une ou de corriger un texte saisi.
- **Identifiants** range un mot de passe, un code 2FA ou une clé de sécurité. Ils sont chiffrés, rejoués par référence, et ne sont jamais renvoyés à la page ni transmis au modèle d'IA. Un identifiant est rattaché à la base : toute personne qui peut la modifier peut l'utiliser pour se connecter, sans en voir la valeur.
- **Commenter** active le micro pour expliquer vos gestes. Le texte, et non le son, est conservé jusqu'à la validation de la compétence puis supprimé.
- **Analyser** tire de l'enregistrement une compétence : un but, des entrées, des règles métier, chacune accompagnée de la phrase dont elle vient. Relisez-les, puis **Valider la compétence**. Réenregistrer la rend caduque.
- **Rejouer avec des données** applique la compétence validée à des valeurs que vous fournissez, au lieu de répéter les gestes à l'identique.

Pour lancer un skill depuis une automatisation, ajoutez l'étape **Piloter un site web** (voir [Automatisations](/fr/docs/automatisations)). Elle exige une compétence validée et l'autorisation d'agir sans surveillance, accordée dans le skill.

## Base de connaissances

La bibliothèque de documents de l'espace est accessible par l'icône « DocIndex » de la barre latérale de l'espace. Vous y créez des documents et des dossiers, ou vous importez des fichiers PDF, DOCX, TXT, MD et CSV (50 Mo au plus pour un PDF, 25 Mo pour les autres). Importer demande le droit de modifier l'espace. Chaque document affiche son état : **Indexation…**, puis **Indexé**.

La recherche propose trois modes : **Sémantique**, **Mots-clés** et **Hybride**. La recherche sémantique suppose qu'un fournisseur d'embeddings soit configuré pour l'espace ; sans lui, la recherche se limite aux mots-clés, et le chat répond qu'aucun fournisseur n'est configuré.

L'assistant du chat interroge cette base à votre demande. Les agents disposent de l'outil **Rechercher dans la base de connaissances** ([Agents IA](/fr/docs/agents-ia)), et les assistants externes de l'outil `search_knowledge` du [serveur MCP](/fr/docs/serveur-mcp).
