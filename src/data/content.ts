import { LOCALES, type Locale } from '@/config';

/**
 * Landing-page content, kept out of the templates.
 *
 * Beyond tidiness, this is a GEO decision: an answer engine that reads this site
 * should find complete, self-contained factual statements rather than sentence
 * fragments glued together by markup. Each `body` below reads as a standalone
 * claim for that reason.
 *
 * Every string carries all ten locales rather than falling back to English
 * through `t9()` — the home page was serving English body copy to eight of ten
 * locales. `Record<Locale, …>` makes a missing locale a compile error.
 */

/** The same string in every locale — product terms that are not translated. */
const all = (value: string): Record<Locale, string> =>
  Object.fromEntries(LOCALES.map((l) => [l, value])) as Record<Locale, string>;

export interface Feature {
  /** Inline SVG path data, 24×24 grid. Avoids an icon-font request. */
  icon: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export const SURFACES: Feature[] = [
  {
    icon: 'M3 5h18M3 12h18M3 19h18M8 5v14M16 5v14',
    title: {
      de: 'Tabellen', en: 'Tables', es: 'Tablas', fr: 'Tables', it: 'Tabelle',
      ja: 'テーブル', ru: 'Таблицы', tr: 'Tablolar', uk: 'Таблиці', zh: '数据表',
    },
    body: {
      de: 'Bases mit mehreren Tabellen, 28 Feldtypen, verknüpfte Datensätze, Formeln mit über 200 Funktionen, Rollups und Lookups. Jede Zelle wird in eine echte PostgreSQL-Tabelle geschrieben, ohne proprietäres Format.',
      en: 'Bases containing multiple tables, 28 field types, linked records, formulas with 200+ functions, rollups and lookups. Every cell is written to a real PostgreSQL table, with no proprietary format.',
      es: 'Bases con varias tablas, 28 tipos de campo, registros vinculados, fórmulas con más de 200 funciones, rollups y lookups. Cada celda se escribe en una tabla PostgreSQL real, sin formato propietario.',
      fr: "Des bases contenant plusieurs tables, 28 types de champs, des enregistrements liés, des formules avec plus de 200 fonctions, des rollups et des lookups. Chaque cellule est écrite dans une vraie table PostgreSQL, sans format propriétaire.",
      it: 'Base con più tabelle, 28 tipi di campo, record collegati, formule con oltre 200 funzioni, rollup e lookup. Ogni cella viene scritta in una vera tabella PostgreSQL, senza formato proprietario.',
      ja: '複数テーブルを含むベース、28 種類のフィールド、リンクレコード、200 以上の関数を備えた数式、ロールアップとルックアップ。すべてのセルは独自形式ではなく、実在する PostgreSQL テーブルに書き込まれます。',
      ru: 'Базы с несколькими таблицами, 28 типов полей, связанные записи, формулы с более чем 200 функциями, роллапы и лукапы. Каждая ячейка записывается в настоящую таблицу PostgreSQL, без проприетарного формата.',
      tr: "Birden çok tablo içeren base'ler, 28 alan türü, bağlantılı kayıtlar, 200'den fazla işlevli formüller, rollup ve lookup. Her hücre, tescilli bir biçim olmadan gerçek bir PostgreSQL tablosuna yazılır.",
      uk: 'Бази з кількома таблицями, 28 типів полів, зв’язані записи, формули з понад 200 функціями, ролапи та лукапи. Кожна комірка записується у справжню таблицю PostgreSQL, без пропрієтарного формату.',
      zh: '包含多张表的 base、28 种字段类型、关联记录、拥有 200 多个函数的公式、rollup 与 lookup。每个单元格都写入真实的 PostgreSQL 表，没有专有格式。',
    },
  },
  {
    icon: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
    title: {
      de: 'Apps', en: 'Apps', es: 'Apps', fr: 'Apps', it: 'App',
      ja: 'アプリ', ru: 'Приложения', tr: 'Uygulamalar', uk: 'Застосунки', zh: '应用',
    },
    body: {
      de: 'Ein App Builder, um eine eigene Mini-App mit eigener Besucher-Authentifizierung und einer eingebetteten API zum Lesen und Schreiben von Datensätzen zu veröffentlichen.',
      en: 'An App Builder to publish a custom mini-app with its own visitor authentication and an injected API to read and write records.',
      es: 'Un App Builder para publicar una mini-aplicación propia con su propia autenticación de visitantes y una API inyectada para leer y escribir registros.',
      fr: 'Un App Builder pour publier une mini-application personnalisée avec sa propre authentification visiteur et une API injectée pour lire et écrire des enregistrements.',
      it: "Un App Builder per pubblicare una mini-app personalizzata con la propria autenticazione dei visitatori e un'API iniettata per leggere e scrivere record.",
      ja: '独自の訪問者認証と、レコードの読み書き用に注入される API を備えたミニアプリを公開できる App Builder。',
      ru: 'App Builder для публикации собственного мини-приложения с отдельной аутентификацией посетителей и встроенным API для чтения и записи записей.',
      tr: "Kendi ziyaretçi kimlik doğrulamasına ve kayıtları okuyup yazmak için enjekte edilen bir API'ye sahip özel bir mini uygulama yayımlamak için App Builder.",
      uk: 'App Builder для публікації власного мінізастосунку з окремою автентифікацією відвідувачів та вбудованим API для читання й запису записів.',
      zh: 'App Builder，用于发布带有自有访客认证的定制小应用，并注入用于读写记录的 API。',
    },
  },
  {
    icon: 'M13 2 3 14h7l-1 8 10-12h-7z',
    title: {
      de: 'Automatisierungen', en: 'Automations', es: 'Automatizaciones', fr: 'Automations',
      it: 'Automazioni', ja: '自動化', ru: 'Автоматизации', tr: 'Otomasyonlar',
      uk: 'Автоматизації', zh: '自动化',
    },
    body: {
      de: 'Ereignis- und cron-gesteuerte Workflows, mehrstufig, mit menschlichen Freigabeschritten dort, wo sie nötig sind. Unbegrenzt viele Workflows; die monatlichen Ausführungen hängen vom Tarif ab — siehe Preise.',
      en: 'Event-driven and cron-triggered workflows, multi-step, with human approval steps where they are needed. Unlimited workflows; monthly runs depend on your tier — see pricing.',
      es: 'Flujos de trabajo disparados por eventos o por cron, de varios pasos, con etapas de aprobación humana donde hacen falta. Flujos ilimitados; las ejecuciones mensuales dependen de tu plan — consulta los precios.',
      fr: "Des workflows déclenchés par événement ou par cron, à étapes multiples, avec des étapes d'approbation humaine là où elles sont nécessaires. Nombre de workflows illimité ; le nombre d'exécutions mensuelles dépend du palier — voir les tarifs.",
      it: 'Workflow attivati da eventi o da cron, a più passaggi, con fasi di approvazione umana dove servono. Workflow illimitati; le esecuzioni mensili dipendono dal piano — vedi i prezzi.',
      ja: 'イベント駆動と cron 起動のワークフロー。複数ステップで、必要な箇所には人による承認ステップを挟めます。ワークフローの数は無制限で、月あたりの実行回数はプランによります（料金ページを参照）。',
      ru: 'Рабочие процессы по событию и по расписанию cron, многошаговые, с этапами согласования человеком там, где они нужны. Число процессов не ограничено; количество запусков в месяц зависит от тарифа — см. страницу тарифов.',
      tr: 'Olay tabanlı ve cron tetiklemeli, çok adımlı iş akışları; gereken yerlerde insan onayı adımlarıyla. İş akışı sayısı sınırsız; aylık çalıştırma sayısı pakete bağlıdır — fiyatlara bakın.',
      uk: 'Робочі процеси за подією та за розкладом cron, багатокрокові, з етапами людського погодження там, де вони потрібні. Кількість процесів не обмежена; кількість запусків на місяць залежить від тарифу — див. сторінку тарифів.',
      zh: '由事件和 cron 触发的多步骤工作流，可在需要处加入人工审批环节。工作流数量不限；每月运行次数取决于套餐 —— 详见价格页。',
    },
  },
  {
    icon: 'M12 3a9 9 0 1 0 9 9M12 3v9l7 4M8 8h.01M16 16h.01',
    title: {
      de: 'Knowledge Graph', en: 'Knowledge graph', es: 'Grafo de conocimiento',
      fr: 'Knowledge graph', it: 'Knowledge graph', ja: 'ナレッジグラフ',
      ru: 'Граф знаний', tr: 'Bilgi grafiği', uk: 'Граф знань', zh: '知识图谱',
    },
    body: {
      de: 'Eine Markdown-Dokumentbibliothek mit verschmolzener semantischer und Volltextsuche, einem Linkgraph zwischen Dokumenten und einem Chunking, das die Markdown-Struktur respektiert.',
      en: 'A markdown document library with semantic and full-text search fused together, a link graph between documents, and chunking that respects markdown structure.',
      es: 'Una biblioteca de documentos markdown con búsqueda semántica y de texto completo fusionadas, un grafo de enlaces entre documentos y un chunking que respeta la estructura del markdown.',
      fr: "Une bibliothèque de documents markdown avec recherche sémantique et recherche plein texte fusionnées, un graphe de liens entre documents, et un chunking qui respecte la structure du markdown.",
      it: 'Una biblioteca di documenti markdown con ricerca semantica e full-text fuse insieme, un grafo di collegamenti tra documenti e un chunking che rispetta la struttura del markdown.',
      ja: 'セマンティック検索と全文検索を統合した Markdown ドキュメントライブラリ。ドキュメント間のリンクグラフと、Markdown の構造を尊重したチャンク分割を備えます。',
      ru: 'Библиотека markdown-документов с объединённым семантическим и полнотекстовым поиском, графом ссылок между документами и разбиением на фрагменты, которое учитывает структуру markdown.',
      tr: 'Anlamsal arama ile tam metin aramasının birleştirildiği bir markdown doküman kitaplığı; dokümanlar arası bağlantı grafiği ve markdown yapısına saygılı bir parçalama ile.',
      uk: 'Бібліотека markdown-документів із поєднаним семантичним і повнотекстовим пошуком, графом посилань між документами та розбиттям на фрагменти, що враховує структуру markdown.',
      zh: 'Markdown 文档库，语义搜索与全文搜索融合，文档之间形成链接图谱，分块方式尊重 Markdown 结构。',
    },
  },
  {
    icon: 'M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zM5 20a7 7 0 0 1 14 0',
    title: {
      de: 'KI-Agenten', en: 'AI Agents', es: 'Agentes de IA', fr: 'AI Agents',
      it: 'Agenti IA', ja: 'AI エージェント', ru: 'ИИ-агенты',
      tr: 'Yapay zekâ ajanları', uk: 'ШІ-агенти', zh: 'AI 智能体',
    },
    body: {
      de: 'Autonome Agenten mit Planer, Executor, persistentem Gedächtnis und Scheduler. Sie lesen und schreiben Ihre Daten und handeln über Ihre verbundenen Dienste hinweg — Gmail, GitHub, Slack, Google Kalender.',
      en: 'Autonomous agents with a planner, an executor, persistent memory and a scheduler. They read and write your data, and act across your connected services — Gmail, GitHub, Slack, Google Calendar.',
      es: 'Agentes autónomos con planificador, ejecutor, memoria persistente y programador. Leen y escriben tus datos y actúan sobre tus servicios conectados: Gmail, GitHub, Slack, Google Calendar.',
      fr: "Des agents autonomes avec planificateur, exécuteur, mémoire persistante et ordonnanceur. Ils lisent et écrivent dans vos données, et agissent sur vos services connectés — Gmail, GitHub, Slack, Google Calendar.",
      it: 'Agenti autonomi con pianificatore, esecutore, memoria persistente e scheduler. Leggono e scrivono i tuoi dati e agiscono sui servizi collegati — Gmail, GitHub, Slack, Google Calendar.',
      ja: 'プランナー、実行エンジン、永続メモリ、スケジューラを備えた自律型エージェント。データを読み書きし、連携サービス（Gmail、GitHub、Slack、Google カレンダー）をまたいで動作します。',
      ru: 'Автономные агенты с планировщиком, исполнителем, постоянной памятью и планировщиком запусков. Они читают и пишут ваши данные и действуют в подключённых сервисах — Gmail, GitHub, Slack, Google Календарь.',
      tr: 'Planlayıcı, yürütücü, kalıcı bellek ve zamanlayıcıya sahip otonom ajanlar. Verilerinizi okur ve yazar, bağlı servisleriniz arasında işlem yapar — Gmail, GitHub, Slack, Google Takvim.',
      uk: 'Автономні агенти з планувальником, виконавцем, постійною памʼяттю та планувальником запусків. Вони читають і записують ваші дані й діють у підключених сервісах — Gmail, GitHub, Slack, Google Календар.',
      zh: '具备规划器、执行器、持久记忆和调度器的自主智能体。它们读写你的数据，并跨已连接的服务执行操作 —— Gmail、GitHub、Slack、Google 日历。',
    },
  },
  {
    icon: 'M3 4h18v12H3zM8 20h8M12 16v4M10 8l5 3-2 .7-.8 2z',
    title: all('Computer use'),
    body: {
      de: 'Wenn ein Dienst keine API hat, steuert der Agent einen Browser: Er öffnet die Seite, füllt das Formular aus, nimmt das Ergebnis und schreibt es zurück in Ihre Tabelle. Jede Sitzung wird aufgezeichnet und bleibt überprüfbar.',
      en: 'When a service has no API, the agent drives a browser: it opens the page, fills the form, takes the result and writes it back to your table. Every session is recorded and stays auditable.',
      es: 'Cuando un servicio no tiene API, el agente maneja un navegador: abre la página, rellena el formulario, toma el resultado y lo escribe en tu tabla. Cada sesión queda grabada y sigue siendo auditable.',
      fr: "Quand un service n'a pas d'API, l'agent pilote un navigateur : il ouvre la page, remplit le formulaire, récupère le résultat et l'écrit dans votre table. Chaque session est enregistrée et reste vérifiable.",
      it: "Quando un servizio non ha un'API, l'agente guida un browser: apre la pagina, compila il modulo, prende il risultato e lo riscrive nella tua tabella. Ogni sessione viene registrata e resta verificabile.",
      ja: 'サービスに API がない場合、エージェントがブラウザを操作します。ページを開き、フォームに入力し、結果を取得してテーブルに書き戻します。各セッションは記録され、あとから検証できます。',
      ru: 'Если у сервиса нет API, агент управляет браузером: открывает страницу, заполняет форму, забирает результат и записывает его в вашу таблицу. Каждая сессия записывается и остаётся проверяемой.',
      tr: "Bir servisin API'si yoksa ajan bir tarayıcıyı sürer: sayfayı açar, formu doldurur, sonucu alır ve tablonuza geri yazar. Her oturum kaydedilir ve denetlenebilir kalır.",
      uk: 'Якщо у сервісу немає API, агент керує браузером: відкриває сторінку, заповнює форму, забирає результат і записує його у вашу таблицю. Кожна сесія записується й лишається перевірною.',
      zh: '当某个服务没有 API 时，智能体会驱动浏览器：打开页面、填写表单、取得结果并写回你的表。每次会话都会被记录，可供审计。',
    },
  },
];

export const DIFFERENTIATORS: Feature[] = [
  {
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7',
    title: {
      de: 'Echtes PostgreSQL, keine Synchronisierungsschicht',
      en: 'Real PostgreSQL, not a sync layer',
      es: 'PostgreSQL de verdad, no una capa de sincronización',
      fr: 'Du vrai PostgreSQL, pas une couche de synchro',
      it: 'Vero PostgreSQL, non un livello di sincronizzazione',
      ja: '本物の PostgreSQL、同期レイヤーではありません',
      ru: 'Настоящий PostgreSQL, а не слой синхронизации',
      tr: 'Gerçek PostgreSQL, senkronizasyon katmanı değil',
      uk: 'Справжній PostgreSQL, а не шар синхронізації',
      zh: '真正的 PostgreSQL，不是同步层',
    },
    body: {
      de: 'Die Tabelle, die Sie in TblFlow sehen, ist die Tabelle in Postgres. Sie können jeden SQL-Client auf dieselbe Instanz richten und Ihre Daten direkt abfragen. Es gibt keinen Zwischenschritt.',
      en: 'The table you see in TblFlow is the table in Postgres. You can point any SQL client at the same instance and query your data directly. There is no intermediary.',
      es: 'La tabla que ves en TblFlow es la tabla en Postgres. Puedes apuntar cualquier cliente SQL a la misma instancia y consultar tus datos directamente. No hay intermediario.',
      fr: "La table que vous voyez dans TblFlow est la table dans Postgres. Vous pouvez brancher n'importe quel client SQL sur la même instance et requêter vos données directement. Il n'y a pas d'intermédiaire.",
      it: "La tabella che vedi in TblFlow è la tabella in Postgres. Puoi puntare qualsiasi client SQL sulla stessa istanza e interrogare i tuoi dati direttamente. Non c'è un intermediario.",
      ja: 'TblFlow で見えているテーブルは、そのまま Postgres のテーブルです。同じインスタンスに任意の SQL クライアントを接続して、データを直接問い合わせできます。間に挟まるものはありません。',
      ru: 'Таблица, которую вы видите в TblFlow, — это и есть таблица в Postgres. Можно направить любой SQL-клиент на тот же экземпляр и запрашивать данные напрямую. Посредника нет.',
      tr: "TblFlow'da gördüğünüz tablo, Postgres'teki tablonun ta kendisidir. Aynı örneğe herhangi bir SQL istemcisi bağlayıp verilerinizi doğrudan sorgulayabilirsiniz. Arada bir aracı yoktur.",
      uk: 'Таблиця, яку ви бачите в TblFlow, — це і є таблиця в Postgres. Можна спрямувати будь-який SQL-клієнт на той самий екземпляр і запитувати дані напряму. Посередника немає.',
      zh: '你在 TblFlow 里看到的表，就是 Postgres 里的那张表。你可以把任意 SQL 客户端连到同一个实例，直接查询数据。中间没有任何一层。',
    },
  },
  {
    icon: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3',
    title: {
      de: 'Agenten, die handeln, nicht nur antworten',
      en: 'Agents that act, not just answer',
      es: 'Agentes que actúan, no solo responden',
      fr: 'Des agents qui agissent, pas seulement qui répondent',
      it: 'Agenti che agiscono, non solo rispondono',
      ja: '答えるだけでなく、実行するエージェント',
      ru: 'Агенты, которые действуют, а не только отвечают',
      tr: 'Yalnızca yanıtlamakla kalmayıp harekete geçen ajanlar',
      uk: 'Агенти, які діють, а не лише відповідають',
      zh: '会行动的智能体，而不只是回答',
    },
    body: {
      de: 'Airtable, Monday und Notion haben keine autonomen Agenten. TblFlow schon: Sie beobachten Ihre Daten und werden aktiv — eine E-Mail, wenn ein Deal die Phase wechselt, ein GitHub-Issue anlegen, jeden Freitag die Woche zusammenfassen.',
      en: 'Airtable, Monday and Notion have no autonomous agents. TblFlow does: they watch your data and take action — email when a deal changes stage, open a GitHub issue, summarise the week every Friday.',
      es: 'Airtable, Monday y Notion no tienen agentes autónomos. TblFlow sí: vigilan tus datos y actúan — enviar un email cuando un trato cambia de etapa, abrir una incidencia en GitHub, resumir la semana cada viernes.',
      fr: "Airtable, Monday et Notion n'ont pas d'agents autonomes. TblFlow en a : ils surveillent vos données et déclenchent des actions — envoyer un email au changement d'étape d'un deal, ouvrir une issue GitHub, résumer la semaine chaque vendredi.",
      it: "Airtable, Monday e Notion non hanno agenti autonomi. TblFlow sì: osservano i tuoi dati e agiscono — inviare un'email quando un'opportunità cambia fase, aprire una issue su GitHub, riassumere la settimana ogni venerdì.",
      ja: 'Airtable、Monday、Notion に自律型エージェントはありません。TblFlow にはあります。データを監視して行動します。商談のステージが変わったらメールを送る、GitHub の issue を作る、毎週金曜に一週間をまとめる、といった具合です。',
      ru: 'У Airtable, Monday и Notion нет автономных агентов. У TblFlow есть: они следят за данными и действуют — письмо при смене стадии сделки, создание issue в GitHub, сводка недели каждую пятницу.',
      tr: "Airtable, Monday ve Notion'da otonom ajan yoktur. TblFlow'da vardır: verilerinizi izler ve harekete geçerler — bir fırsat aşama değiştirdiğinde e-posta göndermek, GitHub'da issue açmak, her cuma haftayı özetlemek.",
      uk: 'В Airtable, Monday і Notion немає автономних агентів. У TblFlow є: вони стежать за даними й діють — лист, коли угода змінює стадію, створення issue в GitHub, зведення тижня щоп’ятниці.',
      zh: 'Airtable、Monday 和 Notion 没有自主智能体。TblFlow 有：它们监控你的数据并采取行动 —— 交易阶段变化时发邮件、在 GitHub 上开 issue、每周五总结这一周。',
    },
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: {
      de: 'Selbst hostbar, ohne Lock-in',
      en: 'Self-hostable, no lock-in',
      es: 'Autoalojable, sin dependencia',
      fr: 'Auto-hébergeable, sans verrouillage',
      it: 'Self-hostable, senza lock-in',
      ja: 'セルフホスト可能、ロックインなし',
      ru: 'Можно развернуть у себя, без привязки',
      tr: 'Kendi sunucunuzda barındırılabilir, bağımlılık yok',
      uk: 'Можна розгорнути в себе, без прив’язки',
      zh: '可自托管，不锁定',
    },
    body: {
      de: 'Der Enterprise-Tarif wird auf Ihrer eigenen Infrastruktur oder in einer dedizierten VPC bereitgestellt, auf Anfrage, mit allen Funktionen freigeschaltet. Ihre Daten bleiben in standardmäßigem Postgres: Ein pg_dump ist eine vollständige Sicherung, anderswo ohne Konvertierung nutzbar.',
      en: 'The Enterprise tier deploys on your own infrastructure or in a dedicated VPC, on quote, with every feature unlocked. Your data stays in standard Postgres: a pg_dump is a complete backup, reusable elsewhere with no conversion.',
      es: 'El plan Enterprise se despliega en tu propia infraestructura o en una VPC dedicada, a presupuesto, con todas las funciones desbloqueadas. Tus datos siguen en Postgres estándar: un pg_dump es una copia completa, reutilizable en otro sitio sin conversión.',
      fr: "Le palier Enterprise se déploie sur votre propre infrastructure ou dans un VPC dédié, sur devis, avec toutes les fonctionnalités débloquées. Vos données restent dans un Postgres standard : un pg_dump est une sauvegarde complète, réutilisable ailleurs sans conversion.",
      it: 'Il piano Enterprise si distribuisce sulla tua infrastruttura o in un VPC dedicato, su preventivo, con tutte le funzionalità sbloccate. I tuoi dati restano in Postgres standard: un pg_dump è un backup completo, riutilizzabile altrove senza conversione.',
      ja: 'Enterprise プランは、自社インフラまたは専用 VPC に配置でき（見積制）、すべての機能が利用できます。データは標準の Postgres のままなので、pg_dump がそのまま完全なバックアップになり、変換なしで別の場所でも使えます。',
      ru: 'Тариф Enterprise разворачивается на вашей инфраструктуре или в выделенном VPC, по запросу, со всеми функциями. Данные остаются в стандартном Postgres: pg_dump — это полная резервная копия, пригодная для использования в другом месте без конвертации.',
      tr: "Enterprise paketi, teklife bağlı olarak kendi altyapınıza veya özel bir VPC'ye dağıtılır ve tüm özellikler açıktır. Verileriniz standart Postgres'te kalır: bir pg_dump eksiksiz bir yedektir ve başka bir yerde dönüştürme olmadan kullanılabilir.",
      uk: 'Тариф Enterprise розгортається на вашій інфраструктурі або у виділеному VPC, за запитом, з усіма функціями. Дані лишаються у стандартному Postgres: pg_dump — це повна резервна копія, придатна до використання деінде без конвертації.',
      zh: 'Enterprise 套餐按需报价，可部署在你自己的基础设施或专属 VPC 中，全部功能解锁。你的数据保留在标准 Postgres 中：一个 pg_dump 就是完整备份，无需转换即可在别处使用。',
    },
  },
  {
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
    title: {
      de: 'Für Produktionsvolumen gebaut',
      en: 'Built for production volumes',
      es: 'Diseñado para volúmenes de producción',
      fr: 'Conçu pour des volumes de production',
      it: 'Progettato per volumi di produzione',
      ja: '本番規模のデータ量に対応',
      ru: 'Рассчитан на продакшн-объёмы',
      tr: 'Üretim hacimleri için tasarlandı',
      uk: 'Розрахований на продакшн-обсяги',
      zh: '为生产级数据量而建',
    },
    body: {
      de: 'Filtern, sortieren, gruppieren und suchen Sie über Millionen von Zeilen in unter einer Sekunde. Das Raster wird auf Canvas gezeichnet und rendert nur den sichtbaren Bereich neu, sodass die Leistung nicht mit der Zeilenzahl abfällt.',
      en: 'Filter, sort, group and search across millions of rows in under a second. The grid renders to canvas and only redraws the visible region, so performance does not degrade with row count.',
      es: 'Filtra, ordena, agrupa y busca sobre millones de filas en menos de un segundo. La cuadrícula se dibuja en canvas y solo redibuja la zona visible, así que el rendimiento no se degrada con el número de filas.',
      fr: "Filtrez, triez, groupez et cherchez sur des millions de lignes en moins d'une seconde. La grille est rendue en canvas et ne redessine que la zone visible, donc la performance ne se dégrade pas avec le nombre de lignes.",
      it: "Filtra, ordina, raggruppa e cerca su milioni di righe in meno di un secondo. La griglia viene disegnata su canvas e ridisegna solo l'area visibile, quindi le prestazioni non peggiorano al crescere delle righe.",
      ja: '数百万行に対して、1 秒未満でフィルタ、並べ替え、グループ化、検索ができます。グリッドは canvas に描画され、表示中の領域だけを再描画するため、行数が増えても性能は落ちません。',
      ru: 'Фильтруйте, сортируйте, группируйте и ищите по миллионам строк меньше чем за секунду. Сетка рисуется на canvas и перерисовывает только видимую область, поэтому скорость не падает с ростом числа строк.',
      tr: 'Milyonlarca satırda bir saniyenin altında filtreleyin, sıralayın, gruplayın ve arayın. Izgara canvas üzerine çizilir ve yalnızca görünen bölgeyi yeniden çizer, böylece satır sayısıyla birlikte performans düşmez.',
      uk: 'Фільтруйте, сортуйте, групуйте та шукайте по мільйонах рядків менш ніж за секунду. Сітка малюється на canvas і перемальовує лише видиму ділянку, тож швидкість не падає зі зростанням кількості рядків.',
      zh: '在数百万行数据上完成筛选、排序、分组和搜索，耗时不到一秒。表格渲染到 canvas，只重绘可见区域，因此性能不会随行数增长而下降。',
    },
  },
  {
    icon: 'M8 4 3 12l5 8M16 4l5 8-5 8',
    title: {
      de: 'API-first, ab der allerersten Base',
      en: 'API-first, from your very first base',
      es: 'API-first, desde tu primera base',
      fr: 'API-first, dès la première base',
      it: 'API-first, dalla tua primissima base',
      ja: '最初のベースから API ファースト',
      ru: 'API-first, с самой первой базы',
      tr: "İlk base'inizden itibaren API-first",
      uk: 'API-first, з найпершої бази',
      zh: '从第一个 base 起就 API 优先',
    },
    body: {
      de: 'Jede Base, die Sie in TblFlow anlegen, ist automatisch über eine dokumentierte REST-API (OpenAPI) mit Token-Authentifizierung erreichbar. Dafür muss kein Tarif freigeschaltet werden — es ist ab dem kostenlosen Tarif verfügbar.',
      en: 'Every base you create in TblFlow is automatically reachable through a documented REST API (OpenAPI), with token authentication. No tier to unlock for that — it is available from the Free tier onward.',
      es: 'Cada base que creas en TblFlow es accesible automáticamente mediante una API REST documentada (OpenAPI), con autenticación por token. No hay plan que desbloquear para eso: está disponible desde el plan Gratis.',
      fr: "Chaque base créée dans TblFlow est automatiquement accessible via une API REST documentée (OpenAPI), avec authentification par token. Pas de palier à débloquer pour ça : c'est disponible dès le palier Gratuit.",
      it: "Ogni base che crei in TblFlow è automaticamente raggiungibile tramite un'API REST documentata (OpenAPI), con autenticazione tramite token. Non c'è nessun piano da sbloccare: è disponibile già dal piano Gratuito.",
      ja: 'TblFlow で作成したすべてのベースは、トークン認証付きのドキュメント化された REST API（OpenAPI）から自動的に利用できます。そのために上位プランへ上げる必要はなく、無料プランから使えます。',
      ru: 'Каждая база, созданная в TblFlow, автоматически доступна через документированный REST API (OpenAPI) с аутентификацией по токену. Для этого не нужно повышать тариф — доступно уже на бесплатном.',
      tr: "TblFlow'da oluşturduğunuz her base, token kimlik doğrulamalı, belgelenmiş bir REST API (OpenAPI) üzerinden otomatik olarak erişilebilir. Bunun için paket yükseltmeye gerek yok — ücretsiz paketten itibaren kullanılabilir.",
      uk: 'Кожна база, створена в TblFlow, автоматично доступна через документований REST API (OpenAPI) з автентифікацією за токеном. Для цього не треба підвищувати тариф — доступно вже на безкоштовному.',
      zh: '你在 TblFlow 中创建的每一个 base，都自动可通过带 token 认证、有文档的 REST API（OpenAPI）访问。无需升级套餐 —— 从免费版起即可使用。',
    },
  },
];

/** Views, listed explicitly — answer engines quote enumerations like this well. */
export const VIEWS: Array<{ name: Record<Locale, string>; use: Record<Locale, string> }> = [
  {
    name: {
      de: 'Raster', en: 'Grid', es: 'Cuadrícula', fr: 'Grille', it: 'Griglia',
      ja: 'グリッド', ru: 'Сетка', tr: 'Izgara', uk: 'Сітка', zh: '表格',
    },
    use: {
      de: 'Allgemeines Durchsuchen und Bearbeiten wie in einer Tabellenkalkulation',
      en: 'General-purpose spreadsheet browsing and editing',
      es: 'Navegación y edición tipo hoja de cálculo',
      fr: 'Navigation et édition de type tableur',
      it: 'Navigazione e modifica in stile foglio di calcolo',
      ja: '表計算のような閲覧と編集',
      ru: 'Просмотр и редактирование как в электронной таблице',
      tr: 'Elektronik tablo tarzı gezinme ve düzenleme',
      uk: 'Перегляд і редагування як в електронній таблиці',
      zh: '类似电子表格的浏览与编辑',
    },
  },
  {
    name: {
      de: 'Kanban', en: 'Kanban', es: 'Kanban', fr: 'Kanban', it: 'Kanban',
      ja: 'カンバン', ru: 'Канбан', tr: 'Kanban', uk: 'Канбан', zh: '看板',
    },
    use: {
      de: 'Statusbasierte Workflows, Projekt-Boards',
      en: 'Status-based workflows, project boards',
      es: 'Flujos por estado, tableros de proyecto',
      fr: 'Workflows par statut, tableaux de projet',
      it: 'Flussi basati sullo stato, bacheche di progetto',
      ja: 'ステータス別のワークフロー、プロジェクトボード',
      ru: 'Процессы по статусам, доски проектов',
      tr: 'Duruma dayalı iş akışları, proje panoları',
      uk: 'Процеси за статусами, дошки проєктів',
      zh: '基于状态的工作流、项目看板',
    },
  },
  {
    name: {
      de: 'Galerie', en: 'Gallery', es: 'Galería', fr: 'Galerie', it: 'Galleria',
      ja: 'ギャラリー', ru: 'Галерея', tr: 'Galeri', uk: 'Галерея', zh: '画廊',
    },
    use: {
      de: 'Bildlastige Datensätze, visuelle Kataloge',
      en: 'Image-heavy records, visual catalogs',
      es: 'Registros con muchas imágenes, catálogos visuales',
      fr: 'Enregistrements riches en images, catalogues',
      it: 'Record ricchi di immagini, cataloghi visivi',
      ja: '画像中心のレコード、ビジュアルカタログ',
      ru: 'Записи с большим количеством изображений, визуальные каталоги',
      tr: 'Görsel ağırlıklı kayıtlar, görsel kataloglar',
      uk: 'Записи з великою кількістю зображень, візуальні каталоги',
      zh: '图片密集的记录、视觉目录',
    },
  },
  {
    name: {
      de: 'Kalender', en: 'Calendar', es: 'Calendario', fr: 'Calendrier', it: 'Calendario',
      ja: 'カレンダー', ru: 'Календарь', tr: 'Takvim', uk: 'Календар', zh: '日历',
    },
    use: {
      de: 'Datumsgetriebene Daten, Terminplanung',
      en: 'Date-driven data, scheduling',
      es: 'Datos basados en fechas, planificación',
      fr: 'Données pilotées par les dates, planification',
      it: 'Dati guidati dalle date, pianificazione',
      ja: '日付が軸になるデータ、スケジューリング',
      ru: 'Данные, привязанные к датам, планирование',
      tr: 'Tarihe dayalı veriler, planlama',
      uk: 'Дані, прив’язані до дат, планування',
      zh: '以日期为核心的数据、排期',
    },
  },
  {
    name: {
      de: 'Gantt', en: 'Gantt', es: 'Gantt', fr: 'Gantt', it: 'Gantt',
      ja: 'ガント', ru: 'Гант', tr: 'Gantt', uk: 'Ґант', zh: '甘特图',
    },
    use: {
      de: 'Projektzeitpläne, Abhängigkeiten, kritischer Pfad',
      en: 'Project timelines, dependencies, critical path',
      es: 'Cronogramas de proyecto, dependencias, ruta crítica',
      fr: 'Plannings, dépendances, chemin critique',
      it: 'Tempistiche di progetto, dipendenze, percorso critico',
      ja: 'プロジェクトの日程、依存関係、クリティカルパス',
      ru: 'Сроки проекта, зависимости, критический путь',
      tr: 'Proje zaman çizelgeleri, bağımlılıklar, kritik yol',
      uk: 'Терміни проєкту, залежності, критичний шлях',
      zh: '项目排期、依赖关系、关键路径',
    },
  },
  {
    name: {
      de: 'Formular', en: 'Form', es: 'Formulario', fr: 'Formulaire', it: 'Modulo',
      ja: 'フォーム', ru: 'Форма', tr: 'Form', uk: 'Форма', zh: '表单',
    },
    use: {
      de: 'Eingaben von externen Nutzern erheben, über eine öffentliche URL',
      en: 'Collecting input from external users, via public URL',
      es: 'Recoger datos de usuarios externos, mediante URL pública',
      fr: 'Collecte auprès d’utilisateurs externes, via URL publique',
      it: 'Raccogliere dati da utenti esterni, tramite URL pubblico',
      ja: '公開 URL を通じて、社外のユーザーから入力を集める',
      ru: 'Сбор данных от внешних пользователей через публичный URL',
      tr: 'Herkese açık URL üzerinden dış kullanıcılardan veri toplama',
      uk: 'Збір даних від зовнішніх користувачів через публічний URL',
      zh: '通过公开 URL 收集外部用户的输入',
    },
  },
];

/**
 * Competitive comparison, transcribed from `.planning/SALES-POSITIONING-2026.md`
 * ("Competitive Advantages"). Rendered as a real <table> with scoped headers:
 * comparison tables are among the most frequently cited structures by generative
 * engines, and only if the markup says which cell belongs to which column.
 */
export type Support = 'yes' | 'no' | 'partial';

export interface CompareRow {
  feature: Record<Locale, string>;
  airtable: Support;
  baserow: Support;
  nocodb: Support;
  monday: Support;
  notion: Support;
  salesforce: Support;
  tblflow: Support;
}

export const COMPETITORS = [
  'airtable',
  'baserow',
  'nocodb',
  'monday',
  'notion',
  'salesforce',
  'tblflow',
] as const;
export type Competitor = (typeof COMPETITORS)[number];

export const COMPETITOR_LABELS: Record<Competitor, string> = {
  airtable: 'Airtable',
  baserow: 'Baserow',
  nocodb: 'NocoDB',
  monday: 'Monday.com',
  notion: 'Notion',
  salesforce: 'Salesforce',
  tblflow: 'TblFlow',
};

export const COMPARISON: CompareRow[] = [
  {
    feature: {
      de: 'Mehrere Ansichten', en: 'Multi-view UI', es: 'Vistas múltiples',
      fr: 'Vues multiples', it: 'Viste multiple', ja: '複数ビュー',
      ru: 'Несколько представлений', tr: 'Çoklu görünüm', uk: 'Кілька подань',
      zh: '多视图界面',
    },
    airtable: 'yes', baserow: 'yes', nocodb: 'yes', monday: 'yes', notion: 'yes', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: {
      de: 'Echtzeit-Zusammenarbeit', en: 'Real-time collaboration',
      es: 'Colaboración en tiempo real', fr: 'Collaboration temps réel',
      it: 'Collaborazione in tempo reale', ja: 'リアルタイム共同編集',
      ru: 'Совместная работа в реальном времени', tr: 'Gerçek zamanlı işbirliği',
      uk: 'Спільна робота в реальному часі', zh: '实时协作',
    },
    airtable: 'yes', baserow: 'yes', nocodb: 'partial', monday: 'yes', notion: 'yes', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: {
      de: 'Autonome KI-Agenten', en: 'Autonomous AI agents', es: 'Agentes de IA autónomos',
      fr: 'Agents IA autonomes', it: 'Agenti IA autonomi', ja: '自律型 AI エージェント',
      ru: 'Автономные ИИ-агенты', tr: 'Otonom yapay zekâ ajanları',
      uk: 'Автономні ШІ-агенти', zh: '自主 AI 智能体',
    },
    airtable: 'no', baserow: 'no', nocodb: 'no', monday: 'no', notion: 'no', salesforce: 'partial', tblflow: 'yes',
  },
  {
    feature: {
      de: 'Autonome Workflows', en: 'Autonomous workflows', es: 'Flujos autónomos',
      fr: 'Workflows autonomes', it: 'Workflow autonomi', ja: '自律型ワークフロー',
      ru: 'Автономные рабочие процессы', tr: 'Otonom iş akışları',
      uk: 'Автономні робочі процеси', zh: '自主工作流',
    },
    airtable: 'partial', baserow: 'partial', nocodb: 'partial', monday: 'yes', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: {
      de: 'Semantische Suche', en: 'Semantic search', es: 'Búsqueda semántica',
      fr: 'Recherche sémantique', it: 'Ricerca semantica', ja: 'セマンティック検索',
      ru: 'Семантический поиск', tr: 'Anlamsal arama', uk: 'Семантичний пошук',
      zh: '语义搜索',
    },
    airtable: 'no', baserow: 'no', nocodb: 'no', monday: 'no', notion: 'partial', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: {
      de: 'SQL-Abfragen', en: 'SQL queries', es: 'Consultas SQL', fr: 'Requêtes SQL',
      it: 'Query SQL', ja: 'SQL クエリ', ru: 'SQL-запросы', tr: 'SQL sorguları',
      uk: 'SQL-запити', zh: 'SQL 查询',
    },
    airtable: 'no', baserow: 'yes', nocodb: 'yes', monday: 'no', notion: 'no', salesforce: 'no', tblflow: 'yes',
  },
  {
    feature: {
      de: 'On-Premise-Option', en: 'On-premise option', es: 'Opción on-premise',
      fr: 'Option on-premise', it: 'Opzione on-premise', ja: 'オンプレミス対応',
      ru: 'Вариант on-premise', tr: 'On-premise seçeneği', uk: 'Варіант on-premise',
      zh: '本地部署选项',
    },
    airtable: 'no', baserow: 'yes', nocodb: 'yes', monday: 'no', notion: 'no', salesforce: 'yes', tblflow: 'yes',
  },
  {
    feature: {
      de: 'DSGVO-Konformität', en: 'GDPR compliance', es: 'Cumplimiento del RGPD',
      fr: 'Conformité RGPD', it: 'Conformità GDPR', ja: 'GDPR 準拠',
      ru: 'Соответствие GDPR', tr: 'GDPR uyumu', uk: 'Відповідність GDPR',
      zh: 'GDPR 合规',
    },
    airtable: 'partial', baserow: 'yes', nocodb: 'yes', monday: 'partial', notion: 'partial', salesforce: 'yes', tblflow: 'yes',
  },
];

/** Free-text rows that do not fit the yes/no/partial shape. */
export const COMPARISON_NOTES: Array<{
  feature: Record<Locale, string>;
  values: Record<Competitor, Record<Locale, string>>;
}> = [
  {
    feature: {
      de: 'Preis pro Nutzer / Monat', en: 'Price per user / month',
      es: 'Precio por usuario / mes', fr: 'Prix par utilisateur / mois',
      it: 'Prezzo per utente / mese', ja: 'ユーザーあたりの月額',
      ru: 'Цена за пользователя / месяц', tr: 'Kullanıcı başına fiyat / ay',
      uk: 'Ціна за користувача / місяць', zh: '每用户每月价格',
    },
    /*
     * Each vendor's own list currency, identical in every locale — these are
     * published prices, not something that varies with who is reading. Only
     * the TblFlow row follows the visitor's currency, because that is the one
     * we actually bill.
     *
     * FIXME(tommy): the TblFlow figure disagrees with the pricing page. Pro is
     * 29 for 3 seats (~10/user) and Business 99 for 10 seats (~10/user), so
     * "15–30" overstates our own price against every competitor in this table.
     * Transcribed as-is from SALES-POSITIONING-2026.md rather than silently
     * corrected — changing a competitive claim is a call for you, not for me.
     */
    values: {
      airtable: all('$10–20'),
      baserow: all('€0–5'),
      nocodb: all('$0–19'),
      monday: all('$10–20'),
      notion: all('$8–15'),
      salesforce: all('$100+'),
      tblflow: {
        de: '15–30 €', en: '$15–30', es: '15–30 €', fr: '15–30 €', it: '15–30 €',
        ja: '$15–30', ru: '15–30 $', tr: '$15–30', uk: '15–30 $', zh: '$15–30',
      },
    },
  },
  {
    feature: {
      de: 'Bereitstellungsdauer', en: 'Deployment speed', es: 'Tiempo de despliegue',
      fr: 'Temps de déploiement', it: 'Tempo di deployment', ja: '導入までの時間',
      ru: 'Время развёртывания', tr: 'Dağıtım süresi', uk: 'Час розгортання',
      zh: '部署耗时',
    },
    values: {
      airtable: {
        de: '5 Minuten', en: '5 minutes', es: '5 minutos', fr: '5 minutes', it: '5 minuti',
        ja: '5 分', ru: '5 минут', tr: '5 dakika', uk: '5 хвилин', zh: '5 分钟',
      },
      baserow: {
        de: '5 Min · Self-Host 1 Std', en: '5 min · self-host 1 h',
        es: '5 min · autoalojado 1 h', fr: '5 min · self-host 1 h',
        it: '5 min · self-host 1 h', ja: '5 分 · セルフホスト 1 時間',
        ru: '5 мин · self-host 1 ч', tr: '5 dk · self-host 1 sa',
        uk: '5 хв · self-host 1 год', zh: '5 分钟 · 自托管 1 小时',
      },
      nocodb: {
        de: '5 Min · Self-Host 1 Std', en: '5 min · self-host 1 h',
        es: '5 min · autoalojado 1 h', fr: '5 min · self-host 1 h',
        it: '5 min · self-host 1 h', ja: '5 分 · セルフホスト 1 時間',
        ru: '5 мин · self-host 1 ч', tr: '5 dk · self-host 1 sa',
        uk: '5 хв · self-host 1 год', zh: '5 分钟 · 自托管 1 小时',
      },
      monday: {
        de: '5 Minuten', en: '5 minutes', es: '5 minutos', fr: '5 minutes', it: '5 minuti',
        ja: '5 分', ru: '5 минут', tr: '5 dakika', uk: '5 хвилин', zh: '5 分钟',
      },
      notion: {
        de: '5 Minuten', en: '5 minutes', es: '5 minutos', fr: '5 minutes', it: '5 minuti',
        ja: '5 分', ru: '5 минут', tr: '5 dakika', uk: '5 хвилин', zh: '5 分钟',
      },
      salesforce: {
        de: '6 Monate', en: '6 months', es: '6 meses', fr: '6 mois', it: '6 mesi',
        ja: '6 か月', ru: '6 месяцев', tr: '6 ay', uk: '6 місяців', zh: '6 个月',
      },
      tblflow: {
        de: '5 Minuten', en: '5 minutes', es: '5 minutos', fr: '5 minutes', it: '5 minuti',
        ja: '5 分', ru: '5 минут', tr: '5 dakika', uk: '5 хвилин', zh: '5 分钟',
      },
    },
  },
];
