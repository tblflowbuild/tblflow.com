---
title: "AI Chat"
translationKey: "ai-chat"
description: "Use a base's AI Chat: @ mentions, input settings, proposals you validate before writing, full app generation, browser skills and knowledge base."
section: "Guides"
order: 14
---

AI Chat is a side panel, on the right of the base. You ask it questions about your data, or ask the assistant to create tables, views, automations, interfaces or agents. For a change request, it does not act on its own: it prepares a **proposal** that you accept or reject.

## Opening the panel

The **AI Chat** button is in the view toolbar. A second button with the same name is in the base sidebar, for people who can edit the base. The panel is closed on your first visit; after that, your last choice (open or closed) is kept.

While the conversation is empty, the panel offers suggestions (for example "Create a CRM for me"). Clicking a suggestion copies it into the input without sending it: you can edit it before you send.

Enter sends the message, Shift + Enter adds a line break. A message can contain up to 100,000 characters.

## Conversations

- **New conversation** clears the panel and starts from scratch.
- **History** lists your conversations (the fifty most recent) and lets you search them by title. You only see your own conversations, attached to the base you have open.

## Mentioning a table, a view or a field

Type `@` in the input to open a picker. It offers three groups: **Tables**, **Views** and **Fields**, taken from the bases of the space you can read. Choosing an item inserts it into the message as a chip, and the assistant then knows which item you mean.

A few rules:

- Only tables, views and fields can be mentioned. Records, automations or interfaces cannot.
- A message accepts at most 20 mentions.
- Pasting the address of a TblFlow table into the input inserts a mention of that table directly.
- The server checks every mention again: the item must belong to the space, and you must have the right to read its table. Otherwise the mention is refused with the message "This mention is not accessible: remove it or choose an item from the list".
- Mentions are not sent when you talk to a specific agent.

## Adjusting the input

The bar under the text area groups the settings for the message.

| Setting | Effect |
|---|---|
| **Result type** | Limits what the assistant can propose: **Table**, **Interface**, **Automation**, **Agent** or **Sample data**. Without a choice, it is "Up to the AI". Except for **Table**, these types require a table to already exist in the base. |
| Model (provider icon) | Opens the list of available models, grouped by provider. Hover over the icon to expand it. The list depends on the models configured for the base. |
| **Thinking** | **Fast** (quicker answers, fewer credits), **Normal** (the usual model setting) or **Deep** (the model reasons longer, up to 8,000 extra thinking tokens, so more credits). **Deep** is reserved for the Team and Enterprise plans. |
| **Web search** | A toggle for the current conversation. It stays greyed out until web search is configured. |
| **Attach files** | Images and PDFs, up to 10 per message. The button is greyed out if the chosen model does not accept files. |
| **Dictate a message** | Voice input, using your browser's speech recognition. The button only appears if the browser offers it. |

A **Context window** gauge estimates how much of the model's memory the conversation already uses.

AI usage is counted in credits; the thinking level affects that consumption. The volumes included in each plan are listed in [Plans and limits](/en/docs/plans-limits).

## What the assistant can do

**Read, without approval.** The assistant reads the structure of the space, the table schemas and the records directly, calculates aggregates and searches the knowledge base. It can also generate an Excel, Word, PowerPoint or PDF file.

**Propose, with approval.** To change anything, it issues a proposal shown in the chat as a card. Proposals cover in particular:

- creating a base, a table, a view or a folder;
- renaming a table or a field, linking two tables;
- creating or editing a record;
- deleting a field;
- creating an interface, an automation or an agent, or generating the code of an application;
- creating or editing a document in the knowledge base, linking two documents.

On each card, you read the preview, then click **Accept** or **Reject**. Nothing is written before you accept, and accepting checks your rights again: the assistant cannot do what you are not allowed to do.

A deletion proposal requires an explicit confirmation (**Confirm deletion**). The card shows whether the resource can be restored from the trash and what depends on it (linked or computed fields, views, automations, interfaces).

