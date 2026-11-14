import { APP_URL, formatPrice, HREFLANG, LOCALES, SIGNUP_TRIAL_URL, type Locale } from '@/config';
import { PM_STRINGS } from '@/data/processMap';
import { mcp, MCP_RATE_PER_MINUTE } from '@/data/mcp';

/**
 * SaaS Cloud tiers, grid of 2026-11: a price per team (a base with people
 * included), plus a monthly add-on per extra person. Quotas are transcribed
 * from `PLAN_LIMITS` in `packages/openapi/src/billing/plan-limits.ts` in the
 * `teable-ee` repo — the constant the backend actually enforces
 * (`quota.service.ts` for bases/seats/storage/agents/workflows/computer-use,
 * `creditCheck()` in `record.service.ts` for rows per table). If a figure here
 * disagrees with that file, that file is right and this one is stale.
 *
 * Internal ids (`free`, `pro`, `business`, `enterprise`) and the `plan=` values
 * in the signup URLs are the app's contract and are kept as they were: only the
 * names shown to visitors changed (`pro` is "Essentiel", `business` is "Équipe").
 *
 * "Unlimited AI agents/automations" describes the *number of objects* you can
 * create, not how often they run — execution counts are metered separately
 * (`maxAgentRunsPerMonth`, `maxWorkflowRunsPerMonth`) and shown per tier
 * below. Stating "unlimited" without that distinction on the pricing page is
 * what a customer actually reads as a commercial promise, so it does not
 * appear here without the execution number attached.
 *
 * Every visible string carries all ten locales. These used to be authored
 * fr/en only, with the other eight filled from English, so a German visitor
 * read "$29" on a card that charges euros, next to English feature bullets.
 * Because the fields are typed `Record<Locale, …>`, a missing locale is now a
 * compile error rather than a silent English fallback.
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
const mb = (value: number): Record<Locale, string> => {
  const unit: Record<Locale, string> = {
    de: 'MB', en: 'MB', es: 'MB', fr: 'Mo', it: 'MB',
    ja: 'MB', ru: 'МБ', tr: 'MB', uk: 'МБ', zh: 'MB',
  };
  const n = num(value);
  return Object.fromEntries(
    LOCALES.map((l) => [l, `${n[l]} ${unit[l]}`])
  ) as Record<Locale, string>;
};

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

/** A monthly add-on per extra person: "+7 €/mois", "+€7/month". */
const MONTH_SUFFIX: Record<Locale, string> = {
  de: '/Monat', en: '/month', es: '/mes', fr: '/mois', it: '/mese',
  ja: '/月', ru: '/мес', tr: '/ay', uk: '/міс', zh: '/月',
};

const perMonthAddOn = (amount: number): Record<Locale, string> =>
  Object.fromEntries(
    LOCALES.map((l) => [l, `+${formatPrice(l, amount)}${MONTH_SUFFIX[l]}`])
  ) as Record<Locale, string>;

export type TierId = 'free' | 'pro' | 'business' | 'enterprise';

export interface Tier {
  id: TierId;
  /**
   * Per month, billed monthly, for the included people. `null` = quote-based.
   * In EUR in every locale — Stripe bills in euros only.
   */
  price: number | null;
  /** True when `price` is a starting price ("à partir de"): Enterprise, sold on quote only. */
  priceFrom: boolean;
  /**
   * Total for twelve months, billed annually: `price * 10`, i.e. two months
   * genuinely free. `null` for tiers with no monthly price to discount (Free).
   *
   * Deliberately the *annual total*, not a rounded monthly equivalent. The
   * previous shape (`round(price * 11 / 12)`, rendered × 12) made the site
   * promise "1 month free" while charging 324 instead of 319 — a 6.9% discount
   * sold as 8.3%. Any per-month figure shown to the visitor is derived from
   * this, never the other way round; see `formatMonthlyEquivalent`.
   *
   * WARNING: the annual Prices must match this grid — 390 (Essentiel), 1190
   * (Équipe), 3990 (Entreprise), in EUR — and the monthly add-on per
   * person (`seatPrice`) must exist as a Stripe Price too. Until they do,
   * checkout charges something other than what this page shows.
   */
  annualTotal: number | null;
  /** Monthly price per person above `includedSeats`. `null` = no add-on (Free). */
  seatPrice: number | null;
  /** People included in `price`. */
  includedSeats: number;
  featured: boolean;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  cta: Record<Locale, string>;
  ctaHref: string;
  /** Headline bullets on the card — the full grid lives in `QUOTAS` below. */
  highlights: Record<Locale, string[]>;
}

