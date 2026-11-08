import { LOCALES, type Locale } from '@/config';
import { pm, type PmKey } from '@/data/processMap';

/**
 * The FAQ is doing double duty and is written accordingly.
 *
 * For SEO it feeds `FAQPage` structured data. For GEO it is the highest-value
 * content on the site: answer engines lift question/answer pairs almost verbatim,
 * so each answer is written to stand alone — it repeats the subject ("TblFlow…")
 * instead of relying on the question for context, states the fact in the first
 * sentence, and avoids "see above" or "as mentioned". An answer that only makes
 * sense in page order is an answer that gets quoted wrongly or not at all.
 *
 * That is also why every entry carries all ten locales rather than filling the
 * untranslated eight from English: an answer engine serving a German query
 * quoted the English answer, and the pricing answer quoted dollars at a reader
 * who is billed in euros. Prices below follow the same rule as the pricing
 * page — same number, the locale's own currency.
 */

export type FaqCategory = 'product' | 'pricing' | 'technical' | 'data';

export interface FaqItem {
  category: FaqCategory;
  /** Tags the questions that also feed the dedicated process-map page's FAQPage schema. */
  topic?: 'process-map';
  question: Record<Locale, string>;
  /** Plain text, no markup — it is injected into JSON-LD as well as rendered. */
  answer: Record<Locale, string>;
}

export const FAQ_CATEGORIES: Array<{ id: FaqCategory; label: Record<Locale, string> }> = [
  {
    id: 'product',
    label: {
      de: 'Produkt', en: 'Product', es: 'Producto', fr: 'Produit', it: 'Prodotto',
      ja: '製品', ru: 'Продукт', tr: 'Ürün', uk: 'Продукт', zh: '产品',
    },
  },
  {
    id: 'pricing',
    label: {
      de: 'Preise', en: 'Pricing', es: 'Precios', fr: 'Tarifs', it: 'Prezzi',
      ja: '料金', ru: 'Тарифы', tr: 'Fiyatlar', uk: 'Тарифи', zh: '价格',
    },
  },
  {
    id: 'technical',
    label: {
      de: 'Technik', en: 'Technical', es: 'Técnico', fr: 'Technique', it: 'Tecnico',
      ja: '技術', ru: 'Технологии', tr: 'Teknik', uk: 'Технології', zh: '技术',
    },
  },
  {
    id: 'data',
    label: {
      de: 'Daten', en: 'Data', es: 'Datos', fr: 'Données', it: 'Dati',
      ja: 'データ', ru: 'Данные', tr: 'Veri', uk: 'Дані', zh: '数据',
    },
  },
];