**What it does not do.** The chat has no tool to delete records or tables. A simple question, for example "How do I create a table?", gets a written answer and triggers no proposal.

Agents and their proposals are described in [AI agents](/en/docs/ai-agents).

## Creating with AI outside the chat

Two entry points open a short generation window without going through the panel:

- **Create with AI**, in the add-table menu of the sidebar, for a table;
- **Generate with AI**, at the top of the editor when creating a field: the window then lets you choose between a **Field** and a **Button**.

You describe what you want, then **Generate** shows a preview. Nothing is created until you click **Create**; **Edit request** returns to the input.

## Generating a full application

In the input, **Full app** switches the chat to generation mode. You describe the application, and the assistant builds it in steps that you validate:

1. analysing the request, then the **Tables**;
2. the **Relations**;
3. the **Interface**, the **Automations**, the **Views**, the totals and the **Sample data**;
4. linking and checking the data, then an **AI agent**.

Each step produces proposals. **Accept all** validates them at once, and **Edit** lets you adjust the current step as long as no proposal in it has been accepted. The **Auto** option lets the AI accept and chain the following steps; it stops if a step fails.

At the end, a report lists what was created and flags the automations that are still inactive: they do not run until you activate them. For what comes next (publishing, domain), see [Build your first app](/en/docs/build-first-app).

## Project assistant

In the add-table menu, at the root of the base, **Project assistant** installs three tables in the base, **People**, **Projects** and **Tasks** (French names for an interface in French), as well as an agent named "Project assistant". You need the right to create tables in the base.

The agent is scheduled from Monday to Friday at 7:30 a.m. It prepares the agenda for the day's meetings, suggests due-date markers in the calendar, and lists tasks with no owner. Its writes (updating a project, creating a calendar event) always go through an approval. Installing it a second time does not recreate the tables already present.

## Browser skills

A browser skill records a path through a website, then replays it on demand. It is created with **New browser skill**, under "Other resources" in the add menu. This feature is not enabled on every instance.

1. **Open the session**: a remote browser starts on the server, you see its screen live and you click and type in it. A session lasts 15 minutes at most and closes after 2 minutes of inactivity.
2. Go to the starting page, then click **Record**. Every click, keystroke and scroll becomes a step. **Stop** ends the recording.
3. **Replay** runs the steps again in a separate browser and shows a report: steps executed, or the step that failed.

Around the recording:

- **Steps** lists the steps, lets you remove one or correct a typed text.
- **Credentials** stores a password, a 2FA code or a security key. They are encrypted, replayed by reference, and never returned to the page or passed to the AI model. A credential is attached to the base: anyone who can edit the base can use it to sign in, without seeing its value.
- **Comment** turns on the microphone to explain your actions. The text, not the audio, is kept until the skill is validated, then deleted.
- **Analyse** derives a skill from the recording: a goal, inputs, business rules, each one with the sentence it comes from. Review them, then **Validate the skill**. Re-recording makes it obsolete.
- **Replay with data** applies the validated skill to values you provide, instead of repeating the actions exactly as recorded.

To run a skill from an automation, add the **Drive a website** step (see [Automations](/en/docs/automations)). It requires a validated skill and the permission to act unattended, granted in the skill.

## Knowledge base

The space's document library is reached through the "DocIndex" icon in the space sidebar. There you create documents and folders, or import PDF, DOCX, TXT, MD and CSV files (50 MB at most for a PDF, 25 MB for the others). Importing requires the right to edit the space. Each document shows its status: **Indexing…**, then **Indexed**.

Search offers three modes: **Semantic**, **Keyword** and **Hybrid**. Semantic search requires an embeddings provider to be configured for the space; without one, search is limited to keywords, and the chat replies that no provider is configured.

The chat assistant queries this base when you ask it to. Agents have the **Search knowledge base** tool ([AI agents](/en/docs/ai-agents)), and external assistants have the `search_knowledge` tool of the [MCP server](/en/docs/mcp-server).
