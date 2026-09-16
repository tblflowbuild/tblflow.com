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
 * The CGVU are NOT here. They govern the application, are published with it,
 * and this site links to them — `TERMS_SIGNPOST` below is the whole of that
 * page. One contract, one copy.
 *
 * On translation: the mentions légales are governed by French law and written
 * in French. The other nine locales carry a courtesy translation, headed by a
 * notice saying the French version is the only authoritative text — see
 * `AUTHORITATIVE_FR_NOTE`. The privacy and cookie policies are informational
 * rather than contractual, so they carry no such notice.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

/** Company identity. Single source for the legal notice and the privacy policy. */
export const COMPANY = {
  name: 'SPACE UNITY',
  form: 'SASU à capital variable',
  capital: '40 000 €',
  siren: '994 377 208',
  siret: '994 377 208 00016',
  rcs: 'RCS Sedan',
  vat: 'FR38994377208',
  address: '34 route Nationale, 08140 Douzy, France',
  phone: '+33 6 60 71 01 49',
  publisher: 'Tommy LAMBERT, Président',
  email: 'contact@tblflow.com',
  support: 'support@tblflow.com',
  /* No data protection officer is appointed, so this address is never labelled
     "DPO" in any user-facing text — it is the data protection contact. */
  privacy: 'dpo@tblflow.com',
  /* Single point of contact under the Digital Services Act. */
  legal: 'legal@tblflow.com',
} as const;

/**
 * The actual host, as LCEN art. 6-III requires it: name, address, phone.
 * Verified 2026-09-16 — production responds `server: cloudflare` and the site
 * deploys to Cloudflare Workers static assets (see wrangler.jsonc), so
 * Cloudflare stores and serves the content rather than merely fronting it.
 */
export const HOST = {
  name: 'Cloudflare, Inc.',
  address: '101 Townsend Street, San Francisco, CA 94107, USA',
  phone: '+1 888 993 5273',
} as const;

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

/** Only the legal notice carries a body; the CGVU page is now a signpost. */
export const LEGAL_NOTICE_NOTE = AUTHORITATIVE_FR_NOTE;

export const LEGAL_NOTICE_TITLE: Record<Locale, string> = {
  de: 'Impressum', en: 'Legal notice', es: 'Aviso legal', fr: 'Mentions légales',
  it: 'Note legali', ja: '法的表示', ru: 'Правовая информация', tr: 'Yasal bilgiler',
  uk: 'Правова інформація', zh: '法律声明',
};

/**
 * Legal notice. French is the authoritative body; the other nine are courtesy
 * translations of it, shown under `AUTHORITATIVE_FR_NOTE`. The company
 * identifiers (SIREN, SIRET, VAT, RCS) are interpolated, never translated.
 *
 * Three things here are legal obligations rather than editorial choices: the
 * host's name, address and phone (LCEN art. 6-III), the single point of contact
 * under the Digital Services Act, and the statement that the offer is B2B —
 * which is what removes the consumer right of withdrawal and the consumer
 * mediator, not silence about them.
 */
const LEGAL_NOTICE_HEADINGS: Record<Locale, string[]> = {
  de: ['Herausgeber der Website', 'Hosting', 'Kontaktstelle nach dem Gesetz über digitale Dienste', 'Adressatenkreis', 'Geistiges Eigentum', 'Haftung', 'Personenbezogene Daten', 'Anwendbares Recht'],
  en: ['Site publisher', 'Hosting', 'Point of contact under the Digital Services Act', 'Who the offer is for', 'Intellectual property', 'Liability', 'Personal data', 'Governing law'],
  es: ['Editor del sitio', 'Alojamiento', 'Punto de contacto en virtud del Reglamento de Servicios Digitales', 'A quién se dirige la oferta', 'Propiedad intelectual', 'Responsabilidad', 'Datos personales', 'Legislación aplicable'],
  fr: ['Éditeur du site', 'Hébergement', 'Point de contact au titre du règlement sur les services numériques', 'Public concerné', 'Propriété intellectuelle', 'Responsabilité', 'Données personnelles', 'Droit applicable'],
  it: ['Editore del sito', 'Hosting', 'Punto di contatto ai sensi del regolamento sui servizi digitali', 'A chi si rivolge l’offerta', 'Proprietà intellettuale', 'Responsabilità', 'Dati personali', 'Legge applicabile'],
  ja: ['サイト運営者', 'ホスティング', 'デジタルサービス法に基づく連絡窓口', '対象となる利用者', '知的財産権', '免責', '個人データ', '準拠法'],
  ru: ['Издатель сайта', 'Хостинг', 'Контактное лицо согласно Регламенту о цифровых услугах', 'Кому адресовано предложение', 'Интеллектуальная собственность', 'Ответственность', 'Персональные данные', 'Применимое право'],
  tr: ['Site yayıncısı', 'Barındırma', 'Dijital Hizmetler Tüzüğü kapsamında iletişim noktası', 'Teklifin muhatabı', 'Fikrî mülkiyet', 'Sorumluluk', 'Kişisel veriler', 'Uygulanacak hukuk'],
  uk: ['Видавець сайту', 'Хостинг', 'Контактний пункт згідно з Регламентом про цифрові послуги', 'Кому адресована пропозиція', 'Інтелектуальна власність', 'Відповідальність', 'Персональні дані', 'Застосовне право'],
  zh: ['网站出版者', '主机托管', '《数字服务法》下的联络点', '本服务面向的对象', '知识产权', '责任', '个人数据', '适用法律'],
};

