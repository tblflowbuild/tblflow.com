import type { Locale } from '@/config';

/**
 * Homepage copy aimed at the primary audience: owners and ops leads of SMBs
 * (10 to 250 people) who lose time re-keying the same data across tools.
 * Every key carries all ten locales (a missing one is a compile error through
 * `satisfies`).
 *
 * The worked example below is illustrative and says so on the page: its numbers
 * are not a customer's. Measured results belong in `testimonials.ts`, with a
 * source, and only once they exist.
 */
export const HOME_STRINGS = {
  "trial.link": {
    de: "Pro 14 Tage testen",
    en: "Try Pro for 14 days",
    es: "Probar Pro 14 días",
    fr: "Essayer Pro 14 jours",
    it: "Prova Pro per 14 giorni",
    ja: "Pro を 14 日間試す",
    ru: "Попробовать Pro 14 дней",
    tr: "Pro'yu 14 gün deneyin",
    uk: "Спробувати Pro 14 днів",
    zh: "免费试用 Pro 14 天",
  },
  "trial.note": {
    de: "Keine Kreditkarte. Die Prozesslandkarte ist in der 14-tägigen Pro-Testphase enthalten; ohne Abo wechselt Ihr Konto danach in den kostenlosen Tarif.",
    en: "No credit card. The process map is included in the 14-day Pro trial; without a subscription, your account then moves to the Free plan.",
    es: "Sin tarjeta de crédito. El mapa de procesos está incluido en la prueba Pro de 14 días; sin suscripción, tu cuenta pasa después al plan gratuito.",
    fr: "Sans carte bancaire. La cartographie est incluse dans l’essai Pro de 14 jours ; sans abonnement, le compte repasse ensuite au plan gratuit.",
    it: "Senza carta di credito. La mappa dei processi è inclusa nella prova Pro di 14 giorni; senza abbonamento, l’account passa poi al piano gratuito.",
    ja: "クレジットカード不要。プロセスマップは 14 日間の Pro トライアルに含まれます。契約しない場合、その後は無料プランに切り替わります。",
    ru: "Без банковской карты. Карта процессов входит в 14-дневный пробный период Pro; без подписки аккаунт затем переходит на бесплатный тариф.",
    tr: "Kredi kartı gerekmez. Süreç haritası 14 günlük Pro denemesine dahildir; abonelik olmazsa hesabınız ardından Ücretsiz plana geçer.",
    uk: "Без банківської картки. Карта процесів входить у 14-денний пробний період Pro; без підписки акаунт потім переходить на безкоштовний тариф.",
    zh: "无需信用卡。流程图谱包含在 14 天 Pro 试用中；未订阅时，账户随后自动转为免费版。",
  },

  /* Proof points under the hero CTA. Chosen for an owner or ops lead rather
     than a developer, and each one is true of the plan the CTA leads to. */
  "proof.trial.value": {
    de: "14 Tage", en: "14 days", es: "14 días", fr: "14 jours", it: "14 giorni",
    ja: "14 日間", ru: "14 дней", tr: "14 gün", uk: "14 днів", zh: "14 天",
  },
  "proof.trial": {
    de: "Pro-Test, Prozesslandkarte inklusive",
    en: "Pro trial, process map included",
    es: "de prueba Pro, mapa incluido",
    fr: "d’essai Pro, cartographie incluse",
    it: "di prova Pro, mappa inclusa",
    ja: "Pro トライアル（プロセスマップ込み）",
    ru: "пробного Pro с картой процессов",
    tr: "Pro denemesi, süreç haritası dahil",
    uk: "пробного Pro з картою процесів",
    zh: "Pro 试用，含流程图谱",
  },
  "proof.free.value": {
    de: "Kostenlos", en: "Free", es: "Gratis", fr: "Gratuit", it: "Gratis",
    ja: "無料", ru: "Бесплатно", tr: "Ücretsiz", uk: "Безкоштовно", zh: "免费",
  },
  "proof.free": {
    de: "dauerhaft, ohne Kreditkarte",
    en: "forever plan, no credit card",
    es: "para siempre, sin tarjeta",
    fr: "pour toujours, sans carte bancaire",
    it: "per sempre, senza carta",
    ja: "永久無料プラン・カード不要",
    ru: "навсегда, без карты",
    tr: "süresiz, kredi kartı yok",
    uk: "назавжди, без картки",
    zh: "永久免费版，无需信用卡",
  },
  "proof.data": {
    de: "Ihre Daten, kein proprietäres Format",
    en: "your data, no proprietary format",
    es: "tus datos, sin formato propietario",
    fr: "vos données, sans format propriétaire",
    it: "i tuoi dati, nessun formato proprietario",
    ja: "データは独自形式なし",
    ru: "ваши данные без проприетарного формата",
    tr: "verileriniz, kapalı format yok",
    uk: "ваші дані без пропрієтарного формату",
    zh: "您的数据，无私有格式",
  },

  /* Worked example: quote, order, invoice. */
  "example.eyebrow": {
    de: "Beispiel", en: "Example", es: "Ejemplo", fr: "Exemple", it: "Esempio",
    ja: "例", ru: "Пример", tr: "Örnek", uk: "Приклад", zh: "示例",
  },
  "example.title": {
    de: "Angebot, Auftrag, Rechnung: dreimal dieselben Angaben",
    en: "Quote, order, invoice: the same data typed three times",
    es: "Presupuesto, pedido, factura: los mismos datos tecleados tres veces",
    fr: "Devis, commande, facture : trois saisies de la même information",
    it: "Preventivo, ordine, fattura: gli stessi dati digitati tre volte",
    ja: "見積、受注、請求：同じ情報を 3 回入力",
    ru: "Счёт-предложение, заказ, счёт: одни и те же данные трижды",
    tr: "Teklif, sipariş, fatura: aynı bilgi üç kez giriliyor",
    uk: "Комерційна пропозиція, замовлення, рахунок: ті самі дані тричі",
    zh: "报价、订单、发票：同一信息录入三次",
  },
  "example.body": {
    de: "In vielen KMU werden derselbe Kunde und dieselben Beträge erst im CRM, dann in Excel und dann in der Rechnungssoftware erfasst. Das zeigt die Prozesslandkarte, und das schlägt TblFlow stattdessen vor.",
    en: "In many SMBs, the same customer and the same amounts are typed into the CRM, then into a spreadsheet, then into the invoicing software. Here is what the process map reveals, and what TblFlow proposes instead.",
    es: "En muchas pymes, el mismo cliente y los mismos importes se teclean en el CRM, luego en Excel y luego en el software de facturación. Esto es lo que revela el mapa de procesos, y lo que TblFlow propone en su lugar.",
    fr: "Dans beaucoup de PME, le même client et les mêmes montants sont tapés dans le CRM, puis dans Excel, puis dans le logiciel de facturation. Voici ce que la cartographie fait apparaître, et ce que TblFlow propose à la place.",
    it: "In molte PMI, lo stesso cliente e gli stessi importi vengono digitati nel CRM, poi in Excel, poi nel software di fatturazione. Ecco cosa mostra la mappa dei processi, e cosa propone TblFlow al suo posto.",
    ja: "多くの中小企業では、同じ顧客名と金額を CRM、Excel、請求ソフトに順番に入力しています。プロセスマップで見えてくることと、TblFlow が代わりに提案することを紹介します。",
    ru: "Во многих компаниях один и тот же клиент и те же суммы вводятся в CRM, затем в Excel, затем в программу для выставления счетов. Вот что показывает карта процессов и что TblFlow предлагает взамен.",
    tr: "Birçok KOBİ'de aynı müşteri ve aynı tutarlar önce CRM'e, sonra Excel'e, sonra fatura yazılımına giriliyor. Süreç haritasının ortaya çıkardığı tablo ve TblFlow'un yerine önerdiği çözüm şöyle.",
    uk: "У багатьох компаніях того самого клієнта й ті самі суми вводять у CRM, потім в Excel, потім у програму для рахунків. Ось що показує карта процесів і що TblFlow пропонує натомість.",
    zh: "在许多中小企业里，同一个客户和同样的金额要先录入 CRM，再录入 Excel，最后录入开票软件。以下是流程图谱揭示的问题，以及 TblFlow 给出的替代方案。",
  },
  "example.before": {
    de: "Heute", en: "Today", es: "Hoy", fr: "Aujourd’hui", it: "Oggi",
    ja: "現状", ru: "Сейчас", tr: "Bugün", uk: "Зараз", zh: "现在",
  },
  "example.after": {
    de: "Mit TblFlow", en: "With TblFlow", es: "Con TblFlow", fr: "Avec TblFlow", it: "Con TblFlow",
    ja: "TblFlow 導入後", ru: "С TblFlow", tr: "TblFlow ile", uk: "З TblFlow", zh: "使用 TblFlow 后",
  },
  "example.step1.title": {
    de: "Angebot", en: "Quote", es: "Presupuesto", fr: "Devis", it: "Preventivo",
    ja: "見積", ru: "Предложение", tr: "Teklif", uk: "Пропозиція", zh: "报价",
  },
  "example.step1.body": {
    de: "Vom Vertrieb im CRM erfasst.",
    en: "Entered in the CRM by sales.",
    es: "Introducido en el CRM por ventas.",
    fr: "Saisi dans le CRM par le commercial.",
    it: "Inserito nel CRM dal commerciale.",
    ja: "営業が CRM に入力。",
    ru: "Продажи вводят в CRM.",
    tr: "Satış ekibi CRM'e girer.",
    uk: "Відділ продажів вводить у CRM.",
    zh: "销售录入 CRM。",
  },
  "example.step2.title": {
    de: "Auftrag", en: "Order", es: "Pedido", fr: "Commande", it: "Ordine",
    ja: "受注", ru: "Заказ", tr: "Sipariş", uk: "Замовлення", zh: "订单",
  },
  "example.step2.body": {
    de: "Vom Vertriebsinnendienst erneut in Excel erfasst.",
    en: "Re-typed into a spreadsheet by sales admin.",
    es: "Tecleado de nuevo en Excel por administración de ventas.",
    fr: "Ressaisie dans Excel par l’administration des ventes.",
    it: "Ridigitato in Excel dall’amministrazione vendite.",
    ja: "営業事務が Excel に再入力。",
    ru: "Отдел продаж заново вводит в Excel.",
    tr: "Satış yönetimi Excel'e yeniden girer.",
    uk: "Відділ продажів повторно вводить в Excel.",
    zh: "销售内勤重新录入 Excel。",
  },
  "example.step3.title": {
    de: "Rechnung", en: "Invoice", es: "Factura", fr: "Facture", it: "Fattura",
    ja: "請求", ru: "Счёт", tr: "Fatura", uk: "Рахунок", zh: "发票",
  },
  "example.step3.body": {
    de: "Von der Buchhaltung erneut in der Rechnungssoftware erfasst.",
    en: "Re-typed into the invoicing software by accounting.",
    es: "Tecleado de nuevo en el software de facturación por contabilidad.",
    fr: "Ressaisie dans le logiciel de facturation par la comptabilité.",
    it: "Ridigitato nel software di fatturazione dalla contabilità.",
    ja: "経理が請求ソフトに再入力。",
    ru: "Бухгалтерия заново вводит в программу для счетов.",
    tr: "Muhasebe fatura yazılımına yeniden girer.",
    uk: "Бухгалтерія повторно вводить у програму для рахунків.",
    zh: "财务重新录入开票软件。",
  },
  "example.break": {
    de: "Doppelerfassung", en: "Re-entry", es: "Doble introducción", fr: "Ressaisie", it: "Doppia digitazione",
    ja: "二重入力", ru: "Повторный ввод", tr: "Mükerrer giriş", uk: "Повторне введення", zh: "重复录入",
  },
  "example.afterBody": {
    de: "Eine einzige Tabelle für Kunden und Aufträge. Ein angenommenes Angebot erzeugt den Auftrag, eine Automatisierung bereitet die Rechnung vor, ein KI-Agent fasst bei unbeantworteten Angeboten nach. Jeder Schritt wird weiterhin von einer Person freigegeben.",
    en: "One table for customers and orders. An accepted quote creates the order, an automation prepares the invoice, an AI agent follows up on unanswered quotes. Every step is still approved by a person.",
    es: "Una sola tabla para clientes y pedidos. El presupuesto aceptado crea el pedido, una automatización prepara la factura y un agente de IA hace seguimiento de los presupuestos sin respuesta. Cada paso sigue validado por una persona.",
    fr: "Une seule table pour les clients et les commandes. Le devis accepté crée la commande, une automatisation prépare la facture, un agent IA relance les devis sans réponse. Chaque étape reste validée par une personne.",
    it: "Un’unica tabella per clienti e ordini. Il preventivo accettato crea l’ordine, un’automazione prepara la fattura, un agente IA sollecita i preventivi senza risposta. Ogni passaggio resta approvato da una persona.",
    ja: "顧客と受注をひとつのテーブルに。承認された見積から受注が作成され、自動化が請求書を準備し、AI エージェントが未回答の見積をフォローします。各ステップは引き続き担当者が承認します。",
    ru: "Одна таблица для клиентов и заказов. Принятое предложение создаёт заказ, автоматизация готовит счёт, ИИ-агент напоминает о предложениях без ответа. Каждый шаг по-прежнему подтверждает человек.",
    tr: "Müşteriler ve siparişler için tek bir tablo. Kabul edilen teklif siparişi oluşturur, bir otomasyon faturayı hazırlar, bir yapay zekâ ajanı yanıtsız teklifleri takip eder. Her adım yine bir kişi tarafından onaylanır.",
    uk: "Одна таблиця для клієнтів і замовлень. Прийнята пропозиція створює замовлення, автоматизація готує рахунок, ШІ-агент нагадує про пропозиції без відповіді. Кожен крок і далі підтверджує людина.",
    zh: "客户和订单只用一张表。报价被接受后自动生成订单，自动化流程准备发票，AI 智能体跟进未回复的报价。每一步仍由人工确认。",
  },
  "example.calc": {
    de: "Rechenbeispiel: 40 Angebote pro Monat × 2 Doppelerfassungen × 10 Minuten ≈ 13 Stunden pro Monat.",
    en: "Worked figure: 40 quotes a month × 2 re-entries × 10 minutes ≈ 13 hours a month.",
    es: "Cálculo de ejemplo: 40 presupuestos al mes × 2 reintroducciones × 10 minutos ≈ 13 horas al mes.",
    fr: "Calcul d’exemple : 40 devis par mois × 2 ressaisies × 10 minutes ≈ 13 heures par mois.",
    it: "Calcolo di esempio: 40 preventivi al mese × 2 doppie digitazioni × 10 minuti ≈ 13 ore al mese.",
    ja: "試算例：月 40 件の見積 × 再入力 2 回 × 10 分 ≈ 月 13 時間。",
    ru: "Пример расчёта: 40 предложений в месяц × 2 повторных ввода × 10 минут ≈ 13 часов в месяц.",
    tr: "Örnek hesap: ayda 40 teklif × 2 mükerrer giriş × 10 dakika ≈ ayda 13 saat.",
    uk: "Приклад розрахунку: 40 пропозицій на місяць × 2 повторні введення × 10 хвилин ≈ 13 годин на місяць.",
    zh: "示例计算：每月 40 份报价 × 2 次重复录入 × 10 分钟 ≈ 每月 13 小时。",
  },
  "example.disclaimer": {
    de: "Veranschaulichendes Beispiel mit fiktiven Zahlen. In TblFlow geben Sie Ihre eigenen Mengen und Sätze ein; die angezeigten Kosten bleiben Schätzungen.",
    en: "Illustrative example with made-up numbers. In TblFlow you enter your own volumes and rates; the costs shown remain estimates.",
    es: "Ejemplo ilustrativo con cifras ficticias. En TblFlow introduces tus propios volúmenes y tarifas; los costes mostrados siguen siendo estimaciones.",
    fr: "Exemple illustratif, chiffres fictifs. Dans TblFlow, vous saisissez vos propres volumes et taux ; les coûts affichés restent des estimations.",
    it: "Esempio illustrativo con cifre fittizie. In TblFlow inserisci i tuoi volumi e le tue tariffe; i costi mostrati restano stime.",
    ja: "数値は架空の説明用の例です。TblFlow では実際の件数や単価を入力し、表示されるコストはあくまで見積もりです。",
    ru: "Иллюстративный пример с условными цифрами. В TblFlow вы вводите свои объёмы и ставки; показанные затраты остаются оценками.",
    tr: "Kurgusal rakamlarla açıklayıcı bir örnek. TblFlow'da kendi hacimlerinizi ve ücretlerinizi girersiniz; gösterilen maliyetler tahmin olarak kalır.",
    uk: "Ілюстративний приклад з умовними цифрами. У TblFlow ви вводите власні обсяги й ставки; показані витрати залишаються оцінками.",
    zh: "示例数字为虚构，仅作说明。在 TblFlow 中您输入自己的业务量和费率，显示的成本仍为估算值。",
  },
  "testimonials.title": {
    de: "Was Kunden sagen", en: "What customers say", es: "Lo que dicen los clientes",
    fr: "Ce qu’en disent les clients", it: "Cosa dicono i clienti", ja: "お客様の声",
    ru: "Что говорят клиенты", tr: "Müşteriler ne diyor", uk: "Що кажуть клієнти", zh: "客户怎么说",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type HomeKey = keyof typeof HOME_STRINGS;

export const hm = (locale: Locale, key: HomeKey): string => HOME_STRINGS[key][locale];