/** Entreprise ne s'achète plus en ligne : le bouton ouvre le formulaire de devis de l'application. */
const CTA_QUOTE: Record<Locale, string> = {
  de: 'Angebot anfragen', en: 'Request a quote', es: 'Solicitar presupuesto', fr: 'Demander un devis',
  it: 'Richiedi un preventivo', ja: '見積を依頼', ru: 'Запросить предложение', tr: 'Teklif iste',
  uk: 'Запросити пропозицію', zh: '申请报价',
};

const CTA_START: Record<Locale, string> = {
  de: 'Loslegen', en: 'Get started', es: 'Empezar', fr: 'Commencer', it: 'Inizia',
  ja: '始める', ru: 'Начать', tr: 'Başla', uk: 'Почати', zh: '开始使用',
};

const ESSENTIEL_NAME: Record<Locale, string> = {
  de: 'Essential', en: 'Essential', es: 'Esencial', fr: 'Essentiel', it: 'Essenziale',
  ja: 'Essential', ru: 'Essential', tr: 'Essential', uk: 'Essential', zh: 'Essential',
};

const EQUIPE_NAME: Record<Locale, string> = {
  de: 'Team', en: 'Team', es: 'Equipo', fr: 'Équipe', it: 'Team',
  ja: 'チーム', ru: 'Team', tr: 'Team', uk: 'Team', zh: '团队版',
};

const ENTREPRISE_NAME: Record<Locale, string> = {
  de: 'Enterprise', en: 'Enterprise', es: 'Enterprise', fr: 'Entreprise', it: 'Enterprise',
  ja: 'Enterprise', ru: 'Enterprise', tr: 'Enterprise', uk: 'Enterprise', zh: '企业版',
};