const LEGAL_NOTICE_BODIES: Record<Locale, string[][]> = {
  fr: [
    [
      `${COMPANY.name}, ${COMPANY.form}, au capital social de ${COMPANY.capital}, immatriculée au ${COMPANY.rcs} sous le numéro ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Numéro de TVA intracommunautaire : ${COMPANY.vat}.`,
      `Siège social : ${COMPANY.address}.`,
      `Téléphone : ${COMPANY.phone}.`,
      `Directeur de la publication : ${COMPANY.publisher}.`,
      `Contact général : ${COMPANY.email}. Support : ${COMPANY.support}.`,
    ],
    [
      `Le site est hébergé par ${HOST.name}, ${HOST.address}. Téléphone : ${HOST.phone}.`,
      "Cette mention est publiée en application de l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.",
    ],
    [
      `Point de contact unique pour les autorités des États membres, la Commission européenne, le comité européen des services numériques et les utilisateurs, au titre du règlement (UE) 2022/2065 sur les services numériques : ${COMPANY.legal}.`,
      'Les échanges avec ce point de contact peuvent avoir lieu en français ou en anglais.',
    ],
    [
      'Les services TblFlow sont réservés aux professionnels. Ils ne sont pas proposés aux consommateurs au sens du Code de la consommation.',
      "En conséquence, le droit de rétractation applicable aux contrats conclus à distance avec un consommateur ne s'applique pas, et aucun médiateur de la consommation n'est désigné.",
    ],
    [
      "L'ensemble des éléments de ce site (textes, logos, illustrations, structure) est la propriété de SPACE UNITY ou de ses concédants, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
    ],
    [
      "SPACE UNITY s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. SPACE UNITY ne saurait être tenue responsable des erreurs, omissions ou de l'indisponibilité temporaire du site.",
    ],
    [
      'Les données traitées par ce site sont décrites dans sa politique de confidentialité, accessible depuis le pied de page. Les traceurs déposés sont détaillés dans la politique cookies.',
      "Les traitements liés à votre compte et à votre usage de l'application TblFlow relèvent de documents distincts, publiés sur app.tblflow.com : conditions générales, politique de confidentialité, accord de sous-traitance.",
      `Contact protection des données : ${COMPANY.privacy}.`,
    ],
    [
      'Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.',
    ],
  ],
  en: [
    [
      `${COMPANY.name}, a French ${COMPANY.form} ("SASU with variable capital"), with share capital of ${COMPANY.capital}, registered with the ${COMPANY.rcs} under number ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Intra-EU VAT number: ${COMPANY.vat}.`,
      `Registered office: ${COMPANY.address}.`,
      `Telephone: ${COMPANY.phone}.`,
      `Publication director: ${COMPANY.publisher}.`,
      `General contact: ${COMPANY.email}. Support: ${COMPANY.support}.`,
    ],
    [
      `The site is hosted by ${HOST.name}, ${HOST.address}. Telephone: ${HOST.phone}.`,
      'This statement is published under article 6-III of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy.',
    ],
    [
      `Single point of contact for Member State authorities, the European Commission, the European Board for Digital Services and users, under Regulation (EU) 2022/2065 on digital services: ${COMPANY.legal}.`,
      'This point of contact can be addressed in French or in English.',
    ],
    [
      'TblFlow services are for professional use. They are not offered to consumers within the meaning of the French Consumer Code.',
      'Accordingly, the right of withdrawal applicable to distance contracts with a consumer does not apply, and no consumer mediator is appointed.',
    ],
    [
      'All elements of this site (text, logos, illustrations, structure) are the property of SPACE UNITY or its licensors unless stated otherwise. Any reproduction or representation, in whole or in part, without prior written permission is prohibited.',
    ],
    [
      'SPACE UNITY endeavours to ensure the accuracy of the information published on this site, without warranting that it is exhaustive. SPACE UNITY cannot be held liable for errors, omissions or the temporary unavailability of the site.',
    ],
    [
      'The data this site processes is described in its privacy policy, reachable from the footer. The trackers it sets are detailed in the cookie policy.',
      'Processing related to your account and your use of the TblFlow application is covered by separate documents published on app.tblflow.com: terms of service, privacy policy, data processing agreement.',
      `Data protection contact: ${COMPANY.privacy}.`,
    ],
    [
      'This site and this legal notice are governed by French law. In the event of a dispute, and failing an amicable resolution, the French courts shall have sole jurisdiction.',
    ],
  ],
  de: [
    [
      `${COMPANY.name}, ${COMPANY.form} (französische SASU mit variablem Kapital), mit einem Stammkapital von ${COMPANY.capital}, eingetragen im ${COMPANY.rcs} unter der Nummer ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Umsatzsteuer-Identifikationsnummer: ${COMPANY.vat}.`,
      `Sitz: ${COMPANY.address}.`,
      `Telefon: ${COMPANY.phone}.`,
      `Verantwortlich für die Veröffentlichung: ${COMPANY.publisher}.`,
      `Allgemeiner Kontakt: ${COMPANY.email}. Support: ${COMPANY.support}.`,
    ],
    [
      `Die Website wird gehostet von ${HOST.name}, ${HOST.address}. Telefon: ${HOST.phone}.`,
      'Diese Angabe erfolgt nach Artikel 6-III des französischen Gesetzes Nr. 2004-575 vom 21. Juni 2004 über das Vertrauen in die digitale Wirtschaft.',
    ],
    [
      `Zentrale Kontaktstelle für die Behörden der Mitgliedstaaten, die Europäische Kommission, das Europäische Gremium für digitale Dienste und die Nutzer nach der Verordnung (EU) 2022/2065 über digitale Dienste: ${COMPANY.legal}.`,
      'Diese Kontaktstelle kann auf Französisch oder Englisch angesprochen werden.',
    ],
    [
      'Die TblFlow-Dienste richten sich an Gewerbetreibende. Sie werden Verbrauchern im Sinne des französischen Verbrauchergesetzbuchs nicht angeboten.',
      'Dementsprechend gilt das für Fernabsatzverträge mit Verbrauchern vorgesehene Widerrufsrecht nicht, und es ist keine Verbraucherschlichtungsstelle benannt.',
    ],
    [
      'Sämtliche Bestandteile dieser Website (Texte, Logos, Illustrationen, Struktur) sind Eigentum von SPACE UNITY oder ihrer Lizenzgeber, sofern nicht anders angegeben. Jede vollständige oder teilweise Vervielfältigung oder Wiedergabe ohne vorherige schriftliche Genehmigung ist untersagt.',
    ],
    [
      'SPACE UNITY bemüht sich um die Richtigkeit der auf dieser Website veröffentlichten Informationen, ohne Gewähr für Vollständigkeit. SPACE UNITY haftet nicht für Fehler, Auslassungen oder die vorübergehende Nichtverfügbarkeit der Website.',
    ],
    [
      'Die von dieser Website verarbeiteten Daten sind in ihrer Datenschutzerklärung beschrieben, die über die Fußzeile erreichbar ist. Die gesetzten Tracker sind in der Cookie-Richtlinie aufgeführt.',
      'Verarbeitungen im Zusammenhang mit Ihrem Konto und Ihrer Nutzung der TblFlow-Anwendung sind Gegenstand gesonderter Dokumente auf app.tblflow.com: Nutzungsbedingungen, Datenschutzerklärung, Auftragsverarbeitungsvertrag.',
      `Kontakt Datenschutz: ${COMPANY.privacy}.`,
    ],
    [
      'Diese Website und dieses Impressum unterliegen französischem Recht. Im Streitfall und mangels gütlicher Einigung sind ausschließlich die französischen Gerichte zuständig.',
    ],
  ],
  es: [
    [
      `${COMPANY.name}, ${COMPANY.form} (SASU francesa de capital variable), con un capital social de ${COMPANY.capital}, inscrita en el ${COMPANY.rcs} con el número ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Número de IVA intracomunitario: ${COMPANY.vat}.`,
      `Domicilio social: ${COMPANY.address}.`,
      `Teléfono: ${COMPANY.phone}.`,
      `Director de la publicación: ${COMPANY.publisher}.`,
      `Contacto general: ${COMPANY.email}. Soporte: ${COMPANY.support}.`,
    ],
    [
      `El sitio está alojado por ${HOST.name}, ${HOST.address}. Teléfono: ${HOST.phone}.`,
      'Esta mención se publica en aplicación del artículo 6-III de la ley francesa n.º 2004-575, de 21 de junio de 2004, para la confianza en la economía digital.',
    ],
    [
      `Punto de contacto único para las autoridades de los Estados miembros, la Comisión Europea, la Junta Europea de Servicios Digitales y los usuarios, en virtud del Reglamento (UE) 2022/2065 de servicios digitales: ${COMPANY.legal}.`,
      'Este punto de contacto puede utilizarse en francés o en inglés.',
    ],
    [
      'Los servicios de TblFlow están reservados a profesionales. No se ofrecen a consumidores en el sentido del Código de Consumo francés.',
      'En consecuencia, el derecho de desistimiento aplicable a los contratos a distancia con consumidores no se aplica, y no se ha designado ningún mediador de consumo.',
    ],
    [
      'Todos los elementos de este sitio (textos, logotipos, ilustraciones, estructura) son propiedad de SPACE UNITY o de sus licenciantes, salvo indicación en contrario. Queda prohibida toda reproducción o representación, total o parcial, sin autorización previa por escrito.',
    ],
    [
      'SPACE UNITY procura garantizar la exactitud de la información publicada en este sitio, sin garantía de exhaustividad. SPACE UNITY no puede ser considerada responsable de errores, omisiones ni de la indisponibilidad temporal del sitio.',
    ],
    [
      'Los datos que trata este sitio se describen en su política de privacidad, accesible desde el pie de página. Los rastreadores depositados se detallan en la política de cookies.',
      'Los tratamientos relativos a tu cuenta y a tu uso de la aplicación TblFlow se rigen por documentos distintos, publicados en app.tblflow.com: condiciones generales, política de privacidad y acuerdo de encargo del tratamiento.',
      `Contacto de protección de datos: ${COMPANY.privacy}.`,
    ],
    [
      'Este sitio y el presente aviso legal se rigen por el derecho francés. En caso de litigio, y a falta de resolución amistosa, los tribunales franceses serán los únicos competentes.',
    ],
  ],
  it: [
    [
      `${COMPANY.name}, ${COMPANY.form} (SASU francese a capitale variabile), con un capitale sociale di ${COMPANY.capital}, iscritta al ${COMPANY.rcs} con il numero ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Partita IVA intracomunitaria: ${COMPANY.vat}.`,
      `Sede legale: ${COMPANY.address}.`,
      `Telefono: ${COMPANY.phone}.`,
      `Direttore della pubblicazione: ${COMPANY.publisher}.`,
      `Contatto generale: ${COMPANY.email}. Supporto: ${COMPANY.support}.`,
    ],
    [
      `Il sito è ospitato da ${HOST.name}, ${HOST.address}. Telefono: ${HOST.phone}.`,
      'Questa indicazione è pubblicata in applicazione dell’articolo 6-III della legge francese n. 2004-575 del 21 giugno 2004 sulla fiducia nell’economia digitale.',
    ],
    [
      `Punto di contatto unico per le autorità degli Stati membri, la Commissione europea, il comitato europeo per i servizi digitali e gli utenti, ai sensi del regolamento (UE) 2022/2065 sui servizi digitali: ${COMPANY.legal}.`,
      'Questo punto di contatto può essere utilizzato in francese o in inglese.',
    ],
    [
      'I servizi TblFlow sono riservati ai professionisti. Non sono offerti ai consumatori ai sensi del Codice del consumo francese.',
      'Di conseguenza, il diritto di recesso previsto per i contratti a distanza con un consumatore non si applica e non è designato alcun mediatore del consumo.',
    ],
    [
      'Tutti gli elementi di questo sito (testi, loghi, illustrazioni, struttura) sono di proprietà di SPACE UNITY o dei suoi licenzianti, salvo diversa indicazione. È vietata qualsiasi riproduzione o rappresentazione, totale o parziale, senza previa autorizzazione scritta.',
    ],
    [
      "SPACE UNITY si adopera per garantire l'esattezza delle informazioni pubblicate su questo sito, senza garanzia di completezza. SPACE UNITY non può essere ritenuta responsabile di errori, omissioni o dell'indisponibilità temporanea del sito.",
    ],
    [
      'I dati trattati da questo sito sono descritti nella sua informativa sulla privacy, accessibile dal piè di pagina. I tracker depositati sono dettagliati nella politica sui cookie.',
      'I trattamenti legati al tuo account e al tuo uso dell’applicazione TblFlow sono oggetto di documenti distinti, pubblicati su app.tblflow.com: condizioni generali, informativa sulla privacy, accordo di trattamento.',
      `Contatto protezione dati: ${COMPANY.privacy}.`,
    ],
    [
      'Il presente sito e le presenti note legali sono soggetti al diritto francese. In caso di controversia, e in mancanza di soluzione amichevole, saranno competenti in via esclusiva i tribunali francesi.',
    ],
  ],
  ja: [
    [
      `${COMPANY.name}（フランス法上の ${COMPANY.form}／変動資本制の SASU）、資本金 ${COMPANY.capital}。${COMPANY.rcs} に番号 ${COMPANY.siren} で登録（SIRET ${COMPANY.siret}）。`,
      `EU 域内付加価値税番号：${COMPANY.vat}`,
      `本店所在地：${COMPANY.address}`,
      `電話：${COMPANY.phone}`,
      `発行責任者：${COMPANY.publisher}`,
      `総合窓口：${COMPANY.email}／サポート：${COMPANY.support}`,
    ],
    [
      `本サイトは ${HOST.name}（${HOST.address}、電話 ${HOST.phone}）がホスティングしています。`,
      '本記載は、デジタル経済における信頼に関する 2004 年 6 月 21 日のフランス法律第 2004-575 号第 6-III 条に基づくものです。',
    ],
    [
      `デジタルサービスに関する規則（EU）2022/2065 に基づく、加盟国当局・欧州委員会・欧州デジタルサービス委員会および利用者のための単一の連絡窓口：${COMPANY.legal}`,
      'この窓口へのご連絡は、フランス語または英語で承ります。',
    ],
    [
      'TblFlow の各サービスは事業者向けです。フランス消費法典にいう消費者に対しては提供されません。',
      'したがって、消費者との遠隔契約に適用される撤回権は適用されず、消費者調停機関も指定していません。',
    ],
    [
      '本サイトを構成するすべての要素（テキスト、ロゴ、図版、構成）は、別段の記載がない限り SPACE UNITY またはそのライセンサーに帰属します。事前の書面による許可なく、その全部または一部を複製・公衆送信することを禁じます。',
    ],
    [
      'SPACE UNITY は本サイトに掲載する情報の正確性の確保に努めますが、網羅性を保証するものではありません。誤り、記載漏れ、または本サイトの一時的な利用不能について、SPACE UNITY は責任を負いません。',
    ],
    [
      '本サイトが取り扱うデータについては、フッターからアクセスできる本サイトのプライバシーポリシーに記載しています。設置されるトラッカーは Cookie ポリシーに詳述しています。',
      'アカウントおよび TblFlow アプリケーションのご利用に関する取扱いは、app.tblflow.com に掲載する別個の文書（利用規約、プライバシーポリシー、データ処理契約）が定めます。',
      `データ保護に関する窓口：${COMPANY.privacy}`,
    ],
    [
      '本サイトおよび本法的表示はフランス法に準拠します。紛争が生じ、友好的な解決に至らない場合、フランスの裁判所が専属的管轄権を有します。',
    ],
  ],
  ru: [
    [
      `${COMPANY.name}, ${COMPANY.form} (французская SASU с переменным капиталом), уставный капитал ${COMPANY.capital}, зарегистрирована в ${COMPANY.rcs} под номером ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Внутриевропейский номер НДС: ${COMPANY.vat}.`,
      `Юридический адрес: ${COMPANY.address}.`,
      `Телефон: ${COMPANY.phone}.`,
      `Ответственный за публикацию: ${COMPANY.publisher}.`,
      `Общий контакт: ${COMPANY.email}. Поддержка: ${COMPANY.support}.`,
    ],
    [
      `Сайт размещён у ${HOST.name}, ${HOST.address}. Телефон: ${HOST.phone}.`,
      'Настоящее указание публикуется в соответствии со статьёй 6-III французского закона № 2004-575 от 21 июня 2004 года о доверии к цифровой экономике.',
    ],
    [
      `Единый контактный пункт для органов государств-членов, Европейской комиссии, Европейского совета по цифровым услугам и пользователей согласно Регламенту (ЕС) 2022/2065 о цифровых услугах: ${COMPANY.legal}.`,
      'Обращаться в этот контактный пункт можно на французском или английском языке.',
    ],
    [
      'Сервисы TblFlow предназначены для профессионального использования. Они не предлагаются потребителям в значении Потребительского кодекса Франции.',
      'Соответственно, право на отказ, применимое к дистанционным договорам с потребителем, не действует, и потребительский медиатор не назначен.',
    ],
    [
      'Все элементы этого сайта (тексты, логотипы, иллюстрации, структура) принадлежат SPACE UNITY или её лицензиарам, если не указано иное. Любое воспроизведение или представление, полностью или частично, без предварительного письменного разрешения запрещено.',
    ],
    [
      'SPACE UNITY стремится обеспечить точность публикуемой на сайте информации, не гарантируя её полноты. SPACE UNITY не несёт ответственности за ошибки, пропуски или временную недоступность сайта.',
    ],
    [
      'Данные, которые обрабатывает этот сайт, описаны в его политике конфиденциальности, доступной из подвала страницы. Устанавливаемые трекеры подробно описаны в политике cookie.',
      'Обработка, связанная с вашей учётной записью и использованием приложения TblFlow, регулируется отдельными документами, опубликованными на app.tblflow.com: условия использования, политика конфиденциальности, соглашение об обработке данных.',
      `Контакт по защите данных: ${COMPANY.privacy}.`,
    ],
    [
      'Настоящий сайт и настоящая правовая информация подчиняются французскому праву. В случае спора и при отсутствии мирного урегулирования исключительной компетенцией обладают французские суды.',
    ],
  ],
  tr: [
    [
      `${COMPANY.name}, ${COMPANY.form} (değişken sermayeli Fransız SASU), ${COMPANY.capital} sermayeli, ${COMPANY.rcs} nezdinde ${COMPANY.siren} numarasıyla kayıtlı (SIRET ${COMPANY.siret}).`,
      `AB içi KDV numarası: ${COMPANY.vat}.`,
      `Merkez adresi: ${COMPANY.address}.`,
      `Telefon: ${COMPANY.phone}.`,
      `Yayın sorumlusu: ${COMPANY.publisher}.`,
      `Genel iletişim: ${COMPANY.email}. Destek: ${COMPANY.support}.`,
    ],
    [
      `Site, ${HOST.name} tarafından barındırılmaktadır (${HOST.address}). Telefon: ${HOST.phone}.`,
      'Bu bilgi, dijital ekonomide güvene ilişkin 21 Haziran 2004 tarihli ve 2004-575 sayılı Fransız kanununun 6-III. maddesi uyarınca yayımlanmıştır.',
    ],
    [
      `Üye devlet makamları, Avrupa Komisyonu, Avrupa Dijital Hizmetler Kurulu ve kullanıcılar için, dijital hizmetlere ilişkin (AB) 2022/2065 sayılı Tüzük kapsamındaki tek iletişim noktası: ${COMPANY.legal}.`,
      'Bu iletişim noktasına Fransızca veya İngilizce olarak başvurulabilir.',
    ],
    [
      'TblFlow hizmetleri profesyonel kullanıma yöneliktir. Fransız Tüketici Kanunu anlamında tüketicilere sunulmaz.',
      'Dolayısıyla, tüketiciyle yapılan mesafeli sözleşmelere uygulanan cayma hakkı geçerli değildir ve herhangi bir tüketici arabulucusu atanmamıştır.',
    ],
    [
      'Bu sitenin tüm unsurları (metinler, logolar, görseller, yapı), aksi belirtilmedikçe SPACE UNITY’nin veya lisans verenlerinin mülkiyetindedir. Önceden yazılı izin alınmaksızın tamamen veya kısmen çoğaltılması ya da temsil edilmesi yasaktır.',
    ],
    [
      'SPACE UNITY, bu sitede yayımlanan bilgilerin doğruluğunu sağlamaya çalışır, ancak eksiksiz olduğunu garanti etmez. SPACE UNITY; hatalardan, eksikliklerden veya sitenin geçici olarak erişilemez olmasından sorumlu tutulamaz.',
    ],
    [
      'Bu sitenin işlediği veriler, sayfa altından erişilebilen gizlilik politikasında açıklanmıştır. Yerleştirilen izleyiciler çerez politikasında ayrıntılandırılmıştır.',
      'Hesabınıza ve TblFlow uygulamasını kullanımınıza ilişkin işlemeler, app.tblflow.com üzerinde yayımlanan ayrı belgelere tabidir: kullanım koşulları, gizlilik politikası, veri işleme sözleşmesi.',
      `Veri koruma iletişim adresi: ${COMPANY.privacy}.`,
    ],
    [
      'Bu site ve işbu yasal bilgiler Fransız hukukuna tabidir. Uyuşmazlık hâlinde ve dostane çözüme ulaşılamazsa, münhasıran Fransız mahkemeleri yetkilidir.',
    ],
  ],
  uk: [
    [
      `${COMPANY.name}, ${COMPANY.form} (французька SASU зі змінним капіталом), статутний капітал ${COMPANY.capital}, зареєстрована в ${COMPANY.rcs} під номером ${COMPANY.siren} (SIRET ${COMPANY.siret}).`,
      `Внутрішньоєвропейський номер ПДВ: ${COMPANY.vat}.`,
      `Юридична адреса: ${COMPANY.address}.`,
      `Телефон: ${COMPANY.phone}.`,
      `Відповідальний за публікацію: ${COMPANY.publisher}.`,
      `Загальний контакт: ${COMPANY.email}. Підтримка: ${COMPANY.support}.`,
    ],
    [
      `Сайт розміщено у ${HOST.name}, ${HOST.address}. Телефон: ${HOST.phone}.`,
      'Це зазначення публікується на виконання статті 6-III французького закону № 2004-575 від 21 червня 2004 року про довіру до цифрової економіки.',
    ],
    [
      `Єдиний контактний пункт для органів держав-членів, Європейської Комісії, Європейської ради з цифрових послуг та користувачів згідно з Регламентом (ЄС) 2022/2065 про цифрові послуги: ${COMPANY.legal}.`,
      'До цього контактного пункту можна звертатися французькою або англійською мовою.',
    ],
    [
      'Сервіси TblFlow призначені для професійного використання. Вони не пропонуються споживачам у розумінні Споживчого кодексу Франції.',
      'Відповідно, право на відмову, застосовне до дистанційних договорів зі споживачем, не діє, і споживчого медіатора не призначено.',
    ],
    [
      'Усі елементи цього сайту (тексти, логотипи, ілюстрації, структура) належать SPACE UNITY або її ліцензіарам, якщо не зазначено інше. Будь-яке відтворення чи представлення, повністю або частково, без попереднього письмового дозволу заборонено.',
    ],
    [
      'SPACE UNITY прагне забезпечити точність інформації, що публікується на цьому сайті, не гарантуючи її вичерпності. SPACE UNITY не несе відповідальності за помилки, упущення чи тимчасову недоступність сайту.',
    ],
    [
      'Дані, які обробляє цей сайт, описані в його політиці конфіденційності, доступній із підвалу сторінки. Встановлювані трекери докладно описані в політиці cookie.',
      'Обробка, повʼязана з вашим обліковим записом і використанням застосунку TblFlow, регулюється окремими документами, опублікованими на app.tblflow.com: умови використання, політика конфіденційності, угода про обробку даних.',
      `Контакт із питань захисту даних: ${COMPANY.privacy}.`,
    ],
    [
      'Цей сайт і ця правова інформація підпорядковуються французькому праву. У разі спору та за відсутності мирного врегулювання виключну компетенцію мають французькі суди.',
    ],
  ],
  zh: [
    [
      `${COMPANY.name}，${COMPANY.form}（法国可变资本 SASU），注册资本 ${COMPANY.capital}，在 ${COMPANY.rcs} 以 ${COMPANY.siren} 号注册（SIRET ${COMPANY.siret}）。`,
      `欧盟内增值税号：${COMPANY.vat}。`,
      `注册地址：${COMPANY.address}。`,
      `电话：${COMPANY.phone}。`,
      `出版负责人：${COMPANY.publisher}。`,
      `综合联系：${COMPANY.email}。支持：${COMPANY.support}。`,
    ],
    [
      `本站由 ${HOST.name} 托管，地址 ${HOST.address}，电话 ${HOST.phone}。`,
      '本项说明依据 2004 年 6 月 21 日法国第 2004-575 号《数字经济信任法》第 6-III 条发布。',
    ],
    [
      `根据关于数字服务的第 (EU) 2022/2065 号条例，面向成员国主管机关、欧盟委员会、欧洲数字服务委员会及用户的唯一联络点：${COMPANY.legal}。`,
      '与该联络点的沟通可使用法语或英语。',
    ],
    [
      'TblFlow 的各项服务面向专业用户。不向法国消费法典意义上的消费者提供。',
      '因此，适用于与消费者订立的远程合同的撤回权并不适用，亦未指定任何消费调解机构。',
    ],
    [
      '除另有说明外，本站的全部内容（文字、标识、插图、结构）均归 SPACE UNITY 或其许可方所有。未经事先书面许可，禁止全部或部分复制或展示。',
    ],
    [
      'SPACE UNITY 力求确保本站所发布信息的准确性，但不保证其完整性。对于错误、遗漏或本站的临时不可用，SPACE UNITY 不承担责任。',
    ],
    [
      '本站处理的数据在其隐私政策中说明，可从页脚访问。所设置的追踪技术详见 Cookie 政策。',
      '与您的账户以及您使用 TblFlow 应用相关的处理活动，适用发布在 app.tblflow.com 上的独立文件：使用条款、隐私政策、数据处理协议。',
      `数据保护联系方式：${COMPANY.privacy}。`,
    ],
    [
      '本站及本法律声明适用法国法律。发生争议且未能友好解决时，法国法院享有专属管辖权。',
    ],
  ],
};

