import type { Locale } from '@/config';

/**
 * One fictional story for the product window in the hero, told in four views:
 * three quotes in a table, the agent that turns the accepted ones into orders
 * and invoices, and the customer portal that shows what is left to invoice.
 * It is the same quote → order → invoice chain as the process map view and
 * the example section, so the four tabs read as one piece of work.
 *
 * Amounts are numbers and formatted per locale at render time
 * (`formatPrice`); the portal total is computed from the accepted rows, so
 * the figures always add up.
 */
export interface HeroDemoQuote {
  client: string;
  accepted: boolean;
  amount: number;
}

/** Fictional customers, the same in every language. */
export const HERO_DEMO_QUOTES: readonly HeroDemoQuote[] = [
  { client: 'Aurora Ops', accepted: true, amount: 4820 },
  { client: 'Nord Atelier', accepted: false, amount: 1260 },
  { client: 'Vela Studio', accepted: true, amount: 9340 },
];

export const HERO_DEMO: Record<Locale, {
  table: string; cols: string[]; accepted: string; sent: string;
  agentTitle: string; prompt: string; steps: string[]; agentBody: string;
  tableFoot: string; appKicker: string; appTitle: string;
  stats: [string, string]; domain: string;
}> = {
  de: {
    table: 'Tabelle · Angebote',
    cols: ['Kunde', 'Status', 'Betrag'],
    accepted: 'Angenommen',
    sent: 'Versendet',
    agentTitle: 'Agent „Fakturierung“',
    prompt: 'Lege Aufträge und Rechnungen für die angenommenen Angebote an',
    steps: ['Angenommene Angebote werden gelesen', 'Aufträge werden angelegt', 'Rechnungen zur Freigabe bereit'],
    agentBody: '2 Rechnungen ohne Doppelerfassung erstellt',
    tableFoot: 'In eine echte PostgreSQL-Tabelle geschrieben',
    appKicker: 'Veröffentlichte App',
    appTitle: 'Kundenportal',
    stats: ['Angenommene Angebote', 'Zu fakturieren'],
    domain: 'portal.ihredomain.de',
  },
  en: {
    table: 'Table · Quotes',
    cols: ['Account', 'Status', 'Amount'],
    accepted: 'Accepted',
    sent: 'Sent',
    agentTitle: '“Invoicing” agent',
    prompt: 'Create orders and invoices for the accepted quotes',
    steps: ['Reading accepted quotes', 'Creating orders', 'Invoices ready to approve'],
    agentBody: '2 invoices created, no re-entry',
    tableFoot: 'Written to a real PostgreSQL table',
    appKicker: 'Published app',
    appTitle: 'Customer Portal',
    stats: ['Accepted quotes', 'To invoice'],
    domain: 'portal.yourdomain.com',
  },
  es: {
    table: 'Tabla · Presupuestos',
    cols: ['Cliente', 'Estado', 'Importe'],
    accepted: 'Aceptado',
    sent: 'Enviado',
    agentTitle: 'Agente «Facturación»',
    prompt: 'Crea los pedidos y las facturas de los presupuestos aceptados',
    steps: ['Leyendo los presupuestos aceptados', 'Creando los pedidos', 'Facturas listas para validar'],
    agentBody: '2 facturas creadas sin doble introducción',
    tableFoot: 'Escrito en una tabla PostgreSQL real',
    appKicker: 'Aplicación publicada',
    appTitle: 'Portal de clientes',
    stats: ['Presupuestos aceptados', 'Por facturar'],
    domain: 'portal.tudominio.es',
  },
  fr: {
    table: 'Table · Devis',
    cols: ['Client', 'Statut', 'Montant'],
    accepted: 'Accepté',
    sent: 'Envoyé',
    agentTitle: 'Agent « Facturation »',
    prompt: 'Crée les commandes et les factures des devis acceptés',
    steps: ['Lecture des devis acceptés', 'Création des commandes', 'Factures prêtes à valider'],
    agentBody: '2 factures créées sans ressaisie',
    tableFoot: 'Écrit dans une vraie table PostgreSQL',
    appKicker: 'Application publiée',
    appTitle: 'Portail client',
    stats: ['Devis acceptés', 'À facturer'],
    domain: 'portail.votredomaine.fr',
  },
  it: {
    table: 'Tabella · Preventivi',
    cols: ['Cliente', 'Stato', 'Importo'],
    accepted: 'Accettato',
    sent: 'Inviato',
    agentTitle: 'Agente «Fatturazione»',
    prompt: 'Crea gli ordini e le fatture dei preventivi accettati',
    steps: ['Lettura dei preventivi accettati', 'Creazione degli ordini', 'Fatture pronte da approvare'],
    agentBody: '2 fatture create senza doppia digitazione',
    tableFoot: 'Scritto in una vera tabella PostgreSQL',
    appKicker: 'App pubblicata',
    appTitle: 'Portale Clienti',
    stats: ['Preventivi accettati', 'Da fatturare'],
    domain: 'portale.tuodominio.it',
  },
  ja: {
    table: 'テーブル · 見積',
    cols: ['取引先', 'ステータス', '金額'],
    accepted: '承認済み',
    sent: '送付済み',
    agentTitle: '「請求」エージェント',
    prompt: '承認済みの見積から受注と請求書を作成',
    steps: ['承認済みの見積を読み込み中', '受注を作成中', '請求書の承認待ち'],
    agentBody: '二重入力なしで請求書を 2 件作成',
    tableFoot: '実在する PostgreSQL テーブルに書き込み',
    appKicker: '公開済みアプリ',
    appTitle: '顧客ポータル',
    stats: ['承認済みの見積', '請求予定額'],
    domain: 'portal.yourdomain.jp',
  },
  ru: {
    table: 'Таблица · Предложения',
    cols: ['Клиент', 'Статус', 'Сумма'],
    accepted: 'Принято',
    sent: 'Отправлено',
    agentTitle: 'Агент «Выставление счетов»',
    prompt: 'Создай заказы и счета по принятым предложениям',
    steps: ['Чтение принятых предложений', 'Создание заказов', 'Счета готовы к проверке'],
    agentBody: '2 счёта созданы без повторного ввода',
    tableFoot: 'Записано в настоящую таблицу PostgreSQL',
    appKicker: 'Опубликованное приложение',
    appTitle: 'Портал клиентов',
    stats: ['Принятые предложения', 'К выставлению'],
    domain: 'portal.vashdomen.ru',
  },
  tr: {
    table: 'Tablo · Teklifler',
    cols: ['Müşteri', 'Durum', 'Tutar'],
    accepted: 'Kabul edildi',
    sent: 'Gönderildi',
    agentTitle: '«Faturalama» ajanı',
    prompt: 'Kabul edilen teklifler için siparişleri ve faturaları oluştur',
    steps: ['Kabul edilen teklifler okunuyor', 'Siparişler oluşturuluyor', 'Faturalar onaya hazır'],
    agentBody: 'Mükerrer giriş olmadan 2 fatura oluşturuldu',
    tableFoot: 'Gerçek bir PostgreSQL tablosuna yazıldı',
    appKicker: 'Yayımlanan uygulama',
    appTitle: 'Müşteri Portalı',
    stats: ['Kabul edilen teklifler', 'Faturalanacak'],
    domain: 'portal.alanadiniz.com.tr',
  },
  uk: {
    table: 'Таблиця · Пропозиції',
    cols: ['Клієнт', 'Статус', 'Сума'],
    accepted: 'Прийнято',
    sent: 'Надіслано',
    agentTitle: 'Агент «Виставлення рахунків»',
    prompt: 'Створи замовлення й рахунки за прийнятими пропозиціями',
    steps: ['Читання прийнятих пропозицій', 'Створення замовлень', 'Рахунки готові до перевірки'],
    agentBody: '2 рахунки створено без повторного введення',
    tableFoot: 'Записано у справжню таблицю PostgreSQL',
    appKicker: 'Опублікований застосунок',
    appTitle: 'Портал клієнтів',
    stats: ['Прийняті пропозиції', 'До виставлення'],
    domain: 'portal.vashdomen.ua',
  },
  zh: {
    table: '数据表 · 报价',
    cols: ['客户', '状态', '金额'],
    accepted: '已接受',
    sent: '已发送',
    agentTitle: '“开票”智能体',
    prompt: '为已接受的报价创建订单和发票',
    steps: ['正在读取已接受的报价', '正在创建订单', '发票待审核'],
    agentBody: '已创建 2 张发票，无需重复录入',
    tableFoot: '已写入真实的 PostgreSQL 表',
    appKicker: '已发布的应用',
    appTitle: '客户门户',
    stats: ['已接受的报价', '待开票金额'],
    domain: 'portal.yourdomain.cn',
  },
};

/**
 * Monthly figures of the example, shared by the hero (before / after) and the
 * journey: 13 hours a month of re-keying, then two of three steps covered.
 */
export const HERO_DEMO_FIGURES = {
  monthlyCost: 520,
  stepCost: [173, 173, 174],
  realized: 347,
  covered: 67,
} as const;

/** The tool each step of the example is typed into before TblFlow (fictional, common SMB tools). */
export const HERO_DEMO_TOOLS = ['Word', 'Excel', 'Google Sheets'] as const;
