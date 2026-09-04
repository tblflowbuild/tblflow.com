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
 * All ten locales are written out rather than falling back to English through
 * `t9()`. A comparison page is a page someone reads while deciding, in their
 * own language; served in English it argues for the competitor by default.
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
      de: 'Airtable und TblFlow decken dasselbe Feld ab — Tabellen, Ansichten, Automatisierungen. Der Unterschied liegt darunter: Airtable speichert Ihre Daten im eigenen Format, TblFlow schreibt in eine echte PostgreSQL-Tabelle, die Sie mit SQL abfragen können.',
      en: 'Airtable and TblFlow cover the same ground — tables, views, automations. The difference is underneath: Airtable stores your data in its own format, TblFlow writes to a real PostgreSQL table you can query in SQL.',
      es: 'Airtable y TblFlow cubren el mismo terreno: tablas, vistas, automatizaciones. La diferencia está debajo: Airtable guarda tus datos en su propio formato, TblFlow escribe en una tabla PostgreSQL real que puedes consultar con SQL.',
      fr: "Airtable et TblFlow couvrent le même terrain — tables, vues, automatisations. La différence tient à ce qu'il y a dessous : Airtable stocke vos données dans son propre format, TblFlow écrit dans une vraie table PostgreSQL que vous pouvez requêter en SQL.",
      it: 'Airtable e TblFlow coprono lo stesso terreno — tabelle, viste, automazioni. La differenza sta sotto: Airtable archivia i tuoi dati in un formato proprio, TblFlow scrive in una vera tabella PostgreSQL che puoi interrogare in SQL.',
      ja: 'Airtable と TblFlow が扱う範囲は同じです。テーブル、ビュー、自動化。違いはその下にあります。Airtable はデータを独自形式で保存し、TblFlow は SQL で問い合わせできる実在の PostgreSQL テーブルに書き込みます。',
      ru: 'Airtable и TblFlow покрывают одно и то же поле — таблицы, представления, автоматизации. Разница ниже: Airtable хранит данные в собственном формате, TblFlow пишет в настоящую таблицу PostgreSQL, которую можно запрашивать на SQL.',
      tr: 'Airtable ve TblFlow aynı alanı kapsar — tablolar, görünümler, otomasyonlar. Fark alttadır: Airtable verilerinizi kendi biçiminde saklar, TblFlow ise SQL ile sorgulayabileceğiniz gerçek bir PostgreSQL tablosuna yazar.',
      uk: 'Airtable і TblFlow покривають те саме поле — таблиці, подання, автоматизації. Різниця нижче: Airtable зберігає дані у власному форматі, TblFlow пише у справжню таблицю PostgreSQL, яку можна запитувати мовою SQL.',
      zh: 'Airtable 和 TblFlow 覆盖同一片领域 —— 数据表、视图、自动化。差别在底层：Airtable 用自有格式存储你的数据，TblFlow 写入的是可以用 SQL 查询的真实 PostgreSQL 表。',
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
          de: 'Bei Airtable ist ein Export eine CSV-Datei oder ein API-Aufruf: eine Kopie, zu einem bestimmten Zeitpunkt gezogen. Bei TblFlow ist ein `pg_dump` die Datenbank selbst, anderswo wiederherstellbar. Das ist der Unterschied zwischen "die Daten herausholen können" und "nie von ihnen getrennt gewesen sein".',
          en: 'With Airtable, an export is a CSV or an API call: a copy, taken at a point in time. With TblFlow, a `pg_dump` is the database itself, restorable elsewhere. That is the difference between being able to extract your data and never having been separated from it.',
          es: 'En Airtable, una exportación es un CSV o una llamada a la API: una copia, tomada en un momento dado. En TblFlow, un `pg_dump` es la base de datos misma, restaurable en otro sitio. Esa es la diferencia entre poder extraer tus datos y no haber estado nunca separado de ellos.',
          fr: "Chez Airtable, l'export est un CSV ou un appel d'API : une copie, prise à un instant donné. Chez TblFlow, un `pg_dump` est la base elle-même, restaurable ailleurs. C'est la différence entre pouvoir extraire ses données et ne jamais en avoir été séparé.",
          it: "Con Airtable, un export è un CSV o una chiamata API: una copia, presa in un dato istante. Con TblFlow, un `pg_dump` è il database stesso, ripristinabile altrove. È la differenza tra poter estrarre i propri dati e non esserne mai stati separati.",
          ja: 'Airtable でのエクスポートは CSV か API 呼び出し、つまりある時点で取られた「コピー」です。TblFlow では `pg_dump` がデータベースそのもので、別の場所にそのまま復元できます。データを取り出せることと、そもそも切り離されていないことの違いです。',
          ru: 'В Airtable экспорт — это CSV или вызов API: копия, снятая в конкретный момент. В TblFlow `pg_dump` — это сама база, восстановимая в другом месте. Разница между «можно выгрузить свои данные» и «вы от них никогда и не были отделены».',
          tr: "Airtable'da dışa aktarma bir CSV ya da bir API çağrısıdır: belirli bir anda alınmış bir kopya. TblFlow'da ise `pg_dump` veritabanının kendisidir ve başka bir yerde geri yüklenebilir. Verilerinizi çıkarabilmek ile onlardan hiç ayrılmamış olmak arasındaki fark budur.",
          uk: 'В Airtable експорт — це CSV або виклик API: копія, знята в певний момент. У TblFlow `pg_dump` — це сама база, яку можна відновити деінде. Це різниця між «можна дістати свої дані» і «ви від них ніколи й не були відділені».',
          zh: '在 Airtable，导出是一个 CSV 或一次 API 调用：某个时刻的一份拷贝。在 TblFlow，一个 `pg_dump` 就是数据库本身，可以在别处直接还原。这是「能把数据取出来」和「从未与数据分离」之间的区别。',
        },
      },
      {
        title: {
          de: 'Agenten, keine geskripteten Automatisierungen', en: 'Agents, not scripted automations',
          es: 'Agentes, no automatizaciones con guion',
          fr: 'Des agents, pas des automatisations scriptées',
          it: 'Agenti, non automazioni scriptate', ja: 'スクリプト化された自動化ではなく、エージェント',
          ru: 'Агенты, а не сценарные автоматизации',
          tr: 'Betikli otomasyonlar değil, ajanlar',
          uk: 'Агенти, а не сценарні автоматизації', zh: '智能体，而非写死脚本的自动化',
        },
        body: {
          de: 'Airtable-Automatisierungen führen die Schrittfolge aus, die Sie geschrieben haben. TblFlow-Agenten entscheiden ihre Schritte selbst, ausgehend von einem Ziel, mit persistentem Gedächtnis und Vorschlägen, die freigegeben werden müssen. Beides hat seinen Platz; nur das Zweite deckt Fälle ab, in denen die Regel vom Inhalt abhängt.',
          en: 'Airtable automations run the sequence you wrote. TblFlow agents decide their own steps from a goal, with persistent memory and proposals that require approval. Both have their place; only the second handles cases where the rule depends on the content.',
          es: 'Las automatizaciones de Airtable ejecutan la secuencia que escribiste. Los agentes de TblFlow deciden sus propios pasos a partir de un objetivo, con memoria persistente y propuestas que requieren aprobación. Ambos tienen su lugar; solo el segundo cubre los casos en que la regla depende del contenido.',
          fr: "Les automatisations Airtable exécutent la suite d'étapes que vous avez écrite. Les agents TblFlow décident eux-mêmes des étapes à partir d'un objectif, avec mémoire persistante et propositions soumises à validation. Les deux ont leur place ; seul le second traite les cas où la règle dépend du contenu.",
          it: "Le automazioni di Airtable eseguono la sequenza che hai scritto. Gli agenti TblFlow decidono da soli i passaggi a partire da un obiettivo, con memoria persistente e proposte da approvare. Entrambi hanno il loro posto; solo il secondo copre i casi in cui la regola dipende dal contenuto.",
          ja: 'Airtable の自動化は、あなたが書いた手順どおりに実行します。TblFlow のエージェントは目標から手順を自分で決め、永続メモリを持ち、提案は承認を経ます。どちらにも役割がありますが、ルールが内容によって変わる場面を扱えるのは後者だけです。',
          ru: 'Автоматизации Airtable выполняют написанную вами последовательность. Агенты TblFlow сами решают, какие шаги делать, исходя из цели, с постоянной памятью и предложениями, требующими согласования. У обоих есть место; но только второе справляется там, где правило зависит от содержимого.',
          tr: 'Airtable otomasyonları, yazdığınız adım dizisini çalıştırır. TblFlow ajanları bir hedeften yola çıkarak adımlarına kendileri karar verir; kalıcı belleğe sahiptir ve önerileri onaya sunar. İkisinin de yeri vardır; ancak kuralın içeriğe bağlı olduğu durumları yalnızca ikincisi karşılar.',
          uk: 'Автоматизації Airtable виконують написану вами послідовність. Агенти TblFlow самі вирішують кроки, виходячи з мети, мають постійну памʼять і подають пропозиції на погодження. Обидва мають своє місце; але лише друге працює там, де правило залежить від змісту.',
          zh: 'Airtable 的自动化按你写好的步骤顺序执行。TblFlow 的智能体从目标出发自行决定步骤，具备持久记忆，提案需经审批。两者各有用武之地；但只有后者能应对规则取决于内容的情况。',
        },
      },
      {
        title: {
          de: 'Obergrenzen für Datensätze', en: 'Record ceilings', es: 'Los topes de registros',
          fr: 'Les plafonds d’enregistrements', it: 'I tetti sui record',
          ja: 'レコード数の上限', ru: 'Потолки по числу записей',
          tr: 'Kayıt tavanları', uk: 'Стелі за кількістю записів', zh: '记录数上限',
        },
        body: {
          de: 'Die Airtable-Tarife begrenzen die Datensätze pro Base, was Teams dazu bringt, ihre Daten künstlich aufzuteilen. TblFlow sitzt auf Postgres: Das Raster wird auf Canvas gezeichnet und rendert nur den sichtbaren Bereich neu, sodass die Leistung nicht mit der Zeilenzahl abfällt.',
          en: "Airtable's tiers cap records per base, which pushes teams to split their data artificially. TblFlow sits on Postgres: the grid renders to canvas and redraws only the visible region, so performance does not degrade with row count.",
          es: 'Los planes de Airtable limitan los registros por base, lo que empuja a los equipos a partir sus datos artificialmente. TblFlow se apoya en Postgres: la cuadrícula se dibuja en canvas y solo redibuja la zona visible, así que el rendimiento no se degrada con el número de filas.',
          fr: "Les paliers Airtable plafonnent le nombre d'enregistrements par base, ce qui pousse à découper artificiellement ses données. TblFlow s'appuie sur Postgres : la grille est rendue en canvas et ne redessine que la zone visible, donc la performance ne se dégrade pas avec le nombre de lignes.",
          it: 'I piani di Airtable limitano i record per base, il che spinge i team a spezzare artificialmente i propri dati. TblFlow poggia su Postgres: la griglia viene disegnata su canvas e ridisegna solo l\'area visibile, quindi le prestazioni non peggiorano al crescere delle righe.',
          ja: 'Airtable のプランはベースあたりのレコード数に上限を設けており、チームはデータを不自然に分割しがちです。TblFlow は Postgres の上にあり、グリッドは canvas に描画されて表示中の領域だけを再描画するため、行数が増えても性能は落ちません。',
          ru: 'Тарифы Airtable ограничивают число записей на базу, из-за чего команды искусственно дробят данные. TblFlow стоит на Postgres: сетка рисуется на canvas и перерисовывает только видимую область, поэтому скорость не падает с ростом числа строк.',
          tr: "Airtable paketleri base başına kayıt sayısını sınırlar; bu da ekipleri verilerini yapay biçimde bölmeye iter. TblFlow, Postgres üzerine oturur: ızgara canvas'a çizilir ve yalnızca görünen bölgeyi yeniden çizer, böylece satır sayısıyla performans düşmez.",
          uk: 'Тарифи Airtable обмежують кількість записів на базу, через що команди штучно дроблять дані. TblFlow стоїть на Postgres: сітка малюється на canvas і перемальовує лише видиму ділянку, тож швидкість не падає зі зростанням кількості рядків.',
          zh: 'Airtable 的套餐限制每个 base 的记录数，这会促使团队人为地拆分数据。TblFlow 建立在 Postgres 之上：表格渲染到 canvas，只重绘可见区域，因此性能不会随行数增长而下降。',
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
      uk: 'В Airtable значно багатша екосистема розширень і шаблонів та велика спільнота. Якщо готовий шаблон закриває вашу задачу, а питання зберігання вас не турбує, з Airtable ви стартуєте швидше.',
      zh: 'Airtable 拥有丰富得多的扩展与模板生态，以及庞大的社区。如果现成模板能满足你的需求，而存储问题你并不在意，用 Airtable 会更快上手。',
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
      de: 'Baserow und TblFlow teilen das Wesentliche: quelloffen, selbst hostbar, auf PostgreSQL gebaut. Der Unterschied liegt nicht in der Infrastruktur, sondern in dem, was darauf läuft — Baserow hört bei der Datenbank und ihren Ansichten auf, TblFlow ergänzt autonome Agenten, semantische Suche und das Veröffentlichen von Apps.',
      en: 'Baserow and TblFlow share the essentials: open source, self-hostable, built on PostgreSQL. The difference is not the infrastructure but what runs on top — Baserow stops at the database and its views, TblFlow adds autonomous agents, semantic search and app publishing.',
      es: 'Baserow y TblFlow comparten lo esencial: código abierto, autoalojables, construidos sobre PostgreSQL. La diferencia no está en la infraestructura sino en lo que corre encima: Baserow se detiene en la base y sus vistas, TblFlow añade agentes autónomos, búsqueda semántica y publicación de aplicaciones.',
      fr: "Baserow et TblFlow partagent l'essentiel : open source, auto-hébergeable, bâtis sur PostgreSQL. La différence n'est pas dans l'infrastructure mais dans ce qui tourne dessus — Baserow s'arrête à la base et aux vues, TblFlow y ajoute des agents autonomes, une recherche sémantique et la publication d'applications.",
      it: "Baserow e TblFlow condividono l'essenziale: open source, self-hostable, costruiti su PostgreSQL. La differenza non è l'infrastruttura ma ciò che ci gira sopra — Baserow si ferma al database e alle sue viste, TblFlow aggiunge agenti autonomi, ricerca semantica e pubblicazione di app.",
      ja: 'Baserow と TblFlow は根幹を共有しています。オープンソースで、セルフホスト可能で、PostgreSQL の上に build されています。違いはインフラではなく、その上で動くものです。Baserow はデータベースとビューで止まり、TblFlow は自律型エージェント、セマンティック検索、アプリの公開を加えます。',
      ru: 'Baserow и TblFlow сходятся в главном: open source, разворачиваются у себя, построены на PostgreSQL. Разница не в инфраструктуре, а в том, что работает поверх — Baserow останавливается на базе и её представлениях, TblFlow добавляет автономных агентов, семантический поиск и публикацию приложений.',
      tr: 'Baserow ve TblFlow temelde aynıdır: açık kaynak, kendi sunucunuzda barındırılabilir, PostgreSQL üzerine kurulu. Fark altyapıda değil, üzerinde çalışanlardadır — Baserow veritabanı ve görünümlerinde durur, TblFlow otonom ajanlar, anlamsal arama ve uygulama yayımlama ekler.',
      uk: 'Baserow і TblFlow збігаються в головному: open source, розгортаються у себе, побудовані на PostgreSQL. Різниця не в інфраструктурі, а в тому, що працює згори — Baserow зупиняється на базі та її поданнях, TblFlow додає автономних агентів, семантичний пошук і публікацію застосунків.',
      zh: 'Baserow 和 TblFlow 在根本上是一致的：开源、可自托管、建立在 PostgreSQL 之上。差别不在基础设施，而在跑在上面的东西 —— Baserow 止步于数据库及其视图，TblFlow 增加了自主智能体、语义搜索和应用发布。',
    },
    differences: [
      {
        title: {
          de: 'Die KI-Schicht', en: 'The AI layer', es: 'La capa de IA', fr: 'La couche IA',
          it: 'Il livello IA', ja: 'AI レイヤー', ru: 'Слой ИИ', tr: 'Yapay zekâ katmanı',
          uk: 'Шар ШІ', zh: 'AI 层',
        },
        body: {
          de: 'Das ist die Hauptlücke. Baserow hat keine autonomen Agenten, kein persistentes Gedächtnis, keine Vektorsuche. Wenn Sie eine saubere, selbst gehostete kollaborative Datenbank brauchen, kostet diese Lücke Sie nichts; geht es darum, wiederkehrende Arbeit abzugeben, ist sie entscheidend.',
          en: 'This is the main gap. Baserow has no autonomous agents, no persistent memory, no vector search. If your need is a clean, self-hosted collaborative database, that gap costs you nothing; if it is delegating recurring work, it is decisive.',
          es: 'Esa es la brecha principal. Baserow no tiene agentes autónomos, ni memoria persistente, ni búsqueda vectorial. Si tu necesidad es una base colaborativa limpia y autoalojada, esa brecha no te cuesta nada; si es delegar trabajo recurrente, es decisiva.',
          fr: "C'est l'écart principal. Baserow n'a ni agents autonomes, ni mémoire persistante, ni recherche vectorielle. Si votre besoin est une base collaborative propre et auto-hébergée, cet écart ne vous coûte rien ; s'il est de déléguer du travail récurrent, il est décisif.",
          it: 'È il divario principale. Baserow non ha agenti autonomi, né memoria persistente, né ricerca vettoriale. Se il tuo bisogno è un database collaborativo pulito e self-hosted, quel divario non ti costa nulla; se è delegare lavoro ricorrente, è decisivo.',
          ja: 'これが最大の差です。Baserow には自律型エージェントも、永続メモリも、ベクトル検索もありません。求めているのがきれいなセルフホスト型の共同編集データベースなら、この差は何のコストにもなりません。繰り返しの作業を任せたいのなら、決定的です。',
          ru: 'Это главный разрыв. У Baserow нет автономных агентов, постоянной памяти и векторного поиска. Если вам нужна аккуратная self-hosted база для совместной работы, этот разрыв вам ничего не стоит; если нужно делегировать повторяющуюся работу — он решающий.',
          tr: 'Asıl boşluk budur. Baserow’da otonom ajan, kalıcı bellek ve vektör araması yoktur. İhtiyacınız temiz, kendi sunucunuzda barındırılan işbirlikçi bir veritabanıysa bu boşluğun size maliyeti yoktur; tekrar eden işi devretmekse, belirleyicidir.',
          uk: 'Це головний розрив. У Baserow немає ані автономних агентів, ані постійної памʼяті, ані векторного пошуку. Якщо вам потрібна охайна self-hosted база для спільної роботи, цей розрив вам нічого не коштує; якщо треба делегувати повторювану роботу — він вирішальний.',
          zh: '这是主要差距。Baserow 没有自主智能体、没有持久记忆、没有向量搜索。如果你要的是一个干净的自托管协作数据库，这个差距对你毫无代价；如果你要的是把重复工作交出去，它就是决定性的。',
        },
      },
      {
        title: {
          de: 'Veröffentlichbare Software', en: 'Publishable software', es: 'Software publicable',
          fr: 'Du logiciel publiable', it: 'Software pubblicabile', ja: '公開できるソフトウェア',
          ru: 'Публикуемое приложение', tr: 'Yayımlanabilir yazılım',
          uk: 'Застосунок, який можна опублікувати', zh: '可发布的软件',
        },
        body: {
          de: 'Baserow stellt Formulare und geteilte Ansichten bereit. TblFlow veröffentlicht eine vollständige App auf Ihrer eigenen Domain, mit Besucher-Authentifizierung und eingebetteter API — aus den Daten wird ein Produkt, das Menschen nutzen können, die keinen Account im Werkzeug haben.',
          en: 'Baserow exposes forms and shared views. TblFlow publishes a full app on your own domain, with visitor authentication and an injected API — the data becomes a product usable by people who have no account on the tool.',
          es: 'Baserow expone formularios y vistas compartidas. TblFlow publica una aplicación completa en tu propio dominio, con autenticación de visitantes y una API inyectada: los datos se convierten en un producto utilizable por gente que no tiene cuenta en la herramienta.',
          fr: "Baserow expose des formulaires et des vues partagées. TblFlow publie une application complète sur votre propre domaine, avec authentification visiteur et API injectée — la donnée devient un produit utilisable par des gens qui n'ont pas de compte sur l'outil.",
          it: "Baserow espone moduli e viste condivise. TblFlow pubblica un'app completa sul tuo dominio, con autenticazione dei visitatori e API iniettata — i dati diventano un prodotto utilizzabile da persone che non hanno un account sullo strumento.",
          ja: 'Baserow はフォームと共有ビューを公開します。TblFlow は自社ドメイン上に完全なアプリを公開でき、訪問者認証と注入された API を備えます。データが、ツールのアカウントを持たない人でも使える製品になります。',
          ru: 'Baserow отдаёт формы и общие представления. TblFlow публикует полноценное приложение на вашем домене, с аутентификацией посетителей и встроенным API — данные становятся продуктом, которым могут пользоваться люди без учётной записи в инструменте.',
          tr: 'Baserow formlar ve paylaşılan görünümler sunar. TblFlow ise kendi alan adınızda, ziyaretçi kimlik doğrulaması ve enjekte edilmiş bir API ile eksiksiz bir uygulama yayımlar — veri, araçta hesabı olmayan kişilerin de kullanabileceği bir ürüne dönüşür.',
          uk: 'Baserow надає форми та спільні подання. TblFlow публікує повноцінний застосунок на вашому домені, з автентифікацією відвідувачів і вбудованим API — дані стають продуктом, яким можуть користуватися люди без облікового запису в інструменті.',
          zh: 'Baserow 提供表单和共享视图。TblFlow 会在你自己的域名上发布一个完整应用，带访客认证和注入的 API —— 数据变成一个产品，让没有该工具账号的人也能使用。',
        },
      },
      {
        title: {
          de: 'Lizenz', en: 'Licence', es: 'Licencia', fr: 'Licence', it: 'Licenza',
          ja: 'ライセンス', ru: 'Лицензия', tr: 'Lisans', uk: 'Ліцензія', zh: '许可证',
        },
        body: {
          de: 'Baserow steht im Kern unter MIT, mit fortgeschrittenen Funktionen unter proprietärer Lizenz. TblFlow steht unter AGPL-3.0; die selbst gehostete Bereitstellung mit allen freigeschalteten Funktionen fällt unter den Enterprise-Tarif, auf Anfrage. Beide Modelle sind vertretbar — sie passen nur zu unterschiedlichen rechtlichen oder budgetären Zwängen.',
          en: 'Baserow is MIT at its core, with advanced features under a proprietary licence. TblFlow is AGPL-3.0; a self-hosted deployment with every feature unlocked falls under the Enterprise tier, on quote. Both models are defensible — they simply suit different legal or budget constraints.',
          es: 'Baserow es MIT en su núcleo, con funciones avanzadas bajo licencia propietaria. TblFlow es AGPL-3.0; el despliegue autoalojado con todas las funciones desbloqueadas entra en el plan Enterprise, a presupuesto. Ambos modelos son defendibles: simplemente encajan con restricciones legales o presupuestarias distintas.',
          fr: "Baserow est sous MIT pour son cœur, avec des fonctionnalités avancées en licence propriétaire. TblFlow est sous AGPL-3.0 ; le déploiement auto-hébergé, avec toutes les fonctionnalités débloquées, relève du palier Enterprise, sur devis. Les deux modèles se défendent — ils ne conviennent simplement pas aux mêmes contraintes juridiques ou budgétaires.",
          it: 'Baserow è MIT nel suo nucleo, con funzionalità avanzate sotto licenza proprietaria. TblFlow è AGPL-3.0; il deployment self-hosted con tutte le funzionalità sbloccate rientra nel piano Enterprise, su preventivo. Entrambi i modelli sono difendibili — semplicemente rispondono a vincoli legali o di budget diversi.',
          ja: 'Baserow は中核が MIT で、高度な機能はプロプライエタリライセンスです。TblFlow は AGPL-3.0 で、全機能を解放したセルフホスト配置は Enterprise プラン（見積制）に含まれます。どちらのモデルにも理があり、単に適合する法務上・予算上の制約が異なるだけです。',
          ru: 'Ядро Baserow под MIT, продвинутые функции — под проприетарной лицензией. TblFlow под AGPL-3.0; self-hosted развёртывание со всеми функциями относится к тарифу Enterprise, по запросу. Обе модели защитимы — просто они подходят под разные юридические или бюджетные ограничения.',
          tr: 'Baserow’un çekirdeği MIT, gelişmiş özellikleri ise tescilli lisans altındadır. TblFlow AGPL-3.0’dır; tüm özellikleri açık, kendi sunucunuzda barındırılan dağıtım, teklife bağlı Enterprise paketine girer. Her iki model de savunulabilir — sadece farklı hukuki ya da bütçesel kısıtlara uyarlar.',
          uk: 'Ядро Baserow під MIT, розширені функції — під пропрієтарною ліцензією. TblFlow під AGPL-3.0; self-hosted розгортання з усіма функціями належить до тарифу Enterprise, за запитом. Обидві моделі захисні — просто вони пасують під різні юридичні чи бюджетні обмеження.',
          zh: 'Baserow 的核心是 MIT，高级功能采用专有许可。TblFlow 采用 AGPL-3.0；解锁全部功能的自托管部署属于 Enterprise 套餐，按需报价。两种模式都站得住脚 —— 只是适配的法务或预算约束不同。',
        },
      },
    ],
    honest: {
      de: 'Baserow ist in seinem Rahmen ausgereifter, mit einer aktiven Community und einer stabileren Codebasis. Für ein Team, das ein selbst gehostetes Airtable will, ohne KI-Schicht und ohne App-Veröffentlichung, ist Baserow die direktere Wahl — und die MIT-Lizenz ist freizügiger als unsere AGPL.',
      en: 'Baserow is more mature within its scope, with an active community and a more settled codebase. For a team that wants a self-hosted Airtable, with no AI layer and no app publishing, Baserow is the more direct choice — and its MIT licence is more permissive than our AGPL.',
      es: 'Baserow es más maduro dentro de su alcance, con una comunidad activa y una base de código más asentada. Para un equipo que quiere un Airtable autoalojado, sin capa de IA y sin publicación de apps, Baserow es la opción más directa, y su licencia MIT es más permisiva que nuestra AGPL.',
      fr: "Baserow est plus mature sur son périmètre, avec une communauté active et une base de code plus stabilisée. Pour une équipe qui veut un Airtable auto-hébergé, sans couche IA et sans publication d'applications, Baserow est le choix le plus direct — et sa licence MIT est plus permissive que notre AGPL.",
      it: 'Baserow è più maturo nel suo perimetro, con una community attiva e una base di codice più assestata. Per un team che vuole un Airtable self-hosted, senza livello IA e senza pubblicazione di app, Baserow è la scelta più diretta — e la sua licenza MIT è più permissiva della nostra AGPL.',
      ja: 'Baserow はその範囲内でより成熟しており、活発なコミュニティと安定したコードベースを持っています。AI レイヤーもアプリ公開も要らず、セルフホストの Airtable が欲しいチームには、Baserow のほうが素直な選択です。MIT ライセンスは当社の AGPL より寛容でもあります。',
      ru: 'Baserow зрелее в своих границах, с активным сообществом и более устоявшейся кодовой базой. Команде, которой нужен self-hosted Airtable без слоя ИИ и без публикации приложений, Baserow подходит прямее — и его лицензия MIT либеральнее нашей AGPL.',
      tr: 'Baserow kendi kapsamında daha olgundur; etkin bir topluluğu ve daha oturmuş bir kod tabanı vardır. Yapay zekâ katmanı ve uygulama yayımlama istemeyen, kendi sunucusunda bir Airtable arayan bir ekip için Baserow daha doğrudan bir seçimdir — ve MIT lisansı bizim AGPL’imizden daha serbesttir.',
      uk: 'Baserow зріліший у своїх межах, з активною спільнотою та усталенішою кодовою базою. Команді, якій потрібен self-hosted Airtable без шару ШІ та без публікації застосунків, Baserow підходить прямішим шляхом — а його ліцензія MIT ліберальніша за нашу AGPL.',
      zh: 'Baserow 在自己的范围内更成熟，社区活跃，代码库更稳定。对于只想要一个自托管 Airtable、不需要 AI 层也不需要应用发布的团队，Baserow 是更直接的选择 —— 而且它的 MIT 许可比我们的 AGPL 更宽松。',
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
      de: 'NocoDB verbindet sich mit einer Datenbank, die Sie bereits haben — MySQL, Postgres, SQLite — und legt eine Tabellenoberfläche darauf. TblFlow erstellt und steuert die Datenbank. Der Ausgangspunkt ist ein anderer: eine bestehende Datenbank umkleiden oder eine neue samt Agenten und Apps bauen.',
      en: 'NocoDB connects to a database you already have — MySQL, Postgres, SQLite — and puts a spreadsheet interface on it. TblFlow creates and drives the database. The starting point differs: converting an existing database, or building one complete with its agents and apps.',
      es: 'NocoDB se conecta a una base que ya tienes — MySQL, Postgres, SQLite — y le pone una interfaz de hoja de cálculo. TblFlow crea y gobierna la base. El punto de partida es distinto: revestir una base existente o construir una completa con sus agentes y aplicaciones.',
      fr: "NocoDB se branche sur une base que vous avez déjà — MySQL, Postgres, SQLite — et lui pose une interface tableur. TblFlow crée et pilote la base. Le point de départ n'est pas le même : convertir une base existante, ou en construire une avec ses agents et ses applications.",
      it: 'NocoDB si collega a un database che hai già — MySQL, Postgres, SQLite — e ci mette sopra un\'interfaccia in stile foglio di calcolo. TblFlow crea e guida il database. Il punto di partenza è diverso: rivestire un database esistente, oppure costruirne uno completo di agenti e app.',
      ja: 'NocoDB は、すでにお持ちのデータベース（MySQL、Postgres、SQLite）に接続し、その上に表計算のインターフェースを載せます。TblFlow はデータベース自体を作り、動かします。出発点が違います。既存のデータベースに服を着せるのか、エージェントやアプリまで含めて一から build するのか。',
      ru: 'NocoDB подключается к базе, которая у вас уже есть — MySQL, Postgres, SQLite — и надевает на неё интерфейс электронной таблицы. TblFlow создаёт базу и управляет ею. Отправная точка разная: одеть существующую базу или построить новую вместе с агентами и приложениями.',
      tr: 'NocoDB, halihazırda sahip olduğunuz bir veritabanına — MySQL, Postgres, SQLite — bağlanır ve üzerine elektronik tablo arayüzü koyar. TblFlow ise veritabanını kendisi oluşturur ve yönetir. Başlangıç noktası farklıdır: mevcut bir veritabanını giydirmek ya da ajanları ve uygulamalarıyla birlikte yeni bir tane kurmak.',
      uk: 'NocoDB підключається до бази, яка у вас уже є — MySQL, Postgres, SQLite — і надягає на неї інтерфейс електронної таблиці. TblFlow створює базу й керує нею. Відправна точка різна: вдягнути наявну базу чи побудувати нову разом з агентами та застосунками.',
      zh: 'NocoDB 连接到你已有的数据库 —— MySQL、Postgres、SQLite —— 并在上面加一层电子表格界面。TblFlow 则创建并驱动数据库。起点不同：是给已有数据库套上外壳，还是连同智能体和应用一起从头搭建。',
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
          es: 'Soporte multi-motor', fr: 'Support multi-SGBD', it: 'Supporto multi-motore',
          ja: '複数 DB エンジンへの対応', ru: 'Поддержка нескольких СУБД',
          tr: 'Çoklu motor desteği', uk: 'Підтримка кількох СУБД', zh: '多数据库引擎支持',
        },
        body: {
          de: 'NocoDB spricht MySQL, MariaDB, Postgres, SQLite und SQL Server. TblFlow spricht bewusst nur PostgreSQL: Vektorsuche, bedingte Rollups und die Agenten stützen sich auf Postgres-eigene Mechanismen, die ein Mehr-Engine-Nenner ausschließen würde.',
          en: 'NocoDB speaks MySQL, MariaDB, Postgres, SQLite and SQL Server. TblFlow speaks only PostgreSQL, deliberately: vector search, conditional rollups and the agents rely on Postgres-specific machinery that a multi-engine common denominator would rule out.',
          es: 'NocoDB habla MySQL, MariaDB, Postgres, SQLite y SQL Server. TblFlow habla solo PostgreSQL, a propósito: la búsqueda vectorial, los rollups condicionales y los agentes se apoyan en mecanismos propios de Postgres que un denominador común multi-motor descartaría.',
          fr: "NocoDB parle MySQL, MariaDB, Postgres, SQLite et SQL Server. TblFlow ne parle que PostgreSQL, délibérément : la recherche vectorielle, les rollups conditionnels et les agents s'appuient sur des mécanismes propres à Postgres, qu'un dénominateur commun multi-moteurs interdirait.",
          it: 'NocoDB parla MySQL, MariaDB, Postgres, SQLite e SQL Server. TblFlow parla solo PostgreSQL, deliberatamente: la ricerca vettoriale, i rollup condizionali e gli agenti si appoggiano a meccanismi propri di Postgres, che un denominatore comune multi-motore escluderebbe.',
          ja: 'NocoDB は MySQL、MariaDB、Postgres、SQLite、SQL Server に対応します。TblFlow は意図的に PostgreSQL のみです。ベクトル検索、条件付きロールアップ、エージェントは Postgres 固有の仕組みに依存しており、複数エンジンの最大公約数ではそれらが使えなくなります。',
          ru: 'NocoDB говорит на MySQL, MariaDB, Postgres, SQLite и SQL Server. TblFlow говорит только на PostgreSQL, и это осознанно: векторный поиск, условные роллапы и агенты опираются на механизмы, специфичные для Postgres, которые общий знаменатель нескольких СУБД исключил бы.',
          tr: 'NocoDB; MySQL, MariaDB, Postgres, SQLite ve SQL Server konuşur. TblFlow ise bilerek yalnızca PostgreSQL konuşur: vektör araması, koşullu rollup’lar ve ajanlar, çoklu motor ortak paydasının dışlayacağı Postgres’e özgü mekanizmalara dayanır.',
          uk: 'NocoDB говорить мовами MySQL, MariaDB, Postgres, SQLite і SQL Server. TblFlow говорить лише PostgreSQL, і це свідомо: векторний пошук, умовні ролапи та агенти спираються на механізми, специфічні для Postgres, які спільний знаменник кількох СУБД виключив би.',
          zh: 'NocoDB 支持 MySQL、MariaDB、Postgres、SQLite 和 SQL Server。TblFlow 有意只支持 PostgreSQL：向量搜索、条件 rollup 和智能体都依赖 Postgres 特有的机制，而多引擎的最大公约数会把它们排除在外。',
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
          it: 'NocoDB offre viste, moduli e automazioni. TblFlow aggiunge agenti con memoria persistente e proposte approvate, una biblioteca di documenti con ricerca semantica e la pubblicazione di app sul tuo dominio.',
          ja: 'NocoDB はビュー、フォーム、自動化を提供します。TblFlow はさらに、永続メモリと承認付き提案を持つエージェント、セマンティック検索付きのドキュメントライブラリ、自社ドメインでのアプリ公開を加えます。',
          ru: 'NocoDB даёт представления, формы и автоматизации. TblFlow добавляет агентов с постоянной памятью и согласуемыми предложениями, библиотеку документов с семантическим поиском и публикацию приложений на вашем домене.',
          tr: 'NocoDB görünümler, formlar ve otomasyonlar sunar. TblFlow bunlara kalıcı belleğe ve onaylanan önerilere sahip ajanları, anlamsal aramalı bir doküman kitaplığını ve kendi alan adınızda uygulama yayımlamayı ekler.',
          uk: 'NocoDB дає подання, форми та автоматизації. TblFlow додає агентів із постійною памʼяттю та погоджуваними пропозиціями, бібліотеку документів із семантичним пошуком і публікацію застосунків на вашому домені.',
          zh: 'NocoDB 提供视图、表单和自动化。TblFlow 增加了具备持久记忆和待审批提案的智能体、带语义搜索的文档库，以及在你自己域名上发布应用的能力。',
        },
      },
    ],
    honest: {
      de: 'Wenn Sie bereits eine Produktionsdatenbank haben und Nicht-Technikern schlicht eine Oberfläche darauf geben wollen, ohne das Schema anzufassen oder irgendetwas zu migrieren, tut NocoDB genau das und TblFlow ist das falsche Werkzeug. Es ist außerdem das einzige der beiden, das MySQL und SQL Server unterstützt.',
      en: 'If you already have a production database and simply want to give non-technical people an interface onto it, without touching the schema or migrating anything, NocoDB does exactly that and TblFlow is the wrong tool. It is also the only one of the two supporting MySQL and SQL Server.',
      es: 'Si ya tienes una base en producción y solo quieres dar a gente no técnica una interfaz sobre ella, sin tocar el esquema ni migrar nada, NocoDB hace exactamente eso y TblFlow es la herramienta equivocada. Además es el único de los dos que admite MySQL y SQL Server.',
      fr: "Si vous avez déjà une base en production et que vous voulez simplement donner à des non-techniciens une interface dessus, sans toucher au schéma ni migrer quoi que ce soit, NocoDB fait exactement ça et TblFlow est le mauvais outil. C'est aussi le seul des deux à supporter MySQL et SQL Server.",
      it: 'Se hai già un database in produzione e vuoi semplicemente dare a persone non tecniche un\'interfaccia sopra, senza toccare lo schema né migrare nulla, NocoDB fa esattamente questo e TblFlow è lo strumento sbagliato. È anche l\'unico dei due a supportare MySQL e SQL Server.',
      ja: 'すでに本番のデータベースがあり、スキーマに手を入れず、何も移行せずに、非エンジニアへインターフェースを与えたいだけなら、NocoDB がまさにそれをします。TblFlow は適した道具ではありません。MySQL と SQL Server に対応しているのも、2 つのうち NocoDB だけです。',
      ru: 'Если у вас уже есть боевая база и вы просто хотите дать нетехническим людям интерфейс к ней, не трогая схему и ничего не мигрируя, NocoDB делает ровно это, а TblFlow — неподходящий инструмент. К тому же из двух только он поддерживает MySQL и SQL Server.',
      tr: "Halihazırda üretimde bir veritabanınız varsa ve şemaya dokunmadan, hiçbir şeyi taşımadan teknik olmayan kişilere onun üzerinde bir arayüz vermek istiyorsanız, NocoDB tam olarak bunu yapar ve TblFlow yanlış araçtır. Ayrıca ikisi içinde MySQL ve SQL Server'ı destekleyen tek seçenektir.",
      uk: 'Якщо у вас уже є бойова база й ви просто хочете дати нетехнічним людям інтерфейс до неї, не чіпаючи схему й нічого не мігруючи, NocoDB робить саме це, а TblFlow — невідповідний інструмент. До того ж із двох лише він підтримує MySQL і SQL Server.',
      zh: '如果你已经有一个生产数据库，只是想给非技术人员一个操作界面，不动 schema、不迁移任何东西，那么 NocoDB 正是干这个的，TblFlow 是错的工具。它也是两者中唯一支持 MySQL 和 SQL Server 的。',
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
      uk: 'Monday.com — платформа керування роботою: вона сильна у стеженні за проєктами й командами. TblFlow — база даних: вона сильна у моделюванні повʼязаних даних і в тому, щоб змусити їх працювати. Перетин реальний, призначення — ні.',
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
          ru: 'Доски Monday построены вокруг элементов и подэлементов. Как только нужно связать несколько сущностей — контакты, компании, сделки, счета — с лукапами и условными роллапами, модель быстро упирается в потолок. Это родная территория реляционной базы.',
          tr: 'Monday panoları öğeler ve alt öğeler etrafında kurulur. Birkaç varlığı — kişiler, şirketler, fırsatlar, faturalar — lookup ve koşullu rollup’larla ilişkilendirmeniz gerektiği anda model yetmemeye başlar. Orası ilişkisel bir veritabanının kendi sahasıdır.',
          uk: 'Дошки Monday побудовані навколо елементів і піделементів. Щойно треба звʼязати кілька сутностей — контакти, компанії, угоди, рахунки — з лукапами та умовними ролапами, модель швидко впирається у стелю. Це рідна територія реляційної бази.',
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
          zh: 'Monday 提供 GraphQL API；任何分析都要经过它或经过 BI 连接器。用 TblFlow，你的 BI 工具直接指向 Postgres 实例 —— 没有中间层，也没有同步延迟。',
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
      uk: 'Для чистого стеження за проєктами — планування команди, завантаження, залежності, звітність за портфелем — Monday повніший і швидший у справі. Якщо ваша задача завершується на керуванні проєктами, TblFlow попросить вас побудувати те, що Monday уже дає з коробки.',
      zh: '就纯粹的项目跟踪而言 —— 团队排期、工作量、依赖关系、组合报表 —— Monday 更完整、更即开即用。如果你的需求止步于项目管理，TblFlow 会要求你自己搭出 Monday 已经自带的东西。',
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
          de: 'Struktur erzwungen oder optional', en: 'Structure enforced or optional',
          es: 'Estructura impuesta u opcional', fr: 'Structure imposée ou facultative',
          it: 'Struttura imposta o facoltativa', ja: '構造は強制か、任意か',
          ru: 'Структура обязательная или необязательная',
          tr: 'Yapı zorunlu mu, isteğe bağlı mı', uk: 'Структура обовʼязкова чи необовʼязкова',
          zh: '结构是强制的还是可选的',
        },
        body: {
          de: 'In Notion bleibt eine Datenbank-Eigenschaft locker — eine Tugend für Notizen, ein Mangel für Daten: Zwei Schreibweisen desselben Status existieren geräuschlos nebeneinander. TblFlow schränkt auf Feldebene ein, deshalb sind Gruppierungen und Filter verlässlich.',
          en: "In Notion a database property stays loose — a virtue for notes, a flaw for data: two spellings of the same status coexist silently. TblFlow constrains at field level, so grouping and filtering are trustworthy.",
          es: 'En Notion, una propiedad de base sigue siendo flexible, lo que es una virtud para notas y un defecto para datos: dos grafías del mismo estado conviven sin hacer ruido. TblFlow restringe a nivel de campo, así que las agrupaciones y los filtros son fiables.',
          fr: "Dans Notion, une propriété de base reste souple, ce qui est une qualité pour des notes et un défaut pour des données : deux orthographes d'un même statut coexistent sans bruit. TblFlow contraint au niveau du champ, donc les regroupements et les filtres sont fiables.",
          it: "In Notion una proprietà di database resta morbida: una virtù per gli appunti, un difetto per i dati — due grafie dello stesso stato convivono in silenzio. TblFlow vincola a livello di campo, quindi raggruppamenti e filtri sono affidabili.",
          ja: 'Notion のデータベースプロパティは緩いままです。メモにとっては長所ですが、データにとっては欠点で、同じステータスの表記ゆれが静かに共存します。TblFlow はフィールド単位で制約をかけるため、グループ化やフィルタが信頼できます。',
          ru: 'В Notion свойство базы остаётся нестрогим — достоинство для заметок и недостаток для данных: два написания одного статуса тихо сосуществуют. TblFlow ограничивает на уровне поля, поэтому группировкам и фильтрам можно доверять.',
          tr: 'Notion’da bir veritabanı özelliği gevşek kalır — notlar için erdem, veri için kusur: aynı durumun iki yazımı sessizce yan yana durur. TblFlow alan düzeyinde kısıtlar, bu yüzden gruplamalar ve filtreler güvenilirdir.',
          uk: 'У Notion властивість бази лишається нестрогою — перевага для нотаток і вада для даних: два написання одного статусу тихо співіснують. TblFlow обмежує на рівні поля, тож групуванням і фільтрам можна довіряти.',
          zh: '在 Notion 里，数据库属性是松散的 —— 这对笔记是优点，对数据是缺陷：同一个状态的两种写法会悄无声息地并存。TblFlow 在字段层面施加约束，因此分组和筛选是可信的。',
        },
      },
      {
        title: {
          de: 'Volumen', en: 'Volume', es: 'Volumen', fr: 'Volume', it: 'Volume',
          ja: 'データ量', ru: 'Объём', tr: 'Hacim', uk: 'Обсяг', zh: '数据量',
        },
        body: {
          de: 'Notion-Datenbanken werden bei einigen tausend Einträgen langsam, Filter und Rollups eingerechnet. TblFlow ist auf Millionen Zeilen pro Base ausgelegt, mit Antwortzeiten unter einer Sekunde.',
          en: 'Notion databases get slow at a few thousand entries, filters and rollups included. TblFlow is built for millions of rows per base, with sub-second response.',
          es: 'Las bases de Notion se vuelven lentas con unos pocos miles de entradas, filtros y rollups incluidos. TblFlow está pensado para millones de filas por base, con respuesta por debajo del segundo.',
          fr: "Les bases Notion deviennent lentes à quelques milliers d'entrées, filtres et rollups compris. TblFlow est conçu pour des millions de lignes par base, avec des temps de réponse sous la seconde.",
          it: 'I database Notion diventano lenti a qualche migliaio di voci, filtri e rollup compresi. TblFlow è progettato per milioni di righe per base, con risposte sotto il secondo.',
          ja: 'Notion のデータベースは、フィルタやロールアップを含めると数千件で遅くなります。TblFlow はベースあたり数百万行を前提に設計されており、応答は 1 秒未満です。',
          ru: 'Базы Notion становятся медленными на нескольких тысячах записей, с учётом фильтров и роллапов. TblFlow рассчитан на миллионы строк на базу, с откликом меньше секунды.',
          tr: 'Notion veritabanları, filtreler ve rollup’lar dahil, birkaç bin kayıtta yavaşlar. TblFlow base başına milyonlarca satır için tasarlanmıştır ve yanıt süresi bir saniyenin altındadır.',
          uk: 'Бази Notion стають повільними на кількох тисячах записів, з урахуванням фільтрів і ролапів. TblFlow розрахований на мільйони рядків на базу, з відгуком менше секунди.',
          zh: 'Notion 的数据库在几千条记录时就会变慢，算上筛选和 rollup 更是如此。TblFlow 是按每个 base 数百万行设计的，响应低于一秒。',
        },
      },
      {
        title: {
          de: 'Semantische Suche über Ihre Dokumente', en: 'Semantic search over your documents',
          es: 'Búsqueda semántica sobre tus documentos',
          fr: 'Recherche sémantique sur vos documents',
          it: 'Ricerca semantica sui tuoi documenti', ja: '自分のドキュメントに対するセマンティック検索',
          ru: 'Семантический поиск по вашим документам',
          tr: 'Dokümanlarınız üzerinde anlamsal arama',
          uk: 'Семантичний пошук по ваших документах', zh: '面向你的文档的语义搜索',
        },
        body: {
          de: 'Beide Produkte haben eine Dokumentbibliothek. TblFlow ergänzt eine Vektor- und Volltextsuche, verschmolzen per Reciprocal Rank Fusion, sowie einen Linkgraph zwischen Dokumenten — genug, um einen Agenten zu versorgen, nicht nur einen suchenden Menschen.',
          en: 'Both have a document library. TblFlow adds vector and full-text search fused with reciprocal rank fusion, plus a link graph between documents — enough to feed an agent, not just a human searching.',
          es: 'Ambos productos tienen una biblioteca de documentos. TblFlow le añade búsqueda vectorial y de texto completo fusionadas mediante reciprocal rank fusion, y un grafo de enlaces entre documentos: suficiente para alimentar a un agente, no solo a un humano que busca.',
          fr: "Les deux produits ont une bibliothèque de documents. TblFlow y ajoute une recherche vectorielle et plein texte fusionnées par reciprocal rank fusion, et un graphe de liens entre documents — de quoi alimenter un agent, pas seulement un humain qui cherche.",
          it: 'Entrambi hanno una biblioteca di documenti. TblFlow vi aggiunge ricerca vettoriale e full-text fuse con reciprocal rank fusion, più un grafo di collegamenti tra documenti — abbastanza per alimentare un agente, non solo un umano che cerca.',
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
      de: 'Salesforce ist ein tiefes, konfigurierbares Unternehmens-CRM, dessen Einführung einen Integrator voraussetzt. TblFlow ist eine generalistische Datenbank, auf der ein CRM in wenigen Tagen entsteht — und die auch für alles andere dient.',
      en: 'Salesforce is a deep, configurable enterprise CRM whose rollout assumes an integrator. TblFlow is a general-purpose database on which a CRM takes a few days to build — and which serves everything else too.',
      es: 'Salesforce es un CRM empresarial profundo y configurable cuya implantación presupone un integrador. TblFlow es una base de datos generalista sobre la que un CRM se construye en unos días, y que sirve además para todo lo demás.',
      fr: "Salesforce est un CRM d'entreprise, profond et paramétrable, dont la mise en œuvre suppose un intégrateur. TblFlow est une base de données généraliste sur laquelle un CRM se construit en quelques jours — et qui sert aussi à tout le reste.",
      it: 'Salesforce è un CRM aziendale profondo e configurabile, la cui adozione presuppone un integratore. TblFlow è un database generalista su cui un CRM si costruisce in pochi giorni — e che serve anche per tutto il resto.',
      ja: 'Salesforce は奥行きがあり設定自由度の高いエンタープライズ CRM で、導入にはインテグレーターが前提になります。TblFlow は汎用のデータベースで、その上に CRM を数日で組み上げられ、しかも他のすべてにも使えます。',
      ru: 'Salesforce — глубокая настраиваемая корпоративная CRM, внедрение которой предполагает интегратора. TblFlow — универсальная база данных, на которой CRM собирается за несколько дней и которая служит также для всего остального.',
      tr: 'Salesforce, hayata geçirilmesi bir entegratör varsayan derin ve yapılandırılabilir bir kurumsal CRM’dir. TblFlow ise üzerinde birkaç günde bir CRM kurulabilen ve geri kalan her şeye de yarayan genel amaçlı bir veritabanıdır.',
      uk: 'Salesforce — глибока налаштовувана корпоративна CRM, впровадження якої передбачає інтегратора. TblFlow — універсальна база даних, на якій CRM збирається за кілька днів і яка слугує також для всього іншого.',
      zh: 'Salesforce 是一套深度、可配置的企业级 CRM，其落地默认需要实施商。TblFlow 是一个通用数据库，在它之上几天就能搭出一套 CRM —— 而且它同时能承担其余所有事情。',
    },
    differences: [
      {
        title: {
          de: 'Zeit bis zum Nutzen', en: 'Time to value', es: 'Tiempo hasta el valor',
          fr: 'Délai de mise en œuvre', it: 'Tempo per arrivare al valore',
          ja: '価値が出るまでの時間', ru: 'Время до первой отдачи',
          tr: 'Değere ulaşma süresi', uk: 'Час до першої віддачі', zh: '见效所需时间',
        },
        body: {
          de: 'Eine Salesforce-Einführung zählt in Monaten und braucht meist einen Integrator. Eine TblFlow-Base entsteht in Minuten und wird ohne Ticket geändert: Schema, Ansichten und Automatisierungen sind von dem Team bearbeitbar, das sie nutzt.',
          en: 'A Salesforce rollout is measured in months and usually needs an integrator. A TblFlow base is created in minutes and changed without a ticket: schema, views and automations are editable by the team that uses them.',
          es: 'Un despliegue de Salesforce se mide en meses y suele necesitar un integrador. Una base TblFlow se crea en minutos y se modifica sin abrir un ticket: el esquema, las vistas y las automatizaciones los edita el mismo equipo que las usa.',
          fr: "Un déploiement Salesforce se compte en mois et mobilise généralement un intégrateur. Une base TblFlow se crée en quelques minutes et se modifie sans ticket : le schéma, les vues et les automatisations sont modifiables par l'équipe qui s'en sert.",
          it: 'Un rollout Salesforce si misura in mesi e di solito richiede un integratore. Una base TblFlow si crea in pochi minuti e si modifica senza aprire un ticket: schema, viste e automazioni sono modificabili dal team che le usa.',
          ja: 'Salesforce の導入は月単位で数え、たいていインテグレーターを必要とします。TblFlow のベースは数分で作成でき、チケットなしで変更できます。スキーマ、ビュー、自動化は、それを使うチーム自身が編集できます。',
          ru: 'Внедрение Salesforce измеряется месяцами и обычно требует интегратора. База TblFlow создаётся за минуты и меняется без заявки: схему, представления и автоматизации правит та же команда, которая ими пользуется.',
          tr: 'Bir Salesforce kurulumu aylarla ölçülür ve genellikle bir entegratör gerektirir. Bir TblFlow base’i dakikalar içinde oluşturulur ve talep açmadan değiştirilir: şema, görünümler ve otomasyonlar, onları kullanan ekip tarafından düzenlenebilir.',
          uk: 'Впровадження Salesforce вимірюється місяцями й зазвичай потребує інтегратора. База TblFlow створюється за хвилини й змінюється без заявки: схему, подання та автоматизації редагує та сама команда, яка ними користується.',
          zh: 'Salesforce 的实施以月计，通常需要实施商。一个 TblFlow base 几分钟就能建好，改动也无需提工单：schema、视图和自动化都由使用它们的团队自己编辑。',
        },
      },
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
          de: 'Salesforce gibt es nur verwaltet, ohne Self-Hosting-Option. Der Enterprise-Tarif von TblFlow, auf Anfrage, wird auf Ihrer eigenen Infrastruktur oder in Ihrer VPC bereitgestellt — was das Gespräch mit einem Datenschutzbeauftragten oder einem Compliance-Team verändert.',
          en: "Salesforce is managed only, with no self-hosting option. TblFlow's Enterprise tier, on quote, deploys on your own infrastructure or in your VPC — which changes the conversation with a DPO or a compliance team.",
          es: 'Salesforce solo existe gestionado, sin opción de autoalojamiento. El plan Enterprise de TblFlow, a presupuesto, se despliega en tu propia infraestructura o en tu VPC, lo que cambia la conversación con un DPO o un equipo de cumplimiento.',
          fr: "Salesforce est infogéré, sans option d'auto-hébergement. Le palier Enterprise de TblFlow, sur devis, se déploie sur votre propre infrastructure ou dans votre VPC — ce qui change la conversation avec un DPO ou une équipe conformité.",
          it: "Salesforce esiste solo come servizio gestito, senza opzione self-hosted. Il piano Enterprise di TblFlow, su preventivo, si distribuisce sulla tua infrastruttura o nel tuo VPC — il che cambia la conversazione con un DPO o un team compliance.",
          ja: 'Salesforce はマネージド提供のみで、セルフホストの選択肢がありません。TblFlow の Enterprise プラン（見積制）は、自社インフラまたは自社 VPC に配置できます。これは DPO やコンプライアンス部門との会話の前提を変えます。',
          ru: 'Salesforce существует только как управляемый сервис, без варианта self-hosting. Тариф Enterprise у TblFlow, по запросу, разворачивается на вашей инфраструктуре или в вашем VPC — а это меняет разговор с DPO или командой комплаенса.',
          tr: "Salesforce yalnızca yönetilen hizmet olarak vardır, kendi sunucunuzda barındırma seçeneği yoktur. TblFlow'un teklife bağlı Enterprise paketi, kendi altyapınıza veya kendi VPC'nize dağıtılır — bu da bir DPO ya da uyum ekibiyle yapılan konuşmayı değiştirir.",
          uk: 'Salesforce існує лише як керований сервіс, без варіанта self-hosting. Тариф Enterprise у TblFlow, за запитом, розгортається на вашій інфраструктурі або у вашому VPC — а це змінює розмову з DPO чи командою комплаєнсу.',
          zh: 'Salesforce 只有托管形态，没有自托管选项。TblFlow 的 Enterprise 套餐按需报价，可部署在你自己的基础设施或你的 VPC 中 —— 这会改变你与 DPO 或合规团队的对话。',
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
