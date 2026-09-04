import { HREFLANG, LOCALES, type Locale } from '@/config';

/**
 * SaaS Cloud tiers. Prices and quotas are transcribed from `PLAN_LIMITS` in
 * `packages/openapi/src/billing/plan-limits.ts` in the `teable-ee` repo — the
 * constant the backend actually enforces (`quota.service.ts` for
 * bases/seats/storage/agents/workflows/computer-use, `creditCheck()` in
 * `record.service.ts` for rows per table). If a figure here disagrees with
 * that file, that file is right and this one is stale — check there first.
 *
 * "Unlimited AI agents/automations" describes the *number of objects* you can
 * create, not how often they run — execution counts are metered separately
 * (`maxAgentRunsPerMonth`, `maxWorkflowRunsPerMonth`) and shown per tier
 * below. Stating "unlimited" without that distinction on the pricing page is
 * what a customer actually reads as a commercial promise, so it does not
 * appear here without the execution number attached.
 *
 * Every visible string carries all ten locales. `t9()` (fr/en authored, the
 * other eight falling back to English) is deliberately *not* used here: a
 * German visitor was reading "$29" on a card that charges euros, next to
 * English feature bullets. Because the fields are typed `Record<Locale, …>`,
 * a missing locale is a compile error rather than a silent English fallback.
 */

/** The same string in every locale — product names, symbols, acronyms. */
const all = (value: string): Record<Locale, string> =>
  Object.fromEntries(LOCALES.map((l) => [l, value])) as Record<Locale, string>;

/**
 * A figure formatted per locale: "5 000" (fr), "5,000" (en), "5.000" (de).
 * Written as a number and formatted here rather than transcribed ten times —
 * the grouping separator is exactly the sort of detail that rots when the
 * quota changes and only three of ten locales get updated.
 */
const num = (value: number): Record<Locale, string> =>
  Object.fromEntries(
    LOCALES.map((l) => [l, new Intl.NumberFormat(HREFLANG[l]).format(value)])
  ) as Record<Locale, string>;

/** A percentage per locale: "99,5 %" (fr), "99.5%" (en), "%99,5" (tr). */
const pct = (value: number, digits: number): Record<Locale, string> =>
  Object.fromEntries(
    LOCALES.map((l) => [
      l,
      new Intl.NumberFormat(HREFLANG[l], {
        style: 'percent',
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      }).format(value / 100),
    ])
  ) as Record<Locale, string>;

/** Gigabytes, with the unit spelled the way each language spells it. */
const gb = (value: number): Record<Locale, string> => {
  const unit: Record<Locale, string> = {
    de: 'GB', en: 'GB', es: 'GB', fr: 'Go', it: 'GB',
    ja: 'GB', ru: 'ГБ', tr: 'GB', uk: 'ГБ', zh: 'GB',
  };
  const n = num(value);
  return Object.fromEntries(
    LOCALES.map((l) => [l, `${n[l]} ${unit[l]}`])
  ) as Record<Locale, string>;
};

export type TierId = 'free' | 'pro' | 'business' | 'enterprise';

export interface Tier {
  id: TierId;
  /** Per month, billed monthly. `null` = quote-based. Same number in EUR and
   * USD — Stripe carries both currencies on each Price. */
  price: number | null;
  /**
   * Total for twelve months, billed annually: `price * 11`, i.e. one month
   * genuinely free. `null` for tiers with no monthly price to discount (Free,
   * Enterprise).
   *
   * Deliberately the *annual total*, not a rounded monthly equivalent. The
   * previous shape (`round(price * 11 / 12)`, rendered × 12) made the site
   * promise "1 month free" while charging 324 instead of 319 — a 6.9% discount
   * sold as 8.3%. Any per-month figure shown to the visitor is derived from
   * this, never the other way round; see `formatMonthlyEquivalent`.
   *
   * WARNING: Stripe still carries 324 and 1092 as of 2026-09-01. New annual
   * Prices at 319/1089 (EUR and USD) must be created and the
   * `STRIPE_PRICE_ID_*_ANNUAL` env vars pointed at them, or checkout charges
   * more than this page shows.
   */
  annualTotal: number | null;
  featured: boolean;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  cta: Record<Locale, string>;
  ctaHref: string;
  /** Headline bullets on the card — the full grid lives in `QUOTAS` below. */
  highlights: Record<Locale, string[]>;
}