const BASE_TIERS: Tier[] = [
  {
    id: 'free',
    price: 0,
    priceFrom: false,
    annualTotal: null,
    seatPrice: null,
    includedSeats: 2,
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
    ctaHref: SIGNUP_TRIAL_URL,
    highlights: {
      de: [
        '2 Personen inklusive · 1 Base · 1 Space',
        '1 GB Speicher · 5.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 100 Agenten- und 500 Automatisierungs-Ausführungen/Monat',
        'Community-Support',
      ],
      en: [
        '2 people included · 1 base · 1 space',
        '1 GB storage · 5,000 rows per table',
        'Unlimited AI agents and automations — 100 agent runs and 500 automation runs/month',
        'Community support',
      ],
      es: [
        '2 personas incluidas · 1 base · 1 espacio',
        '1 GB de almacenamiento · 5000 filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 100 ejecuciones de agentes y 500 de automatizaciones/mes',
        'Soporte de la comunidad',
      ],
      fr: [
        '2 personnes incluses · 1 base · 1 espace',
        '1 Go de stockage · 5 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 100 exécutions d’agents et 500 d’automatisations/mois',
        'Support communautaire',
      ],
      it: [
        '2 persone incluse · 1 base · 1 spazio',
        '1 GB di spazio · 5000 righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 100 esecuzioni di agenti e 500 di automazioni/mese',
        'Supporto della community',
      ],
      ja: [
        '2 名まで含む · ベース 1 · スペース 1',
        'ストレージ 1 GB · 1 テーブルあたり 5,000 行',
        'AI エージェントと自動化は数に制限なし — 月にエージェント 100 回・自動化 500 回の実行',
        'コミュニティサポート',
      ],
      ru: [
        '2 участника включено · 1 база · 1 пространство',
        '1 ГБ хранилища · 5 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 100 запусков агентов и 500 запусков автоматизаций/месяц',
        'Поддержка сообщества',
      ],
      tr: [
        '2 kişi dahil · 1 veritabanı · 1 alan',
        '1 GB depolama · tablo başına 5.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 100 ajan ve 500 otomasyon çalıştırması',
        'Topluluk desteği',
      ],
      uk: [
        '2 особи включено · 1 база · 1 простір',
        '1 ГБ сховища · 5 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 100 запусків агентів і 500 запусків автоматизацій/місяць',
        'Підтримка спільноти',
      ],
      zh: [
        '含 2 位成员 · 1 个 base · 1 个空间',
        '1 GB 存储 · 每表 5,000 行',
        'AI 智能体与自动化数量不限——每月智能体运行 100 次、自动化运行 500 次',
        '社区支持',
      ],
    },
  },
  {
    id: 'pro',
    price: 39,
    priceFrom: false,
    annualTotal: 39 * 10, // 390 — two months free, exactly
    seatPrice: 7,
    includedSeats: 5,
    featured: true,
    name: ESSENTIEL_NAME,
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
    ctaHref: SIGNUP_TRIAL_URL,
    highlights: {
      de: [
        '5 Personen inklusive · 5 Bases',
        '100 GB Speicher · 100.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 5.000 Agenten- und 25.000 Automatisierungs-Ausführungen/Monat',
        'E-Mail-Support · SLA 99,5 %',
      ],
      en: [
        '5 people included · 5 bases',
        '100 GB storage · 100,000 rows per table',
        'Unlimited AI agents and automations — 5,000 agent runs and 25,000 automation runs/month',
        'Email support · 99.5% SLA',
      ],
      es: [
        '5 personas incluidas · 5 bases',
        '100 GB de almacenamiento · 100.000 filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 5000 ejecuciones de agentes y 25.000 de automatizaciones/mes',
        'Soporte por email · SLA del 99,5 %',
      ],
      fr: [
        '5 personnes incluses · 5 bases',
        '100 Go de stockage · 100 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 5 000 exécutions d’agents et 25 000 d’automatisations/mois',
        'Support par e-mail · SLA 99,5 %',
      ],
      it: [
        '5 persone incluse · 5 base',
        '100 GB di spazio · 100.000 righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 5000 esecuzioni di agenti e 25.000 di automazioni/mese',
        'Supporto via email · SLA 99,5%',
      ],
      ja: [
        '5 名まで含む · ベース 5',
        'ストレージ 100 GB · 1 テーブルあたり 100,000 行',
        'AI エージェントと自動化は数に制限なし — 月にエージェント 5,000 回・自動化 25,000 回の実行',
        'メールサポート · SLA 99.5%',
      ],
      ru: [
        '5 участников включено · 5 баз',
        '100 ГБ хранилища · 100 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 5 000 запусков агентов и 25 000 запусков автоматизаций/месяц',
        'Поддержка по email · SLA 99,5 %',
      ],
      tr: [
        '5 kişi dahil · 5 veritabanı',
        '100 GB depolama · tablo başına 100.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 5.000 ajan ve 25.000 otomasyon çalıştırması',
        'E-posta desteği · %99,5 SLA',
      ],
      uk: [
        '5 осіб включено · 5 баз',
        '100 ГБ сховища · 100 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 5 000 запусків агентів і 25 000 запусків автоматизацій/місяць',
        'Підтримка електронною поштою · SLA 99,5%',
      ],
      zh: [
        '含 5 位成员 · 5 个 base',
        '100 GB 存储 · 每表 100,000 行',
        'AI 智能体与自动化数量不限——每月智能体运行 5,000 次、自动化运行 25,000 次',
        '邮件支持 · 99.5% SLA',
      ],
    },
  },
  {
    id: 'business',
    price: 119,
    priceFrom: false,
    annualTotal: 119 * 10, // 1190 — two months free, exactly
    seatPrice: 6,
    includedSeats: 15,
    featured: false,
    name: EQUIPE_NAME,
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
        '15 Personen inklusive · 30 Bases',
        '500 GB Speicher · 1.000.000 Zeilen pro Tabelle',
        'Unbegrenzt viele KI-Agenten und Automatisierungen — 50.000 Agenten- und 250.000 Automatisierungs-Ausführungen/Monat',
        'SSO / SAML · White-Label · erweitertes Audit',
        'Priorisierter Support · SLA 99,9 %',
      ],
      en: [
        '15 people included · 30 bases',
        '500 GB storage · 1,000,000 rows per table',
        'Unlimited AI agents and automations — 50,000 agent runs and 250,000 automation runs/month',
        'SSO / SAML · white-label · advanced audit',
        'Priority support · 99.9% SLA',
      ],
      es: [
        '15 personas incluidas · 30 bases',
        '500 GB de almacenamiento · 1.000.000 de filas por tabla',
        'Agentes de IA y automatizaciones ilimitados en número — 50.000 ejecuciones de agentes y 250.000 de automatizaciones/mes',
        'SSO / SAML · marca blanca · auditoría avanzada',
        'Soporte prioritario · SLA del 99,9 %',
      ],
      fr: [
        '15 personnes incluses · 30 bases',
        '500 Go de stockage · 1 000 000 lignes par table',
        'Agents IA et automatisations illimités en nombre — 50 000 exécutions d’agents et 250 000 d’automatisations/mois',
        'SSO / SAML · marque blanche · audit avancé',
        'Support prioritaire · SLA 99,9 %',
      ],
      it: [
        '15 persone incluse · 30 base',
        '500 GB di spazio · 1.000.000 di righe per tabella',
        'Agenti IA e automazioni illimitati nel numero — 50.000 esecuzioni di agenti e 250.000 di automazioni/mese',
        'SSO / SAML · white-label · audit avanzato',
        'Supporto prioritario · SLA 99,9%',
      ],
      ja: [
        '15 名まで含む · ベース 30',
        'ストレージ 500 GB · 1 テーブルあたり 1,000,000 行',
        'AI エージェントと自動化は数に制限なし — 月にエージェント 50,000 回・自動化 250,000 回の実行',
        'SSO / SAML · ホワイトラベル · 高度な監査',
        '優先サポート · SLA 99.9%',
      ],
      ru: [
        '15 участников включено · 30 баз',
        '500 ГБ хранилища · 1 000 000 строк на таблицу',
        'Неограниченное число ИИ-агентов и автоматизаций — 50 000 запусков агентов и 250 000 запусков автоматизаций/месяц',
        'SSO / SAML · white-label · расширенный аудит',
        'Приоритетная поддержка · SLA 99,9 %',
      ],
      tr: [
        '15 kişi dahil · 30 veritabanı',
        '500 GB depolama · tablo başına 1.000.000 satır',
        'Sayıca sınırsız yapay zekâ ajanı ve otomasyon — ayda 50.000 ajan ve 250.000 otomasyon çalıştırması',
        'SSO / SAML · white-label · gelişmiş denetim',
        'Öncelikli destek · %99,9 SLA',
      ],
      uk: [
        '15 осіб включено · 30 баз',
        '500 ГБ сховища · 1 000 000 рядків на таблицю',
        'Необмежена кількість ШІ-агентів та автоматизацій — 50 000 запусків агентів і 250 000 запусків автоматизацій/місяць',
        'SSO / SAML · white-label · розширений аудит',
        'Пріоритетна підтримка · SLA 99,9%',
      ],
      zh: [
        '含 15 位成员 · 30 个 base',
        '500 GB 存储 · 每表 1,000,000 行',
        'AI 智能体与自动化数量不限——每月智能体运行 50,000 次、自动化运行 250,000 次',
        'SSO / SAML · 白标 · 高级审计',
        '优先支持 · 99.9% SLA',
      ],
    },
  },
  {
    id: 'enterprise',
    price: 399,
    priceFrom: true,
    annualTotal: 399 * 10, // 3990 — two months free, exactly
    seatPrice: 5,
    includedSeats: 50,
    featured: false,
    name: ENTREPRISE_NAME,
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
      zh: '部署在您的基础设施或专属 VPC 中。',
    },
    cta: CTA_QUOTE,
    ctaHref: `${APP_URL}/enterprise-quote`,
    highlights: {
      de: [
        'Nur auf Angebot: ab 399 €/Monat',
        'Mehr als 50 Personen, Selbsthosting oder VPC: auf Anfrage',
        'Bases, Zeilen und Speicher unbegrenzt · SSO / SAML · White-Label',
        'Dedizierter 24/7-Support · SLA 99,99 %',
      ],
      en: [
        'Quote only: from €399/month',
        'Above 50 people, self-hosting or VPC: on quote',
        'Unlimited bases, rows and storage · SSO / SAML · white-label',
        'Dedicated 24/7 support · 99.99% SLA',
      ],
      es: [
        'Solo con presupuesto: desde 399 €/mes',
        'Más de 50 personas, autoalojamiento o VPC: a presupuesto',
        'Bases, filas y almacenamiento ilimitados · SSO / SAML · marca blanca',
        'Soporte dedicado 24/7 · SLA del 99,99 %',
      ],
      fr: [
        'Sur devis uniquement : dès 399 €/mois',
        'Au-delà de 50, auto-hébergement ou VPC : sur devis',
        'Bases, lignes et stockage illimités · SSO / SAML · marque blanche',
        'Support dédié 24/7 · SLA 99,99 %',
      ],
      it: [
        'Solo su preventivo: da 399 €/mese',
        'Oltre 50 persone, self-hosting o VPC: su preventivo',
        'Base, righe e spazio illimitati · SSO / SAML · white-label',
        'Supporto dedicato 24/7 · SLA 99,99%',
      ],
      ja: [
        '見積のみ：月額 €399 から',
        '50 名超、セルフホスト、VPC: 見積制',
        'ベース・行・ストレージ無制限 · SSO / SAML · ホワイトラベル',
        '24 時間 365 日の専任サポート · SLA 99.99%',
      ],
      ru: [
        'Только по запросу: от 399 €/месяц',
        'Больше 50 человек, self-hosting или VPC: по запросу',
        'Базы, строки и хранилище без ограничений · SSO / SAML · white-label',
        'Выделенная поддержка 24/7 · SLA 99,99 %',
      ],
      tr: [
        'Yalnızca teklifle: ayda €399\'dan',
        '50 kişinin üzerinde, kendi sunucunuz veya VPC: teklife bağlı',
        'Veritabanı, satır ve depolama sınırsız · SSO / SAML · white-label',
        '7/24 özel destek · %99,99 SLA',
      ],
      uk: [
        'Лише за запитом: від 399 €/міс',
        'Понад 50 людей, self-hosting або VPC: за запитом',
        'Бази, рядки та сховище без обмежень · SSO / SAML · white-label',
        'Виділена підтримка 24/7 · SLA 99,99%',
      ],
      zh: [
        '仅限报价：每月 €399 起',
        '超过 50 人、自托管或 VPC：按需报价',
        'base、行数与存储不限 · SSO / SAML · 白标',
        '7×24 专属支持 · 99.99% SLA',
      ],
    },
  },
];

