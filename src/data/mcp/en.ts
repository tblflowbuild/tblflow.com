import type { McpKey } from './fr';

const en = {
  nav: 'MCP server',
  'meta.title': 'Official MCP server: TblFlow in Claude',
  'meta.description':
    'Connect TblFlow to Claude in one click: the official MCP server reads and writes your data under your rights and the spaces you choose. Free tier included.',
  breadcrumb: 'MCP server',
  'hero.eyebrow': 'Official MCP server',
  'hero.title': 'Work on your TblFlow data from Claude.',
  'hero.subtitle':
    'Add TblFlow as a connector in Claude, sign in with your usual account and choose the spaces it can reach. Claude can then query, create and edit your records from the conversation.',
  'hero.cta.primary': 'See how to connect',
  'hero.cta.secondary': 'Read the documentation',
  'hero.note': 'Available from the Free tier, like the REST API.',
  'hero.url.label': 'Server URL',
  'benefits.title': 'What it changes',
  'benefits.1.title': 'Query your data',
  'benefits.1.body':
    "Ask Claude your questions: it reads your bases' schema, filters records and searches the knowledge graph, both semantic and full-text.",
  'benefits.2.title': 'Act from the conversation',
  'benefits.2.body':
    'Create and edit records, add a table or a field, trigger an automation or run an AI agent, without leaving Claude.',
  'benefits.3.title': 'Stay in control',
  'benefits.3.body':
    'When you connect, you choose the spaces and bases that are reachable and the permissions. Your existing TblFlow rights apply to every request.',
  'tools.title': '13 tools, in plain language',
  'tools.intro':
    'Here is what Claude can do. The most sensitive capabilities are options that you switch on when you connect.',
  'tools.1.title': 'Explore',
  'tools.1.body': 'List your spaces and your bases.',
  'tools.2.title': 'Understand',
  'tools.2.body': "Describe a base's schema.",
  'tools.3.title': 'Read',
  'tools.3.body': 'List, filter and read records.',
  'tools.4.title': 'Search',
  'tools.4.body': 'Search the knowledge graph, both semantic and full-text.',
  'tools.5.title': 'Create and edit',
  'tools.5.body': 'Create and edit records.',
  'tools.6.title': 'Delete',
  'tools.6.body':
    'Delete records: a preview first, then an explicit confirmation. Records go to the trash.',
  'tools.7.title': 'Structure',
  'tools.7.body': 'Create a table or a field.',
  'tools.8.title': 'Automate',
  'tools.8.body': 'Trigger an automation, if its owner has exposed it.',
  'tools.9.title': 'Delegate',
  'tools.9.body': 'Run an AI agent, if its owner has exposed it.',
  'tools.perm.read': 'Read (default)',
  'tools.perm.write': 'Write (option)',
  'tools.perm.delete': 'Delete (option)',
  'tools.perm.schema': 'Schema (option)',
  'tools.perm.trigger': 'Trigger (option)',
  'steps.title': 'Connect in three steps',
  'steps.1.title': 'Add a custom connector',
  'steps.1.body':
    'In Claude (web, desktop or mobile): Settings → Connectors → Add custom connector, then enter the server URL.',
  'steps.2.title': 'Sign in',
  'steps.2.body': 'Sign in with your usual TblFlow account (OAuth 2.1).',
  'steps.3.title': 'Choose the spaces',
  'steps.3.body':
    'Select the spaces and bases that are reachable, then the permissions. Read is on by default.',
  'steps.code.title': 'With Claude Code',
  'steps.code.body': 'One command is enough:',
  'control.title': 'What you control',
  'control.1':
    'You choose what Claude sees: spaces, bases and permissions. Read by default; write, delete, schema and trigger are options.',
  'control.2': 'Your existing TblFlow rights apply to every request.',
  'control.3':
    'Automations and agents can only be triggered if their owner has exposed them.',
  'control.4':
    'A deletion goes through a preview and then an explicit confirmation, and records go to the trash.',
  'control.5':
    'The content of conversations is not logged: only the tool called, the time, the duration and the status are kept. Tool results are passed to the assistant (Claude) to answer your request.',
  'control.6':
    'Designed along ISO 27001 and ISO 42001 practices, GDPR and the AI Act. This is a design approach: no certification has been obtained to date.',
  'limits.title': 'Rate limits by tier',
  'limits.intro':
    'The MCP server is included in every tier. Only the requests-per-minute limit changes.',
  'limits.col.tier': 'Tier',
  'limits.col.rate': 'Requests per minute',
  'status.title': 'Where to find it',
  'status.body':
    'The server is published in the official MCP registry as com.tblflow/tblflow (version 1.0.0). Submission to the Claude connectors directory is coming. ChatGPT is not supported yet.',
  'faq.title': 'Frequently asked questions',
  'faq.1.q': 'Who sees my data?',
  'faq.1.a':
    'You choose the spaces and bases that are reachable when you connect, and your TblFlow rights apply to every request. Tool results are passed to the assistant (Claude) to answer your request. TblFlow does not log the content of conversations: only the tool called, the time, the duration and the status are kept.',
  'faq.2.q': 'Can I revoke access?',
  'faq.2.a':
    'Yes. Remove the connector in Claude settings: Claude stops accessing your TblFlow data.',
  'faq.3.q': 'Is ChatGPT supported?',
  'faq.3.a':
    'Not yet. The server is published in the official MCP registry (com.tblflow/tblflow, version 1.0.0) and connects to Claude. Submission to the Claude connectors directory is coming.',
  'faq.4.q': 'Is the MCP server available on the Free plan?',
  'faq.4.a':
    'Yes, from the Free tier, like the REST API. Only the rate limit changes: 60, 120, 300 and 600 requests per minute for Free, Pro, Business and Enterprise.',
  'faq.5.q': 'What can Claude do with my automations and agents?',
  'faq.5.a':
    'It can only trigger them if their owner has exposed them. For an automation, run_automation runs a dry run with sample data: no data is modified.',
  'home.line': 'Connect TblFlow to Claude — official MCP server',
  'home.card.title': 'Claude',
  'home.card.body':
    'Query and edit your TblFlow data from the conversation, under your rights and the spaces you choose.',
  'home.card.cta': 'Discover the MCP server',
  'pricing.row': 'MCP server: requests / minute',
  'pricing.highlight': 'MCP server included: {n} requests / minute',
  'privacy.heading': 'MCP server',
  'privacy.p1':
    "This section describes the processing specific to TblFlow's MCP server (https://app.tblflow.com/mcp), which lets an AI assistant such as Claude reach your TblFlow space. The server is part of the application: its documents (terms, privacy policy, data processing agreement) are published on app.tblflow.com.",
  'privacy.p2':
    'Data processed: when you connect, your TblFlow identity (OAuth 2.1) and the spaces, bases and permissions you choose; on each call, the data in your space that the requested tool reads or writes, within your rights.',
  'privacy.p3':
    'Purpose: to carry out the actions you ask the assistant for and to keep the service secure.',
  'privacy.p4':
    'Retention: the content of conversations is not logged. An audit log keeps only the tool called, the time, the duration and the status of the call, for a period limited to what security and audit require.',
  'privacy.p5':
    'Sharing: tool results are passed to the assistant you connected (for example Claude, from Anthropic), which processes them to answer your request under its own privacy policy. Only connect spaces whose content you accept to have passed to the assistant.',
  'privacy.p6':
    'Framework: the server is designed along ISO 27001 and ISO 42001 practices, GDPR and the AI Act. No certification has been obtained to date.',
  'privacy.p7':
    'Your rights (access, rectification, erasure, restriction, objection, portability, and the right to lodge a complaint with the supervisory authority) apply to this processing as described above. Data protection contact:',
} as const satisfies Record<McpKey, string>;

export default en;