const CTA_START: Record<Locale, string> = {
  de: 'Loslegen', en: 'Get started', es: 'Empezar', fr: 'Commencer', it: 'Inizia',
  ja: '始める', ru: 'Начать', tr: 'Başla', uk: 'Почати', zh: '开始使用',
};

const CTA_CONTACT: Record<Locale, string> = {
  de: 'Kontakt aufnehmen', en: 'Contact us', es: 'Contactar', fr: 'Nous contacter',
  it: 'Contattaci', ja: 'お問い合わせ', ru: 'Связаться с нами', tr: 'Bize ulaşın',
  uk: "Зв'язатися з нами", zh: '联系我们',
};

export const TIERS: Tier[] = [
  {
    id: 'free',
    price: 0,
    annualTotal: null,
    featured: false,
    name: {
      de: 'Kostenlos', en: 'Free', es: 'Gratis', fr: 'Gratuit', it: 'Gratuito',
      ja: '無料', ru: 'Бесплатный', tr: 'Ücretsiz', uk: 'Безкоштовний', zh: '免费版',
    },
    tagline: {
      de: 'Zum Ausprobieren und für persönliche Projekte.',
      en: 'For evaluating, and for personal projects.',
      es: 'Para evaluar y para proyectos personales.',
      fr: 'Pour tester et pour les projets personnels.',
      it: 'Per fare prove e per progetti personali.',
      ja: '試用と個人プロジェクト向け。',
      ru: 'Для знакомства и личных проектов.',
      tr: 'Denemek ve kişisel projeler için.',
      uk: 'Для ознайомлення та особистих проєктів.',
      zh: '用于试用和个人项目。',
    },
    cta: CTA_START,
    ctaHref: 'https://app.tblflow.com/auth/signup',
    highlights: {
      de: [
        '1 Base · 1 Space · 1 Nutzer',
        '1 GB Speicher · 5.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 100 Ausführungen/Monat',
        'Community-Support',
      ],
      en: [
        '1 base · 1 space · 1 user',
        '1 GB storage · 5,000 rows per table',
        'Unlimited AI agents and automations — 100 runs/month',
        'Community support',
      ],
      es: [
        '1 base · 1 espacio · 1 usuario',
        '1 GB de almacenamiento · 5000 filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 100 ejecuciones/mes',
        'Soporte de la comunidad',
      ],
      fr: [
        '1 base · 1 espace · 1 utilisateur',
        '1 Go de stockage · 5 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 100 exécutions/mois',
        'Support communautaire',
      ],
      it: [
        '1 base · 1 spazio · 1 utente',
        '1 GB di spazio · 5000 righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 100 esecuzioni/mese',
        'Supporto della community',
      ],
      ja: [
        'ベース 1 · スペース 1 · ユーザー 1',
        'ストレージ 1 GB · 1 テーブルあたり 5,000 行',
        'AI エージェントと自動化は数に制限なし — 月 100 回の実行',
        'コミュニティサポート',
      ],
      ru: [
        '1 база · 1 пространство · 1 пользователь',
        '1 ГБ хранилища · 5 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 100 запусков/месяц',
        'Поддержка сообщества',
      ],
      tr: [
        '1 base · 1 alan · 1 kullanıcı',
        '1 GB depolama · tablo başına 5.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 100 çalıştırma',
        'Topluluk desteği',
      ],
      uk: [
        '1 база · 1 простір · 1 користувач',
        '1 ГБ сховища · 5 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 100 запусків/місяць',
        'Підтримка спільноти',
      ],
      zh: [
        '1 个 base · 1 个空间 · 1 位用户',
        '1 GB 存储 · 每表 5,000 行',
        'AI 智能体与自动化数量不限 — 每月 100 次运行',
        '社区支持',
      ],
    },
  },
  {
    id: 'pro',
    price: 29,
    annualTotal: 29 * 11, // 319 — one month free, exactly
    featured: true,
    name: all('Pro'),
    tagline: {
      de: 'Für kleine Teams, die automatisieren.',
      en: 'For small teams that automate.',
      es: 'Para equipos pequeños que automatizan.',
      fr: 'Pour les petites équipes qui automatisent.',
      it: 'Per piccoli team che automatizzano.',
      ja: '自動化に取り組む小規模チーム向け。',
      ru: 'Для небольших команд, которые автоматизируют.',
      tr: 'Otomasyon yapan küçük ekipler için.',
      uk: 'Для невеликих команд, які автоматизують.',
      zh: '适合正在做自动化的小团队。',
    },
    cta: CTA_START,
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=pro',
    highlights: {
      de: [
        '5 Bases · 3 Nutzer',
        '100 GB Speicher · 100.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 5.000 Ausführungen/Monat',
        'E-Mail-Support · SLA 99,5 %',
      ],
      en: [
        '5 bases · 3 users',
        '100 GB storage · 100,000 rows per table',
        'Unlimited AI agents and automations — 5,000 runs/month',
        'Email support · 99.5% SLA',
      ],
      es: [
        '5 bases · 3 usuarios',
        '100 GB de almacenamiento · 100.000 filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 5000 ejecuciones/mes',
        'Soporte por email · SLA del 99,5 %',
      ],
      fr: [
        '5 bases · 3 utilisateurs',
        '100 Go de stockage · 100 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 5 000 exécutions/mois',
        'Support par email · SLA 99,5 %',
      ],
      it: [
        '5 base · 3 utenti',
        '100 GB di spazio · 100.000 righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 5000 esecuzioni/mese',
        'Supporto via email · SLA 99,5%',
      ],
      ja: [
        'ベース 5 · ユーザー 3',
        'ストレージ 100 GB · 1 テーブルあたり 100,000 行',
        'AI エージェントと自動化は数に制限なし — 月 5,000 回の実行',
        'メールサポート · SLA 99.5%',
      ],
      ru: [
        '5 баз · 3 пользователя',
        '100 ГБ хранилища · 100 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 5 000 запусков/месяц',
        'Поддержка по email · SLA 99,5 %',
      ],
      tr: [
        '5 base · 3 kullanıcı',
        '100 GB depolama · tablo başına 100.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 5.000 çalıştırma',
        'E-posta desteği · %99,5 SLA',
      ],
      uk: [
        '5 баз · 3 користувачі',
        '100 ГБ сховища · 100 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 5 000 запусків/місяць',
        'Підтримка електронною поштою · SLA 99,5%',
      ],
      zh: [
        '5 个 base · 3 位用户',
        '100 GB 存储 · 每表 100,000 行',
        'AI 智能体与自动化数量不限 — 每月 5,000 次运行',
        '邮件支持 · 99.5% SLA',
      ],
    },
  },
  {
    id: 'business',
    price: 99,
    annualTotal: 99 * 11, // 1089 — one month free, exactly
    featured: false,
    name: all('Business'),
    tagline: {
      de: 'Für Teams, die ihren Betrieb darauf aufbauen.',
      en: 'For teams running their operations on it.',
      es: 'Para equipos que gestionan sus operaciones sobre TblFlow.',
      fr: 'Pour les équipes qui font tourner leurs opérations dessus.',
      it: 'Per team che ci gestiscono le proprie operazioni.',
      ja: '業務そのものを TblFlow で回すチーム向け。',
      ru: 'Для команд, которые ведут на нём свои операции.',
      tr: 'Operasyonlarını bunun üzerinde yürüten ekipler için.',
      uk: 'Для команд, які ведуть на ньому свої операції.',
      zh: '适合把日常运营跑在上面的团队。',
    },
    cta: CTA_START,
    ctaHref: 'https://app.tblflow.com/auth/signup?plan=business',
    highlights: {
      de: [
        '30 Bases · 10 Nutzer',
        '500 GB Speicher · 1.000.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 50.000 Ausführungen/Monat',
        'SSO / SAML · White-Label · erweitertes Audit',
        'Priorisierter Support · SLA 99,9 %',
      ],
      en: [
        '30 bases · 10 users',
        '500 GB storage · 1,000,000 rows per table',
        'Unlimited AI agents and automations — 50,000 runs/month',
        'SSO / SAML · white-label · advanced audit',
        'Priority support · 99.9% SLA',
      ],
      es: [
        '30 bases · 10 usuarios',
        '500 GB de almacenamiento · 1.000.000 de filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 50.000 ejecuciones/mes',
        'SSO / SAML · marca blanca · auditoría avanzada',
        'Soporte prioritario · SLA del 99,9 %',
      ],
      fr: [
        '30 bases · 10 utilisateurs',
        '500 Go de stockage · 1 000 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 50 000 exécutions/mois',
        'SSO / SAML · marque blanche · audit avancé',
        'Support prioritaire · SLA 99,9 %',
      ],
      it: [
        '30 base · 10 utenti',
        '500 GB di spazio · 1.000.000 di righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 50.000 esecuzioni/mese',
        'SSO / SAML · white-label · audit avanzato',
        'Supporto prioritario · SLA 99,9%',
      ],
      ja: [
        'ベース 30 · ユーザー 10',
        'ストレージ 500 GB · 1 テーブルあたり 1,000,000 行',
        'AI エージェントと自動化は数に制限なし — 月 50,000 回の実行',
        'SSO / SAML · ホワイトラベル · 高度な監査',
        '優先サポート · SLA 99.9%',
      ],
      ru: [
        '30 баз · 10 пользователей',
        '500 ГБ хранилища · 1 000 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 50 000 запусков/месяц',
        'SSO / SAML · white-label · расширенный аудит',
        'Приоритетная поддержка · SLA 99,9 %',
      ],
      tr: [
        '30 base · 10 kullanıcı',
        '500 GB depolama · tablo başına 1.000.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 50.000 çalıştırma',
        'SSO / SAML · white-label · gelişmiş denetim',
        'Öncelikli destek · %99,9 SLA',
      ],
      uk: [
        '30 баз · 10 користувачів',
        '500 ГБ сховища · 1 000 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 50 000 запусків/місяць',
        'SSO / SAML · white-label · розширений аудит',
        'Пріоритетна підтримка · SLA 99,9%',
      ],
      zh: [
        '30 个 base · 10 位用户',
        '500 GB 存储 · 每表 1,000,000 行',
        'AI 智能体与自动化数量不限 — 每月 50,000 次运行',
        'SSO / SAML · 白标 · 高级审计',
        '优先支持 · 99.9% SLA',
      ],
    },
  },
  {
    id: 'enterprise',
    price: null,
    annualTotal: null,
    featured: false,
    name: all('Enterprise'),
    tagline: {
      de: 'Auf Ihrer Infrastruktur oder in einer dedizierten VPC.',
      en: 'On your infrastructure or in a dedicated VPC.',
      es: 'En tu infraestructura o en una VPC dedicada.',
      fr: 'Sur votre infrastructure ou en VPC dédié.',
      it: 'Sulla tua infrastruttura o in un VPC dedicato.',
      ja: '自社インフラまたは専用 VPC 上で。',
      ru: 'На вашей инфраструктуре или в выделенном VPC.',
      tr: "Kendi altyapınızda veya özel bir VPC'de.",
      uk: 'На вашій інфраструктурі або у виділеному VPC.',
      zh: '部署在你的基础设施或专属 VPC 中。',
    },
    cta: CTA_CONTACT,
    ctaHref: 'mailto:contact@tblflow.com?subject=TblFlow%20Enterprise',
    highlights: {
      de: [
        'Alles unbegrenzt',
        'On-Premise- oder VPC-Bereitstellung',
        'SSO / SAML · White-Label',
        'Dedizierter 24/7-Support · SLA 99,99 %',
      ],
      en: [
        'Everything unlimited',
        'On-premise or VPC deployment',
        'SSO / SAML · white-label',
        'Dedicated 24/7 support · 99.99% SLA',
      ],
      es: [
        'Todo ilimitado',
        'Despliegue on-premise o en VPC',
        'SSO / SAML · marca blanca',
        'Soporte dedicado 24/7 · SLA del 99,99 %',
      ],
      fr: [
        'Tout en illimité',
        'Déploiement on-premise ou VPC',
        'SSO / SAML · marque blanche',
        'Support dédié 24/7 · SLA 99,99 %',
      ],
      it: [
        'Tutto illimitato',
        'Deployment on-premise o VPC',
        'SSO / SAML · white-label',
        'Supporto dedicato 24/7 · SLA 99,99%',
      ],
      ja: [
        'すべて無制限',
        'オンプレミスまたは VPC への配置',
        'SSO / SAML · ホワイトラベル',
        '24 時間 365 日の専任サポート · SLA 99.99%',
      ],
      ru: [
        'Всё без ограничений',
        'Развёртывание on-premise или в VPC',
        'SSO / SAML · white-label',
        'Выделенная поддержка 24/7 · SLA 99,99 %',
      ],
      tr: [
        'Her şey sınırsız',
        'On-premise veya VPC dağıtımı',
        'SSO / SAML · white-label',
        '7/24 özel destek · %99,99 SLA',
      ],
      uk: [
        'Усе без обмежень',
        'Розгортання on-premise або у VPC',
        'SSO / SAML · white-label',
        'Виділена підтримка 24/7 · SLA 99,99%',
      ],
      zh: ['全部无限制', '本地或 VPC 部署', 'SSO / SAML · 白标', '7×24 专属支持 · 99.99% SLA'],
    },
  },
];

