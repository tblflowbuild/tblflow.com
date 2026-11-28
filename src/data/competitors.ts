import { type Locale } from '@/config';
import { COMPETITOR_LABELS, type Competitor } from '@/data/content';

/**
 * Editorial copy for the one-page-per-competitor comparisons.
 *
 * The shared comparison table alone would give four pages with the same body
 * and a swapped column — which is exactly the thin, templated content search
 * engines discount, and which helps nobody deciding between two products. So
 * each page carries its own positioning, its own honest "pick them instead"
 * section, and its own verdict.
 *
 * `honest` is not a hedge: a comparison page that finds no case for the
 * competitor reads as marketing and gets treated as such by readers and by
 * engines assessing usefulness. Naming where the other tool genuinely wins is
 * what makes the rest credible.
 *
 * All ten locales are written out rather than filling the untranslated eight
 * from English. A comparison page is a page someone reads while deciding, in
 * their own language; served in English it argues for the competitor by
 * default.
 */
export type CompetitorSlug = Exclude<Competitor, 'tblflow'>;

export const COMPETITOR_SLUGS = [
  'airtable',
  'baserow',
  'nocodb',
  'monday',
  'notion',
  'salesforce',
] as const;

interface CompetitorPage {
  /** Short category descriptor, used in the intro sentence. */
  category: Record<Locale, string>;
  /** The one-sentence answer, straight after the H1 — the quotable bit. */
  summary: Record<Locale, string>;
  /** Three substantive differences, beyond what the table conveys. */
  differences: Array<{ title: Record<Locale, string>; body: Record<Locale, string> }>;
  /** Where the competitor is the better call. */
  honest: Record<Locale, string>;
}

