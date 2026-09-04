import { LOCALES, type Locale } from '@/config';

/**
 * Content for the statutory/compliance pages (mentions légales, CGVU, privacy,
 * cookies).
 *
 * IMPORTANT: this is drafted content, not legal advice. Have it reviewed by a
 * lawyer before it goes live — in particular the data-retention periods, the
 * subprocessor list and the no-pro-rata-refund clause, which only the company
 * can state authoritatively.
 *
 * On translation: the mentions légales and the CGVU are governed by French law
 * and were written in French. The other nine locales carry a courtesy
 * translation, headed by a notice saying the French version is the only
 * authoritative text — see `AUTHORITATIVE_FR_NOTE`. A translation does not make
 * a French-law contract more valid, and where two versions diverge the reader
 * must be able to see which one binds. The privacy and cookie policies are
 * informational rather than contractual, so they carry no such notice.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

/** Company identity, used by both the legal notice and the privacy policy. */
export const COMPANY = {
  name: 'SPACE UNITY',
  form: 'SAS (société par actions simplifiée)',
  capital: '40 000 €',
  siren: '994 377 208',
  siret: '994 377 208 00016',
  rcs: 'RCS Charleville-Mézières',
  vat: 'FR38994377208',
  address: '34 Route Nationale, 08140 Douzy, France',
  publisher: 'Tommy Lambert, Président',
  email: 'contact@tblflow.com',
} as const;

export const HOST = {
  name: 'Cloudflare, Inc.',
  address: '101 Townsend St, San Francisco, CA 94107, USA',
} as const;

/** Payment processor, named in both the privacy policy and the CGVU. The EU
 * entity is the one a French SAS contracts with — confirm against the Stripe
 * dashboard's own legal entity before this is filed anywhere binding. */
export const PSP = {
  name: 'Stripe Payments Europe, Ltd.',
  address: '1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irlande',
} as const;

/**
 * Shown at the top of the legal notice and the CGVU on every non-French route.
 * Empty on `fr`, where the text below simply is the authoritative one.
 */
export const AUTHORITATIVE_FR_NOTE: Record<Locale, string> = {
  de: 'Höflichkeitsübersetzung. Rechtlich verbindlich ist ausschließlich die französische Fassung.',
  en: 'Courtesy translation. Only the French version is legally authoritative.',
  es: 'Traducción de cortesía. Solo la versión francesa tiene valor legal.',
  fr: '',
  it: 'Traduzione di cortesia. Fa fede unicamente la versione francese.',
  ja: '参考訳です。法的に効力を持つのはフランス語版のみです。',
  ru: 'Перевод для удобства. Юридическую силу имеет только французская версия.',
  tr: 'Nezaket çevirisidir. Hukuken yalnızca Fransızca sürüm geçerlidir.',
  uk: 'Переклад для зручності. Юридичну силу має лише французька версія.',
  zh: '此为便利性译文。仅法语版本具有法律效力。',
};

/** Kept as a separate export because both legal.astro and terms.astro show it. */
export const LEGAL_NOTICE_NOTE = AUTHORITATIVE_FR_NOTE;
export const TERMS_NOTE = AUTHORITATIVE_FR_NOTE;

export const LEGAL_NOTICE_TITLE: Record<Locale, string> = {
  de: 'Impressum', en: 'Legal notice', es: 'Aviso legal', fr: 'Mentions légales',
  it: 'Note legali', ja: '法的表示', ru: 'Правовая информация', tr: 'Yasal bilgiler',
  uk: 'Правова інформація', zh: '法律声明',
};

/**
 * Legal notice. French is the authoritative body; the other nine are courtesy
 * translations of it, shown under `AUTHORITATIVE_FR_NOTE`. The company
 * identifiers (SIREN, SIRET, VAT, RCS) are interpolated, never translated.
 */