export const LEGAL_NOTICE_SECTIONS: Record<Locale, LegalSection[]> = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    LEGAL_NOTICE_HEADINGS[l].map((heading, i) => ({ heading, body: LEGAL_NOTICE_BODIES[l][i] })),
  ])
) as Record<Locale, LegalSection[]>;

export const PRIVACY_TITLE: Record<Locale, string> = {
  de: 'Datenschutzerklärung der Website', en: 'Website privacy policy',
  es: 'Política de privacidad del sitio', fr: 'Politique de confidentialité du site',
  it: 'Informativa sulla privacy del sito', ja: '本サイトのプライバシーポリシー',
  ru: 'Политика конфиденциальности сайта', tr: 'Sitenin gizlilik politikası',
  uk: 'Політика конфіденційності сайту', zh: '网站隐私政策',
};

export const PRIVACY_LEDE: Record<Locale, string> = {
  de: 'Diese Erklärung betrifft ausschließlich die Website tblflow.com: was ein Besucher sieht, die Reichweitenmessung und die von ihm angestoßenen E-Mail-Kontakte. Die TblFlow-Anwendung hat ihre eigenen Dokumente.',
  en: 'This policy covers the tblflow.com site only: what a visitor sees, audience measurement, and the email exchanges they start. The TblFlow application has its own documents.',
  es: 'Esta política se refiere únicamente al sitio tblflow.com: lo que ve un visitante, la medición de audiencia y los intercambios por email que inicia. La aplicación TblFlow tiene sus propios documentos.',
  fr: "Cette politique porte uniquement sur le site tblflow.com : ce que voit un visiteur, la mesure d'audience, et les échanges par email qu'il engage. L'application TblFlow a ses propres documents.",
  it: 'Questa informativa riguarda unicamente il sito tblflow.com: ciò che vede un visitatore, la misurazione del traffico e gli scambi via email che avvia. L’applicazione TblFlow ha documenti propri.',
  ja: '本ポリシーは tblflow.com のサイトのみを対象とします。訪問者が目にするもの、アクセス測定、および訪問者から始まるメールのやり取りです。TblFlow アプリケーションには別の文書があります。',
  ru: 'Эта политика касается только сайта tblflow.com: того, что видит посетитель, аналитики и переписки по электронной почте, которую он начинает. У приложения TblFlow свои документы.',
  tr: 'Bu politika yalnızca tblflow.com sitesini kapsar: bir ziyaretçinin gördükleri, trafik ölçümü ve başlattığı e-posta yazışmaları. TblFlow uygulamasının kendi belgeleri vardır.',
  uk: 'Ця політика стосується лише сайту tblflow.com: того, що бачить відвідувач, аналітики та листування електронною поштою, яке він розпочинає. Застосунок TblFlow має власні документи.',
  zh: '本政策仅涉及 tblflow.com 网站：访问者所见的内容、流量统计，以及访问者主动发起的邮件往来。TblFlow 应用有其独立的文件。',
};

