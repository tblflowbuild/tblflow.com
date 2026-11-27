import type { Locale } from '@/config';

/**
 * Boldo page (lot L1, point d). Two complementary tools, not a head-to-head:
 * no table, no verdict, no price, no rating, no claim about Boldo beyond what
 * its public site says. Comparative advertising: Tommy reviews the wording.
 *
 * Boldo facts come from boldo.io, read on 2026-11-21 (see
 * compare-verification.json). The product was never used and the page says so.
 */
export interface BoldoCard {
  title: string;
  text: string;
}
export interface BoldoTexts {
  title: string;
  description: string;
  h1: string;
  intro: string;
  cards: BoldoCard[];
  meetTitle: string;
  meetText: string;
  note: string;
}

export const BOLDO: Record<Locale, BoldoTexts> = {
  fr: {
    title: 'TblFlow et Boldo : deux outils complémentaires',
    description:
      'Boldo cartographie le système d’information d’une organisation ; TblFlow fait tourner le travail d’une équipe. Deux métiers, qui peuvent se compléter.',
    h1: 'TblFlow et Boldo : deux outils complémentaires',
    intro:
      'Boldo et TblFlow ne répondent pas à la même question. Boldo aide à décrire le système d’information d’une organisation ; TblFlow aide une équipe à faire son travail. Une même organisation peut avoir besoin des deux.',
    cards: [
      {
        title: 'Ce que fait Boldo',
        text: 'Boldo est un outil d’architecture d’entreprise. Il sert à cartographier les applications, les flux, les capacités et les risques d’un système d’information, avec des diagrammes collaboratifs, de l’analyse d’impact et des scénarios. Il s’adresse surtout aux équipes informatiques, aux architectes d’entreprise et aux cabinets de conseil.',
      },
      {
        title: 'Ce que fait TblFlow',
        text: 'TblFlow est une base de données avec des vues, des formulaires, des automatisations et des agents IA. Il sert à faire tourner le travail d’une équipe, par exemple une PME qui quitte ses tableurs et ses outils dispersés.',
      },
    ],
    meetTitle: 'Où ils se rencontrent',
    meetText:
      'Le point de contact est la cartographie. Boldo la met au service de la gouvernance du système d’information ; la cartographie des processus de TblFlow sert à repérer le travail à simplifier ou à automatiser. Ce qui est décrit d’un côté peut éclairer l’autre.',
    note: 'Ce que nous disons de Boldo vient de son site public, lu le 21 novembre 2026. Nous n’avons pas utilisé son produit. Boldo est une marque de BOLDO SAS.',
  },
  en: {
    title: 'TblFlow and Boldo: complementary tools',
    description:
      'Boldo maps an organization’s information system; TblFlow runs a team’s work. Two different jobs that can complement each other.',
    h1: 'TblFlow and Boldo: complementary tools',
    intro:
      'Boldo and TblFlow do not answer the same question. Boldo helps describe an organization’s information system; TblFlow helps a team do its work. The same organization may need both.',
    cards: [
      {
        title: 'What Boldo does',
        text: 'Boldo is an enterprise architecture tool. It is used to map the applications, flows, capabilities and risks of an information system, with collaborative diagrams, impact analysis and scenarios. It is aimed mainly at IT teams, enterprise architects and consulting firms.',
      },
      {
        title: 'What TblFlow does',
        text: 'TblFlow is a database with views, forms, automations and AI agents. It is used to run a team’s work, for example a small business moving off spreadsheets and scattered tools.',
      },
    ],
    meetTitle: 'Where they meet',
    meetText:
      'The point of contact is mapping. Boldo puts it at the service of information system governance; TblFlow’s process map is used to spot work to simplify or automate. What is described on one side can inform the other.',
    note: 'What we say about Boldo comes from its public website, read on 21 November 2026. We have not used its product. Boldo is a trademark of BOLDO SAS.',
  },
  de: {
    title: 'TblFlow und Boldo: sich ergänzende Werkzeuge',
    description:
      'Boldo bildet das Informationssystem einer Organisation ab; TblFlow lässt die Arbeit eines Teams laufen. Zwei verschiedene Aufgaben, die sich ergänzen können.',
    h1: 'TblFlow und Boldo: sich ergänzende Werkzeuge',
    intro:
      'Boldo und TblFlow beantworten nicht dieselbe Frage. Boldo hilft, das Informationssystem einer Organisation zu beschreiben; TblFlow hilft einem Team, seine Arbeit zu erledigen. Dieselbe Organisation kann beides brauchen.',
    cards: [
      {
        title: 'Was Boldo macht',
        text: 'Boldo ist ein Werkzeug für Unternehmensarchitektur. Es dient dazu, die Anwendungen, Datenflüsse, Fähigkeiten und Risiken eines Informationssystems abzubilden, mit kollaborativen Diagrammen, Auswirkungsanalysen und Szenarien. Es richtet sich vor allem an IT-Teams, Unternehmensarchitekten und Beratungsunternehmen.',
      },
      {
        title: 'Was TblFlow macht',
        text: 'TblFlow ist eine Datenbank mit Ansichten, Formularen, Automatisierungen und KI-Agenten. Es dient dazu, die Arbeit eines Teams laufen zu lassen, zum Beispiel in einem kleinen Unternehmen, das Tabellenkalkulationen und verstreute Werkzeuge hinter sich lässt.',
      },
    ],
    meetTitle: 'Wo sie sich treffen',
    meetText:
      'Der Berührungspunkt ist die Abbildung. Boldo stellt sie in den Dienst der Steuerung des Informationssystems; die Prozesslandkarte von TblFlow dient dazu, Arbeit zu erkennen, die sich vereinfachen oder automatisieren lässt. Was auf der einen Seite beschrieben ist, kann die andere aufklären.',
    note: 'Was wir über Boldo sagen, stammt von der öffentlichen Website, gelesen am 21. November 2026. Wir haben das Produkt nicht benutzt. Boldo ist eine Marke von BOLDO SAS.',
  },
  es: {
    title: 'TblFlow y Boldo: herramientas complementarias',
    description:
      'Boldo cartografía el sistema de información de una organización; TblFlow hace funcionar el trabajo de un equipo. Dos oficios que pueden complementarse.',
    h1: 'TblFlow y Boldo: herramientas complementarias',
    intro:
      'Boldo y TblFlow no responden a la misma pregunta. Boldo ayuda a describir el sistema de información de una organización; TblFlow ayuda a un equipo a hacer su trabajo. Una misma organización puede necesitar ambos.',
    cards: [
      {
        title: 'Qué hace Boldo',
        text: 'Boldo es una herramienta de arquitectura empresarial. Sirve para cartografiar las aplicaciones, los flujos, las capacidades y los riesgos de un sistema de información, con diagramas colaborativos, análisis de impacto y escenarios. Se dirige sobre todo a equipos de informática, arquitectos empresariales y consultoras.',
      },
      {
        title: 'Qué hace TblFlow',
        text: 'TblFlow es una base de datos con vistas, formularios, automatizaciones y agentes de IA. Sirve para hacer funcionar el trabajo de un equipo, por ejemplo una pyme que deja atrás sus hojas de cálculo y sus herramientas dispersas.',
      },
    ],
    meetTitle: 'Dónde se encuentran',
    meetText:
      'El punto de contacto es la cartografía. Boldo la pone al servicio del gobierno del sistema de información; el mapa de procesos de TblFlow sirve para detectar el trabajo que conviene simplificar o automatizar. Lo que se describe en un lado puede aclarar el otro.',
    note: 'Lo que decimos de Boldo procede de su sitio web público, leído el 21 de noviembre de 2026. No hemos utilizado su producto. Boldo es una marca de BOLDO SAS.',
  },
  it: {
    title: 'TblFlow e Boldo: strumenti complementari',
    description:
      'Boldo mappa il sistema informativo di un’organizzazione; TblFlow fa funzionare il lavoro di un team. Due mestieri diversi, che possono completarsi.',
    h1: 'TblFlow e Boldo: strumenti complementari',
    intro:
      'Boldo e TblFlow non rispondono alla stessa domanda. Boldo aiuta a descrivere il sistema informativo di un’organizzazione; TblFlow aiuta un team a svolgere il proprio lavoro. La stessa organizzazione può avere bisogno di entrambi.',
    cards: [
      {
        title: 'Cosa fa Boldo',
        text: 'Boldo è uno strumento di architettura aziendale. Serve a mappare le applicazioni, i flussi, le capacità e i rischi di un sistema informativo, con diagrammi collaborativi, analisi d’impatto e scenari. Si rivolge soprattutto a team informatici, architetti aziendali e società di consulenza.',
      },
      {
        title: 'Cosa fa TblFlow',
        text: 'TblFlow è un database con viste, moduli, automazioni e agenti IA. Serve a far funzionare il lavoro di un team, per esempio una piccola impresa che lascia i fogli di calcolo e gli strumenti sparsi.',
      },
    ],
    meetTitle: 'Dove si incontrano',
    meetText:
      'Il punto di contatto è la mappatura. Boldo la mette al servizio della governance del sistema informativo; la mappa dei processi di TblFlow serve a individuare il lavoro da semplificare o automatizzare. Ciò che è descritto da una parte può illuminare l’altra.',
    note: 'Ciò che diciamo di Boldo proviene dal suo sito pubblico, letto il 21 novembre 2026. Non abbiamo utilizzato il suo prodotto. Boldo è un marchio di BOLDO SAS.',
  },
  ja: {
    title: 'TblFlowとBoldo：互いに補い合うツール',
    description:
      'Boldoは組織の情報システムをマッピングし、TblFlowはチームの仕事を回します。役割の異なる2つのツールで、互いに補い合うことができます。',
    h1: 'TblFlowとBoldo：互いに補い合うツール',
    intro:
      'BoldoとTblFlowは、同じ問いに答えるものではありません。Boldoは組織の情報システムを記述する手助けをし、TblFlowはチームが仕事を進める手助けをします。同じ組織が両方を必要とすることもあります。',
    cards: [
      {
        title: 'Boldoの役割',
        text: 'Boldoはエンタープライズアーキテクチャのツールです。情報システムのアプリケーション、フロー、ケイパビリティ、リスクをマッピングするために使われ、共同編集できる図、影響分析、シナリオを備えています。主な対象は、IT部門、エンタープライズアーキテクト、コンサルティング会社です。',
      },
      {
        title: 'TblFlowの役割',
        text: 'TblFlowは、ビュー、フォーム、自動化、AIエージェントを備えたデータベースです。チームの仕事を回すために使われます。たとえば、表計算ソフトやバラバラのツールから移行する中小企業などです。',
      },
    ],
    meetTitle: '接点',
    meetText:
      '接点はマッピングです。Boldoはそれを情報システムのガバナンスのために用い、TblFlowのプロセスマップは、簡素化または自動化すべき仕事を見つけるために使われます。一方で記述された内容が、もう一方の助けになることがあります。',
    note: 'Boldoについての記述は、2026年11月21日に確認した公開サイトに基づいています。同製品は使用していません。Boldoは BOLDO SAS の商標です。',
  },
  ru: {
    title: 'TblFlow и Boldo: взаимодополняющие инструменты',
    description:
      'Boldo описывает информационную систему организации; TblFlow обеспечивает работу команды. Две разные задачи, которые могут дополнять друг друга.',
    h1: 'TblFlow и Boldo: взаимодополняющие инструменты',
    intro:
      'Boldo и TblFlow отвечают на разные вопросы. Boldo помогает описать информационную систему организации; TblFlow помогает команде выполнять свою работу. Одной и той же организации могут понадобиться оба.',
    cards: [
      {
        title: 'Что делает Boldo',
        text: 'Boldo — инструмент корпоративной архитектуры. Он нужен, чтобы картировать приложения, потоки, возможности и риски информационной системы: с совместными диаграммами, анализом влияния и сценариями. Он ориентирован главным образом на ИТ-команды, корпоративных архитекторов и консалтинговые компании.',
      },
      {
        title: 'Что делает TblFlow',
        text: 'TblFlow — база данных с представлениями, формами, автоматизациями и ИИ-агентами. Он нужен, чтобы обеспечивать работу команды, например небольшой компании, которая отказывается от таблиц и разрозненных инструментов.',
      },
    ],
    meetTitle: 'Где они пересекаются',
    meetText:
      'Точка соприкосновения — картирование. Boldo использует его для управления информационной системой; карта процессов TblFlow помогает найти работу, которую можно упростить или автоматизировать. То, что описано с одной стороны, может прояснить другую.',
    note: 'То, что мы говорим о Boldo, взято с его публичного сайта, прочитанного 21 ноября 2026 года. Мы не использовали его продукт. Boldo — торговая марка BOLDO SAS.',
  },
  tr: {
    title: 'TblFlow ve Boldo: birbirini tamamlayan araçlar',
    description:
      'Boldo bir kuruluşun bilgi sistemini haritalar; TblFlow bir ekibin işini yürütür. Birbirini tamamlayabilen iki farklı iş.',
    h1: 'TblFlow ve Boldo: birbirini tamamlayan araçlar',
    intro:
      'Boldo ve TblFlow aynı soruya yanıt vermez. Boldo, bir kuruluşun bilgi sistemini tanımlamaya yardımcı olur; TblFlow ise bir ekibin işini yapmasına yardımcı olur. Aynı kuruluşun ikisine de ihtiyacı olabilir.',
    cards: [
      {
        title: 'Boldo ne yapar',
        text: 'Boldo bir kurumsal mimari aracıdır. Bir bilgi sisteminin uygulamalarını, akışlarını, yeteneklerini ve risklerini; ortak çalışmaya açık diyagramlar, etki analizi ve senaryolarla haritalamak için kullanılır. Esas olarak BT ekiplerine, kurumsal mimarlara ve danışmanlık firmalarına yöneliktir.',
      },
      {
        title: 'TblFlow ne yapar',
        text: 'TblFlow; görünümler, formlar, otomasyonlar ve yapay zekâ ajanları sunan bir veritabanıdır. Bir ekibin işini yürütmek için kullanılır; örneğin elektronik tablolarını ve dağınık araçlarını bırakan küçük bir işletme için.',
      },
    ],
    meetTitle: 'Nerede buluşurlar',
    meetText:
      'Temas noktası haritalamadır. Boldo bunu bilgi sisteminin yönetişimine hizmet etmek için kullanır; TblFlow’un süreç haritası ise sadeleştirilecek veya otomatikleştirilecek işleri belirlemek için kullanılır. Bir tarafta tanımlanan, diğer tarafa ışık tutabilir.',
    note: 'Boldo hakkında söylediklerimiz, 21 Kasım 2026 tarihinde okunan herkese açık web sitesinden alınmıştır. Ürününü kullanmadık. Boldo, BOLDO SAS’ın ticari markasıdır.',
  },
  uk: {
    title: 'TblFlow і Boldo: взаємодоповнювальні інструменти',
    description:
      'Boldo описує інформаційну систему організації; TblFlow забезпечує роботу команди. Два різні завдання, які можуть доповнювати одне одного.',
    h1: 'TblFlow і Boldo: взаємодоповнювальні інструменти',
    intro:
      'Boldo і TblFlow відповідають на різні запитання. Boldo допомагає описати інформаційну систему організації; TblFlow допомагає команді виконувати свою роботу. Одній і тій самій організації можуть знадобитися обидва.',
    cards: [
      {
        title: 'Що робить Boldo',
        text: 'Boldo — інструмент корпоративної архітектури. Він потрібен, щоб картувати застосунки, потоки, спроможності та ризики інформаційної системи: зі спільними діаграмами, аналізом впливу та сценаріями. Він орієнтований передусім на ІТ-команди, корпоративних архітекторів і консалтингові компанії.',
      },
      {
        title: 'Що робить TblFlow',
        text: 'TblFlow — база даних із поданнями, формами, автоматизаціями та ШІ-агентами. Він потрібен, щоб забезпечувати роботу команди, наприклад невеликої компанії, яка відмовляється від таблиць і розрізнених інструментів.',
      },
    ],
    meetTitle: 'Де вони перетинаються',
    meetText:
      'Точка дотику — картування. Boldo використовує його для управління інформаційною системою; карта процесів TblFlow допомагає знайти роботу, яку можна спростити або автоматизувати. Те, що описано з одного боку, може прояснити інший.',
    note: 'Те, що ми говоримо про Boldo, взято з його публічного сайту, прочитаного 21 листопада 2026 року. Ми не користувалися його продуктом. Boldo — торгова марка BOLDO SAS.',
  },
  zh: {
    title: 'TblFlow 与 Boldo：两款互补的工具',
    description:
      'Boldo 梳理组织的信息系统；TblFlow 让团队的工作运转起来。两种不同的职能，可以相互补充。',
    h1: 'TblFlow 与 Boldo：两款互补的工具',
    intro:
      'Boldo 和 TblFlow 回答的不是同一个问题。Boldo 帮助描述组织的信息系统；TblFlow 帮助团队完成日常工作。同一个组织可能两者都需要。',
    cards: [
      {
        title: 'Boldo 的作用',
        text: 'Boldo 是一款企业架构工具，用于梳理信息系统中的应用、数据流、能力和风险，提供协作式图表、影响分析和情景模拟。它主要面向 IT 团队、企业架构师和咨询公司。',
      },
      {
        title: 'TblFlow 的作用',
        text: 'TblFlow 是一个带有视图、表单、自动化和 AI 智能体的数据库，用于让团队的工作运转起来，例如一家告别电子表格和分散工具的小型企业。',
      },
    ],
    meetTitle: '两者的交会点',
    meetText:
      '交会点是梳理。Boldo 将其用于信息系统治理；TblFlow 的流程图谱用于发现可以简化或自动化的工作。一方所描述的内容，可以为另一方提供参考。',
    note: '我们对 Boldo 的说明来自其公开网站，查阅日期为 2026 年 11 月 21 日。我们没有使用过其产品。Boldo 是 BOLDO SAS 的商标。',
  },
};
