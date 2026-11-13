import type { Locale } from "@/config";
/**
 * Fiches publiques des fonctions d'IA de TblFlow (« Transparence IA », AI Act art. 50). Même contenu que
 * la page publique de l'application (`/legal/ai-transparency`) ; la structure factuelle vient du code
 * produit (`TBLFLOW_AI_FUNCTIONS`), les textes sont ici dans les 10 langues.
 */
export type AiRole =
  | "chat"
  | "standard"
  | "lightweight"
  | "image"
  | "audio"
  | "video"
  | "embeddings";
export type AiValidation = "always" | "configurable" | "not_applicable";
export interface AiFunctionFacts {
  id: string;
  roles: AiRole[];
  reads: boolean;
  validation: AiValidation;
  logged: boolean;
  people: boolean;
}
export const AI_FUNCTION_FACTS: AiFunctionFacts[] = [
  {
    id: "ai_field",
    roles: ["standard", "lightweight", "image", "audio", "video"],
    reads: true,
    validation: "not_applicable",
    logged: true,
    people: false,
  },
  {
    id: "agents",
    roles: ["chat", "standard"],
    reads: true,
    validation: "configurable",
    logged: true,
    people: true,
  },
  {
    id: "workflow_ai",
    roles: ["standard", "lightweight"],
    reads: true,
    validation: "configurable",
    logged: true,
    people: false,
  },
  {
    id: "chat",
    roles: ["chat"],
    reads: true,
    validation: "not_applicable",
    logged: true,
    people: true,
  },
  {
    id: "doc_search",
    roles: ["embeddings", "standard"],
    reads: true,
    validation: "not_applicable",
    logged: true,
    people: false,
  },
  {
    id: "mcp",
    roles: ["standard"],
    reads: true,
    validation: "configurable",
    logged: true,
    people: false,
  },
  {
    id: "app_builder",
    roles: ["chat", "standard"],
    reads: false,
    validation: "always",
    logged: true,
    people: true,
  },
];
export interface AiTransparencyTexts {
  title: string;
  description: string;
  intro: string;
  models: string;
  readsYes: string;
  readsNo: string;
  validation: Record<AiValidation, string>;
  logging: string;
  people: string;
  roles: Record<AiRole, string>;
  functions: Record<string, { name: string; description: string }>;
}
export const AI_TRANSPARENCY: Record<Locale, AiTransparencyTexts> = {
  de: {
    title: "KI-Transparenz",
    description:
      "Öffentliche Datenblätter zu den KI-Funktionen von TblFlow: Modelle, Daten, menschliche Validierung, Protokollierung.",
    intro:
      "TblFlow stellt die folgenden KI-Funktionen als Anbieter von KI-Systemen mit begrenztem Risiko bereit (EU-KI-Verordnung, Artikel 50). Ihre Organisation bleibt für die Nutzungen verantwortlich, die sie damit aufbaut.",
    models: "Modelle (Rollen des TblFlow-KI-Profils)",
    readsYes: "Kann Daten Ihres Bereichs lesen.",
    readsNo: "Liest keine Daten Ihres Bereichs.",
    validation: {
      always: "Menschliche Validierung: immer, vor jeder Wirkung.",
      configurable:
        "Menschliche Validierung: konfigurierbar (für Agenten standardmäßig aktiv).",
      not_applicable:
        "Menschliche Validierung: Der Nutzer prüft das Ergebnis, keine automatische Wirkung.",
    },
    logging:
      "Jeder Aufruf wird nach Bereich, Quelle, Modell und Token protokolliert.",
    people:
      "Interagiert direkt mit Personen, die darüber informiert werden, dass es sich um KI handelt.",
    roles: {
      chat: "Chat",
      standard: "Standard",
      lightweight: "Leichtgewichtig",
      image: "Bild",
      audio: "Audio",
      video: "Video",
      embeddings: "Embeddings",
    },
    functions: {
      ai_field: {
        name: "KI-Felder",
        description:
          "Erzeugen einen Zellwert (Text, Bild, Audio, Video) aus anderen Feldern der Zeile.",
      },
      agents: {
        name: "Agenten",
        description:
          "Assistenten, die Ihre Daten lesen und mit Werkzeugen handeln, mit Freigabe von Schreibaktionen.",
      },
      workflow_ai: {
        name: "Automatisierungen mit KI-Schritt",
        description:
          "Erzeugen oder klassifizieren Inhalte innerhalb einer Automatisierung.",
      },
      chat: {
        name: "Chat-Assistent",
        description:
          "Beantwortet Fragen und hilft beim Aufbau mit Ihren Daten.",
      },
      doc_search: {
        name: "Dokumentensuche",
        description:
          "Indexiert Ihre Dokumente und antwortet auf deren Grundlage.",
      },
      mcp: {
        name: "MCP-Server",
        description:
          "Ermöglicht externen KI-Clients, die von Ihnen freigegebenen Agenten und Automatisierungen auszuführen.",
      },
      app_builder: {
        name: "App-Generierung",
        description:
          "Entwirft Oberflächen und Automatisierungen, die Sie vor der Nutzung prüfen.",
      },
    },
  },
  en: {
    title: "AI transparency",
    description:
      "Public fact sheets for TblFlow’s AI functions: models, data, human validation and logging.",
    intro:
      "TblFlow provides the AI functions below as a provider of limited-risk AI systems (EU AI Act, article 50). Your organisation stays responsible for the uses it builds with them.",
    models: "Models (roles of the TblFlow AI profile)",
    readsYes: "Can read data from your space.",
    readsNo: "Does not read your space data.",
    validation: {
      always: "Human validation: always, before any effect.",
      configurable:
        "Human validation: configurable (on by default for agents).",
      not_applicable:
        "Human validation: the user reviews the output, no automatic effect.",
    },
    logging: "Every call is logged by space, source, model and tokens.",
    people: "Interacts directly with people, who are told it is AI.",
    roles: {
      chat: "Chat",
      standard: "Standard",
      lightweight: "Lightweight",
      image: "Image",
      audio: "Audio",
      video: "Video",
      embeddings: "Embeddings",
    },
    functions: {
      ai_field: {
        name: "AI fields",
        description:
          "Generate a cell value (text, image, audio, video) from other fields of the row.",
      },
      agents: {
        name: "Agents",
        description:
          "Assistants that read your data and act with tools, with approval of write actions.",
      },
      workflow_ai: {
        name: "Automations with AI step",
        description: "Generate or classify content inside an automation.",
      },
      chat: {
        name: "Chat assistant",
        description: "Answers questions and helps build with your data.",
      },
      doc_search: {
        name: "Document search",
        description: "Indexes your documents and answers from them.",
      },
      mcp: {
        name: "MCP server",
        description:
          "Lets external AI clients run the agents and automations you expose.",
      },
      app_builder: {
        name: "App generation",
        description:
          "Drafts interfaces and automations that you review before use.",
      },
    },
  },
  es: {
    title: "Transparencia de la IA",
    description:
      "Fichas públicas de las funciones de IA de TblFlow: modelos, datos, validación humana y registro.",
    intro:
      "TblFlow ofrece las funciones de IA siguientes como proveedor de sistemas de IA de riesgo limitado (Reglamento europeo de IA, artículo 50). Su organización sigue siendo responsable de los usos que construya con ellas.",
    models: "Modelos (roles del perfil de IA de TblFlow)",
    readsYes: "Puede leer datos de su espacio.",
    readsNo: "No lee los datos de su espacio.",
    validation: {
      always: "Validación humana: siempre, antes de cualquier efecto.",
      configurable:
        "Validación humana: configurable (activada por defecto en los agentes).",
      not_applicable:
        "Validación humana: el usuario revisa el resultado, sin efecto automático.",
    },
    logging: "Cada llamada se registra por espacio, origen, modelo y tokens.",
    people:
      "Dialoga directamente con personas, que son informadas de que se trata de una IA.",
    roles: {
      chat: "Chat",
      standard: "Estándar",
      lightweight: "Ligero",
      image: "Imagen",
      audio: "Audio",
      video: "Vídeo",
      embeddings: "Embeddings",
    },
    functions: {
      ai_field: {
        name: "Campos de IA",
        description:
          "Generan el valor de una celda (texto, imagen, audio, vídeo) a partir de otros campos de la fila.",
      },
      agents: {
        name: "Agentes",
        description:
          "Asistentes que leen sus datos y actúan con herramientas, con validación de las acciones de escritura.",
      },
      workflow_ai: {
        name: "Automatizaciones con paso de IA",
        description:
          "Generan o clasifican contenido dentro de una automatización.",
      },
      chat: {
        name: "Asistente de chat",
        description: "Responde preguntas y ayuda a construir con sus datos.",
      },
      doc_search: {
        name: "Búsqueda documental",
        description: "Indexa sus documentos y responde a partir de ellos.",
      },
      mcp: {
        name: "Servidor MCP",
        description:
          "Permite que clientes de IA externos ejecuten los agentes y automatizaciones que usted expone.",
      },
      app_builder: {
        name: "Generación de aplicaciones",
        description:
          "Prepara interfaces y automatizaciones que usted revisa antes de usarlas.",
      },
    },
  },
  fr: {
    title: "Transparence IA",
    description:
      "Fiches publiques des fonctions d’IA de TblFlow : modèles, données, validation humaine, journalisation.",
    intro:
      "TblFlow fournit les fonctions d’IA ci-dessous en tant que fournisseur de systèmes d’IA à risque limité (règlement européen sur l’IA, article 50). Votre organisation reste responsable des usages qu’elle construit avec elles.",
    models: "Modèles (rôles du profil IA TblFlow)",
    readsYes: "Peut lire les données de votre espace.",
    readsNo: "Ne lit pas les données de votre espace.",
    validation: {
      always: "Validation humaine : toujours, avant tout effet.",
      configurable:
        "Validation humaine : configurable (activée par défaut pour les agents).",
      not_applicable:
        "Validation humaine : l’utilisateur relit le résultat, aucun effet automatique.",
    },
    logging:
      "Chaque appel est journalisé par espace, source, modèle et jetons.",
    people:
      "Dialogue directement avec des personnes, qui sont informées qu’il s’agit d’une IA.",
    roles: {
      chat: "Chat",
      standard: "Standard",
      lightweight: "Léger",
      image: "Image",
      audio: "Audio",
      video: "Vidéo",
      embeddings: "Plongements",
    },
    functions: {
      ai_field: {
        name: "Champs IA",
        description:
          "Génèrent la valeur d’une cellule (texte, image, audio, vidéo) à partir des autres champs de la ligne.",
      },
      agents: {
        name: "Agents",
        description:
          "Assistants qui lisent vos données et agissent avec des outils, avec validation des actions d’écriture.",
      },
      workflow_ai: {
        name: "Automatisations avec étape IA",
        description: "Génèrent ou classent du contenu dans une automatisation.",
      },
      chat: {
        name: "Assistant de chat",
        description:
          "Répond aux questions et aide à construire avec vos données.",
      },
      doc_search: {
        name: "Recherche documentaire",
        description: "Indexe vos documents et répond à partir d’eux.",
      },
      mcp: {
        name: "Serveur MCP",
        description:
          "Permet à des clients IA externes d’exécuter les agents et automatisations que vous exposez.",
      },
      app_builder: {
        name: "Génération d’applications",
        description:
          "Prépare des interfaces et des automatisations que vous relisez avant usage.",
      },
    },
  },
  it: {
    title: "Trasparenza dell’IA",
    description:
      "Schede pubbliche delle funzioni IA di TblFlow: modelli, dati, convalida umana e registrazione.",
    intro:
      "TblFlow fornisce le funzioni IA seguenti come fornitore di sistemi di IA a rischio limitato (regolamento europeo sull’IA, articolo 50). La vostra organizzazione resta responsabile degli usi che costruisce con esse.",
    models: "Modelli (ruoli del profilo IA di TblFlow)",
    readsYes: "Può leggere i dati del vostro spazio.",
    readsNo: "Non legge i dati del vostro spazio.",
    validation: {
      always: "Convalida umana: sempre, prima di ogni effetto.",
      configurable:
        "Convalida umana: configurabile (attiva per impostazione predefinita per gli agenti).",
      not_applicable:
        "Convalida umana: l’utente rivede il risultato, nessun effetto automatico.",
    },
    logging: "Ogni chiamata è registrata per spazio, origine, modello e token.",
    people:
      "Dialoga direttamente con persone, informate che si tratta di un’IA.",
    roles: {
      chat: "Chat",
      standard: "Standard",
      lightweight: "Leggero",
      image: "Immagine",
      audio: "Audio",
      video: "Video",
      embeddings: "Embedding",
    },
    functions: {
      ai_field: {
        name: "Campi IA",
        description:
          "Generano il valore di una cella (testo, immagine, audio, video) a partire dagli altri campi della riga.",
      },
      agents: {
        name: "Agenti",
        description:
          "Assistenti che leggono i vostri dati e agiscono con strumenti, con convalida delle azioni di scrittura.",
      },
      workflow_ai: {
        name: "Automazioni con fase IA",
        description:
          "Generano o classificano contenuti all’interno di un’automazione.",
      },
      chat: {
        name: "Assistente chat",
        description:
          "Risponde alle domande e aiuta a costruire con i vostri dati.",
      },
      doc_search: {
        name: "Ricerca documentale",
        description:
          "Indicizza i vostri documenti e risponde a partire da essi.",
      },
      mcp: {
        name: "Server MCP",
        description:
          "Consente a client IA esterni di eseguire gli agenti e le automazioni che esponete.",
      },
      app_builder: {
        name: "Generazione di applicazioni",
        description:
          "Prepara interfacce e automazioni che rivedete prima dell’uso.",
      },
    },
  },
  ja: {
    title: "AIの透明性",
    description:
      "TblFlowのAI機能の公開ファクトシート：モデル、データ、人間による検証、ログ記録。",
    intro:
      "TblFlowは、限定リスクのAIシステムの提供者として、以下のAI機能を提供します（EU AI規則 第50条）。これらで構築した利用の責任は貴組織にあります。",
    models: "モデル（TblFlow AIプロファイルのロール）",
    readsYes: "スペースのデータを読み取る場合があります。",
    readsNo: "スペースのデータを読み取りません。",
    validation: {
      always: "人間による検証：常に、実行前に。",
      configurable: "人間による検証：設定可能（エージェントは既定で有効）。",
      not_applicable:
        "人間による検証：ユーザーが結果を確認し、自動的な影響はありません。",
    },
    logging:
      "すべての呼び出しをスペース、ソース、モデル、トークン別に記録します。",
    people: "人と直接対話し、AIであることが通知されます。",
    roles: {
      chat: "チャット",
      standard: "標準",
      lightweight: "軽量",
      image: "画像",
      audio: "音声",
      video: "動画",
      embeddings: "埋め込み",
    },
    functions: {
      ai_field: {
        name: "AIフィールド",
        description:
          "行の他のフィールドからセルの値（テキスト、画像、音声、動画）を生成します。",
      },
      agents: {
        name: "エージェント",
        description:
          "データを読み取りツールで動作するアシスタント。書き込み操作は承認制です。",
      },
      workflow_ai: {
        name: "AIステップ付きオートメーション",
        description: "オートメーション内でコンテンツを生成または分類します。",
      },
      chat: {
        name: "チャットアシスタント",
        description: "質問に答え、データを使った構築を支援します。",
      },
      doc_search: {
        name: "ドキュメント検索",
        description:
          "ドキュメントをインデックス化し、それに基づいて回答します。",
      },
      mcp: {
        name: "MCPサーバー",
        description:
          "外部のAIクライアントが、公開したエージェントとオートメーションを実行できるようにします。",
      },
      app_builder: {
        name: "アプリ生成",
        description:
          "インターフェースとオートメーションの草案を作成します。利用前にレビューしてください。",
      },
    },
  },
  ru: {
    title: "Прозрачность ИИ",
    description:
      "Публичные карточки функций ИИ TblFlow: модели, данные, проверка человеком, журналирование.",
    intro:
      "TblFlow предоставляет перечисленные ниже функции ИИ как поставщик систем ИИ ограниченного риска (Регламент ЕС об ИИ, статья 50). Ваша организация остаётся ответственной за сценарии, которые она с их помощью создаёт.",
    models: "Модели (роли профиля ИИ TblFlow)",
    readsYes: "Может читать данные вашего пространства.",
    readsNo: "Не читает данные вашего пространства.",
    validation: {
      always: "Проверка человеком: всегда, до любого действия.",
      configurable:
        "Проверка человеком: настраивается (для агентов включена по умолчанию).",
      not_applicable:
        "Проверка человеком: пользователь проверяет результат, автоматических действий нет.",
    },
    logging:
      "Каждый вызов журналируется по пространству, источнику, модели и токенам.",
    people:
      "Напрямую взаимодействует с людьми, которых уведомляют, что это ИИ.",
    roles: {
      chat: "Чат",
      standard: "Стандартная",
      lightweight: "Лёгкая",
      image: "Изображения",
      audio: "Аудио",
      video: "Видео",
      embeddings: "Эмбеддинги",
    },
    functions: {
      ai_field: {
        name: "Поля ИИ",
        description:
          "Создают значение ячейки (текст, изображение, аудио, видео) из других полей строки.",
      },
      agents: {
        name: "Агенты",
        description:
          "Ассистенты, которые читают ваши данные и действуют с помощью инструментов; действия записи подтверждаются.",
      },
      workflow_ai: {
        name: "Автоматизации с шагом ИИ",
        description: "Создают или классифицируют контент внутри автоматизации.",
      },
      chat: {
        name: "Чат-ассистент",
        description:
          "Отвечает на вопросы и помогает строить решения на ваших данных.",
      },
      doc_search: {
        name: "Поиск по документам",
        description: "Индексирует ваши документы и отвечает на их основе.",
      },
      mcp: {
        name: "Сервер MCP",
        description:
          "Позволяет внешним клиентам ИИ запускать агентов и автоматизации, которые вы открываете.",
      },
      app_builder: {
        name: "Генерация приложений",
        description:
          "Готовит интерфейсы и автоматизации, которые вы проверяете перед использованием.",
      },
    },
  },
  tr: {
    title: "Yapay zekâ şeffaflığı",
    description:
      "TblFlow yapay zekâ işlevlerinin herkese açık bilgi sayfaları: model, veri, insan doğrulaması, kayıt.",
    intro:
      "TblFlow, aşağıdaki yapay zekâ işlevlerini sınırlı riskli yapay zekâ sistemlerinin sağlayıcısı olarak sunar (AB Yapay Zekâ Tüzüğü, madde 50). Bunlarla kurduğunuz kullanımlardan kuruluşunuz sorumlu kalır.",
    models: "Modeller (TblFlow yapay zekâ profilinin rolleri)",
    readsYes: "Alanınızdaki verileri okuyabilir.",
    readsNo: "Alanınızdaki verileri okumaz.",
    validation: {
      always: "İnsan doğrulaması: her zaman, herhangi bir etkiden önce.",
      configurable:
        "İnsan doğrulaması: yapılandırılabilir (ajanlarda varsayılan olarak açık).",
      not_applicable:
        "İnsan doğrulaması: kullanıcı çıktıyı inceler, otomatik etki yoktur.",
    },
    logging: "Her çağrı alan, kaynak, model ve token bazında kaydedilir.",
    people:
      "İnsanlarla doğrudan etkileşir; kendilerine yapay zekâ olduğu bildirilir.",
    roles: {
      chat: "Sohbet",
      standard: "Standart",
      lightweight: "Hafif",
      image: "Görsel",
      audio: "Ses",
      video: "Video",
      embeddings: "Gömme",
    },
    functions: {
      ai_field: {
        name: "Yapay zekâ alanları",
        description:
          "Satırdaki diğer alanlardan bir hücre değeri (metin, görsel, ses, video) üretir.",
      },
      agents: {
        name: "Ajanlar",
        description:
          "Verilerinizi okuyan ve araçlarla işlem yapan asistanlar; yazma eylemleri onaya tabidir.",
      },
      workflow_ai: {
        name: "Yapay zekâ adımlı otomasyonlar",
        description: "Bir otomasyon içinde içerik üretir veya sınıflandırır.",
      },
      chat: {
        name: "Sohbet asistanı",
        description:
          "Soruları yanıtlar ve verilerinizle oluşturmaya yardım eder.",
      },
      doc_search: {
        name: "Belge arama",
        description: "Belgelerinizi dizinler ve onlardan yanıt verir.",
      },
      mcp: {
        name: "MCP sunucusu",
        description:
          "Harici yapay zekâ istemcilerinin paylaştığınız ajanları ve otomasyonları çalıştırmasını sağlar.",
      },
      app_builder: {
        name: "Uygulama üretimi",
        description:
          "Kullanmadan önce incelediğiniz arayüzler ve otomasyonlar taslağı hazırlar.",
      },
    },
  },
  uk: {
    title: "Прозорість ШІ",
    description:
      "Публічні картки функцій ШІ TblFlow: моделі, дані, перевірка людиною, журналювання.",
    intro:
      "TblFlow надає наведені нижче функції ШІ як постачальник систем ШІ обмеженого ризику (Регламент ЄС про ШІ, стаття 50). Ваша організація залишається відповідальною за сценарії, які вона з їхньою допомогою створює.",
    models: "Моделі (ролі профілю ШІ TblFlow)",
    readsYes: "Може читати дані вашого простору.",
    readsNo: "Не читає дані вашого простору.",
    validation: {
      always: "Перевірка людиною: завжди, перед будь-якою дією.",
      configurable:
        "Перевірка людиною: налаштовується (для агентів увімкнена за замовчуванням).",
      not_applicable:
        "Перевірка людиною: користувач переглядає результат, автоматичних дій немає.",
    },
    logging:
      "Кожен виклик журналюється за простором, джерелом, моделлю та токенами.",
    people: "Напряму взаємодіє з людьми, яких повідомляють, що це ШІ.",
    roles: {
      chat: "Чат",
      standard: "Стандартна",
      lightweight: "Легка",
      image: "Зображення",
      audio: "Аудіо",
      video: "Відео",
      embeddings: "Ембединги",
    },
    functions: {
      ai_field: {
        name: "Поля ШІ",
        description:
          "Створюють значення комірки (текст, зображення, аудіо, відео) з інших полів рядка.",
      },
      agents: {
        name: "Агенти",
        description:
          "Асистенти, які читають ваші дані та діють за допомогою інструментів; дії запису підтверджуються.",
      },
      workflow_ai: {
        name: "Автоматизації з кроком ШІ",
        description:
          "Створюють або класифікують вміст усередині автоматизації.",
      },
      chat: {
        name: "Чат-асистент",
        description:
          "Відповідає на запитання та допомагає будувати рішення на ваших даних.",
      },
      doc_search: {
        name: "Пошук за документами",
        description: "Індексує ваші документи та відповідає на їх основі.",
      },
      mcp: {
        name: "Сервер MCP",
        description:
          "Дозволяє зовнішнім клієнтам ШІ запускати агентів і автоматизації, які ви відкриваєте.",
      },
      app_builder: {
        name: "Генерація застосунків",
        description:
          "Готує інтерфейси та автоматизації, які ви перевіряєте перед використанням.",
      },
    },
  },
  zh: {
    title: "AI 透明度",
    description: "TblFlow AI 功能的公开说明：模型、数据、人工验证与日志记录。",
    intro:
      "TblFlow 作为有限风险 AI 系统的提供者，提供下列 AI 功能（欧盟《人工智能法案》第 50 条）。您的组织仍须对用这些功能构建的用途负责。",
    models: "模型（TblFlow AI 配置的角色）",
    readsYes: "可读取您空间中的数据。",
    readsNo: "不读取您空间中的数据。",
    validation: {
      always: "人工验证：始终，在产生任何影响之前。",
      configurable: "人工验证：可配置（智能体默认开启）。",
      not_applicable: "人工验证：由用户审阅输出，无自动影响。",
    },
    logging: "每次调用都按空间、来源、模型和令牌记录。",
    people: "直接与人交互，并告知对方这是 AI。",
    roles: {
      chat: "聊天",
      standard: "标准",
      lightweight: "轻量",
      image: "图像",
      audio: "音频",
      video: "视频",
      embeddings: "嵌入",
    },
    functions: {
      ai_field: {
        name: "AI 字段",
        description:
          "根据行中的其他字段生成单元格的值（文本、图像、音频、视频）。",
      },
      agents: {
        name: "智能体",
        description: "读取您的数据并使用工具执行操作的助手，写入操作须经批准。",
      },
      workflow_ai: {
        name: "含 AI 步骤的自动化",
        description: "在自动化中生成或分类内容。",
      },
      chat: {
        name: "聊天助手",
        description: "回答问题并帮助使用您的数据进行构建。",
      },
      doc_search: {
        name: "文档搜索",
        description: "为您的文档建立索引并据此作答。",
      },
      mcp: {
        name: "MCP 服务器",
        description: "允许外部 AI 客户端运行您开放的智能体和自动化。",
      },
      app_builder: {
        name: "应用生成",
        description: "起草界面和自动化，供您在使用前审阅。",
      },
    },
  },
};
