import type { Locale } from '@/config';

/**
 * Trust page (T3). Every statement is traced to the app repo or to a decision
 * of the company; anything not provable stays out (zero-retention contracts,
 * email provider, signed DPA). Do not add a claim without a source.
 * No "SLA", "certified ISO", "sovereign" or "all your data in Europe": the
 * check-pricing gate scans the built page for them.
 */
export interface TrustSection {
  title: string;
  text: string;
}
export interface TrustTexts {
  title: string;
  description: string;
  intro: string;
  sections: TrustSection[];
}

export const TRUST: Record<Locale, TrustTexts> = {
  fr: {
    title: 'Confiance',
    description:
      'Hébergement, sous-traitants, IA, voix, DPA, normes et export des données : ce que TblFlow fait et ne fait pas.',
    intro:
      'Cette page dit ce qui est vrai aujourd’hui, y compris ce que nous ne promettons pas. Pour un point absent, écrivez-nous : nous répondons par écrit.',
    sections: [
      {
        title: 'Hébergement et disponibilité',
        text: 'L’application et la base de données sont hébergées à Vienne (Autriche), chez netcup, sur un seul serveur, sans haute disponibilité. Le fournisseur garantit 99,6 % de disponibilité en moyenne annuelle, soit environ 35 heures d’interruption tolérées par an. TblFlow ne prend aucun engagement contractuel de disponibilité. Les fichiers que vous ajoutez sont stockés sur Cloudflare R2, en Europe de l’Ouest. Les sauvegardes sont horaires (perte maximale d’une heure de données), chiffrées et stockées sur Cloudflare R2, dans la juridiction UE.',
      },
      {
        title: 'Sous-traitants',
        text: 'Hébergement : netcup (Vienne, Autriche). Fichiers et sauvegardes : Cloudflare R2 (Europe de l’Ouest ; juridiction UE pour les sauvegardes). E-mails : Resend (États-Unis). IA : OpenRouter (États-Unis), qui transmet les requêtes à Anthropic et Google (Gemini) ; la vectorisation passe par MongoDB/Voyage AI, également via OpenRouter. Recherche web : Tavily (États-Unis). D’autres fournisseurs d’IA (par exemple OpenAI ou Mistral) n’interviennent que si vous configurez votre propre clé. Le contenu envoyé à l’IA peut donc quitter l’Union européenne. Liste contractuelle : DPA version 1.4, en vigueur le 2026-12-18.',
      },
      {
        title: 'Conservation des données par les fournisseurs d’IA',
        text: 'Rétention zéro exigée auprès des fournisseurs qui la proposent. Certains (dont Google) conservent les requêtes pour la seule prévention des abus, jamais pour l’entraînement. L’entraînement sur vos données est désactivé.',
      },
      {
        title: 'Saisie vocale',
        text: 'La dictée dans le chat utilise la reconnaissance vocale de votre navigateur. Selon le navigateur, l’audio peut être traité par son éditeur, pas par TblFlow. Vous pouvez simplement ne pas l’utiliser : le clavier fonctionne toujours.',
      },
      {
        title: 'Accord de traitement des données (DPA)',
        text: 'Un exemplaire du DPA à signer existe. Il est disponible sur demande à dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Nos fonctions d’IA sont conçues en s’inspirant d’ISO/IEC 42001 (supervision humaine, traçabilité, transparence, maîtrise des fournisseurs). TblFlow ne détient aucune certification ISO 42001.',
      },
      {
        title: 'Réversibilité',
        text: 'Vous pouvez exporter chaque table en CSV ou Excel, et exporter l’ensemble de votre compte dans une archive ZIP, depuis l’application.',
      },
    ],
  },
  en: {
    title: 'Trust',
    description:
      'Hosting, subprocessors, AI, voice input, DPA, standards and data export: what TblFlow does and does not do.',
    intro:
      'This page states what is true today, including what we do not promise. If a point is missing, write to us and we will answer in writing.',
    sections: [
      {
        title: 'Hosting and availability',
        text: 'The application and the database are hosted in Vienna (Austria) with netcup, on a single server with no high availability. The provider guarantees 99.6% availability on a yearly average, about 35 hours of tolerated downtime per year. TblFlow makes no contractual availability commitment. Files you add are stored on Cloudflare R2, in Western Europe. Backups run hourly (at most one hour of data lost), are encrypted and are stored on Cloudflare R2, in the EU jurisdiction.',
      },
      {
        title: 'Subprocessors',
        text: 'Hosting: netcup (Vienna, Austria). Files and backups: Cloudflare R2 (Western Europe; EU jurisdiction for backups). Email: Resend (United States). AI: OpenRouter (United States), which forwards requests to Anthropic and Google (Gemini); vectorization goes through MongoDB/Voyage AI, also via OpenRouter. Web search: Tavily (United States). Other AI providers (for example OpenAI or Mistral) are involved only if you configure your own key. Content sent to the AI may therefore leave the European Union. Contractual list: DPA version 1.4, effective 2026-12-18.',
      },
      {
        title: 'Data retention by AI providers',
        text: 'Zero retention is required from providers that offer it. Some (including Google) keep requests only to prevent abuse, never for training. Training on your data is disabled.',
      },
      {
        title: 'Voice input',
        text: 'Dictation in the chat uses your browser’s speech recognition. Depending on the browser, the audio may be processed by its vendor, not by TblFlow. You can simply not use it: the keyboard always works.',
      },
      {
        title: 'Data processing agreement (DPA)',
        text: 'A copy of the DPA to sign exists. It is available on request at dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Our AI features are designed with inspiration from ISO/IEC 42001 (human oversight, traceability, transparency, supplier control). TblFlow holds no ISO 42001 certification.',
      },
      {
        title: 'Reversibility',
        text: 'You can export each table as CSV or Excel, and export your whole account as a ZIP archive, from the app.',
      },
    ],
  },
  de: {
    title: 'Vertrauen',
    description:
      'Hosting, Unterauftragsverarbeiter, KI, Spracheingabe, AVV, Normen und Datenexport: was TblFlow tut und was nicht.',
    intro:
      'Diese Seite nennt, was heute zutrifft, auch was wir nicht versprechen. Fehlt ein Punkt, schreiben Sie uns; wir antworten schriftlich.',
    sections: [
      {
        title: 'Hosting und Verfügbarkeit',
        text: 'Anwendung und Datenbank werden in Wien (Österreich) bei netcup auf einem einzelnen Server ohne Hochverfügbarkeit gehostet. Der Anbieter garantiert 99,6 % Verfügbarkeit im Jahresmittel, rund 35 Stunden tolerierte Ausfallzeit pro Jahr. TblFlow gibt keine vertragliche Verfügbarkeitszusage. Von Ihnen hinzugefügte Dateien liegen bei Cloudflare R2 in Westeuropa. Backups laufen stündlich (höchstens eine Stunde Datenverlust), sind verschlüsselt und liegen bei Cloudflare R2 in der EU-Jurisdiktion.',
      },
      {
        title: 'Unterauftragsverarbeiter',
        text: 'Hosting: netcup (Wien, Österreich). Dateien und Backups: Cloudflare R2 (Westeuropa; EU-Jurisdiktion für Backups). E-Mail: Resend (USA). KI: OpenRouter (USA), das Anfragen an Anthropic und Google (Gemini) weiterleitet; die Vektorisierung läuft über MongoDB/Voyage AI, ebenfalls über OpenRouter. Websuche: Tavily (USA). Weitere KI-Anbieter (zum Beispiel OpenAI oder Mistral) kommen nur zum Einsatz, wenn Sie Ihren eigenen Schlüssel einrichten. An die KI gesendete Inhalte können daher die Europäische Union verlassen. Vertragliche Liste: AVV Version 1.4, gültig ab 2026-12-18.',
      },
      {
        title: 'Datenspeicherung bei KI-Anbietern',
        text: 'Zero Retention wird von den Anbietern verlangt, die sie anbieten. Einige (darunter Google) speichern Anfragen nur zur Missbrauchsprävention, nie für Training. Training mit Ihren Daten ist deaktiviert.',
      },
      {
        title: 'Spracheingabe',
        text: 'Das Diktat im Chat nutzt die Spracherkennung Ihres Browsers. Je nach Browser kann dessen Hersteller das Audio verarbeiten, nicht TblFlow. Sie können sie einfach nicht nutzen: Die Tastatur funktioniert immer.',
      },
      {
        title: 'Auftragsverarbeitungsvertrag (AVV)',
        text: 'Ein Exemplar des AVV zur Unterzeichnung liegt vor. Es ist auf Anfrage unter dpo@tblflow.com erhältlich.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Unsere KI-Funktionen sind in Anlehnung an ISO/IEC 42001 entworfen (menschliche Aufsicht, Nachvollziehbarkeit, Transparenz, Lieferantenkontrolle). TblFlow besitzt keine ISO-42001-Zertifizierung.',
      },
      {
        title: 'Umkehrbarkeit',
        text: 'Sie können jede Tabelle als CSV oder Excel exportieren und Ihr gesamtes Konto als ZIP-Archiv exportieren, direkt in der App.',
      },
    ],
  },
  es: {
    title: 'Confianza',
    description:
      'Alojamiento, subencargados, IA, voz, DPA, normas y exportación de datos: lo que TblFlow hace y no hace.',
    intro:
      'Esta página dice lo que es cierto hoy, incluido lo que no prometemos. Si falta un punto, escríbanos y responderemos por escrito.',
    sections: [
      {
        title: 'Alojamiento y disponibilidad',
        text: 'La aplicación y la base de datos están alojadas en Viena (Austria), en netcup, en un único servidor sin alta disponibilidad. El proveedor garantiza un 99,6 % de disponibilidad en promedio anual, unas 35 horas de interrupción toleradas al año. TblFlow no asume ningún compromiso contractual de disponibilidad. Los archivos que añade se guardan en Cloudflare R2, en Europa occidental. Las copias de seguridad son cada hora (como máximo una hora de datos perdida), cifradas y guardadas en Cloudflare R2, en la jurisdicción de la UE.',
      },
      {
        title: 'Subencargados',
        text: 'Alojamiento: netcup (Viena, Austria). Archivos y copias de seguridad: Cloudflare R2 (Europa occidental; jurisdicción de la UE para las copias). Correo: Resend (Estados Unidos). IA: OpenRouter (Estados Unidos), que reenvía las solicitudes a Anthropic y Google (Gemini); la vectorización pasa por MongoDB/Voyage AI, también vía OpenRouter. Búsqueda web: Tavily (Estados Unidos). Otros proveedores de IA (por ejemplo OpenAI o Mistral) solo intervienen si configura su propia clave. Por tanto, el contenido enviado a la IA puede salir de la Unión Europea. Lista contractual: DPA versión 1.4, en vigor desde 2026-12-18.',
      },
      {
        title: 'Conservación de datos por los proveedores de IA',
        text: 'Se exige retención cero a los proveedores que la ofrecen. Algunos (entre ellos Google) conservan las solicitudes solo para prevenir abusos, nunca para entrenar. El entrenamiento con sus datos está desactivado.',
      },
      {
        title: 'Entrada de voz',
        text: 'El dictado en el chat usa el reconocimiento de voz de su navegador. Según el navegador, el audio puede ser procesado por su editor, no por TblFlow. Puede no usarlo: el teclado siempre funciona.',
      },
      {
        title: 'Acuerdo de tratamiento de datos (DPA)',
        text: 'Existe un ejemplar del DPA para firmar. Está disponible bajo petición en dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Nuestras funciones de IA están diseñadas inspirándose en ISO/IEC 42001 (supervisión humana, trazabilidad, transparencia, control de proveedores). TblFlow no cuenta con ninguna certificación ISO 42001.',
      },
      {
        title: 'Reversibilidad',
        text: 'Puede exportar cada tabla en CSV o Excel y exportar toda su cuenta en un archivo ZIP, desde la aplicación.',
      },
    ],
  },
  it: {
    title: 'Fiducia',
    description:
      'Hosting, sub-responsabili, IA, voce, DPA, norme ed esportazione dei dati: cosa fa e cosa non fa TblFlow.',
    intro:
      'Questa pagina dice cosa è vero oggi, compreso ciò che non promettiamo. Se manca un punto, scrivici: rispondiamo per iscritto.',
    sections: [
      {
        title: 'Hosting e disponibilità',
        text: 'L’applicazione e il database sono ospitati a Vienna (Austria) presso netcup, su un solo server senza alta disponibilità. Il fornitore garantisce il 99,6 % di disponibilità in media annua, circa 35 ore di interruzione tollerate all’anno. TblFlow non assume alcun impegno contrattuale di disponibilità. I file che aggiungi sono conservati su Cloudflare R2, nell’Europa occidentale. I backup sono orari (al massimo un’ora di dati persa), cifrati e conservati su Cloudflare R2, nella giurisdizione UE.',
      },
      {
        title: 'Sub-responsabili',
        text: 'Hosting: netcup (Vienna, Austria). File e backup: Cloudflare R2 (Europa occidentale; giurisdizione UE per i backup). E-mail: Resend (Stati Uniti). IA: OpenRouter (Stati Uniti), che inoltra le richieste ad Anthropic e Google (Gemini); la vettorizzazione passa da MongoDB/Voyage AI, sempre tramite OpenRouter. Ricerca web: Tavily (Stati Uniti). Altri fornitori di IA (ad esempio OpenAI o Mistral) intervengono solo se configuri la tua chiave. I contenuti inviati all’IA possono quindi lasciare l’Unione europea. Elenco contrattuale: DPA versione 1.4, in vigore dal 2026-12-18.',
      },
      {
        title: 'Conservazione dei dati presso i fornitori di IA',
        text: 'La retention zero è richiesta ai fornitori che la offrono. Alcuni (tra cui Google) conservano le richieste solo per prevenire gli abusi, mai per l’addestramento. L’addestramento sui tuoi dati è disattivato.',
      },
      {
        title: 'Input vocale',
        text: 'La dettatura nella chat usa il riconoscimento vocale del tuo browser. A seconda del browser, l’audio può essere elaborato dal suo produttore, non da TblFlow. Puoi non usarla: la tastiera funziona sempre.',
      },
      {
        title: 'Accordo sul trattamento dei dati (DPA)',
        text: 'Esiste un esemplare del DPA da firmare. È disponibile su richiesta a dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Le nostre funzioni di IA sono progettate ispirandosi a ISO/IEC 42001 (supervisione umana, tracciabilità, trasparenza, controllo dei fornitori). TblFlow non possiede alcuna certificazione ISO 42001.',
      },
      {
        title: 'Reversibilità',
        text: 'Puoi esportare ogni tabella in CSV o Excel ed esportare l’intero account in un archivio ZIP, dall’app.',
      },
    ],
  },
  ja: {
    title: '信頼性',
    description:
      'ホスティング、再委託先、AI、音声入力、DPA、規格、データのエクスポート：TblFlow が行うことと行わないこと。',
    intro:
      'このページには、現時点で事実であることと、お約束しないことを記載しています。不足している点があればご連絡ください。書面でお答えします。',
    sections: [
      {
        title: 'ホスティングと可用性',
        text: 'アプリケーションとデータベースは、オーストリアのウィーンで netcup 上の単一サーバーにホストされており、高可用性構成ではありません。プロバイダーは年平均 99.6% の可用性を保証しており、年間約 35 時間の停止が許容されます。TblFlow は可用性について契約上の約束をしていません。追加されたファイルは西ヨーロッパの Cloudflare R2 に保存されます。バックアップは 1 時間ごと（失われるデータは最大 1 時間分）で、暗号化され、EU 管轄の Cloudflare R2 に保存されます。',
      },
      {
        title: '再委託先',
        text: 'ホスティング：netcup（オーストリア、ウィーン）。ファイルとバックアップ：Cloudflare R2（西ヨーロッパ。バックアップは EU 管轄）。メール：Resend（米国）。AI：OpenRouter（米国）が Anthropic と Google（Gemini）にリクエストを転送します。ベクトル化は MongoDB/Voyage AI を、同じく OpenRouter 経由で利用します。ウェブ検索：Tavily（米国）。OpenAI や Mistral などその他の AI 提供元は、ご自身のキーを設定した場合にのみ関与します。そのため、AI に送信された内容は EU の外に出ることがあります。契約上の一覧：DPA バージョン 1.4（2026-12-18 発効）。',
      },
      {
        title: 'AI 提供元によるデータの保持',
        text: 'ゼロリテンションは、対応している提供元に求めています。一部（Google など）は不正利用の防止のためだけにリクエストを保持し、学習には使いません。お客様のデータでの学習は無効にしています。',
      },
      {
        title: '音声入力',
        text: 'チャットの音声入力は、お使いのブラウザーの音声認識を使います。ブラウザーによっては、音声がその提供元で処理されることがあり、TblFlow では処理しません。使わなくても問題なく、キーボードは常に使えます。',
      },
      {
        title: 'データ処理契約（DPA）',
        text: '署名用の DPA をご用意しています。dpo@tblflow.com までご請求ください。',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'TblFlow の AI 機能は、ISO/IEC 42001（人による監督、追跡可能性、透明性、提供元の管理）を参考に設計しています。TblFlow は ISO 42001 の認証を取得していません。',
      },
      {
        title: 'データの持ち出し',
        text: '各テーブルを CSV または Excel でエクスポートでき、アカウント全体を ZIP アーカイブとしてアプリからエクスポートできます。',
      },
    ],
  },
  ru: {
    title: 'Доверие',
    description:
      'Хостинг, субподрядчики, ИИ, голосовой ввод, DPA, стандарты и экспорт данных: что TblFlow делает и чего не делает.',
    intro:
      'На этой странице то, что верно сегодня, включая то, чего мы не обещаем. Если чего-то не хватает, напишите нам: мы ответим письменно.',
    sections: [
      {
        title: 'Хостинг и доступность',
        text: 'Приложение и база данных размещены в Вене (Австрия) у netcup, на одном сервере без высокой доступности. Провайдер гарантирует доступность 99,6 % в среднем за год, то есть около 35 часов допустимых простоев в год. TblFlow не берёт на себя договорных обязательств по доступности. Добавленные вами файлы хранятся в Cloudflare R2, в Западной Европе. Резервные копии делаются каждый час (потеря не более часа данных), шифруются и хранятся в Cloudflare R2 в юрисдикции ЕС.',
      },
      {
        title: 'Субподрядчики',
        text: 'Хостинг: netcup (Вена, Австрия). Файлы и резервные копии: Cloudflare R2 (Западная Европа; юрисдикция ЕС для резервных копий). Почта: Resend (США). ИИ: OpenRouter (США), который передаёт запросы Anthropic и Google (Gemini); векторизация идёт через MongoDB/Voyage AI, тоже через OpenRouter. Веб-поиск: Tavily (США). Другие поставщики ИИ (например, OpenAI или Mistral) задействуются, только если вы настроите собственный ключ. Поэтому отправленное в ИИ содержимое может покидать Европейский союз. Договорный перечень: DPA версии 1.4, действует с 2026-12-18.',
      },
      {
        title: 'Хранение данных поставщиками ИИ',
        text: 'Нулевое хранение требуется от поставщиков, которые его предлагают. Некоторые (в том числе Google) хранят запросы только для предотвращения злоупотреблений, но не для обучения. Обучение на ваших данных отключено.',
      },
      {
        title: 'Голосовой ввод',
        text: 'Диктовка в чате использует распознавание речи вашего браузера. В зависимости от браузера звук может обрабатывать его разработчик, а не TblFlow. Можно им не пользоваться: клавиатура работает всегда.',
      },
      {
        title: 'Соглашение об обработке данных (DPA)',
        text: 'Экземпляр DPA для подписания существует. Он доступен по запросу: dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Наши функции ИИ разработаны с опорой на ISO/IEC 42001 (контроль со стороны человека, прослеживаемость, прозрачность, управление поставщиками). У TblFlow нет сертификата ISO 42001.',
      },
      {
        title: 'Возможность выйти',
        text: 'Вы можете экспортировать каждую таблицу в CSV или Excel, а весь аккаунт — в ZIP-архив, прямо из приложения.',
      },
    ],
  },
  tr: {
    title: 'Güven',
    description:
      'Barındırma, alt işleyiciler, yapay zekâ, sesle giriş, DPA, standartlar ve veri dışa aktarma: TblFlow’un yaptığı ve yapmadığı şeyler.',
    intro:
      'Bu sayfa bugün doğru olanı, vaat etmediğimiz şeyler dahil söyler. Eksik bir nokta varsa bize yazın; yazılı yanıt veririz.',
    sections: [
      {
        title: 'Barındırma ve erişilebilirlik',
        text: 'Uygulama ve veritabanı, Viyana’da (Avusturya) netcup üzerinde, yüksek erişilebilirlik olmayan tek bir sunucuda barındırılır. Sağlayıcı yıllık ortalamada %99,6 erişilebilirlik garanti eder; bu, yılda yaklaşık 35 saatlik tolere edilen kesinti demektir. TblFlow sözleşmeyle erişilebilirlik taahhüdü vermez. Eklediğiniz dosyalar Batı Avrupa’daki Cloudflare R2’de saklanır. Yedekler saatliktir (en fazla bir saatlik veri kaybı), şifrelidir ve AB yargı alanındaki Cloudflare R2’de saklanır.',
      },
      {
        title: 'Alt işleyiciler',
        text: 'Barındırma: netcup (Viyana, Avusturya). Dosyalar ve yedekler: Cloudflare R2 (Batı Avrupa; yedekler için AB yargı alanı). E-posta: Resend (ABD). Yapay zekâ: OpenRouter (ABD), istekleri Anthropic ve Google’a (Gemini) iletir; vektörleştirme yine OpenRouter üzerinden MongoDB/Voyage AI ile yapılır. Web araması: Tavily (ABD). Diğer yapay zekâ sağlayıcıları (örneğin OpenAI veya Mistral) yalnızca kendi anahtarınızı yapılandırırsanız devreye girer. Bu nedenle yapay zekâya gönderilen içerik Avrupa Birliği’nin dışına çıkabilir. Sözleşmedeki liste: DPA sürüm 1.4, 2026-12-18 tarihinde yürürlükte.',
      },
      {
        title: 'Yapay zekâ sağlayıcılarında veri saklama',
        text: 'Sıfır saklama, sunan sağlayıcılardan talep edilir. Bazıları (Google dahil) istekleri yalnızca kötüye kullanımı önlemek için saklar, asla eğitim için değil. Verileriniz üzerinde eğitim kapalıdır.',
      },
      {
        title: 'Sesle giriş',
        text: 'Sohbetteki dikte, tarayıcınızın konuşma tanımasını kullanır. Tarayıcıya göre ses, TblFlow tarafından değil tarayıcının üreticisi tarafından işlenebilir. Kullanmayabilirsiniz: klavye her zaman çalışır.',
      },
      {
        title: 'Veri işleme sözleşmesi (DPA)',
        text: 'İmzalanacak bir DPA nüshası mevcuttur. İstek üzerine dpo@tblflow.com adresinden alabilirsiniz.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Yapay zekâ işlevlerimiz ISO/IEC 42001’den esinlenerek tasarlanmıştır (insan gözetimi, izlenebilirlik, şeffaflık, tedarikçi kontrolü). TblFlow’un ISO 42001 sertifikası yoktur.',
      },
      {
        title: 'Geri alınabilirlik',
        text: 'Her tabloyu CSV veya Excel olarak, tüm hesabınızı ise ZIP arşivi olarak uygulamadan dışa aktarabilirsiniz.',
      },
    ],
  },
  uk: {
    title: 'Довіра',
    description:
      'Хостинг, субпідрядники, ШІ, голосове введення, DPA, стандарти та експорт даних: що TblFlow робить і чого не робить.',
    intro:
      'Ця сторінка каже, що правда сьогодні, зокрема чого ми не обіцяємо. Якщо чогось бракує, напишіть нам: ми відповімо письмово.',
    sections: [
      {
        title: 'Хостинг і доступність',
        text: 'Застосунок і база даних розміщені у Відні (Австрія) в netcup, на одному сервері без високої доступності. Провайдер гарантує доступність 99,6 % у середньому за рік, тобто близько 35 годин допустимих простоїв на рік. TblFlow не бере на себе договірних зобов’язань щодо доступності. Файли, які ви додаєте, зберігаються в Cloudflare R2 у Західній Європі. Резервні копії робляться щогодини (втрата не більше години даних), шифруються й зберігаються в Cloudflare R2 під юрисдикцією ЄС.',
      },
      {
        title: 'Субпідрядники',
        text: 'Хостинг: netcup (Відень, Австрія). Файли та резервні копії: Cloudflare R2 (Західна Європа; юрисдикція ЄС для резервних копій). Пошта: Resend (США). ШІ: OpenRouter (США), який передає запити Anthropic і Google (Gemini); векторизація йде через MongoDB/Voyage AI, також через OpenRouter. Вебпошук: Tavily (США). Інші постачальники ШІ (наприклад, OpenAI або Mistral) задіяні, лише якщо ви налаштуєте власний ключ. Тому вміст, надісланий до ШІ, може залишати Європейський Союз. Договірний перелік: DPA версії 1.4, чинна з 2026-12-18.',
      },
      {
        title: 'Зберігання даних постачальниками ШІ',
        text: 'Нульове зберігання вимагається від постачальників, які його пропонують. Деякі (зокрема Google) зберігають запити лише для запобігання зловживанням, ніколи для навчання. Навчання на ваших даних вимкнено.',
      },
      {
        title: 'Голосове введення',
        text: 'Диктування в чаті використовує розпізнавання мовлення вашого браузера. Залежно від браузера звук може обробляти його розробник, а не TblFlow. Можна ним не користуватися: клавіатура працює завжди.',
      },
      {
        title: 'Угода про обробку даних (DPA)',
        text: 'Примірник DPA для підписання існує. Він доступний на запит: dpo@tblflow.com.',
      },
      {
        title: 'ISO/IEC 42001',
        text: 'Наші функції ШІ розроблені з орієнтацією на ISO/IEC 42001 (контроль з боку людини, простежуваність, прозорість, керування постачальниками). TblFlow не має сертифіката ISO 42001.',
      },
      {
        title: 'Зворотність',
        text: 'Ви можете експортувати кожну таблицю в CSV або Excel, а весь обліковий запис — у ZIP-архів, просто із застосунку.',
      },
    ],
  },
  zh: {
    title: '信任',
    description:
      '托管、子处理方、AI、语音输入、DPA、标准与数据导出：TblFlow 做什么、不做什么。',
    intro:
      '本页说明当前属实的内容，包括我们不作承诺的部分。如有遗漏，请来信，我们会书面答复。',
    sections: [
      {
        title: '托管与可用性',
        text: '应用与数据库托管在奥地利维也纳的 netcup，使用单台服务器，不提供高可用。服务商保证年均可用性为 99.6%，即每年约允许 35 小时的中断。TblFlow 不作任何合同层面的可用性承诺。您添加的文件存放在西欧的 Cloudflare R2。备份每小时一次（最多丢失一小时数据），经过加密，存放在欧盟司法管辖区的 Cloudflare R2。',
      },
      {
        title: '子处理方',
        text: '托管：netcup（奥地利维也纳）。文件与备份：Cloudflare R2（西欧；备份位于欧盟司法管辖区）。邮件：Resend（美国）。AI：OpenRouter（美国），把请求转发给 Anthropic 和 Google（Gemini）；向量化经由 MongoDB/Voyage AI，同样通过 OpenRouter。网页搜索：Tavily（美国）。其他 AI 提供方（例如 OpenAI 或 Mistral）仅在您配置自己的密钥时才会参与。因此，发送给 AI 的内容可能离开欧盟。合同清单：DPA 1.4 版，自 2026-12-18 起生效。',
      },
      {
        title: 'AI 提供方对数据的留存',
        text: '我们要求提供零留存的提供方执行零留存。部分提供方（包括 Google）仅为防止滥用而保留请求，绝不用于训练。基于您数据的训练已关闭。',
      },
      {
        title: '语音输入',
        text: '聊天中的听写使用您浏览器自带的语音识别。视浏览器而定，音频可能由其开发商处理，而不是 TblFlow。您可以不使用：键盘始终可用。',
      },
      {
        title: '数据处理协议（DPA）',
        text: '已备有可供签署的 DPA 文本，可通过 dpo@tblflow.com 索取。',
      },
      {
        title: 'ISO/IEC 42001',
        text: '我们的 AI 功能参考 ISO/IEC 42001 进行设计（人工监督、可追溯、透明、供应商管控）。TblFlow 未取得 ISO 42001 证书。',
      },
      {
        title: '可迁出',
        text: '您可以在应用中把每张表导出为 CSV 或 Excel，并把整个账户导出为 ZIP 压缩包。',
      },
    ],
  },
};
