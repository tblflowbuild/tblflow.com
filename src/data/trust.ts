import type { Locale } from '@/config';

/**
 * Trust page (lot L1). Every statement is traced to the app repo (DPA annexe 3
 * v1.4, internal audit of 2026-11-02) or to a decision of the company; a point
 * that cannot be proven stays out.
 *
 * Forbidden here and in the built page (scripts/check-trust.mjs): "conforme",
 * "DPO" as a word, "tout en UE" and their translations. The data protection
 * address is shown, but never labelled with the forbidden word: no officer is
 * appointed.
 */
/** Date of the last editorial review of the page (also its JSON-LD dateModified). */
export const TRUST_UPDATED_AT = '2026-11-28';

export interface TrustSection {
  title: string;
  text: string;
}
export interface TrustTexts {
  title: string;
  description: string;
  intro: string;
  updated: string;
  sections: TrustSection[];
  dpaLabel: string;
  contactLabel: string;
}

export const TRUST: Record<Locale, TrustTexts> = {
  fr: {
    title: 'Confiance',
    description:
      'Où sont hébergées vos données, qui les traite, ce que fait l’IA, et ce que TblFlow ne certifie pas : les faits, sans promesse en plus.',
    intro:
      'Cette page dit ce qui est vrai aujourd’hui, y compris ce que nous ne promettons pas. Pour un point absent, écrivez-nous : nous répondons par écrit.',
    updated: "Mise à jour le 28 novembre 2026.",
    sections: [
      {
        title: 'Hébergement',
        text: 'L’application et les bases de données sont hébergées à Vienne (Autriche), chez netcup.',
      },
      {
        title: 'Fichiers, sauvegardes et transferts',
        text: 'Les fichiers que vous ajoutez sont stockés sur Cloudflare R2, en Europe de l’Ouest. Les sauvegardes sont stockées sur Cloudflare R2, dans la juridiction UE. Le trafic transite par le réseau mondial de Cloudflare. Ces transferts reposent sur le Data Privacy Framework et sur des clauses types, par fournisseur.',
      },
      {
        title: 'Sous-traitants',
        text: "La liste des sous-traitants ultérieurs, avec ce que chacun traite, où et sous quelle garantie de transfert, figure à l’annexe 3 de l’accord de traitement des données (DPA). La version 1.4, publiée le 18 novembre 2026, s’applique à partir du 18 décembre 2026 ; jusqu’à cette date, l’annexe de la version en vigueur s’applique. Vous êtes prévenu au moins 30 jours avant tout ajout ou remplacement.",
      },
      {
        title: 'IA en routage mondial',
        text: 'Les requêtes d’IA incluses dans les offres passent par OpenRouter (États-Unis), qui les transmet à des modèles d’Anthropic et de Google. Ces modèles tournent sur une infrastructure mondiale, sans pays unique garanti : le contenu envoyé à l’IA peut donc quitter l’Union européenne. Une rétention nulle est exigée des fournisseurs, sauf rétention anti-abus chez certains, dont Google. Vous pouvez aussi utiliser votre propre fournisseur d’IA, ou un modèle hébergé dans l’UE ou en local.',
      },
      {
        title: 'Protection des données',
        text: 'Aucun délégué à la protection des données n’est désigné. Pour toute question sur vos données personnelles, écrivez à l’adresse de contact protection des données ci-dessous.',
      },
      {
        title: 'Certifications',
        text: 'TblFlow ne détient aucune certification (sécurité, normes).',
      },
      {
        title: 'Audit interne du 2 novembre 2026',
        text: "Un audit de cybersécurité a été mené en interne le 2 novembre 2026, par lecture du code : rien n’a été exécuté contre une instance et aucun auditeur externe n’est intervenu. Les constats critiques et élevés ont été corrigés ; la plupart des constats moyens et bas l’ont été à leur tour, quelques points ayant été acceptés ou reportés.",
      },
      {
        title: 'Journal d’audit',
        text: "Un journal d’audit trace les connexions, les actions sensibles, les accès du support et les appels d’outils des agents et des connecteurs, sans le contenu des messages. Il est conservé 6 mois.",
      },
    ],
    dpaLabel: 'Lire l’accord de traitement des données (DPA)',
    contactLabel: 'Contact protection des données',
  },
  en: {
    title: 'Trust',
    description:
      'Where your data is hosted, who processes it, what the AI does, and what TblFlow does not certify: the facts, with no extra promise.',
    intro:
      'This page says what is true today, including what we do not promise. If a point is missing, write to us: we answer in writing.',
    updated: "Updated on 28 November 2026.",
    sections: [
      {
        title: 'Hosting',
        text: 'The application and the databases are hosted in Vienna (Austria) with netcup.',
      },
      {
        title: 'Files, backups and transfers',
        text: 'Files you add are stored on Cloudflare R2, in Western Europe. Backups are stored on Cloudflare R2, in the EU jurisdiction. Traffic goes through Cloudflare’s global network. These transfers rely on the Data Privacy Framework and on standard contractual clauses, per provider.',
      },
      {
        title: 'Sub-processors',
        text: "The list of sub-processors, with what each one processes, where, and under which transfer safeguard, is in Annex 3 of the data processing agreement (DPA). Version 1.4, published on 18 November 2026, applies from 18 December 2026; until then, the annex of the version in force applies. You are notified at least 30 days before any addition or replacement.",
      },
      {
        title: 'AI with global routing',
        text: 'The AI requests included in the plans go through OpenRouter (United States), which forwards them to models from Anthropic and Google. These models run on a global infrastructure with no single guaranteed country: content sent to the AI can therefore leave the European Union. Zero retention is required from providers, except abuse-prevention retention at some of them, including Google. You can also use your own AI provider, or a model hosted in the EU or run locally.',
      },
      {
        title: 'Data protection',
        text: 'No data protection officer is appointed. For any question about your personal data, write to the data protection contact address below.',
      },
      {
        title: 'Certifications',
        text: 'TblFlow holds no certification (security, standards).',
      },
      {
        title: 'Internal audit of 2 November 2026',
        text: "An internal cybersecurity audit was carried out on 2 November 2026 by reading the code: nothing was run against a live instance and no external auditor took part. Critical and high findings were fixed; most medium and low findings were fixed in turn, with a few points accepted or postponed.",
      },
      {
        title: 'Audit log',
        text: "An audit log records sign-ins, sensitive actions, support access and tool calls by agents and connectors, without message content. It is kept for 6 months.",
      },
    ],
    dpaLabel: 'Read the data processing agreement (DPA)',
    contactLabel: 'Data protection contact',
  },
  de: {
    title: 'Vertrauen',
    description:
      'Wo Ihre Daten gehostet werden, wer sie verarbeitet, was die KI tut und was TblFlow nicht zertifiziert: die Fakten, ohne zusätzliches Versprechen.',
    intro:
      'Diese Seite sagt, was heute wahr ist, auch was wir nicht versprechen. Fehlt ein Punkt, schreiben Sie uns: Wir antworten schriftlich.',
    updated: "Aktualisiert am 28. November 2026.",
    sections: [
      {
        title: 'Hosting',
        text: 'Die Anwendung und die Datenbanken werden in Wien (Österreich) bei netcup gehostet.',
      },
      {
        title: 'Dateien, Backups und Übermittlungen',
        text: 'Von Ihnen hinzugefügte Dateien werden auf Cloudflare R2 in Westeuropa gespeichert. Backups werden auf Cloudflare R2 in der EU-Jurisdiktion gespeichert. Der Datenverkehr läuft über das weltweite Netz von Cloudflare. Diese Übermittlungen beruhen je Anbieter auf dem Data Privacy Framework und auf Standardvertragsklauseln.',
      },
      {
        title: 'Unterauftragsverarbeiter',
        text: "Die Liste der Unterauftragsverarbeiter — was jeder verarbeitet, wo und mit welcher Transfergarantie — steht in Anhang 3 des Auftragsverarbeitungsvertrags (DPA). Version 1.4, veröffentlicht am 18. November 2026, gilt ab dem 18. Dezember 2026; bis dahin gilt der Anhang der geltenden Version. Sie werden mindestens 30 Tage vor jeder Ergänzung oder Ersetzung informiert.",
      },
      {
        title: 'KI mit weltweitem Routing',
        text: 'Die in den Tarifen enthaltenen KI-Anfragen laufen über OpenRouter (USA), das sie an Modelle von Anthropic und Google weiterleitet. Diese Modelle laufen auf einer weltweiten Infrastruktur ohne ein einzelnes garantiertes Land: An die KI gesendete Inhalte können daher die Europäische Union verlassen. Von den Anbietern wird keine Speicherung verlangt, außer einer Speicherung zur Missbrauchsabwehr bei einigen von ihnen, darunter Google. Sie können auch einen eigenen KI-Anbieter nutzen oder ein in der EU gehostetes oder lokal betriebenes Modell.',
      },
      {
        title: 'Datenschutz',
        text: 'Es ist keine verantwortliche Person für den Datenschutz förmlich benannt. Bei Fragen zu Ihren personenbezogenen Daten schreiben Sie an die unten stehende Kontaktadresse für den Datenschutz.',
      },
      {
        title: 'Zertifizierungen',
        text: 'TblFlow verfügt über keine Zertifizierung zu Sicherheit oder Normen.',
      },
      {
        title: 'Interne Prüfung vom 2. November 2026',
        text: "Am 2. November 2026 wurde intern ein Cybersicherheits-Audit durchgeführt, durch Lesen des Codes: Nichts wurde gegen eine Instanz ausgeführt, und kein externer Prüfer war beteiligt. Kritische und hohe Befunde wurden behoben; die meisten mittleren und niedrigen Befunde wurden anschließend ebenfalls behoben, einige Punkte wurden akzeptiert oder verschoben.",
      },
      {
        title: 'Audit-Protokoll',
        text: "Ein Audit-Log erfasst Anmeldungen, sensible Aktionen, Support-Zugriffe und Tool-Aufrufe von Agenten und Konnektoren, ohne Nachrichteninhalte. Es wird 6 Monate aufbewahrt.",
      },
    ],
    dpaLabel: 'Auftragsverarbeitungsvertrag (DPA) lesen',
    contactLabel: 'Kontakt Datenschutz',
  },
  es: {
    title: 'Confianza',
    description:
      'Dónde se alojan tus datos, quién los trata, qué hace la IA y qué no certifica TblFlow: los hechos, sin promesas añadidas.',
    intro:
      'Esta página dice lo que es cierto hoy, incluido lo que no prometemos. Si falta un punto, escríbenos: respondemos por escrito.',
    updated: "Actualizado el 28 de noviembre de 2026.",
    sections: [
      {
        title: 'Alojamiento',
        text: 'La aplicación y las bases de datos están alojadas en Viena (Austria), en netcup.',
      },
      {
        title: 'Archivos, copias de seguridad y transferencias',
        text: 'Los archivos que añades se almacenan en Cloudflare R2, en Europa occidental. Las copias de seguridad se almacenan en Cloudflare R2, en la jurisdicción de la UE. El tráfico pasa por la red global de Cloudflare. Estas transferencias se basan en el Data Privacy Framework y en cláusulas contractuales tipo, según el proveedor.',
      },
      {
        title: 'Subencargados del tratamiento',
        text: "La lista de subencargados, con lo que trata cada uno, dónde y bajo qué garantía de transferencia, figura en el anexo 3 del acuerdo de encargo de tratamiento (DPA). La versión 1.4, publicada el 18 de noviembre de 2026, se aplica desde el 18 de diciembre de 2026; hasta entonces se aplica el anexo de la versión vigente. Se te avisa al menos 30 días antes de cualquier alta o sustitución.",
      },
      {
        title: 'IA con enrutamiento global',
        text: 'Las solicitudes de IA incluidas en los planes pasan por OpenRouter (Estados Unidos), que las reenvía a modelos de Anthropic y Google. Estos modelos funcionan en una infraestructura global sin un único país garantizado: el contenido enviado a la IA puede, por tanto, salir de la Unión Europea. A los proveedores se les exige retención nula, salvo la retención contra abusos en algunos de ellos, entre ellos Google. También puedes usar tu propio proveedor de IA, o un modelo alojado en la UE o ejecutado en local.',
      },
      {
        title: 'Protección de datos',
        text: 'No se ha designado ningún delegado de protección de datos. Para cualquier pregunta sobre tus datos personales, escribe a la dirección de contacto de protección de datos que figura más abajo.',
      },
      {
        title: 'Certificaciones',
        text: 'TblFlow no cuenta con ninguna certificación (seguridad, normas).',
      },
      {
        title: 'Auditoría interna del 2 de noviembre de 2026',
        text: "El 2 de noviembre de 2026 se realizó internamente una auditoría de ciberseguridad mediante lectura del código: no se ejecutó nada contra una instancia y no intervino ningún auditor externo. Los hallazgos críticos y altos se corrigieron; la mayoría de los medios y bajos se corrigieron después, y algunos puntos se aceptaron o aplazaron.",
      },
      {
        title: 'Registro de auditoría',
        text: "Un registro de auditoría recoge los inicios de sesión, las acciones sensibles, los accesos del soporte y las llamadas a herramientas de agentes y conectores, sin el contenido de los mensajes. Se conserva 6 meses.",
      },
    ],
    dpaLabel: 'Leer el acuerdo de encargo del tratamiento (DPA)',
    contactLabel: 'Contacto de protección de datos',
  },
  it: {
    title: 'Fiducia',
    description:
      'Dove sono ospitati i tuoi dati, chi li tratta, cosa fa l’IA e cosa TblFlow non certifica: i fatti, senza promesse in più.',
    intro:
      'Questa pagina dice ciò che è vero oggi, compreso ciò che non promettiamo. Se manca un punto, scrivici: rispondiamo per iscritto.',
    updated: "Aggiornato il 28 novembre 2026.",
    sections: [
      {
        title: 'Hosting',
        text: 'L’applicazione e i database sono ospitati a Vienna (Austria), presso netcup.',
      },
      {
        title: 'File, backup e trasferimenti',
        text: 'I file che aggiungi sono archiviati su Cloudflare R2, in Europa occidentale. I backup sono archiviati su Cloudflare R2, nella giurisdizione UE. Il traffico passa attraverso la rete globale di Cloudflare. Questi trasferimenti si basano sul Data Privacy Framework e su clausole contrattuali tipo, per ciascun fornitore.',
      },
      {
        title: 'Sub-responsabili del trattamento',
        text: "L’elenco dei sub-responsabili, con ciò che ciascuno tratta, dove e con quale garanzia di trasferimento, è nell’allegato 3 dell’accordo sul trattamento dei dati (DPA). La versione 1.4, pubblicata il 18 novembre 2026, si applica dal 18 dicembre 2026; fino ad allora si applica l’allegato della versione in vigore. Sei avvisato almeno 30 giorni prima di ogni aggiunta o sostituzione.",
      },
      {
        title: 'IA con instradamento globale',
        text: 'Le richieste di IA incluse nei piani passano da OpenRouter (Stati Uniti), che le inoltra a modelli di Anthropic e Google. Questi modelli girano su un’infrastruttura globale, senza un unico paese garantito: i contenuti inviati all’IA possono quindi lasciare l’Unione europea. Ai fornitori è richiesta conservazione zero, salvo la conservazione antiabuso presso alcuni di essi, tra cui Google. Puoi anche usare un tuo fornitore di IA, oppure un modello ospitato nell’UE o eseguito in locale.',
      },
      {
        title: 'Protezione dei dati',
        text: 'Non è stato designato alcun responsabile della protezione dei dati. Per qualsiasi domanda sui tuoi dati personali, scrivi all’indirizzo di contatto per la protezione dei dati indicato sotto.',
      },
      {
        title: 'Certificazioni',
        text: 'TblFlow non possiede alcuna certificazione (sicurezza, norme).',
      },
      {
        title: 'Audit interno del 2 novembre 2026',
        text: "Il 2 novembre 2026 è stato condotto internamente un audit di cybersicurezza tramite lettura del codice: nulla è stato eseguito contro un’istanza e non è intervenuto alcun revisore esterno. I rilievi critici e alti sono stati corretti; la maggior parte di quelli medi e bassi lo è stata a sua volta, mentre alcuni punti sono stati accettati o rinviati.",
      },
      {
        title: 'Registro di audit',
        text: "Un registro di audit traccia gli accessi, le azioni sensibili, gli accessi del supporto e le chiamate a strumenti di agenti e connettori, senza il contenuto dei messaggi. Viene conservato per 6 mesi.",
      },
    ],
    dpaLabel: 'Leggi l’accordo sul trattamento dei dati (DPA)',
    contactLabel: 'Contatto protezione dati',
  },
  ja: {
    title: '信頼性',
    description:
      'データの保管場所、処理する事業者、AI の動作、そして TblFlow が認証を持たない事項。事実のみを、余計な約束なしでお伝えします。',
    intro:
      'このページは、約束しないことも含め、現時点で事実であることを記します。記載のない点はご連絡ください。書面でお答えします。',
    updated: "2026年11月28日更新。",
    sections: [
      {
        title: 'ホスティング',
        text: 'アプリケーションとデータベースは、オーストリアのウィーンにある netcup でホストされています。',
      },
      {
        title: 'ファイル、バックアップ、移転',
        text: '追加されたファイルは、西ヨーロッパの Cloudflare R2 に保存されます。バックアップは、EU の管轄内の Cloudflare R2 に保存されます。通信は Cloudflare のグローバルネットワークを経由します。これらの移転は、事業者ごとに Data Privacy Framework と標準契約条項に基づいています。',
      },
      {
        title: '再委託先',
        text: "再委託先の一覧（各社が何を、どこで、どの移転保護措置のもとで処理するか）は、データ処理契約（DPA）の附属書3にあります。2026年11月18日公開のバージョン1.4は2026年12月18日から適用され、それまでは有効なバージョンの附属書が適用されます。追加や変更の少なくとも30日前に通知します。",
      },
      {
        title: 'グローバルルーティングの AI',
        text: 'プランに含まれる AI リクエストは OpenRouter（米国）を経由し、Anthropic と Google のモデルに転送されます。これらのモデルは、特定の国が保証されないグローバルなインフラ上で動作するため、AI に送信された内容が EU の外に出る場合があります。事業者にはデータを保持しないことを求めていますが、Google を含む一部の事業者では不正利用防止のための保持があります。 独自の AI プロバイダー、または EU 内でホストされたモデルやローカルで動かすモデルを使うこともできます。',
      },
      {
        title: 'データ保護',
        text: 'データ保護責任者は任命されていません。個人データに関するご質問は、下記のデータ保護の連絡先アドレスまでご連絡ください。',
      },
      {
        title: '認証',
        text: 'TblFlow は、セキュリティや各種規格に関する認証を一切取得していません。',
      },
      {
        title: '2026年11月2日の内部監査',
        text: "2026年11月2日に、コードの読解による社内のサイバーセキュリティ監査を実施しました。稼働中のインスタンスに対しては何も実行しておらず、外部の監査人は関与していません。重大および高の指摘は修正済みで、中・低の指摘の大半も順次修正しました。一部は受容または先送りとしています。",
      },
      {
        title: '監査ログ',
        text: "監査ログには、ログイン、重要な操作、サポートのアクセス、エージェントとコネクタによるツール呼び出しが、メッセージの内容を除いて記録されます。保存期間は6か月です。",
      },
    ],
    dpaLabel: 'データ処理契約（DPA）を読む',
    contactLabel: 'データ保護に関する窓口',
  },
  ru: {
    title: 'Доверие',
    description:
      'Где размещены ваши данные, кто их обрабатывает, что делает ИИ и что TblFlow не сертифицирует: факты, без лишних обещаний.',
    intro:
      'На этой странице сказано, что верно сегодня, в том числе чего мы не обещаем. Если какого-то пункта нет, напишите нам: мы ответим письменно.',
    updated: "Обновлено 28 ноября 2026 г.",
    sections: [
      {
        title: 'Хостинг',
        text: 'Приложение и базы данных размещены в Вене (Австрия) у netcup.',
      },
      {
        title: 'Файлы, резервные копии и передача данных',
        text: 'Добавляемые вами файлы хранятся в Cloudflare R2 в Западной Европе. Резервные копии хранятся в Cloudflare R2 в юрисдикции ЕС. Трафик проходит через глобальную сеть Cloudflare. Эти передачи основаны на Data Privacy Framework и на стандартных договорных условиях, отдельно по каждому поставщику.',
      },
      {
        title: 'Субобработчики',
        text: "Список субпроцессоров — что обрабатывает каждый, где и по какой гарантии передачи — приведён в приложении 3 к соглашению об обработке данных (DPA). Версия 1.4, опубликованная 18 ноября 2026 г., действует с 18 декабря 2026 г.; до этой даты применяется приложение действующей версии. Вас уведомят не менее чем за 30 дней до любого добавления или замены.",
      },
      {
        title: 'ИИ с глобальной маршрутизацией',
        text: 'Запросы к ИИ, включённые в тарифы, проходят через OpenRouter (США), который передаёт их моделям Anthropic и Google. Эти модели работают на глобальной инфраструктуре без единой гарантированной страны: отправленное ИИ содержимое поэтому может покинуть Европейский союз. От поставщиков требуется нулевое хранение, за исключением хранения для предотвращения злоупотреблений у некоторых из них, включая Google. Вы также можете использовать собственного ИИ-провайдера или модель, размещённую в ЕС либо запущенную локально.',
      },
      {
        title: 'Защита данных',
        text: 'Уполномоченный по защите данных не назначен. По любым вопросам о ваших персональных данных пишите на указанный ниже контактный адрес по защите данных.',
      },
      {
        title: 'Сертификаты',
        text: 'У TblFlow нет ни одного сертификата (по безопасности, по стандартам).',
      },
      {
        title: 'Внутренний аудит от 2 ноября 2026 г.',
        text: "2 ноября 2026 г. внутри компании проведён аудит кибербезопасности путём чтения кода: ничего не запускалось против работающего экземпляра, внешних аудиторов не привлекали. Критические и высокие замечания исправлены; большинство средних и низких тоже исправлено, часть пунктов принята или отложена.",
      },
      {
        title: 'Журнал аудита',
        text: "Журнал аудита фиксирует входы, чувствительные действия, доступ поддержки и вызовы инструментов агентами и коннекторами, без содержимого сообщений. Он хранится 6 месяцев.",
      },
    ],
    dpaLabel: 'Прочитать соглашение об обработке данных (DPA)',
    contactLabel: 'Контакт по защите данных',
  },
  tr: {
    title: 'Güven',
    description:
      'Verilerinizin nerede barındırıldığı, kimin işlediği, yapay zekânın ne yaptığı ve TblFlow’un neyi belgelemediği: ek söz vermeden, yalnızca gerçekler.',
    intro:
      'Bu sayfa, vermediğimiz sözler dahil, bugün doğru olanı söyler. Bir nokta eksikse bize yazın: yazılı olarak yanıtlıyoruz.',
    updated: "28 Kasım 2026 tarihinde güncellendi.",
    sections: [
      {
        title: 'Barındırma',
        text: 'Uygulama ve veritabanları Viyana’da (Avusturya), netcup nezdinde barındırılır.',
      },
      {
        title: 'Dosyalar, yedekler ve aktarımlar',
        text: 'Eklediğiniz dosyalar Batı Avrupa’daki Cloudflare R2 üzerinde saklanır. Yedekler AB yargı alanındaki Cloudflare R2 üzerinde saklanır. Trafik Cloudflare’in küresel ağı üzerinden geçer. Bu aktarımlar, sağlayıcı bazında Data Privacy Framework’e ve standart sözleşme maddelerine dayanır.',
      },
      {
        title: 'Alt işleyiciler',
        text: "Alt işleyicilerin listesi — her birinin ne işlediği, nerede ve hangi aktarım güvencesiyle — veri işleme sözleşmesinin (DPA) 3. ekinde yer alır. 18 Kasım 2026’da yayımlanan 1.4 sürümü 18 Aralık 2026’dan itibaren geçerlidir; o tarihe kadar yürürlükteki sürümün eki geçerlidir. Herhangi bir ekleme veya değişiklikten en az 30 gün önce bilgilendirilirsiniz.",
      },
      {
        title: 'Küresel yönlendirmeli yapay zekâ',
        text: 'Planlara dahil yapay zekâ istekleri, bunları Anthropic ve Google modellerine ileten OpenRouter (Amerika Birleşik Devletleri) üzerinden geçer. Bu modeller, tek bir garanti edilmiş ülkesi olmayan küresel bir altyapıda çalışır: yapay zekâya gönderilen içerik bu nedenle Avrupa Birliği’nin dışına çıkabilir. Sağlayıcılardan sıfır saklama istenir; Google dahil bazılarında kötüye kullanımı önleme amaçlı saklama bunun istisnasıdır. Kendi yapay zekâ sağlayıcınızı veya AB’de barındırılan ya da yerel çalışan bir modeli de kullanabilirsiniz.',
      },
      {
        title: 'Veri koruma',
        text: 'Atanmış bir veri koruma görevlisi yoktur. Kişisel verilerinizle ilgili her soru için aşağıdaki veri koruma iletişim adresine yazın.',
      },
      {
        title: 'Sertifikalar',
        text: 'TblFlow’un hiçbir sertifikası yoktur (güvenlik, standartlar).',
      },
      {
        title: '2 Kasım 2026 tarihli iç denetim',
        text: "2 Kasım 2026’da kodun okunmasıyla şirket içinde bir siber güvenlik denetimi yapıldı: çalışan bir örneğe karşı hiçbir şey yürütülmedi ve harici denetçi görev almadı. Kritik ve yüksek bulgular düzeltildi; orta ve düşük bulguların çoğu da sonradan düzeltildi, bazı noktalar kabul edildi veya ertelendi.",
      },
      {
        title: 'Denetim günlüğü',
        text: "Denetim günlüğü; oturum açmaları, hassas eylemleri, destek erişimlerini ve ajanların ile bağlayıcıların araç çağrılarını, mesaj içeriği olmadan kaydeder. 6 ay saklanır.",
      },
    ],
    dpaLabel: 'Veri işleme sözleşmesini (DPA) okuyun',
    contactLabel: 'Veri koruma iletişim adresi',
  },
  uk: {
    title: 'Довіра',
    description:
      'Де розміщені ваші дані, хто їх обробляє, що робить ШІ і що TblFlow не сертифікує: факти, без зайвих обіцянок.',
    intro:
      'Ця сторінка каже, що правда сьогодні, зокрема чого ми не обіцяємо. Якщо якогось пункту бракує, напишіть нам: ми відповімо письмово.',
    updated: "Оновлено 28 листопада 2026 р.",
    sections: [
      {
        title: 'Хостинг',
        text: 'Застосунок і бази даних розміщені у Відні (Австрія) в netcup.',
      },
      {
        title: 'Файли, резервні копії та передавання',
        text: 'Файли, які ви додаєте, зберігаються в Cloudflare R2 у Західній Європі. Резервні копії зберігаються в Cloudflare R2 у юрисдикції ЄС. Трафік проходить через глобальну мережу Cloudflare. Ці передавання ґрунтуються на Data Privacy Framework і на стандартних договірних положеннях, окремо для кожного постачальника.',
      },
      {
        title: 'Субобробники',
        text: "Перелік субпроцесорів — що обробляє кожен, де і за якою гарантією передачі — наведено в додатку 3 до угоди про обробку даних (DPA). Версія 1.4, опублікована 18 листопада 2026 р., діє з 18 грудня 2026 р.; до цієї дати застосовується додаток чинної версії. Вас повідомлять щонайменше за 30 днів до будь-якого додавання чи заміни.",
      },
      {
        title: 'ШІ з глобальною маршрутизацією',
        text: 'Запити до ШІ, включені в тарифи, проходять через OpenRouter (США), який передає їх моделям Anthropic і Google. Ці моделі працюють на глобальній інфраструктурі без єдиної гарантованої країни: надісланий ШІ вміст тому може залишити Європейський Союз. Від постачальників вимагається нульове зберігання, окрім зберігання для запобігання зловживанням у деяких із них, зокрема в Google. Ви також можете використовувати власного ШІ-провайдера або модель, розміщену в ЄС чи запущену локально.',
      },
      {
        title: 'Захист даних',
        text: 'Уповноважену особу з питань захисту даних не призначено. З будь-яких питань щодо ваших персональних даних пишіть на контактну адресу із захисту даних, указану нижче.',
      },
      {
        title: 'Сертифікати',
        text: 'TblFlow не має жодного сертифіката (з безпеки, зі стандартів).',
      },
      {
        title: 'Внутрішній аудит від 2 листопада 2026 р.',
        text: "2 листопада 2026 р. всередині компанії проведено аудит кібербезпеки шляхом читання коду: нічого не запускалося проти працюючого екземпляра, зовнішніх аудиторів не залучали. Критичні й високі зауваження виправлено; більшість середніх і низьких також виправлено, частину пунктів прийнято або відкладено.",
      },
      {
        title: 'Журнал аудиту',
        text: "Журнал аудиту фіксує входи, чутливі дії, доступ підтримки та виклики інструментів агентами й конекторами, без вмісту повідомлень. Він зберігається 6 місяців.",
      },
    ],
    dpaLabel: 'Прочитати договір про обробку даних (DPA)',
    contactLabel: 'Контакт із питань захисту даних',
  },
  zh: {
    title: '信任',
    description:
      '您的数据托管在哪里、由谁处理、AI 做什么，以及 TblFlow 不持有哪些认证：只陈述事实，不多作承诺。',
    intro:
      '本页说明目前属实的情况，包括我们不作出的承诺。若有遗漏，请来信：我们会书面答复。',
    updated: "更新于 2026年11月28日。",
    sections: [
      {
        title: '托管',
        text: '应用和数据库托管在奥地利维也纳的 netcup。',
      },
      {
        title: '文件、备份与传输',
        text: '您添加的文件存储在西欧的 Cloudflare R2。备份存储在欧盟司法管辖区的 Cloudflare R2。流量经由 Cloudflare 的全球网络传输。这些传输按各提供商分别依据 Data Privacy Framework 和标准合同条款。',
      },
      {
        title: '子处理者',
        text: "子处理方清单（每家处理什么、在哪里、依据何种传输保障）见数据处理协议（DPA）附件 3。2026 年 11 月 18 日发布的 1.4 版自 2026 年 12 月 18 日起适用；在此之前适用现行版本的附件。任何新增或更换前，我们至少提前 30 天通知您。",
      },
      {
        title: '全球路由的 AI',
        text: '套餐包含的 AI 请求经由 OpenRouter（美国），再转发给 Anthropic 和 Google 的模型。这些模型运行在不保证单一国家的全球基础设施上：因此发送给 AI 的内容可能离开欧盟。我们要求提供商不留存数据，但包括 Google 在内的部分提供商会为防止滥用而留存。 您也可以使用自己的 AI 提供商，或托管在欧盟、在本地运行的模型。',
      },
      {
        title: '数据保护',
        text: '未指定数据保护官。关于您个人数据的任何问题，请写信至下方的数据保护联系地址。',
      },
      {
        title: '认证',
        text: 'TblFlow 未持有任何认证（安全、标准方面）。',
      },
      {
        title: '2026年11月2日的内部审计',
        text: "2026 年 11 月 2 日，我们通过阅读代码在内部开展了一次网络安全审计：未对任何运行中的实例执行任何操作，也没有外部审计人员参与。严重和高危发现已修复；大部分中危和低危发现随后也已修复，少数事项被接受或推迟。",
      },
      {
        title: '审计日志',
        text: "审计日志记录登录、敏感操作、支持人员访问以及智能体和连接器的工具调用，不含消息内容。保存 6 个月。",
      },
    ],
    dpaLabel: '阅读数据处理协议（DPA）',
    contactLabel: '数据保护联系方式',
  },
};