/** Bump by hand whenever a PRIVACY_SECTIONS paragraph changes. */
export const PRIVACY_LAST_UPDATED: Record<Locale, string> = {
  de: 'Zuletzt aktualisiert: 16. September 2026.',
  en: 'Last updated: September 16, 2026.',
  es: 'Última actualización: 16 de septiembre de 2026.',
  fr: 'Dernière mise à jour : 16 septembre 2026.',
  it: 'Ultimo aggiornamento: 16 settembre 2026.',
  ja: '最終更新：2026 年 9 月 16 日',
  ru: 'Последнее обновление: 16 сентября 2026 г.',
  tr: 'Son güncelleme: 16 Eylül 2026.',
  uk: 'Останнє оновлення: 16 вересня 2026 р.',
  zh: '最后更新：2026 年 9 月 16 日。',
};

const PRIVACY_HEADINGS: Record<Locale, string[]> = {
  de: ['Verantwortlicher', 'Was diese Erklärung abdeckt', 'Erhobene Daten', 'Reichweitenmessung (Google Analytics)', 'Weitere Empfänger', 'Speicherdauer', 'Datensicherheit', 'Ihre Rechte'],
  en: ['Data controller', 'What this policy covers', 'Data we collect', 'Audience measurement (Google Analytics)', 'Other recipients', 'Retention periods', 'Data security', 'Your rights'],
  es: ['Responsable del tratamiento', 'Qué cubre esta política', 'Datos recogidos', 'Medición de audiencia (Google Analytics)', 'Otros destinatarios', 'Plazos de conservación', 'Seguridad de los datos', 'Tus derechos'],
  fr: ['Responsable du traitement', 'Ce que couvre cette politique', 'Données collectées', 'Mesure d’audience (Google Analytics)', 'Autres destinataires', 'Durées de conservation', 'Sécurité des données', 'Vos droits'],
  it: ['Titolare del trattamento', 'Cosa copre questa informativa', 'Dati raccolti', 'Misurazione del traffico (Google Analytics)', 'Altri destinatari', 'Periodi di conservazione', 'Sicurezza dei dati', 'I tuoi diritti'],
  ja: ['管理者', '本ポリシーの対象範囲', '収集するデータ', 'アクセス測定（Google Analytics）', 'その他の提供先', '保存期間', 'データの安全管理', 'お客様の権利'],
  ru: ['Оператор данных', 'Что охватывает эта политика', 'Какие данные мы собираем', 'Аналитика (Google Analytics)', 'Другие получатели', 'Сроки хранения', 'Безопасность данных', 'Ваши права'],
  tr: ['Veri sorumlusu', 'Bu politikanın kapsamı', 'Topladığımız veriler', 'Trafik ölçümü (Google Analytics)', 'Diğer alıcılar', 'Saklama süreleri', 'Veri güvenliği', 'Haklarınız'],
  uk: ['Контролер даних', 'Що охоплює ця політика', 'Які дані ми збираємо', 'Аналітика (Google Analytics)', 'Інші одержувачі', 'Строки зберігання', 'Безпека даних', 'Ваші права'],
  zh: ['数据控制者', '本政策的适用范围', '我们收集的数据', '流量统计（Google Analytics）', '其他接收方', '保存期限', '数据安全', '您的权利'],
};

/**
 * Google's EU contracting entity. Not translated — it is a registered address.
 */
const GOOGLE_IE = 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland';

/**
 * The two published durations below are GA4 *console* settings, not something
 * this codebase can set or read:
 *   - 14 months  → Admin ▸ Data settings ▸ Data retention, with "reset on new
 *                  activity" OFF;
 *   - Google Signals OFF and Google products/services data sharing OFF, which
 *     is what makes "no advertising use" true.
 * The 13-month figure IS set here, via `cookie_expires` in CookieConsent.astro.
 * If anyone changes the console, this text becomes false — keep them in step.
 */
