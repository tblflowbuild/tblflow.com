# Plan : retour de l'auditeur sur tblflow.com (analyse du 12/11/2026)

Source : `~/.tblflow-audit-site-2026-11-12.txt` (7 pages). Site lu à l'état du commit `6d4ee9e` (main après PR 31). Produit vérifié dans `tblflowbuild/TblFlow`, ref `origin/main` (b97bd0b3b, 12/11/2026), lecture seule.

Règles tenues : aucun chiffre, témoignage, client ou résultat inventé. Les `[X]` et `[Y]` de l'auditeur restent vides. Rien n'est publié, poussé ni déployé.

Effort : S = moins de 2 h, M = une demi-journée, L = 1 à 2 jours. Colonne « Dépend de » : D = décision de Tommy, P = preuve qui n'existe pas encore.

---

## 1. Vérification produit (étape 2, avant tout texte)

| # | Affirmation | Verdict | Source dans le produit | Conséquence pour les textes |
|---|---|---|---|---|
| 1 | L'IA extrait les infos d'un bon de commande reçu par e-mail | **À nuancer** | `workflow/workflow-gmail-poll.service.ts` : déclencheur `email_received` sur Gmail connecté, non lus de la boîte de réception, sondage toutes les 15 min par défaut, 10 e-mails par passage ; expose `from`, `subject`, `body` (texte). `workflow-ai.service.ts` : étape `ai_generate` (prompt avec variables) puis `update_record`. Aucune lecture de pièce jointe PDF dans ce déclencheur (`ai-field-step.ts` sait lire un média dans un champ Pièce jointe, mais pas branché sur l'e-mail). | Ne pas écrire « l'IA lit le bon de commande reçu » tel quel. Possible : « l'IA lit le texte d'un e-mail de commande ». Pour un bon en PDF joint : à faire tourner de bout en bout avant d'écrire quoi que ce soit (P). |
| 2 | Données hébergées en Allemagne | **À nuancer** | `.planning/REGISTRE-TRAITEMENTS.md:191`, `docs/PRESENTATION.md:526`, `legal/fr/privacy.md` v1.4 : application et base chez netcup GmbH (Karlsruhe). Fichiers et sauvegardes : Cloudflare R2, juridiction UE. Hors Allemagne : e-mails (Resend, États-Unis), modèles d'IA (Anthropic « sans pays unique garanti », OpenAI, Vercel AI Gateway, États-Unis). `docs/compliance/mcp-cli/03-sous-traitants…` : copie du contrat netcup « à vérifier ». | Formulation exacte possible : « Application et base de données hébergées en Allemagne ». Pas « toutes vos données en Allemagne » : les contenus envoyés à un modèle d'IA le quittent le temps du traitement. Non publié dans cette branche (D : valider la formule ; P : contrat netcup). |
| 3 | Essai de 14 jours sans carte | **Vrai** | `packages/openapi/src/billing/plan-limits.ts` : `PRO_TRIAL_PLAN='pro-trial'`, `PRO_TRIAL_DAYS=14`, commentaire « un essai sans carte » ; `billing/trial.service.ts` : essai sans abonnement Stripe, retour au Gratuit à l'échéance, rappel à J-3. C'est l'offre **Essentiel** (limites réduites sur IA, e-mails, vidéo). Le lien du site `SIGNUP_TRIAL_URL` envoie bien `?plan=pro-trial`. | Libellé exact : « Essayer Essentiel 14 jours, sans carte ». Le bouton actuel « Commencer gratuitement » est trompeur : il mène à un essai, pas au palier Gratuit. Corrigé dans la branche. |
| 4 | Grille 39 / 119 / 399 €, « à partir de 39 €/mois » | **Vrai** (avec une réserve) | `plan-limits.ts` : Essentiel 39 (5 personnes, 5 bases), Équipe 119 (15 / 30), Entreprise 399 (50 / illimité), Gratuit 0 (2 personnes, 1 base). Annuel = mensuel × 10. | « À partir de 39 €/mois » est exact pour l'offre payante, mais le Gratuit existe : toute accroche doit le dire. « Le meilleur directeur des opérations à partir de 39 €/mois » promet un résultat que le prix ne couvre pas : à ne pas publier (D). |
| 5 | Plafond de 50 personnes connectées | **Vrai, à cadrer** | `plan-limits.ts` : Entreprise `maxSeats: 50` ; `billing.service.spec.ts:78` « plafonne à 50 personnes un Entreprise facturé en ligne ». Au-delà : devis, auto-hébergement, VPC dédié. | C'est le plafond de l'offre en ligne, pas de la taille de l'entreprise (point de l'auditeur juste). À formuler « jusqu'à 50 personnes équipées ». |
| 6 | Export libre des données | **Vrai** | `docs/PRESENTATION.md:202` : CSV par vue, zip d'une base, export RGPD art. 20. Vrai PostgreSQL, auto-hébergeable (FAQ du site). | Formulation bénéfice : « Vos données restent à vous : exportables en CSV ou en archive. » |
| 7 | Pas d'entraînement des IA sur les données | **À nuancer** | `legal/fr/privacy.md` : « Nous n'utilisons pas vos contenus pour entraîner des modèles », offres API professionnelles dont les conditions excluent l'entraînement par défaut ; certains fournisseurs conservent les données quelques semaines (détection d'abus). `compliance/…/03` : preuve contractuelle par fournisseur « à vérifier ». | Dire ce que TblFlow fait (n'entraîne pas) et renvoyer à la politique. Ne pas affirmer « aucune IA n'est jamais entraînée » (P : preuves archivées par fournisseur). Non ajouté à la page d'accueil. |
| 8a | Calculateur « Calculer mes heures perdues » | **Faux, n'existe pas** | Aucune trace dans le produit ni sur le site (seule la ligne statique « 40 devis × 2 ressaisies × 10 min ≈ 13 h »). | Aucun bouton ne doit le nommer tant qu'il n'est pas construit (D + L). |
| 8b | Diagnostic cartographie | **Vrai** | `plan-limits.ts` : `processMapMode: 'diagnostic'` dans le Gratuit = 1 processus, sans « Remplacer », sans rapport mensuel ni estimé vs réel. | Le « diagnostic » du site est un module du produit, en libre-service. « Réserver un diagnostic » (échange humain) n'existe pas : c'est une offre commerciale à décider. |
| 9 | Validation humaine des actions de l'IA | **Vrai** | `agent/agent-conversation.service.ts` : état `waiting_for_approval`, boîte « Approbations » par espace, expiration à 7 jours sans réponse (l'action n'est pas exécutée) ; FAQ du site : écritures en attente d'approbation par défaut. | Signature « L'IA prépare, vous validez » : publiable. Précision honnête : c'est le réglage par défaut. |

Conclusion : 4 verdicts publiables tels quels (3, 4, 6, 9), plus 5 et 8b avec la bonne formulation ; 3 à nuancer (1, 2, 7) donc non publiés en l'état ; 1 inexistant (8a).

---

## 2. Les 5 freins

| Frein | Déjà vrai sur le site ? | À changer | Effort | Dépend de |
|---|---|---|---|---|
| 1. Promesse absente du premier écran | L'auditeur a raison : `Hero.astro` affiche `<h1>TblFlow</h1>` + la signature. La promesse (« Repérez les ressaisies qui vous coûtent, puis supprimez-les », validée dans `docs/positionnement.md`) existe en 10 langues (`processMap.ts`, clé `home.hero.title`) mais n'est plus affichée, seulement dans `<title>`. | H1 = la promesse ; TblFlow passe en marque au-dessus ; phrase « ce que vous gardez / ce qui passe dans TblFlow / qui génère » ; « L'IA prépare, vous validez ». **Fait dans la branche.** | S | D pour le choix final du titre (voir §4). |
| 2. Vocabulaire technique | Partiel : « PostgreSQL », « SQL », « DocIndex », « MCP », « API » restent dans le parcours, la FAQ, les pages prix et MCP. | Parcours et bloc « Ce que vous gardez » traduits en bénéfices (**fait**). FAQ, bulles du tableau de prix, page MCP : non touchées (plus de 400 lignes en 10 langues). | M | Relecture des 8 langues non maîtrisées (déjà exigée par `positionnement.md`). |
| 3. Aucune preuve client | Vrai : `Testimonials.astro` n'affiche rien tant qu'aucun témoignage n'est `published` ; les entrées de `testimonials.ts` sont des exemples non publiés. C'est la bonne protection. | Rien à écrire. Le site ne contient aucun résultat mesuré. Voir priorité 3. | n/a | P (accord écrit et chiffres de Kevin / Beevisionary). |
| 4. Trop de messages | Vrai : parcours en 7 étapes + FAQ + prix + CTA, avec cartographie, tables, documents, agents, automatisations, API, MCP. | Pas de refonte ici. Réduire d'abord le haut de page (un titre, une phrase, une signature). Un seul processus de démonstration (étape 01 existante). | L si refonte du parcours | D : cible et processus unique. |
| 5. Effort de mise en place non expliqué | Partiel : l'étape « Construire » dit ce que TblFlow génère, pas ce que le client doit faire ni en combien de temps. | Phrase du hero qui dit que l'IA génère et que le client valide (**fait**). Délai « avant le premier résultat » : ne pas l'écrire sans mesure. | S pour la phrase ; M pour une section « Ce que ça demande » | D : qui paramètre (client seul, accompagné, équipe TblFlow) ; P : délai réel observé. |

---

## 3. Les trois priorités

| Priorité | Déjà vrai | À changer | Effort | Dépend de |
|---|---|---|---|---|
| 1. Promesse claire dès le premier écran | Le message existe et est validé ; l'hébergement en Allemagne n'est pas sur la page d'accueil. | Voir frein 1. « L'IA accélère, vous décidez » (formule de l'auditeur) écartée au profit de « L'IA prépare, vous validez », qui est aussi dans son tableau et que le produit prouve (verdict 9). Hébergement « bien visible » : prêt à rédiger après D (formule) et P (contrat netcup). | S (fait) + S (hébergement) | D |
| 2. Un processus de bout en bout, devis → facture | Déjà là : `ProductScene.astro` et `home.ts` (`example.*`) montrent devis, commande, facture, ressaisies, le calcul 40 × 2 × 10 min ≈ 13 h, et « Exemple illustratif, chiffres fictifs ». | Étiqueter « Scénario illustratif » et découper en trois niveaux : règle, IA, humain (**fait**, sans l'extraction de bon de commande, voir verdict 1). Capture commentée réelle de l'app : à produire (`docs/captures-a-faire.md`). Fourchette `[X]` à `[Y]` heures : **vide**. | S (fait) + M (capture) | P (calcul de la fourchette : 13 h 20 moins contrôle et cas particuliers, paramétrage présenté à part) ; D (processus unique) |
| 3. Preuve par l'usage réel (Kevin) | Mécanisme prêt, aucun contenu. | Rien dans le code. Recueillir : accord écrit, problème, ce qu'il utilise, ce qui a changé, chiffres avec période et méthode. Vidéo courte seulement s'il est partant. | S pour publier une fois reçu | P, accord de Kevin. Aucun nom ni logo avant. |

Le récit de Pierre (cabinet de conformité, 31 conseillers, 25 outils) : **non publié**. Il décrit des résultats (« ses mercredis sont pour sa fille ») et une mise en place (formulaires préremplis, plannings des techniciens, tableaux de bord financiers sans saisie) dont je n'ai pas confirmé l'existence dans le produit. S'il est publié un jour : bandeau « Scénario illustratif, construit à partir d'usages types », `[X]` jours laissé vide ou supprimé.

---

## 4. Décisions préalables (section 4 de l'audit) : à trancher par Tommy

1. **Cible prioritaire.** `positionnement.md` (7/11) : PME qui tourne sur Excel et une dizaine d'outils. L'auditeur demande de la justifier par besoin, simplicité de déploiement et capacité d'accompagnement. À confirmer ou corriger en une phrase.
2. **Processus de démonstration unique.** L'audit propose devis → facture ; le site le montre déjà. À confirmer.
3. **Rôle de TblFlow chez le client.** Elle conditionne les phrases « ce que je garde / ce qui passe dans TblFlow / qui paramètre ». Le produit permet : outils conservés et connectés, tables générées par l'IA à partir de la carte, validation par le client. Pas arrêté : accompagnement, paramétrage par l'équipe TblFlow, délai.
4. **Cadrage du diagnostic gratuit.** Le diagnostic de cartographie en libre-service existe dans le Gratuit (un processus). Un diagnostic avec échange humain n'existe pas : durée maximale, un processus, un livrable, critère de qualification, coût rapporté au taux de conversion.
5. **PME pilotes.** Combien, quel périmètre (un processus), quelle durée, mesure avant / après, contrepartie, publication avec accord.

---

## 5. Textes proposés par l'auditeur

| Proposition | Verdict | Traitement |
|---|---|---|
| « Vos équipes ne recopient plus rien. » | Absolu, invérifiable. | Non retenu. |
| « Saisissez une fois. TblFlow fait le reste. » | « Le reste » promet trop. | Non retenu. |
| « Du devis à la facture, sans ressaisie. » | Défendable pour le scénario illustratif, pas comme H1 sans preuve. | Candidat pour le bloc exemple si Tommy valide D2. |
| Titre retenu dans la branche | « Repérez les ressaisies qui vous coûtent, puis supprimez-les. » | Déjà validé par Tommy (7/11), déjà traduit, vrai. |
| « L'IA accélère, vous décidez » | Équivalent de « L'IA prépare, vous validez ». | Une seule signature : « L'IA prépare, vous validez ». |
| « Votre équipe garde sa taille. Sa capacité, elle, explose. » | « Explose » : non mesuré. | Non publié (P). |
| « … le meilleur directeur des opérations, à partir de 39 €/mois ? » | Prix exact, promesse non démontrée. | Non publié (D). |
| « Confiez-les-nous » / « Nous libérons le temps » | Suggère un service géré, que D3 n'a pas arrêté. | Non publiés (D3). |
| Bouton « Calculer mes heures perdues » | Calculateur inexistant. | Non publié. À construire (L) si D l'approuve. |
| Bouton « Réserver un diagnostic » | Offre humaine inexistante. | Non publié (D4). |
| Bouton « Essayer gratuitement », essai 14 jours sans carte | Vrai (verdict 3). | **Fait** : « Essayer Essentiel 14 jours » + « Sans carte bancaire ». |
| « Parler à quelqu'un » (mailto) | Annonce un échange, ouvre un e-mail. | **Fait** : « Écrire à l'équipe ». |
| Cas type avec `[X]` à `[Y]` | `[X]` `[Y]` vides. | Aucune fourchette. |

---

## 6. Mesures (section 7) et vigilance (section 8)

| Élément | État | Action | Effort | Dépend de |
|---|---|---|---|---|
| Test de compréhension, 10 s, 5 dirigeants, avant puis après, personnes différentes | Rien de prévu | La branche n'est pas déployée : le « avant » peut encore être passé sur le site en production. | M | D : qui recrute les 5 dirigeants |
| Indicateurs : clic CTA, démarrage d'essai, demandes qualifiées, défilement, essais réussis, actions IA validées sans correction | Google Analytics 4 est câblé derrière le bandeau de consentement (`CookieConsent.astro`, `BaseHead.astro`) : rien n'est chargé sans accord du visiteur, donc seuls les visiteurs consentants sont comptés. Aucun événement personnalisé (clic sur CTA, démarrage d'essai) n'est défini. | Définir les événements (clic sur « Essayer Essentiel 14 jours », arrivée sur l'inscription) et lire les chiffres en sachant que les refus de cookies sont invisibles. Les deux derniers indicateurs (essais réussis, actions IA validées sans correction) se mesurent côté produit, pas côté site. | M | D : quels indicateurs, et si un outil sans cookie est souhaité |
| PME pilotes cadrées | Rien | Voir décision 5. | n/a | D |
| Prix | Vrai : `pricing.ts` suit `plan-limits.ts` | Toute accroche chiffrée doit passer par `PLAN_LIMITS`. | n/a | n/a |
| Données (hébergement, entraînement, RGPD, sous-traitance) | Politique v1.4 correcte, preuves « à vérifier » dans le registre | Ne rien promettre au-delà de la politique ; régler les « à vérifier » avant mise en avant. | M | P |
| Diagnostic gratuit | Voir décision 4 | | | D |
| Grands comptes | Offre Entreprise et plafond de 50 visibles | Ne pas en faire une cible. | n/a | n/a |

---

## 7. Contenu de la branche `claude/audit-site-promesse-33679c`

Uniquement ce qui ne demande pas d'accord (aucun chiffre ajouté) :

1. Premier écran : H1 = promesse existante ; « TblFlow » en marque au-dessus ; phrase « vous gardez / passe dans TblFlow / l'IA génère, vous validez » ; « L'IA prépare, vous validez. ». La signature « Les tâches répétitives aux agents… » reste à l'étape 7 du parcours.
2. Bloc « Ce que vous gardez » : PostgreSQL / SQL / DocIndex traduits en bénéfices.
3. Étape « Comprendre » : « DocIndex indexe » devient « TblFlow lit et indexe ».
4. Boutons : « Commencer gratuitement » devient « Essayer Essentiel 14 jours » (sous-ligne « sans carte bancaire ») ; « Parler à quelqu'un » devient « Écrire à l'équipe ».
5. Cas devis → facture : « Scénario illustratif » (étiquette et mention), découpé en règle / IA / humain.
6. 10 langues. DE, EN, ES, FR, IT rédigées avec soin ; JA, RU, TR, UK, ZH rédigées mais à faire relire (exigence de `positionnement.md`).

Hors branche : hébergement en Allemagne, non-entraînement, extraction de bon de commande, calculateur, diagnostic humain, témoignages, fourchette `[X]`-`[Y]`, récit de Pierre, bouton dans le hero.
