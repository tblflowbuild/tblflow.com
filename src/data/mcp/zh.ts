import type { McpKey } from './fr';

const zh = {
  nav: 'MCP 服务器',
  'meta.title': '官方 MCP 服务器：在 Claude 中使用 TblFlow',
  'meta.description':
    '一键将 TblFlow 连接到 Claude：官方 MCP 服务器按您的权限和您选定的空间读写数据。从免费版起即可使用。',
  breadcrumb: 'MCP 服务器',
  'hero.eyebrow': '官方 MCP 服务器',
  'hero.title': '在 Claude 中处理您的 TblFlow 数据。',
  'hero.subtitle':
    '在 Claude 中添加 TblFlow 连接器，用您常用的账户登录，并选择可访问的空间。之后 Claude 就可以在对话中查询、创建和修改您的记录。',
  'hero.cta.primary': '查看连接方法',
  'hero.cta.secondary': '阅读文档',
  'hero.note': '与 REST API 一样，从免费版起即可使用。',
  'hero.url.label': '服务器 URL',
  'benefits.title': '带来的改变',
  'benefits.1.title': '查询您的数据',
  'benefits.1.body':
    '向 Claude 提问：它会读取数据库的结构，筛选记录，并在 knowledge graph 中进行语义搜索和全文搜索。',
  'benefits.2.title': '在对话中执行操作',
  'benefits.2.body':
    '无需离开 Claude，即可创建和修改记录、添加表或字段、触发自动化或运行 AI 智能体。',
  'benefits.3.title': '由您掌控',
  'benefits.3.body':
    '连接时，由您选择可访问的空间、数据库和权限。每次请求都适用您在 TblFlow 中的权限。',
  'tools.title': '13 个工具，通俗易懂',
  'tools.intro':
    '以下是 Claude 能做的事。较敏感的功能是选项，需要您在连接时启用。',
  'tools.1.title': '浏览',
  'tools.1.body': '列出您的空间和数据库。',
  'tools.2.title': '了解',
  'tools.2.body': '描述数据库的结构。',
  'tools.3.title': '读取',
  'tools.3.body': '列出、筛选和读取记录。',
  'tools.4.title': '搜索',
  'tools.4.body': '在 knowledge graph 中进行语义搜索和全文搜索。',
  'tools.5.title': '创建和修改',
  'tools.5.body': '创建和修改记录。',
  'tools.6.title': '删除',
  'tools.6.body':
    '删除记录：先预览，再明确确认。记录会进入回收站。',
  'tools.7.title': '搭建结构',
  'tools.7.body': '创建表或字段。',
  'tools.8.title': '自动化',
  'tools.8.body': '触发自动化，前提是其所有者已将其开放。',
  'tools.9.title': '委派',
  'tools.9.body': '运行 AI 智能体，前提是其所有者已将其开放。',
  'tools.perm.read': '读取（默认）',
  'tools.perm.write': '写入（选项）',
  'tools.perm.delete': '删除（选项）',
  'tools.perm.schema': '结构（选项）',
  'tools.perm.trigger': '触发（选项）',
  'steps.title': '三步完成连接',
  'steps.1.title': '添加自定义连接器',
  'steps.1.body':
    '在 Claude（网页版、桌面版或移动端）中：设置 → 连接器 → 添加自定义连接器，然后输入服务器 URL。',
  'steps.2.title': '登录',
  'steps.2.body': '使用您常用的 TblFlow 账户登录（OAuth 2.1）。',
  'steps.3.title': '选择空间',
  'steps.3.body':
    '选择可访问的空间和数据库，再选择权限。读取权限默认开启。',
  'steps.code.title': '使用 Claude Code',
  'steps.code.body': '一条命令即可：',
  'control.title': '您可以控制的内容',
  'control.1':
    '由您决定 Claude 能看到什么：空间、数据库和权限。默认只读；写入、删除、结构和触发都是选项。',
  'control.2': '每次请求都适用您现有的 TblFlow 权限。',
  'control.3':
    '只有所有者已开放的自动化和智能体才能被触发。',
  'control.4':
    '删除需要先预览，再明确确认，记录会进入回收站。',
  'control.5':
    '不会记录对话内容：只保留所调用的工具、时间、时长和状态。工具返回的结果会传给助手（Claude），以回应您的请求。',
  'control.6':
    '按照 ISO 27001 和 ISO 42001 的实践以及 GDPR 和 AI Act 进行设计。这只是一种设计思路：目前尚未获得任何认证。',
  'limits.title': '各套餐的速率限制',
  'limits.intro':
    'MCP 服务器包含在每个套餐中。只有每分钟请求数的上限不同。',
  'limits.col.tier': '套餐',
  'limits.col.rate': '每分钟请求数',
  'status.title': '在哪里找到',
  'status.body':
    '该服务器已发布在官方 MCP 注册表中，名称为 com.tblflow/tblflow（版本 1.0.0）。提交至 Claude 连接器目录的工作即将进行。目前尚不支持 ChatGPT。',
  'faq.title': '常见问题',
  'faq.1.q': '谁能看到我的数据？',
  'faq.1.a':
    '连接时由您选择可访问的空间和数据库，每次请求都适用您在 TblFlow 中的权限。工具返回的结果会传给助手（Claude），以回应您的请求。TblFlow 不记录对话内容：只保留所调用的工具、时间、时长和状态。',
  'faq.2.q': '我可以撤销访问权限吗？',
  'faq.2.a':
    '可以。在 Claude 的设置中删除该连接器：Claude 将不再访问您的 TblFlow 数据。',
  'faq.3.q': '是否支持 ChatGPT？',
  'faq.3.a':
    '暂不支持。该服务器已发布在官方 MCP 注册表中（com.tblflow/tblflow，版本 1.0.0），可连接到 Claude。提交至 Claude 连接器目录的工作即将进行。',
  'faq.4.q': '免费版可以使用 MCP 服务器吗？',
  'faq.4.a':
    '可以，从免费版起即可使用，与 REST API 一样。只有速率限制不同：免费版、Essential、团队版和企业版分别为每分钟 60、120、300 和 600 次请求。',
  'faq.5.q': 'Claude 能对我的自动化和智能体做什么？',
  'faq.5.a':
    '只有所有者已开放它们时，Claude 才能触发。对于自动化，run_automation 会用示例数据进行试运行：不会修改任何数据。',
  'home.line': '将 TblFlow 连接到 Claude — 官方 MCP 服务器',
  'home.card.title': 'Claude',
  'home.card.body':
    '在对话中查询和修改您的 TblFlow 数据，遵循您的权限和您选定的空间。',
  'home.card.cta': '了解 MCP 服务器',
  'pricing.row': 'MCP 服务器：请求数 / 分钟',
  'pricing.highlight': '包含 MCP 服务器：{n} 次请求 / 分钟',
  'privacy.heading': 'MCP 服务器',
  'privacy.p1':
    '本节说明 TblFlow MCP 服务器（https://app.tblflow.com/mcp）特有的数据处理。该服务器使 Claude 等 AI 助手能够访问您的 TblFlow 空间。服务器是应用的一部分：其文件（条款、隐私政策、数据处理协议）发布在 app.tblflow.com。',
  'privacy.p2':
    '处理的数据：连接时，为您的 TblFlow 身份（OAuth 2.1）以及您选择的空间、数据库和权限；每次调用时，为所请求的工具在您的权限范围内读取或写入的空间数据。',
  'privacy.p3':
    '目的：执行您要求助手进行的操作，并保障服务的安全。',
  'privacy.p4':
    "保存期限：对话内容以及工具的参数和结果从不被记录。审计日志会为每次工具调用保存用户标识、工具名称、时间、以毫秒计的耗时和状态（成功或错误），保存 6 个月，之后自动清除。通过动态注册且未被使用的 OAuth 客户端会在 30 天后清除。",
  'privacy.p5':
    '共享：工具返回的结果会传给您所连接的助手（例如 Anthropic 的 Claude），由其依据自身的隐私政策处理，以回应您的请求。请仅连接那些您同意将其内容传给助手的空间。',
  'privacy.p6':
    '框架：该服务器按照 ISO 27001 和 ISO 42001 的实践以及 GDPR 和 AI Act 进行设计。目前尚未获得任何认证。',
  'privacy.p7':
    '对于这些数据处理，您的权利（访问、更正、删除、限制处理、反对、数据可携带，以及向监管机构投诉）按上文所述行使。数据保护联系方式：',
} as const satisfies Record<McpKey, string>;

export default zh;