/** Essentiel card line: the 14-day trial the signup buttons open (`?plan=pro-trial`). */
const PRO_TRIAL_NOTE: Record<Locale, string> = {
  de: '14 Tage Essential testen, ohne Karte; danach zurück zum Kostenlos-Tarif',
  en: '14-day Essential trial, no card; then back to the Free plan',
  es: 'Prueba de Esencial de 14 días, sin tarjeta; después vuelve al plan Gratis',
  fr: 'Essai Essentiel de 14 jours, sans carte bancaire ; ensuite retour au palier Gratuit',
  it: 'Prova Essenziale di 14 giorni, senza carta; poi si torna al piano Gratuito',
  ja: 'Essential の 14 日間無料トライアル（カード不要）。終了後は無料プランに戻ります',
  ru: '14 дней Essential бесплатно, без карты; затем возврат на бесплатный тариф',
  tr: '14 gün Essential denemesi, kart gerekmez; sonrasında Ücretsiz plana dönülür',
  uk: '14 днів Essential безкоштовно, без картки; потім повернення на безкоштовний тариф',
  zh: '14 天 Essential 免费试用，无需绑卡；试用结束后回到免费版',
};

/** Every tier includes the MCP server; the card says so, with that tier's rate limit. */
export const TIERS: Tier[] = BASE_TIERS.map((tier) => ({
  ...tier,
  highlights: Object.fromEntries(
    LOCALES.map((l) => [
      l,
      [
        ...(tier.id === 'pro' ? [PRO_TRIAL_NOTE[l]] : []),
        ...tier.highlights[l],
        mcp(l, 'pricing.highlight').replace('{n}', String(MCP_RATE_PER_MINUTE[tier.id])),
      ],
    ])
  ) as Record<Locale, string[]>,
}));

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

