---
title: "Agents IA"
translationKey: "ai-agents"
description: "Configurer un agent TblFlow : modèle, outils activés, mémoire, déclencheurs, validation humaine des écritures, skills et quotas par palier."
section: "Guides"
order: 4
---

Un agent est un exécutant attaché à une base. Il a des instructions, un ensemble d'outils, une mémoire, et par défaut chacune de ses écritures attend votre accord.

Le profil d'un agent s'organise en cinq onglets : **Instructions**, **Travaux**, **Compétences**, **Connaissance** et **Mémoire**.

## Choisir le modèle

Les fournisseurs et leurs clés se configurent par espace, dans **Paramètres IA de l'espace**. Seul un propriétaire de l'espace peut les modifier. Les clés sont chiffrées au repos et n'apparaissent plus en clair après enregistrement.

Parmi les fournisseurs disponibles : OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, tout point de terminaison compatible OpenAI, ainsi que des modèles locaux via Ollama et LM Studio. Les clés que vous ajoutez s'additionnent à celles de l'instance, sauf si vous désactivez **Utiliser les modèles de l'instance à défaut**.

Dans le profil d'un agent, le sélecteur **Modèle** permet de lui attribuer un modèle propre. Sans choix, l'agent utilise le modèle de chat par défaut de la configuration IA.

## Définir le périmètre

Le périmètre d'un agent tient à trois choses.

- **Sa base.** Un agent ne lit ni n'écrit dans les tables d'une autre base : une table qui n'est pas dans sa base est refusée.
- **Ses outils.** L'onglet **Compétences** liste les actions que l'agent peut effectuer. Un outil désactivé n'est pas proposé au modèle, qui ne peut donc pas l'appeler. La plupart des outils sur les enregistrements, les tables et les commentaires sont actifs par défaut. Les outils qui touchent l'extérieur ou produisent des fichiers sont désactivés par défaut et s'activent un par un : recherche sur le Web, génération de fichiers Excel, Word, PowerPoint et PDF, exécution d'un skill ou de code, e-mail, Slack, Microsoft Teams, GitHub, agenda, Drive et SharePoint, rejeu d'un skill navigateur. La délégation à d'autres agents n'est active par défaut que pour un agent orchestrateur.
- **Ses connexions.** Les comptes connectés dans Connecteurs servent vos agents. Quand personne ne lance l'agent (horaire, déclencheur), ce sont les comptes de son créateur qui sont utilisés. Vous pouvez aussi ajouter des serveurs MCP à l'agent.

Pour restreindre ce que l'agent peut atteindre, retirez-lui les outils dont il n'a pas besoin. Un agent de tri du support n'a aucune raison d'envoyer des e-mails ni de supprimer des enregistrements.

## Validation des écritures

Le réglage **Validation des écritures** est activé par défaut, agent par agent. Tant qu'il est actif, un outil à effet réel ne s'exécute pas : l'agent se met en attente et demande votre accord. Sont concernés notamment la création, la modification et la suppression d'enregistrements, la création de tables, de champs et de vues, les commentaires, l'envoi d'e-mails ou de messages, le lancement d'une automatisation, l'exécution de code ou d'un skill, et l'écriture en mémoire.

Vous répondez avec **Approuver** ou **Refuser** (avec une raison facultative). Les demandes en attente se retrouvent dans la page **Approbations** de la base, accessible par le lien **Voir les approbations en attente**. Sans réponse, la demande expire au bout de 7 jours et l'action n'est pas exécutée.

Désactivez ce réglage seulement après avoir observé les erreurs de l'agent. Une fois désactivé, l'agent écrit seul, et ce pour toutes ses écritures : le réglage ne se règle pas table par table.

## Mémoire

L'onglet **Mémoire** active ou désactive la mémoire de l'agent, qui comprend deux rubriques :

| Rubrique | Contenu |
| --- | --- |
| Récent | souvenirs à court terme du travail récent, conservés 7 jours ; les 50 plus récents sont retenus et les 5 plus récents sont fournis à l'agent au début d'une tâche |
| Préférences | consignes données par les humains, sous forme clé et valeur, fournies à l'agent à chaque tâche |

Quand l'agent mémorise une information, des entités et des relations peuvent en être extraites dans un graphe de l'espace, que l'agent interroge avec l'outil **Rechercher dans la mémoire**. La mémoire n'est donc pas un historique de conversation : les échanges sont conservés à part, dans l'historique.

**Voir les souvenirs** ouvre la liste des souvenirs de l'agent. Les éditeurs de la base peuvent **Corriger** ou **Effacer** un souvenir : si l'agent a retenu une chose fausse, on corrige l'entrée plutôt que les instructions.

## Skills

Un skill est un bloc d'instructions nommé, éventuellement accompagné d'un script, qu'un agent peut utiliser. Il peut être personnel (compte) ou partagé dans l'espace. Les skills disponibles pour un agent sont ceux de son créateur et ceux de l'espace ; chacun est désactivé par défaut et s'active pour l'agent dans l'onglet **Compétences**. L'exécution du script d'un skill passe par l'outil **Exécuter le script d'un skill**, désactivé par défaut lui aussi.

## Déclencheurs

L'onglet **Travaux** indique quand l'agent s'exécute.

| Déclencheur | Fonctionnement |
| --- | --- |
| Mention | l'agent analyse et répond lorsqu'on le mentionne sur un enregistrement (interrupteur) |
| Message privé | l'agent répond aux messages qu'on lui envoie (interrupteur) |
| **Lancer l'agent** | exécution à la demande |
| Planifié | à un horaire récurrent, ou selon une expression cron personnalisée ; un intervalle inférieur à 15 minutes est refusé par défaut |
| Automatisé | à la création ou à la modification d'un enregistrement d'une table |
| Webhook entrant | un appel HTTP déclenche l'agent |

Un déclencheur sur enregistrement n'agit que si la validation des écritures est désactivée : tant qu'elle est exigée, il reste inactif, car aucun humain ne peut être sollicité lors d'un déclenchement automatique. Un horaire ou un webhook, eux, fonctionnent avec la validation : la demande d'accord arrive dans les approbations.

## Quotas

Chaque exécution d'un agent est comptée sur le mois, qu'elle soit lancée à la main, planifiée ou déclenchée.

| Palier | Exécutions d'agent par mois |
| --- | --- |
| Gratuit | 100 |
| Essentiel | 5 000 |
| Équipe | 50 000 |
| Entreprise | illimitées |

En auto-hébergement, ces plafonds ne sont pas appliqués. L'usage de l'IA est par ailleurs soumis à d'autres limites propres au palier. Les quotas des [automatisations](/fr/docs/automatisations) sont comptés à part.

## Historique

Chaque exécution est conservée comme une conversation, avec les appels d'outils de l'agent, leurs paramètres et leurs résultats. L'historique des conversations est consultable depuis le chat de l'agent.

## Bonnes pratiques

- Un objectif par agent. Un agent « qui gère le CRM » échoue de façon diffuse ; trois agents étroits échouent de façon lisible.
- Laissez la validation des écritures active au début, et ne la désactivez qu'après avoir vu la nature de ses erreurs.
- N'activez que les outils nécessaires à la mission de l'agent.
