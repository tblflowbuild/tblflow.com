# Changelog : nouveautés depuis le 2026-08-19 (pour validation)

Source : `git log --since=2026-08-19 --first-parent origin/main` du dépôt applicatif (336 fusions). Seul ce qui est visible ou utile à un utilisateur est retenu. Production = `main-4670dfb` (2026-10-18). **Exclu : #341 (mesure des coûts réels), fusionnée le 19 octobre, non déployée.**

## Billets proposés (un par fait marquant, 8 billets × 10 langues)

| # | Date proposée | Thème | Contenu (PR) |
|---|---|---|---|
| 1 | 2026-10-18 *(à confirmer)* | **Cartographie des processus** | Page d'espace, canvas, 4 lectures, ruptures, coûts estimés, « Remplacer », partage public, exports PNG/PDF/données, présence de TblFlow, « Connecter mes outils » (#305, #310 à #339) |
| 2 | 2026-09-26 | IA : champs et médias | Champs IA (désactivation, décompte), génération d'images/audio/vidéo par champ, génération dans la langue de la demande (#193, #221 à #231) |
| 3 | 2026-09-28 | IA : configuration | Détection automatique des modèles, page Paramètres IA en trois blocs, configuration initiale guidée, modèle recommandé par fournisseur (#30, #237) |
| 4 | 2026-10-12 | Connecteurs : marketplace | Catalogue, installation, code personnalisé isolé, synchronisation incrémentale et bidirectionnelle, fédération d'instances auto-hébergées, OAuth non standard (#274 à #295, #240, #242) |
| 5 | 2026-09-20 | Navigateur piloté (Computer Use) | Apprentissage par démonstration, rejeu, second facteur, bouton de ligne qui pilote un site, plafond de rejeux (#91, #178 à #184, #210, #215) |
| 6 | 2026-09-24 | Partage et sécurité | Liens par invitation (plus de mot de passe de partage), connexions externes sans secrets renvoyés, élévation requise pour passkeys et codes de secours, correctifs XSS/SSRF (#194, #195, #202, #204, #245, #246) |
| 7 | 2026-09-23 | Confidentialité et mentions légales | Textes juridiques en vigueur, accord de traitement, export du compte, narration vocale déclarée (#144, #201, #66) |
| 8 | 2026-10-10 | Produit : divers | Champ Canvas, doc-library façon Notion, nouveau logo (cubes isométriques), chat dans le volet de la base, onboarding repensé, annuel et code promo à l'abonnement, plafond de 200 comptes avec liste d'attente (#266, #51, #302, #113, #34 à #38, #15, #26, #265) |

## À écarter (interne, invisible)
CI/Forgejo, shards de tests, évals nocturnes, compose/déploiement, Dependabot, runbook, KPI super-admin, correctifs de formules ou de duplication trop fins (à regrouper en « corrections » si vous le souhaitez).

## Points à trancher
1. Date du billet cartographie : 2026-10-18 (déploiement) ou la date de mise à disposition réelle ?
2. Un billet par thème (8) ou regroupé par mois (septembre / octobre) ?
3. Le plafond de 200 comptes et la liste d'attente (#265) : à annoncer publiquement ?
4. Billets 2 et 5 : confirmer que les fonctions sont bien activées en production, pas seulement fusionnées.
