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
        text: 'L’application et la base de données sont hébergées à Vienne (Autriche), chez netcup, sur un seul serveur, sans haute disponibilité. Le fournisseur garantit 99,6 % de disponibilité en moyenne annuelle, soit environ 35 heures d’interruption tolérées par an. TblFlow ne prend aucun engagement contractuel de disponibilité. Les sauvegardes sont horaires (perte maximale d’une heure de données), chiffrées et stockées hors de l’hébergeur.',
      },
      {
        title: 'Sous-traitants',
        text: 'Hébergement : netcup (Autriche). Fonctions d’IA : les requêtes passent par OpenRouter, qui les transmet à des fournisseurs de modèles (par exemple Claude ou Gemini). OpenRouter et ces fournisseurs sont situés aux États-Unis : le contenu envoyé à l’IA quitte donc l’Union européenne. Avec votre propre clé, vous choisissez le fournisseur. La liste exacte des sous-traitants est remise avec le DPA.',
      },
      {
        title: 'Conservation des données par les fournisseurs d’IA',
        text: 'Nous ne publions pas, à ce jour, de garantie de rétention zéro pour chaque fournisseur d’IA. Si ce point conditionne votre achat, demandez-nous l’état par fournisseur avant de signer.',
      },
      {
        title: 'Saisie vocale',
        text: 'La dictée dans le chat utilise la reconnaissance vocale de votre navigateur. Selon le navigateur, l’audio peut être traité par son éditeur, pas par TblFlow. Vous pouvez simplement ne pas l’utiliser : le clavier fonctionne toujours.',
      },
      {
        title: 'Accord de traitement des données (DPA)',
        text: 'Un accord de traitement des données peut être examiné avec vous avant la signature de votre contrat. Écrivez à contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 et ISO 42001',
        text: 'Nous nous appuyons sur ISO 27001 et ISO 42001 comme référentiels, avec une documentation d’alignement. Aucune certification n’a été délivrée à TblFlow.',
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
        text: 'The application and the database are hosted in Vienna (Austria) with netcup, on a single server with no high availability. The provider guarantees 99.6% availability on a yearly average, about 35 hours of tolerated downtime per year. TblFlow makes no contractual availability commitment. Backups run hourly (at most one hour of data lost), are encrypted and are stored outside the host.',
      },
      {
        title: 'Subprocessors',
        text: 'Hosting: netcup (Austria). AI features: requests go through OpenRouter, which forwards them to model providers (for example Claude or Gemini). OpenRouter and these providers are located in the United States, so content sent to the AI leaves the European Union. With your own key, you choose the provider. The exact list of subprocessors is provided with the DPA.',
      },
      {
        title: 'Data retention by AI providers',
        text: 'We do not currently publish a zero-retention guarantee for each AI provider. If this decides your purchase, ask us for the status per provider before you sign.',
      },
      {
        title: 'Voice input',
        text: 'Dictation in the chat uses your browser’s speech recognition. Depending on the browser, the audio may be processed by its vendor, not by TblFlow. You can simply not use it: the keyboard always works.',
      },
      {
        title: 'Data processing agreement (DPA)',
        text: 'A data processing agreement can be reviewed with you before you sign your contract. Write to contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 and ISO 42001',
        text: 'We use ISO 27001 and ISO 42001 as reference frameworks, with alignment documentation. TblFlow holds no certification.',
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
        text: 'Anwendung und Datenbank werden in Wien (Österreich) bei netcup auf einem einzelnen Server ohne Hochverfügbarkeit gehostet. Der Anbieter garantiert 99,6 % Verfügbarkeit im Jahresmittel, rund 35 Stunden tolerierte Ausfallzeit pro Jahr. TblFlow gibt keine vertragliche Verfügbarkeitszusage. Backups laufen stündlich (höchstens eine Stunde Datenverlust), sind verschlüsselt und werden außerhalb des Hosters gespeichert.',
      },
      {
        title: 'Unterauftragsverarbeiter',
        text: 'Hosting: netcup (Österreich). KI-Funktionen: Anfragen laufen über OpenRouter, das sie an Modellanbieter weiterleitet (zum Beispiel Claude oder Gemini). OpenRouter und diese Anbieter sitzen in den USA, daher verlassen an die KI gesendete Inhalte die Europäische Union. Mit Ihrem eigenen Schlüssel wählen Sie den Anbieter. Die genaue Liste der Unterauftragsverarbeiter erhalten Sie mit dem AVV.',
      },
      {
        title: 'Datenspeicherung bei KI-Anbietern',
        text: 'Wir veröffentlichen derzeit keine Zero-Retention-Garantie für jeden KI-Anbieter. Hängt Ihre Kaufentscheidung davon ab, fragen Sie vor der Unterschrift nach dem Stand je Anbieter.',
      },
      {
        title: 'Spracheingabe',
        text: 'Das Diktat im Chat nutzt die Spracherkennung Ihres Browsers. Je nach Browser kann dessen Hersteller das Audio verarbeiten, nicht TblFlow. Sie können sie einfach nicht nutzen: Die Tastatur funktioniert immer.',
      },
      {
        title: 'Auftragsverarbeitungsvertrag (AVV)',
        text: 'Ein Auftragsverarbeitungsvertrag kann vor Ihrer Vertragsunterzeichnung mit Ihnen geprüft werden. Schreiben Sie an contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 und ISO 42001',
        text: 'Wir orientieren uns an ISO 27001 und ISO 42001 als Referenzrahmen, mit Dokumentation der Angleichung. TblFlow besitzt keine Zertifizierung.',
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
        text: 'La aplicación y la base de datos están alojadas en Viena (Austria), en netcup, en un único servidor sin alta disponibilidad. El proveedor garantiza un 99,6 % de disponibilidad en promedio anual, unas 35 horas de interrupción toleradas al año. TblFlow no asume ningún compromiso contractual de disponibilidad. Las copias de seguridad son cada hora (como máximo una hora de datos perdida), cifradas y guardadas fuera del alojamiento.',
      },
      {
        title: 'Subencargados',
        text: 'Alojamiento: netcup (Austria). Funciones de IA: las solicitudes pasan por OpenRouter, que las reenvía a proveedores de modelos (por ejemplo Claude o Gemini). OpenRouter y estos proveedores están en Estados Unidos, por lo que el contenido enviado a la IA sale de la Unión Europea. Con su propia clave, usted elige el proveedor. La lista exacta de subencargados se entrega con el DPA.',
      },
      {
        title: 'Conservación de datos por los proveedores de IA',
        text: 'Por ahora no publicamos una garantía de retención cero para cada proveedor de IA. Si esto condiciona su compra, pídanos el estado por proveedor antes de firmar.',
      },
      {
        title: 'Entrada de voz',
        text: 'El dictado en el chat usa el reconocimiento de voz de su navegador. Según el navegador, el audio puede ser procesado por su editor, no por TblFlow. Puede no usarlo: el teclado siempre funciona.',
      },
      {
        title: 'Acuerdo de tratamiento de datos (DPA)',
        text: 'Un acuerdo de tratamiento de datos puede revisarse con usted antes de firmar su contrato. Escriba a contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 e ISO 42001',
        text: 'Usamos ISO 27001 e ISO 42001 como marcos de referencia, con documentación de alineación. TblFlow no tiene ninguna certificación.',
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
        text: 'L’applicazione e il database sono ospitati a Vienna (Austria) presso netcup, su un solo server senza alta disponibilità. Il fornitore garantisce il 99,6 % di disponibilità in media annua, circa 35 ore di interruzione tollerate all’anno. TblFlow non assume alcun impegno contrattuale di disponibilità. I backup sono orari (al massimo un’ora di dati persa), cifrati e conservati fuori dall’host.',
      },
      {
        title: 'Sub-responsabili',
        text: 'Hosting: netcup (Austria). Funzioni di IA: le richieste passano da OpenRouter, che le inoltra a fornitori di modelli (ad esempio Claude o Gemini). OpenRouter e questi fornitori si trovano negli Stati Uniti, quindi i contenuti inviati all’IA lasciano l’Unione europea. Con la tua chiave scegli tu il fornitore. L’elenco esatto dei sub-responsabili viene consegnato con il DPA.',
      },
      {
        title: 'Conservazione dei dati presso i fornitori di IA',
        text: 'Al momento non pubblichiamo una garanzia di retention zero per ogni fornitore di IA. Se questo condiziona l’acquisto, chiedici lo stato per fornitore prima di firmare.',
      },
      {
        title: 'Input vocale',
        text: 'La dettatura nella chat usa il riconoscimento vocale del tuo browser. A seconda del browser, l’audio può essere elaborato dal suo produttore, non da TblFlow. Puoi non usarla: la tastiera funziona sempre.',
      },
      {
        title: 'Accordo sul trattamento dei dati (DPA)',
        text: 'Un accordo sul trattamento dei dati può essere esaminato con te prima della firma del contratto. Scrivi a contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 e ISO 42001',
        text: 'Ci riferiamo a ISO 27001 e ISO 42001 come quadri di riferimento, con documentazione di allineamento. TblFlow non possiede alcuna certificazione.',
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
        text: 'アプリケーションとデータベースは、オーストリアのウィーンで netcup 上の単一サーバーにホストされており、高可用性構成ではありません。プロバイダーは年平均 99.6% の可用性を保証しており、年間約 35 時間の停止が許容されます。TblFlow は可用性について契約上の約束をしていません。バックアップは 1 時間ごと（失われるデータは最大 1 時間分）で、暗号化し、ホスティング事業者の外に保管しています。',
      },
      {
        title: '再委託先',
        text: 'ホスティング：netcup（オーストリア）。AI 機能：リクエストは OpenRouter を経由し、モデル提供元（例：Claude や Gemini）に転送されます。OpenRouter とこれらの提供元は米国にあるため、AI に送信された内容は EU の外に出ます。ご自身のキーを使う場合は提供元を選べます。再委託先の正確な一覧は DPA とともにお渡しします。',
      },
      {
        title: 'AI 提供元によるデータの保持',
        text: '現時点では、AI 提供元ごとのゼロリテンション保証は公開していません。購入の判断に関わる場合は、署名前に提供元ごとの状況をお問い合わせください。',
      },
      {
        title: '音声入力',
        text: 'チャットの音声入力は、お使いのブラウザーの音声認識を使います。ブラウザーによっては、音声がその提供元で処理されることがあり、TblFlow では処理しません。使わなくても問題なく、キーボードは常に使えます。',
      },
      {
        title: 'データ処理契約（DPA）',
        text: 'データ処理契約は、ご契約の署名前にご一緒に確認できます。contact@tblflow.com までご連絡ください。',
      },
      {
        title: 'ISO 27001 と ISO 42001',
        text: 'ISO 27001 と ISO 42001 を参照枠組みとし、整合状況を文書化しています。TblFlow は認証を取得していません。',
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
        text: 'Приложение и база данных размещены в Вене (Австрия) у netcup, на одном сервере без высокой доступности. Провайдер гарантирует доступность 99,6 % в среднем за год, то есть около 35 часов допустимых простоев в год. TblFlow не берёт на себя договорных обязательств по доступности. Резервные копии делаются каждый час (потеря не более часа данных), шифруются и хранятся вне хостера.',
      },
      {
        title: 'Субподрядчики',
        text: 'Хостинг: netcup (Австрия). Функции ИИ: запросы идут через OpenRouter, который передаёт их поставщикам моделей (например, Claude или Gemini). OpenRouter и эти поставщики находятся в США, поэтому отправленное в ИИ содержимое покидает Европейский союз. С собственным ключом поставщика выбираете вы. Точный список субподрядчиков передаётся вместе с DPA.',
      },
      {
        title: 'Хранение данных поставщиками ИИ',
        text: 'Пока мы не публикуем гарантию нулевого хранения для каждого поставщика ИИ. Если от этого зависит ваша покупка, запросите статус по каждому поставщику до подписания.',
      },
      {
        title: 'Голосовой ввод',
        text: 'Диктовка в чате использует распознавание речи вашего браузера. В зависимости от браузера звук может обрабатывать его разработчик, а не TblFlow. Можно им не пользоваться: клавиатура работает всегда.',
      },
      {
        title: 'Соглашение об обработке данных (DPA)',
        text: 'Соглашение об обработке данных можно рассмотреть вместе с вами до подписания договора. Напишите на contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 и ISO 42001',
        text: 'Мы опираемся на ISO 27001 и ISO 42001 как на ориентиры и ведём документацию по соответствию. У TblFlow нет ни одного сертификата.',
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
        text: 'Uygulama ve veritabanı, Viyana’da (Avusturya) netcup üzerinde, yüksek erişilebilirlik olmayan tek bir sunucuda barındırılır. Sağlayıcı yıllık ortalamada %99,6 erişilebilirlik garanti eder; bu, yılda yaklaşık 35 saatlik tolere edilen kesinti demektir. TblFlow sözleşmeyle erişilebilirlik taahhüdü vermez. Yedekler saatliktir (en fazla bir saatlik veri kaybı), şifrelidir ve barındırıcının dışında saklanır.',
      },
      {
        title: 'Alt işleyiciler',
        text: 'Barındırma: netcup (Avusturya). Yapay zekâ işlevleri: istekler OpenRouter üzerinden geçer ve model sağlayıcılarına (örneğin Claude veya Gemini) iletilir. OpenRouter ve bu sağlayıcılar ABD’dedir; bu yüzden yapay zekâya gönderilen içerik Avrupa Birliği’nin dışına çıkar. Kendi anahtarınızı kullanırsanız sağlayıcıyı siz seçersiniz. Alt işleyicilerin tam listesi DPA ile birlikte verilir.',
      },
      {
        title: 'Yapay zekâ sağlayıcılarında veri saklama',
        text: 'Şu an her yapay zekâ sağlayıcısı için sıfır saklama garantisi yayımlamıyoruz. Satın alma kararınız buna bağlıysa, imzadan önce sağlayıcı bazında durumu bizden isteyin.',
      },
      {
        title: 'Sesle giriş',
        text: 'Sohbetteki dikte, tarayıcınızın konuşma tanımasını kullanır. Tarayıcıya göre ses, TblFlow tarafından değil tarayıcının üreticisi tarafından işlenebilir. Kullanmayabilirsiniz: klavye her zaman çalışır.',
      },
      {
        title: 'Veri işleme sözleşmesi (DPA)',
        text: 'Veri işleme sözleşmesi, sözleşmenizi imzalamadan önce sizinle birlikte incelenebilir. contact@tblflow.com adresine yazın.',
      },
      {
        title: 'ISO 27001 ve ISO 42001',
        text: 'ISO 27001 ve ISO 42001’i referans çerçeve olarak alıyor, uyum belgelerini tutuyoruz. TblFlow’un hiçbir sertifikası yoktur.',
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
        text: 'Застосунок і база даних розміщені у Відні (Австрія) в netcup, на одному сервері без високої доступності. Провайдер гарантує доступність 99,6 % у середньому за рік, тобто близько 35 годин допустимих простоїв на рік. TblFlow не бере на себе договірних зобов’язань щодо доступності. Резервні копії робляться щогодини (втрата не більше години даних), шифруються й зберігаються поза хостером.',
      },
      {
        title: 'Субпідрядники',
        text: 'Хостинг: netcup (Австрія). Функції ШІ: запити йдуть через OpenRouter, який передає їх постачальникам моделей (наприклад, Claude або Gemini). OpenRouter і ці постачальники перебувають у США, тож вміст, надісланий до ШІ, залишає Європейський Союз. З власним ключем постачальника обираєте ви. Точний перелік субпідрядників передається разом із DPA.',
      },
      {
        title: 'Зберігання даних постачальниками ШІ',
        text: 'Наразі ми не публікуємо гарантії нульового зберігання для кожного постачальника ШІ. Якщо від цього залежить ваша покупка, запитайте стан за кожним постачальником перед підписанням.',
      },
      {
        title: 'Голосове введення',
        text: 'Диктування в чаті використовує розпізнавання мовлення вашого браузера. Залежно від браузера звук може обробляти його розробник, а не TblFlow. Можна ним не користуватися: клавіатура працює завжди.',
      },
      {
        title: 'Угода про обробку даних (DPA)',
        text: 'Угоду про обробку даних можна розглянути разом із вами до підписання договору. Напишіть на contact@tblflow.com.',
      },
      {
        title: 'ISO 27001 та ISO 42001',
        text: 'Ми спираємося на ISO 27001 та ISO 42001 як на орієнтири й ведемо документацію щодо відповідності. TblFlow не має жодного сертифіката.',
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
        text: '应用与数据库托管在奥地利维也纳的 netcup，使用单台服务器，不提供高可用。服务商保证年均可用性为 99.6%，即每年约允许 35 小时的中断。TblFlow 不作任何合同层面的可用性承诺。备份每小时一次（最多丢失一小时数据），经过加密，并存放在托管商之外。',
      },
      {
        title: '子处理方',
        text: '托管：netcup（奥地利）。AI 功能：请求经由 OpenRouter 转发给模型提供方（例如 Claude 或 Gemini）。OpenRouter 及这些提供方位于美国，因此发送给 AI 的内容会离开欧盟。使用您自己的密钥时，由您选择提供方。子处理方的完整清单随 DPA 一并提供。',
      },
      {
        title: 'AI 提供方对数据的留存',
        text: '目前我们没有公布每家 AI 提供方的零留存保证。如果这会影响您的采购决定，请在签约前向我们索取各提供方的情况。',
      },
      {
        title: '语音输入',
        text: '聊天中的听写使用您浏览器自带的语音识别。视浏览器而定，音频可能由其开发商处理，而不是 TblFlow。您可以不使用：键盘始终可用。',
      },
      {
        title: '数据处理协议（DPA）',
        text: '在您签署合同之前，可以与您一起审阅数据处理协议。请发邮件至 contact@tblflow.com。',
      },
      {
        title: 'ISO 27001 与 ISO 42001',
        text: '我们以 ISO 27001 与 ISO 42001 为参照框架，并保留对照文档。TblFlow 未取得任何证书。',
      },
      {
        title: '可迁出',
        text: '您可以在应用中把每张表导出为 CSV 或 Excel，并把整个账户导出为 ZIP 压缩包。',
      },
    ],
  },
};
