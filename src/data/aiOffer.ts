import { LOCALES, formatPrice, HREFLANG, type Locale } from '@/config';

/**
 * Offre IA TblFlow (grille v3 du 2026-11-13), transcrite de `AI_CREDIT_GRID` et de
 * `PLAN_LIMITS.includedAiCreditsPerMonth` dans le depot de l'application. En cas d'ecart,
 * l'application fait foi. Le niveau 2 de telemetrie (-8 %) n'est volontairement pas annonce ici.
 */
export const AI_OFFER = {
  included: { pro: 4000, business: 15000, enterprise: 40000 },
  seat: { credits: 5000, price: 7.5 },
  pools: [
    { credits: 20000, price: 29 },
    { credits: 100000, price: 140 },
  ],
  packs: [
    { credits: 5000, price: 7.5 },
    { credits: 20000, price: 29 },
    { credits: 100000, price: 140 },
  ],
  /** Annuel des options IA : -5 % sur douze mensualites. */
  annualDiscountPercent: 5,
} as const;

export const nf = (locale: Locale, value: number) => new Intl.NumberFormat(HREFLANG[locale]).format(value);
export const eur = (locale: Locale, value: number) => formatPrice(locale, value);

type Strings = Record<Locale, string>;
const s = (v: Strings) => v;