export const COMPETITOR_PAGES: Record<CompetitorSlug, CompetitorPage> = {
  airtable: {
    category: {
      de: 'No-Code-Datenbank', en: 'no-code database', es: 'base de datos no-code',
      fr: 'base de données no-code', it: 'database no-code', ja: 'ノーコードデータベース',
      ru: 'no-code база данных', tr: 'no-code veritabanı', uk: 'no-code база даних',
      zh: 'no-code 数据库',
    },
    summary: {
      de: "Airtable und TblFlow decken dasselbe Feld ab — Tabellen, Ansichten, Automatisierungen. Der Unterschied liegt darunter: TblFlow schreibt in eine echte PostgreSQL-Tabelle, die Sie mit SQL abfragen können.",
      en: "Airtable and TblFlow cover the same ground — tables, views, automations. The difference is underneath: TblFlow writes to a real PostgreSQL table you can query in SQL.",
      es: "Airtable y TblFlow cubren el mismo terreno: tablas, vistas, automatizaciones. La diferencia está debajo: TblFlow escribe en una tabla PostgreSQL real que puedes consultar con SQL.",
      fr: "Airtable et TblFlow couvrent le même terrain — tables, vues, automatisations. La différence tient à ce qu'il y a dessous : TblFlow écrit dans une vraie table PostgreSQL que vous pouvez requêter en SQL.",
      it: "Airtable e TblFlow coprono lo stesso terreno — tabelle, viste, automazioni. La differenza sta sotto: TblFlow scrive in una vera tabella PostgreSQL che puoi interrogare in SQL.",
      ja: "Airtable と TblFlow が扱う範囲は同じです。テーブル、ビュー、自動化。違いはその下にあります。TblFlow は SQL で問い合わせできる実在の PostgreSQL テーブルに書き込みます。",
      ru: "Airtable и TblFlow покрывают одно и то же поле — таблицы, представления, автоматизации. Разница ниже: TblFlow пишет в настоящую таблицу PostgreSQL, которую можно запрашивать на SQL.",
      tr: "Airtable ve TblFlow aynı alanı kapsar — tablolar, görünümler, otomasyonlar. Fark alttadır: TblFlow, SQL ile sorgulayabileceğiniz gerçek bir PostgreSQL tablosuna yazar.",
      uk: "Airtable і TblFlow покривають те саме поле — таблиці, подання, автоматизації. Різниця нижче: TblFlow пише у справжню таблицю PostgreSQL, яку можна запитувати мовою SQL.",
      zh: "Airtable 和 TblFlow 覆盖同一片领域 —— 数据表、视图、自动化。差别在底层：TblFlow 写入的是可以用 SQL 查询的真实 PostgreSQL 表。",
    },
    differences: [
      {
        title: {
          de: 'Die Speicherung, und was daraus folgt', en: 'Storage, and what follows from it',
          es: 'El almacenamiento, y lo que implica', fr: 'Le stockage, et ce qu’il implique',
          it: "L'archiviazione, e ciò che ne consegue", ja: 'ストレージと、そこから導かれること',
          ru: 'Хранение и что из него следует', tr: 'Depolama ve bundan doğanlar',
          uk: 'Зберігання і що з нього випливає', zh: '存储，以及由此带来的差别',
        },
        body: {
          de: "Bei TblFlow ist ein `pg_dump` die Datenbank selbst, anderswo wiederherstellbar. Ihre Daten sind nie vom Werkzeug getrennt, das sie hält.",
          en: "With TblFlow, a `pg_dump` is the database itself, restorable elsewhere. Your data is never separated from the tool that holds it.",
          es: "En TblFlow, un `pg_dump` es la base de datos misma, restaurable en otro sitio. Tus datos nunca están separados de la herramienta que los contiene.",
          fr: "Chez TblFlow, un `pg_dump` est la base elle-même, restaurable ailleurs. Vos données ne sont jamais séparées de l'outil qui les porte.",
          it: "Con TblFlow, un `pg_dump` è il database stesso, ripristinabile altrove. I tuoi dati non sono mai separati dallo strumento che li ospita.",
          ja: "TblFlow では `pg_dump` がデータベースそのもので、別の場所にそのまま復元できます。データが、それを保持するツールから切り離されることはありません。",
          ru: "В TblFlow `pg_dump` — это сама база данных, которую можно восстановить в другом месте. Ваши данные никогда не отделены от инструмента, который их хранит.",
          tr: "TblFlow'da bir `pg_dump`, başka yerde geri yüklenebilen veritabanının kendisidir. Verileriniz onları tutan araçtan hiçbir zaman ayrılmaz.",
          uk: "У TblFlow `pg_dump` — це сама база даних, яку можна відновити деінде. Ваші дані ніколи не відокремлені від інструмента, що їх зберігає.",
          zh: "在 TblFlow 中，`pg_dump` 就是数据库本身，可在别处还原。您的数据从不与保存它的工具分离。",
        },
      },
    ],
    honest: {
      de: 'Airtable hat ein weit reicheres Ökosystem an Erweiterungen und Vorlagen sowie eine große Community. Wenn eine vorhandene Vorlage Ihren Bedarf deckt und die Speicherfrage Sie nicht kümmert, kommen Sie mit Airtable schneller in Gang.',
      en: 'Airtable has a far richer extension and template ecosystem, and a large community. If an existing template covers your need and the storage question is not one you care about, Airtable will get you started faster.',
      es: 'Airtable tiene un ecosistema de extensiones y plantillas mucho más rico, y una comunidad amplia. Si una plantilla existente cubre tu necesidad y la cuestión del almacenamiento te da igual, Airtable te hará arrancar más rápido.',
      fr: "Airtable a un écosystème d'extensions et de modèles bien plus fourni, et une communauté large. Si votre besoin est couvert par un modèle existant et que la question du stockage vous est indifférente, Airtable vous fera gagner du temps au démarrage.",
      it: 'Airtable ha un ecosistema di estensioni e modelli molto più ricco, e una community ampia. Se un modello esistente copre il tuo bisogno e la questione dell\'archiviazione non ti interessa, con Airtable parti più in fretta.',
      ja: 'Airtable は拡張機能とテンプレートのエコシステムがはるかに充実しており、コミュニティも大きいです。既存のテンプレートで用が足り、ストレージの問題が気にならないなら、Airtable のほうが早く立ち上がります。',
      ru: 'У Airtable гораздо богаче экосистема расширений и шаблонов и большое сообщество. Если готовый шаблон закрывает вашу задачу, а вопрос хранения вас не волнует, с Airtable вы стартуете быстрее.',
      tr: 'Airtable çok daha zengin bir eklenti ve şablon ekosistemine ve geniş bir topluluğa sahiptir. Mevcut bir şablon ihtiyacınızı karşılıyorsa ve depolama meselesi sizi ilgilendirmiyorsa, Airtable ile daha hızlı başlarsınız.',
      uk: 'В Airtable значно багатша екосистема розширень і шаблонів та велика спільнота. Якщо готовий шаблон закриває ваше завдання, а питання зберігання вас не турбує, з Airtable ви стартуєте швидше.',
      zh: 'Airtable 拥有丰富得多的扩展与模板生态，以及庞大的社区。如果现成模板能满足您的需求，而存储问题您并不在意，用 Airtable 会更快上手。',
    },
  },

  baserow: {
    category: {
      de: 'quelloffene No-Code-Datenbank', en: 'open-source no-code database',
      es: 'base de datos no-code de código abierto', fr: 'base no-code open source',
      it: 'database no-code open source', ja: 'オープンソースのノーコードデータベース',
      ru: 'open-source no-code база данных', tr: 'açık kaynak no-code veritabanı',
      uk: 'open-source no-code база даних', zh: '开源 no-code 数据库',
    },
    summary: {
      de: "Baserow und TblFlow teilen das Wesentliche: Open Source, selbst hostbar, auf PostgreSQL aufgebaut. Der Unterschied liegt in dem, was darauf läuft — Baserow bietet einen KI-Assistenten und einen KI-Agenten-Knoten; TblFlow ergänzt Agenten mit dauerhaftem Gedächtnis und freigegebenen Vorschlägen sowie die semantische Suche in Dokumenten.",
      en: "Baserow and TblFlow share the essentials: open source, self-hostable, built on PostgreSQL. The difference is what runs on top — Baserow offers an AI assistant and an AI agent node; TblFlow adds agents with persistent memory and approved proposals, and semantic search over documents.",
      es: "Baserow y TblFlow comparten lo esencial: código abierto, autoalojable, construido sobre PostgreSQL. La diferencia está en lo que corre encima — Baserow ofrece un asistente de IA y un nodo de agente de IA; TblFlow añade agentes con memoria persistente y propuestas aprobadas, y búsqueda semántica sobre documentos.",
      fr: "Baserow et TblFlow partagent l'essentiel : open source, auto-hébergeable, bâti sur PostgreSQL. La différence tient à ce qui tourne par-dessus — Baserow propose un assistant IA et un nœud d'agent IA ; TblFlow ajoute des agents à mémoire persistante et propositions approuvées, et la recherche sémantique dans les documents.",
      it: "Baserow e TblFlow condividono l’essenziale: open source, self-hostable, costruito su PostgreSQL. La differenza sta in ciò che gira sopra — Baserow offre un assistente IA e un nodo agente IA; TblFlow aggiunge agenti con memoria persistente e proposte approvate, e la ricerca semantica nei documenti.",
      ja: "Baserow と TblFlow は本質を共有しています。オープンソース、セルフホスト可能、PostgreSQL 基盤。違いはその上で動くものです。Baserow は AI アシスタントと AI エージェントノードを提供し、TblFlow は永続メモリと承認制の提案を備えたエージェント、およびドキュメントのセマンティック検索を加えます。",
      ru: "Baserow и TblFlow разделяют главное: открытый код, self-hosting, основа — PostgreSQL. Разница в том, что работает поверх — Baserow предлагает ИИ-ассистента и узел ИИ-агента; TblFlow добавляет агентов с постоянной памятью и утверждаемыми предложениями, а также семантический поиск по документам.",
      tr: "Baserow ve TblFlow temel noktaları paylaşır: açık kaynak, kendi sunucunuzda barındırılabilir, PostgreSQL üzerine kurulu. Fark üstte çalışanlardadır — Baserow bir yapay zekâ asistanı ve bir yapay zekâ ajan düğümü sunar; TblFlow kalıcı belleği ve onaylı önerileri olan ajanları ve belgelerde anlamsal aramayı ekler.",
      uk: "Baserow і TblFlow поділяють головне: відкритий код, self-hosting, основа — PostgreSQL. Різниця в тому, що працює поверх — Baserow пропонує ШІ-асистента і вузол ШІ-агента; TblFlow додає агентів із постійною пам’яттю та пропозиціями на затвердження, а також семантичний пошук по документах.",
      zh: "Baserow 和 TblFlow 共享核心：开源、可自托管、基于 PostgreSQL。差别在其上运行的内容 —— Baserow 提供 AI 助手和 AI 智能体节点；TblFlow 增加具备持久记忆和经批准提案的智能体，以及文档语义搜索。",
    },
    differences: [
      {
        title: {
          de: 'Die KI-Schicht', en: 'The AI layer', es: 'La capa de IA', fr: 'La couche IA',
          it: 'Il livello IA', ja: 'AI レイヤー', ru: 'Слой ИИ', tr: 'Yapay zekâ katmanı',
          uk: 'Шар ШІ', zh: 'AI 层',
        },
        body: {
          de: "Baserow liefert inzwischen einen KI-Assistenten, ein KI-Feld und einen Agenten-Knoten und kündigt einen Agenten-Builder als „bald verfügbar“ an. Die Agenten von TblFlow entscheiden ihre Schritte selbst anhand eines Ziels, führen ein dauerhaftes Gedächtnis und reichen Vorschläge zur Freigabe ein. Wenn Sie nur eine saubere, selbst gehostete Kollaborationsdatenbank brauchen, spielt das womöglich keine Rolle; geht es um das Delegieren wiederkehrender Arbeit, vergleichen Sie beide anhand Ihres Falls.",
          en: "Baserow now ships an AI assistant, an AI field and an agent node, and lists an agent builder as coming soon. TblFlow agents decide their own steps from a goal, keep a persistent memory and submit proposals for approval. If your need is a clean, self-hosted collaborative database, this may not matter; if it is delegating recurring work, compare both against your case.",
          es: "Baserow incluye ahora un asistente de IA, un campo de IA y un nodo de agente, y anuncia un constructor de agentes como «próximamente». Los agentes de TblFlow deciden sus propios pasos a partir de un objetivo, mantienen una memoria persistente y presentan propuestas para aprobación. Si tu necesidad es una base de datos colaborativa limpia y autoalojada, quizá no importe; si es delegar trabajo recurrente, compara ambos con tu caso.",
          fr: "Baserow propose désormais un assistant IA, un champ IA et un nœud d'agent, et annonce un constructeur d'agents comme « bientôt disponible ». Les agents de TblFlow décident eux-mêmes de leurs étapes à partir d'un objectif, gardent une mémoire persistante et soumettent des propositions à approbation. Si votre besoin est une base collaborative simple et auto-hébergée, cela peut ne pas compter ; s'il s'agit de déléguer du travail récurrent, comparez les deux sur votre cas.",
          it: "Baserow offre ora un assistente IA, un campo IA e un nodo agente, e annuncia un costruttore di agenti come «in arrivo». Gli agenti di TblFlow decidono da soli i propri passaggi a partire da un obiettivo, mantengono una memoria persistente e sottopongono proposte ad approvazione. Se ti serve un database collaborativo pulito e self-hosted, può non contare; se si tratta di delegare lavoro ricorrente, confronta entrambi sul tuo caso.",
          ja: "Baserow は現在、AI アシスタント、AI フィールド、エージェントノードを提供し、エージェントビルダーを「近日公開」としています。TblFlow のエージェントは目標から自分で手順を決め、永続メモリを持ち、提案を承認に回します。シンプルなセルフホストの共同データベースが目的なら影響は小さいかもしれません。繰り返しの作業を任せたい場合は、ご自身のケースで両者を比較してください。",
          ru: "Теперь в Baserow есть ИИ-ассистент, ИИ-поле и узел агента, а конструктор агентов заявлен как «скоро». Агенты TblFlow сами определяют шаги по цели, хранят постоянную память и отправляют предложения на утверждение. Если вам нужна простая коллаборативная база с self-hosting, это может не иметь значения; если нужно делегировать регулярную работу, сравните оба варианта на вашем случае.",
          tr: "Baserow artık bir yapay zekâ asistanı, bir yapay zekâ alanı ve bir ajan düğümü sunuyor; ajan oluşturucuyu ise «yakında» olarak duyuruyor. TblFlow ajanları bir hedeften yola çıkıp adımlarına kendileri karar verir, kalıcı bir bellek tutar ve önerileri onaya sunar. İhtiyacınız temiz, kendi sunucunuzda çalışan ortak bir veritabanıysa bu önemli olmayabilir; yinelenen işleri devretmekse, ikisini kendi durumunuza göre karşılaştırın.",
          uk: "Baserow тепер має ШІ-асистента, ШІ-поле та вузол агента, а конструктор агентів анонсовано як «незабаром». Агенти TblFlow самі визначають кроки за метою, мають постійну пам’ять і подають пропозиції на затвердження. Якщо вам потрібна проста колаборативна база з self-hosting, це може не мати значення; якщо йдеться про делегування регулярної роботи — порівняйте обидва варіанти на вашому випадку.",
          zh: "Baserow 现已提供 AI 助手、AI 字段和智能体节点，并将智能体构建器列为“即将推出”。TblFlow 的智能体根据目标自行决定步骤，保持持久记忆，并把提案提交审批。如果您需要的只是简洁的自托管协作数据库，这点可能无关紧要；如果是要委托重复性工作，请结合自身情况比较两者。",
        },
      },
      {
        title: {
          de: 'Lizenz', en: 'Licence', es: 'Licencia', fr: 'Licence', it: 'Licenza',
          ja: 'ライセンス', ru: 'Лицензия', tr: 'Lisans', uk: 'Ліцензія', zh: '许可证',
        },
        body: {
          de: "Der Code von Baserow steht unter der MIT-Lizenz, dazu kommen kostenpflichtige Pläne Premium, Advanced und Enterprise. TblFlow steht unter AGPL-3.0; ein selbst gehosteter Betrieb mit allen freigeschalteten Funktionen fällt unter den Enterprise-Plan auf Anfrage. Beide Modelle sind vertretbar — sie passen nur zu unterschiedlichen rechtlichen oder budgetären Rahmenbedingungen.",
          en: "Baserow’s code is under the MIT licence, with paid Premium, Advanced and Enterprise plans. TblFlow is AGPL-3.0; a self-hosted deployment with every feature unlocked falls under the Enterprise plan, on quote. Both models are defensible — they simply suit different legal or budget constraints.",
          es: "El código de Baserow está bajo licencia MIT, con planes de pago Premium, Advanced y Enterprise. TblFlow es AGPL-3.0; un despliegue autoalojado con todas las funciones desbloqueadas entra en el plan Enterprise, a presupuesto. Ambos modelos son defendibles: simplemente encajan con restricciones legales o presupuestarias distintas.",
          fr: "Le code de Baserow est sous licence MIT, avec des offres payantes Premium, Advanced et Enterprise. TblFlow est sous AGPL-3.0 ; un déploiement auto-hébergé avec toutes les fonctions débloquées relève de l'offre Entreprise, sur devis. Les deux modèles se défendent — ils conviennent simplement à des contraintes juridiques ou budgétaires différentes.",
          it: "Il codice di Baserow è sotto licenza MIT, con piani a pagamento Premium, Advanced ed Enterprise. TblFlow è AGPL-3.0; un deployment self-hosted con tutte le funzioni sbloccate rientra nel piano Enterprise, su preventivo. Entrambi i modelli sono difendibili: semplicemente si adattano a vincoli legali o di budget diversi.",
          ja: "Baserow のコードは MIT ライセンスで、有料の Premium・Advanced・Enterprise プランがあります。TblFlow は AGPL-3.0 で、全機能を解放したセルフホスト構成は見積制の Enterprise プランに該当します。どちらのモデルにも筋が通っており、法務や予算の制約が違うだけです。",
          ru: "Код Baserow распространяется под лицензией MIT, есть платные тарифы Premium, Advanced и Enterprise. TblFlow — AGPL-3.0; self-hosted развёртывание со всеми включёнными функциями относится к тарифу Enterprise по запросу. Обе модели оправданны — они просто подходят под разные юридические или бюджетные ограничения.",
          tr: "Baserow'un kodu MIT lisansı altındadır; ücretli Premium, Advanced ve Enterprise planları vardır. TblFlow AGPL-3.0'dır; tüm özellikleri açık kendi sunucuda barındırma, teklife bağlı Enterprise planı kapsamına girer. İki model de savunulabilir — yalnızca farklı hukuki veya bütçesel kısıtlara uyar.",
          uk: "Код Baserow розповсюджується за ліцензією MIT, є платні тарифи Premium, Advanced і Enterprise. TblFlow — AGPL-3.0; self-hosted розгортання з усіма увімкненими функціями належить до тарифу Enterprise за запитом. Обидві моделі виправдані — вони просто підходять під різні юридичні чи бюджетні обмеження.",
          zh: "Baserow 的代码采用 MIT 许可证，另有付费的 Premium、Advanced 和 Enterprise 套餐。TblFlow 采用 AGPL-3.0；解锁全部功能的自托管部署属于按需报价的企业版套餐。两种模式都站得住脚 —— 只是适合不同的法律或预算约束。",
        },
      },
    ],
    honest: {
      de: "Baserow ist in seinem Umfang ausgereifter, mit aktiver Community und stabilerer Codebasis. Für ein Team, das eine selbst gehostete Datenbank im Airtable-Stil will, ist Baserow die direktere Wahl — und seine MIT-Lizenz ist freizügiger als unsere AGPL.",
      en: "Baserow is more mature within its scope, with an active community and a more settled codebase. For a team that wants a self-hosted Airtable-style database, Baserow is the more direct choice — and its MIT licence is more permissive than our AGPL.",
      es: "Baserow es más maduro dentro de su alcance, con una comunidad activa y una base de código más asentada. Para un equipo que quiere una base de datos autoalojada al estilo Airtable, Baserow es la opción más directa, y su licencia MIT es más permisiva que nuestra AGPL.",
      fr: "Baserow est plus mûr dans son périmètre, avec une communauté active et un code plus posé. Pour une équipe qui veut une base auto-hébergée dans l'esprit d'Airtable, Baserow est le choix le plus direct — et sa licence MIT est plus permissive que notre AGPL.",
      it: "Baserow è più maturo nel suo ambito, con una community attiva e una base di codice più assestata. Per un team che vuole un database self-hosted in stile Airtable, Baserow è la scelta più diretta — e la sua licenza MIT è più permissiva della nostra AGPL.",
      ja: "Baserow はその範囲においてより成熟しており、活発なコミュニティと落ち着いたコードベースがあります。Airtable のようなセルフホスト型データベースが欲しいチームには Baserow がより直接的な選択で、MIT ライセンスは当社の AGPL より寛容です。",
      ru: "Baserow зрелее в своих рамках: активное сообщество и более устоявшаяся кодовая база. Для команды, которой нужна self-hosted база в духе Airtable, Baserow — более прямой выбор, а лицензия MIT свободнее нашей AGPL.",
      tr: "Baserow kapsamı içinde daha olgundur; etkin bir topluluğu ve daha oturmuş bir kod tabanı vardır. Airtable tarzı, kendi sunucusunda çalışan bir veritabanı isteyen ekip için Baserow daha doğrudan seçimdir — MIT lisansı da AGPL'imizden daha serbesttir.",
      uk: "Baserow зріліший у своїх межах: активна спільнота і усталеніша кодова база. Для команди, якій потрібна self-hosted база в дусі Airtable, Baserow — пряміший вибір, а ліцензія MIT вільніша за нашу AGPL.",
      zh: "Baserow 在其范围内更成熟，社区活跃，代码库更稳定。对于想要自托管的 Airtable 式数据库的团队，Baserow 是更直接的选择 —— 其 MIT 许可证也比我们的 AGPL 更宽松。",
    },
  },

  nocodb: {
    category: {
      de: 'No-Code-Schicht über einer bestehenden Datenbank',
      en: 'no-code layer over an existing database',
      es: 'capa no-code sobre una base existente',
      fr: 'interface no-code sur base existante',
      it: 'livello no-code su un database esistente',
      ja: '既存データベースの上に載せるノーコード層',
      ru: 'no-code слой поверх существующей базы',
      tr: 'mevcut bir veritabanı üzerinde no-code katman',
      uk: 'no-code шар поверх наявної бази',
      zh: '架在已有数据库上的 no-code 层',
    },
    summary: {
      de: "NocoDB verbindet sich mit einer Datenbank, die Sie bereits haben — MySQL oder Postgres — und setzt eine Tabellenoberfläche darauf. TblFlow erstellt und steuert die Datenbank. Der Ausgangspunkt unterscheidet sich: eine bestehende Datenbank umwandeln oder eine komplett neue samt Agenten und Apps aufbauen.",
      en: "NocoDB connects to a database you already have — MySQL or Postgres — and puts a spreadsheet interface on it. TblFlow creates and drives the database. The starting point differs: converting an existing database, or building one complete with its agents and apps.",
      es: "NocoDB se conecta a una base que ya tienes — MySQL o Postgres — y le pone encima una interfaz de hoja de cálculo. TblFlow crea y dirige la base. El punto de partida difiere: convertir una base existente, o construir una completa con sus agentes y aplicaciones.",
      fr: "NocoDB se branche sur une base que vous avez déjà — MySQL ou Postgres — et lui pose une interface de tableur. TblFlow crée et pilote la base. Le point de départ diffère : convertir une base existante, ou en bâtir une complète avec ses agents et ses apps.",
      it: "NocoDB si collega a un database che hai già — MySQL o Postgres — e vi applica un’interfaccia da foglio di calcolo. TblFlow crea e gestisce il database. Il punto di partenza è diverso: convertire un database esistente, oppure costruirne uno completo con i suoi agenti e le sue app.",
      ja: "NocoDB は、すでにお持ちのデータベース（MySQL または Postgres）に接続し、スプレッドシート風のインターフェースを重ねます。TblFlow はデータベースを作成し、運用します。出発点が違います。既存のデータベースを変換するか、エージェントとアプリを備えた完全なものを構築するかです。",
      ru: "NocoDB подключается к уже имеющейся у вас базе — MySQL или Postgres — и накладывает на неё интерфейс электронной таблицы. TblFlow создаёт базу и управляет ею. Отправная точка разная: преобразовать существующую базу или построить новую целиком, с агентами и приложениями.",
      tr: "NocoDB, halihazırda sahip olduğunuz bir veritabanına — MySQL veya Postgres — bağlanır ve üzerine bir hesap tablosu arayüzü koyar. TblFlow veritabanını oluşturur ve yönetir. Başlangıç noktası farklıdır: mevcut bir veritabanını dönüştürmek ya da ajanları ve uygulamalarıyla eksiksiz yeni bir tane kurmak.",
      uk: "NocoDB підключається до наявної в вас бази — MySQL або Postgres — і накладає на неї інтерфейс електронної таблиці. TblFlow створює базу й керує нею. Відправна точка різна: перетворити наявну базу або збудувати нову цілу, з агентами та застосунками.",
      zh: "NocoDB 连接到您已有的数据库（MySQL 或 Postgres），并在其上叠加电子表格界面。TblFlow 则创建并驱动数据库。起点不同：改造现有数据库，或构建一套带智能体和应用的完整数据库。",
    },
    differences: [
      {
        title: {
          de: 'Anschließen oder aufbauen', en: 'Connect or build', es: 'Conectar o construir',
          fr: 'Se brancher ou construire', it: 'Collegarsi o costruire',
          ja: 'つなぐか、つくるか', ru: 'Подключиться или построить',
          tr: 'Bağlanmak mı, kurmak mı', uk: 'Підключитися чи побудувати',
          zh: '接入，还是搭建',
        },
        body: {
          de: 'Die Stärke von NocoDB ist, sich an eine bestehende Datenbank zu hängen, ohne sie zu migrieren — wertvoll, wenn das Schema schon lebt und einem anderen Team gehört. TblFlow erstellt sein eigenes Schema: direkter, wenn Sie bei null anfangen, weniger geeignet, um eine Altdatenbank einzukleiden.',
          en: "NocoDB's strength is attaching to an existing database without migrating it — valuable when the schema already lives and belongs to another team. TblFlow creates its own schema: more direct from scratch, less suited to dressing up a legacy database.",
          es: 'La fuerza de NocoDB es engancharse a una base existente sin migrarla, algo valioso cuando el esquema ya vive y pertenece a otro equipo. TblFlow crea su propio esquema: más directo si partes de cero, menos adecuado para revestir una base heredada.',
          fr: "La force de NocoDB est de s'attacher à une base existante sans la migrer — précieux quand le schéma vit déjà et appartient à une autre équipe. TblFlow crée son schéma : c'est plus direct pour partir de zéro, moins adapté pour habiller une base héritée.",
          it: 'La forza di NocoDB è agganciarsi a un database esistente senza migrarlo — prezioso quando lo schema vive già ed è di un altro team. TblFlow crea il proprio schema: più diretto se parti da zero, meno adatto a rivestire un database preesistente.',
          ja: 'NocoDB の強みは、既存のデータベースを移行せずにそのまま取り込めることです。スキーマがすでに稼働していて、別のチームの所有物である場合に価値があります。TblFlow は自分でスキーマを作ります。ゼロから始めるなら素直ですが、レガシーなデータベースに被せる用途には向きません。',
          ru: 'Сила NocoDB — присоединиться к существующей базе, не мигрируя её; это ценно, когда схема уже живёт и принадлежит другой команде. TblFlow создаёт собственную схему: прямее, если начинать с нуля, и хуже подходит, чтобы одеть унаследованную базу.',
          tr: "NocoDB'nin gücü, mevcut bir veritabanına taşımadan bağlanabilmesidir — şema zaten çalışıyorsa ve başka bir ekibe aitse değerlidir. TblFlow kendi şemasını oluşturur: sıfırdan başlarken daha doğrudan, eski bir veritabanını giydirmek içinse daha az uygun.",
          uk: 'Сила NocoDB — приєднатися до наявної бази, не мігруючи її; це цінно, коли схема вже живе й належить іншій команді. TblFlow створює власну схему: прямішу, якщо починати з нуля, і гіршу, щоб вдягнути успадковану базу.',
          zh: 'NocoDB 的强项是接到已有数据库上而无需迁移 —— 当 schema 已经在跑、并且归属另一个团队时，这很有价值。TblFlow 会创建自己的 schema：从零开始时更直接，但不适合给遗留数据库套外壳。',
        },
      },
      {
        title: {
          de: 'Unterstützung mehrerer Datenbank-Engines', en: 'Multi-engine support',
          es: 'Soporte multi-motor', fr: 'Prise en charge multi-SGBD', it: 'Supporto multi-motore',
          ja: '複数 DB エンジンへの対応', ru: 'Поддержка нескольких СУБД',
          tr: 'Çoklu motor desteği', uk: 'Підтримка кількох СУБД', zh: '多数据库引擎支持',
        },
        body: {
          de: "NocoDB verbindet sich mit externen PostgreSQL- und MySQL-Datenbanken (SQL Server wird als Enterprise-Zusatz geführt). TblFlow spricht bewusst nur PostgreSQL: Vektorsuche, bedingte Rollups und die Agenten stützen sich auf Postgres-spezifische Mechanik, die ein Mehr-Engine-Mindestnenner ausschlösse.",
          en: "NocoDB connects to external PostgreSQL and MySQL databases (SQL Server is listed as an Enterprise add-on). TblFlow speaks only PostgreSQL, deliberately: vector search, conditional rollups and the agents rely on Postgres-specific machinery that a multi-engine common denominator would rule out.",
          es: "NocoDB se conecta a bases de datos PostgreSQL y MySQL externas (SQL Server figura como complemento Enterprise). TblFlow habla solo PostgreSQL, a propósito: la búsqueda vectorial, los rollups condicionales y los agentes se apoyan en mecanismos propios de Postgres que un mínimo común multimotor excluiría.",
          fr: "NocoDB se connecte à des bases PostgreSQL et MySQL externes (SQL Server figure comme option Enterprise). TblFlow ne parle que PostgreSQL, volontairement : la recherche vectorielle, les cumuls conditionnels et les agents s'appuient sur des mécanismes propres à Postgres qu'un plus petit dénominateur commun multi-moteurs exclurait.",
          it: "NocoDB si collega a database PostgreSQL e MySQL esterni (SQL Server è indicato come componente aggiuntivo Enterprise). TblFlow parla solo PostgreSQL, di proposito: la ricerca vettoriale, i rollup condizionali e gli agenti si appoggiano a meccanismi specifici di Postgres che un minimo comune denominatore multi-motore escluderebbe.",
          ja: "NocoDB は外部の PostgreSQL と MySQL に接続できます（SQL Server は Enterprise のアドオンとして記載）。TblFlow は意図的に PostgreSQL のみを扱います。ベクトル検索、条件付きロールアップ、エージェントは、複数エンジン共通の最小公約数では成り立たない Postgres 固有の仕組みに依存しているためです。",
          ru: "NocoDB подключается к внешним базам PostgreSQL и MySQL (SQL Server указан как дополнение уровня Enterprise). TblFlow работает только с PostgreSQL — намеренно: векторный поиск, условные rollup и агенты опираются на механизмы, специфичные для Postgres, которые исключил бы общий знаменатель нескольких движков.",
          tr: "NocoDB, harici PostgreSQL ve MySQL veritabanlarına bağlanır (SQL Server, Enterprise eklentisi olarak listelenir). TblFlow bilerek yalnızca PostgreSQL ile çalışır: vektör arama, koşullu rollup'lar ve ajanlar, çok motorlu bir ortak payda tarafından dışlanacak Postgres'e özgü mekanizmalara dayanır.",
          uk: "NocoDB підключається до зовнішніх баз PostgreSQL і MySQL (SQL Server вказано як додаток рівня Enterprise). TblFlow працює лише з PostgreSQL — свідомо: векторний пошук, умовні rollup і агенти спираються на механізми, специфічні для Postgres, які виключив би спільний знаменник кількох рушіїв.",
          zh: "NocoDB 可连接外部 PostgreSQL 和 MySQL 数据库（SQL Server 列为企业版附加项）。TblFlow 有意只支持 PostgreSQL：向量搜索、条件汇总和智能体依赖 Postgres 特有的机制，多引擎的最小公分母方案会将其排除。",
        },
      },
      {
        title: {
          de: 'Was darüber läuft', en: 'What runs on top', es: 'Lo que corre encima',
          fr: 'Ce qui tourne au-dessus', it: 'Cosa gira sopra', ja: 'その上で動くもの',
          ru: 'Что работает поверх', tr: 'Üzerinde çalışanlar', uk: 'Що працює згори',
          zh: '跑在上面的东西',
        },
        body: {
          de: 'NocoDB liefert Ansichten, Formulare und Automatisierungen. TblFlow ergänzt Agenten mit persistentem Gedächtnis und freigegebenen Vorschlägen, eine Dokumentbibliothek mit semantischer Suche und das Veröffentlichen von Apps auf Ihrer eigenen Domain.',
          en: 'NocoDB provides views, forms and automations. TblFlow adds agents with persistent memory and approved proposals, a document library with semantic search, and app publishing on your own domain.',
          es: 'NocoDB aporta vistas, formularios y automatizaciones. TblFlow añade agentes con memoria persistente y propuestas aprobadas, una biblioteca de documentos con búsqueda semántica y la publicación de aplicaciones en tu propio dominio.',
          fr: "NocoDB fournit vues, formulaires et automatisations. TblFlow ajoute des agents avec mémoire persistante et propositions validées, une bibliothèque documentaire à recherche sémantique, et la publication d'applications sur votre domaine.",
          it: 'NocoDB offre viste, moduli e automazioni. TblFlow aggiunge agenti con memoria persistente e proposte approvate, una libreria di documenti con ricerca semantica e la pubblicazione di app sul tuo dominio.',
          ja: 'NocoDB はビュー、フォーム、自動化を提供します。TblFlow はさらに、永続メモリと承認付き提案を持つエージェント、セマンティック検索付きのドキュメントライブラリ、自社ドメインでのアプリ公開を加えます。',
          ru: 'NocoDB даёт представления, формы и автоматизации. TblFlow добавляет агентов с постоянной памятью и согласуемыми предложениями, библиотеку документов с семантическим поиском и публикацию приложений на вашем домене.',
          tr: 'NocoDB görünümler, formlar ve otomasyonlar sunar. TblFlow bunlara kalıcı belleğe ve onaylanan önerilere sahip ajanları, anlamsal aramalı bir doküman kitaplığını ve kendi alan adınızda uygulama yayımlamayı ekler.',
          uk: 'NocoDB дає подання, форми та автоматизації. TblFlow додає агентів із постійною пам’яттю та погоджуваними пропозиціями, бібліотеку документів із семантичним пошуком і публікацію застосунків на вашому домені.',
          zh: 'NocoDB 提供视图、表单和自动化。TblFlow 增加了具备持久记忆和待审批提案的智能体、带语义搜索的文档库，以及在您自己域名上发布应用的能力。',
        },
      },
    ],
    honest: {
      de: 'Wenn Sie bereits eine Produktionsdatenbank haben und Nicht-Technikern schlicht eine Oberfläche darauf geben wollen, ohne das Schema anzufassen oder irgendetwas zu migrieren, tut NocoDB genau das und TblFlow ist das falsche Werkzeug. Es ist außerdem das einzige der beiden, das MySQL und SQL Server unterstützt.',
      en: 'If you already have a production database and simply want to give non-technical people an interface onto it, without touching the schema or migrating anything, NocoDB does exactly that and TblFlow is the wrong tool. It is also the only one of the two supporting MySQL and SQL Server.',
      es: 'Si ya tienes una base en producción y solo quieres dar a gente no técnica una interfaz sobre ella, sin tocar el esquema ni migrar nada, NocoDB hace exactamente eso y TblFlow es la herramienta equivocada. Además es el único de los dos que admite MySQL y SQL Server.',
      fr: "Si vous avez déjà une base en production et que vous voulez simplement donner à des non-techniciens une interface dessus, sans toucher au schéma ni migrer quoi que ce soit, NocoDB fait exactement ça et TblFlow est le mauvais outil. C'est aussi le seul des deux à prendre en charge MySQL et SQL Server.",
      it: 'Se hai già un database in produzione e vuoi semplicemente dare a persone non tecniche un\'interfaccia sopra, senza toccare lo schema né migrare nulla, NocoDB fa esattamente questo e TblFlow è lo strumento sbagliato. È anche l\'unico dei due a supportare MySQL e SQL Server.',
      ja: 'すでに本番のデータベースがあり、スキーマに手を入れず、何も移行せずに、非エンジニアへインターフェースを与えたいだけなら、NocoDB がまさにそれをします。TblFlow は適した道具ではありません。MySQL と SQL Server に対応しているのも、2 つのうち NocoDB だけです。',
      ru: 'Если у вас уже есть боевая база и вы просто хотите дать нетехническим людям интерфейс к ней, не трогая схему и ничего не мигрируя, NocoDB делает ровно это, а TblFlow — неподходящий инструмент. К тому же из двух только он поддерживает MySQL и SQL Server.',
      tr: "Halihazırda üretimde bir veritabanınız varsa ve şemaya dokunmadan, hiçbir şeyi taşımadan teknik olmayan kişilere onun üzerinde bir arayüz vermek istiyorsanız, NocoDB tam olarak bunu yapar ve TblFlow yanlış araçtır. Ayrıca ikisi içinde MySQL ve SQL Server'ı destekleyen tek seçenektir.",
      uk: 'Якщо у вас уже є бойова база й ви просто хочете дати нетехнічним людям інтерфейс до неї, не чіпаючи схему й нічого не мігруючи, NocoDB робить саме це, а TblFlow — невідповідний інструмент. До того ж із двох лише він підтримує MySQL і SQL Server.',
      zh: '如果您已经有一个生产数据库，只是想给非技术人员一个操作界面，不动 schema、不迁移任何东西，那么 NocoDB 正是干这个的，TblFlow 是错的工具。它也是两者中唯一支持 MySQL 和 SQL Server 的。',
    },
  },

  monday: {
    category: {
      de: 'Plattform für Arbeitsmanagement', en: 'work management platform',
      es: 'plataforma de gestión del trabajo', fr: 'plateforme de gestion du travail',
      it: 'piattaforma di gestione del lavoro', ja: 'ワークマネジメントプラットフォーム',
      ru: 'платформа управления работой', tr: 'iş yönetimi platformu',
      uk: 'платформа керування роботою', zh: '工作管理平台',
    },
    summary: {
      de: 'Monday.com ist eine Plattform für Arbeitsmanagement: Sie glänzt darin, Projekte und Teams zu verfolgen. TblFlow ist eine Datenbank: Sie glänzt darin, verknüpfte Daten zu modellieren und arbeiten zu lassen. Die Überschneidung ist real, der Zweck ist es nicht.',
      en: 'Monday.com is a work management platform: it excels at tracking projects and teams. TblFlow is a database: it excels at modelling related data and putting it to work. The overlap is real, the purpose is not the same.',
      es: 'Monday.com es una plataforma de gestión del trabajo: destaca siguiendo proyectos y equipos. TblFlow es una base de datos: destaca modelando datos relacionados y poniéndolos a trabajar. El solapamiento es real, la vocación no.',
      fr: "Monday.com est une plateforme de gestion du travail : elle excelle à suivre des projets et des équipes. TblFlow est une base de données : elle excelle à modéliser des données liées et à les faire travailler. Le recouvrement est réel, la vocation ne l'est pas.",
      it: 'Monday.com è una piattaforma di gestione del lavoro: eccelle nel seguire progetti e team. TblFlow è un database: eccelle nel modellare dati collegati e nel metterli al lavoro. La sovrapposizione è reale, la vocazione no.',
      ja: 'Monday.com はワークマネジメントのプラットフォームで、プロジェクトとチームを追うことに長けています。TblFlow はデータベースで、関連するデータをモデル化して働かせることに長けています。重なりは本物ですが、狙いは同じではありません。',
      ru: 'Monday.com — платформа управления работой: она сильна в отслеживании проектов и команд. TblFlow — база данных: она сильна в моделировании связанных данных и в том, чтобы заставить их работать. Пересечение реально, назначение — нет.',
      tr: 'Monday.com bir iş yönetimi platformudur: projeleri ve ekipleri izlemekte iyidir. TblFlow bir veritabanıdır: ilişkili verileri modellemekte ve onları çalıştırmakta iyidir. Örtüşme gerçektir, amaç aynı değildir.',
      uk: 'Monday.com — платформа керування роботою: вона сильна у стеженні за проєктами й командами. TblFlow — база даних: вона сильна у моделюванні пов’язаних даних і в тому, щоб змусити їх працювати. Перетин реальний, призначення — ні.',
      zh: 'Monday.com 是一个工作管理平台：它擅长跟踪项目和团队。TblFlow 是一个数据库：它擅长建模关联数据并让数据干活。重叠是真实的，定位则不同。',
    },
    differences: [
      {
        title: {
          de: 'Relationales Datenmodell', en: 'Relational data model',
          es: 'Modelo de datos relacional', fr: 'Modèle de données relationnel',
          it: 'Modello di dati relazionale', ja: 'リレーショナルなデータモデル',
          ru: 'Реляционная модель данных', tr: 'İlişkisel veri modeli',
          uk: 'Реляційна модель даних', zh: '关系型数据模型',
        },
        body: {
          de: 'Monday-Boards sind um Elemente und Unterelemente herum gebaut. Sobald mehrere Entitäten zu verknüpfen sind — Kontakte, Firmen, Deals, Rechnungen — mit Lookups und bedingten Rollups, stößt das Modell schnell an seine Grenze. Das ist der Heimatboden einer relationalen Datenbank.',
          en: "Monday boards are built around items and subitems. As soon as you need several related entities — contacts, companies, deals, invoices — with lookups and conditional rollups, the model runs out of room. That is a relational database's native ground.",
          es: 'Los tableros de Monday se construyen alrededor de elementos y subelementos. En cuanto hay que relacionar varias entidades — contactos, empresas, tratos, facturas — con lookups y rollups condicionales, el modelo se queda corto. Ese es el terreno natural de una base relacional.',
          fr: "Les tableaux Monday sont conçus autour d'éléments et de sous-éléments. Dès qu'il faut relier plusieurs entités — contacts, sociétés, deals, factures — avec lookups et rollups conditionnels, on atteint vite la limite du modèle. C'est le terrain natif d'une base relationnelle.",
          it: "Le board di Monday sono costruite attorno a elementi e sotto-elementi. Appena bisogna collegare più entità — contatti, aziende, opportunità, fatture — con lookup e rollup condizionali, il modello si esaurisce in fretta. È il terreno naturale di un database relazionale.",
          ja: 'Monday のボードはアイテムとサブアイテムを中心に組み立てられています。連絡先、企業、商談、請求書といった複数のエンティティをルックアップや条件付きロールアップで結び始めた途端、モデルの限界に届きます。そこはリレーショナルデータベースの本来の領域です。',
          ru: 'Доски Monday построены вокруг элементов и подэлементов. Как только нужно связать несколько сущностей — контакты, компании, сделки, счета — с подстановками и полями «Условное сворачивание», модель быстро упирается в потолок. Это родная территория реляционной базы.',
          tr: 'Monday panoları öğeler ve alt öğeler etrafında kurulur. Birkaç varlığı — kişiler, şirketler, fırsatlar, faturalar — lookup ve koşullu rollup’larla ilişkilendirmeniz gerektiği anda model yetmemeye başlar. Orası ilişkisel bir veritabanının kendi sahasıdır.',
          uk: 'Дошки Monday побудовані навколо елементів і піделементів. Щойно треба зв’язати кілька сутностей — контакти, компанії, угоди, рахунки — з лукапами та умовними ролапами, модель швидко впирається у стелю. Це рідна територія реляційної бази.',
          zh: 'Monday 的看板围绕条目和子条目构建。一旦需要关联多个实体 —— 联系人、公司、交易、发票 —— 并使用 lookup 和条件 rollup，这个模型很快就不够用了。那是关系型数据库的主场。',
        },
      },
      {
        title: {
          de: 'Direkter SQL-Zugriff', en: 'Direct SQL access', es: 'Acceso SQL directo',
          fr: 'Accès SQL direct', it: 'Accesso SQL diretto', ja: '直接の SQL アクセス',
          ru: 'Прямой доступ по SQL', tr: 'Doğrudan SQL erişimi',
          uk: 'Прямий доступ через SQL', zh: '直接的 SQL 访问',
        },
        body: {
          de: 'Monday stellt eine GraphQL-API bereit; jede Auswertung läuft darüber oder über einen BI-Konnektor. Bei TblFlow zeigt Ihr BI-Werkzeug direkt auf die Postgres-Instanz — kein Zwischenschritt, keine Synchronisierungsverzögerung.',
          en: 'Monday exposes a GraphQL API; any analysis goes through it or through a BI connector. With TblFlow, your BI tool points straight at the Postgres instance — no intermediary, no sync lag.',
          es: 'Monday expone una API GraphQL; cualquier análisis pasa por ella o por un conector de BI. Con TblFlow, tu herramienta de BI apunta directamente a la instancia Postgres: sin intermediario y sin retraso de sincronización.',
          fr: "Monday expose une API GraphQL ; toute analyse passe par elle ou par un connecteur BI. Avec TblFlow, votre outil de BI se branche directement sur l'instance Postgres, sans intermédiaire ni délai de synchronisation.",
          it: 'Monday espone un\'API GraphQL; qualsiasi analisi passa da lì o da un connettore BI. Con TblFlow il tuo strumento di BI punta direttamente all\'istanza Postgres — nessun intermediario, nessun ritardo di sincronizzazione.',
          ja: 'Monday は GraphQL API を提供し、分析はすべてそれか BI コネクタを経由します。TblFlow では、BI ツールが Postgres インスタンスを直接参照します。仲介も、同期の遅延もありません。',
          ru: 'Monday предоставляет GraphQL API; любая аналитика идёт через него или через BI-коннектор. С TblFlow ваш BI-инструмент смотрит прямо в экземпляр Postgres — без посредника и без задержки синхронизации.',
          tr: "Monday bir GraphQL API sunar; her analiz oradan ya da bir BI bağlayıcısından geçer. TblFlow'da BI aracınız doğrudan Postgres örneğini işaret eder — aracı yok, senkronizasyon gecikmesi yok.",
          uk: 'Monday надає GraphQL API; будь-яка аналітика йде через нього або через BI-конектор. З TblFlow ваш BI-інструмент дивиться прямо в екземпляр Postgres — без посередника й без затримки синхронізації.',
          zh: 'Monday 提供 GraphQL API；任何分析都要经过它或经过 BI 连接器。用 TblFlow，您的 BI 工具直接指向 Postgres 实例 —— 没有中间层，也没有同步延迟。',
        },
      },
      {
        title: {
          de: 'Abrechnung', en: 'Billing', es: 'Facturación', fr: 'Facturation',
          it: 'Fatturazione', ja: '課金', ru: 'Тарификация', tr: 'Faturalandırma',
          uk: 'Тарифікація', zh: '计费方式',
        },
        body: {
          de: 'Monday rechnet pro Sitzplatz ab, in Sitzplatz-Stufen, mit mindestens 3. Eine Nutzung, deren Wert von Agenten kommt, die ohne Benutzerkonto laufen, lässt sich darin schlecht abbilden.',
          en: 'Monday bills per seat, in seat tiers, with a minimum of 3. Usage whose value comes from agents running without a user account maps poorly onto that.',
          es: 'Monday factura por puesto, en tramos de puestos, con un mínimo de 3. Un uso cuyo valor viene de agentes que corren sin cuenta de usuario encaja mal en ese modelo.',
          fr: "Monday facture par siège, par paliers de sièges, avec un minimum de 3. Un usage où la valeur vient d'agents qui tournent sans compte utilisateur s'y modélise mal.",
          it: 'Monday fattura per postazione, a scaglioni di postazioni, con un minimo di 3. Un uso il cui valore viene da agenti che girano senza account utente ci si modella male.',
          ja: 'Monday はシート単位、しかもシート数の段階制で、最低 3 席から課金します。ユーザーアカウントを持たないエージェントが価値を生むような使い方は、この形にうまく収まりません。',
          ru: 'Monday тарифицирует по местам, ступенями по числу мест, минимум 3. Использование, ценность которого дают агенты, работающие без учётной записи, ложится на это плохо.',
          tr: 'Monday koltuk başına, koltuk kademeleriyle ve en az 3 koltuktan faturalandırır. Değeri, kullanıcı hesabı olmadan çalışan ajanlardan gelen bir kullanım bu modele kötü oturur.',
          uk: 'Monday тарифікує за місцями, східцями за кількістю місць, мінімум 3. Використання, цінність якого дають агенти, що працюють без облікового запису, лягає на це погано.',
          zh: 'Monday 按席位计费，分席位档，最少 3 个。价值来自无需用户账号运行的智能体的用法，很难套进这个模型。',
        },
      },
    ],
    honest: {
      de: 'Für reines Projekt-Tracking — Teamplanung, Auslastung, Abhängigkeiten, Portfolio-Reporting — ist Monday ausgereifter und unmittelbarer. Wenn Ihr Bedarf beim Projektmanagement endet, verlangt TblFlow von Ihnen, das zu bauen, was Monday bereits mitbringt.',
      en: 'For pure project tracking — team planning, workload, dependencies, portfolio reporting — Monday is more complete and more immediate. If your need stops at project management, TblFlow will ask you to build what Monday already ships.',
      es: 'Para seguimiento de proyectos puro — planificación de equipo, carga, dependencias, informes de cartera — Monday es más completo e inmediato. Si tu necesidad se detiene en la gestión de proyectos, TblFlow te pedirá construir lo que Monday ya trae.',
      fr: "Pour du suivi de projet pur — planning d'équipe, charge, dépendances, reporting de portefeuille — Monday est plus abouti et plus immédiat. Si votre besoin s'arrête à la gestion de projet, TblFlow vous demandera de construire ce que Monday fournit déjà.",
      it: 'Per il puro monitoraggio di progetto — pianificazione del team, carico, dipendenze, reporting di portafoglio — Monday è più completo e più immediato. Se il tuo bisogno si ferma alla gestione progetti, TblFlow ti chiederà di costruire ciò che Monday già fornisce.',
      ja: '純粋なプロジェクト追跡 — チームの計画、稼働、依存関係、ポートフォリオのレポーティング — なら、Monday のほうが完成度が高く、すぐ使えます。必要がプロジェクト管理で止まるなら、TblFlow は Monday がすでに備えているものを自分で作るよう求めることになります。',
      ru: 'Для чистого отслеживания проектов — планирование команды, загрузка, зависимости, отчётность по портфелю — Monday полнее и быстрее в деле. Если ваша задача заканчивается на управлении проектами, TblFlow попросит вас построить то, что Monday уже даёт из коробки.',
      tr: 'Saf proje takibi için — ekip planlaması, iş yükü, bağımlılıklar, portföy raporlaması — Monday daha eksiksiz ve daha hazırdır. İhtiyacınız proje yönetiminde bitiyorsa, TblFlow sizden Monday’in zaten sunduğunu kurmanızı isteyecektir.',
      uk: 'Для чистого стеження за проєктами — планування команди, завантаження, залежності, звітність за портфелем — Monday повніший і швидший у справі. Якщо ваше завдання завершується на керуванні проєктами, TblFlow попросить вас побудувати те, що Monday уже дає з коробки.',
      zh: '就纯粹的项目跟踪而言 —— 团队排期、工作量、依赖关系、组合报表 —— Monday 更完整、更即开即用。如果您的需求止步于项目管理，TblFlow 会要求您自己搭出 Monday 已经自带的东西。',
    },
  },

  notion: {
    category: {
      de: 'Dokumenten-Workspace', en: 'document workspace', es: 'espacio de trabajo documental',
      fr: 'espace de travail documentaire', it: 'workspace documentale',
      ja: 'ドキュメント中心のワークスペース', ru: 'документное рабочее пространство',
      tr: 'doküman çalışma alanı', uk: 'документний робочий простір', zh: '文档工作空间',
    },
    summary: {
      de: 'Notion ist ein Dokumenten-Workspace, dem Datenbanken hinzugefügt wurden. TblFlow ist eine Datenbank, der Dokumente hinzugefügt wurden. Diese Reihenfolge entscheidet über alles Weitere: Leistung, Struktur und Automatisierung.',
      en: 'Notion is a document workspace with databases added. TblFlow is a database with documents added. That ordering decides everything else: performance, structure and automation.',
      es: 'Notion es ante todo un espacio documental al que se le añadieron bases de datos. TblFlow es ante todo una base de datos a la que se le añadieron documentos. Ese orden decide todo lo demás: rendimiento, estructura y automatización.',
      fr: "Notion est d'abord un espace documentaire auquel on a ajouté des bases. TblFlow est d'abord une base de données à laquelle on a ajouté des documents. Cet ordre décide de tout le reste : performance, structure et automatisation.",
      it: 'Notion è anzitutto un workspace documentale a cui sono stati aggiunti dei database. TblFlow è anzitutto un database a cui sono stati aggiunti dei documenti. Quest\'ordine decide tutto il resto: prestazioni, struttura e automazione.',
      ja: 'Notion はまずドキュメントのワークスペースであり、そこにデータベースが足されました。TblFlow はまずデータベースであり、そこにドキュメントが足されました。この順序が、性能・構造・自動化という残りすべてを決めます。',
      ru: 'Notion — это прежде всего документное пространство, к которому добавили базы. TblFlow — прежде всего база данных, к которой добавили документы. Этот порядок решает всё остальное: скорость, структуру и автоматизацию.',
      tr: 'Notion önce bir doküman çalışma alanıdır, sonra üzerine veritabanları eklenmiştir. TblFlow önce bir veritabanıdır, sonra üzerine dokümanlar eklenmiştir. Bu sıra geri kalan her şeyi belirler: performans, yapı ve otomasyon.',
      uk: 'Notion — це передусім документний простір, до якого додали бази. TblFlow — передусім база даних, до якої додали документи. Цей порядок вирішує все інше: швидкість, структуру й автоматизацію.',
      zh: 'Notion 首先是一个文档工作空间，然后才加上了数据库。TblFlow 首先是一个数据库，然后才加上了文档。这个先后顺序决定了其余一切：性能、结构和自动化。',
    },
    differences: [
      {
        title: {
          de: 'Semantische Suche über Ihre Dokumente', en: 'Semantic search over your documents',
          es: 'Búsqueda semántica sobre tus documentos',
          fr: 'Recherche sémantique sur vos documents',
          it: 'Ricerca semantica sui tuoi documenti', ja: '自分のドキュメントに対するセマンティック検索',
          ru: 'Семантический поиск по вашим документам',
          tr: 'Dokümanlarınız üzerinde anlamsal arama',
          uk: 'Семантичний пошук по ваших документах', zh: '面向您的文档的语义搜索',
        },
        body: {
          de: 'Beide Produkte haben eine Dokumentbibliothek. TblFlow ergänzt eine Vektor- und Volltextsuche, verschmolzen per Reciprocal Rank Fusion, sowie einen Linkgraph zwischen Dokumenten — genug, um einen Agenten zu versorgen, nicht nur einen suchenden Menschen.',
          en: 'Both have a document library. TblFlow adds vector and full-text search fused with reciprocal rank fusion, plus a link graph between documents — enough to feed an agent, not just a human searching.',
          es: 'Ambos productos tienen una biblioteca de documentos. TblFlow le añade búsqueda vectorial y de texto completo fusionadas mediante reciprocal rank fusion, y un grafo de enlaces entre documentos: suficiente para alimentar a un agente, no solo a un humano que busca.',
          fr: "Les deux produits ont une bibliothèque de documents. TblFlow y ajoute une recherche vectorielle et plein texte fusionnées par reciprocal rank fusion, et un graphe de liens entre documents — de quoi alimenter un agent, pas seulement un humain qui cherche.",
          it: 'Entrambi hanno una libreria di documenti. TblFlow vi aggiunge ricerca vettoriale e full-text fuse con reciprocal rank fusion, più un grafo di collegamenti tra documenti — abbastanza per alimentare un agente, non solo un umano che cerca.',
          ja: 'どちらの製品にもドキュメントライブラリがあります。TblFlow はそこに、reciprocal rank fusion で統合したベクトル検索と全文検索、そしてドキュメント間のリンクグラフを加えます。検索する人間だけでなく、エージェントに供給するのに十分な作りです。',
          ru: 'У обоих продуктов есть библиотека документов. TblFlow добавляет векторный и полнотекстовый поиск, объединённые методом reciprocal rank fusion, и граф ссылок между документами — этого хватает, чтобы питать агента, а не только человека, который ищет.',
          tr: 'Her iki üründe de bir doküman kitaplığı var. TblFlow buna, reciprocal rank fusion ile birleştirilmiş vektör ve tam metin aramasını ve dokümanlar arası bağlantı grafiğini ekler — arama yapan bir insanı değil, bir ajanı beslemeye yetecek kadar.',
          uk: 'В обох продуктів є бібліотека документів. TblFlow додає векторний і повнотекстовий пошук, поєднані методом reciprocal rank fusion, і граф посилань між документами — цього досить, щоб живити агента, а не лише людину, яка шукає.',
          zh: '两个产品都有文档库。TblFlow 在此之上增加了用 reciprocal rank fusion 融合的向量搜索与全文搜索，以及文档之间的链接图谱 —— 足以喂给一个智能体，而不只是喂给一个正在检索的人。',
        },
      },
    ],
    honest: {
      de: 'Zum Schreiben, zum Strukturieren einer Wissensbasis oder für ein Team-Wiki bleibt Notion überlegen: Die Textbearbeitung ist besser und der Einstieg unmittelbar. Viele Teams fahren gut damit, Notion für Prosa zu behalten und die Daten woanders abzulegen.',
      en: 'For writing, structuring a knowledge base or running a team wiki, Notion remains better: the text editing is stronger and the learning curve shorter. Plenty of teams are best served keeping Notion for prose and putting data elsewhere.',
      es: 'Para escribir, estructurar una base de conocimiento o llevar un wiki de equipo, Notion sigue siendo superior: la edición de texto es mejor y la curva de aprendizaje más corta. A muchos equipos les conviene quedarse con Notion para la prosa y poner los datos en otro sitio.',
      fr: "Pour rédiger, structurer une base de connaissances ou tenir un wiki d'équipe, Notion reste supérieur : l'édition de texte y est de meilleure qualité et la prise en main immédiate. Beaucoup d'équipes gagnent à garder Notion pour l'écrit et à mettre les données ailleurs.",
      it: 'Per scrivere, strutturare una base di conoscenza o tenere un wiki di team, Notion resta superiore: la scrittura è di qualità migliore e la curva di apprendimento più corta. A molti team conviene tenere Notion per il testo e mettere i dati altrove.',
      ja: '文章を書く、ナレッジベースを構造化する、チームの wiki を運用する、といった用途では Notion のほうが優れています。テキスト編集の質が高く、習得も早いです。多くのチームにとって、文章は Notion に残し、データは別の場所に置くのが最善です。',
      ru: 'Чтобы писать, структурировать базу знаний или вести командную вики, Notion остаётся лучше: редактирование текста сильнее, а порог входа ниже. Многим командам выгоднее оставить Notion для текстов, а данные держать в другом месте.',
      tr: 'Yazmak, bir bilgi tabanını yapılandırmak veya ekip wiki’si tutmak için Notion üstün kalır: metin düzenleme daha iyidir ve öğrenme eğrisi daha kısadır. Pek çok ekip için en iyisi, metni Notion’da tutup veriyi başka yere koymaktır.',
      uk: 'Щоб писати, структурувати базу знань або вести командну вікі, Notion лишається кращим: редагування тексту сильніше, а поріг входу нижчий. Багатьом командам вигідніше лишити Notion для текстів, а дані тримати деінде.',
      zh: '在写作、构建知识库或维护团队 wiki 方面，Notion 依然更好：文本编辑质量更高，上手更快。很多团队最合适的做法是把文字留在 Notion，把数据放到别处。',
    },
  },

  salesforce: {
    category: {
      de: 'Unternehmens-CRM', en: 'enterprise CRM', es: 'CRM empresarial',
      fr: 'CRM d’entreprise', it: 'CRM aziendale', ja: 'エンタープライズ CRM',
      ru: 'корпоративная CRM', tr: 'kurumsal CRM', uk: 'корпоративна CRM',
      zh: '企业级 CRM',
    },
    summary: {
      de: "Salesforce ist ein tiefes, konfigurierbares Enterprise-CRM. TblFlow ist eine universelle Datenbank, auf der sich ein CRM aufbauen lässt — und die auch alles andere bedient.",
      en: "Salesforce is a deep, configurable enterprise CRM. TblFlow is a general-purpose database on which a CRM can be built — and which serves everything else too.",
      es: "Salesforce es un CRM empresarial profundo y configurable. TblFlow es una base de datos de propósito general sobre la que se puede construir un CRM — y que sirve también para todo lo demás.",
      fr: "Salesforce est un CRM d'entreprise profond et configurable. TblFlow est une base de données généraliste sur laquelle on peut construire un CRM — et qui sert aussi pour tout le reste.",
      it: "Salesforce è un CRM aziendale profondo e configurabile. TblFlow è un database generalista su cui si può costruire un CRM — e che serve anche per tutto il resto.",
      ja: "Salesforce は奥の深い、設定可能なエンタープライズ CRM です。TblFlow は汎用データベースで、その上に CRM を構築でき、ほかの用途にも使えます。",
      ru: "Salesforce — глубокая, настраиваемая корпоративная CRM. TblFlow — универсальная база данных, на которой можно построить CRM и которая подходит и для всего остального.",
      tr: "Salesforce derin ve yapılandırılabilir bir kurumsal CRM’dir. TblFlow, üzerinde bir CRM kurulabilen ve geri kalan her şeye de hizmet eden genel amaçlı bir veritabanıdır.",
      uk: "Salesforce — глибока, настроювана корпоративна CRM. TblFlow — універсальна база даних, на якій можна побудувати CRM і яка підходить і для всього іншого.",
      zh: "Salesforce 是功能深入、可配置的企业级 CRM。TblFlow 是通用数据库，可以在其上构建 CRM，也适用于其他一切场景。",
    },
    differences: [
      {
        title: {
          de: 'Geltungsbereich', en: 'Scope', es: 'Alcance', fr: 'Périmètre', it: 'Perimetro',
          ja: '対象範囲', ru: 'Охват', tr: 'Kapsam', uk: 'Охоплення', zh: '覆盖范围',
        },
        body: {
          de: 'Salesforce modelliert den Vertriebszyklus. Alles außerhalb davon — HR, Betrieb, Produktverfolgung — verlangt ein weiteres Werkzeug oder eine Eigenentwicklung. TblFlow setzt keine Fachdomäne voraus.',
          en: 'Salesforce models the sales cycle. Anything outside it — HR, operations, product tracking — needs another tool or custom development. TblFlow presupposes no business domain.',
          es: 'Salesforce modela el ciclo de venta. Todo lo que quede fuera — RR. HH., operaciones, seguimiento de producto — pide otra herramienta o un desarrollo a medida. TblFlow no presupone ningún dominio de negocio.',
          fr: "Salesforce modélise le cycle de vente. Tout ce qui n'en relève pas — RH, opérations, suivi produit — demande un autre outil ou un développement sur mesure. TblFlow ne présuppose aucun domaine métier.",
          it: 'Salesforce modella il ciclo di vendita. Tutto ciò che ne sta fuori — HR, operation, monitoraggio prodotto — richiede un altro strumento o uno sviluppo su misura. TblFlow non presuppone alcun dominio di business.',
          ja: 'Salesforce は営業サイクルをモデル化します。その外側にあるもの — 人事、オペレーション、プロダクトの追跡 — には別のツールか個別開発が要ります。TblFlow は特定の業務ドメインを前提としません。',
          ru: 'Salesforce моделирует цикл продаж. Всё, что вне его — HR, операции, отслеживание продукта — требует другого инструмента или разработки на заказ. TblFlow не предполагает никакой бизнес-области.',
          tr: 'Salesforce satış döngüsünü modeller. Bunun dışında kalan her şey — İK, operasyon, ürün takibi — başka bir araç ya da özel geliştirme ister. TblFlow hiçbir iş alanını önceden varsaymaz.',
          uk: 'Salesforce моделює цикл продажів. Усе, що поза ним — HR, операції, стеження за продуктом — потребує іншого інструмента або розробки на замовлення. TblFlow не передбачає жодної бізнес-області.',
          zh: 'Salesforce 建模的是销售周期。落在它之外的一切 —— 人力、运营、产品跟踪 —— 都需要另一个工具或定制开发。TblFlow 不预设任何业务领域。',
        },
      },
      {
        title: {
          de: 'Eigentum an den Daten', en: 'Data ownership', es: 'Propiedad de los datos',
          fr: 'Propriété des données', it: 'Proprietà dei dati', ja: 'データの所有',
          ru: 'Владение данными', tr: 'Verinin sahipliği', uk: 'Володіння даними',
          zh: '数据归属',
        },
        body: {
          de: "Salesforce wird als verwalteter Dienst angeboten; auf der Preisseite ist keine Self-Hosting-Option genannt. Der Enterprise-Plan von TblFlow (auf Anfrage) wird auf Ihrer eigenen Infrastruktur oder in der Cloud des Kunden bereitgestellt — das verändert das Gespräch mit Ihrem Sicherheits- oder Rechtsteam.",
          en: "Salesforce is offered as a managed service; its pricing page mentions no self-hosting option. TblFlow’s Enterprise plan, on quote, deploys on your own infrastructure or in the customer’s cloud — which changes the conversation with your security or legal team.",
          es: "Salesforce se ofrece como servicio gestionado; su página de precios no menciona ninguna opción de autoalojamiento. El plan Enterprise de TblFlow, a presupuesto, se despliega en tu propia infraestructura o en la nube del cliente, lo que cambia la conversación con tu equipo de seguridad o jurídico.",
          fr: "Salesforce est proposé en service géré ; sa page tarifaire ne mentionne aucune option d'auto-hébergement. L'offre Entreprise de TblFlow, sur devis, se déploie sur votre propre infrastructure ou dans le cloud du client — ce qui change la conversation avec votre équipe sécurité ou juridique.",
          it: "Salesforce è offerto come servizio gestito; la sua pagina dei prezzi non menziona alcuna opzione self-hosted. Il piano Enterprise di TblFlow, su preventivo, si distribuisce sulla tua infrastruttura o nel cloud del cliente — il che cambia la conversazione con il tuo team sicurezza o legale.",
          ja: "Salesforce はマネージドサービスとして提供され、料金ページにセルフホストの選択肢の記載はありません。TblFlow の Enterprise プラン（見積制）は、自社インフラまたはお客様のクラウドに配置できます。これはセキュリティや法務の担当者との話し合いを変えます。",
          ru: "Salesforce предлагается как управляемый сервис; на странице тарифов вариант self-hosting не упомянут. Тариф Enterprise у TblFlow, по запросу, разворачивается на вашей инфраструктуре или в облаке клиента — это меняет разговор с вашей командой безопасности или юристами.",
          tr: "Salesforce yönetilen hizmet olarak sunulur; fiyat sayfasında kendi sunucuda barındırma seçeneği belirtilmez. TblFlow'un teklife bağlı Enterprise planı, kendi altyapınıza veya müşterinin bulutuna dağıtılır — bu da güvenlik veya hukuk ekibinizle yapılan konuşmayı değiştirir.",
          uk: "Salesforce пропонується як керований сервіс; на сторінці тарифів варіант self-hosting не згадано. Тариф Enterprise у TblFlow, за запитом, розгортається на вашій інфраструктурі або в хмарі клієнта — це змінює розмову з вашою командою безпеки чи юристами.",
          zh: "Salesforce 以托管服务形式提供；其价格页未提及自托管选项。TblFlow 的企业版套餐按需报价，可部署在您自己的基础设施或客户自有云中 —— 这会改变您与安全或法务团队的对话。",
        },
      },
    ],
    honest: {
      de: 'Für eine Vertriebsmannschaft von mehreren Hundert Personen, mit Forecasting, Gebieten, Provisionsverwaltung und einem Ökosystem zertifizierter Partner, leistet Salesforce Dinge, die TblFlow gar nicht beansprucht. In dieser Größenordnung stellt sich der Vergleich nicht.',
      en: 'For a sales force of several hundred people, with forecasting, territories, commission management and a certified partner ecosystem, Salesforce does things TblFlow does not claim to. At that scale the comparison does not apply.',
      es: 'Para una fuerza de ventas de varios cientos de personas, con previsiones, territorios, gestión de comisiones y un ecosistema de socios certificados, Salesforce hace cosas que TblFlow no pretende hacer. A esa escala, la comparación no procede.',
      fr: "Pour une force de vente de plusieurs centaines de personnes, avec prévisions, territoires, gestion des commissions et un écosystème de partenaires certifiés, Salesforce fait des choses que TblFlow ne prétend pas faire. À cette échelle, la comparaison n'a pas lieu d'être.",
      it: 'Per una forza vendita di diverse centinaia di persone, con previsioni, territori, gestione delle provvigioni e un ecosistema di partner certificati, Salesforce fa cose che TblFlow non pretende di fare. A quella scala il confronto non si pone.',
      ja: '数百人規模の営業組織で、フォーキャスト、テリトリー、コミッション管理、認定パートナーのエコシステムまで求めるなら、Salesforce は TblFlow が主張すらしていないことをやってのけます。その規模では、そもそも比較になりません。',
      ru: 'Для отдела продаж в несколько сотен человек, с прогнозированием, территориями, управлением комиссиями и экосистемой сертифицированных партнёров, Salesforce делает то, на что TblFlow и не претендует. На таком масштабе сравнение просто неуместно.',
      tr: 'Birkaç yüz kişilik bir satış ekibi için — tahminleme, bölgeler, prim yönetimi ve sertifikalı iş ortağı ekosistemiyle — Salesforce, TblFlow’un iddia bile etmediği şeyleri yapar. Bu ölçekte karşılaştırmanın yeri yoktur.',
      uk: 'Для відділу продажів у кілька сотень людей, із прогнозуванням, територіями, керуванням комісіями та екосистемою сертифікованих партнерів, Salesforce робить те, на що TblFlow і не претендує. У такому масштабі порівняння просто недоречне.',
      zh: '对于数百人规模的销售组织，需要预测、区域划分、佣金管理和认证伙伴生态，Salesforce 能做到 TblFlow 根本不曾声称的事情。在那个量级上，这个比较并不成立。',
    },
  },
};

/** Display name, reused in titles and headings. */
export const labelOf = (slug: CompetitorSlug) => COMPETITOR_LABELS[slug];