/** Carto des process, Free tier: a diagnosis of one process. Detailed in `CARTO_FREE_NOTE`. */
const CARTO_FREE: Record<Locale, string> = {
  de: 'Diagnose: 1 Prozess', en: 'Diagnosis: 1 process', es: 'Diagnóstico: 1 proceso',
  fr: 'Diagnostic : 1 processus', it: 'Diagnosi: 1 processo', ja: '診断：1 プロセス',
  ru: 'Диагностика: 1 процесс', tr: 'Teşhis: 1 süreç', uk: 'Діагностика: 1 процес',
  zh: '诊断：1 个流程',
};

const CARTO_FULL: Record<Locale, string> = {
  de: 'Vollständig', en: 'Full', es: 'Completa', fr: 'Complète', it: 'Completa',
  ja: 'フル機能', ru: 'Полная', tr: 'Tam', uk: 'Повна', zh: '完整',
};

const INCLUDED_PEOPLE_LABEL: Record<Locale, string> = {
  de: 'Enthaltene Personen', en: 'People included', es: 'Personas incluidas',
  fr: 'Personnes incluses', it: 'Persone incluse', ja: '含まれる人数',
  ru: 'Включено участников', tr: 'Dahil kişi', uk: 'Включено осіб', zh: '含人数',
};