export const AI_STRINGS = {
  title: s({
    de: 'TblFlow KI', en: 'TblFlow AI', es: 'IA de TblFlow', fr: 'IA TblFlow', it: 'IA di TblFlow',
    ja: 'TblFlow AI', ru: 'ИИ TblFlow', tr: 'TblFlow YZ', uk: 'ШІ TblFlow', zh: 'TblFlow AI',
  }),
  intro: s({
    de: 'Jeder kostenpflichtige Tarif enthält monatliche KI-Credits. Mehr nötig? Zusatzoption buchen oder Credits aufladen, ohne Ablauf.',
    en: 'Every paid plan includes monthly AI credits. Need more? Add an option or top up, with no expiry.',
    es: 'Cada plan de pago incluye créditos de IA mensuales. ¿Necesitas más? Añade una opción o recarga, sin caducidad.',
    fr: 'Chaque forfait payant inclut des crédits IA chaque mois. Besoin de plus ? Ajoutez une option ou rechargez, sans expiration.',
    it: 'Ogni piano a pagamento include crediti IA mensili. Ti serve di più? Aggiungi un’opzione o ricarica, senza scadenza.',
    ja: '有料プランには毎月 AI クレジットが含まれます。足りない場合はオプションの追加またはチャージ（有効期限なし）をご利用ください。',
    ru: 'Каждый платный тариф включает ежемесячные кредиты ИИ. Нужно больше? Добавьте опцию или пополните баланс, без срока действия.',
    tr: 'Her ücretli plan aylık YZ kredisi içerir. Daha fazlası mı lazım? Seçenek ekleyin veya süresiz kredi yükleyin.',
    uk: 'Кожен платний тариф містить щомісячні кредити ШІ. Потрібно більше? Додайте опцію або поповніть баланс, без терміну дії.',
    zh: '每个付费套餐都含每月 AI 额度。不够用？可加购选项，或充值（长期有效）。',
  }),
  includedTitle: s({
    de: 'Im Tarif enthalten (pro Monat)', en: 'Included in the plan (per month)', es: 'Incluido en el plan (al mes)',
    fr: 'Inclus dans le forfait (par mois)', it: 'Incluso nel piano (al mese)', ja: 'プランに含まれる量（月あたり）',
    ru: 'Входит в тариф (в месяц)', tr: 'Plana dahil (aylık)', uk: 'Входить у тариф (на місяць)', zh: '套餐内含（每月）',
  }),
  credits: s({
    de: 'Credits', en: 'credits', es: 'créditos', fr: 'crédits', it: 'crediti',
    ja: 'クレジット', ru: 'кредитов', tr: 'kredi', uk: 'кредитів', zh: '额度',
  }),
  seatTitle: s({
    de: 'Option pro Person', en: 'Per-user option', es: 'Opción por usuario', fr: 'Option par utilisateur',
    it: 'Opzione per utente', ja: 'ユーザー単位オプション', ru: 'Опция на пользователя', tr: 'Kullanıcı başına seçenek',
    uk: 'Опція на користувача', zh: '按用户选项',
  }),
  seatBody: s({
    de: 'pro Person und Monat, von Ihnen zugewiesen', en: 'per person per month, assigned by you',
    es: 'por persona y mes, asignada por ti', fr: 'par personne et par mois, attribuée par vous',
    it: 'per persona al mese, assegnata da te', ja: '1 人あたり月額、割り当ては管理者が指定',
    ru: 'за человека в месяц, назначаете вы', tr: 'kişi başına aylık, siz atarsınız',
    uk: 'за людину на місяць, призначаєте ви', zh: '每人每月，由您指定成员',
  }),
  poolTitle: s({
    de: 'Gemeinsamer Pool', en: 'Shared pool', es: 'Bolsa compartida', fr: 'Pool partagé', it: 'Pool condiviso',
    ja: '共有プール', ru: 'Общий пул', tr: 'Ortak havuz', uk: 'Спільний пул', zh: '共享额度池',
  }),
  perMonth: s({
    de: '/ Monat', en: '/ month', es: '/ mes', fr: '/ mois', it: '/ mese', ja: '/ 月', ru: '/ мес.', tr: '/ ay', uk: '/ міс.', zh: '/ 月',
  }),
  packsTitle: s({
    de: 'Aufladen, ohne Ablauf', en: 'Top-ups, no expiry', es: 'Recargas, sin caducidad', fr: 'Recharges, sans expiration',
    it: 'Ricariche, senza scadenza', ja: 'チャージ（有効期限なし）', ru: 'Пополнение, без срока действия',
    tr: 'Kredi yükleme, süresiz', uk: 'Поповнення, без терміну дії', zh: '充值，长期有效',
  }),
  byok: s({
    de: 'Eigener Schlüssel? Bleibt möglich und verbraucht keine Credits. Kostenlos und in der Testphase: nur eigener Schlüssel.',
    en: 'Your own key? Still possible and uses no credits. Free plan and trial: your own key only.',
    es: '¿Tu propia clave? Sigue siendo posible y no consume créditos. Plan Gratis y prueba: solo tu propia clave.',
    fr: 'Votre propre clé ? Toujours possible, elle ne consomme aucun crédit. Gratuit et essai : votre clé uniquement.',
    it: 'La tua chiave? Resta possibile e non consuma crediti. Piano Gratuito e prova: solo la tua chiave.',
    ja: '自分のキーも引き続き利用でき、クレジットは消費しません。無料プランとトライアルでは自分のキーのみ。',
    ru: 'Свой ключ? По-прежнему можно, кредиты не расходуются. Бесплатный тариф и пробный период: только свой ключ.',
    tr: 'Kendi anahtarınız? Hâlâ mümkün, kredi harcamaz. Ücretsiz plan ve deneme: yalnızca kendi anahtarınız.',
    uk: 'Власний ключ? Так само можна, кредити не витрачаються. Безкоштовний тариф і пробний період: лише власний ключ.',
    zh: '用自己的密钥？仍可使用，不消耗额度。免费版与试用期仅限自带密钥。',
  }),
  annual: s({
    de: 'Jährliche Abrechnung der Optionen: 5 % Rabatt.', en: 'Yearly billing of the options: 5% off.',
    es: 'Facturación anual de las opciones: 5 % de descuento.', fr: 'Facturation annuelle des options : 5 % de remise.',
    it: 'Fatturazione annuale delle opzioni: sconto del 5%.', ja: 'オプションの年払いは 5% 割引。',
    ru: 'Годовая оплата опций: скидка 5 %.', tr: 'Seçeneklerde yıllık faturalamada %5 indirim.',
    uk: 'Річна оплата опцій: знижка 5 %.', zh: '选项按年付费可享 95 折。',
  }),
} as const;

export const AI_LOCALES = LOCALES;
