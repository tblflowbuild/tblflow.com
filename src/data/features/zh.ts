import type { FeaturesCopy } from './types';

const zh = {
  nav: '功能',
  metaTitle: '功能：TblFlow 的全部功能',
  metaDescription:
    '数据表、界面、自动化、白板、AI 智能体、文档、权限、GDPR 与 AI Act 审计：TblFlow 功能目录一览。',
  eyebrow: '功能',
  title: 'TblFlow 为您做的一切。',
  subtitle:
    'TblFlow 根据您的流程生成七类资源，以及围绕它们的各项功能：权限、可掌控的 AI、与您现有工具的连接。',
  availability: '部分功能是否可用取决于所选套餐。',
  pricingLink: '查看价格',
  home: {
    title: 'TblFlow 能做的一切',
    body: '数据表、界面、自动化、白板、智能体、文档、权限、审计：完整的功能目录，分为四大类。',
    link: '查看全部功能',
  },
  groups: {
    build: {
      title: 'TblFlow 为您生成的内容',
      intro: '七类资源，依据您的流程图谱创建。上线之前由您先审阅。',
    },
    team: {
      title: '多人协作，掌控在您手中',
      intro: '每个人只能看到和操作您所决定的内容，发生过的一切都可追溯。',
    },
    ai: {
      title: '由您掌控的 AI',
      intro: '服务提供商、上下文、用量和审计：AI 始终在您的掌控之中。',
    },
    connect: {
      title: '连接您的工具，随时可投入生产',
      intro: '您的其他工具保持连接，发布之前先进行测试。',
    },
  },
  items: {
    tables: {
      title: '自带 API 的数据表',
      body: '数据表建立在真正的 PostgreSQL 之上，每一张都可以通过 REST API 访问。',
    },
    interfaces: {
      title: '可在线发布的界面',
      body: '基于您的数据表构建的界面，可以发布到线上。',
    },
    automations: {
      title: '自动化',
      body: '用一连串动作取代重复录入。创建时处于未启用状态：由您审阅后再启用。',
    },
    whiteboards: {
      title: '白板',
      body: '数据库内的协作白板，用于绘制示意图、共同思考，并可获得 AI 的协助。',
    },
    browsers: {
      title: '浏览器自动化',
      body: '对于没有 API 的网站，由 AI 操控的浏览器（computer use）在您同意后替您重复执行该任务。',
    },
    agents: {
      title: 'AI 智能体',
      body: '负责明确任务的智能体，使用您授予的工具和权限，在您的规则和审批之下工作。',
    },
    docs: {
      title: 'AI 建立索引的文档 (DocIndex)',
      body: '您的文档会被建立索引，既可按含义也可按字词搜索，供 AI 和您的智能体查阅。',
    },
    permissions: {
      title: '量身定制的权限',
      body: '由您定义的精细角色和权限，适用于每一次请求，包括来自 AI 的请求。',
    },
    invitations: {
      title: '同事与外部人员',
      body: '邀请同事或公司以外的人员，只开放您选定的访问权限。',
    },
    orgchart: {
      title: '公司组织架构图',
      body: '导入公司的组织架构图，让 TblFlow 反映您的组织结构。',
    },
    tokens: {
      title: '个人访问令牌',
      body: '每位用户都可以创建并管理自己的令牌来调用 API。',
    },
    myNotifications: {
      title: '按您的方式接收通知',
      body: '每位用户自行设置要接收的通知。',
    },
    logs: {
      title: '操作日志',
      body: '记录您的空间中执行过的操作，方便查看发生了什么。',
    },
    providers: {
      title: '由您选择的 AI 服务提供商',
      body: 'TblFlow 不绑定任何 AI 服务提供商：可接入贵公司使用的提供商，或个人账户。',
    },
    context: {
      title: '了解您业务背景的 AI',
      body: '助手了解您空间的结构（数据库、字段、流程），并据此作答。',
    },
    usage: {
      title: '您的 AI 用量',
      body: '随时查看 AI 在您的空间中的消耗。',
    },
    aiAct: {
      title: 'AI Act 审计',
      body: 'AI 生成的方案会被自动审计，帮助您准备欧盟 AI 法规所涉及的义务。这不能替代法律意见。',
    },
    gdpr: {
      title: '自动 GDPR 审计',
      body: '对您所构建的内容进行自动 GDPR 审计，找出需要处理的事项。',
    },
    designMd: {
      title: '用 design.md 体现您的品牌规范',
      body: '导入您的 design.md 文件：AI 会据此让生成的界面遵循您的品牌规范。',
    },
    skills: {
      title: 'Skills：生成与导入',
      body: '生成或导入 Skills，为您的智能体提供可复用的专业能力。',
    },
    connectors: {
      title: 'API 连接器生成器',
      body: '借助 AI，为没有现成连接器的工具创建通往其 API 的连接器。',
    },
    oauth: {
      title: 'OAuth 应用',
      body: '通过 OAuth 连接您的应用，无需分享密码。',
    },
    mcp: {
      title: 'MCP，覆盖 AI 执行任务的每个环节',
      body: '接入 MCP 服务器：可用于 AI 聊天、自动化和智能体。TblFlow 也有自己的 MCP 服务器。',
    },
    chatNotifications: {
      title: 'Slack、Teams、Google Chat 通知',
      body: '在团队使用的即时通讯工具中接收 TblFlow 的通知。',
    },
    email: {
      title: '自动化发送的电子邮件',
      body: '设置从自动化中发送电子邮件。',
    },
    preprod: {
      title: '预生产空间',
      body: '在正式启用之前，先在独立的空间中测试您的方案。',
    },
  },
} satisfies FeaturesCopy;

export default zh;