/**
 * The full quota grid. Values are strings (not numbers) because the source
 * mixes exact figures and "Unlimited" — normalising them into numbers would
 * lose information the pricing page needs to show as-is. The purely numeric
 * ones still go through `num()` so their grouping follows the locale.
 */
export interface QuotaRow {
  label: Record<Locale, string>;
  values: Record<TierId, Record<Locale, string>>;
}

const NO: Record<Locale, string> = all('—');

const UNLIMITED: Record<Locale, string> = {
  de: 'Unbegrenzt', en: 'Unlimited', es: 'Ilimitado', fr: 'Illimité', it: 'Illimitato',
  ja: '無制限', ru: 'Без ограничений', tr: 'Sınırsız', uk: 'Без обмежень', zh: '无限制',
};

/** `maxRowsPerTable`, `maxAgentRunsPerMonth`, etc. — every tier below Enterprise
 * genuinely caps this. */
const NO_MONTHLY_QUOTA: Record<Locale, string> = {
  de: 'Kein Monatskontingent', en: 'No monthly quota', es: 'Sin cuota mensual',
  fr: 'Sans quota mensuel', it: 'Nessuna quota mensile', ja: '月間上限なし',
  ru: 'Без месячной квоты', tr: 'Aylık kota yok', uk: 'Без місячної квоти',
  zh: '无月度配额',
};