const PRIVACY_BODIES: Record<Locale, string[][]> = {
  fr: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, immatriculée sous le numéro ${COMPANY.siren} (${COMPANY.rcs}). Téléphone : ${COMPANY.phone}.`,
      `Contact protection des données : ${COMPANY.privacy}.`,
    ],
    [
      "Cette politique couvre le site vitrine tblflow.com : les pages que vous consultez, la mesure d'audience, et les emails que vous nous adressez.",
      "Elle ne couvre pas l'application TblFlow (app.tblflow.com) — compte, abonnement, facturation, et données que vous y hébergez. Ces traitements sont décrits dans les documents publiés sur app.tblflow.com : conditions générales, politique de confidentialité et accord de sous-traitance.",
    ],
    [
      "Ce site ne comporte aucun formulaire ni compte utilisateur. Les champs de recherche de la FAQ et du blog filtrent une liste déjà présente dans la page : rien n'est envoyé ni enregistré.",
      "Une préférence d'affichage (thème clair ou sombre) est enregistrée localement dans votre navigateur. Elle reste sur votre appareil et n'est jamais transmise.",
      "Si vous consentez à la mesure d'audience, Google Analytics 4 collecte des données de navigation pseudonymisées : pages consultées, durée de visite, type d'appareil, provenance approximative (pays ou région — jamais l'adresse IP complète, l'anonymisation étant activée).",
      'Si vous nous écrivez, nous traitons votre adresse email et le contenu de votre message dans le seul but de répondre à votre demande.',
    ],
    [
      "Finalité : comprendre quelles pages sont consultées et comment les visiteurs arrivent sur le site, afin d'en orienter le contenu. Aucun usage publicitaire, aucun profilage.",
      "Base légale : votre consentement (article 6.1.a du RGPD). Tant que vous n'avez pas accepté, aucune balise Google n'est chargée et aucun cookie n'est déposé. Vous pouvez revenir sur ce choix à tout moment via le lien « Gérer les cookies » en pied de page.",
      `Sous-traitant : ${GOOGLE_IE}.`,
      "Transferts hors Union européenne : les données peuvent être transmises à Google LLC, aux États-Unis. Ce transfert repose sur la décision d'adéquation adoptée par la Commission européenne le 10 juillet 2023 au titre du cadre de protection des données UE–États-Unis (Data Privacy Framework), auquel Google LLC est certifiée.",
      'Durées : les données d’utilisateur et d’événement sont conservées 14 mois dans Google Analytics, sans réinitialisation à chaque nouvelle activité. Les traceurs déposés sur votre appareil (_ga, _ga_*) ont une durée de 13 mois.',
      'Les signaux Google et le partage de données avec les services publicitaires de Google sont désactivés : la finalité reste la mesure d’audience.',
    ],
    [
      `${HOST.name}, hébergeur du site, qui fournit également une mesure d'audience native sans cookie, sans identifiant individuel et sans empreinte de navigateur.`,
      'Aucune donnée n’est vendue ni louée à des tiers.',
    ],
    [
      'Données Google Analytics : 14 mois à compter de la collecte, puis suppression automatique par Google.',
      'Traceurs _ga et _ga_* : 13 mois sur votre appareil.',
      'Choix de consentement : conservé localement 6 mois au maximum, conformément aux recommandations de la CNIL, après quoi la question vous est reposée.',
      'Emails que vous nous adressez : conservés le temps nécessaire au traitement et au suivi de votre demande.',
    ],
    [
      'Le site est servi exclusivement en HTTPS, avec HSTS, et hébergé sur l’infrastructure Cloudflare, qui assure le chiffrement en transit et la protection contre les attaques réseau courantes.',
      'Le site ne stocke aucune donnée de compte ni de paiement : il n’a ni base de données ni formulaire.',
    ],
    [
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Vous pouvez retirer votre consentement à tout moment, sans que cela affecte la licéité des traitements antérieurs.",
      `Pour exercer ces droits, écrivez à ${COMPANY.privacy}. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
    ],
  ],
  en: [
    [
      `${COMPANY.name}, a French ${COMPANY.form}, ${COMPANY.address}, registered as ${COMPANY.siren} (${COMPANY.rcs}). Telephone: ${COMPANY.phone}.`,
      `Data protection contact: ${COMPANY.privacy}.`,
    ],
    [
      'This policy covers the tblflow.com marketing site: the pages you read, audience measurement, and the emails you send us.',
      'It does not cover the TblFlow application (app.tblflow.com) — account, subscription, billing, and the data you host there. Those are described in the documents published on app.tblflow.com: terms of service, privacy policy and data processing agreement.',
    ],
    [
      'This site has no form and no user account. The FAQ and blog search fields filter a list already present in the page: nothing is sent or recorded.',
      'A display preference (light or dark theme) is stored locally in your browser. It stays on your device and is never transmitted.',
      'If you consent to audience measurement, Google Analytics 4 collects pseudonymized browsing data: pages viewed, time on page, device type, approximate location (country or region — never the full IP address, anonymization being enabled).',
      'If you write to us, we process your email address and the content of your message solely to answer your request.',
    ],
    [
      'Purpose: to understand which pages are read and how visitors reach the site, in order to steer its content. No advertising use, no profiling.',
      'Legal basis: your consent (GDPR Article 6.1.a). Until you accept, no Google tag is loaded and no cookie is set. You can change that choice at any time via the "Manage cookies" link in the footer.',
      `Processor: ${GOOGLE_IE}.`,
      'Transfers outside the European Union: data may be transmitted to Google LLC in the United States. That transfer relies on the adequacy decision adopted by the European Commission on 10 July 2023 under the EU–US Data Privacy Framework, to which Google LLC is certified.',
      'Durations: user and event data is retained for 14 months in Google Analytics, without resetting on new activity. The trackers set on your device (_ga, _ga_*) last 13 months.',
      'Google Signals and data sharing with Google advertising services are disabled: the purpose stays audience measurement.',
    ],
    [
      `${HOST.name}, the site's host, which also provides native audience measurement with no cookie, no individual identifier and no browser fingerprinting.`,
      'No data is sold or rented to third parties.',
    ],
    [
      'Google Analytics data: 14 months from collection, then automatically deleted by Google.',
      '_ga and _ga_* trackers: 13 months on your device.',
      'Consent choice: stored locally for up to 6 months, per CNIL guidance, after which you are asked again.',
      'Emails you send us: kept for as long as needed to handle and follow up your request.',
    ],
    [
      "The site is served exclusively over HTTPS, with HSTS, and hosted on Cloudflare's infrastructure, which handles encryption in transit and protection against common network attacks.",
      'The site stores no account or payment data: it has neither a database nor a form.',
    ],
    [
      'Under the GDPR, you have the right to access, rectify, erase, restrict, object to, and port your data. You can withdraw your consent at any time without affecting the lawfulness of earlier processing.',
      `To exercise these rights, write to ${COMPANY.privacy}. You may also lodge a complaint with the CNIL (www.cnil.fr) or your local data protection authority.`,
    ],
  ],
  de: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, eingetragen unter der Nummer ${COMPANY.siren} (${COMPANY.rcs}). Telefon: ${COMPANY.phone}.`,
      `Kontakt Datenschutz: ${COMPANY.privacy}.`,
    ],
    [
      'Diese Erklärung deckt die Website tblflow.com ab: die Seiten, die Sie lesen, die Reichweitenmessung und die E-Mails, die Sie uns schicken.',
      'Sie deckt nicht die TblFlow-Anwendung (app.tblflow.com) ab — Konto, Abonnement, Abrechnung und die dort von Ihnen gehosteten Daten. Diese sind in den auf app.tblflow.com veröffentlichten Dokumenten beschrieben: Nutzungsbedingungen, Datenschutzerklärung und Auftragsverarbeitungsvertrag.',
    ],
    [
      'Diese Website hat kein Formular und kein Nutzerkonto. Die Suchfelder von FAQ und Blog filtern eine bereits in der Seite vorhandene Liste: Es wird nichts gesendet und nichts gespeichert.',
      'Eine Anzeigeeinstellung (helles oder dunkles Thema) wird lokal in Ihrem Browser gespeichert. Sie bleibt auf Ihrem Gerät und wird nie übermittelt.',
      'Wenn Sie in die Reichweitenmessung einwilligen, erhebt Google Analytics 4 pseudonymisierte Nutzungsdaten: aufgerufene Seiten, Verweildauer, Gerätetyp, ungefähre Herkunft (Land oder Region — nie die vollständige IP-Adresse, da die Anonymisierung aktiviert ist).',
      'Wenn Sie uns schreiben, verarbeiten wir Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht ausschließlich zur Beantwortung Ihrer Anfrage.',
    ],
    [
      'Zweck: zu verstehen, welche Seiten gelesen werden und wie Besucher auf die Website gelangen, um deren Inhalte auszurichten. Keine werbliche Nutzung, kein Profiling.',
      'Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Solange Sie nicht zugestimmt haben, wird kein Google-Tag geladen und kein Cookie gesetzt. Sie können diese Wahl jederzeit über den Link „Cookies verwalten“ in der Fußzeile ändern.',
      `Auftragsverarbeiter: ${GOOGLE_IE}.`,
      'Übermittlungen außerhalb der Europäischen Union: Daten können an Google LLC in den Vereinigten Staaten übermittelt werden. Diese Übermittlung stützt sich auf den Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023 im Rahmen des EU–US Data Privacy Framework, für das Google LLC zertifiziert ist.',
      'Dauern: Nutzer- und Ereignisdaten werden 14 Monate in Google Analytics gespeichert, ohne Zurücksetzen bei neuer Aktivität. Die auf Ihrem Gerät gesetzten Tracker (_ga, _ga_*) haben eine Dauer von 13 Monaten.',
      'Google-Signale und die Datenweitergabe an Google-Werbedienste sind deaktiviert: Der Zweck bleibt die Reichweitenmessung.',
    ],
    [
      `${HOST.name}, Hoster der Website, die zugleich eine native Reichweitenmessung ohne Cookie, ohne individuelle Kennung und ohne Browser-Fingerprinting bereitstellt.`,
      'Es werden keine Daten verkauft oder vermietet.',
    ],
    [
      'Google-Analytics-Daten: 14 Monate ab Erhebung, danach automatische Löschung durch Google.',
      'Tracker _ga und _ga_*: 13 Monate auf Ihrem Gerät.',
      'Einwilligungsentscheidung: lokal höchstens 6 Monate gespeichert, entsprechend den Empfehlungen der CNIL, danach werden Sie erneut gefragt.',
      'E-Mails, die Sie uns schicken: so lange aufbewahrt, wie es für die Bearbeitung und Nachverfolgung Ihrer Anfrage erforderlich ist.',
    ],
    [
      'Die Website wird ausschließlich über HTTPS mit HSTS ausgeliefert und auf der Infrastruktur von Cloudflare gehostet, die die Verschlüsselung bei der Übertragung und den Schutz vor gängigen Netzwerkangriffen übernimmt.',
      'Die Website speichert keine Konto- oder Zahlungsdaten: Sie hat weder eine Datenbank noch ein Formular.',
    ],
    [
      'Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit. Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der zuvor erfolgten Verarbeitung berührt wird.',
      `Zur Ausübung dieser Rechte schreiben Sie an ${COMPANY.privacy}. Sie können sich zudem bei der CNIL (www.cnil.fr) oder Ihrer örtlichen Datenschutzbehörde beschweren.`,
    ],
  ],
  es: [
    [
      `${COMPANY.name}, ${COMPANY.form} francesa, ${COMPANY.address}, inscrita con el número ${COMPANY.siren} (${COMPANY.rcs}). Teléfono: ${COMPANY.phone}.`,
      `Contacto de protección de datos: ${COMPANY.privacy}.`,
    ],
    [
      'Esta política cubre el sitio tblflow.com: las páginas que consultas, la medición de audiencia y los emails que nos envías.',
      'No cubre la aplicación TblFlow (app.tblflow.com): cuenta, suscripción, facturación y datos que alojas en ella. Esos tratamientos se describen en los documentos publicados en app.tblflow.com: condiciones generales, política de privacidad y acuerdo de encargo del tratamiento.',
    ],
    [
      'Este sitio no tiene formularios ni cuentas de usuario. Los campos de búsqueda de la FAQ y del blog filtran una lista ya presente en la página: no se envía ni se registra nada.',
      'Una preferencia de visualización (tema claro u oscuro) se guarda localmente en tu navegador. Permanece en tu dispositivo y nunca se transmite.',
      'Si consientes la medición de audiencia, Google Analytics 4 recoge datos de navegación seudonimizados: páginas consultadas, duración de la visita, tipo de dispositivo, procedencia aproximada (país o región, nunca la dirección IP completa, ya que la anonimización está activada).',
      'Si nos escribes, tratamos tu dirección de email y el contenido de tu mensaje con el único fin de responder a tu solicitud.',
    ],
    [
      'Finalidad: entender qué páginas se consultan y cómo llegan los visitantes al sitio, para orientar su contenido. Ningún uso publicitario, ningún perfilado.',
      'Base legal: tu consentimiento (artículo 6.1.a del RGPD). Mientras no aceptes, no se carga ninguna etiqueta de Google ni se deposita ninguna cookie. Puedes cambiar esa elección en cualquier momento mediante el enlace «Gestionar cookies» del pie de página.',
      `Encargado del tratamiento: ${GOOGLE_IE}.`,
      'Transferencias fuera de la Unión Europea: los datos pueden transmitirse a Google LLC, en Estados Unidos. Esa transferencia se ampara en la decisión de adecuación adoptada por la Comisión Europea el 10 de julio de 2023 en el marco del Data Privacy Framework UE–EE. UU., al que Google LLC está certificada.',
      'Plazos: los datos de usuario y de evento se conservan 14 meses en Google Analytics, sin reinicio con cada nueva actividad. Los rastreadores depositados en tu dispositivo (_ga, _ga_*) duran 13 meses.',
      'Las señales de Google y la compartición de datos con los servicios publicitarios de Google están desactivadas: la finalidad sigue siendo la medición de audiencia.',
    ],
    [
      `${HOST.name}, alojamiento del sitio, que también proporciona una medición de audiencia nativa sin cookies, sin identificador individual y sin huella del navegador.`,
      'Ningún dato se vende ni se alquila a terceros.',
    ],
    [
      'Datos de Google Analytics: 14 meses desde la recogida, y después Google los elimina automáticamente.',
      'Rastreadores _ga y _ga_*: 13 meses en tu dispositivo.',
      'Elección de consentimiento: conservada localmente un máximo de 6 meses, conforme a las recomendaciones de la CNIL, tras lo cual se te vuelve a preguntar.',
      'Emails que nos envías: conservados el tiempo necesario para tratar y dar seguimiento a tu solicitud.',
    ],
    [
      'El sitio se sirve exclusivamente por HTTPS, con HSTS, y se aloja en la infraestructura de Cloudflare, que se encarga del cifrado en tránsito y de la protección frente a ataques de red habituales.',
      'El sitio no almacena datos de cuenta ni de pago: no tiene ni base de datos ni formulario.',
    ],
    [
      'Conforme al RGPD, tienes derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad. Puedes retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior.',
      `Para ejercer estos derechos, escribe a ${COMPANY.privacy}. También puedes presentar una reclamación ante la CNIL (www.cnil.fr) o ante tu autoridad de protección de datos local.`,
    ],
  ],
  it: [
    [
      `${COMPANY.name}, ${COMPANY.form} francese, ${COMPANY.address}, iscritta con il numero ${COMPANY.siren} (${COMPANY.rcs}). Telefono: ${COMPANY.phone}.`,
      `Contatto protezione dati: ${COMPANY.privacy}.`,
    ],
    [
      'Questa informativa copre il sito tblflow.com: le pagine che consulti, la misurazione del traffico e le email che ci invii.',
      'Non copre l’applicazione TblFlow (app.tblflow.com): account, abbonamento, fatturazione e dati che vi ospiti. Tali trattamenti sono descritti nei documenti pubblicati su app.tblflow.com: condizioni generali, informativa sulla privacy e accordo di trattamento.',
    ],
    [
      'Questo sito non ha moduli né account utente. I campi di ricerca della FAQ e del blog filtrano un elenco già presente nella pagina: nulla viene inviato o registrato.',
      'Una preferenza di visualizzazione (tema chiaro o scuro) viene salvata localmente nel tuo browser. Resta sul tuo dispositivo e non viene mai trasmessa.',
      'Se acconsenti alla misurazione del traffico, Google Analytics 4 raccoglie dati di navigazione pseudonimizzati: pagine consultate, durata della visita, tipo di dispositivo, provenienza approssimativa (paese o regione, mai l’indirizzo IP completo, essendo attiva l’anonimizzazione).',
      'Se ci scrivi, trattiamo il tuo indirizzo email e il contenuto del messaggio al solo scopo di rispondere alla tua richiesta.',
    ],
    [
      'Finalità: capire quali pagine vengono lette e come i visitatori arrivano sul sito, per orientarne i contenuti. Nessun uso pubblicitario, nessuna profilazione.',
      'Base giuridica: il tuo consenso (articolo 6.1.a del GDPR). Finché non accetti, nessun tag Google viene caricato e nessun cookie viene depositato. Puoi cambiare questa scelta in qualsiasi momento tramite il link «Gestisci i cookie» nel piè di pagina.',
      `Responsabile del trattamento: ${GOOGLE_IE}.`,
      'Trasferimenti fuori dall’Unione europea: i dati possono essere trasmessi a Google LLC, negli Stati Uniti. Tale trasferimento si fonda sulla decisione di adeguatezza adottata dalla Commissione europea il 10 luglio 2023 nell’ambito del Data Privacy Framework UE–USA, al quale Google LLC è certificata.',
      'Durate: i dati utente e di evento sono conservati 14 mesi in Google Analytics, senza reimpostazione a ogni nuova attività. I tracker depositati sul tuo dispositivo (_ga, _ga_*) durano 13 mesi.',
      'I segnali Google e la condivisione dei dati con i servizi pubblicitari di Google sono disattivati: la finalità resta la misurazione del traffico.',
    ],
    [
      `${HOST.name}, host del sito, che fornisce anche una misurazione nativa del traffico senza cookie, senza identificatore individuale e senza fingerprinting del browser.`,
      'Nessun dato viene venduto o affittato a terzi.',
    ],
    [
      'Dati Google Analytics: 14 mesi dalla raccolta, poi eliminazione automatica da parte di Google.',
      'Tracker _ga e _ga_*: 13 mesi sul tuo dispositivo.',
      'Scelta di consenso: conservata localmente per un massimo di 6 mesi, secondo le raccomandazioni della CNIL, dopodiché la domanda ti viene riproposta.',
      'Email che ci invii: conservate per il tempo necessario a trattare e seguire la tua richiesta.',
    ],
    [
      'Il sito è servito esclusivamente in HTTPS, con HSTS, e ospitato sull’infrastruttura Cloudflare, che garantisce la cifratura in transito e la protezione dagli attacchi di rete più comuni.',
      'Il sito non memorizza dati di account né di pagamento: non ha né database né moduli.',
    ],
    [
      'Ai sensi del GDPR hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità. Puoi revocare il consenso in qualsiasi momento, senza pregiudicare la liceità dei trattamenti precedenti.',
      `Per esercitare questi diritti, scrivi a ${COMPANY.privacy}. Puoi anche presentare reclamo alla CNIL (www.cnil.fr) o alla tua autorità di protezione dei dati locale.`,
    ],
  ],
  ja: [
    [
      `${COMPANY.name}（${COMPANY.form}）、${COMPANY.address}、登録番号 ${COMPANY.siren}（${COMPANY.rcs}）。電話：${COMPANY.phone}`,
      `データ保護に関する窓口：${COMPANY.privacy}`,
    ],
    [
      '本ポリシーは tblflow.com のサイトを対象とします。お読みになるページ、アクセス測定、そして当社へお送りいただくメールです。',
      'TblFlow アプリケーション（app.tblflow.com）は対象外です。アカウント、契約、請求、およびそこに保存されるデータは、app.tblflow.com に掲載する各文書（利用規約、プライバシーポリシー、データ処理契約）が定めます。',
    ],
    [
      '本サイトにフォームやユーザーアカウントはありません。FAQ とブログの検索欄は、すでにページ内にある一覧を絞り込むだけで、何も送信も記録もしません。',
      '表示設定（ライトまたはダークテーマ）はブラウザのローカルに保存されます。端末内に留まり、送信されることはありません。',
      'アクセス測定に同意いただいた場合、Google Analytics 4 が仮名化された閲覧データを収集します。閲覧ページ、滞在時間、デバイス種別、おおよその所在地（国または地域。IP 匿名化を有効にしているため、完全な IP アドレスは取得しません）。',
      'メールをお送りいただいた場合、ご依頼への回答のためだけに、メールアドレスと本文を取り扱います。',
    ],
    [
      '目的：どのページが読まれ、訪問者がどこから来たのかを把握し、サイトの内容に反映するためです。広告目的の利用も、プロファイリングも行いません。',
      '法的根拠：お客様の同意（GDPR 第 6 条 1 項 a）。ご承諾いただくまで、Google のタグは読み込まれず、Cookie も設置されません。フッターの「Cookie 設定」からいつでも変更できます。',
      `処理者：${GOOGLE_IE}`,
      '欧州連合域外への移転：データは米国の Google LLC に送信される場合があります。この移転は、欧州委員会が 2023 年 7 月 10 日に採択した EU–米国データプライバシーフレームワークに基づく十分性認定に依拠しており、Google LLC は同枠組みの認証を受けています。',
      '期間：ユーザーデータおよびイベントデータは Google Analytics に 14 か月保存され、新たな利用があってもリセットされません。端末に設置されるトラッカー（_ga、_ga_*）の期間は 13 か月です。',
      'Google シグナルおよび Google の広告サービスへのデータ共有は無効にしています。目的はアクセス測定にとどまります。',
    ],
    [
      `${HOST.name}。本サイトのホスティング事業者であり、Cookie も個別の識別子もブラウザフィンガープリントも用いないネイティブのアクセス測定も提供します。`,
      'データを第三者に販売または貸与することはありません。',
    ],
    [
      'Google Analytics のデータ：収集から 14 か月、その後 Google により自動的に削除されます。',
      'トラッカー _ga および _ga_*：端末上で 13 か月。',
      '同意の選択：CNIL の勧告に従い、ローカルに最長 6 か月保存され、その後あらためてお尋ねします。',
      'お送りいただいたメール：ご依頼の処理とその後の対応に必要な期間、保管します。',
    ],
    [
      '本サイトは HTTPS のみ、HSTS 付きで配信され、転送時の暗号化と一般的なネットワーク攻撃からの保護を担う Cloudflare のインフラ上でホストされています。',
      '本サイトはアカウント情報も決済情報も保存しません。データベースもフォームも持たないためです。',
    ],
    [
      'GDPR に基づき、お客様はアクセス、訂正、消去、処理の制限、異議申立て、およびポータビリティの権利を有します。同意はいつでも撤回でき、それ以前の処理の適法性には影響しません。',
      `これらの権利の行使は ${COMPANY.privacy} までご連絡ください。CNIL（www.cnil.fr）またはお住まいの国のデータ保護当局に苦情を申し立てることもできます。`,
    ],
  ],
  ru: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, зарегистрирована под номером ${COMPANY.siren} (${COMPANY.rcs}). Телефон: ${COMPANY.phone}.`,
      `Контакт по защите данных: ${COMPANY.privacy}.`,
    ],
    [
      'Эта политика охватывает сайт tblflow.com: страницы, которые вы читаете, аналитику и письма, которые вы нам отправляете.',
      'Она не охватывает приложение TblFlow (app.tblflow.com) — учётную запись, подписку, выставление счетов и данные, которые вы там размещаете. Эти вопросы описаны в документах на app.tblflow.com: условия использования, политика конфиденциальности и соглашение об обработке данных.',
    ],
    [
      'На этом сайте нет ни форм, ни учётных записей. Поля поиска в FAQ и блоге фильтруют список, уже присутствующий на странице: ничего не отправляется и не записывается.',
      'Настройка отображения (светлая или тёмная тема) сохраняется локально в вашем браузере. Она остаётся на устройстве и никогда не передаётся.',
      'Если вы согласились на аналитику, Google Analytics 4 собирает псевдонимизированные данные о просмотре: просмотренные страницы, длительность визита, тип устройства, приблизительное происхождение (страна или регион — полный IP-адрес никогда, анонимизация включена).',
      'Если вы нам пишете, мы обрабатываем ваш адрес электронной почты и содержание письма исключительно для ответа на ваш запрос.',
    ],
    [
      'Цель: понимать, какие страницы читают и как посетители попадают на сайт, чтобы определять его содержание. Никакого рекламного использования, никакого профилирования.',
      'Правовое основание: ваше согласие (статья 6.1.a GDPR). Пока вы не согласились, теги Google не загружаются и cookie не устанавливаются. Изменить выбор можно в любой момент по ссылке «Настройки cookie» в подвале страницы.',
      `Обработчик: ${GOOGLE_IE}.`,
      'Передача за пределы Европейского союза: данные могут передаваться Google LLC в США. Эта передача опирается на решение об адекватности, принятое Европейской комиссией 10 июля 2023 года в рамках Data Privacy Framework ЕС–США, по которому Google LLC сертифицирована.',
      'Сроки: пользовательские данные и данные о событиях хранятся 14 месяцев в Google Analytics, без сброса при новой активности. Трекеры на вашем устройстве (_ga, _ga_*) действуют 13 месяцев.',
      'Сигналы Google и передача данных рекламным сервисам Google отключены: цель остаётся аналитической.',
    ],
    [
      `${HOST.name} — хостер сайта, который также предоставляет встроенную аналитику без cookie, без индивидуального идентификатора и без browser fingerprinting.`,
      'Никакие данные не продаются и не сдаются в аренду третьим лицам.',
    ],
    [
      'Данные Google Analytics: 14 месяцев с момента сбора, затем автоматическое удаление со стороны Google.',
      'Трекеры _ga и _ga_*: 13 месяцев на вашем устройстве.',
      'Выбор согласия: хранится локально не более 6 месяцев, согласно рекомендациям CNIL, после чего вопрос задаётся снова.',
      'Письма, которые вы нам отправляете: хранятся столько, сколько нужно для обработки и сопровождения вашего запроса.',
    ],
    [
      'Сайт отдаётся исключительно по HTTPS, с HSTS, и размещён на инфраструктуре Cloudflare, которая обеспечивает шифрование при передаче и защиту от распространённых сетевых атак.',
      'Сайт не хранит ни данных учётной записи, ни платёжных данных: у него нет ни базы данных, ни форм.',
    ],
    [
      'В соответствии с GDPR вы имеете право на доступ, исправление, удаление, ограничение обработки, возражение и переносимость. Вы можете отозвать согласие в любой момент, что не затрагивает законность предшествующей обработки.',
      `Для реализации этих прав напишите на ${COMPANY.privacy}. Вы также вправе подать жалобу в CNIL (www.cnil.fr) или в местный орган по защите данных.`,
    ],
  ],
  tr: [
    [
      `${COMPANY.name}, Fransız ${COMPANY.form}, ${COMPANY.address}, ${COMPANY.siren} numarasıyla kayıtlı (${COMPANY.rcs}). Telefon: ${COMPANY.phone}.`,
      `Veri koruma iletişim adresi: ${COMPANY.privacy}.`,
    ],
    [
      'Bu politika tblflow.com sitesini kapsar: okuduğunuz sayfalar, trafik ölçümü ve bize gönderdiğiniz e-postalar.',
      'TblFlow uygulamasını (app.tblflow.com) kapsamaz: hesap, abonelik, faturalandırma ve orada barındırdığınız veriler. Bunlar app.tblflow.com üzerinde yayımlanan belgelerde açıklanmıştır: kullanım koşulları, gizlilik politikası ve veri işleme sözleşmesi.',
    ],
    [
      'Bu sitede form ya da kullanıcı hesabı yoktur. SSS ve blog arama alanları, sayfada zaten bulunan bir listeyi süzer: hiçbir şey gönderilmez veya kaydedilmez.',
      'Bir görüntüleme tercihi (açık veya koyu tema) tarayıcınızda yerel olarak saklanır. Cihazınızda kalır ve asla iletilmez.',
      'Trafik ölçümüne onay verirseniz, Google Analytics 4 takma adlaştırılmış gezinme verilerini toplar: görüntülenen sayfalar, ziyaret süresi, cihaz türü, yaklaşık konum (ülke veya bölge — anonimleştirme etkin olduğundan tam IP adresi asla).',
      'Bize yazarsanız, e-posta adresinizi ve mesajınızın içeriğini yalnızca talebinizi yanıtlamak için işleriz.',
    ],
    [
      'Amaç: hangi sayfaların okunduğunu ve ziyaretçilerin siteye nasıl ulaştığını anlayarak içeriği yönlendirmek. Reklam amaçlı kullanım yok, profilleme yok.',
      'Hukuki dayanak: onayınız (GDPR madde 6.1.a). Siz kabul etmeden hiçbir Google etiketi yüklenmez ve hiçbir çerez yerleştirilmez. Bu tercihi, sayfa altındaki «Çerezleri yönet» bağlantısıyla istediğiniz zaman değiştirebilirsiniz.',
      `Veri işleyen: ${GOOGLE_IE}.`,
      'Avrupa Birliği dışına aktarımlar: veriler Amerika Birleşik Devletleri’ndeki Google LLC’ye iletilebilir. Bu aktarım, Avrupa Komisyonu’nun 10 Temmuz 2023 tarihinde AB–ABD Veri Gizliliği Çerçevesi kapsamında aldığı yeterlilik kararına dayanır; Google LLC bu çerçeveye sertifikalıdır.',
      'Süreler: kullanıcı ve olay verileri Google Analytics’te 14 ay saklanır ve yeni etkinlikte sıfırlanmaz. Cihazınıza yerleştirilen izleyiciler (_ga, _ga_*) 13 ay sürer.',
      'Google sinyalleri ve Google reklam hizmetleriyle veri paylaşımı devre dışıdır: amaç trafik ölçümü olarak kalır.',
    ],
    [
      `${HOST.name}, sitenin barındırıcısı; ayrıca çerez, bireysel tanımlayıcı ve tarayıcı parmak izi kullanmayan yerleşik bir trafik ölçümü sağlar.`,
      'Hiçbir veri üçüncü taraflara satılmaz veya kiralanmaz.',
    ],
    [
      'Google Analytics verileri: toplanmasından itibaren 14 ay, ardından Google tarafından otomatik olarak silinir.',
      '_ga ve _ga_* izleyicileri: cihazınızda 13 ay.',
      'Onay tercihi: CNIL tavsiyelerine uygun olarak yerel biçimde en fazla 6 ay saklanır, ardından size yeniden sorulur.',
      'Bize gönderdiğiniz e-postalar: talebinizin işlenmesi ve takibi için gereken süre boyunca saklanır.',
    ],
    [
      'Site yalnızca HTTPS üzerinden, HSTS ile sunulur ve aktarım sırasında şifrelemeyi ve yaygın ağ saldırılarına karşı korumayı üstlenen Cloudflare altyapısında barındırılır.',
      'Site hiçbir hesap veya ödeme verisi saklamaz: ne veritabanı ne de formu vardır.',
    ],
    [
      'GDPR uyarınca erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz etme ve taşınabilirlik haklarına sahipsiniz. Onayınızı istediğiniz zaman geri alabilirsiniz; bu, önceki işlemenin hukuka uygunluğunu etkilemez.',
      `Bu hakları kullanmak için ${COMPANY.privacy} adresine yazın. Ayrıca CNIL’e (www.cnil.fr) veya kendi ülkenizdeki veri koruma otoritesine şikâyette bulunabilirsiniz.`,
    ],
  ],
  uk: [
    [
      `${COMPANY.name}, ${COMPANY.form}, ${COMPANY.address}, зареєстрована під номером ${COMPANY.siren} (${COMPANY.rcs}). Телефон: ${COMPANY.phone}.`,
      `Контакт із питань захисту даних: ${COMPANY.privacy}.`,
    ],
    [
      'Ця політика охоплює сайт tblflow.com: сторінки, які ви читаєте, аналітику та листи, які ви нам надсилаєте.',
      'Вона не охоплює застосунок TblFlow (app.tblflow.com) — обліковий запис, підписку, виставлення рахунків і дані, які ви там розміщуєте. Це описано в документах на app.tblflow.com: умови використання, політика конфіденційності та угода про обробку даних.',
    ],
    [
      'На цьому сайті немає ані форм, ані облікових записів. Поля пошуку у FAQ та блозі фільтрують перелік, уже наявний на сторінці: нічого не надсилається й не записується.',
      'Налаштування відображення (світла або темна тема) зберігається локально у вашому браузері. Воно лишається на пристрої й ніколи не передається.',
      'Якщо ви погодилися на аналітику, Google Analytics 4 збирає псевдонімізовані дані перегляду: переглянуті сторінки, тривалість візиту, тип пристрою, приблизне походження (країна або регіон — повну IP-адресу ніколи, анонімізацію увімкнено).',
      'Якщо ви нам пишете, ми обробляємо вашу адресу електронної пошти та зміст листа виключно для відповіді на ваш запит.',
    ],
    [
      'Мета: розуміти, які сторінки читають і як відвідувачі потрапляють на сайт, щоб визначати його зміст. Жодного рекламного використання, жодного профілювання.',
      'Правова підстава: ваша згода (стаття 6.1.a GDPR). Доки ви не погодилися, теги Google не завантажуються і cookie не встановлюються. Змінити вибір можна будь-коли за посиланням «Керувати файлами cookie» в підвалі сторінки.',
      `Обробник: ${GOOGLE_IE}.`,
      'Передавання за межі Європейського Союзу: дані можуть передаватися Google LLC у США. Це передавання спирається на рішення про адекватність, ухвалене Європейською Комісією 10 липня 2023 року в межах Data Privacy Framework ЄС–США, за яким Google LLC сертифікована.',
      'Строки: дані користувача та подій зберігаються 14 місяців у Google Analytics, без скидання за новою активністю. Трекери на вашому пристрої (_ga, _ga_*) діють 13 місяців.',
      'Сигнали Google і передавання даних рекламним сервісам Google вимкнено: мета лишається аналітичною.',
    ],
    [
      `${HOST.name} — хостер сайту, який також надає вбудовану аналітику без cookie, без індивідуального ідентифікатора та без browser fingerprinting.`,
      'Жодні дані не продаються і не здаються в оренду третім особам.',
    ],
    [
      'Дані Google Analytics: 14 місяців від моменту збору, потім автоматичне видалення з боку Google.',
      'Трекери _ga і _ga_*: 13 місяців на вашому пристрої.',
      'Вибір згоди: зберігається локально не більше 6 місяців, згідно з рекомендаціями CNIL, після чого питання ставиться знову.',
      'Листи, які ви нам надсилаєте: зберігаються стільки, скільки потрібно для опрацювання та супроводу вашого запиту.',
    ],
    [
      'Сайт віддається виключно через HTTPS, із HSTS, і розміщений на інфраструктурі Cloudflare, яка забезпечує шифрування під час передавання та захист від поширених мережевих атак.',
      'Сайт не зберігає ані даних облікового запису, ані платіжних даних: у нього немає ані бази даних, ані форм.',
    ],
    [
      'Відповідно до GDPR ви маєте право на доступ, виправлення, видалення, обмеження обробки, заперечення та перенесення. Ви можете відкликати згоду будь-коли, що не впливає на законність попередньої обробки.',
      `Щоб скористатися цими правами, напишіть на ${COMPANY.privacy}. Ви також можете подати скаргу до CNIL (www.cnil.fr) або до місцевого органу із захисту даних.`,
    ],
  ],
  zh: [
    [
      `${COMPANY.name}，法国${COMPANY.form}，${COMPANY.address}，注册号 ${COMPANY.siren}（${COMPANY.rcs}）。电话：${COMPANY.phone}。`,
      `数据保护联系方式：${COMPANY.privacy}。`,
    ],
    [
      '本政策涵盖 tblflow.com 网站：您阅读的页面、流量统计，以及您发给我们的邮件。',
      '不涵盖 TblFlow 应用（app.tblflow.com）—— 账户、订阅、开票，以及您在其中存放的数据。这些内容在 app.tblflow.com 发布的文件中说明：使用条款、隐私政策和数据处理协议。',
    ],
    [
      '本站没有表单，也没有用户账户。FAQ 和博客的搜索框只是筛选页面中已有的列表：不发送、也不记录任何内容。',
      '显示偏好（浅色或深色主题）保存在您浏览器本地。它留在您的设备上，绝不会被传输。',
      '若您同意流量统计，Google Analytics 4 会收集经假名化的浏览数据：所看页面、停留时长、设备类型、大致来源（国家或地区 —— 因已启用匿名化，绝不含完整 IP 地址）。',
      '若您写信给我们，我们仅为回复您的请求而处理您的邮箱地址和邮件内容。',
    ],
    [
      '目的：了解哪些页面被阅读、访问者如何到达本站，以指导内容方向。不作广告用途，不做用户画像。',
      '法律依据：您的同意（GDPR 第 6.1.a 条）。在您接受之前，不会加载任何 Google 代码，也不会写入任何 Cookie。您可随时通过页脚的「Cookie 设置」链接更改该选择。',
      `受托处理方：${GOOGLE_IE}。`,
      '向欧盟境外的传输：数据可能传输至位于美国的 Google LLC。该传输依据欧盟委员会于 2023 年 7 月 10 日在欧盟–美国数据隐私框架下作出的充分性认定，Google LLC 已就该框架取得认证。',
      '期限：用户数据与事件数据在 Google Analytics 中保存 14 个月，且不会因新活动而重置。写入您设备的追踪标识（_ga、_ga_*）期限为 13 个月。',
      'Google 信号以及与 Google 广告服务的数据共享均已关闭：用途仍限于流量统计。',
    ],
    [
      `${HOST.name}，本站的托管方，同时提供不使用 Cookie、不使用个体标识符、不做浏览器指纹识别的原生流量统计。`,
      '不会向第三方出售或出租任何数据。',
    ],
    [
      'Google Analytics 数据：自收集之日起 14 个月，此后由 Google 自动删除。',
      '_ga 与 _ga_* 追踪标识：在您的设备上 13 个月。',
      '同意选择：依据 CNIL 的建议，保存在本地最长 6 个月，之后会再次询问您。',
      '您发给我们的邮件：保存至处理并跟进您的请求所需的期限。',
    ],
    [
      '本站仅通过 HTTPS 提供并启用 HSTS，托管在 Cloudflare 的基础设施上，由其负责传输加密和防范常见网络攻击。',
      '本站不存储任何账户或支付数据：它既没有数据库，也没有表单。',
    ],
    [
      '根据 GDPR，您享有访问、更正、删除、限制处理、反对以及数据可携带的权利。您可随时撤回同意，且不影响此前处理的合法性。',
      `如需行使这些权利，请写信至 ${COMPANY.privacy}。您也可以向 CNIL（www.cnil.fr）或您所在地的数据保护机构提出投诉。`,
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

/**
 * The four rows below are the complete set — see COOKIES_LEDE. `name` is the
 * technical identifier and is never translated.
 *
 * The 13-month figure on the _ga row is not a guess: it is what
 * `cookie_expires` sets in CookieConsent.astro. Measured on production before
 * that was set, the cookies ran to 400 days — Chrome's own cap, not GA's
 * default of two years. Change one and the other becomes a lie.
 */
export const COOKIE_TABLE: Record<Locale, CookieRow[]> = {
  de: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, kein Cookie)', purpose: 'Merkt sich Ihre Einstellung für helle/dunkle Darstellung.', duration: 'Bis zum manuellen Löschen', consent: 'Keine — unbedingt erforderlich' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, kein Cookie)', purpose: 'Merkt sich Ihre Einwilligungsentscheidung, damit wir nicht erneut fragen.', duration: '6 Monate, danach erscheint der Banner wieder', consent: 'Keine — für die Funktion des Banners erforderlich' },
    { name: '(ohne Namen, API-Anfragen)', provider: 'Cloudflare Web Analytics', purpose: 'Aggregierte Reichweitenmessung, ohne individuelle Kennung und ohne Fingerprinting.', duration: 'Keine Daten im Browser gespeichert', consent: 'Keine — cookielose Technologie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Unterscheidet Besucher und Sitzungen, um Nutzungsstatistiken zu erstellen.', duration: '13 Monate', consent: 'Erforderlich — wird nur nach Zustimmung gesetzt' },
  ],
  en: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, not a cookie)', purpose: 'Remembers your light/dark display preference.', duration: 'Until manually cleared', consent: 'None — strictly necessary' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, not a cookie)', purpose: "Remembers your consent choice so we don't ask again.", duration: '6 months, then the banner reappears', consent: 'None — required for the banner to work' },
    { name: '(unnamed, API requests)', provider: 'Cloudflare Web Analytics', purpose: 'Aggregate audience measurement, with no individual identifier or fingerprinting.', duration: 'No data stored in the browser', consent: 'None — cookieless technology' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distinguishes visitors and sessions to produce audience statistics.', duration: '13 months', consent: 'Required — set only after acceptance' },
  ],
  es: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, no es una cookie)', purpose: 'Recuerda tu preferencia de visualización clara u oscura.', duration: 'Hasta su borrado manual', consent: 'Ninguno — estrictamente necesaria' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, no es una cookie)', purpose: 'Recuerda tu elección de consentimiento para no volver a preguntártelo.', duration: '6 meses, luego reaparece el banner', consent: 'Ninguno — necesaria para el funcionamiento del banner' },
    { name: '(sin nombre, solicitudes de API)', provider: 'Cloudflare Web Analytics', purpose: 'Medición de audiencia agregada, sin identificador individual ni fingerprinting.', duration: 'Ningún dato almacenado en el navegador', consent: 'Ninguno — tecnología sin cookies' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distingue visitantes y sesiones para producir estadísticas de audiencia.', duration: '13 meses', consent: 'Requerido — se deposita solo tras la aceptación' },
  ],
  fr: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, pas un cookie)', purpose: "Mémorise votre préférence d'affichage clair/sombre.", duration: 'Jusqu’à suppression manuelle', consent: 'Aucun — strictement nécessaire' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, pas un cookie)', purpose: 'Mémorise votre choix de consentement pour ne pas vous le redemander.', duration: '6 mois, puis le bandeau réapparaît', consent: 'Aucun — nécessaire au fonctionnement du bandeau' },
    { name: '(sans nom, requêtes API)', provider: 'Cloudflare Web Analytics', purpose: "Mesure d'audience agrégée, sans identifiant individuel ni fingerprinting.", duration: 'Aucune donnée stockée côté navigateur', consent: 'Aucun — technologie sans cookie, exemptée par la CNIL' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: "Distingue les visiteurs et les sessions pour produire des statistiques d'audience.", duration: '13 mois', consent: 'Requis — déposé uniquement après acceptation' },
  ],
  it: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, non è un cookie)', purpose: 'Memorizza la tua preferenza di visualizzazione chiara/scura.', duration: 'Fino alla cancellazione manuale', consent: 'Nessuno — strettamente necessario' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, non è un cookie)', purpose: 'Memorizza la tua scelta di consenso per non richiedertela di nuovo.', duration: '6 mesi, poi il banner ricompare', consent: 'Nessuno — necessario al funzionamento del banner' },
    { name: '(senza nome, richieste API)', provider: 'Cloudflare Web Analytics', purpose: 'Misurazione aggregata del traffico, senza identificatore individuale né fingerprinting.', duration: 'Nessun dato memorizzato nel browser', consent: 'Nessuno — tecnologia senza cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Distingue visitatori e sessioni per produrre statistiche di traffico.', duration: '13 mesi', consent: 'Richiesto — depositato solo dopo accettazione' },
  ],
  ja: [
    { name: 'theme', provider: 'SPACE UNITY（localStorage、Cookie ではありません）', purpose: 'ライト／ダークの表示設定を記憶します。', duration: '手動で削除するまで', consent: '不要 — 必須の機能' },
    { name: 'cookie-consent', provider: 'SPACE UNITY（localStorage、Cookie ではありません）', purpose: '再度お尋ねしないよう、同意の選択を記憶します。', duration: '6 か月、その後バナーが再表示されます', consent: '不要 — バナーの動作に必要' },
    { name: '（名称なし、API リクエスト）', provider: 'Cloudflare Web Analytics', purpose: '個別の識別子もフィンガープリンティングも用いない、集計されたアクセス測定。', duration: 'ブラウザ側にデータを保存しません', consent: '不要 — Cookie を使わない技術' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: '訪問者とセッションを区別し、アクセス統計を作成します。', duration: '13 か月', consent: '必要 — 同意後にのみ設置' },
  ],
  ru: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запоминает ваш выбор светлого или тёмного оформления.', duration: 'До удаления вручную', consent: 'Не требуется — строго необходимо' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запоминает ваш выбор согласия, чтобы не спрашивать снова.', duration: '6 месяцев, затем баннер появляется снова', consent: 'Не требуется — необходимо для работы баннера' },
    { name: '(без имени, запросы к API)', provider: 'Cloudflare Web Analytics', purpose: 'Агрегированная аналитика без индивидуального идентификатора и без фингерпринтинга.', duration: 'Никакие данные в браузере не хранятся', consent: 'Не требуется — технология без cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Различает посетителей и сессии для построения статистики посещаемости.', duration: '13 месяцев', consent: 'Требуется — устанавливается только после согласия' },
  ],
  tr: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, çerez değil)', purpose: 'Açık/koyu görünüm tercihinizi hatırlar.', duration: 'Elle silinene kadar', consent: 'Gerekmez — kesinlikle zorunlu' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, çerez değil)', purpose: 'Tekrar sormamak için onay tercihinizi hatırlar.', duration: '6 ay, ardından banner yeniden görünür', consent: 'Gerekmez — banner’ın çalışması için zorunlu' },
    { name: '(adsız, API istekleri)', provider: 'Cloudflare Web Analytics', purpose: 'Bireysel tanımlayıcı ve parmak izi çıkarma olmadan toplu trafik ölçümü.', duration: 'Tarayıcıda veri saklanmaz', consent: 'Gerekmez — çerezsiz teknoloji' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Trafik istatistikleri üretmek için ziyaretçileri ve oturumları ayırt eder.', duration: '13 ay', consent: 'Gerekli — yalnızca kabulden sonra yerleştirilir' },
  ],
  uk: [
    { name: 'theme', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запамʼятовує ваш вибір світлого чи темного оформлення.', duration: 'До видалення вручну', consent: 'Не потрібна — суворо необхідно' },
    { name: 'cookie-consent', provider: 'SPACE UNITY (localStorage, не cookie)', purpose: 'Запамʼятовує ваш вибір згоди, щоб не питати знову.', duration: '6 місяців, потім банер зʼявляється знову', consent: 'Не потрібна — необхідно для роботи банера' },
    { name: '(без назви, запити до API)', provider: 'Cloudflare Web Analytics', purpose: 'Агрегована аналітика без індивідуального ідентифікатора та без фінгерпринтингу.', duration: 'Жодні дані в браузері не зберігаються', consent: 'Не потрібна — технологія без cookie' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: 'Розрізняє відвідувачів і сесії, щоб будувати статистику відвідуваності.', duration: '13 місяців', consent: 'Потрібна — встановлюється лише після згоди' },
  ],
  zh: [
    { name: 'theme', provider: 'SPACE UNITY（localStorage，并非 Cookie）', purpose: '记住您的浅色/深色显示偏好。', duration: '直到手动清除', consent: '无需 — 严格必要' },
    { name: 'cookie-consent', provider: 'SPACE UNITY（localStorage，并非 Cookie）', purpose: '记住您的同意选择，避免重复询问。', duration: '6 个月，之后横幅重新出现', consent: '无需 — 横幅运行所必需' },
    { name: '（无名称，API 请求）', provider: 'Cloudflare Web Analytics', purpose: '聚合式流量统计，不使用个体标识符，也不做指纹识别。', duration: '浏览器端不存储任何数据', consent: '无需 — 无 Cookie 技术' },
    { name: '_ga, _ga_*', provider: 'Google Analytics 4', purpose: '区分访客与会话，以生成访问统计。', duration: '13 个月', consent: '需要 — 仅在接受后写入' },
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

/**
 * The CGVU are not reproduced here. They govern the application, are published
 * with it at `APP_LEGAL.terms`, and a second copy on this site would diverge
 * from the first the moment either is amended — so this page points at the one
 * that binds rather than restating it.
 */
export const TERMS_SIGNPOST: Record<Locale, { lede: string; cta: string }> = {
  de: {
    lede: 'Die Allgemeinen Geschäfts- und Nutzungsbedingungen von TblFlow werden zusammen mit der Anwendung veröffentlicht. Maßgeblich ist ausschließlich die dort veröffentlichte Fassung.',
    cta: 'Bedingungen lesen',
  },
  en: {
    lede: "TblFlow's terms of service are published with the application. The version published there is the only one that binds.",
    cta: 'Read the terms',
  },
  es: {
    lede: 'Las condiciones generales de TblFlow se publican junto con la aplicación. La versión publicada allí es la única que obliga.',
    cta: 'Leer las condiciones',
  },
  fr: {
    lede: "Les conditions générales de TblFlow sont publiées avec l'application. La version qui y figure est la seule qui engage.",
    cta: 'Lire les conditions générales',
  },
  it: {
    lede: 'Le condizioni generali di TblFlow sono pubblicate insieme all’applicazione. La versione pubblicata lì è l’unica vincolante.',
    cta: 'Leggere le condizioni',
  },
  ja: {
    lede: 'TblFlow の一般条件はアプリケーションとともに公開されています。効力を持つのは、そちらに掲載された版のみです。',
    cta: '一般条件を読む',
  },
  ru: {
    lede: 'Общие условия TblFlow публикуются вместе с приложением. Обязательной является только опубликованная там версия.',
    cta: 'Читать условия',
  },
  tr: {
    lede: 'TblFlow’un genel koşulları uygulamayla birlikte yayımlanır. Bağlayıcı olan yalnızca orada yayımlanan sürümdür.',
    cta: 'Koşulları okuyun',
  },
  uk: {
    lede: 'Загальні умови TblFlow публікуються разом із застосунком. Обовʼязковою є лише опублікована там версія.',
    cta: 'Читати умови',
  },
  zh: {
    lede: 'TblFlow 的通用条款随应用一并发布。仅在那里发布的版本具有约束力。',
    cta: '阅读条款',
  },
};