const EXTRA_PERSON_LABEL: Record<Locale, string> = {
  de: 'Jede weitere Person', en: 'Each additional person', es: 'Cada persona adicional',
  fr: 'Personne en plus', it: 'Ogni persona in più', ja: '追加 1 名',
  ru: 'Каждый дополнительный участник', tr: 'Her ek kişi', uk: 'Кожен додатковий користувач',
  zh: '每增加 1 人',
};

export const QUOTAS: QuotaRow[] = [
  {
    // processMapEnable in plan-limits.ts: the free tier gets a one-process diagnosis.
    label: PM_STRINGS['pricing.row'],
    values: {
      free: CARTO_FREE,
      pro: CARTO_FULL,
      business: CARTO_FULL,
      enterprise: CARTO_FULL,
    },
  },
  {
    label: {
      de: 'Bases', en: 'Bases', es: 'Bases', fr: 'Bases', it: 'Base',
      ja: 'ベース', ru: 'Базы', tr: 'Veritabanları', uk: 'Бази', zh: '数据库数量',
    },
    values: { free: num(1), pro: num(5), business: num(30), enterprise: UNLIMITED },
  },
  {
    label: INCLUDED_PEOPLE_LABEL,
    values: { free: num(2), pro: num(5), business: num(15), enterprise: num(50) },
  },
  {
    label: EXTRA_PERSON_LABEL,
    values: {
      free: NO, pro: perMonthAddOn(7), business: perMonthAddOn(6), enterprise: perMonthAddOn(5),
    },
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
    // Document library media (plan-limits.ts: total per space), separate from the database storage above.
    label: {
      de: 'Medien (Dokumentbibliothek)', en: 'Media (document library)', es: 'Medios (biblioteca de documentos)',
      fr: 'Médias (bibliothèque de documents)', it: 'Media (libreria di documenti)', ja: 'メディア（ドキュメントライブラリ）',
      ru: 'Медиа (библиотека документов)', tr: 'Medya (belge kitaplığı)', uk: 'Медіа (бібліотека документів)',
      zh: '媒体（文档库）',
    },
    values: { free: mb(200), pro: gb(20), business: gb(100), enterprise: UNLIMITED },
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
      es: 'Computer use — repeticiones / mes', fr: 'Computer use — rejeux / mois',
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
  {
    // Same figure as the MCP page: included on every tier, only the rate limit varies.
    label: Object.fromEntries(LOCALES.map((l) => [l, mcp(l, 'pricing.row')])) as Record<Locale, string>,
    values: {
      free: num(MCP_RATE_PER_MINUTE.free),
      pro: num(MCP_RATE_PER_MINUTE.pro),
      business: num(MCP_RATE_PER_MINUTE.business),
      enterprise: num(MCP_RATE_PER_MINUTE.enterprise),
    },
  },
];

/** Shown once, below the quota table — the API row's "no monthly quota" is not
 * the same claim as "no limit at all": a global, tier-independent rate limit
 * still applies (`BACKEND_THROTTLE_LIMIT`/`BACKEND_THROTTLE_TTL_MS`). */
export const API_RATE_LIMIT_NOTE: Record<Locale, string> = {
  de: 'Kein Monatskontingent für API-Anfragen, es gilt jedoch für alle Tarife ein globales Ratenlimit von standardmäßig 100 Anfragen pro Minute.',
  en: 'No monthly quota on API requests, but a global rate limit of 100 requests per minute by default applies across every plan.',
  es: 'Sin cuota mensual en las solicitudes de API, pero se aplica un límite de tasa global de 100 solicitudes por minuto por defecto en todos los planes.',
  fr: 'Aucun quota mensuel sur les requêtes API, mais une limitation de débit globale de 100 requêtes par minute par défaut s’applique à tous les paliers.',
  it: 'Nessuna quota mensile sulle richieste API, ma su tutti i piani si applica un limite di frequenza globale di 100 richieste al minuto per impostazione predefinita.',
  ja: 'API リクエストに月間上限はありませんが、既定で毎分 100 リクエストという全体のレート制限がすべてのプランに適用されます。',
  ru: 'Месячной квоты на запросы к API нет, но для всех тарифов действует общее ограничение — по умолчанию 100 запросов в минуту.',
  tr: 'API isteklerinde aylık kota yoktur, ancak tüm planlarda varsayılan olarak dakikada 100 istek şeklinde genel bir hız sınırı geçerlidir.',
  uk: 'Місячної квоти на запити до API немає, але для всіх тарифів діє загальне обмеження — за замовчуванням 100 запитів на хвилину.',
  zh: 'API 请求没有月度配额，但所有套餐都适用全局速率限制，默认为每分钟 100 次请求。',
};

/** Shown under the quota table: what the free "Carto des process" really gives. */
export const CARTO_FREE_NOTE: Record<Locale, string> = {
  de: 'Kostenlos: Diagnose eines Prozesses mit sichtbaren geschätzten Kosten, ohne Schaltfläche „Ersetzen“ und ohne monatlichen Bericht.',
  en: 'Free: diagnosis of one process with its estimated costs visible, without the Replace button and without the monthly report.',
  es: 'Gratis: diagnóstico de un proceso con los costes estimados visibles, sin el botón «Reemplazar» y sin el informe mensual.',
  fr: 'Gratuit : diagnostic d’un processus avec les coûts estimés visibles, sans le bouton « Remplacer » ni le rapport mensuel.',
  it: 'Gratuito: diagnosi di un processo con i costi stimati visibili, senza il pulsante «Sostituisci» e senza il report mensile.',
  ja: '無料：1 つのプロセスの診断を行い、推定コストを表示します。「置き換える」ボタンと月次レポートは含まれません。',
  ru: 'Бесплатно: диагностика одного процесса с видимой оценкой затрат, без кнопки «Заменить» и без ежемесячного отчёта.',
  tr: 'Ücretsiz: tek bir sürecin teşhisi, tahmini maliyetler görünür; «Değiştir» düğmesi ve aylık rapor yok.',
  uk: 'Безкоштовно: діагностика одного процесу з видимими оцінками витрат, без кнопки «Замінити» та без щомісячного звіту.',
  zh: '免费版：对一个流程进行诊断，可见估算成本；不含“替换”按钮和月度报告。',
};