export const QUOTAS: QuotaRow[] = [
  {
    label: {
      de: 'Bases', en: 'Bases', es: 'Bases', fr: 'Bases', it: 'Base',
      ja: 'ベース', ru: 'Базы', tr: "Base'ler", uk: 'Бази', zh: 'Base 数量',
    },
    values: { free: num(1), pro: num(5), business: num(30), enterprise: UNLIMITED },
  },
  {
    label: {
      de: 'Nutzer', en: 'Users', es: 'Usuarios', fr: 'Utilisateurs', it: 'Utenti',
      ja: 'ユーザー', ru: 'Пользователи', tr: 'Kullanıcılar', uk: 'Користувачі', zh: '用户',
    },
    values: { free: num(1), pro: num(3), business: num(10), enterprise: UNLIMITED },
  },
  {
    label: {
      de: 'Kostenlose Spaces pro Nutzer', en: 'Free spaces per user',
      es: 'Espacios gratuitos por usuario', fr: 'Espaces gratuits par utilisateur',
      it: 'Spazi gratuiti per utente', ja: 'ユーザーあたりの無料スペース',
      ru: 'Бесплатные пространства на пользователя', tr: 'Kullanıcı başına ücretsiz alan',
      uk: 'Безкоштовні простори на користувача', zh: '每位用户的免费空间',
    },
    values: { free: num(1), pro: UNLIMITED, business: UNLIMITED, enterprise: UNLIMITED },
  },
  {
    label: {
      de: 'Speicher', en: 'Storage', es: 'Almacenamiento', fr: 'Stockage',
      it: 'Spazio di archiviazione', ja: 'ストレージ', ru: 'Хранилище',
      tr: 'Depolama', uk: 'Сховище', zh: '存储',
    },
    values: { free: gb(1), pro: gb(100), business: gb(500), enterprise: UNLIMITED },
  },
  {
    label: {
      de: 'Zeilen pro Tabelle', en: 'Rows per table', es: 'Filas por tabla',
      fr: 'Lignes par table', it: 'Righe per tabella', ja: 'テーブルあたりの行数',
      ru: 'Строк на таблицу', tr: 'Tablo başına satır', uk: 'Рядків на таблицю',
      zh: '每表行数',
    },
    values: {
      free: num(5000), pro: num(100000), business: num(1000000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'KI-Agenten-Ausführungen / Monat', en: 'AI agent runs / month',
      es: 'Ejecuciones de agentes de IA / mes', fr: 'Exécutions d’agents IA / mois',
      it: 'Esecuzioni di agenti IA / mese', ja: 'AI エージェント実行数 / 月',
      ru: 'Запусков ИИ-агентов / месяц', tr: 'Yapay zekâ ajanı çalıştırma / ay',
      uk: 'Запусків ШІ-агентів / місяць', zh: 'AI 智能体运行次数 / 月',
    },
    values: {
      free: num(100), pro: num(5000), business: num(50000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'Workflow-Ausführungen / Monat', en: 'Workflow runs / month',
      es: 'Ejecuciones de flujos / mes', fr: 'Exécutions de workflows / mois',
      it: 'Esecuzioni di workflow / mese', ja: 'ワークフロー実行数 / 月',
      ru: 'Запусков рабочих процессов / месяц', tr: 'İş akışı çalıştırma / ay',
      uk: 'Запусків робочих процесів / місяць', zh: '工作流运行次数 / 月',
    },
    values: {
      free: num(500), pro: num(25000), business: num(250000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'Automatisierungs-E-Mails / Monat', en: 'Automation emails / month',
      es: 'Emails de automatización / mes', fr: 'E-mails d’automatisation / mois',
      it: 'Email di automazione / mese', ja: '自動化メール / 月',
      ru: 'Писем автоматизации / месяц', tr: 'Otomasyon e-postası / ay',
      uk: 'Листів автоматизації / місяць', zh: '自动化邮件 / 月',
    },
    values: {
      free: num(50), pro: num(2000), business: num(20000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'Computer use — Minuten / Monat', en: 'Computer use — minutes / month',
      es: 'Computer use — minutos / mes', fr: 'Computer use — minutes / mois',
      it: 'Computer use — minuti / mese', ja: 'Computer use — 分 / 月',
      ru: 'Computer use — минут / месяц', tr: 'Computer use — dakika / ay',
      uk: 'Computer use — хвилин / місяць', zh: 'Computer use — 分钟 / 月',
    },
    values: {
      free: num(30), pro: num(600), business: num(3000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'Computer use — Wiedergaben / Monat', en: 'Computer use — replays / month',
      es: 'Computer use — repeticiones / mes', fr: 'Computer use — replays / mois',
      it: 'Computer use — replay / mese', ja: 'Computer use — リプレイ / 月',
      ru: 'Computer use — повторов / месяц', tr: 'Computer use — tekrar / ay',
      uk: 'Computer use — повторів / місяць', zh: 'Computer use — 回放 / 月',
    },
    values: {
      free: num(10), pro: num(200), business: num(1000), enterprise: UNLIMITED,
    },
  },
  {
    label: {
      de: 'API-Anfragen / Monat', en: 'API requests / month',
      es: 'Solicitudes de API / mes', fr: 'Requêtes API / mois',
      it: 'Richieste API / mese', ja: 'API リクエスト / 月',
      ru: 'Запросов к API / месяц', tr: 'API isteği / ay',
      uk: 'Запитів до API / місяць', zh: 'API 请求 / 月',
    },
    values: {
      free: NO_MONTHLY_QUOTA, pro: NO_MONTHLY_QUOTA,
      business: NO_MONTHLY_QUOTA, enterprise: NO_MONTHLY_QUOTA,
    },
  },
  {
    label: {
      de: 'Semantische Suchen / Monat', en: 'Semantic searches / month',
      es: 'Búsquedas semánticas / mes', fr: 'Recherches sémantiques / mois',
      it: 'Ricerche semantiche / mese', ja: 'セマンティック検索 / 月',
      ru: 'Семантических поисков / месяц', tr: 'Anlamsal arama / ay',
      uk: 'Семантичних пошуків / місяць', zh: '语义搜索 / 月',
    },
    values: { free: NO, pro: num(100), business: num(1000), enterprise: UNLIMITED },
  },
  {
    label: {
      de: 'Support', en: 'Support', es: 'Soporte', fr: 'Support', it: 'Supporto',
      ja: 'サポート', ru: 'Поддержка', tr: 'Destek', uk: 'Підтримка', zh: '支持',
    },
    values: {
      free: {
        de: 'Community', en: 'Community', es: 'Comunidad', fr: 'Communauté',
        it: 'Community', ja: 'コミュニティ', ru: 'Сообщество', tr: 'Topluluk',
        uk: 'Спільнота', zh: '社区',
      },
      pro: {
        de: 'E-Mail', en: 'Email', es: 'Email', fr: 'Email', it: 'Email',
        ja: 'メール', ru: 'Email', tr: 'E-posta', uk: 'Email', zh: '邮件',
      },
      business: {
        de: 'Priorisiert', en: 'Priority', es: 'Prioritario', fr: 'Prioritaire',
        it: 'Prioritario', ja: '優先', ru: 'Приоритетная', tr: 'Öncelikli',
        uk: 'Пріоритетна', zh: '优先',
      },
      enterprise: {
        de: 'Dediziert 24/7', en: '24/7 dedicated', es: 'Dedicado 24/7',
        fr: 'Dédié 24/7', it: 'Dedicato 24/7', ja: '24 時間 365 日専任',
        ru: 'Выделенная 24/7', tr: '7/24 özel', uk: 'Виділена 24/7', zh: '7×24 专属',
      },
    },
  },
  {
    label: all('SLA'),
    values: {
      free: {
        de: 'Keine', en: 'None', es: 'Ninguno', fr: 'Aucun', it: 'Nessuno',
        ja: 'なし', ru: 'Нет', tr: 'Yok', uk: 'Немає', zh: '无',
      },
      pro: pct(99.5, 1),
      business: pct(99.9, 1),
      enterprise: pct(99.99, 2),
    },
  },
];

/** Shown once, below the quota table — the API row's "no monthly quota" is not
 * the same claim as "no limit at all": a global, tier-independent rate limit
 * still applies (`BACKEND_THROTTLE_LIMIT`/`BACKEND_THROTTLE_TTL_MS`). */
export const API_RATE_LIMIT_NOTE: Record<Locale, string> = {
  de: 'Kein Monatskontingent für API-Anfragen, es gilt jedoch für alle Tarife ein globales Ratenlimit von standardmäßig 100 Anfragen pro Minute.',
  en: 'No monthly quota on API requests, but a global rate limit of 100 requests per minute by default applies across every tier.',
  es: 'Sin cuota mensual en las solicitudes de API, pero se aplica un límite de tasa global de 100 solicitudes por minuto por defecto en todos los planes.',
  fr: 'Aucun quota mensuel sur les requêtes API, mais une limitation de débit globale de 100 requêtes par minute par défaut s’applique à tous les paliers.',
  it: 'Nessuna quota mensile sulle richieste API, ma su tutti i piani si applica un limite di frequenza globale di 100 richieste al minuto per impostazione predefinita.',
  ja: 'API リクエストに月間上限はありませんが、既定で毎分 100 リクエストという全体のレート制限がすべてのプランに適用されます。',
  ru: 'Месячной квоты на запросы к API нет, но для всех тарифов действует общее ограничение — по умолчанию 100 запросов в минуту.',
  tr: 'API isteklerinde aylık kota yoktur, ancak tüm paketlerde varsayılan olarak dakikada 100 istek şeklinde genel bir hız sınırı geçerlidir.',
  uk: 'Місячної квоти на запити до API немає, але для всіх тарифів діє загальне обмеження — за замовчуванням 100 запитів на хвилину.',
  zh: 'API 请求没有月度配额，但所有套餐都适用全局速率限制，默认为每分钟 100 次请求。',
};