export const LEGAL_NOTICE_SECTIONS: Record<Locale, LegalSection[]> = {
  fr: [
    {
      heading: 'Éditeur du site',
      body: [
        `${COMPANY.name}, ${COMPANY.form} au capital de ${COMPANY.capital}, immatriculée au ${COMPANY.rcs} sous le numéro ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Numéro de TVA intracommunautaire : ${COMPANY.vat}.`,
        `Siège social : ${COMPANY.address}.`,
        `Directeur de la publication : ${COMPANY.publisher}.`,
        `Contact : ${COMPANY.email}.`,
      ],
    },
    { heading: 'Hébergement', body: [`Le site est hébergé par ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Propriété intellectuelle',
      body: [
        "L'ensemble des éléments de ce site (textes, logos, illustrations, structure) est la propriété de SPACE UNITY ou de ses concédants, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      ],
    },
    {
      heading: 'Responsabilité',
      body: [
        "SPACE UNITY s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. SPACE UNITY ne saurait être tenue responsable des erreurs, omissions ou de l'indisponibilité temporaire du site.",
      ],
    },
    {
      heading: 'Données personnelles',
      body: [
        "Les données à caractère personnel traitées via ce site sont décrites dans la politique de confidentialité, accessible depuis le pied de page. L'utilisation des cookies est détaillée dans la politique cookies, également accessible depuis le pied de page.",
      ],
    },
    {
      heading: 'Droit applicable',
      body: [
        'Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.',
      ],
    },
  ],
  de: [
    {
      heading: 'Herausgeber der Website',
      body: [
        `${COMPANY.name}, ${COMPANY.form} mit einem Kapital von ${COMPANY.capital}, eingetragen im ${COMPANY.rcs} unter der Nummer ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Umsatzsteuer-Identifikationsnummer: ${COMPANY.vat}.`,
        `Sitz: ${COMPANY.address}.`,
        `Verantwortlich für die Veröffentlichung: ${COMPANY.publisher}.`,
        `Kontakt: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Hosting', body: [`Die Website wird gehostet von ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Geistiges Eigentum',
      body: [
        'Sämtliche Bestandteile dieser Website (Texte, Logos, Illustrationen, Struktur) sind Eigentum von SPACE UNITY oder ihrer Lizenzgeber, sofern nicht anders angegeben. Jede vollständige oder teilweise Vervielfältigung oder Wiedergabe ohne vorherige schriftliche Genehmigung ist untersagt.',
      ],
    },
    {
      heading: 'Haftung',
      body: [
        'SPACE UNITY bemüht sich um die Richtigkeit der auf dieser Website veröffentlichten Informationen, ohne Gewähr für Vollständigkeit. SPACE UNITY haftet nicht für Fehler, Auslassungen oder die vorübergehende Nichtverfügbarkeit der Website.',
      ],
    },
    {
      heading: 'Personenbezogene Daten',
      body: [
        'Die über diese Website verarbeiteten personenbezogenen Daten sind in der Datenschutzerklärung beschrieben, die über die Fußzeile erreichbar ist. Die Verwendung von Cookies wird in der Cookie-Richtlinie erläutert, ebenfalls über die Fußzeile erreichbar.',
      ],
    },
    {
      heading: 'Anwendbares Recht',
      body: [
        'Diese Website und dieses Impressum unterliegen französischem Recht. Im Streitfall und mangels gütlicher Einigung sind ausschließlich die französischen Gerichte zuständig.',
      ],
    },
  ],
  en: [
    {
      heading: 'Site publisher',
      body: [
        `${COMPANY.name}, a ${COMPANY.form} with share capital of ${COMPANY.capital}, registered with the ${COMPANY.rcs} under number ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Intra-EU VAT number: ${COMPANY.vat}.`,
        `Registered office: ${COMPANY.address}.`,
        `Publication director: ${COMPANY.publisher}.`,
        `Contact: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Hosting', body: [`The site is hosted by ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Intellectual property',
      body: [
        'All elements of this site (text, logos, illustrations, structure) are the property of SPACE UNITY or its licensors unless stated otherwise. Any reproduction or representation, in whole or in part, without prior written permission is prohibited.',
      ],
    },
    {
      heading: 'Liability',
      body: [
        'SPACE UNITY endeavours to ensure the accuracy of the information published on this site, without warranting that it is exhaustive. SPACE UNITY cannot be held liable for errors, omissions or the temporary unavailability of the site.',
      ],
    },
    {
      heading: 'Personal data',
      body: [
        'Personal data processed through this site is described in the privacy policy, reachable from the footer. The use of cookies is detailed in the cookie policy, also reachable from the footer.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'This site and this legal notice are governed by French law. In the event of a dispute, and failing an amicable resolution, the French courts shall have sole jurisdiction.',
      ],
    },
  ],
  es: [
    {
      heading: 'Editor del sitio',
      body: [
        `${COMPANY.name}, ${COMPANY.form} con un capital de ${COMPANY.capital}, inscrita en el ${COMPANY.rcs} con el número ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Número de IVA intracomunitario: ${COMPANY.vat}.`,
        `Domicilio social: ${COMPANY.address}.`,
        `Director de la publicación: ${COMPANY.publisher}.`,
        `Contacto: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Alojamiento', body: [`El sitio está alojado por ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Propiedad intelectual',
      body: [
        'Todos los elementos de este sitio (textos, logotipos, ilustraciones, estructura) son propiedad de SPACE UNITY o de sus licenciantes, salvo indicación en contrario. Queda prohibida toda reproducción o representación, total o parcial, sin autorización previa por escrito.',
      ],
    },
    {
      heading: 'Responsabilidad',
      body: [
        'SPACE UNITY procura garantizar la exactitud de la información publicada en este sitio, sin garantía de exhaustividad. SPACE UNITY no puede ser considerada responsable de errores, omisiones ni de la indisponibilidad temporal del sitio.',
      ],
    },
    {
      heading: 'Datos personales',
      body: [
        'Los datos personales tratados a través de este sitio se describen en la política de privacidad, accesible desde el pie de página. El uso de cookies se detalla en la política de cookies, también accesible desde el pie de página.',
      ],
    },
    {
      heading: 'Legislación aplicable',
      body: [
        'Este sitio y el presente aviso legal se rigen por el derecho francés. En caso de litigio, y a falta de resolución amistosa, los tribunales franceses serán los únicos competentes.',
      ],
    },
  ],
  it: [
    {
      heading: 'Editore del sito',
      body: [
        `${COMPANY.name}, ${COMPANY.form} con capitale di ${COMPANY.capital}, iscritta al ${COMPANY.rcs} con il numero ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Partita IVA intracomunitaria: ${COMPANY.vat}.`,
        `Sede legale: ${COMPANY.address}.`,
        `Direttore della pubblicazione: ${COMPANY.publisher}.`,
        `Contatto: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Hosting', body: [`Il sito è ospitato da ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Proprietà intellettuale',
      body: [
        'Tutti gli elementi di questo sito (testi, loghi, illustrazioni, struttura) sono di proprietà di SPACE UNITY o dei suoi licenzianti, salvo diversa indicazione. È vietata qualsiasi riproduzione o rappresentazione, totale o parziale, senza previa autorizzazione scritta.',
      ],
    },
    {
      heading: 'Responsabilità',
      body: [
        "SPACE UNITY si adopera per garantire l'esattezza delle informazioni pubblicate su questo sito, senza garanzia di completezza. SPACE UNITY non può essere ritenuta responsabile di errori, omissioni o dell'indisponibilità temporanea del sito.",
      ],
    },
    {
      heading: 'Dati personali',
      body: [
        "I dati personali trattati tramite questo sito sono descritti nell'informativa sulla privacy, accessibile dal piè di pagina. L'uso dei cookie è dettagliato nella politica sui cookie, anch'essa accessibile dal piè di pagina.",
      ],
    },
    {
      heading: 'Legge applicabile',
      body: [
        'Il presente sito e le presenti note legali sono soggetti al diritto francese. In caso di controversia, e in mancanza di soluzione amichevole, saranno competenti in via esclusiva i tribunali francesi.',
      ],
    },
  ],
  ja: [
    {
      heading: 'サイト運営者',
      body: [
        `${COMPANY.name}（${COMPANY.form}、資本金 ${COMPANY.capital}）。${COMPANY.rcs} に番号 ${COMPANY.siren} で登録（SIRET ${COMPANY.siret}）。`,
        `EU 域内付加価値税番号：${COMPANY.vat}`,
        `本店所在地：${COMPANY.address}`,
        `発行責任者：${COMPANY.publisher}`,
        `連絡先：${COMPANY.email}`,
      ],
    },
    { heading: 'ホスティング', body: [`本サイトは ${HOST.name}（${HOST.address}）がホスティングしています。`] },
    {
      heading: '知的財産権',
      body: [
        '本サイトを構成するすべての要素（テキスト、ロゴ、図版、構成）は、別段の記載がない限り SPACE UNITY またはそのライセンサーに帰属します。事前の書面による許可なく、その全部または一部を複製・公衆送信することを禁じます。',
      ],
    },
    {
      heading: '免責',
      body: [
        'SPACE UNITY は本サイトに掲載する情報の正確性の確保に努めますが、網羅性を保証するものではありません。誤り、記載漏れ、または本サイトの一時的な利用不能について、SPACE UNITY は責任を負いません。',
      ],
    },
    {
      heading: '個人データ',
      body: [
        '本サイトを通じて取り扱う個人データについては、フッターからアクセスできるプライバシーポリシーに記載しています。Cookie の利用については、同じくフッターからアクセスできる Cookie ポリシーに詳述しています。',
      ],
    },
    {
      heading: '準拠法',
      body: [
        '本サイトおよび本法的表示はフランス法に準拠します。紛争が生じ、友好的な解決に至らない場合、フランスの裁判所が専属的管轄権を有します。',
      ],
    },
  ],
  ru: [
    {
      heading: 'Издатель сайта',
      body: [
        `${COMPANY.name}, ${COMPANY.form} с капиталом ${COMPANY.capital}, зарегистрирована в ${COMPANY.rcs} под номером ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Внутриевропейский номер НДС: ${COMPANY.vat}.`,
        `Юридический адрес: ${COMPANY.address}.`,
        `Ответственный за публикацию: ${COMPANY.publisher}.`,
        `Контакт: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Хостинг', body: [`Сайт размещён у ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Интеллектуальная собственность',
      body: [
        'Все элементы этого сайта (тексты, логотипы, иллюстрации, структура) принадлежат SPACE UNITY или её лицензиарам, если не указано иное. Любое воспроизведение или представление, полностью или частично, без предварительного письменного разрешения запрещено.',
      ],
    },
    {
      heading: 'Ответственность',
      body: [
        'SPACE UNITY стремится обеспечить точность публикуемой на сайте информации, не гарантируя её полноты. SPACE UNITY не несёт ответственности за ошибки, пропуски или временную недоступность сайта.',
      ],
    },
    {
      heading: 'Персональные данные',
      body: [
        'Персональные данные, обрабатываемые через этот сайт, описаны в политике конфиденциальности, доступной из подвала страницы. Использование cookie подробно описано в политике cookie, также доступной из подвала.',
      ],
    },
    {
      heading: 'Применимое право',
      body: [
        'Настоящий сайт и настоящая правовая информация подчиняются французскому праву. В случае спора и при отсутствии мирного урегулирования исключительной компетенцией обладают французские суды.',
      ],
    },
  ],
  tr: [
    {
      heading: 'Site yayıncısı',
      body: [
        `${COMPANY.name}, ${COMPANY.capital} sermayeli ${COMPANY.form}, ${COMPANY.rcs} nezdinde ${COMPANY.siren} numarasıyla kayıtlı (SIRET ${COMPANY.siret}).`,
        `AB içi KDV numarası: ${COMPANY.vat}.`,
        `Merkez adresi: ${COMPANY.address}.`,
        `Yayın sorumlusu: ${COMPANY.publisher}.`,
        `İletişim: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Barındırma', body: [`Site, ${HOST.name} tarafından barındırılmaktadır (${HOST.address}).`] },
    {
      heading: 'Fikrî mülkiyet',
      body: [
        'Bu sitenin tüm unsurları (metinler, logolar, görseller, yapı), aksi belirtilmedikçe SPACE UNITY’nin veya lisans verenlerinin mülkiyetindedir. Önceden yazılı izin alınmaksızın tamamen veya kısmen çoğaltılması ya da temsil edilmesi yasaktır.',
      ],
    },
    {
      heading: 'Sorumluluk',
      body: [
        'SPACE UNITY, bu sitede yayımlanan bilgilerin doğruluğunu sağlamaya çalışır, ancak eksiksiz olduğunu garanti etmez. SPACE UNITY; hatalardan, eksikliklerden veya sitenin geçici olarak erişilemez olmasından sorumlu tutulamaz.',
      ],
    },
    {
      heading: 'Kişisel veriler',
      body: [
        'Bu site aracılığıyla işlenen kişisel veriler, sayfa altından erişilebilen gizlilik politikasında açıklanmıştır. Çerez kullanımı, yine sayfa altından erişilebilen çerez politikasında ayrıntılandırılmıştır.',
      ],
    },
    {
      heading: 'Uygulanacak hukuk',
      body: [
        'Bu site ve işbu yasal bilgiler Fransız hukukuna tabidir. Uyuşmazlık hâlinde ve dostane çözüme ulaşılamazsa, münhasıran Fransız mahkemeleri yetkilidir.',
      ],
    },
  ],
  uk: [
    {
      heading: 'Видавець сайту',
      body: [
        `${COMPANY.name}, ${COMPANY.form} з капіталом ${COMPANY.capital}, зареєстрована в ${COMPANY.rcs} під номером ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
        `Внутрішньоєвропейський номер ПДВ: ${COMPANY.vat}.`,
        `Юридична адреса: ${COMPANY.address}.`,
        `Відповідальний за публікацію: ${COMPANY.publisher}.`,
        `Контакт: ${COMPANY.email}.`,
      ],
    },
    { heading: 'Хостинг', body: [`Сайт розміщено у ${HOST.name}, ${HOST.address}.`] },
    {
      heading: 'Інтелектуальна власність',
      body: [
        'Усі елементи цього сайту (тексти, логотипи, ілюстрації, структура) належать SPACE UNITY або її ліцензіарам, якщо не зазначено інше. Будь-яке відтворення чи представлення, повністю або частково, без попереднього письмового дозволу заборонено.',
      ],
    },
    {
      heading: 'Відповідальність',
      body: [
        'SPACE UNITY прагне забезпечити точність інформації, що публікується на цьому сайті, не гарантуючи її вичерпності. SPACE UNITY не несе відповідальності за помилки, упущення чи тимчасову недоступність сайту.',
      ],
    },
    {
      heading: 'Персональні дані',
      body: [
        'Персональні дані, які обробляються через цей сайт, описані в політиці конфіденційності, доступній із підвалу сторінки. Використання файлів cookie докладно описано в політиці cookie, також доступній із підвалу.',
      ],
    },
    {
      heading: 'Застосовне право',
      body: [
        'Цей сайт і ця правова інформація підпорядковуються французькому праву. У разі спору та за відсутності мирного врегулювання виключну компетенцію мають французькі суди.',
      ],
    },
  ],
  zh: [
    {
      heading: '网站出版者',
      body: [
        `${COMPANY.name}，${COMPANY.form}，注册资本 ${COMPANY.capital}，在 ${COMPANY.rcs} 以 ${COMPANY.siren} 号注册（SIRET ${COMPANY.siret}）。`,
        `欧盟内增值税号：${COMPANY.vat}。`,
        `注册地址：${COMPANY.address}。`,
        `出版负责人：${COMPANY.publisher}。`,
        `联系方式：${COMPANY.email}。`,
      ],
    },
    { heading: '主机托管', body: [`本站由 ${HOST.name} 托管，地址 ${HOST.address}。`] },
    {
      heading: '知识产权',
      body: [
        '除另有说明外，本站的全部内容（文字、标识、插图、结构）均归 SPACE UNITY 或其许可方所有。未经事先书面许可，禁止全部或部分复制或展示。',
      ],
    },
    {
      heading: '责任',
      body: [
        'SPACE UNITY 力求确保本站所发布信息的准确性，但不保证其完整性。对于错误、遗漏或本站的临时不可用，SPACE UNITY 不承担责任。',
      ],
    },
    {
      heading: '个人数据',
      body: [
        '通过本站处理的个人数据在隐私政策中说明，可从页脚访问。Cookie 的使用详见 Cookie 政策，同样可从页脚访问。',
      ],
    },
    {
      heading: '适用法律',
      body: [
        '本站及本法律声明适用法国法律。发生争议且未能友好解决时，法国法院享有专属管辖权。',
      ],
    },
  ],
};

export const PRIVACY_TITLE: Record<Locale, string> = {
  de: 'Datenschutzerklärung', en: 'Privacy policy', es: 'Política de privacidad',
  fr: 'Politique de confidentialité', it: 'Informativa sulla privacy',
  ja: 'プライバシーポリシー', ru: 'Политика конфиденциальности',
  tr: 'Gizlilik politikası', uk: 'Політика конфіденційності', zh: '隐私政策',
};

export const PRIVACY_LEDE: Record<Locale, string> = {
  de: `Diese Seite beschreibt, welche Daten SPACE UNITY im Rahmen der Website tblflow.com und der Geschäftsbeziehung mit ihren Kunden (Abonnement, Abrechnung, Zahlung) verarbeitet, warum, und welche Rechte Sie haben. Sie deckt nicht die Daten ab, die Sie selbst in der TblFlow-Anwendung (app.tblflow.com) hosten: dort handelt SPACE UNITY nur als Auftragsverarbeiter, auf Grundlage eines gesonderten Auftragsverarbeitungsvertrags (AVV), erhältlich auf Anfrage unter ${COMPANY.email}.`,
  en: `This page describes the data SPACE UNITY processes for the tblflow.com site and for the commercial relationship with its customers (subscription, billing, payment), why, and the rights you have. It does not cover the data you host yourself in the TblFlow application (app.tblflow.com): there SPACE UNITY acts only as a processor, under a separate data processing agreement (DPA) available on request at ${COMPANY.email}.`,
  es: `Esta página describe los datos que SPACE UNITY trata en el marco del sitio tblflow.com y de la relación comercial con sus clientes (suscripción, facturación, pago), con qué fines, y los derechos que te asisten. No cubre los datos que alojas tú mismo en la aplicación TblFlow (app.tblflow.com): allí SPACE UNITY actúa únicamente como encargado del tratamiento, bajo un acuerdo de encargo (DPA) independiente, disponible bajo petición en ${COMPANY.email}.`,
  fr: `Cette page décrit les données que SPACE UNITY traite dans le cadre du site tblflow.com et de la relation commerciale avec ses clients (souscription, facturation, paiement), pourquoi, et les droits dont vous disposez. Elle ne couvre pas les données que vous hébergez vous-même dans l'application TblFlow (app.tblflow.com) : SPACE UNITY n'y agit qu'en qualité de sous-traitant, dans le cadre d'un accord de sous-traitance (DPA) distinct, disponible sur demande à ${COMPANY.email}.`,
  it: `Questa pagina descrive i dati che SPACE UNITY tratta nell'ambito del sito tblflow.com e del rapporto commerciale con i suoi clienti (sottoscrizione, fatturazione, pagamento), con quali finalità e quali diritti hai. Non copre i dati che ospiti tu stesso nell'applicazione TblFlow (app.tblflow.com): lì SPACE UNITY agisce solo come responsabile del trattamento, in base a un accordo di trattamento (DPA) distinto, disponibile su richiesta a ${COMPANY.email}.`,
  ja: `本ページでは、SPACE UNITY が tblflow.com のサイトおよび顧客との商取引関係（申込み、請求、決済）において取り扱うデータ、その目的、およびお客様の権利について説明します。TblFlow アプリケーション（app.tblflow.com）にお客様自身が保存するデータは対象外です。そちらで SPACE UNITY は処理者として行動するにとどまり、別途のデータ処理契約（DPA）に基づきます。DPA は ${COMPANY.email} にご請求いただけます。`,
  ru: `На этой странице описано, какие данные SPACE UNITY обрабатывает в рамках сайта tblflow.com и коммерческих отношений с клиентами (подписка, выставление счетов, оплата), зачем, и какие у вас есть права. Она не охватывает данные, которые вы сами размещаете в приложении TblFlow (app.tblflow.com): там SPACE UNITY выступает только обработчиком, на основании отдельного соглашения об обработке данных (DPA), доступного по запросу на ${COMPANY.email}.`,
  tr: `Bu sayfa, SPACE UNITY'nin tblflow.com sitesi ve müşterileriyle olan ticari ilişki (abonelik, faturalandırma, ödeme) kapsamında hangi verileri, neden işlediğini ve sahip olduğunuz hakları açıklar. TblFlow uygulamasında (app.tblflow.com) kendi barındırdığınız verileri kapsamaz: orada SPACE UNITY yalnızca veri işleyen sıfatıyla hareket eder ve bu, ${COMPANY.email} adresinden talep üzerine sağlanan ayrı bir veri işleme sözleşmesine (DPA) tabidir.`,
  uk: `Ця сторінка описує, які дані SPACE UNITY обробляє в межах сайту tblflow.com і комерційних відносин із клієнтами (підписка, виставлення рахунків, оплата), навіщо, і які у вас є права. Вона не охоплює дані, які ви самі розміщуєте в застосунку TblFlow (app.tblflow.com): там SPACE UNITY виступає лише обробником, на підставі окремої угоди про обробку даних (DPA), доступної на запит за адресою ${COMPANY.email}.`,
  zh: `本页说明 SPACE UNITY 在 tblflow.com 网站以及与客户的商业关系（订阅、开票、付款）范围内处理哪些数据、为何处理，以及您享有的权利。本页不涵盖您自行存放在 TblFlow 应用（app.tblflow.com）中的数据：在那里 SPACE UNITY 仅作为受托处理方行事，依据单独的数据处理协议（DPA），可通过 ${COMPANY.email} 索取。`,
};

/** Bump by hand whenever a PRIVACY_SECTIONS paragraph changes. */
export const PRIVACY_LAST_UPDATED: Record<Locale, string> = {
  de: 'Zuletzt aktualisiert: 1. September 2026.',
  en: 'Last updated: September 1, 2026.',
  es: 'Última actualización: 1 de septiembre de 2026.',
  fr: 'Dernière mise à jour : 1er septembre 2026.',
  it: 'Ultimo aggiornamento: 1º settembre 2026.',
  ja: '最終更新：2026 年 9 月 1 日',
  ru: 'Последнее обновление: 1 сентября 2026 г.',
  tr: 'Son güncelleme: 1 Eylül 2026.',
  uk: 'Останнє оновлення: 1 вересня 2026 р.',
  zh: '最后更新：2026 年 9 月 1 日。',
};

const PRIVACY_HEADINGS: Record<Locale, string[]> = {
  de: ['Verantwortlicher', 'Erhobene Daten', 'Zwecke und Rechtsgrundlagen', 'Empfänger der Daten', 'Speicherdauer', 'Datensicherheit', 'Ihre Rechte'],
  en: ['Data controller', 'Data we collect', 'Purposes and legal bases', 'Data recipients', 'Retention period', 'Data security', 'Your rights'],
  es: ['Responsable del tratamiento', 'Datos recogidos', 'Finalidades y bases legales', 'Destinatarios de los datos', 'Plazo de conservación', 'Seguridad de los datos', 'Tus derechos'],
  fr: ['Responsable du traitement', 'Données collectées', 'Finalités et bases légales', 'Destinataires des données', 'Durée de conservation', 'Sécurité des données', 'Vos droits'],
  it: ['Titolare del trattamento', 'Dati raccolti', 'Finalità e basi giuridiche', 'Destinatari dei dati', 'Periodo di conservazione', 'Sicurezza dei dati', 'I tuoi diritti'],
  ja: ['管理者', '収集するデータ', '目的と法的根拠', 'データの提供先', '保存期間', 'データの安全管理', 'お客様の権利'],
  ru: ['Оператор данных', 'Какие данные мы собираем', 'Цели и правовые основания', 'Получатели данных', 'Срок хранения', 'Безопасность данных', 'Ваши права'],
  tr: ['Veri sorumlusu', 'Topladığımız veriler', 'Amaçlar ve hukuki dayanaklar', 'Verilerin alıcıları', 'Saklama süresi', 'Veri güvenliği', 'Haklarınız'],
  uk: ['Контролер даних', 'Які дані ми збираємо', 'Цілі та правові підстави', 'Одержувачі даних', 'Строк зберігання', 'Безпека даних', 'Ваші права'],
  zh: ['数据控制者', '我们收集的数据', '目的与法律依据', '数据接收方', '保存期限', '数据安全', '您的权利'],
};

const PRIVACY_BODIES: Record<Locale, string[][]> = {
  de: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, eingetragen unter der Nummer ${COMPANY.siren} (${COMPANY.rcs}). Kontakt: ${COMPANY.email}.`,
      'SPACE UNITY hat keinen Datenschutzbeauftragten bestellt — ihre Größe verlangt das nicht. Jede Anfrage zu Ihren personenbezogenen Daten kann direkt an die obige Adresse gerichtet werden.',
    ],
    [
      'Die Website tblflow.com hat kein Anmeldeformular und kein Nutzerkonto: Registrierung und Anmeldung erfolgen in der Anwendung (app.tblflow.com).',
      'Wenn Sie einen kostenpflichtigen Tarif abonnieren, verarbeiten wir die für die Abrechnung nötigen Daten: E-Mail-Adresse, Name oder Firmenname, Rechnungsanschrift, Land, gegebenenfalls Umsatzsteuer-Identifikationsnummer, gebuchter Tarif und Abrechnungszyklus sowie Zahlungshistorie. Kartendaten werden direkt auf den Seiten unseres Zahlungsdienstleisters eingegeben: Sie laufen nicht über unsere Server, SPACE UNITY hat keinen Zugriff darauf und bewahrt keine Kopie auf.',
      'Eine Anzeigeeinstellung (helles oder dunkles Thema) wird lokal in Ihrem Browser gespeichert (localStorage). Sie verlässt Ihr Gerät nie und wird weder an SPACE UNITY noch an Dritte übermittelt.',
      'Wenn Sie in die Reichweitenmessung einwilligen (siehe Cookie-Richtlinie), erhebt Google Analytics 4 pseudonymisierte Nutzungsdaten: besuchte Seiten, Verweildauer, Gerätetyp, ungefährer Standort (Land/Region, nie die vollständige IP-Adresse — die IP-Anonymisierung ist aktiviert).',
      'Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die übermittelten Daten (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Beantwortung Ihrer Anfrage.',
    ],
    [
      'Reichweitenmessung (Google Analytics 4): auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), jederzeit widerrufbar über den Link „Cookies verwalten“ in der Fußzeile.',
      'Beantwortung von Kontaktanfragen: auf Grundlage des berechtigten Interesses an Support und Geschäftsbeziehung (Art. 6 Abs. 1 lit. f DSGVO).',
      'Verwaltung von Abonnements, Zahlungen und Rechnungen: auf Grundlage der Vertragserfüllung zwischen Ihnen und SPACE UNITY (Art. 6 Abs. 1 lit. b DSGVO). Die Aufbewahrung von Rechnungen und Buchungsbelegen stützt sich dagegen auf die Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).',
    ],
    [
      `${PSP.name} (${PSP.address}), als Zahlungsdienstleister, für die Abwicklung von Abonnements, Zahlungen, Rechnungsstellung und Erstattungen der kostenpflichtigen Tarife. Stripe handelt als eigenständiger Verantwortlicher für Betrugsprävention und die Erfüllung eigener regulatorischer Pflichten.`,
      'Google LLC (Google Analytics), nur wenn Sie in die Reichweitenmessung eingewilligt haben. Die Daten können von Google außerhalb der Europäischen Union verarbeitet werden; dieser Transfer stützt sich auf die Standardvertragsklauseln der Europäischen Kommission.',
      'Cloudflare, Inc., als technischer Hoster der Website und Anbieter der nativen Reichweitenmessung (Cloudflare Web Analytics), die keine Cookies setzt und keine identifizierbaren personenbezogenen Daten erhebt.',
      'Es werden keine Daten verkauft oder vermietet.',
    ],
    [
      'Die Daten aus Google Analytics 4 werden ab Erhebung 14 Monate aufbewahrt, entsprechend der für diese Website gewählten Konfiguration, und danach von Google automatisch gelöscht.',
      'Ihre Einwilligungsentscheidung wird lokal (localStorage) höchstens 6 Monate gespeichert, entsprechend den Empfehlungen der CNIL, oder bis Sie sie ändern oder die Browserdaten löschen.',
      'Rechnungen und Buchungsbelege werden zehn Jahre ab dem Ende des betreffenden Geschäftsjahres aufbewahrt, gemäß Artikel L123-22 des französischen Handelsgesetzbuchs.',
      'Konto- und Abonnementdaten werden für die Dauer des Abonnements aufbewahrt und danach gelöscht oder anonymisiert, vorbehaltlich der oben genannten gesetzlichen Aufbewahrungsfristen.',
    ],
    [
      'Die Website wird ausschließlich über HTTPS ausgeliefert und auf der Infrastruktur von Cloudflare gehostet, die die Verschlüsselung bei der Übertragung und den Schutz vor gängigen Netzwerkangriffen übernimmt. Die Website selbst speichert keine Konto- oder Zahlungsdaten.',
      `Kartendaten werden ausschließlich von ${PSP.name} verarbeitet, zertifiziert nach PCI-DSS Level 1; SPACE UNITY speichert keinerlei Kartendaten.`,
    ],
    [
      'Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit. Sie können Ihre Einwilligung außerdem jederzeit widerrufen, ohne dass die Rechtmäßigkeit der zuvor erfolgten Verarbeitung berührt wird.',
      `Zur Ausübung dieser Rechte kontaktieren Sie uns unter ${COMPANY.email}. Sie haben zudem das Recht, sich bei der CNIL (www.cnil.fr) oder Ihrer örtlichen Datenschutzbehörde zu beschweren.`,
    ],
  ],
  en: [
    [
      `${COMPANY.name}, a French ${COMPANY.form}, ${COMPANY.address}, registered as ${COMPANY.siren} (${COMPANY.rcs}). Contact: ${COMPANY.email}.`,
      'SPACE UNITY has not appointed a Data Protection Officer — its size does not require one. Any request about your personal data can be sent directly to the address above.',
    ],
    [
      'The tblflow.com site has no sign-up form or user account: subscribing and signing in happen in the application (app.tblflow.com).',
      'If you subscribe to a paid tier, we process the data needed for billing: email address, name or company name, billing address, country, VAT number where applicable, the tier and billing cycle you subscribed to, and payment history. Card details are entered directly on pages hosted by our payment processor: they do not pass through our servers, SPACE UNITY has no access to them and keeps no copy.',
      'A display preference (light or dark theme) is stored locally in your browser (localStorage). It never leaves your device and is never sent to SPACE UNITY or any third party.',
      'If you consent to analytics (see the cookie policy), Google Analytics 4 collects pseudonymized browsing data: pages visited, time on page, device type, approximate location (country/region — never the full IP address, IP anonymization is enabled).',
      'If you contact us by email, we process the data you send us (email address, message content) solely to answer your request.',
    ],
    [
      'Analytics (Google Analytics 4): based on your consent (GDPR Article 6.1.a), revocable at any time via the "Manage cookies" link in the footer.',
      'Responding to contact requests: based on the legitimate interest of providing support and managing the business relationship (GDPR Article 6.1.f).',
      'Managing subscriptions, payments and billing: based on performance of the contract between you and SPACE UNITY (GDPR Article 6.1.b). Retaining invoices and accounting records rests instead on compliance with a legal obligation (GDPR Article 6.1.c).',
    ],
    [
      `${PSP.name} (${PSP.address}), as payment processor, to handle subscriptions, payments, billing and refunds for the paid tiers. Stripe acts as an independent controller for fraud prevention and for meeting its own regulatory obligations.`,
      "Google LLC (Google Analytics), only if you consented to analytics. Data may be processed by Google outside the European Union; this transfer is governed by the European Commission's standard contractual clauses.",
      "Cloudflare, Inc., as the site's technical host and provider of native analytics (Cloudflare Web Analytics), which sets no cookies and collects no personally identifiable data.",
      'No data is sold or rented to third parties.',
    ],
    [
      "Google Analytics 4 data is retained for 14 months from collection, per this site's configuration, then automatically deleted by Google.",
      'Your consent choice is stored locally (localStorage) for up to 6 months, per CNIL guidance, or until you change it or clear your browser data.',
      'Invoices and accounting records are retained for ten years from the close of the financial year concerned, as required by Article L123-22 of the French Commercial Code.',
      'Account and subscription data is retained for the duration of the subscription, then deleted or anonymized, subject to the statutory retention periods above.',
    ],
    [
      "The site is served exclusively over HTTPS and hosted on Cloudflare's infrastructure, which handles encryption in transit and protection against common network attacks. The site itself stores no account or payment data.",
      `Card details are handled exclusively by ${PSP.name}, certified PCI-DSS Level 1; no card data is stored by SPACE UNITY.`,
    ],
    [
      'Under the GDPR, you have the right to access, rectify, erase, restrict, object to, and port your data. You can also withdraw consent at any time without affecting the lawfulness of processing carried out before that withdrawal.',
      `To exercise these rights, contact us at ${COMPANY.email}. You also have the right to lodge a complaint with the CNIL (www.cnil.fr), or your local data protection authority.`,
    ],
  ],
  es: [
    [
      `${COMPANY.name}, ${COMPANY.form} francesa, ${COMPANY.address}, inscrita con el número ${COMPANY.siren} (${COMPANY.rcs}). Contacto: ${COMPANY.email}.`,
      'SPACE UNITY no ha designado un delegado de protección de datos (DPO): su tamaño no lo exige. Cualquier solicitud relativa a tus datos personales puede dirigirse directamente a la dirección anterior.',
    ],
    [
      'El sitio tblflow.com no tiene formulario de registro ni cuenta de usuario: la suscripción y el inicio de sesión se realizan en la aplicación (app.tblflow.com).',
      'Si contratas un plan de pago, tratamos los datos necesarios para la facturación: dirección de email, nombre o razón social, dirección de facturación, país, número de IVA cuando proceda, plan y ciclo de facturación contratados, e historial de pagos. Los datos de la tarjeta se introducen directamente en páginas alojadas por nuestro proveedor de pago: no pasan por nuestros servidores, SPACE UNITY no tiene acceso a ellos y no conserva ninguna copia.',
      'Una preferencia de visualización (tema claro u oscuro) se guarda localmente en tu navegador (localStorage). No sale nunca de tu dispositivo y no se envía ni a SPACE UNITY ni a terceros.',
      'Si consientes la medición de audiencia (véase la política de cookies), Google Analytics 4 recoge datos de navegación seudonimizados: páginas visitadas, duración de la visita, tipo de dispositivo, ubicación aproximada (país/región, nunca la dirección IP completa: la anonimización de IP está activada).',
      'Si nos contactas por email, tratamos los datos que nos envías (dirección de email, contenido del mensaje) con el único fin de responder a tu solicitud.',
    ],
    [
      'Medición de audiencia (Google Analytics 4): sobre la base de tu consentimiento (artículo 6.1.a del RGPD), revocable en cualquier momento mediante el enlace «Gestionar cookies» del pie de página.',
      'Respuesta a solicitudes de contacto: sobre la base del interés legítimo en prestar soporte y gestionar la relación comercial (artículo 6.1.f del RGPD).',
      'Gestión de suscripciones, pagos y facturación: sobre la base de la ejecución del contrato que te vincula con SPACE UNITY (artículo 6.1.b del RGPD). La conservación de facturas y documentos contables se apoya, en cambio, en el cumplimiento de una obligación legal (artículo 6.1.c del RGPD).',
    ],
    [
      `${PSP.name} (${PSP.address}), como proveedor de pago, para el tratamiento de suscripciones, pagos, facturación y reembolsos de los planes de pago. Stripe actúa como responsable independiente en materia de prevención del fraude y cumplimiento de sus propias obligaciones regulatorias.`,
      'Google LLC (Google Analytics), únicamente si has consentido la medición de audiencia. Google puede tratar los datos fuera de la Unión Europea; esa transferencia se ampara en las cláusulas contractuales tipo de la Comisión Europea.',
      'Cloudflare, Inc., como alojamiento técnico del sitio y proveedor de la medición nativa (Cloudflare Web Analytics), que no deposita ninguna cookie ni recoge datos personales identificables.',
      'Ningún dato se vende ni se alquila a terceros.',
    ],
    [
      'Los datos de Google Analytics 4 se conservan 14 meses desde su recogida, conforme a la configuración elegida para este sitio, y después Google los elimina automáticamente.',
      'Tu elección de consentimiento se conserva localmente (localStorage) durante un máximo de 6 meses, conforme a las recomendaciones de la CNIL, o hasta que la modifiques o borres los datos de tu navegador.',
      'Las facturas y los documentos contables se conservan diez años desde el cierre del ejercicio correspondiente, conforme al artículo L123-22 del Código de Comercio francés.',
      'Los datos de cuenta y suscripción se conservan durante toda la vigencia de la suscripción y después se eliminan o se anonimizan, sin perjuicio de los plazos legales de conservación anteriores.',
    ],
    [
      'El sitio se sirve exclusivamente por HTTPS y se aloja en la infraestructura de Cloudflare, que se encarga del cifrado en tránsito y de la protección frente a ataques de red habituales. El sitio en sí no almacena datos de cuenta ni de pago.',
      `Los datos bancarios los trata exclusivamente ${PSP.name}, certificado PCI-DSS nivel 1; SPACE UNITY no almacena ningún dato de tarjeta.`,
    ],
    [
      'Conforme al RGPD, tienes derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad de tus datos. También puedes retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior.',
      `Para ejercer estos derechos, contáctanos en ${COMPANY.email}. También tienes derecho a presentar una reclamación ante la CNIL (www.cnil.fr) o ante tu autoridad de protección de datos local.`,
    ],
  ],
  fr: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, immatriculée sous le numéro ${COMPANY.siren} (${COMPANY.rcs}). Contact : ${COMPANY.email}.`,
      "SPACE UNITY n'a pas désigné de délégué à la protection des données (DPO) — sa taille ne l'y oblige pas. Toute demande relative à vos données personnelles peut être adressée directement à l'adresse ci-dessus.",
    ],
    [
      "Le site tblflow.com ne comporte aucun formulaire d'inscription ni de compte utilisateur : la souscription et la connexion s'effectuent depuis l'application (app.tblflow.com).",
      "Si vous souscrivez un palier payant, nous traitons les données nécessaires à la facturation : adresse email, nom ou raison sociale, adresse de facturation, pays, numéro de TVA le cas échéant, palier et cycle de facturation souscrits, et historique des paiements. Les coordonnées de carte bancaire sont saisies directement sur les pages hébergées par notre prestataire de paiement : elles ne transitent pas par nos serveurs, SPACE UNITY n'y a pas accès et n'en conserve aucune copie.",
      "Une préférence d'affichage (thème clair ou sombre) est enregistrée localement dans votre navigateur (localStorage). Cette information reste sur votre appareil et n'est jamais transmise à SPACE UNITY ni à un tiers.",
      "Si vous consentez à la mesure d'audience (voir la politique cookies), Google Analytics 4 collecte des données de navigation pseudonymisées : pages visitées, durée de visite, type d'appareil, provenance approximative (pays/région, jamais l'adresse IP complète — l'anonymisation IP est activée).",
      'Si vous nous contactez par email, nous traitons les données que vous nous transmettez (adresse email, contenu du message) dans le seul but de répondre à votre demande.',
    ],
    [
      "Mesure d'audience (Google Analytics 4) : sur la base de votre consentement (article 6.1.a du RGPD), révocable à tout moment via le lien « Gérer les cookies » en pied de page.",
      "Réponse aux demandes de contact : sur la base de l'intérêt légitime à assurer le support et la relation commerciale (article 6.1.f du RGPD).",
      "Gestion des souscriptions, des paiements et de la facturation : sur la base de l'exécution du contrat vous liant à SPACE UNITY (article 6.1.b du RGPD). La conservation des factures et pièces comptables repose quant à elle sur le respect d'une obligation légale (article 6.1.c du RGPD).",
    ],
    [
      `${PSP.name} (${PSP.address}), en tant que prestataire de paiement, pour le traitement des souscriptions, des paiements, de la facturation et des remboursements des paliers payants. Stripe agit en qualité de responsable de traitement autonome pour la prévention de la fraude et le respect de ses propres obligations réglementaires.`,
      "Google LLC (Google Analytics), uniquement si vous avez consenti à la mesure d'audience. Les données peuvent être traitées par Google en dehors de l'Union européenne ; ce transfert est encadré par les clauses contractuelles types de la Commission européenne.",
      "Cloudflare, Inc., en tant qu'hébergeur technique du site et fournisseur de la mesure d'audience native (Cloudflare Web Analytics), qui ne dépose aucun cookie et ne collecte aucune donnée personnelle identifiable.",
      'Aucune donnée n’est vendue ni louée à des tiers.',
    ],
    [
      'Les données Google Analytics 4 sont conservées 14 mois à compter de la collecte, conformément à la configuration retenue pour ce site, puis supprimées automatiquement par Google.',
      'Votre choix de consentement est conservé localement (localStorage) pendant 6 mois maximum, conformément aux recommandations de la CNIL, ou jusqu’à ce que vous le modifiiez ou effaciez les données de votre navigateur.',
      "Les factures et pièces comptables sont conservées dix ans à compter de la clôture de l'exercice concerné, conformément à l'article L123-22 du Code de commerce.",
      "Les données de compte et d'abonnement sont conservées pendant toute la durée de l'abonnement, puis supprimées ou anonymisées, sous réserve des durées légales de conservation ci-dessus.",
    ],
    [
      'Le site est servi exclusivement en HTTPS et hébergé sur l’infrastructure Cloudflare, qui assure le chiffrement en transit et la protection contre les attaques réseau courantes. Le site lui-même ne stocke aucune donnée de compte ni de paiement.',
      `Les coordonnées bancaires sont traitées exclusivement par ${PSP.name}, certifié PCI-DSS niveau 1 ; aucune donnée de carte n’est stockée par SPACE UNITY.`,
    ],
    [
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez également retirer votre consentement à tout moment sans que cela affecte la licéité des traitements antérieurs.",
      `Pour exercer ces droits, contactez-nous à ${COMPANY.email}. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
    ],
  ],
  it: [
    [
      `${COMPANY.name}, ${COMPANY.form} francese, ${COMPANY.address}, iscritta con il numero ${COMPANY.siren} (${COMPANY.rcs}). Contatto: ${COMPANY.email}.`,
      'SPACE UNITY non ha nominato un responsabile della protezione dei dati (DPO): le sue dimensioni non lo richiedono. Qualsiasi richiesta relativa ai tuoi dati personali può essere inviata direttamente all\'indirizzo sopra indicato.',
    ],
    [
      "Il sito tblflow.com non ha moduli di registrazione né account utente: la sottoscrizione e l'accesso avvengono nell'applicazione (app.tblflow.com).",
      "Se sottoscrivi un piano a pagamento, trattiamo i dati necessari alla fatturazione: indirizzo email, nome o ragione sociale, indirizzo di fatturazione, paese, partita IVA ove applicabile, piano e ciclo di fatturazione sottoscritti e storico dei pagamenti. I dati della carta vengono inseriti direttamente su pagine ospitate dal nostro fornitore di pagamento: non transitano dai nostri server, SPACE UNITY non vi ha accesso e non ne conserva copia.",
      "Una preferenza di visualizzazione (tema chiaro o scuro) viene salvata localmente nel tuo browser (localStorage). Non lascia mai il tuo dispositivo e non viene inviata né a SPACE UNITY né a terzi.",
      "Se acconsenti alla misurazione del traffico (vedi la politica sui cookie), Google Analytics 4 raccoglie dati di navigazione pseudonimizzati: pagine visitate, durata della visita, tipo di dispositivo, posizione approssimativa (paese/regione, mai l'indirizzo IP completo: l'anonimizzazione IP è attiva).",
      'Se ci contatti via email, trattiamo i dati che ci invii (indirizzo email, contenuto del messaggio) al solo scopo di rispondere alla tua richiesta.',
    ],
    [
      'Misurazione del traffico (Google Analytics 4): sulla base del tuo consenso (articolo 6.1.a del GDPR), revocabile in qualsiasi momento tramite il link «Gestisci i cookie» nel piè di pagina.',
      'Risposta alle richieste di contatto: sulla base del legittimo interesse a fornire supporto e gestire il rapporto commerciale (articolo 6.1.f del GDPR).',
      "Gestione delle sottoscrizioni, dei pagamenti e della fatturazione: sulla base dell'esecuzione del contratto che ti lega a SPACE UNITY (articolo 6.1.b del GDPR). La conservazione di fatture e documenti contabili si fonda invece sul rispetto di un obbligo legale (articolo 6.1.c del GDPR).",
    ],
    [
      `${PSP.name} (${PSP.address}), in qualità di fornitore di pagamento, per la gestione delle sottoscrizioni, dei pagamenti, della fatturazione e dei rimborsi dei piani a pagamento. Stripe agisce come titolare autonomo per la prevenzione delle frodi e il rispetto dei propri obblighi normativi.`,
      "Google LLC (Google Analytics), solo se hai acconsentito alla misurazione del traffico. I dati possono essere trattati da Google al di fuori dell'Unione europea; tale trasferimento è disciplinato dalle clausole contrattuali tipo della Commissione europea.",
      'Cloudflare, Inc., in qualità di host tecnico del sito e fornitore della misurazione nativa (Cloudflare Web Analytics), che non deposita alcun cookie e non raccoglie dati personali identificabili.',
      'Nessun dato viene venduto o affittato a terzi.',
    ],
    [
      'I dati di Google Analytics 4 sono conservati 14 mesi dalla raccolta, secondo la configurazione scelta per questo sito, e poi eliminati automaticamente da Google.',
      'La tua scelta di consenso è conservata localmente (localStorage) per un massimo di 6 mesi, secondo le raccomandazioni della CNIL, o finché non la modifichi o cancelli i dati del browser.',
      "Le fatture e i documenti contabili sono conservati dieci anni dalla chiusura dell'esercizio interessato, ai sensi dell'articolo L123-22 del Codice di commercio francese.",
      'I dati di account e abbonamento sono conservati per tutta la durata dell\'abbonamento, poi eliminati o anonimizzati, fatti salvi i termini legali di conservazione sopra indicati.',
    ],
    [
      "Il sito è servito esclusivamente in HTTPS e ospitato sull'infrastruttura Cloudflare, che garantisce la cifratura in transito e la protezione dagli attacchi di rete più comuni. Il sito in sé non memorizza dati di account né di pagamento.",
      `I dati bancari sono trattati esclusivamente da ${PSP.name}, certificato PCI-DSS livello 1; nessun dato di carta è conservato da SPACE UNITY.`,
    ],
    [
      'Ai sensi del GDPR hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei tuoi dati. Puoi inoltre revocare il consenso in qualsiasi momento, senza che ciò pregiudichi la liceità dei trattamenti precedenti.',
      `Per esercitare questi diritti, scrivici a ${COMPANY.email}. Hai anche il diritto di presentare reclamo alla CNIL (www.cnil.fr) o alla tua autorità di protezione dei dati locale.`,
    ],
  ],
  ja: [
    [
      `${COMPANY.name}（${COMPANY.form}）、${COMPANY.address}、登録番号 ${COMPANY.siren}（${COMPANY.rcs}）。連絡先：${COMPANY.email}`,
      'SPACE UNITY はデータ保護責任者（DPO）を選任していません。その規模において選任義務がないためです。個人データに関するご請求は、上記の連絡先に直接お送りいただけます。',
    ],
    [
      'tblflow.com には登録フォームもユーザーアカウントもありません。申込みとログインはアプリケーション（app.tblflow.com）で行います。',
      '有料プランをご契約いただいた場合、請求に必要なデータを取り扱います。メールアドレス、氏名または法人名、請求先住所、国、該当する場合は付加価値税番号、契約したプランと請求サイクル、支払履歴です。カード情報は決済代行事業者がホストするページに直接入力され、当社のサーバーを経由しません。SPACE UNITY はカード情報にアクセスできず、その控えも保持しません。',
      '表示設定（ライト／ダークテーマ）はブラウザのローカル（localStorage）に保存されます。この情報は端末内に留まり、SPACE UNITY にも第三者にも送信されません。',
      'アクセス解析に同意いただいた場合（Cookie ポリシー参照）、Google Analytics 4 が仮名化された閲覧データを収集します。閲覧ページ、滞在時間、デバイス種別、おおよその所在地（国／地域。完全な IP アドレスは取得せず、IP 匿名化を有効化しています）。',
      'メールでお問い合わせいただいた場合、いただいたデータ（メールアドレス、本文）を、ご依頼への回答のためだけに取り扱います。',
    ],
    [
      'アクセス解析（Google Analytics 4）：お客様の同意に基づきます（GDPR 第 6 条 1 項 a）。フッターの「Cookie 設定」からいつでも撤回できます。',
      'お問い合わせへの回答：サポート提供と取引関係の維持という正当な利益に基づきます（GDPR 第 6 条 1 項 f）。',
      '申込み、決済、請求の管理：お客様と SPACE UNITY との契約の履行に基づきます（GDPR 第 6 条 1 項 b）。請求書および会計帳簿の保存は、法的義務の遵守に基づきます（GDPR 第 6 条 1 項 c）。',
    ],
    [
      `${PSP.name}（${PSP.address}）。決済代行事業者として、有料プランの申込み、決済、請求、返金の処理を行います。Stripe は、不正防止および自社の規制上の義務の遵守については、独立した管理者として行動します。`,
      'Google LLC（Google Analytics）。アクセス解析に同意いただいた場合に限ります。データは欧州連合域外で Google により処理される場合があり、その移転は欧州委員会の標準契約条項により規律されます。',
      'Cloudflare, Inc.。本サイトの技術的なホスティング事業者であり、ネイティブのアクセス解析（Cloudflare Web Analytics）の提供者です。Cookie を設置せず、識別可能な個人データを収集しません。',
      'データを第三者に販売または貸与することはありません。',
    ],
    [
      'Google Analytics 4 のデータは、本サイトの設定に従い収集から 14 か月保存され、その後 Google により自動的に削除されます。',
      'お客様の同意の選択は、CNIL の勧告に従い、ローカル（localStorage）に最長 6 か月保存されます。変更されるか、ブラウザのデータを消去された場合はその時点までです。',
      '請求書および会計帳簿は、フランス商法典 L123-22 条に従い、該当会計年度の締めから 10 年間保存します。',
      'アカウントおよび契約に関するデータは契約期間中保存し、その後、上記の法定保存期間を留保のうえ、削除または匿名化します。',
    ],
    [
      '本サイトは HTTPS のみで配信され、Cloudflare のインフラ上でホストされています。Cloudflare が転送時の暗号化と一般的なネットワーク攻撃からの保護を担います。サイト自体はアカウント情報も決済情報も保存しません。',
      `カード情報は PCI-DSS レベル 1 認証を受けた ${PSP.name} のみが取り扱い、SPACE UNITY はカードデータを一切保存しません。`,
    ],
    [
      'GDPR に基づき、お客様はご自身のデータについて、アクセス、訂正、消去、処理の制限、異議申立て、およびポータビリティの権利を有します。また、いつでも同意を撤回でき、それ以前に行われた処理の適法性には影響しません。',
      `これらの権利の行使は ${COMPANY.email} までご連絡ください。CNIL（www.cnil.fr）またはお住まいの国のデータ保護当局に苦情を申し立てる権利もあります。`,
    ],
  ],
  ru: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, зарегистрирована под номером ${COMPANY.siren} (${COMPANY.rcs}). Контакт: ${COMPANY.email}.`,
      'SPACE UNITY не назначала специалиста по защите данных (DPO) — её размер этого не требует. Любой запрос о ваших персональных данных можно направить напрямую по адресу выше.',
    ],
    [
      'На сайте tblflow.com нет ни формы регистрации, ни учётной записи: подписка и вход выполняются в приложении (app.tblflow.com).',
      'Если вы оформляете платный тариф, мы обрабатываем данные, необходимые для выставления счетов: адрес электронной почты, имя или наименование организации, адрес для счетов, страну, при необходимости номер НДС, выбранный тариф и цикл оплаты, историю платежей. Данные банковской карты вводятся непосредственно на страницах, размещённых нашим платёжным провайдером: они не проходят через наши серверы, у SPACE UNITY нет к ним доступа и она не хранит их копий.',
      'Настройка отображения (светлая или тёмная тема) сохраняется локально в вашем браузере (localStorage). Она не покидает устройство и не передаётся ни SPACE UNITY, ни третьим лицам.',
      'Если вы согласились на аналитику (см. политику cookie), Google Analytics 4 собирает псевдонимизированные данные о просмотре: посещённые страницы, длительность визита, тип устройства, приблизительное местоположение (страна/регион — полный IP-адрес никогда, анонимизация IP включена).',
      'Если вы пишете нам по электронной почте, мы обрабатываем переданные вами данные (адрес электронной почты, содержание письма) исключительно для ответа на ваш запрос.',
    ],
    [
      'Аналитика (Google Analytics 4): на основании вашего согласия (статья 6.1.a GDPR), отзываемого в любой момент по ссылке «Настройки cookie» в подвале страницы.',
      'Ответы на обращения: на основании законного интереса в оказании поддержки и ведении деловых отношений (статья 6.1.f GDPR).',
      'Управление подписками, платежами и выставлением счетов: на основании исполнения договора между вами и SPACE UNITY (статья 6.1.b GDPR). Хранение счетов и бухгалтерских документов опирается на исполнение правовой обязанности (статья 6.1.c GDPR).',
    ],
    [
      `${PSP.name} (${PSP.address}), как платёжный провайдер, для обработки подписок, платежей, выставления счетов и возвратов по платным тарифам. В части предотвращения мошенничества и соблюдения собственных регуляторных обязанностей Stripe выступает самостоятельным оператором.`,
      'Google LLC (Google Analytics) — только если вы согласились на аналитику. Данные могут обрабатываться Google за пределами Европейского союза; такая передача регулируется стандартными договорными положениями Европейской комиссии.',
      'Cloudflare, Inc., как технический хостер сайта и поставщик встроенной аналитики (Cloudflare Web Analytics), которая не устанавливает cookie и не собирает идентифицируемых персональных данных.',
      'Никакие данные не продаются и не сдаются в аренду третьим лицам.',
    ],
    [
      'Данные Google Analytics 4 хранятся 14 месяцев с момента сбора, в соответствии с выбранной для этого сайта конфигурацией, после чего автоматически удаляются Google.',
      'Ваш выбор согласия хранится локально (localStorage) не более 6 месяцев, согласно рекомендациям CNIL, либо до его изменения или очистки данных браузера.',
      'Счета и бухгалтерские документы хранятся десять лет с момента закрытия соответствующего финансового года, согласно статье L123-22 Коммерческого кодекса Франции.',
      'Данные учётной записи и подписки хранятся в течение всего срока подписки, затем удаляются или анонимизируются, с учётом установленных законом сроков хранения выше.',
    ],
    [
      'Сайт отдаётся исключительно по HTTPS и размещён на инфраструктуре Cloudflare, которая обеспечивает шифрование при передаче и защиту от распространённых сетевых атак. Сам сайт не хранит ни данных учётной записи, ни платёжных данных.',
      `Данные банковских карт обрабатывает исключительно ${PSP.name}, сертифицированный по PCI-DSS уровня 1; SPACE UNITY не хранит никаких карточных данных.`,
    ],
    [
      'В соответствии с GDPR вы имеете право на доступ, исправление, удаление, ограничение обработки, возражение и переносимость ваших данных. Вы также можете отозвать согласие в любой момент, что не затрагивает законность обработки, совершённой до отзыва.',
      `Для реализации этих прав напишите нам на ${COMPANY.email}. Вы также вправе подать жалобу в CNIL (www.cnil.fr) или в местный орган по защите данных.`,
    ],
  ],
  tr: [
    [
      `${COMPANY.name}, Fransız ${COMPANY.form}, ${COMPANY.address}, ${COMPANY.siren} numarasıyla kayıtlı (${COMPANY.rcs}). İletişim: ${COMPANY.email}.`,
      'SPACE UNITY bir veri koruma görevlisi (DPO) atamamıştır — büyüklüğü bunu gerektirmez. Kişisel verilerinize ilişkin her talep, doğrudan yukarıdaki adrese iletilebilir.',
    ],
    [
      'tblflow.com sitesinde kayıt formu veya kullanıcı hesabı yoktur: abonelik ve giriş, uygulama (app.tblflow.com) üzerinden yapılır.',
      'Ücretli bir pakete abone olursanız, faturalandırma için gerekli verileri işleriz: e-posta adresi, ad veya şirket unvanı, fatura adresi, ülke, varsa KDV numarası, abone olunan paket ve faturalandırma döngüsü ile ödeme geçmişi. Kart bilgileri doğrudan ödeme sağlayıcımızın barındırdığı sayfalara girilir: sunucularımızdan geçmez, SPACE UNITY bunlara erişemez ve kopyasını saklamaz.',
      'Bir görüntüleme tercihi (açık veya koyu tema) tarayıcınızda yerel olarak saklanır (localStorage). Cihazınızdan hiç çıkmaz ve ne SPACE UNITY’ye ne de üçüncü taraflara gönderilir.',
      'Trafik ölçümüne onay verirseniz (çerez politikasına bakın), Google Analytics 4 takma adlaştırılmış gezinme verilerini toplar: ziyaret edilen sayfalar, ziyaret süresi, cihaz türü, yaklaşık konum (ülke/bölge — tam IP adresi asla; IP anonimleştirme etkindir).',
      'Bize e-posta ile ulaşırsanız, ilettiğiniz verileri (e-posta adresi, mesaj içeriği) yalnızca talebinizi yanıtlamak için işleriz.',
    ],
    [
      'Trafik ölçümü (Google Analytics 4): onayınıza dayanır (GDPR madde 6.1.a); sayfa altındaki «Çerezleri yönet» bağlantısıyla istediğiniz zaman geri alınabilir.',
      'İletişim taleplerinin yanıtlanması: destek sağlama ve ticari ilişkiyi yürütmedeki meşru menfaate dayanır (GDPR madde 6.1.f).',
      'Aboneliklerin, ödemelerin ve faturalandırmanın yönetimi: sizinle SPACE UNITY arasındaki sözleşmenin ifasına dayanır (GDPR madde 6.1.b). Faturaların ve muhasebe belgelerinin saklanması ise bir hukuki yükümlülüğün yerine getirilmesine dayanır (GDPR madde 6.1.c).',
    ],
    [
      `${PSP.name} (${PSP.address}), ödeme sağlayıcısı olarak, ücretli paketlerin abonelik, ödeme, faturalandırma ve iade işlemleri için. Stripe; dolandırıcılığın önlenmesi ve kendi düzenleyici yükümlülüklerini yerine getirme bakımından bağımsız veri sorumlusu olarak hareket eder.`,
      'Google LLC (Google Analytics), yalnızca trafik ölçümüne onay verdiyseniz. Veriler Google tarafından Avrupa Birliği dışında işlenebilir; bu aktarım Avrupa Komisyonu’nun standart sözleşme maddeleriyle çerçevelenir.',
      'Cloudflare, Inc., sitenin teknik barındırıcısı ve yerleşik trafik ölçümünün (Cloudflare Web Analytics) sağlayıcısı olarak; bu ölçüm hiçbir çerez bırakmaz ve kimliği belirlenebilir kişisel veri toplamaz.',
      'Hiçbir veri üçüncü taraflara satılmaz veya kiralanmaz.',
    ],
    [
      'Google Analytics 4 verileri, bu site için seçilen yapılandırmaya uygun olarak toplanmasından itibaren 14 ay saklanır, ardından Google tarafından otomatik olarak silinir.',
      'Onay tercihiniz, CNIL tavsiyelerine uygun olarak yerel biçimde (localStorage) en fazla 6 ay saklanır ya da siz değiştirene veya tarayıcı verilerinizi silene kadar.',
      'Faturalar ve muhasebe belgeleri, Fransız Ticaret Kanunu’nun L123-22 maddesi uyarınca ilgili mali yılın kapanışından itibaren on yıl saklanır.',
      'Hesap ve abonelik verileri, abonelik süresi boyunca saklanır, ardından yukarıdaki yasal saklama süreleri saklı kalmak kaydıyla silinir veya anonimleştirilir.',
    ],
    [
      'Site yalnızca HTTPS üzerinden sunulur ve aktarım sırasında şifrelemeyi ve yaygın ağ saldırılarına karşı korumayı üstlenen Cloudflare altyapısında barındırılır. Sitenin kendisi hiçbir hesap veya ödeme verisi saklamaz.',
      `Kart bilgileri yalnızca PCI-DSS Seviye 1 sertifikalı ${PSP.name} tarafından işlenir; SPACE UNITY hiçbir kart verisi saklamaz.`,
    ],
    [
      'GDPR uyarınca verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz etme ve taşınabilirlik haklarına sahipsiniz. Ayrıca onayınızı istediğiniz zaman geri alabilirsiniz; bu, geri almadan önce yapılan işlemenin hukuka uygunluğunu etkilemez.',
      `Bu hakları kullanmak için ${COMPANY.email} adresinden bize ulaşın. Ayrıca CNIL’e (www.cnil.fr) veya kendi ülkenizdeki veri koruma otoritesine şikâyette bulunma hakkınız vardır.`,
    ],
  ],
  uk: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, зареєстрована під номером ${COMPANY.siren} (${COMPANY.rcs}). Контакт: ${COMPANY.email}.`,
      'SPACE UNITY не призначала фахівця із захисту даних (DPO) — її розмір цього не вимагає. Будь-який запит щодо ваших персональних даних можна надіслати напряму на адресу вище.',
    ],
    [
      'На сайті tblflow.com немає ані форми реєстрації, ані облікового запису: підписка та вхід виконуються у застосунку (app.tblflow.com).',
      'Якщо ви оформлюєте платний тариф, ми обробляємо дані, потрібні для виставлення рахунків: адресу електронної пошти, імʼя або назву організації, адресу для рахунків, країну, за потреби номер ПДВ, обраний тариф і цикл оплати, історію платежів. Дані банківської картки вводяться безпосередньо на сторінках, розміщених нашим платіжним провайдером: вони не проходять через наші сервери, SPACE UNITY не має до них доступу й не зберігає копій.',
      'Налаштування відображення (світла або темна тема) зберігається локально у вашому браузері (localStorage). Воно не залишає пристрій і не передається ані SPACE UNITY, ані третім особам.',
      'Якщо ви погодилися на аналітику (див. політику cookie), Google Analytics 4 збирає псевдонімізовані дані перегляду: відвідані сторінки, тривалість візиту, тип пристрою, приблизне розташування (країна/регіон — повну IP-адресу ніколи, анонімізацію IP увімкнено).',
      'Якщо ви пишете нам електронною поштою, ми обробляємо передані вами дані (адресу електронної пошти, зміст листа) виключно для відповіді на ваш запит.',
    ],
    [
      'Аналітика (Google Analytics 4): на підставі вашої згоди (стаття 6.1.a GDPR), яку можна відкликати будь-коли за посиланням «Керувати файлами cookie» в підвалі сторінки.',
      'Відповіді на звернення: на підставі законного інтересу в наданні підтримки та веденні ділових відносин (стаття 6.1.f GDPR).',
      'Керування підписками, платежами та виставленням рахунків: на підставі виконання договору між вами та SPACE UNITY (стаття 6.1.b GDPR). Зберігання рахунків і бухгалтерських документів спирається на виконання правового обовʼязку (стаття 6.1.c GDPR).',
    ],
    [
      `${PSP.name} (${PSP.address}), як платіжний провайдер, для обробки підписок, платежів, виставлення рахунків і повернень за платними тарифами. У частині запобігання шахрайству та дотримання власних регуляторних обовʼязків Stripe виступає самостійним контролером.`,
      'Google LLC (Google Analytics) — лише якщо ви погодилися на аналітику. Дані можуть оброблятися Google за межами Європейського Союзу; така передача регулюється стандартними договірними положеннями Європейської Комісії.',
      'Cloudflare, Inc., як технічний хостер сайту та постачальник вбудованої аналітики (Cloudflare Web Analytics), яка не встановлює cookie і не збирає ідентифіковних персональних даних.',
      'Жодні дані не продаються і не здаються в оренду третім особам.',
    ],
    [
      'Дані Google Analytics 4 зберігаються 14 місяців від моменту збору, відповідно до обраної для цього сайту конфігурації, після чого автоматично видаляються Google.',
      'Ваш вибір згоди зберігається локально (localStorage) не більше 6 місяців, згідно з рекомендаціями CNIL, або доки ви його не зміните чи не очистите дані браузера.',
      'Рахунки та бухгалтерські документи зберігаються десять років від моменту закриття відповідного фінансового року, згідно зі статтею L123-22 Комерційного кодексу Франції.',
      'Дані облікового запису та підписки зберігаються протягом усього строку підписки, потім видаляються або анонімізуються, з урахуванням установлених законом строків зберігання вище.',
    ],
    [
      'Сайт віддається виключно через HTTPS і розміщений на інфраструктурі Cloudflare, яка забезпечує шифрування під час передавання та захист від поширених мережевих атак. Сам сайт не зберігає ані даних облікового запису, ані платіжних даних.',
      `Дані банківських карток обробляє виключно ${PSP.name}, сертифікований за PCI-DSS рівня 1; SPACE UNITY не зберігає жодних карткових даних.`,
    ],
    [
      'Відповідно до GDPR ви маєте право на доступ, виправлення, видалення, обмеження обробки, заперечення та перенесення ваших даних. Ви також можете відкликати згоду будь-коли, що не впливає на законність обробки, здійсненої до відкликання.',
      `Щоб скористатися цими правами, напишіть нам на ${COMPANY.email}. Ви також маєте право подати скаргу до CNIL (www.cnil.fr) або до місцевого органу із захисту даних.`,
    ],
  ],
  zh: [
    [
      `${COMPANY.name}，法国${COMPANY.form}，${COMPANY.address}，注册号 ${COMPANY.siren}（${COMPANY.rcs}）。联系方式：${COMPANY.email}。`,
      'SPACE UNITY 未指定数据保护官（DPO）——其规模并无此要求。任何与您个人数据有关的请求，均可直接发送至上述地址。',
    ],
    [
      'tblflow.com 网站没有注册表单，也没有用户账号：订阅和登录都在应用（app.tblflow.com）中完成。',
      '如果您订阅付费套餐，我们会处理开票所需的数据：电子邮件地址、姓名或公司名称、账单地址、国家/地区、适用时的增值税号、所订套餐与计费周期，以及付款记录。银行卡信息直接在我们支付服务商托管的页面上输入：不经过我们的服务器，SPACE UNITY 无法访问，也不保留任何副本。',
      '显示偏好（浅色或深色主题）保存在您浏览器本地（localStorage）。该信息始终留在您的设备上，不会发送给 SPACE UNITY 或任何第三方。',
      '若您同意流量统计（见 Cookie 政策），Google Analytics 4 会收集经假名化的浏览数据：访问的页面、停留时长、设备类型、大致位置（国家/地区，绝不含完整 IP 地址 —— 已启用 IP 匿名化）。',
      '若您通过邮件联系我们，我们仅为回复您的请求而处理您发送的数据（邮箱地址、邮件内容）。',
    ],
    [
      '流量统计（Google Analytics 4）：基于您的同意（GDPR 第 6.1.a 条），可随时通过页脚的「Cookie 设置」链接撤回。',
      '回复联系请求：基于提供支持和维护商业关系的正当利益（GDPR 第 6.1.f 条）。',
      '订阅、付款与开票的管理：基于您与 SPACE UNITY 之间合同的履行（GDPR 第 6.1.b 条）。而发票与会计凭证的保存，则基于法定义务的遵守（GDPR 第 6.1.c 条）。',
    ],
    [
      `${PSP.name}（${PSP.address}），作为支付服务商，处理付费套餐的订阅、付款、开票与退款。就欺诈防范及履行其自身监管义务而言，Stripe 作为独立的数据控制者行事。`,
      'Google LLC（Google Analytics），仅在您同意流量统计的情况下。数据可能由 Google 在欧盟境外处理；该等传输受欧盟委员会标准合同条款约束。',
      'Cloudflare, Inc.，作为本站的技术托管方和原生流量统计（Cloudflare Web Analytics）的提供方；该统计不设置任何 Cookie，也不收集可识别个人身份的数据。',
      '不会向第三方出售或出租任何数据。',
    ],
    [
      'Google Analytics 4 的数据自收集之日起保存 14 个月，与本站所选配置一致，此后由 Google 自动删除。',
      '您的同意选择依据 CNIL 的建议保存在本地（localStorage）最长 6 个月，或直至您更改该选择或清除浏览器数据为止。',
      '发票与会计凭证依据法国商法典第 L123-22 条，自相关会计年度结束起保存十年。',
      '账户与订阅数据在订阅存续期间保存，之后予以删除或匿名化，但须遵守上述法定保存期限。',
    ],
    [
      '本站仅通过 HTTPS 提供，并托管在 Cloudflare 的基础设施上，由其负责传输加密和防范常见网络攻击。网站本身不存储任何账户或支付数据。',
      `银行卡信息仅由通过 PCI-DSS 一级认证的 ${PSP.name} 处理；SPACE UNITY 不存储任何卡片数据。`,
    ],
    [
      '根据 GDPR，您享有访问、更正、删除、限制处理、反对以及数据可携带的权利。您也可以随时撤回同意，且不影响撤回前处理行为的合法性。',
      `如需行使这些权利，请通过 ${COMPANY.email} 联系我们。您同样有权向 CNIL（www.cnil.fr）或您所在地的数据保护机构提出投诉。`,
    ],
  ],
};

export const PRIVACY_SECTIONS: Record<Locale, LegalSection[]> = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    PRIVACY_HEADINGS[l].map((heading, i) => ({ heading, body: PRIVACY_BODIES[l][i] })),
  ])
) as Record<Locale, LegalSection[]>;

export const COOKIES_TITLE: Record<Locale, string> = {
  de: 'Cookie-Richtlinie', en: 'Cookie policy', es: 'Política de cookies',
  fr: "Politique d'utilisation des cookies", it: 'Politica sui cookie',
  ja: 'Cookie ポリシー', ru: 'Политика использования cookie',
  tr: 'Çerez politikası', uk: 'Політика використання cookie', zh: 'Cookie 政策',
};

export const COOKIES_LEDE: Record<Locale, string> = {
  de: 'Diese Website verwendet bewusst nur sehr wenige Tracker. Hier ist die vollständige Liste, ohne Ausnahme.',
  en: 'This site uses a deliberately small number of trackers. Here is the complete list, with no exceptions.',
  es: 'Este sitio utiliza deliberadamente muy pocos rastreadores. Aquí está la lista completa, sin excepciones.',
  fr: 'Ce site utilise un nombre volontairement réduit de traceurs. Voici la liste complète, sans exception.',
  it: 'Questo sito usa deliberatamente pochissimi tracker. Ecco l’elenco completo, senza eccezioni.',
  ja: '本サイトが使用するトラッカーは意図的にごく少数です。以下が例外のない完全な一覧です。',
  ru: 'Этот сайт намеренно использует очень мало трекеров. Ниже — полный список, без исключений.',
  tr: 'Bu site bilinçli olarak çok az izleyici kullanır. Aşağıda istisnasız tam liste yer alıyor.',
  uk: 'Цей сайт навмисно використовує дуже мало трекерів. Нижче — повний перелік, без винятків.',
  zh: '本站有意只使用极少量追踪技术。以下是完整清单，没有例外。',
};

export interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  consent: string;
}

/** The four rows below are the complete set — see COOKIES_LEDE. `name` is the
 * technical identifier and is never translated. */
export const COOKIE_TABLE: Record<Locale, CookieRow[]> = {
  de: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, kein Cookie)', purpose: 'Merkt sich Ihre Einstellung für helle/dunkle Darstellung.', duration: 'Bis zum manuellen Löschen', consent: 'Keine — unbedingt erforderlich' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, kein Cookie)', purpose: 'Merkt sich Ihre Einwilligungsentscheidung, damit wir nicht erneut fragen.', duration: '6 Monate, danach erscheint der Banner wieder', consent: 'Keine — für die Funktion des Banners erforderlich' },
    { name: '(ohne Namen, API-Anfragen)', provider: 'Cloudflare Web Analytics', purpose: 'Aggregierte Reichweitenmessung, ohne individuelle Kennung und ohne Fingerprinting.', duration: 'Keine Daten im Browser gespeichert', consent: 'Keine — cookielose Technologie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Unterscheidet Besucher und Sitzungen, um Nutzungsstatistiken zu erstellen.', duration: '14 Monate', consent: 'Erforderlich — wird nur nach Zustimmung gesetzt' },
  ],
  en: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, not a cookie)', purpose: 'Remembers your light/dark display preference.', duration: 'Until manually cleared', consent: 'None — strictly necessary' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, not a cookie)', purpose: "Remembers your consent choice so we don't ask again.", duration: '6 months, then the banner reappears', consent: 'None — required for the banner to work' },
    { name: '(unnamed, API requests)', provider: 'Cloudflare Web Analytics', purpose: 'Aggregate audience measurement, with no individual identifier or fingerprinting.', duration: 'No data stored in the browser', consent: 'None — cookieless technology' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distinguishes visitors and sessions to produce audience statistics.', duration: '14 months', consent: 'Required — set only after acceptance' },
  ],
  es: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, no es una cookie)', purpose: 'Recuerda tu preferencia de visualización clara u oscura.', duration: 'Hasta su borrado manual', consent: 'Ninguno — estrictamente necesaria' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, no es una cookie)', purpose: 'Recuerda tu elección de consentimiento para no volver a preguntártelo.', duration: '6 meses, luego reaparece el banner', consent: 'Ninguno — necesaria para el funcionamiento del banner' },
    { name: '(sin nombre, solicitudes de API)', provider: 'Cloudflare Web Analytics', purpose: 'Medición de audiencia agregada, sin identificador individual ni fingerprinting.', duration: 'Ningún dato almacenado en el navegador', consent: 'Ninguno — tecnología sin cookies' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distingue visitantes y sesiones para producir estadísticas de audiencia.', duration: '14 meses', consent: 'Requerido — se deposita solo tras la aceptación' },
  ],
  fr: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, pas un cookie)', purpose: "Mémorise votre préférence d'affichage clair/sombre.", duration: 'Jusqu’à suppression manuelle', consent: 'Aucun — strictement nécessaire' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, pas un cookie)', purpose: 'Mémorise votre choix de consentement pour ne pas vous le redemander.', duration: '6 mois, puis le bandeau réapparaît', consent: 'Aucun — nécessaire au fonctionnement du bandeau' },
    { name: '(sans nom, requêtes API)', provider: 'Cloudflare Web Analytics', purpose: "Mesure d'audience agrégée, sans identifiant individuel ni fingerprinting.", duration: 'Aucune donnée stockée côté navigateur', consent: 'Aucun — technologie sans cookie, exemptée par la CNIL' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: "Distingue les visiteurs et les sessions pour produire des statistiques d'audience.", duration: '14 mois', consent: 'Requis — déposé uniquement après acceptation' },
  ],
  it: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, non è un cookie)', purpose: 'Memorizza la tua preferenza di visualizzazione chiara/scura.', duration: 'Fino alla cancellazione manuale', consent: 'Nessuno — strettamente necessario' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, non è un cookie)', purpose: 'Memorizza la tua scelta di consenso per non richiedertela di nuovo.', duration: '6 mesi, poi il banner ricompare', consent: 'Nessuno — necessario al funzionamento del banner' },
    { name: '(senza nome, richieste API)', provider: 'Cloudflare Web Analytics', purpose: 'Misurazione aggregata del traffico, senza identificatore individuale né fingerprinting.', duration: 'Nessun dato memorizzato nel browser', consent: 'Nessuno — tecnologia senza cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distingue visitatori e sessioni per produrre statistiche di traffico.', duration: '14 mesi', consent: 'Richiesto — depositato solo dopo accettazione' },
  ],
  ja: [
    { name: 'theme', provider: 'SPACE UNITY（localStorage、Cookie ではありません）', purpose: 'ライト／ダークの表示設定を記憶します。', duration: '手動で削除するまで', consent: '不要 — 必須の機能' },
    { name: 'cookie-consent', provider: 'SPACE UNITY（localStorage、Cookie ではありません）', purpose: '再度お尋ねしないよう、同意の選択を記憶します。', duration: '6 か月、その後バナーが再表示されます', consent: '不要 — バナーの動作に必要' },
    { name: '（名称なし、API リクエスト）', provider: 'Cloudflare Web Analytics', purpose: '個別の識別子もフィンガープリンティングも用いない、集計されたアクセス測定。', duration: 'ブラウザ側にデータを保存しません', consent: '不要 — Cookie を使わない技術' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: '訪問者とセッションを区別し、アクセス統計を作成します。', duration: '14 か月', consent: '必要 — 同意後にのみ設置' },
  ],
  ru: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запоминает ваш выбор светлого или тёмного оформления.', duration: 'До удаления вручную', consent: 'Не требуется — строго необходимо' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запоминает ваш выбор согласия, чтобы не спрашивать снова.', duration: '6 месяцев, затем баннер появляется снова', consent: 'Не требуется — необходимо для работы баннера' },
    { name: '(без имени, запросы к API)', provider: 'Cloudflare Web Analytics', purpose: 'Агрегированная аналитика без индивидуального идентификатора и без фингерпринтинга.', duration: 'Никакие данные в браузере не хранятся', consent: 'Не требуется — технология без cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Различает посетителей и сессии для построения статистики посещаемости.', duration: '14 месяцев', consent: 'Требуется — устанавливается только после согласия' },
  ],
  tr: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, çerez değil)', purpose: 'Açık/koyu görünüm tercihinizi hatırlar.', duration: 'Elle silinene kadar', consent: 'Gerekmez — kesinlikle zorunlu' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, çerez değil)', purpose: 'Tekrar sormamak için onay tercihinizi hatırlar.', duration: '6 ay, ardından banner yeniden görünür', consent: 'Gerekmez — banner’ın çalışması için zorunlu' },
    { name: '(adsız, API istekleri)', provider: 'Cloudflare Web Analytics', purpose: 'Bireysel tanımlayıcı ve parmak izi çıkarma olmadan toplu trafik ölçümü.', duration: 'Tarayıcıda veri saklanmaz', consent: 'Gerekmez — çerezsiz teknoloji' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Trafik istatistikleri üretmek için ziyaretçileri ve oturumları ayırt eder.', duration: '14 ay', consent: 'Gerekli — yalnızca kabulden sonra yerleştirilir' },
  ],
  uk: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запамʼятовує ваш вибір світлого чи темного оформлення.', duration: 'До видалення вручну', consent: 'Не потрібна — суворо необхідно' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запамʼятовує ваш вибір згоди, щоб не питати знову.', duration: '6 місяців, потім банер зʼявляється знову', consent: 'Не потрібна — необхідно для роботи банера' },
    { name: '(без назви, запити до API)', provider: 'Cloudflare Web Analytics', purpose: 'Агрегована аналітика без індивідуального ідентифікатора та без фінгерпринтингу.', duration: 'Жодні дані в браузері не зберігаються', consent: 'Не потрібна — технологія без cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Розрізняє відвідувачів і сесії, щоб будувати статистику відвідуваності.', duration: '14 місяців', consent: 'Потрібна — встановлюється лише після згоди' },
  ],
  zh: [
    { name: 'theme', provider: 'SPACE UNITY（localStorage，并非 Cookie）', purpose: '记住您的浅色/深色显示偏好。', duration: '直到手动清除', consent: '无需 — 严格必要' },
    { name: 'cookie-consent', provider: 'SPACE UNITY（localStorage，并非 Cookie）', purpose: '记住您的同意选择，避免重复询问。', duration: '6 个月，之后横幅重新出现', consent: '无需 — 横幅运行所必需' },
    { name: '（无名称，API 请求）', provider: 'Cloudflare Web Analytics', purpose: '聚合式流量统计，不使用个体标识符，也不做指纹识别。', duration: '浏览器端不存储任何数据', consent: '无需 — 无 Cookie 技术' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: '区分访客与会话，以生成访问统计。', duration: '14 个月', consent: '需要 — 仅在接受后写入' },
  ],
};

export const COOKIE_TABLE_HEADERS: Record<Locale, [string, string, string, string, string]> = {
  de: ['Name', 'Anbieter', 'Zweck', 'Dauer', 'Einwilligung'],
  en: ['Name', 'Provider', 'Purpose', 'Duration', 'Consent'],
  es: ['Nombre', 'Proveedor', 'Finalidad', 'Duración', 'Consentimiento'],
  fr: ['Nom', 'Fournisseur', 'Finalité', 'Durée', 'Consentement'],
  it: ['Nome', 'Fornitore', 'Finalità', 'Durata', 'Consenso'],
  ja: ['名称', '提供者', '目的', '期間', '同意'],
  ru: ['Название', 'Поставщик', 'Назначение', 'Срок', 'Согласие'],
  tr: ['Ad', 'Sağlayıcı', 'Amaç', 'Süre', 'Onay'],
  uk: ['Назва', 'Постачальник', 'Призначення', 'Строк', 'Згода'],
  zh: ['名称', '提供方', '用途', '期限', '同意'],
};

export const COOKIES_MANAGE_NOTE: Record<Locale, string> = {
  de: 'Sie können Ihre Meinung jederzeit über den Link „Cookies verwalten“ in der Fußzeile ändern, der das Einwilligungsfenster mit Ihrer aktuellen Auswahl erneut öffnet. Unabhängig davon fragen wir gemäß den Empfehlungen der CNIL alle 6 Monate automatisch erneut.',
  en: 'You can change your mind at any time via the "Manage cookies" link in the footer, which reopens the consent panel with your current choice. Either way, we ask again automatically every 6 months, per CNIL guidance.',
  es: 'Puedes cambiar de opinión en cualquier momento mediante el enlace «Gestionar cookies» del pie de página, que reabre el panel de consentimiento con tu elección actual. En cualquier caso, volvemos a preguntar automáticamente cada 6 meses, conforme a las recomendaciones de la CNIL.',
  fr: 'Vous pouvez changer d’avis à tout moment via le lien « Gérer les cookies » en pied de page, qui rouvre le panneau de consentement avec votre choix actuel. Ce choix est de toute façon redemandé automatiquement tous les 6 mois, conformément aux recommandations de la CNIL.',
  it: 'Puoi cambiare idea in qualsiasi momento tramite il link «Gestisci i cookie» nel piè di pagina, che riapre il pannello di consenso con la tua scelta attuale. In ogni caso, lo richiediamo automaticamente ogni 6 mesi, secondo le raccomandazioni della CNIL.',
  ja: 'フッターの「Cookie 設定」リンクからいつでも変更できます。現在の選択を反映した同意パネルが再度開きます。いずれにせよ、CNIL の勧告に従い 6 か月ごとに自動で再度お尋ねします。',
  ru: 'Вы можете передумать в любой момент по ссылке «Настройки cookie» в подвале страницы: она снова откроет панель согласия с вашим текущим выбором. В любом случае мы автоматически спрашиваем повторно каждые 6 месяцев, согласно рекомендациям CNIL.',
  tr: 'Sayfa altındaki «Çerezleri yönet» bağlantısıyla istediğiniz zaman fikrinizi değiştirebilirsiniz; bağlantı, mevcut seçiminizle onay panelini yeniden açar. Her hâlükârda, CNIL tavsiyelerine uygun olarak 6 ayda bir otomatik olarak yeniden soruyoruz.',
  uk: 'Ви можете передумати будь-коли за посиланням «Керувати файлами cookie» в підвалі сторінки: воно знову відкриє панель згоди з вашим поточним вибором. У будь-якому разі ми автоматично запитуємо повторно кожні 6 місяців, згідно з рекомендаціями CNIL.',
  zh: '您可以随时通过页脚的「Cookie 设置」链接更改选择，该链接会以您当前的选择重新打开同意面板。无论如何，依据 CNIL 的建议，我们每 6 个月会自动再次询问。',
};

export const TERMS_TITLE: Record<Locale, string> = {
  de: 'Allgemeine Geschäfts- und Nutzungsbedingungen',
  en: 'Terms of service',
  es: 'Condiciones generales de venta y de uso',
  fr: 'Conditions générales de vente et d’utilisation',
  it: 'Condizioni generali di vendita e di utilizzo',
  ja: '販売および利用に関する一般条件',
  ru: 'Общие условия продажи и использования',
  tr: 'Genel satış ve kullanım koşulları',
  uk: 'Загальні умови продажу та використання',
  zh: '通用销售与使用条款',
};

/** Bump by hand whenever a TERMS_SECTIONS paragraph changes. */
export const TERMS_LAST_UPDATED: Record<Locale, string> = {
  de: 'Zuletzt aktualisiert: 1. September 2026.',
  en: 'Last updated: September 1, 2026.',
  es: 'Última actualización: 1 de septiembre de 2026.',
  fr: 'Dernière mise à jour : 1er septembre 2026.',
  it: 'Ultimo aggiornamento: 1º settembre 2026.',
  ja: '最終更新：2026 年 9 月 1 日',
  ru: 'Последнее обновление: 1 сентября 2026 г.',
  tr: 'Son güncelleme: 1 Eylül 2026.',
  uk: 'Останнє оновлення: 1 вересня 2026 р.',
  zh: '最后更新：2026 年 9 月 1 日。',
};

const TERMS_HEADINGS: Record<Locale, string[]> = {
  de: ['Gegenstand', 'Annahme', 'Beschreibung des Dienstes und Tarife', 'Konto und Zugangssicherheit', 'Preise und Abrechnung', 'Laufzeit und Kündigung', 'Self-Hosting und Enterprise-Tarif', 'Eigentum an den Daten und Reversibilität', 'Geistiges Eigentum am Dienst', 'Verfügbarkeit des Dienstes', 'Personenbezogene Daten', 'Haftung', 'Änderung der Bedingungen', 'Anwendbares Recht und Gerichtsstand'],
  en: ['Purpose', 'Acceptance', 'Description of the Service and tiers', 'Account and access security', 'Prices and billing', 'Term and termination', 'Self-hosting and the Enterprise tier', 'Data ownership and portability', 'Intellectual property in the Service', 'Service availability', 'Personal data', 'Liability', 'Amendment of these terms', 'Governing law and jurisdiction'],
  es: ['Objeto', 'Aceptación', 'Descripción del Servicio y planes', 'Cuenta y seguridad de los accesos', 'Precios y facturación', 'Duración y resolución', 'Autoalojamiento y plan Enterprise', 'Propiedad de los datos y reversibilidad', 'Propiedad intelectual del Servicio', 'Disponibilidad del Servicio', 'Datos personales', 'Responsabilidad', 'Modificación de las condiciones', 'Legislación aplicable y jurisdicción'],
  fr: ['Objet', 'Acceptation', 'Description du Service et paliers', 'Compte et sécurité des accès', 'Tarifs et facturation', 'Durée et résiliation', 'Auto-hébergement et palier Enterprise', 'Propriété des données et réversibilité', 'Propriété intellectuelle du Service', 'Disponibilité du Service', 'Données personnelles', 'Responsabilité', 'Modification des CGVU', 'Droit applicable et juridiction'],
  it: ['Oggetto', 'Accettazione', 'Descrizione del Servizio e piani', 'Account e sicurezza degli accessi', 'Prezzi e fatturazione', 'Durata e recesso', 'Self-hosting e piano Enterprise', 'Proprietà dei dati e reversibilità', 'Proprietà intellettuale del Servizio', 'Disponibilità del Servizio', 'Dati personali', 'Responsabilità', 'Modifica delle condizioni', 'Legge applicabile e foro competente'],
  ja: ['目的', '承諾', '本サービスの内容とプラン', 'アカウントとアクセスの安全管理', '料金と請求', '期間と解約', 'セルフホストと Enterprise プラン', 'データの所有と可搬性', '本サービスの知的財産権', '本サービスの可用性', '個人データ', '責任', '本条件の変更', '準拠法および管轄'],
  ru: ['Предмет', 'Принятие условий', 'Описание Сервиса и тарифы', 'Учётная запись и безопасность доступа', 'Цены и выставление счетов', 'Срок действия и расторжение', 'Self-hosting и тариф Enterprise', 'Владение данными и обратимость', 'Интеллектуальная собственность на Сервис', 'Доступность Сервиса', 'Персональные данные', 'Ответственность', 'Изменение настоящих условий', 'Применимое право и подсудность'],
  tr: ['Konu', 'Kabul', 'Hizmetin tanımı ve paketler', 'Hesap ve erişim güvenliği', 'Fiyatlar ve faturalandırma', 'Süre ve fesih', 'Kendi sunucunuzda barındırma ve Enterprise paketi', 'Verilerin mülkiyeti ve geri alınabilirlik', 'Hizmetin fikrî mülkiyeti', 'Hizmetin erişilebilirliği', 'Kişisel veriler', 'Sorumluluk', 'Koşulların değiştirilmesi', 'Uygulanacak hukuk ve yetkili mahkeme'],
  uk: ['Предмет', 'Прийняття умов', 'Опис Сервісу та тарифи', 'Обліковий запис і безпека доступу', 'Ціни та виставлення рахунків', 'Строк дії та розірвання', 'Self-hosting і тариф Enterprise', 'Володіння даними та зворотність', 'Інтелектуальна власність на Сервіс', 'Доступність Сервісу', 'Персональні дані', 'Відповідальність', 'Зміна цих умов', 'Застосовне право та підсудність'],
  zh: ['目的', '接受条款', '服务说明与套餐', '账户与访问安全', '价格与计费', '期限与终止', '自托管与 Enterprise 套餐', '数据归属与可迁移性', '服务的知识产权', '服务可用性', '个人数据', '责任', '条款的修改', '适用法律与管辖'],
};

const TERMS_BODIES_LATIN: Pick<Record<Locale, string[][]>, 'fr' | 'en' | 'de' | 'es' | 'it'> = {
  fr: [
    [
      `Les présentes conditions générales de vente et d'utilisation (« CGVU ») régissent l'accès et l'utilisation des services TblFlow (le « Service »), édités par ${COMPANY.name}. Elles s'appliquent à l'exclusion de toute autre condition, notamment celles pouvant figurer dans les documents du client.`,
      "Le Service est réservé à un usage professionnel : il n'est pas proposé aux consommateurs au sens du Code de la consommation.",
    ],
    ["La création d'un compte ou l'utilisation du Service vaut acceptation pleine et entière des présentes CGVU. Si vous les acceptez au nom d'une entreprise, vous déclarez disposer du pouvoir de l'engager."],
    [
      'TblFlow est une plateforme de base de données no-code : interface tableur sur un vrai PostgreSQL, agents IA, automatisations et vues multiples sur les mêmes données.',
      "Le Service est proposé selon quatre paliers (Gratuit, Pro, Business, Enterprise), dont les caractéristiques, quotas et tarifs en vigueur sont décrits sur la page tarifs (tblflow.com/pricing). Ces paramètres peuvent évoluer ; toute modification substantielle est communiquée avec un préavis raisonnable et ne s'applique pas rétroactivement à une période déjà facturée.",
    ],
    [`Le client est responsable de la confidentialité de ses identifiants et de toute activité effectuée depuis son compte. Toute suspicion d'accès non autorisé doit être signalée sans délai à ${COMPANY.email}.`],
    [
      "Les paliers payants (Pro, Business) sont proposés au choix en facturation mensuelle ou annuelle, au tarif affiché sur la page tarifs au moment de la souscription. Le palier Enterprise fait l'objet d'un devis et d'un contrat spécifique.",
      "La facturation annuelle est réglée en une fois et d'avance, pour douze mois, et bénéficie de la remise indiquée sur la page tarifs. La facturation mensuelle est réglée chaque mois d'avance. Dans les deux cas l'abonnement est reconduit tacitement à chaque échéance, jusqu'à résiliation par le client dans les conditions prévues à l'article suivant.",
      "Les tarifs sont libellés en euros ou en dollars américains selon la devise applicable au client, pour un montant identique dans l'une et l'autre devise. Le client est débité du montant affiché.",
      `Les paiements sont traités par notre prestataire de paiement, ${PSP.name} (${PSP.address}). À défaut de paiement à échéance, TblFlow peut suspendre l'accès au Service après relance restée sans effet, sans préjudice des sommes dues.`,
    ],
    [
      "Les paliers Gratuit, Pro et Business sont sans engagement au-delà de la période de facturation souscrite : le client peut résilier ou changer de palier à tout moment depuis son compte, avec effet à la fin de la période de facturation en cours.",
      "Pour un abonnement annuel, la résiliation prend donc effet au terme de la période de douze mois en cours ; le client conserve l'accès au Service jusqu'à cette date et les sommes déjà réglées au titre de cette période ne font pas l'objet d'un remboursement au prorata.",
      "TblFlow peut résilier l'accès d'un client en cas de manquement grave aux présentes CGVU non corrigé sous 15 jours après mise en demeure, ou d'usage frauduleux ou illicite du Service, avec effet immédiat dans ce dernier cas.",
    ],
    ["Le déploiement auto-hébergé ou en VPC dédié fait partie du palier Enterprise, sur devis. Il n'est pas gratuit et n'est pas inclus dans les autres paliers. Les conditions spécifiques (support, niveaux de service, licence) sont précisées dans le contrat Enterprise signé séparément."],
    [
      "Les données que le client héberge sur le Service (« Données Client ») restent sa propriété exclusive. TblFlow ne revendique aucun droit sur ces données et ne les utilise pas à d'autres fins que la fourniture du Service.",
      "Les Données Client sont stockées dans un schéma PostgreSQL standard, exportable à tout moment par le client au format `pg_dump`, y compris en cas de résiliation. Cette réversibilité n'est pas une option payante : elle est disponible sur tous les paliers.",
    ],
    [`Le Service, son code, ses marques et sa documentation sont la propriété exclusive de ${COMPANY.name} ou de ses concédants. L'accès au Service ne confère au client qu'un droit d'usage, non exclusif et non transférable, pour la durée de son abonnement.`],
    [
      "TblFlow met en œuvre les moyens raisonnables pour assurer la disponibilité du Service, avec un objectif de disponibilité mensuelle croissant selon le palier souscrit (indiqué sur la page tarifs). Ces objectifs constituent une cible et non une garantie contractuelle de résultat, sauf stipulation contraire dans un contrat Enterprise signé séparément.",
      "Des interruptions programmées pour maintenance peuvent survenir ; TblFlow s'efforce d'en informer les clients à l'avance lorsque cela est raisonnablement possible.",
    ],
    [`Le traitement des données personnelles par TblFlow dans le cadre du site tblflow.com est décrit dans la politique de confidentialité. Le traitement des données personnelles que le client fait transiter par le Service, pour son propre compte, fait l'objet d'un accord de sous-traitance (DPA) distinct, disponible sur demande à ${COMPANY.email}.`],
    [
      "TblFlow est tenue à une obligation de moyens dans la fourniture du Service. Sa responsabilité, tous préjudices confondus, est limitée aux sommes effectivement versées par le client au titre des douze derniers mois précédant le fait générateur, à l'exclusion de tout préjudice indirect (perte d'exploitation, perte de données non imputable à TblFlow, perte de chance).",
      "Cette limitation ne s'applique pas en cas de faute lourde ou intentionnelle, ni dans les cas où la loi l'exclut expressément.",
    ],
    ["TblFlow peut modifier les présentes CGVU ; la version en vigueur est celle publiée sur cette page, avec sa date de mise à jour. Toute modification substantielle est communiquée aux clients actifs par email avec un préavis raisonnable avant son entrée en vigueur."],
    [`Les présentes CGVU sont soumises au droit français. Tout litige relatif à leur validité, leur interprétation ou leur exécution relève, à défaut de résolution amiable, de la compétence exclusive des tribunaux du ressort du ${COMPANY.rcs}.`],
  ],
  en: [
    [
      `These general terms of sale and use (the "Terms") govern access to and use of the TblFlow services (the "Service"), published by ${COMPANY.name}. They apply to the exclusion of any other terms, including any appearing in the customer's own documents.`,
      'The Service is intended for professional use: it is not offered to consumers within the meaning of the French Consumer Code.',
    ],
    ['Creating an account or using the Service constitutes full acceptance of these Terms. If you accept them on behalf of a company, you represent that you have authority to bind it.'],
    [
      'TblFlow is a no-code database platform: a spreadsheet interface over a real PostgreSQL database, AI agents, automations and multiple views on the same data.',
      'The Service is offered in four tiers (Free, Pro, Business, Enterprise), whose features, quotas and current prices are set out on the pricing page (tblflow.com/pricing). These may change; any substantial change is communicated with reasonable notice and does not apply retroactively to a period already billed.',
    ],
    [`The customer is responsible for keeping their credentials confidential and for all activity carried out from their account. Any suspected unauthorised access must be reported without delay to ${COMPANY.email}.`],
    [
      'The paid tiers (Pro, Business) are offered with either monthly or annual billing, at the price shown on the pricing page at the time of subscription. The Enterprise tier is subject to a quote and a specific agreement.',
      'Annual billing is paid in a single instalment, in advance, for twelve months, and carries the discount stated on the pricing page. Monthly billing is paid each month in advance. In both cases the subscription renews automatically at each term until the customer terminates it under the following article.',
      "Prices are denominated in euros or US dollars depending on the customer's applicable currency, for an identical amount in either currency. The customer is charged the amount displayed.",
      `Payments are handled by our payment processor, ${PSP.name} (${PSP.address}). Failing payment when due, TblFlow may suspend access to the Service after an unanswered reminder, without prejudice to the sums owed.`,
    ],
    [
      'The Free, Pro and Business tiers carry no commitment beyond the billing period subscribed: the customer may terminate or change tier at any time from their account, effective at the end of the current billing period.',
      'For an annual subscription, termination therefore takes effect at the end of the current twelve-month period; the customer retains access to the Service until that date and sums already paid for that period are not refunded pro rata.',
      "TblFlow may terminate a customer's access in the event of a serious breach of these Terms not remedied within 15 days of formal notice, or of fraudulent or unlawful use of the Service, with immediate effect in the latter case.",
    ],
    ['Self-hosted or dedicated-VPC deployment is part of the Enterprise tier, on quote. It is not free of charge and is not included in the other tiers. The specific conditions (support, service levels, licence) are set out in the separately signed Enterprise agreement.'],
    [
      'The data the customer hosts on the Service ("Customer Data") remains their exclusive property. TblFlow claims no rights over that data and does not use it for any purpose other than providing the Service.',
      'Customer Data is stored in a standard PostgreSQL schema, exportable by the customer at any time as a `pg_dump`, including on termination. This portability is not a paid option: it is available on every tier.',
    ],
    [`The Service, its code, its trademarks and its documentation are the exclusive property of ${COMPANY.name} or its licensors. Access to the Service grants the customer only a non-exclusive, non-transferable right of use, for the duration of their subscription.`],
    [
      'TblFlow uses reasonable means to ensure the availability of the Service, with a monthly availability target that increases with the tier subscribed (stated on the pricing page). These targets are objectives and not a contractual guarantee of result, unless stipulated otherwise in a separately signed Enterprise agreement.',
      'Scheduled maintenance interruptions may occur; TblFlow endeavours to inform customers in advance where reasonably possible.',
    ],
    [`The processing of personal data by TblFlow in connection with the tblflow.com site is described in the privacy policy. The processing of personal data that the customer passes through the Service, on their own behalf, is covered by a separate data processing agreement (DPA), available on request at ${COMPANY.email}.`],
    [
      'TblFlow is bound by an obligation of means in providing the Service. Its liability, across all heads of damage, is limited to the sums actually paid by the customer over the twelve months preceding the triggering event, excluding all indirect damage (loss of business, loss of data not attributable to TblFlow, loss of opportunity).',
      'This limitation does not apply in cases of gross negligence or wilful misconduct, nor where the law expressly excludes it.',
    ],
    ['TblFlow may amend these Terms; the version in force is the one published on this page, with its update date. Any substantial change is communicated to active customers by email with reasonable notice before it takes effect.'],
    [`These Terms are governed by French law. Any dispute as to their validity, interpretation or performance falls, failing an amicable resolution, within the exclusive jurisdiction of the courts in the ${COMPANY.rcs} district.`],
  ],
  de: [
    [
      `Diese Allgemeinen Geschäfts- und Nutzungsbedingungen („Bedingungen“) regeln den Zugang zu und die Nutzung der TblFlow-Dienste (der „Dienst“), herausgegeben von ${COMPANY.name}. Sie gelten unter Ausschluss aller anderen Bedingungen, insbesondere solcher, die in Dokumenten des Kunden enthalten sein können.`,
      'Der Dienst ist für die berufliche Nutzung bestimmt: Er wird Verbrauchern im Sinne des französischen Verbrauchergesetzbuchs nicht angeboten.',
    ],
    ['Die Erstellung eines Kontos oder die Nutzung des Dienstes gilt als vollumfängliche Annahme dieser Bedingungen. Wenn Sie sie im Namen eines Unternehmens annehmen, erklären Sie, zu dessen Verpflichtung befugt zu sein.'],
    [
      'TblFlow ist eine No-Code-Datenbankplattform: eine Tabellenoberfläche über einer echten PostgreSQL-Datenbank, KI-Agenten, Automatisierungen und mehrere Ansichten auf dieselben Daten.',
      'Der Dienst wird in vier Tarifen angeboten (Kostenlos, Pro, Business, Enterprise), deren Merkmale, Kontingente und geltende Preise auf der Preisseite (tblflow.com/pricing) beschrieben sind. Diese können sich ändern; jede wesentliche Änderung wird mit angemessener Frist mitgeteilt und gilt nicht rückwirkend für einen bereits abgerechneten Zeitraum.',
    ],
    [`Der Kunde ist für die Vertraulichkeit seiner Zugangsdaten und für jede von seinem Konto ausgehende Aktivität verantwortlich. Jeder Verdacht auf unbefugten Zugriff ist unverzüglich an ${COMPANY.email} zu melden.`],
    [
      'Die kostenpflichtigen Tarife (Pro, Business) werden wahlweise mit monatlicher oder jährlicher Abrechnung angeboten, zu dem bei Vertragsschluss auf der Preisseite angezeigten Preis. Der Enterprise-Tarif erfolgt auf Angebot und mit gesondertem Vertrag.',
      'Die jährliche Abrechnung wird in einer Zahlung im Voraus für zwölf Monate beglichen und erhält den auf der Preisseite angegebenen Nachlass. Die monatliche Abrechnung wird jeden Monat im Voraus beglichen. In beiden Fällen verlängert sich das Abonnement stillschweigend zu jedem Termin, bis der Kunde es gemäß dem folgenden Artikel kündigt.',
      'Die Preise lauten je nach der für den Kunden geltenden Währung auf Euro oder US-Dollar, mit identischem Betrag in beiden Währungen. Dem Kunden wird der angezeigte Betrag belastet.',
      `Die Zahlungen werden von unserem Zahlungsdienstleister ${PSP.name} (${PSP.address}) abgewickelt. Bei ausbleibender Zahlung bei Fälligkeit kann TblFlow den Zugang zum Dienst nach erfolgloser Mahnung sperren, unbeschadet der geschuldeten Beträge.`,
    ],
    [
      'Die Tarife Kostenlos, Pro und Business sind über den abonnierten Abrechnungszeitraum hinaus nicht bindend: Der Kunde kann jederzeit aus seinem Konto heraus kündigen oder den Tarif wechseln, wirksam zum Ende des laufenden Abrechnungszeitraums.',
      'Bei einem Jahresabonnement wird die Kündigung somit zum Ende des laufenden Zwölfmonatszeitraums wirksam; der Kunde behält bis zu diesem Datum Zugang zum Dienst, und bereits für diesen Zeitraum gezahlte Beträge werden nicht anteilig erstattet.',
      'TblFlow kann den Zugang eines Kunden bei einem schweren, nicht binnen 15 Tagen nach Mahnung behobenen Verstoß gegen diese Bedingungen kündigen, oder bei betrügerischer oder rechtswidriger Nutzung des Dienstes, im letzteren Fall mit sofortiger Wirkung.',
    ],
    ['Die selbst gehostete Bereitstellung oder die Bereitstellung in einer dedizierten VPC gehört zum Enterprise-Tarif, auf Angebot. Sie ist nicht kostenlos und in den anderen Tarifen nicht enthalten. Die besonderen Bedingungen (Support, Service-Level, Lizenz) werden im gesondert unterzeichneten Enterprise-Vertrag festgelegt.'],
    [
      'Die Daten, die der Kunde auf dem Dienst hostet („Kundendaten“), bleiben sein ausschließliches Eigentum. TblFlow beansprucht keinerlei Rechte an diesen Daten und nutzt sie zu keinem anderen Zweck als der Erbringung des Dienstes.',
      'Die Kundendaten werden in einem standardmäßigen PostgreSQL-Schema gespeichert und können vom Kunden jederzeit als `pg_dump` exportiert werden, auch im Fall einer Kündigung. Diese Reversibilität ist keine kostenpflichtige Option: Sie steht in allen Tarifen zur Verfügung.',
    ],
    [`Der Dienst, sein Code, seine Marken und seine Dokumentation sind ausschließliches Eigentum von ${COMPANY.name} oder ihrer Lizenzgeber. Der Zugang zum Dienst verschafft dem Kunden lediglich ein nicht ausschließliches, nicht übertragbares Nutzungsrecht für die Dauer seines Abonnements.`],
    [
      'TblFlow setzt angemessene Mittel ein, um die Verfügbarkeit des Dienstes sicherzustellen, mit einem monatlichen Verfügbarkeitsziel, das mit dem abonnierten Tarif steigt (auf der Preisseite angegeben). Diese Ziele sind Zielwerte und keine vertragliche Erfolgsgarantie, sofern nicht in einem gesondert unterzeichneten Enterprise-Vertrag etwas anderes bestimmt ist.',
      'Geplante Wartungsunterbrechungen können auftreten; TblFlow bemüht sich, die Kunden im Rahmen des Zumutbaren vorab zu informieren.',
    ],
    [`Die Verarbeitung personenbezogener Daten durch TblFlow im Rahmen der Website tblflow.com ist in der Datenschutzerklärung beschrieben. Die Verarbeitung personenbezogener Daten, die der Kunde auf eigene Rechnung über den Dienst leitet, ist Gegenstand eines gesonderten Auftragsverarbeitungsvertrags (AVV), erhältlich auf Anfrage unter ${COMPANY.email}.`],
    [
      'TblFlow schuldet bei der Erbringung des Dienstes eine Bemühungspflicht. Ihre Haftung ist über alle Schadensarten hinweg auf die Beträge begrenzt, die der Kunde in den zwölf Monaten vor dem schadensauslösenden Ereignis tatsächlich gezahlt hat, unter Ausschluss jedes mittelbaren Schadens (Betriebsausfall, nicht TblFlow zurechenbarer Datenverlust, entgangene Chance).',
      'Diese Begrenzung gilt nicht bei grober Fahrlässigkeit oder Vorsatz und nicht in den Fällen, in denen das Gesetz sie ausdrücklich ausschließt.',
    ],
    ['TblFlow kann diese Bedingungen ändern; maßgeblich ist die auf dieser Seite veröffentlichte Fassung mit ihrem Aktualisierungsdatum. Jede wesentliche Änderung wird aktiven Kunden per E-Mail mit angemessener Frist vor Inkrafttreten mitgeteilt.'],
    [`Diese Bedingungen unterliegen französischem Recht. Für jeden Streit über ihre Gültigkeit, Auslegung oder Erfüllung sind, mangels gütlicher Einigung, ausschließlich die Gerichte im Bezirk des ${COMPANY.rcs} zuständig.`],
  ],
  es: [
    [
      `Las presentes condiciones generales de venta y de uso (las «Condiciones») rigen el acceso y el uso de los servicios TblFlow (el «Servicio»), editados por ${COMPANY.name}. Se aplican con exclusión de cualquier otra condición, en particular las que puedan figurar en los documentos del cliente.`,
      'El Servicio está reservado a un uso profesional: no se ofrece a consumidores en el sentido del Código de Consumo francés.',
    ],
    ['La creación de una cuenta o el uso del Servicio implica la aceptación plena y sin reservas de las presentes Condiciones. Si las aceptas en nombre de una empresa, declaras disponer de poder para obligarla.'],
    [
      'TblFlow es una plataforma de base de datos no-code: interfaz de hoja de cálculo sobre un PostgreSQL real, agentes de IA, automatizaciones y múltiples vistas sobre los mismos datos.',
      'El Servicio se ofrece en cuatro planes (Gratis, Pro, Business, Enterprise), cuyas características, cuotas y tarifas vigentes se describen en la página de precios (tblflow.com/pricing). Estos parámetros pueden evolucionar; toda modificación sustancial se comunica con un preaviso razonable y no se aplica retroactivamente a un periodo ya facturado.',
    ],
    [`El cliente es responsable de la confidencialidad de sus credenciales y de toda actividad realizada desde su cuenta. Cualquier sospecha de acceso no autorizado debe comunicarse sin demora a ${COMPANY.email}.`],
    [
      'Los planes de pago (Pro, Business) se ofrecen, a elección, con facturación mensual o anual, a la tarifa mostrada en la página de precios en el momento de la contratación. El plan Enterprise es objeto de presupuesto y de un contrato específico.',
      'La facturación anual se abona de una sola vez y por anticipado, por doce meses, y se beneficia del descuento indicado en la página de precios. La facturación mensual se abona cada mes por anticipado. En ambos casos la suscripción se renueva tácitamente en cada vencimiento, hasta su resolución por el cliente en las condiciones previstas en el artículo siguiente.',
      'Las tarifas se expresan en euros o en dólares estadounidenses según la moneda aplicable al cliente, por un importe idéntico en una y otra moneda. Se carga al cliente el importe mostrado.',
      `Los pagos son tratados por nuestro proveedor de pago, ${PSP.name} (${PSP.address}). A falta de pago al vencimiento, TblFlow puede suspender el acceso al Servicio tras un requerimiento sin efecto, sin perjuicio de las cantidades adeudadas.`,
    ],
    [
      'Los planes Gratis, Pro y Business no conllevan compromiso más allá del periodo de facturación contratado: el cliente puede resolver o cambiar de plan en cualquier momento desde su cuenta, con efecto al final del periodo de facturación en curso.',
      'En una suscripción anual, la resolución surte efecto por tanto al término del periodo de doce meses en curso; el cliente conserva el acceso al Servicio hasta esa fecha y las cantidades ya abonadas por ese periodo no se reembolsan a prorrata.',
      'TblFlow puede resolver el acceso de un cliente en caso de incumplimiento grave de las presentes Condiciones no subsanado en 15 días tras requerimiento, o de uso fraudulento o ilícito del Servicio, con efecto inmediato en este último caso.',
    ],
    ['El despliegue autoalojado o en VPC dedicada forma parte del plan Enterprise, a presupuesto. No es gratuito y no está incluido en los demás planes. Las condiciones específicas (soporte, niveles de servicio, licencia) se precisan en el contrato Enterprise firmado por separado.'],
    [
      'Los datos que el cliente aloja en el Servicio («Datos del Cliente») siguen siendo de su propiedad exclusiva. TblFlow no reivindica ningún derecho sobre esos datos y no los utiliza con otros fines que la prestación del Servicio.',
      'Los Datos del Cliente se almacenan en un esquema PostgreSQL estándar, exportable en cualquier momento por el cliente en formato `pg_dump`, incluso en caso de resolución. Esta reversibilidad no es una opción de pago: está disponible en todos los planes.',
    ],
    [`El Servicio, su código, sus marcas y su documentación son propiedad exclusiva de ${COMPANY.name} o de sus licenciantes. El acceso al Servicio solo confiere al cliente un derecho de uso, no exclusivo y no transferible, durante la vigencia de su suscripción.`],
    [
      'TblFlow emplea los medios razonables para asegurar la disponibilidad del Servicio, con un objetivo de disponibilidad mensual creciente según el plan contratado (indicado en la página de precios). Estos objetivos constituyen una meta y no una garantía contractual de resultado, salvo estipulación contraria en un contrato Enterprise firmado por separado.',
      'Pueden producirse interrupciones programadas por mantenimiento; TblFlow procura informar a los clientes con antelación cuando ello resulta razonablemente posible.',
    ],
    [`El tratamiento de datos personales por TblFlow en el marco del sitio tblflow.com se describe en la política de privacidad. El tratamiento de los datos personales que el cliente hace transitar por el Servicio, por su propia cuenta, es objeto de un acuerdo de encargo del tratamiento (DPA) independiente, disponible bajo petición en ${COMPANY.email}.`],
    [
      'TblFlow queda sujeta a una obligación de medios en la prestación del Servicio. Su responsabilidad, por todos los conceptos, se limita a las cantidades efectivamente abonadas por el cliente en los doce meses anteriores al hecho generador, con exclusión de todo perjuicio indirecto (lucro cesante, pérdida de datos no imputable a TblFlow, pérdida de oportunidad).',
      'Esta limitación no se aplica en caso de culpa grave o dolo, ni en los supuestos en que la ley la excluya expresamente.',
    ],
    ['TblFlow puede modificar las presentes Condiciones; la versión vigente es la publicada en esta página, con su fecha de actualización. Toda modificación sustancial se comunica a los clientes activos por email con un preaviso razonable antes de su entrada en vigor.'],
    [`Las presentes Condiciones se rigen por el derecho francés. Todo litigio relativo a su validez, interpretación o ejecución corresponde, a falta de resolución amistosa, a la competencia exclusiva de los tribunales de la jurisdicción del ${COMPANY.rcs}.`],
  ],
  it: [
    [
      `Le presenti condizioni generali di vendita e di utilizzo (le «Condizioni») disciplinano l'accesso e l'utilizzo dei servizi TblFlow (il «Servizio»), editi da ${COMPANY.name}. Si applicano ad esclusione di ogni altra condizione, in particolare di quelle eventualmente contenute nei documenti del cliente.`,
      "Il Servizio è riservato a un uso professionale: non è offerto ai consumatori ai sensi del Codice del consumo francese.",
    ],
    ["La creazione di un account o l'utilizzo del Servizio vale come accettazione piena e integrale delle presenti Condizioni. Se le accetti per conto di un'impresa, dichiari di avere il potere di vincolarla."],
    [
      'TblFlow è una piattaforma di database no-code: interfaccia in stile foglio di calcolo su un vero PostgreSQL, agenti IA, automazioni e viste multiple sugli stessi dati.',
      'Il Servizio è offerto in quattro piani (Gratuito, Pro, Business, Enterprise), le cui caratteristiche, quote e tariffe in vigore sono descritte nella pagina prezzi (tblflow.com/pricing). Tali parametri possono evolvere; ogni modifica sostanziale è comunicata con un preavviso ragionevole e non si applica retroattivamente a un periodo già fatturato.',
    ],
    [`Il cliente è responsabile della riservatezza delle proprie credenziali e di ogni attività effettuata dal proprio account. Ogni sospetto di accesso non autorizzato deve essere segnalato senza indugio a ${COMPANY.email}.`],
    [
      'I piani a pagamento (Pro, Business) sono offerti, a scelta, con fatturazione mensile o annuale, alla tariffa indicata nella pagina prezzi al momento della sottoscrizione. Il piano Enterprise è oggetto di preventivo e di un contratto specifico.',
      "La fatturazione annuale è saldata in un'unica soluzione e in anticipo, per dodici mesi, e beneficia dello sconto indicato nella pagina prezzi. La fatturazione mensile è saldata ogni mese in anticipo. In entrambi i casi l'abbonamento si rinnova tacitamente a ogni scadenza, fino al recesso del cliente alle condizioni previste all'articolo seguente.",
      "Le tariffe sono espresse in euro o in dollari statunitensi secondo la valuta applicabile al cliente, per un importo identico nell'una e nell'altra valuta. Al cliente viene addebitato l'importo visualizzato.",
      `I pagamenti sono trattati dal nostro fornitore di pagamento, ${PSP.name} (${PSP.address}). In mancanza di pagamento alla scadenza, TblFlow può sospendere l'accesso al Servizio dopo un sollecito rimasto senza esito, fatti salvi gli importi dovuti.`,
    ],
    [
      "I piani Gratuito, Pro e Business non comportano vincoli oltre il periodo di fatturazione sottoscritto: il cliente può recedere o cambiare piano in qualsiasi momento dal proprio account, con effetto alla fine del periodo di fatturazione in corso.",
      "Per un abbonamento annuale, il recesso ha quindi effetto al termine del periodo di dodici mesi in corso; il cliente conserva l'accesso al Servizio fino a tale data e gli importi già versati per quel periodo non sono rimborsati pro rata.",
      "TblFlow può risolvere l'accesso di un cliente in caso di grave inadempimento delle presenti Condizioni non sanato entro 15 giorni dalla diffida, o di uso fraudolento o illecito del Servizio, con effetto immediato in quest'ultimo caso.",
    ],
    ["Il deployment self-hosted o in VPC dedicato fa parte del piano Enterprise, su preventivo. Non è gratuito e non è incluso negli altri piani. Le condizioni specifiche (supporto, livelli di servizio, licenza) sono precisate nel contratto Enterprise firmato separatamente."],
    [
      'I dati che il cliente ospita sul Servizio («Dati del Cliente») restano di sua proprietà esclusiva. TblFlow non rivendica alcun diritto su tali dati e non li utilizza per finalità diverse dalla fornitura del Servizio.',
      'I Dati del Cliente sono archiviati in uno schema PostgreSQL standard, esportabile in qualsiasi momento dal cliente in formato `pg_dump`, anche in caso di recesso. Questa reversibilità non è un\'opzione a pagamento: è disponibile su tutti i piani.',
    ],
    [`Il Servizio, il suo codice, i suoi marchi e la sua documentazione sono di proprietà esclusiva di ${COMPANY.name} o dei suoi licenzianti. L'accesso al Servizio conferisce al cliente unicamente un diritto d'uso, non esclusivo e non trasferibile, per la durata del suo abbonamento.`],
    [
      'TblFlow impiega mezzi ragionevoli per assicurare la disponibilità del Servizio, con un obiettivo di disponibilità mensile crescente secondo il piano sottoscritto (indicato nella pagina prezzi). Tali obiettivi costituiscono un target e non una garanzia contrattuale di risultato, salvo diversa pattuizione in un contratto Enterprise firmato separatamente.',
      'Possono verificarsi interruzioni programmate per manutenzione; TblFlow si adopera per informarne i clienti in anticipo quando ciò è ragionevolmente possibile.',
    ],
    [`Il trattamento dei dati personali da parte di TblFlow nell'ambito del sito tblflow.com è descritto nell'informativa sulla privacy. Il trattamento dei dati personali che il cliente fa transitare tramite il Servizio, per proprio conto, è oggetto di un accordo di trattamento (DPA) distinto, disponibile su richiesta a ${COMPANY.email}.`],
    [
      "TblFlow è tenuta a un'obbligazione di mezzi nella fornitura del Servizio. La sua responsabilità, per ogni tipo di danno, è limitata agli importi effettivamente versati dal cliente nei dodici mesi precedenti il fatto generatore, con esclusione di ogni danno indiretto (perdita di esercizio, perdita di dati non imputabile a TblFlow, perdita di chance).",
      "Tale limitazione non si applica in caso di colpa grave o dolo, né nei casi in cui la legge la escluda espressamente.",
    ],
    ['TblFlow può modificare le presenti Condizioni; la versione in vigore è quella pubblicata su questa pagina, con la relativa data di aggiornamento. Ogni modifica sostanziale è comunicata ai clienti attivi via email con un preavviso ragionevole prima della sua entrata in vigore.'],
    [`Le presenti Condizioni sono soggette al diritto francese. Ogni controversia relativa alla loro validità, interpretazione o esecuzione rientra, in mancanza di soluzione amichevole, nella competenza esclusiva dei tribunali del distretto del ${COMPANY.rcs}.`],
  ],
};

const TERMS_BODIES_OTHER: Pick<Record<Locale, string[][]>, 'ja' | 'ru' | 'tr' | 'uk' | 'zh'> = {
  ja: [
    [
      `本販売および利用に関する一般条件（以下「本条件」）は、${COMPANY.name} が提供する TblFlow の各サービス（以下「本サービス」）へのアクセスおよび利用を規律します。本条件は他のいかなる条件にも優先して適用され、特に顧客側の書面に記載された条件は適用されません。`,
      '本サービスは事業者による利用を前提としています。フランス消費法典にいう消費者に対しては提供されません。',
    ],
    ['アカウントの作成または本サービスの利用をもって、本条件のすべてに同意したものとみなします。企業を代表して同意される場合、その企業を拘束する権限を有することを表明したものとします。'],
    [
      'TblFlow はノーコードのデータベースプラットフォームです。本物の PostgreSQL の上の表計算インターフェース、AI エージェント、自動化、そして同一データに対する複数のビューを提供します。',
      '本サービスは 4 つのプラン（無料、Pro、Business、Enterprise）で提供され、その機能、上限および現行料金は料金ページ（tblflow.com/pricing）に記載しています。これらは変更されることがあります。重要な変更は合理的な予告期間をもって通知し、すでに請求済みの期間に遡って適用されることはありません。',
    ],
    [`顧客は、自らの認証情報の秘密保持および自己のアカウントから行われた一切の活動について責任を負います。不正アクセスの疑いがある場合は、遅滞なく ${COMPANY.email} までご連絡ください。`],
    [
      '有料プラン（Pro、Business）は、月額請求または年額請求のいずれかを選択でき、申込み時点で料金ページに表示されている料金が適用されます。Enterprise プランは見積りおよび個別契約の対象です。',
      '年額請求は、12 か月分を一括で前払いいただき、料金ページに記載の割引が適用されます。月額請求は毎月前払いです。いずれの場合も、次条に定める条件で顧客が解約するまで、契約は各期日に自動的に更新されます。',
      '料金は、顧客に適用される通貨に応じてユーロまたは米ドルで表示され、いずれの通貨でも同一の金額です。顧客には表示された金額が請求されます。',
      `決済は当社の決済代行事業者 ${PSP.name}（${PSP.address}）が処理します。期日に支払いがない場合、催告を行っても応答がないときは、TblFlow は未払金の請求権を留保したうえで、本サービスへのアクセスを停止することができます。`,
    ],
    [
      '無料、Pro、Business の各プランは、申し込んだ請求期間を超える拘束はありません。顧客はアカウントからいつでも解約またはプラン変更でき、その効力は進行中の請求期間の末日に生じます。',
      '年額契約の場合、解約は進行中の 12 か月の期間の満了時に効力を生じます。顧客はその日まで本サービスを利用でき、当該期間についてすでに支払われた金額は日割りで返金されません。',
      '本条件に対する重大な違反が催告後 15 日以内に是正されない場合、または本サービスの不正もしくは違法な利用があった場合、TblFlow は顧客のアクセスを終了させることができ、後者の場合は即時に効力を生じます。',
    ],
    ['セルフホストまたは専用 VPC への配置は、見積制の Enterprise プランに含まれます。無償ではなく、他のプランには含まれません。個別の条件（サポート、サービスレベル、ライセンス）は、別途締結する Enterprise 契約に定めます。'],
    [
      '顧客が本サービス上に保存するデータ（以下「顧客データ」）は、引き続き顧客の排他的な所有に属します。TblFlow は当該データについていかなる権利も主張せず、本サービスの提供以外の目的で利用しません。',
      '顧客データは標準的な PostgreSQL スキーマに保存され、解約時を含め、顧客はいつでも `pg_dump` 形式でエクスポートできます。この可搬性は有償オプションではなく、すべてのプランで利用できます。',
    ],
    [`本サービス、そのコード、商標および文書は、${COMPANY.name} またはそのライセンサーの排他的財産です。本サービスへのアクセスは、顧客に対し、契約期間中に限り、非独占的かつ譲渡不能の利用権のみを付与します。`],
    [
      'TblFlow は、本サービスの可用性を確保するため合理的な手段を講じ、申し込んだプランに応じて上昇する月間稼働率の目標（料金ページに記載）を掲げます。これらは目標であり、別途締結する Enterprise 契約に別段の定めがある場合を除き、契約上の結果保証ではありません。',
      '保守のための計画的な停止が生じることがあります。TblFlow は、合理的に可能な範囲で事前に顧客へ通知するよう努めます。',
    ],
    [`tblflow.com のサイトに関して TblFlow が行う個人データの取扱いは、プライバシーポリシーに記載しています。顧客が自らのために本サービスを経由させる個人データの取扱いについては、別途のデータ処理契約（DPA）の対象となり、${COMPANY.email} にご請求いただけます。`],
    [
      'TblFlow は本サービスの提供において手段債務を負います。損害の種類を問わず、その責任は、原因となる事実の直前 12 か月間に顧客が実際に支払った金額を上限とし、間接損害（逸失利益、TblFlow に帰責されないデータの喪失、機会の喪失）は除外されます。',
      'この制限は、重過失または故意がある場合、および法が明示的にこれを排除する場合には適用されません。',
    ],
    ['TblFlow は本条件を変更することができます。有効なのは、更新日を付して本ページに掲載された版です。重要な変更は、施行前に合理的な予告期間をもって、利用中の顧客へ電子メールで通知します。'],
    [`本条件はフランス法に準拠します。その有効性、解釈または履行に関する一切の紛争は、友好的な解決に至らない場合、${COMPANY.rcs} の管轄区域の裁判所を専属的管轄裁判所とします。`],
  ],
  ru: [
    [
      `Настоящие общие условия продажи и использования (далее «Условия») регулируют доступ к сервисам TblFlow (далее «Сервис»), издаваемым ${COMPANY.name}, и их использование. Они применяются с исключением любых иных условий, в частности содержащихся в документах клиента.`,
      'Сервис предназначен для профессионального использования: он не предлагается потребителям в значении Потребительского кодекса Франции.',
    ],
    ['Создание учётной записи или использование Сервиса означает полное и безоговорочное принятие настоящих Условий. Если вы принимаете их от имени организации, вы заявляете, что обладаете полномочиями её обязывать.'],
    [
      'TblFlow — это no-code платформа баз данных: интерфейс электронной таблицы поверх настоящего PostgreSQL, ИИ-агенты, автоматизации и несколько представлений одних и тех же данных.',
      'Сервис предлагается в четырёх тарифах (бесплатный, Pro, Business, Enterprise), характеристики, квоты и действующие цены которых описаны на странице тарифов (tblflow.com/pricing). Эти параметры могут меняться; о любом существенном изменении сообщается в разумный срок заранее, и оно не применяется задним числом к уже оплаченному периоду.',
    ],
    [`Клиент отвечает за конфиденциальность своих учётных данных и за любую активность, совершённую из его учётной записи. О любом подозрении на несанкционированный доступ следует незамедлительно сообщить на ${COMPANY.email}.`],
    [
      'Платные тарифы (Pro, Business) предлагаются на выбор с ежемесячной или ежегодной оплатой, по цене, отображённой на странице тарифов на момент оформления. Тариф Enterprise оформляется по коммерческому предложению и отдельному договору.',
      'Годовая оплата вносится единым платежом авансом за двенадцать месяцев и даёт скидку, указанную на странице тарифов. Ежемесячная оплата вносится авансом каждый месяц. В обоих случаях подписка автоматически продлевается на каждый следующий период до её расторжения клиентом на условиях следующей статьи.',
      'Цены выражены в евро или в долларах США в зависимости от применимой к клиенту валюты, в одинаковой сумме в обеих валютах. С клиента списывается отображённая сумма.',
      `Платежи обрабатывает наш платёжный провайдер ${PSP.name} (${PSP.address}). При отсутствии оплаты в срок TblFlow вправе приостановить доступ к Сервису после оставленного без ответа напоминания, без ущерба для причитающихся сумм.`,
    ],
    [
      'Тарифы «Бесплатный», Pro и Business не связывают клиента за пределами оплаченного расчётного периода: клиент может расторгнуть подписку или сменить тариф в любой момент из своей учётной записи, с вступлением в силу в конце текущего расчётного периода.',
      'Для годовой подписки расторжение вступает в силу по окончании текущего двенадцатимесячного периода; клиент сохраняет доступ к Сервису до этой даты, а уже уплаченные за этот период суммы не возвращаются пропорционально.',
      'TblFlow вправе прекратить доступ клиента в случае существенного нарушения настоящих Условий, не устранённого в течение 15 дней после уведомления, либо в случае мошеннического или незаконного использования Сервиса — в последнем случае немедленно.',
    ],
    ['Развёртывание self-hosted или в выделенном VPC входит в тариф Enterprise, по запросу. Оно не бесплатно и не включено в другие тарифы. Отдельные условия (поддержка, уровни обслуживания, лицензия) определяются в подписываемом отдельно договоре Enterprise.'],
    [
      'Данные, которые клиент размещает в Сервисе («Данные клиента»), остаются его исключительной собственностью. TblFlow не заявляет никаких прав на эти данные и не использует их ни для каких целей, кроме предоставления Сервиса.',
      'Данные клиента хранятся в стандартной схеме PostgreSQL и в любой момент могут быть выгружены клиентом в формате `pg_dump`, в том числе при расторжении. Эта обратимость не является платной опцией: она доступна на всех тарифах.',
    ],
    [`Сервис, его код, товарные знаки и документация являются исключительной собственностью ${COMPANY.name} или её лицензиаров. Доступ к Сервису предоставляет клиенту лишь неисключительное и непередаваемое право использования на срок его подписки.`],
    [
      'TblFlow принимает разумные меры для обеспечения доступности Сервиса, с целевым показателем ежемесячной доступности, возрастающим в зависимости от тарифа (указан на странице тарифов). Эти показатели являются целью, а не договорной гарантией результата, если иное не предусмотрено отдельно подписанным договором Enterprise.',
      'Возможны плановые перерывы на обслуживание; TblFlow стремится уведомлять клиентов заранее, когда это разумно возможно.',
    ],
    [`Обработка персональных данных со стороны TblFlow в рамках сайта tblflow.com описана в политике конфиденциальности. Обработка персональных данных, которые клиент проводит через Сервис от своего имени, регулируется отдельным соглашением об обработке данных (DPA), доступным по запросу на ${COMPANY.email}.`],
    [
      'TblFlow несёт обязательство приложить усилия при предоставлении Сервиса. Её ответственность по всем видам ущерба ограничена суммами, фактически уплаченными клиентом за двенадцать месяцев, предшествующих событию, послужившему основанием, и исключает любой косвенный ущерб (упущенная прибыль, утрата данных не по вине TblFlow, утрата возможности).',
      'Это ограничение не применяется в случае грубой неосторожности или умысла, а также в случаях, когда закон прямо его исключает.',
    ],
    ['TblFlow вправе изменять настоящие Условия; действующей является редакция, опубликованная на этой странице, с датой обновления. О любом существенном изменении активным клиентам сообщается по электронной почте в разумный срок до вступления в силу.'],
    [`Настоящие Условия подчиняются французскому праву. Любой спор относительно их действительности, толкования или исполнения относится, при отсутствии мирного урегулирования, к исключительной компетенции судов округа ${COMPANY.rcs}.`],
  ],
  tr: [
    [
      `İşbu genel satış ve kullanım koşulları («Koşullar»), ${COMPANY.name} tarafından yayımlanan TblFlow hizmetlerine («Hizmet») erişimi ve bunların kullanımını düzenler. Başka hiçbir koşul, özellikle müşterinin belgelerinde yer alabilecek koşullar geçerli olmaksızın uygulanır.`,
      'Hizmet, mesleki kullanım için ayrılmıştır: Fransız Tüketici Kanunu anlamında tüketicilere sunulmaz.',
    ],
    ['Bir hesap oluşturmak veya Hizmeti kullanmak, işbu Koşulların tamamının kabulü anlamına gelir. Bunları bir şirket adına kabul ediyorsanız, o şirketi bağlama yetkisine sahip olduğunuzu beyan etmiş olursunuz.'],
    [
      'TblFlow, no-code bir veritabanı platformudur: gerçek bir PostgreSQL üzerinde elektronik tablo arayüzü, yapay zekâ ajanları, otomasyonlar ve aynı veriler üzerinde birden çok görünüm.',
      'Hizmet dört pakette sunulur (Ücretsiz, Pro, Business, Enterprise); bunların özellikleri, kotaları ve yürürlükteki fiyatları fiyatlar sayfasında (tblflow.com/pricing) açıklanmıştır. Bu parametreler değişebilir; her esaslı değişiklik makul bir önbildirimle duyurulur ve halihazırda faturalanmış bir döneme geriye dönük uygulanmaz.',
    ],
    [`Müşteri, kimlik bilgilerinin gizliliğinden ve hesabından gerçekleştirilen her türlü faaliyetten sorumludur. Yetkisiz erişim şüphesi, gecikmeksizin ${COMPANY.email} adresine bildirilmelidir.`],
    [
      'Ücretli paketler (Pro, Business), abonelik anında fiyatlar sayfasında gösterilen fiyat üzerinden, tercihe göre aylık veya yıllık faturalandırmayla sunulur. Enterprise paketi teklife ve ayrı bir sözleşmeye tabidir.',
      'Yıllık faturalandırma, on iki ay için tek seferde ve peşin ödenir ve fiyatlar sayfasında belirtilen indirimden yararlanır. Aylık faturalandırma her ay peşin ödenir. Her iki durumda da abonelik, müşteri bir sonraki maddede öngörülen koşullarla fesheder edene kadar her vadede zımnen yenilenir.',
      'Fiyatlar, müşteriye uygulanacak para birimine göre avro veya ABD doları cinsinden ifade edilir ve her iki para biriminde de aynı tutardadır. Müşteriden gösterilen tutar tahsil edilir.',
      `Ödemeler, ödeme sağlayıcımız ${PSP.name} (${PSP.address}) tarafından işlenir. Vadesinde ödeme yapılmaması hâlinde TblFlow, sonuçsuz kalan bir hatırlatmanın ardından, doğmuş alacakları saklı kalmak kaydıyla Hizmete erişimi askıya alabilir.`,
    ],
    [
      'Ücretsiz, Pro ve Business paketleri, abone olunan faturalandırma dönemi dışında bir taahhüt içermez: müşteri, hesabından istediği zaman fesih yapabilir veya paket değiştirebilir; bu, yürürlükteki faturalandırma döneminin sonunda hüküm doğurur.',
      'Yıllık abonelikte fesih, dolayısıyla yürürlükteki on iki aylık dönemin sonunda hüküm doğurur; müşteri o tarihe kadar Hizmete erişimini korur ve söz konusu dönem için ödenmiş tutarlar oransal olarak iade edilmez.',
      'TblFlow, işbu Koşullara ağır bir aykırılığın ihtardan sonraki 15 gün içinde giderilmemesi hâlinde veya Hizmetin hileli ya da hukuka aykırı kullanımı hâlinde müşterinin erişimini sonlandırabilir; ikinci hâlde derhal hüküm doğurur.',
    ],
    ['Kendi sunucunuzda veya özel VPC üzerinde dağıtım, teklife bağlı Enterprise paketinin parçasıdır. Ücretsiz değildir ve diğer paketlere dahil değildir. Özel koşullar (destek, hizmet seviyeleri, lisans) ayrıca imzalanan Enterprise sözleşmesinde belirlenir.'],
    [
      'Müşterinin Hizmet üzerinde barındırdığı veriler («Müşteri Verileri») münhasıran kendisine ait kalır. TblFlow bu veriler üzerinde hiçbir hak iddia etmez ve bunları Hizmetin sunulması dışında hiçbir amaçla kullanmaz.',
      'Müşteri Verileri standart bir PostgreSQL şemasında saklanır ve fesih hâli dahil, müşteri tarafından istediği zaman `pg_dump` biçiminde dışa aktarılabilir. Bu geri alınabilirlik ücretli bir seçenek değildir: tüm paketlerde mevcuttur.',
    ],
    [`Hizmet, kodu, markaları ve belgeleri münhasıran ${COMPANY.name}’in veya lisans verenlerinin mülkiyetindedir. Hizmete erişim, müşteriye yalnızca abonelik süresi boyunca geçerli, münhasır olmayan ve devredilemez bir kullanım hakkı verir.`],
    [
      'TblFlow, Hizmetin erişilebilirliğini sağlamak için makul araçları kullanır; abone olunan pakete göre artan bir aylık erişilebilirlik hedefi vardır (fiyatlar sayfasında belirtilmiştir). Bu hedefler bir amaçtır, ayrıca imzalanan bir Enterprise sözleşmesinde aksi kararlaştırılmadıkça sözleşmesel bir sonuç garantisi değildir.',
      'Bakım için planlı kesintiler olabilir; TblFlow, makul ölçüde mümkün olduğunda müşterileri önceden bilgilendirmeye çalışır.',
    ],
    [`TblFlow’un tblflow.com sitesi kapsamında kişisel verileri işlemesi, gizlilik politikasında açıklanmıştır. Müşterinin kendi hesabına Hizmet üzerinden geçirdiği kişisel verilerin işlenmesi, ${COMPANY.email} adresinden talep üzerine sağlanan ayrı bir veri işleme sözleşmesine (DPA) tabidir.`],
    [
      'TblFlow, Hizmetin sunulmasında bir özen borcu altındadır. Sorumluluğu, tüm zarar kalemleri birlikte değerlendirildiğinde, zararı doğuran olaydan önceki on iki ayda müşteri tarafından fiilen ödenen tutarlarla sınırlıdır ve her türlü dolaylı zararı (işletme kaybı, TblFlow’a atfedilemeyen veri kaybı, fırsat kaybı) kapsam dışı bırakır.',
      'Bu sınırlama, ağır kusur veya kast hâlinde ve kanunun açıkça hariç tuttuğu hâllerde uygulanmaz.',
    ],
    ['TblFlow işbu Koşulları değiştirebilir; yürürlükteki sürüm, güncelleme tarihiyle birlikte bu sayfada yayımlanan sürümdür. Her esaslı değişiklik, yürürlüğe girmesinden makul bir süre önce aktif müşterilere e-posta ile duyurulur.'],
    [`İşbu Koşullar Fransız hukukuna tabidir. Geçerlilikleri, yorumlanmaları veya ifalarına ilişkin her türlü uyuşmazlık, dostane çözüme ulaşılamazsa, ${COMPANY.rcs} yargı çevresindeki mahkemelerin münhasır yetkisindedir.`],
  ],
  uk: [
    [
      `Ці загальні умови продажу та використання (далі «Умови») регулюють доступ до сервісів TblFlow (далі «Сервіс»), які видає ${COMPANY.name}, та їх використання. Вони застосовуються з виключенням будь-яких інших умов, зокрема тих, що можуть міститися в документах клієнта.`,
      'Сервіс призначений для професійного використання: він не пропонується споживачам у розумінні Споживчого кодексу Франції.',
    ],
    ['Створення облікового запису або використання Сервісу означає повне й беззастережне прийняття цих Умов. Якщо ви приймаєте їх від імені компанії, ви заявляєте, що маєте повноваження її зобовʼязувати.'],
    [
      'TblFlow — це no-code платформа баз даних: інтерфейс електронної таблиці поверх справжнього PostgreSQL, ШІ-агенти, автоматизації та кілька подань тих самих даних.',
      'Сервіс пропонується в чотирьох тарифах (безкоштовний, Pro, Business, Enterprise), характеристики, квоти та чинні ціни яких описані на сторінці тарифів (tblflow.com/pricing). Ці параметри можуть змінюватися; про будь-яку суттєву зміну повідомляється заздалегідь у розумний строк, і вона не застосовується заднім числом до вже оплаченого періоду.',
    ],
    [`Клієнт відповідає за конфіденційність своїх облікових даних і за будь-яку активність, здійснену з його облікового запису. Про будь-яку підозру щодо несанкціонованого доступу слід негайно повідомити на ${COMPANY.email}.`],
    [
      'Платні тарифи (Pro, Business) пропонуються на вибір із щомісячною або щорічною оплатою, за ціною, показаною на сторінці тарифів на момент оформлення. Тариф Enterprise оформлюється за комерційною пропозицією та окремим договором.',
      'Річна оплата вноситься одним платежем авансом за дванадцять місяців і дає знижку, зазначену на сторінці тарифів. Щомісячна оплата вноситься авансом щомісяця. В обох випадках підписка автоматично продовжується на кожен наступний період до її розірвання клієнтом на умовах наступної статті.',
      'Ціни виражені в євро або в доларах США залежно від застосовної до клієнта валюти, в однаковій сумі в обох валютах. З клієнта списується показана сума.',
      `Платежі обробляє наш платіжний провайдер ${PSP.name} (${PSP.address}). За відсутності оплати у строк TblFlow має право призупинити доступ до Сервісу після залишеного без відповіді нагадування, без шкоди для належних сум.`,
    ],
    [
      'Тарифи «Безкоштовний», Pro і Business не звʼязують клієнта поза межами оплаченого розрахункового періоду: клієнт може розірвати підписку або змінити тариф будь-коли зі свого облікового запису, з набранням чинності наприкінці поточного розрахункового періоду.',
      'Для річної підписки розірвання набирає чинності після завершення поточного дванадцятимісячного періоду; клієнт зберігає доступ до Сервісу до цієї дати, а вже сплачені за цей період суми не повертаються пропорційно.',
      'TblFlow має право припинити доступ клієнта в разі суттєвого порушення цих Умов, не усунутого протягом 15 днів після повідомлення, або в разі шахрайського чи незаконного використання Сервісу — в останньому випадку негайно.',
    ],
    ['Розгортання self-hosted або у виділеному VPC входить до тарифу Enterprise, за запитом. Воно не є безкоштовним і не включене до інших тарифів. Окремі умови (підтримка, рівні обслуговування, ліцензія) визначаються в договорі Enterprise, що підписується окремо.'],
    [
      'Дані, які клієнт розміщує в Сервісі («Дані клієнта»), лишаються його виключною власністю. TblFlow не заявляє жодних прав на ці дані й не використовує їх для жодних цілей, окрім надання Сервісу.',
      'Дані клієнта зберігаються у стандартній схемі PostgreSQL і будь-коли можуть бути вивантажені клієнтом у форматі `pg_dump`, зокрема при розірванні. Ця зворотність не є платною опцією: вона доступна на всіх тарифах.',
    ],
    [`Сервіс, його код, торговельні марки та документація є виключною власністю ${COMPANY.name} або її ліцензіарів. Доступ до Сервісу надає клієнтові лише невиключне й непередаване право використання на строк його підписки.`],
    [
      'TblFlow вживає розумних заходів для забезпечення доступності Сервісу з цільовим показником щомісячної доступності, що зростає залежно від тарифу (зазначено на сторінці тарифів). Ці показники є метою, а не договірною гарантією результату, якщо інше не передбачено окремо підписаним договором Enterprise.',
      'Можливі планові перерви на обслуговування; TblFlow прагне повідомляти клієнтів заздалегідь, коли це розумно можливо.',
    ],
    [`Обробка персональних даних з боку TblFlow у межах сайту tblflow.com описана в політиці конфіденційності. Обробка персональних даних, які клієнт проводить через Сервіс від свого імені, регулюється окремою угодою про обробку даних (DPA), доступною на запит за адресою ${COMPANY.email}.`],
    [
      'TblFlow несе обовʼязок докласти зусиль при наданні Сервісу. Її відповідальність за всіма видами шкоди обмежена сумами, фактично сплаченими клієнтом за дванадцять місяців, що передували події, яка стала підставою, і виключає будь-яку непряму шкоду (упущена вигода, втрата даних не з вини TblFlow, втрата можливості).',
      'Це обмеження не застосовується у разі грубої необережності або умислу, а також у випадках, коли закон прямо його виключає.',
    ],
    ['TblFlow має право змінювати ці Умови; чинною є редакція, опублікована на цій сторінці, із датою оновлення. Про будь-яку суттєву зміну активним клієнтам повідомляється електронною поштою в розумний строк до набрання чинності.'],
    [`Ці Умови підпорядковуються французькому праву. Будь-який спір щодо їх дійсності, тлумачення або виконання належить, за відсутності мирного врегулювання, до виключної компетенції судів округу ${COMPANY.rcs}.`],
  ],
  zh: [
    [
      `本通用销售与使用条款（下称「本条款」）规范由 ${COMPANY.name} 出版的 TblFlow 各项服务（下称「本服务」）的访问与使用。本条款排除其他任何条款而适用，尤其排除客户文件中可能载明的条款。`,
      '本服务仅供专业用途：不向法国消费法典意义上的消费者提供。',
    ],
    ['创建账户或使用本服务，即视为完全接受本条款。若您代表某公司接受本条款，即表示您具有约束该公司的权限。'],
    [
      'TblFlow 是一个 no-code 数据库平台：在真实 PostgreSQL 之上的电子表格界面、AI 智能体、自动化，以及对同一份数据的多种视图。',
      '本服务分四个套餐提供（免费版、Pro、Business、Enterprise），其功能、配额与现行价格载于价格页（tblflow.com/pricing）。上述参数可能变动；任何实质性变更均会以合理的提前期通知，且不会追溯适用于已开票的期间。',
    ],
    [`客户应对其凭据的保密性以及从其账户发出的一切活动负责。任何未经授权访问的疑似情形，应立即通知 ${COMPANY.email}。`],
    [
      '付费套餐（Pro、Business）可选择按月或按年计费，价格以订阅时价格页所显示者为准。Enterprise 套餐按报价并另订专门合同。',
      '按年计费为一次性预付十二个月，并享有价格页所载折扣。按月计费为每月预付。两种情形下，订阅均于每个到期日默示续订，直至客户依下一条规定终止为止。',
      '价格依据适用于客户的币种以欧元或美元计价，两种币种金额相同。客户被扣取的即为所显示的金额。',
      `付款由我们的支付服务商 ${PSP.name}（${PSP.address}）处理。到期未付款且催告无果的，TblFlow 可暂停本服务的访问权限，且不影响应付款项的追偿。`,
    ],
    [
      '免费版、Pro 与 Business 套餐在所订计费周期之外不含承诺：客户可随时在账户内终止或变更套餐，于当期计费周期结束时生效。',
      '就年度订阅而言，终止因此在当期十二个月期间届满时生效；客户在该日期前保留对本服务的访问权，且就该期间已支付的款项不按比例退还。',
      '客户严重违反本条款且在催告后 15 日内未予纠正，或对本服务存在欺诈或违法使用的，TblFlow 可终止其访问权限；后一种情形立即生效。',
    ],
    ['自托管或专属 VPC 部署属于按需报价的 Enterprise 套餐。该项并非免费，也不包含在其他套餐中。具体条件（支持、服务等级、许可）在单独签署的 Enterprise 合同中约定。'],
    [
      '客户在本服务上存放的数据（下称「客户数据」）仍归其专有。TblFlow 不主张对该等数据的任何权利，也不将其用于提供本服务以外的任何目的。',
      '客户数据存储于标准 PostgreSQL 结构中，客户可随时以 `pg_dump` 格式导出，包括在终止时。该可迁移性并非付费选项：所有套餐均可使用。',
    ],
    [`本服务及其代码、商标与文档，均为 ${COMPANY.name} 或其许可方的专有财产。访问本服务仅授予客户在其订阅期间内非独占、不可转让的使用权。`],
    [
      'TblFlow 采取合理手段确保本服务的可用性，并按所订套餐设有递增的月度可用性目标（载于价格页）。该等目标为努力方向，除单独签署的 Enterprise 合同另有约定外，并非合同上的结果保证。',
      '可能出现计划内的维护中断；在合理可行的情况下，TblFlow 会努力事先通知客户。',
    ],
    [`TblFlow 在 tblflow.com 网站范围内对个人数据的处理，载于隐私政策。客户为自身目的经由本服务传输的个人数据之处理，则适用单独的数据处理协议（DPA），可通过 ${COMPANY.email} 索取。`],
    [
      'TblFlow 在提供本服务时负有尽力义务。其责任就一切损害合计，以损害发生前十二个月内客户实际支付的款项为限，并排除任何间接损害（经营损失、非因 TblFlow 造成的数据丢失、机会损失）。',
      '该限制在重大过失或故意的情形下不适用，在法律明确排除的情形下亦不适用。',
    ],
    ['TblFlow 可修改本条款；生效版本为本页所公布并附有更新日期的版本。任何实质性变更，均会在生效前以合理的提前期通过电子邮件通知在册客户。'],
    [`本条款适用法国法律。就其效力、解释或履行发生的任何争议，在未能友好解决时，由 ${COMPANY.rcs} 辖区的法院专属管辖。`],
  ],
};

const TERMS_BODIES: Record<Locale, string[][]> = { ...TERMS_BODIES_LATIN, ...TERMS_BODIES_OTHER };

/**
 * CGVU. French is the authoritative body; the other nine are courtesy
 * translations shown under `AUTHORITATIVE_FR_NOTE`.
 */
export const TERMS_SECTIONS: Record<Locale, LegalSection[]> = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    TERMS_HEADINGS[l].map((heading, i) => ({ heading, body: TERMS_BODIES[l][i] })),
  ])
) as Record<Locale, LegalSection[]>;