export const FAQ: FaqItem[] = [
  {
    category: 'product',
    question: {
      de: 'Was ist TblFlow?',
      en: 'What is TblFlow?',
      es: '¿Qué es TblFlow?',
      fr: "Qu'est-ce que TblFlow ?",
      it: "Che cos'è TblFlow?",
      ja: 'TblFlow とは何ですか？',
      ru: 'Что такое TblFlow?',
      tr: 'TblFlow nedir?',
      uk: 'Що таке TblFlow?',
      zh: 'TblFlow 是什么？',
    },
    answer: {
      de: 'TblFlow hilft KMU, mit einer Prozesslandkarte Doppelerfassungen und doppelte Tools in ihren Abläufen zu finden und sie anschließend zu ersetzen. TblFlow ist eine No-Code-Datenbankplattform, die eine tabellenkalkulationsähnliche Oberfläche über eine echte PostgreSQL-Datenbank legt. Teams bauen damit Tabellen, Oberflächen und Dashboards, Automatisierungen, eine Dokumentbibliothek mit semantischer Suche und KI-Agenten, die Aufgaben planen und unter Ihrer Freigabe ausführen — alles auf denselben Daten. TblFlow ist als verwalteter Dienst auf tblflow.com und als selbst gehostete Installation verfügbar.',
      en: 'TblFlow helps small and mid-sized businesses find manual re-entry and duplicate tools in their processes with a process map, then replace them. TblFlow is a no-code database platform that puts a spreadsheet-like interface over a real PostgreSQL database. Teams use it to build tables, interfaces and dashboards, automations, a document library with semantic search, and AI agents that plan and carry out tasks under your approval — all on the same data. TblFlow is available as a managed service at tblflow.com and as a self-hosted deployment.',
      es: 'TblFlow ayuda a las pymes a detectar, mediante un mapa de procesos, las reintroducciones de datos y las herramientas duplicadas, y a reemplazarlas. TblFlow es una plataforma de base de datos sin código que ofrece una interfaz de tipo hoja de cálculo sobre una base PostgreSQL real. Los equipos construyen con ella tablas, interfaces y cuadros de mando, automatizaciones, una biblioteca de documentos con búsqueda semántica y agentes de IA que planifican y ejecutan tareas con tu validación, todo sobre los mismos datos. TblFlow está disponible como servicio gestionado en tblflow.com y en autoalojamiento.',
      fr: "TblFlow aide les PME à repérer, grâce à une cartographie des processus, les ressaisies et les outils en doublon, puis à les remplacer. TblFlow est une plateforme no-code de base de données qui présente une interface de type tableur au-dessus d'une vraie base PostgreSQL. Les équipes y construisent des tables, des interfaces et des tableaux de bord, des automatisations, une bibliothèque de documents avec recherche sémantique, et des agents IA qui planifient et exécutent des tâches sous votre validation — sur les mêmes données. TblFlow est disponible en version infogérée sur tblflow.com et en auto-hébergement.",
      it: 'TblFlow aiuta le PMI a individuare, con una mappa dei processi, le doppie digitazioni e gli strumenti duplicati, e poi a sostituirli. TblFlow è una piattaforma di database no-code che mette un\'interfaccia in stile foglio di calcolo sopra un vero database PostgreSQL. I team la usano per costruire tabelle, interfacce e dashboard, automazioni, una biblioteca di documenti con ricerca semantica e agenti IA che pianificano ed eseguono compiti sotto la tua approvazione, tutto sugli stessi dati. TblFlow è disponibile come servizio gestito su tblflow.com e come installazione self-hosted.',
      ja: 'TblFlow は、プロセスマップによって中小企業の業務に潜む再入力や重複ツールを見つけ出し、それらを置き換えるためのツールです。TblFlow は、本物の PostgreSQL データベースの上に表計算ソフトのようなインターフェースを載せたノーコードのデータベースプラットフォームです。チームはこの上でテーブル、インターフェースやダッシュボード、自動化、セマンティック検索付きのドキュメントライブラリ、そしてあなたの承認のもとでタスクを計画し実行する AI エージェントを、すべて同じデータの上に構築できます。TblFlow は tblflow.com のマネージドサービスとして、またセルフホスト型としても利用できます。',
      ru: 'TblFlow помогает малому и среднему бизнесу с помощью карты процессов находить повторный ввод данных и дублирующиеся сервисы, а затем заменять их. TblFlow — это no-code платформа баз данных, которая даёт интерфейс в духе электронной таблицы поверх настоящей базы PostgreSQL. Команды создают в ней таблицы, интерфейсы и дашборды, автоматизации, библиотеку документов с семантическим поиском и ИИ-агентов, которые планируют и выполняют задачи под вашим утверждением — всё на одних и тех же данных. TblFlow доступен как управляемый сервис на tblflow.com и как self-hosted развёртывание.',
      tr: 'TblFlow, KOBİ\'lerin bir süreç haritasıyla süreçlerindeki mükerrer veri girişlerini ve yinelenen araçları bulmasına, ardından bunları değiştirmesine yardımcı olur. TblFlow, gerçek bir PostgreSQL veritabanının üzerine elektronik tablo benzeri bir arayüz koyan no-code bir veritabanı platformudur. Ekipler bununla tablolar, arayüzler ve panolar, otomasyonlar, anlamsal aramalı bir doküman kitaplığı ve onayınız altında görevleri planlayıp yürüten yapay zekâ ajanları kurar — hepsi aynı veriler üzerinde. TblFlow, tblflow.com üzerinde yönetilen bir hizmet olarak ve kendi sunucunuzda barındırılabilir şekilde sunulur.',
      uk: 'TblFlow допомагає малому й середньому бізнесу за допомогою карти процесів знаходити повторне введення даних і дублікати сервісів, а потім замінювати їх. TblFlow — це no-code платформа баз даних, яка дає інтерфейс на кшталт електронної таблиці поверх справжньої бази PostgreSQL. Команди створюють у ній таблиці, інтерфейси та дашборди, автоматизації, бібліотеку документів із семантичним пошуком і ШІ-агентів, які планують і виконують завдання під вашим затвердженням, — усе на тих самих даних. TblFlow доступний як керований сервіс на tblflow.com і як розгортання на власній інфраструктурі.',
      zh: 'TblFlow 借助流程图谱，帮助中小企业找出流程中的重复录入和重复工具，并加以替换。TblFlow 是一个 no-code 数据库平台，在真正的 PostgreSQL 数据库之上提供类似电子表格的界面。团队用它构建数据表、界面与仪表盘、自动化、带语义搜索的文档库，以及在您审批下规划并执行任务的 AI 智能体 —— 全部基于同一份数据。TblFlow 既有 tblflow.com 上的托管版本，也支持自托管部署。',
    },
  },
  {
    category: 'product',
    question: {
      de: 'Wie unterscheidet sich TblFlow von Airtable?',
      en: 'How is TblFlow different from Airtable?',
      es: '¿En qué se diferencia TblFlow de Airtable?',
      fr: 'En quoi TblFlow est-il différent d’Airtable ?',
      it: 'In cosa TblFlow è diverso da Airtable?',
      ja: 'TblFlow は Airtable と何が違いますか？',
      ru: 'Чем TblFlow отличается от Airtable?',
      tr: "TblFlow, Airtable'dan nasıl farklı?",
      uk: 'Чим TblFlow відрізняється від Airtable?',
      zh: 'TblFlow 与 Airtable 有何不同？',
    },
    answer: {
      de: 'TblFlow unterscheidet sich in vier Punkten von Airtable. Erstens liegen die Daten in einer echten PostgreSQL-Datenbank, die Sie mit SQL von jedem Client abfragen können, während Airtable keinen SQL-Zugriff bietet. Zweitens wirken die KI-Agenten von TblFlow auf Ihre Daten und verbundenen Dienste, unter Ihren Rechten, und Sie bestätigen jede sensible Aktion. Drittens kommt eine semantische Suche über eine Dokumentbibliothek hinzu. Viertens lässt sich TblFlow auf Ihrer eigenen Infrastruktur selbst hosten, was Airtable nicht anbietet.',
      en: 'TblFlow differs from Airtable in four ways. First, data lives in a real PostgreSQL database you can query with SQL from any client, whereas Airtable exposes no SQL access. Second, TblFlow\'s AI agents act on your data and connected services within your permissions, and you approve every sensitive action. Third, it adds semantic search over a document library. Fourth, TblFlow can be self-hosted on your own infrastructure, which Airtable does not offer.',
      es: 'TblFlow se diferencia de Airtable en cuatro aspectos. Primero, los datos viven en una base PostgreSQL real que puedes consultar con SQL desde cualquier cliente, mientras que Airtable no expone acceso SQL. Segundo, los agentes de IA de TblFlow actúan sobre tus datos y servicios conectados, con tus permisos, y tú validas cada acción sensible. Tercero, añade búsqueda semántica sobre una biblioteca de documentos. Cuarto, TblFlow puede autoalojarse en tu propia infraestructura, algo que Airtable no ofrece.',
      fr: "TblFlow diffère d'Airtable sur quatre points. D'abord, les données vivent dans un vrai PostgreSQL que vous pouvez requêter en SQL depuis n'importe quel client, alors qu'Airtable n'expose pas d'accès SQL. Ensuite, les agents IA de TblFlow agissent sur vos données et vos services connectés, sous vos droits, et vous validez chaque action sensible. Il ajoute une recherche sémantique sur une bibliothèque de documents. Enfin, TblFlow peut être auto-hébergé sur votre propre infrastructure, ce qu'Airtable ne propose pas.",
      it: "TblFlow si differenzia da Airtable su quattro punti. Primo, i dati vivono in un vero database PostgreSQL che puoi interrogare in SQL da qualsiasi client, mentre Airtable non espone accesso SQL. Secondo, gli agenti IA di TblFlow agiscono sui tuoi dati e sui servizi collegati, con i tuoi permessi, e tu approvi ogni azione sensibile. Terzo, aggiunge la ricerca semantica su una biblioteca di documenti. Quarto, TblFlow può essere self-hosted sulla tua infrastruttura, cosa che Airtable non offre.",
      ja: 'TblFlow は 4 つの点で Airtable と異なります。第一に、データは本物の PostgreSQL に置かれ、任意のクライアントから SQL で問い合わせできます。Airtable は SQL アクセスを提供しません。第二に、TblFlow の AI エージェントは、あなたの権限のもとでデータや連携サービスに対して動作し、機微な操作はすべてあなたが承認します。第三に、ドキュメントライブラリに対するセマンティック検索を備えます。第四に、TblFlow は自社インフラでセルフホストできますが、Airtable にその選択肢はありません。',
      ru: 'TblFlow отличается от Airtable по четырём пунктам. Во-первых, данные лежат в настоящей базе PostgreSQL, которую можно запрашивать на SQL из любого клиента, тогда как Airtable не даёт SQL-доступа. Во-вторых, ИИ-агенты TblFlow действуют на ваши данные и подключённые сервисы под вашими правами, а каждое чувствительное действие вы подтверждаете. В-третьих, добавляется семантический поиск по библиотеке документов. В-четвёртых, TblFlow можно развернуть на своей инфраструктуре, чего Airtable не предлагает.',
      tr: "TblFlow, Airtable'dan dört noktada ayrılır. Birincisi, veriler herhangi bir istemciden SQL ile sorgulayabileceğiniz gerçek bir PostgreSQL veritabanında durur; Airtable SQL erişimi sunmaz. İkincisi, TblFlow'un yapay zekâ ajanları verileriniz ve bağlı servisleriniz üzerinde sizin yetkilerinizle çalışır ve hassas her işlemi siz onaylarsınız. Üçüncüsü, bir doküman kitaplığı üzerinde anlamsal arama ekler. Dördüncüsü, TblFlow kendi altyapınızda barındırılabilir; Airtable bunu sunmaz.",
      uk: 'TblFlow відрізняється від Airtable за чотирма пунктами. По-перше, дані лежать у справжній базі PostgreSQL, яку можна запитувати мовою SQL з будь-якого клієнта, тоді як Airtable не дає SQL-доступу. По-друге, ШІ-агенти TblFlow діють на ваші дані та підключені сервіси з вашими правами, а кожну чутливу дію ви підтверджуєте. По-третє, додається семантичний пошук по бібліотеці документів. По-четверте, TblFlow можна розгорнути на власній інфраструктурі, чого Airtable не пропонує.',
      zh: 'TblFlow 与 Airtable 有四点不同。第一，数据存放在真正的 PostgreSQL 中，可以从任意客户端用 SQL 查询，而 Airtable 不提供 SQL 访问。第二，TblFlow 的 AI 智能体在您的权限下作用于您的数据与已连接服务，每个敏感操作都由您审批。第三，它增加了面向文档库的语义搜索。第四，TblFlow 可以自托管在您自己的基础设施上，Airtable 不提供这一选项。',
    },
  },
  {
    category: 'product',
    question: {
      de: 'Welche Ansichtstypen bietet TblFlow?',
      en: 'What view types does TblFlow offer?',
      es: '¿Qué tipos de vista ofrece TblFlow?',
      fr: 'Quels types de vues TblFlow propose-t-il ?',
      it: 'Quali tipi di vista offre TblFlow?',
      ja: 'TblFlow にはどのようなビューがありますか？',
      ru: 'Какие типы представлений есть в TblFlow?',
      tr: 'TblFlow hangi görünüm türlerini sunar?',
      uk: 'Які типи подань пропонує TblFlow?',
      zh: 'TblFlow 提供哪些视图类型？',
    },
    answer: {
      de: 'TblFlow bietet sieben Ansichtstypen auf jeder Tabelle, ohne die Daten zu duplizieren: Raster, Kanban, Galerie, Kalender, Gantt, Formular und Plugin. Die Gantt-Ansicht deckt Projektzeitpläne, Aufgabenabhängigkeiten und den kritischen Pfad ab. Die Formularansicht erzeugt eine öffentliche URL, um Daten von Personen außerhalb Ihres Teams zu erheben.',
      en: 'TblFlow offers seven view types on any table, without duplicating data: Grid, Kanban, Gallery, Calendar, Gantt, Form and Plugin. The Gantt view handles project timelines, task dependencies and the critical path. The Form view generates a public URL for collecting data from people outside your team.',
      es: 'TblFlow ofrece siete tipos de vista sobre cualquier tabla, sin duplicar los datos: Cuadrícula, Kanban, Galería, Calendario, Gantt, Formulario y Plugin. La vista Gantt gestiona cronogramas de proyecto, dependencias entre tareas y la ruta crítica. La vista Formulario genera una URL pública para recoger datos de personas ajenas a tu equipo.',
      fr: "TblFlow propose sept types de vues sur n'importe quelle table, sans dupliquer les données : Grille, Kanban, Galerie, Calendrier, Gantt, Formulaire et Plugin. La vue Gantt gère les plannings, les dépendances entre tâches et le chemin critique. La vue Formulaire génère une URL publique pour collecter des données auprès de personnes extérieures.",
      it: 'TblFlow offre sette tipi di vista su qualsiasi tabella, senza duplicare i dati: Griglia, Kanban, Galleria, Calendario, Gantt, Modulo e Plugin. La vista Gantt gestisce le tempistiche di progetto, le dipendenze tra attività e il percorso critico. La vista Modulo genera un URL pubblico per raccogliere dati da persone esterne al team.',
      ja: 'TblFlow はどのテーブルにも 7 種類のビューを提供し、データを複製しません。グリッド、カンバン、ギャラリー、カレンダー、ガント、フォーム、プラグインです。ガントビューはプロジェクトの日程、タスクの依存関係、クリティカルパスを扱います。フォームビューは、チーム外の人からデータを集めるための公開 URL を生成します。',
      ru: 'TblFlow предлагает семь типов представлений для любой таблицы, не дублируя данные: Сетка, Канбан, Галерея, Календарь, Гант, Форма и Плагин. Представление «Гант» работает со сроками проекта, зависимостями задач и критическим путём. Представление «Форма» создаёт публичный URL для сбора данных от людей вне вашей команды.',
      tr: 'TblFlow, veriyi çoğaltmadan her tabloda yedi görünüm türü sunar: Izgara, Kanban, Galeri, Takvim, Gantt, Form ve Eklenti. Gantt görünümü proje zaman çizelgelerini, görev bağımlılıklarını ve kritik yolu ele alır. Form görünümü, ekibiniz dışındaki kişilerden veri toplamak için herkese açık bir URL üretir.',
      uk: 'TblFlow пропонує сім типів подань для будь-якої таблиці, не дублюючи дані: Сітка, Канбан, Галерея, Календар, Ґант, Форма та Плагін. Подання «Ґант» опрацьовує терміни проєкту, залежності завдань і критичний шлях. Подання «Форма» створює публічний URL для збору даних від людей поза вашою командою.',
      zh: 'TblFlow 为任意数据表提供七种视图，且不复制数据：表格、看板、画廊、日历、甘特图、表单和插件。甘特图视图处理项目排期、任务依赖和关键路径。表单视图会生成一个公开 URL，用于向团队之外的人收集数据。',
    },
  },
  {
    category: 'product',
    question: {
      de: 'Was können die KI-Agenten von TblFlow?',
      en: 'What can TblFlow AI agents do?',
      es: '¿Qué pueden hacer los agentes de IA de TblFlow?',
      fr: 'Que peuvent faire les agents IA de TblFlow ?',
      it: 'Cosa possono fare gli agenti IA di TblFlow?',
      ja: 'TblFlow の AI エージェントは何ができますか？',
      ru: 'Что умеют ИИ-агенты TblFlow?',
      tr: 'TblFlow yapay zekâ ajanları neler yapabilir?',
      uk: 'Що вміють ШІ-агенти TblFlow?',
      zh: 'TblFlow 的 AI 智能体能做什么？',
    },
    answer: {
      de: 'Die TblFlow-Agenten planen und führen mehrstufige Aufgaben aus: Sie verfügen über einen Planer, einen Executor, ein persistentes Gedächtnis in Form eines Entitäten-Relationen-Graphen und einen Scheduler. Sie lesen und schreiben Ihre Datensätze, nutzen Ihre Dokumentbibliothek als Kontext und handeln über verbundene Dienste — Gmail, GitHub, Slack, Google Kalender, Drive und Meet. Standardmäßig warten ihre Schreibvorgänge auf Ihre Freigabe: Der Agent schlägt vor, Sie geben frei. Sie können ihnen außerdem Werkzeuge aus einer OpenAPI-Spezifikation oder aus der Dokumentation einer API mitgeben.',
      en: 'TblFlow agents plan and carry out multi-step tasks: they have a planner, an executor, persistent memory as an entity/relation graph, and a scheduler. They read and write your records, query your document library as context, and act on connected services — Gmail, GitHub, Slack, Google Calendar, Drive and Meet. By default their writes wait for your approval: the agent proposes, you approve. You can also give them tools generated from an OpenAPI specification or from an API\'s documentation.',
      es: 'Los agentes de TblFlow planifican y ejecutan tareas de varios pasos: cuentan con un planificador, un ejecutor, una memoria persistente en forma de grafo de entidades y relaciones, y un programador. Leen y escriben tus registros, consultan tu biblioteca de documentos como contexto y actúan sobre los servicios conectados: Gmail, GitHub, Slack, Google Calendar, Drive y Meet. De forma predeterminada, sus escrituras esperan tu aprobación: el agente propone y tú validas. También puedes darles herramientas a partir de una especificación OpenAPI o de la documentación de una API.',
      fr: "Les agents TblFlow planifient et exécutent des tâches en plusieurs étapes : ils disposent d'un planificateur, d'un exécuteur, d'une mémoire persistante sous forme de graphe entité/relation, et d'un ordonnanceur. Ils lisent et écrivent vos enregistrements, interrogent votre bibliothèque de documents comme contexte, et agissent sur les services connectés — Gmail, GitHub, Slack, Google Agenda, Drive et Meet. Par défaut, leurs écritures attendent votre approbation : l'agent propose, vous validez. Vous pouvez aussi leur donner des outils à partir d'une spécification OpenAPI ou de la documentation d'une API.",
      it: 'Gli agenti TblFlow pianificano ed eseguono compiti in più passaggi: hanno un pianificatore, un esecutore, una memoria persistente sotto forma di grafo entità/relazioni e uno scheduler. Leggono e scrivono i tuoi record, interrogano la tua biblioteca di documenti come contesto e agiscono sui servizi collegati — Gmail, GitHub, Slack, Google Calendar, Drive e Meet. Per impostazione predefinita, le loro scritture restano in attesa della tua approvazione: l\'agente propone, tu approvi. Puoi anche fornire loro strumenti generati da una specifica OpenAPI o dalla documentazione di un\'API.',
      ja: 'TblFlow のエージェントは、複数のステップからなるタスクを計画し、実行します。プランナー、実行エンジン、エンティティ/リレーションのグラフとして保持される永続メモリ、スケジューラを備えています。レコードの読み書きを行い、ドキュメントライブラリを文脈として参照し、連携サービス（Gmail、GitHub、Slack、Google カレンダー、Drive、Meet）に対して操作します。既定では、書き込みはあなたの承認を待ちます。エージェントが提案し、あなたが承認します。OpenAPI 仕様や API のドキュメントから生成したツールを与えることもできます。',
      ru: 'Агенты TblFlow планируют и выполняют многошаговые задачи: у них есть планировщик, исполнитель, постоянная память в виде графа сущностей и связей, а также планировщик запусков. Они читают и пишут ваши записи, обращаются к библиотеке документов как к контексту и действуют в подключённых сервисах — Gmail, GitHub, Slack, Google Календарь, Drive и Meet. По умолчанию их записи ждут вашего утверждения: агент предлагает, вы утверждаете. Им также можно дать инструменты, сгенерированные из спецификации OpenAPI или из документации API.',
      tr: 'TblFlow ajanları çok adımlı görevleri planlar ve yürütür: bir planlayıcıya, bir yürütücüye, varlık/ilişki grafiği biçiminde kalıcı belleğe ve bir zamanlayıcıya sahiptir. Kayıtlarınızı okur ve yazar, doküman kitaplığınızı bağlam olarak sorgular ve bağlı servisler üzerinde işlem yapar — Gmail, GitHub, Slack, Google Takvim, Drive ve Meet. Varsayılan olarak yazma işlemleri onayınızı bekler: ajan önerir, siz onaylarsınız. Ayrıca bir OpenAPI belirtiminden ya da bir API\'nin belgelerinden üretilen araçlar da verebilirsiniz.',
      uk: 'Агенти TblFlow планують і виконують завдання з кількох кроків: у них є планувальник, виконавець, постійна памʼять у вигляді графа сутностей і звʼязків та планувальник запусків. Вони читають і записують ваші записи, звертаються до бібліотеки документів як до контексту й діють у підключених сервісах — Gmail, GitHub, Slack, Google Календар, Drive і Meet. За замовчуванням їхні записи чекають вашого схвалення: агент пропонує, ви затверджуєте. Їм також можна дати інструменти на основі специфікації OpenAPI або документації API.',
      zh: 'TblFlow 的智能体规划并执行多步骤任务：具备规划器、执行器、以实体/关系图形式保存的持久记忆，以及调度器。它们读写您的记录，把文档库作为上下文查询，并在已连接的服务上执行操作 —— Gmail、GitHub、Slack、Google 日历、Drive 和 Meet。默认情况下，它们的写入操作需等待您的批准：智能体提出方案，由您审批。您还可以通过 OpenAPI 规范或 API 文档为它们生成工具。',
    },
  },
  {
    category: 'pricing',
    question: {
      de: 'Was kostet TblFlow?',
      en: 'How much does TblFlow cost?',
      es: '¿Cuánto cuesta TblFlow?',
      fr: 'Combien coûte TblFlow ?',
      it: 'Quanto costa TblFlow?',
      ja: 'TblFlow の料金はいくらですか？',
      ru: 'Сколько стоит TblFlow?',
      tr: 'TblFlow ne kadar?',
      uk: 'Скільки коштує TblFlow?',
      zh: 'TblFlow 多少钱？',
    },
    answer: {
      de: "TblFlow Cloud hat vier Tarife. Kostenlos: 1 Base, 2 Personen inklusive. Essential: 39 € pro Monat für 5 Personen und 5 Bases. Team: 119 € pro Monat für 15 Personen und 30 Bases. Enterprise: ab 399 € pro Monat für bis zu 50 Personen, mit unbegrenzten Bases, Zeilen und Speicher. Jede weitere Person kostet 7 € (Essential), 6 € (Team) bzw. 5 € (Enterprise) pro Monat. Die Preise gelten pro Team, nicht pro Person. Selbst gehostet, in dedizierter VPC oder für mehr als 50 Personen gibt es Enterprise auf Anfrage.",
      en: "TblFlow Cloud has four tiers. Free: 1 base and 2 people included. Essential: €39 per month for 5 people and 5 bases. Team: €119 per month for 15 people and 30 bases. Enterprise: from €399 per month for up to 50 people, with unlimited bases, rows and storage. Each extra person costs €7 (Essential), €6 (Team) or €5 (Enterprise) per month. Prices are per team, not per person. Self-hosting, a dedicated VPC or more than 50 people is quote-based on Enterprise.",
      es: "TblFlow Cloud tiene cuatro planes. Gratis: 1 base y 2 personas incluidas. Esencial: 39 € al mes para 5 personas y 5 bases. Equipo: 119 € al mes para 15 personas y 30 bases. Enterprise: desde 399 € al mes para hasta 50 personas, con bases, filas y almacenamiento ilimitados. Cada persona adicional cuesta 7 € (Esencial), 6 € (Equipo) o 5 € (Enterprise) al mes. El precio es por equipo, no por persona. El autoalojamiento, una VPC dedicada o más de 50 personas se presupuestan en Enterprise.",
      fr: "TblFlow Cloud compte quatre paliers. Gratuit : 1 base et 2 personnes incluses. Essentiel : 39 € par mois pour 5 personnes et 5 bases. Équipe : 119 € par mois pour 15 personnes et 30 bases. Entreprise : à partir de 399 € par mois pour jusqu’à 50 personnes, avec bases, lignes et stockage illimités. Chaque personne en plus coûte 7 € (Essentiel), 6 € (Équipe) ou 5 € (Entreprise) par mois. Le prix est par équipe, pas par personne. L’auto-hébergement, un VPC dédié ou plus de 50 personnes relèvent d’un devis Entreprise.",
      it: "TblFlow Cloud ha quattro piani. Gratuito: 1 base e 2 persone incluse. Essenziale: 39 € al mese per 5 persone e 5 base. Team: 119 € al mese per 15 persone e 30 base. Enterprise: da 399 € al mese per un massimo di 50 persone, con base, righe e spazio illimitati. Ogni persona in più costa 7 € (Essenziale), 6 € (Team) o 5 € (Enterprise) al mese. Il prezzo è per team, non per persona. Self-hosting, VPC dedicato o più di 50 persone sono su preventivo nel piano Enterprise.",
      ja: "TblFlow Cloud には 4 つのプランがあります。無料プランはベース 1 つと 2 名まで含みます。Essential は月額 €39 で、5 名とベース 5 つが対象です。チームは月額 €119 で、15 名とベース 30 が対象です。Enterprise は月額 €399 からで、最大 50 名まで、ベース・行・ストレージは無制限です。追加の 1 名ごとに月額 €7（Essential）、€6（チーム）、€5（Enterprise）がかかります。料金はユーザー単位ではなくチーム単位です。セルフホスト、専用 VPC、50 名超は Enterprise で見積制となります。",
      ru: "В TblFlow Cloud четыре тарифа. Бесплатный: 1 база и 2 участника включено. Essential: 39 € в месяц за 5 участников и 5 баз. Team: 119 € в месяц за 15 участников и 30 баз. Enterprise: от 399 € в месяц для команды до 50 участников, с неограниченными базами, строками и хранилищем. Каждый дополнительный участник стоит 7 € (Essential), 6 € (Team) или 5 € (Enterprise) в месяц. Цена за команду, а не за человека. Self-hosting, выделенный VPC или более 50 участников — по запросу в Enterprise.",
      tr: "TblFlow Cloud dört pakete sahiptir. Ücretsiz: 1 base ve 2 kişi dahil. Essential: 5 kişi ve 5 base için ayda €39. Team: 15 kişi ve 30 base için ayda €119. Enterprise: en fazla 50 kişi için ayda €399’dan başlar; base, satır ve depolama sınırsızdır. Her ek kişi ayda €7 (Essential), €6 (Team) veya €5 (Enterprise) tutar. Fiyatlar kişi başına değil, ekip başınadır. Kendi sunucunuzda barındırma, özel VPC veya 50 kişinin üzerindeki ekipler için Enterprise teklife bağlıdır.",
      uk: "У TblFlow Cloud чотири тарифи. Безкоштовний: 1 база та 2 користувачі включено. Essential: 39 € на місяць за 5 користувачів і 5 баз. Team: 119 € на місяць за 15 користувачів і 30 баз. Enterprise: від 399 € на місяць за до 50 користувачів, з необмеженими базами, рядками та сховищем. Кожен додатковий користувач коштує 7 € (Essential), 6 € (Team) або 5 € (Enterprise) на місяць. Ціна за команду, а не за людину. Self-hosting, виділений VPC або понад 50 користувачів — за запитом у Enterprise.",
      zh: "TblFlow Cloud 有四个套餐。免费版包含 1 个 base 和 2 位成员。Essential 每月 €39，含 5 位成员和 5 个 base。团队版每月 €119，含 15 位成员和 30 个 base。企业版每月 €399 起，最多 50 位成员，base、行数和存储不限。每增加 1 位成员，每月加收 €7（Essential）、€6（团队版）或 €5（企业版）。价格按团队计，而非按人头。自托管、专属 VPC 或超过 50 人的情况，在企业版按需报价。",
    },
  },
  {
    category: 'pricing',
    question: {
      de: 'Hat TblFlow einen kostenlosen Tarif?',
      en: 'Does TblFlow have a free plan?',
      es: '¿TblFlow tiene un plan gratuito?',
      fr: 'TblFlow a-t-il une offre gratuite ?',
      it: 'TblFlow ha un piano gratuito?',
      ja: 'TblFlow に無料プランはありますか？',
      ru: 'Есть ли у TblFlow бесплатный тариф?',
      tr: "TblFlow'un ücretsiz bir paketi var mı?",
      uk: 'Чи є у TblFlow безкоштовний тариф?',
      zh: 'TblFlow 有免费套餐吗？',
    },
    answer: {
      de: "Ja. TblFlow Cloud hat einen dauerhaft kostenlosen Tarif mit 2 Personen, 1 Base, 1 GB Speicher sowie unbegrenzten KI-Agenten, Automatisierungen und API-Anfragen, ohne Kreditkarte. Eine Prozessdiagnose ist kostenlos. Die Bereitstellung auf Ihrer eigenen Infrastruktur gehört zum Enterprise-Tarif, auf Anfrage.",
      en: "Yes. TblFlow Cloud has a permanent Free tier with 2 people, 1 base, 1 GB of storage and unlimited AI agents, automations and API requests, with no credit card. A one-process diagnosis is free. Deploying on your own infrastructure is part of the Enterprise tier, on quote.",
      es: "Sí. TblFlow Cloud tiene un plan Gratis permanente con 2 personas, 1 base, 1 GB de almacenamiento y agentes de IA, automatizaciones y solicitudes de API ilimitados, sin tarjeta de crédito. El diagnóstico de un proceso es gratis. El despliegue en tu propia infraestructura forma parte del plan Enterprise, a presupuesto.",
      fr: "Oui. TblFlow Cloud a un palier Gratuit permanent avec 2 personnes, 1 base, 1 Go de stockage et des agents IA, des automatisations et des requêtes API illimités, sans carte bancaire. Le diagnostic d’un processus est gratuit. Le déploiement sur votre propre infrastructure relève du palier Entreprise, sur devis.",
      it: "Sì. TblFlow Cloud ha un piano Gratuito permanente con 2 persone, 1 base, 1 GB di spazio e agenti IA, automazioni e richieste API illimitati, senza carta di credito. La diagnosi di un processo è gratuita. Il deployment sulla tua infrastruttura fa parte del piano Enterprise, su preventivo.",
      ja: "はい。TblFlow Cloud には恒久的な無料プランがあり、2 名、ベース 1 つ、ストレージ 1 GB、そして数に制限のない AI エージェント・自動化・API リクエストが含まれます。クレジットカードは不要です。1 つのプロセスの診断は無料です。自社インフラへの配置は Enterprise プラン（見積制）に含まれます。",
      ru: "Да. В TblFlow Cloud есть постоянный бесплатный тариф: 2 участника, 1 база, 1 ГБ хранилища, а также неограниченные ИИ-агенты, автоматизации и запросы к API, без банковской карты. Диагностика одного процесса бесплатна. Развёртывание на собственной инфраструктуре относится к тарифу Enterprise, по запросу.",
      tr: "Evet. TblFlow Cloud, 2 kişi, 1 base, 1 GB depolama ve sınırsız yapay zekâ ajanı, otomasyon ve API isteği içeren kalıcı bir ücretsiz pakete sahiptir; kredi kartı gerekmez. Tek bir sürecin teşhisi ücretsizdir. Kendi altyapınıza dağıtım, teklife bağlı Enterprise paketinin bir parçasıdır.",
      uk: "Так. У TblFlow Cloud є постійний безкоштовний тариф: 2 користувачі, 1 база, 1 ГБ сховища, а також необмежені ШІ-агенти, автоматизації та запити до API, без банківської картки. Діагностика одного процесу безкоштовна. Розгортання на власній інфраструктурі належить до тарифу Enterprise, за запитом.",
      zh: "有。TblFlow Cloud 提供永久免费套餐，包含 2 位成员、1 个 base、1 GB 存储，以及数量不限的 AI 智能体、自动化和 API 请求，无需信用卡。单个流程的诊断免费。部署在您自己的基础设施上属于企业版，按需报价。",
    },
  },
  {
    category: 'technical',
    question: {
      de: 'Welche Datenbank nutzt TblFlow?',
      en: 'What database does TblFlow use?',
      es: '¿Qué base de datos usa TblFlow?',
      fr: 'Quelle base de données TblFlow utilise-t-il ?',
      it: 'Quale database usa TblFlow?',
      ja: 'TblFlow はどのデータベースを使っていますか？',
      ru: 'Какую базу данных использует TblFlow?',
      tr: 'TblFlow hangi veritabanını kullanıyor?',
      uk: 'Яку базу даних використовує TblFlow?',
      zh: 'TblFlow 使用什么数据库？',
    },
    answer: {
      de: 'TblFlow nutzt PostgreSQL, mit der Erweiterung pgvector für die semantische Suche und Redis für Caching und Hintergrund-Warteschlangen. Jede Tabelle, die Sie in TblFlow anlegen, ist eine echte physische PostgreSQL-Tabelle und keine Zeile in einem generischen Speicher — deshalb können Sie Ihre Daten direkt mit SQL abfragen.',
      en: 'TblFlow uses PostgreSQL, with the pgvector extension for semantic search and Redis for caching and background job queues. Every table you create in TblFlow is a real physical PostgreSQL table, not a row in a generic store — which is why you can query your data directly with SQL.',
      es: 'TblFlow usa PostgreSQL, con la extensión pgvector para la búsqueda semántica y Redis para la caché y las colas de tareas en segundo plano. Cada tabla que creas en TblFlow es una tabla PostgreSQL física real, no una fila en un almacén genérico, y por eso puedes consultar tus datos directamente con SQL.',
      fr: "TblFlow utilise PostgreSQL, avec l'extension pgvector pour la recherche sémantique et Redis pour le cache et les files de tâches de fond. Chaque table que vous créez dans TblFlow est une vraie table PostgreSQL physique, pas une ligne dans un magasin générique : vous pouvez donc requêter vos données directement en SQL.",
      it: "TblFlow usa PostgreSQL, con l'estensione pgvector per la ricerca semantica e Redis per la cache e le code di lavori in background. Ogni tabella che crei in TblFlow è una vera tabella PostgreSQL fisica, non una riga in un archivio generico: per questo puoi interrogare i tuoi dati direttamente in SQL.",
      ja: 'TblFlow は PostgreSQL を使用し、セマンティック検索には pgvector 拡張、キャッシュとバックグラウンドジョブのキューには Redis を使います。TblFlow で作成する各テーブルは、汎用ストア内の 1 行ではなく、実在する物理的な PostgreSQL テーブルです。だからこそ、SQL で直接データを問い合わせできます。',
      ru: 'TblFlow использует PostgreSQL, расширение pgvector для семантического поиска и Redis для кеша и очередей фоновых задач. Каждая таблица, которую вы создаёте в TblFlow, — это настоящая физическая таблица PostgreSQL, а не строка в универсальном хранилище; именно поэтому данные можно запрашивать напрямую на SQL.',
      tr: 'TblFlow, PostgreSQL kullanır; anlamsal arama için pgvector eklentisini, önbellek ve arka plan iş kuyrukları için Redis’i kullanır. TblFlow’da oluşturduğunuz her tablo, genel bir deponun içindeki bir satır değil, gerçek bir fiziksel PostgreSQL tablosudur — verilerinizi doğrudan SQL ile sorgulayabilmenizin nedeni budur.',
      uk: 'TblFlow використовує PostgreSQL, розширення pgvector для семантичного пошуку та Redis для кешу й черг фонових завдань. Кожна таблиця, яку ви створюєте в TblFlow, — це справжня фізична таблиця PostgreSQL, а не рядок в універсальному сховищі; саме тому дані можна запитувати напряму мовою SQL.',
      zh: 'TblFlow 使用 PostgreSQL，语义搜索依赖 pgvector 扩展，缓存和后台任务队列使用 Redis。您在 TblFlow 中创建的每一张表都是真实的物理 PostgreSQL 表，而不是通用存储里的一行 —— 这正是您可以直接用 SQL 查询数据的原因。',
    },
  },
  {
    category: 'technical',
    question: {
      de: 'Hat TblFlow eine API?',
      en: 'Does TblFlow have an API?',
      es: '¿TblFlow tiene API?',
      fr: 'TblFlow a-t-il une API ?',
      it: 'TblFlow ha un’API?',
      ja: 'TblFlow に API はありますか？',
      ru: 'Есть ли у TblFlow API?',
      tr: "TblFlow'un API'si var mı?",
      uk: 'Чи є у TblFlow API?',
      zh: 'TblFlow 有 API 吗？',
    },
    answer: {
      de: 'Ja. TblFlow stellt eine REST-API bereit, dokumentiert durch eine OpenAPI-Spezifikation, mit Token-Authentifizierung. In Apps, die über den App Builder veröffentlicht werden, wird zusätzlich eine JavaScript-API eingefügt, damit Ihr eigener Code Datensätze lesen und schreiben kann.',
      en: 'Yes. TblFlow exposes a REST API documented by an OpenAPI specification, with token authentication. A JavaScript API is also injected into apps published through the App Builder, so your own code can read and write records.',
      es: 'Sí. TblFlow expone una API REST documentada mediante una especificación OpenAPI, con autenticación por token. Además, se inyecta una API de JavaScript en las apps publicadas con el App Builder, para que tu propio código pueda leer y escribir registros.',
      fr: "Oui. TblFlow expose une API REST documentée par une spécification OpenAPI, avec authentification par token. Une API JavaScript est également injectée dans les applications publiées via l'App Builder, pour lire et écrire des enregistrements depuis votre propre code.",
      it: "Sì. TblFlow espone un'API REST documentata da una specifica OpenAPI, con autenticazione tramite token. Nelle app pubblicate con l'App Builder viene inoltre iniettata un'API JavaScript, così il tuo codice può leggere e scrivere record.",
      ja: 'はい。TblFlow は OpenAPI 仕様で文書化された REST API を提供し、トークン認証に対応します。App Builder で公開したアプリには JavaScript API も注入され、自分のコードからレコードを読み書きできます。',
      ru: 'Да. TblFlow предоставляет REST API, описанный спецификацией OpenAPI, с аутентификацией по токену. В приложения, опубликованные через App Builder, также внедряется JavaScript API, чтобы ваш собственный код мог читать и записывать записи.',
      tr: "Evet. TblFlow, OpenAPI belirtimiyle belgelenmiş, token kimlik doğrulamalı bir REST API sunar. App Builder ile yayımlanan uygulamalara ayrıca bir JavaScript API'si enjekte edilir; böylece kendi kodunuz kayıtları okuyup yazabilir.",
      uk: 'Так. TblFlow надає REST API, описаний специфікацією OpenAPI, з автентифікацією за токеном. У застосунки, опубліковані через App Builder, також вбудовується JavaScript API, щоб ваш власний код міг читати й записувати записи.',
      zh: '有。TblFlow 提供由 OpenAPI 规范描述的 REST API，采用 token 认证。通过 App Builder 发布的应用中还会注入 JavaScript API，让您自己的代码可以读写记录。',
    },
  },
  {
    category: 'technical',
    question: {
      de: 'Welche KI-Anbieter unterstützt TblFlow?',
      en: 'Which AI providers does TblFlow support?',
      es: '¿Qué proveedores de IA admite TblFlow?',
      fr: 'Quels fournisseurs d’IA TblFlow prend-il en charge ?',
      it: 'Quali provider di IA supporta TblFlow?',
      ja: 'TblFlow はどの AI プロバイダーに対応していますか？',
      ru: 'Каких ИИ-провайдеров поддерживает TblFlow?',
      tr: 'TblFlow hangi yapay zekâ sağlayıcılarını destekler?',
      uk: 'Яких ШІ-провайдерів підтримує TblFlow?',
      zh: 'TblFlow 支持哪些 AI 提供商？',
    },
    answer: {
      de: 'TblFlow unterstützt OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, jeden OpenAI-kompatiblen Endpunkt sowie lokale Modelle über Ollama und LM Studio. Anbieter und Modelle werden pro Base konfiguriert, mit Ihren eigenen API-Schlüsseln.',
      en: 'TblFlow supports OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, any OpenAI-compatible endpoint, and local models through Ollama and LM Studio. Providers and models are configured per base, using your own API keys.',
      es: 'TblFlow admite OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, cualquier endpoint compatible con OpenAI y modelos locales mediante Ollama y LM Studio. Los proveedores y modelos se configuran por base, con tus propias claves de API.',
      fr: "TblFlow prend en charge OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, tout point de terminaison compatible OpenAI, ainsi que les modèles locaux via Ollama et LM Studio. Les fournisseurs et les modèles se configurent par base, avec vos propres clés d'API.",
      it: "TblFlow supporta OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, qualsiasi endpoint compatibile con OpenAI e i modelli locali tramite Ollama e LM Studio. Provider e modelli si configurano per base, con le tue chiavi API.",
      ja: 'TblFlow は OpenAI、Anthropic、Google Gemini、Azure OpenAI、DeepSeek、Mistral、Groq、Cohere、OpenAI 互換の任意のエンドポイント、そして Ollama や LM Studio 経由のローカルモデルに対応します。プロバイダーとモデルはベースごとに、ご自身の API キーで設定します。',
      ru: 'TblFlow поддерживает OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, любую точку доступа, совместимую с OpenAI, а также локальные модели через Ollama и LM Studio. Провайдеры и модели настраиваются для каждой базы, с вашими собственными API-ключами.',
      tr: "TblFlow; OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, OpenAI uyumlu herhangi bir uç noktayı ve Ollama ile LM Studio üzerinden yerel modelleri destekler. Sağlayıcılar ve modeller, kendi API anahtarlarınızla base başına yapılandırılır.",
      uk: 'TblFlow підтримує OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, будь-яку сумісну з OpenAI точку доступу, а також локальні моделі через Ollama та LM Studio. Провайдери й моделі налаштовуються для кожної бази, з вашими власними API-ключами.',
      zh: 'TblFlow 支持 OpenAI、Anthropic、Google Gemini、Azure OpenAI、DeepSeek、Mistral、Groq、Cohere、任何兼容 OpenAI 的端点，以及通过 Ollama 和 LM Studio 接入的本地模型。提供商和模型按 base 配置，使用您自己的 API 密钥。',
    },
  },
  {
    category: 'technical',
    question: {
      de: 'Wie viele Zeilen verkraftet TblFlow?',
      en: 'How many rows can TblFlow handle?',
      es: '¿Cuántas filas puede manejar TblFlow?',
      fr: 'Combien de lignes TblFlow gère-t-il ?',
      it: 'Quante righe può gestire TblFlow?',
      ja: 'TblFlow はどれくらいの行数を扱えますか？',
      ru: 'Сколько строк выдерживает TblFlow?',
      tr: 'TblFlow kaç satırı kaldırabilir?',
      uk: 'Скільки рядків витримує TblFlow?',
      zh: 'TblFlow 能处理多少行数据？',
    },
    answer: {
      de: 'TblFlow filtert, sortiert, gruppiert und durchsucht Millionen von Zeilen mit Antwortzeiten unter einer Sekunde: Das Raster wird auf Canvas gezeichnet und nur der sichtbare Bereich neu gerendert, sodass die Anzeigeleistung nicht mit der Zeilenzahl abfällt. Die Zeilen pro Tabelle hängen dagegen vom Tarif ab: 5.000 im kostenlosen Tarif, bis zu 1.000.000 bei Team, unbegrenzt bei Enterprise — die vollständige Aufschlüsselung steht auf der Preisseite.',
      en: 'TblFlow filters, sorts, groups and searches across millions of rows with sub-second response times: the grid renders to canvas and only redraws the visible region, so display performance does not degrade as row count grows. Rows per table, however, do depend on your tier: 5,000 on the Free tier, up to 1,000,000 on Team, unlimited on Enterprise — see the pricing page for the full breakdown.',
      es: 'TblFlow filtra, ordena, agrupa y busca sobre millones de filas con tiempos de respuesta por debajo del segundo: la cuadrícula se dibuja en canvas y solo redibuja la zona visible, así que el rendimiento de visualización no se degrada al crecer el número de filas. Las filas por tabla, en cambio, dependen del plan: 5000 en el plan Gratis, hasta 1.000.000 en Equipo, ilimitadas en Enterprise. El desglose completo está en la página de precios.',
      fr: "TblFlow filtre, trie, groupe et cherche sur des millions de lignes avec un temps de réponse inférieur à la seconde : la grille est rendue en canvas et ne redessine que la zone visible, donc la performance d'affichage ne se dégrade pas avec le nombre de lignes. Le nombre de lignes par table dépend en revanche du palier : 5 000 sur le palier Gratuit, jusqu'à 1 000 000 sur Équipe, illimité sur Entreprise — voir la page tarifs pour le détail par palier.",
      it: "TblFlow filtra, ordina, raggruppa e cerca su milioni di righe con tempi di risposta inferiori al secondo: la griglia viene disegnata su canvas e ridisegna solo l'area visibile, quindi le prestazioni di visualizzazione non peggiorano al crescere delle righe. Le righe per tabella dipendono invece dal piano: 5000 sul piano Gratuito, fino a 1.000.000 su Team, illimitate su Enterprise — il dettaglio completo è sulla pagina prezzi.",
      ja: 'TblFlow は数百万行に対するフィルタ、並べ替え、グループ化、検索を 1 秒未満の応答で行います。グリッドは canvas に描画され、表示中の領域だけを再描画するため、行数が増えても表示性能は落ちません。一方、1 テーブルあたりの行数はプランによって異なります。無料プランで 5,000 行、チームで最大 1,000,000 行、Enterprise は無制限です。プランごとの詳細は料金ページをご覧ください。',
      ru: 'TblFlow фильтрует, сортирует, группирует и ищет по миллионам строк с откликом менее секунды: сетка рисуется на canvas и перерисовывает только видимую область, поэтому скорость отображения не падает с ростом числа строк. А вот число строк на таблицу зависит от тарифа: 5 000 на бесплатном, до 1 000 000 на Team, без ограничений на Enterprise — полная разбивка на странице тарифов.',
      tr: "TblFlow, milyonlarca satır üzerinde saniyenin altında yanıt süreleriyle filtreler, sıralar, gruplar ve arar: ızgara canvas üzerine çizilir ve yalnızca görünen bölgeyi yeniden çizer, bu yüzden satır sayısı arttıkça görüntüleme performansı düşmez. Tablo başına satır sayısı ise pakete bağlıdır: Ücretsiz pakette 5.000, Team'de 1.000.000'a kadar, Enterprise'da sınırsız — paket bazındaki ayrıntı için fiyatlar sayfasına bakın.",
      uk: 'TblFlow фільтрує, сортує, групує та шукає по мільйонах рядків з відгуком менше секунди: сітка малюється на canvas і перемальовує лише видиму ділянку, тож швидкість відображення не падає зі зростанням кількості рядків. А от кількість рядків на таблицю залежить від тарифу: 5 000 на безкоштовному, до 1 000 000 на Team, без обмежень на Enterprise — повна розбивка на сторінці тарифів.',
      zh: 'TblFlow 可以在数百万行数据上进行筛选、排序、分组和搜索，响应时间低于一秒：表格渲染到 canvas，且只重绘可见区域，因此显示性能不会随行数增长而下降。不过每张表的行数取决于套餐：免费套餐 5,000 行，团队版最多 1,000,000 行，企业版无限制 —— 各套餐的完整明细见价格页。',
    },
  },
  {
    category: 'data',
    question: {
      de: 'Wo werden meine Daten gespeichert?',
      en: 'Where is my data stored?',
      es: '¿Dónde se almacenan mis datos?',
      fr: 'Où mes données sont-elles stockées ?',
      it: 'Dove sono archiviati i miei dati?',
      ja: '私のデータはどこに保存されますか？',
      ru: 'Где хранятся мои данные?',
      tr: 'Verilerim nerede saklanıyor?',
      uk: 'Де зберігаються мої дані?',
      zh: '我的数据存储在哪里？',
    },
    answer: {
      de: 'Das hängt von der Bereitstellung ab. In TblFlow Cloud liegen Ihre Daten in der von TblFlow verwalteten Infrastruktur. Selbst gehostet oder im dedizierten Enterprise-Betrieb liegen sie in Ihrem eigenen PostgreSQL, auf Ihrer Infrastruktur oder in einer dedizierten VPC — TblFlow hat keinen Zugriff darauf. In beiden Fällen werden die Daten in standardmäßigem PostgreSQL gespeichert, ohne proprietäres Format.',
      en: 'It depends on the deployment. On TblFlow Cloud, your data sits in TblFlow-managed infrastructure. Self-hosted or on dedicated Enterprise, it sits in your own PostgreSQL, on your infrastructure or in a dedicated VPC — TblFlow has no access to it. In both cases the data is stored in standard PostgreSQL, with no proprietary format.',
      es: 'Depende del despliegue. En TblFlow Cloud, tus datos están en infraestructura gestionada por TblFlow. En autoalojado o en Enterprise dedicado, están en tu propio PostgreSQL, en tu infraestructura o en una VPC dedicada, y TblFlow no tiene acceso a ellos. En ambos casos los datos se almacenan en PostgreSQL estándar, sin formato propietario.',
      fr: "Cela dépend du mode de déploiement. Sur TblFlow Cloud, vos données sont dans l'infrastructure infogérée de TblFlow. En auto-hébergement ou en Enterprise dédié, elles sont dans votre propre PostgreSQL, sur votre infrastructure ou dans un VPC dédié — TblFlow n'y a pas accès. Dans les deux cas, les données sont stockées en PostgreSQL standard, sans format propriétaire.",
      it: "Dipende dal tipo di deployment. Su TblFlow Cloud i tuoi dati stanno nell'infrastruttura gestita da TblFlow. In self-hosted o su Enterprise dedicato stanno nel tuo PostgreSQL, sulla tua infrastruttura o in un VPC dedicato, e TblFlow non vi ha accesso. In entrambi i casi i dati sono archiviati in PostgreSQL standard, senza formato proprietario.",
      ja: '配置方法によって異なります。TblFlow Cloud では、データは TblFlow が運用するインフラ上にあります。セルフホストまたは専用 Enterprise では、ご自身の PostgreSQL、つまり自社インフラまたは専用 VPC 上にあり、TblFlow はアクセスできません。いずれの場合も、データは独自形式ではなく標準の PostgreSQL に保存されます。',
      ru: 'Это зависит от варианта развёртывания. В TblFlow Cloud данные находятся в инфраструктуре, управляемой TblFlow. При self-hosted или выделенном Enterprise они находятся в вашем собственном PostgreSQL, на вашей инфраструктуре или в выделенном VPC — у TblFlow нет к ним доступа. В обоих случаях данные хранятся в стандартном PostgreSQL, без проприетарного формата.',
      tr: "Bu, dağıtım biçimine bağlıdır. TblFlow Cloud'da verileriniz TblFlow tarafından yönetilen altyapıda durur. Kendi sunucunuzda barındırılan ya da özel Enterprise kurulumda ise kendi PostgreSQL'inizde, kendi altyapınızda veya özel bir VPC içinde durur; TblFlow bunlara erişemez. Her iki durumda da veriler, tescilli bir biçim olmadan standart PostgreSQL'de saklanır.",
      uk: 'Це залежить від способу розгортання. У TblFlow Cloud дані перебувають в інфраструктурі, якою керує TblFlow. У self-hosted або виділеному Enterprise вони перебувають у вашому власному PostgreSQL, на вашій інфраструктурі або у виділеному VPC — TblFlow не має до них доступу. В обох випадках дані зберігаються у стандартному PostgreSQL, без пропрієтарного формату.',
      zh: '这取决于部署方式。在 TblFlow Cloud 上，您的数据位于 TblFlow 托管的基础设施中。自托管或专属 Enterprise 部署时，数据位于您自己的 PostgreSQL 中，在您的基础设施或专属 VPC 内 —— TblFlow 无法访问。两种情况下，数据都存储在标准 PostgreSQL 中，没有专有格式。',
    },
  },
  {
    category: 'data',
    question: {
      de: 'Kann ich meine Daten exportieren und gehen?',
      en: 'Can I export my data and leave?',
      es: '¿Puedo exportar mis datos y marcharme?',
      fr: 'Puis-je exporter mes données et partir ?',
      it: 'Posso esportare i miei dati e andarmene?',
      ja: 'データをエクスポートして移行できますか？',
      ru: 'Могу ли я выгрузить свои данные и уйти?',
      tr: 'Verilerimi dışa aktarıp ayrılabilir miyim?',
      uk: 'Чи можу я вивантажити свої дані та піти?',
      zh: '我可以导出数据然后离开吗？',
    },
    answer: {
      de: 'Ja, und ohne Konvertierungsschritt. Ihre Daten liegen bereits in standardmäßigen PostgreSQL-Tabellen, also genügt ein `pg_dump`, und der lässt sich in jedes Postgres importieren. Es gibt kein proprietäres Format zu konvertieren und keine Synchronisierungsschicht zu entwirren. Genau das bedeutet „kein Anbieter-Lock-in“ auf dieser Website.',
      en: 'Yes, and with no conversion step. Your data already lives in standard PostgreSQL tables, so a `pg_dump` is enough and it imports into any Postgres. There is no proprietary format to convert and no sync layer to unpick. That is what "no vendor lock-in" means on this site.',
      es: 'Sí, y sin paso de conversión. Tus datos ya viven en tablas PostgreSQL estándar, así que basta un `pg_dump` y se importa en cualquier Postgres. No hay formato propietario que convertir ni capa de sincronización que desenredar. Eso es lo que significa «sin dependencia de proveedor» en este sitio.',
      fr: "Oui, et sans conversion. Vos données sont déjà dans des tables PostgreSQL standard : un dump `pg_dump` suffit, et il s'importe dans n'importe quel Postgres. Il n'y a pas de format propriétaire à convertir, ni de couche de synchronisation à démêler. C'est le sens de « sans verrouillage propriétaire » sur ce site.",
      it: "Sì, e senza passaggi di conversione. I tuoi dati stanno già in tabelle PostgreSQL standard: basta un `pg_dump` e si importa in qualsiasi Postgres. Non c'è un formato proprietario da convertire né un livello di sincronizzazione da districare. È questo che significa «nessun vincolo di fornitore» su questo sito.",
      ja: 'はい、変換作業なしで可能です。データはすでに標準の PostgreSQL テーブルにあるため、`pg_dump` だけで十分で、どの Postgres にもインポートできます。変換すべき独自形式も、解きほぐすべき同期レイヤーもありません。本サイトでいう「ベンダーロックインなし」とは、この意味です。',
      ru: 'Да, и без этапа конвертации. Ваши данные уже лежат в стандартных таблицах PostgreSQL, так что достаточно `pg_dump`, и он импортируется в любой Postgres. Нет ни проприетарного формата для конвертации, ни слоя синхронизации, который пришлось бы распутывать. Именно это на сайте означает «без привязки к поставщику».',
      tr: "Evet, üstelik dönüştürme adımı olmadan. Verileriniz zaten standart PostgreSQL tablolarında duruyor; bir `pg_dump` yeterli ve herhangi bir Postgres'e aktarılabiliyor. Dönüştürülecek tescilli bir biçim ya da çözülecek bir senkronizasyon katmanı yok. Bu sitedeki «sağlayıcıya bağımlılık yok» ifadesi bunu anlatıyor.",
      uk: 'Так, і без етапу конвертації. Ваші дані вже лежать у стандартних таблицях PostgreSQL, тож достатньо `pg_dump`, і він імпортується в будь-який Postgres. Немає ані пропрієтарного формату для конвертації, ані шару синхронізації, який довелося б розплутувати. Саме це на цьому сайті означає «без прив’язки до постачальника».',
      zh: '可以，而且无需转换。您的数据已经存放在标准 PostgreSQL 表中，一个 `pg_dump` 就够了，并且能导入任意 Postgres。没有专有格式需要转换，也没有同步层需要拆解。这正是本站所说的“不锁定供应商”的含义。',
    },
  },
  {
    category: 'data',
    question: {
      de: 'Ist TblFlow DSGVO-konform?',
      en: 'Is TblFlow GDPR compliant?',
      es: '¿TblFlow cumple el RGPD?',
      fr: 'TblFlow est-il conforme au RGPD ?',
      it: 'TblFlow è conforme al GDPR?',
      ja: 'TblFlow は GDPR に準拠していますか？',
      ru: 'Соответствует ли TblFlow GDPR?',
      tr: 'TblFlow GDPR uyumlu mu?',
      uk: 'Чи відповідає TblFlow GDPR?',
      zh: 'TblFlow 符合 GDPR 吗？',
    },
    answer: {
      de: 'TblFlow ist auf DSGVO-konforme Nutzung ausgelegt und bietet ein Audit-Log, eine Revisionshistorie, granulare Berechtigungen und Einwilligungsverwaltung. Selbst gehostet oder im dedizierten Enterprise-Betrieb kontrollieren Sie den Speicherort der Daten vollständig, was die Compliance für Organisationen mit Anforderungen an die Datenresidenz vereinfacht.',
      en: 'TblFlow is built for GDPR-compliant use and provides an audit log, revision history, granular permissions and consent management. Self-hosted or on dedicated Enterprise, you fully control data location, which simplifies compliance for organisations with data-residency requirements.',
      es: 'TblFlow está diseñado para un uso conforme al RGPD y ofrece registro de auditoría, historial de revisiones, permisos granulares y gestión del consentimiento. En autoalojado o en Enterprise dedicado, controlas por completo la ubicación de los datos, lo que simplifica el cumplimiento para organizaciones con requisitos de residencia de datos.',
      fr: "TblFlow est conçu pour un usage conforme au RGPD et fournit un journal d'audit, un historique de révisions, des permissions granulaires et une gestion du consentement. En auto-hébergement ou en Enterprise dédié, vous maîtrisez entièrement la localisation des données, ce qui simplifie la conformité pour les organisations soumises à des contraintes de résidence des données.",
      it: 'TblFlow è progettato per un uso conforme al GDPR e fornisce un registro di audit, una cronologia delle revisioni, permessi granulari e la gestione del consenso. In self-hosted o su Enterprise dedicato controlli completamente la localizzazione dei dati, il che semplifica la conformità per le organizzazioni con requisiti di residenza dei dati.',
      ja: 'TblFlow は GDPR に準拠した利用を前提に設計されており、監査ログ、変更履歴、細かな権限設定、同意管理を備えています。セルフホストまたは専用 Enterprise では、データの所在を完全に自社で管理できるため、データレジデンシー要件のある組織にとって遵守が容易になります。',
      ru: 'TblFlow рассчитан на использование в соответствии с GDPR и предоставляет журнал аудита, историю изменений, детальные права доступа и управление согласиями. При self-hosted или выделенном Enterprise вы полностью контролируете расположение данных, что упрощает соответствие требованиям для организаций с ограничениями по резидентности данных.',
      tr: "TblFlow, GDPR uyumlu kullanım için tasarlanmıştır; denetim günlüğü, revizyon geçmişi, ayrıntılı izinler ve onay yönetimi sunar. Kendi sunucunuzda barındırılan ya da özel Enterprise kurulumda verilerin konumunu tümüyle siz denetlersiniz; bu da veri ikametgâhı gereksinimi olan kurumlar için uyumu kolaylaştırır.",
      uk: 'TblFlow розрахований на використання відповідно до GDPR і надає журнал аудиту, історію змін, деталізовані права доступу та керування згодами. У self-hosted або виділеному Enterprise ви повністю контролюєте розташування даних, що спрощує відповідність для організацій з вимогами щодо резидентності даних.',
      zh: 'TblFlow 按照符合 GDPR 的使用方式构建，提供审计日志、修订历史、精细权限和同意管理。在自托管或专属 Enterprise 部署下，您完全掌控数据所在位置，这让有数据驻留要求的组织更容易满足合规。',
    },
  },
  ...([
    [1, 'product'],
    [2, 'pricing'],
    [3, 'data'],
    [4, 'product'],
    [5, 'product'],
    [6, 'product'],
    [7, 'product'],
    [8, 'product'],
  ] as const).map(([n, category]): FaqItem => {
    const all = (key: PmKey) =>
      Object.fromEntries(LOCALES.map((l) => [l, pm(l, key)])) as Record<Locale, string>;
    return { category, topic: 'process-map', question: all(`faq.${n}.q`), answer: all(`faq.${n}.a`) };
  }),
];
