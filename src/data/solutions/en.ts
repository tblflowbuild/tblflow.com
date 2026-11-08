import type { SolutionsLocale } from './types';

/**
 * Copy (en), translated from fr.ts of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const en = {
  ui: {
    forNav: 'Who is it for?',
    useCasesNav: 'Use cases',
    forIndex: {
      metaTitle: 'Who is TblFlow for? Finance, sales admin, industry, retail',
      metaDescription:
        'TblFlow is for small and mid-sized businesses that re-enter the same data from tool to tool: executives, finance, sales admin, industry, retail and firms.',
      title: 'Who is it for?',
      subtitle:
        'For businesses that run on Excel and a dozen tools. Each role re-enters something different: here is what TblFlow changes for yours.',
    },
    useCasesIndex: {
      metaTitle: 'TblFlow use cases: quote to cash, purchasing, close, stock',
      metaDescription:
        'Six end-to-end flows where the same data is re-entered from tool to tool, and how TblFlow maps and automates them, with agents under your approval.',
      title: 'Use cases',
      subtitle:
        'Six flows where the same information passes from hand to hand and tool to tool. For each one: what it costs today, and what TblFlow does with it.',
    },
    today: 'Today',
    withTblflow: 'With TblFlow',
    journeyTitle: 'How TblFlow takes it over',
    limitsTitle: 'What TblFlow does not do',
    promptsTitle: 'What you would ask TblFlow',
    promptsNote: 'Requests written in your own words. The AI proposes; nothing is activated without your approval.',
    faqTitle: 'Frequently asked questions',
    useCasesFor: 'Use cases',
    audiencesFor: 'Who it is for',
    planNote:
      'Mapping one process is free, estimated costs included. The full map, Replace and the monthly report are included from the Essential plan.',
    cta: 'Get started',
    secondaryCta: 'See the Process map',
    example: 'Example',
    more: 'Learn more',
  },

  useCases: {
    'quote-to-cash': {
      nav: 'From quote to cash',
      card: 'Quote, order, invoice and reminder without re-entry between tools.',
      metaTitle: 'From quote to cash without re-entry | TblFlow',
      metaDescription:
        'The quote in Word, the order in Excel, the invoice elsewhere: TblFlow links quote, order, invoice and reminder in one database, with agents under your approval.',
      eyebrow: 'Use case · Sales and invoicing',
      title: 'From quote to cash, without retyping the same amount four times',
      subtitle:
        'The accepted quote becomes the order, the order prepares the invoice, the overdue invoice triggers the reminder. One entry, at the start.',
      flow: {
        steps: [
          { title: 'Quote', tool: 'Word', after: 'human' },
          { title: 'Order', tool: 'Excel', after: 'automation' },
          { title: 'Invoice', tool: 'Google Sheets', after: 'automation' },
          { title: 'Reminder', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · €4,820',
        calc: '40 quotes per month × 3 re-entries × 10 minutes ≈ 20 hours per month.',
      },
      problem: {
        title: 'The same customer, the same amount, four times',
        body: 'The quote starts in Word, the order is copied into a spreadsheet, the invoice takes over the lines by hand and reminders are sent from memory. Every copy is a chance for error, and nobody can see at a glance what is still to be collected.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your invoicing procedure',
          body: 'Your invoicing procedure and reminder rules, as PDF or Markdown, are indexed in DocIndex. The tools you keep stay connected.',
        },
        {
          label: 'Map',
          title: 'See where the amount is retyped',
          body: 'Start from the “Customer invoicing” process type in the library: request, order check, preparation, approval of large amounts, sending, due-date tracking, reminder, payment. Enter your volumes: TblFlow estimates the cost of each step.',
        },
        {
          label: 'Build',
          title: 'One database for quotes, orders and invoices',
          body: 'TblFlow generates the tables and their links: the customer, the quote, the order and the invoice are entered only once. Your existing data is imported from your CSV or Excel files.',
        },
        {
          label: 'Automate, then delegate',
          title: 'The rule to an automation, the reminder to an agent',
          body: 'When a quote moves to “Accepted”, an automation creates the order and prepares the invoice. An agent chases overdue invoices according to your procedure: it prepares the messages, you approve them.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'A quote tracker', body: 'By status, from draft to acceptance, with the amount and the customer linked.' },
          { title: 'A customer payment schedule', body: 'Upcoming, overdue and paid invoices, with what is still to be collected this month.' },
          { title: 'Prepared reminders', body: 'An agent that follows your procedure and submits each reminder to you before it is sent.' },
        ],
      },
      limits:
        'TblFlow does not keep your accounting and does not issue compliant electronic invoices. Your invoice is sent from your invoicing tool; TblFlow keeps the link between the quote, the order, the invoice and the reminder, and what is still to be collected.',
      prompts: [
        'When a quote moves to “Accepted”, create the order with the same lines and notify sales admin.',
        'List invoices more than 30 days overdue and prepare a reminder for each, following our procedure.',
        'Show me what is still to be collected this month, by customer.',
      ],
      faq: [
        {
          q: 'Do I have to give up my invoicing software?',
          a: 'No. TblFlow links the steps and keeps the tracking; the invoice can keep going out from your current tool. If that tool publishes an API, TblFlow can connect to it.',
        },
        {
          q: 'Do reminders go out on their own?',
          a: 'No. The agent prepares each reminder from your procedure and your tables, and you approve it before it is sent. Nothing is activated without your approval.',
        },
        {
          q: 'Can I bring in my existing quotes and invoices?',
          a: 'Yes. Import your CSV or Excel files into an existing table or a new one.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'From need to supplier payment',
      card: 'Purchase requests, orders, receipts and supplier invoices linked together.',
      metaTitle: 'Purchasing and supplier invoices without re-entry | TblFlow',
      metaDescription:
        'Purchase request, order, receipt, supplier invoice: TblFlow links each step in a single database and prepares the matching, under your approval.',
      eyebrow: 'Use case · Purchasing and accounts payable',
      title: 'From need to supplier payment, every invoice matched to its order',
      subtitle:
        'The request becomes the order, the receipt confirms what arrived, and the invoice is matched to the order before it goes to payment.',
      flow: {
        steps: [
          { title: 'Purchase request', tool: 'Email', after: 'human' },
          { title: 'Supplier order', tool: 'Excel', after: 'automation' },
          { title: 'Receipt', tool: 'Paper slip', after: 'human' },
          { title: 'Supplier invoice', tool: 'Accounting software', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · €2,340',
        calc: '60 supplier invoices per month × 3 re-entries × 6 minutes ≈ 18 hours per month.',
      },
      problem: {
        title: 'The invoice arrives, nobody can find the order',
        body: 'The purchase request is in an email, the order in a spreadsheet, the goods receipt on paper. When the invoice arrives, you have to search everywhere to know whether it matches what was ordered and received.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your purchasing rules',
          body: 'Approval thresholds, approved suppliers, signing chain: your rules are indexed in DocIndex and serve as context for the agents.',
        },
        {
          label: 'Map',
          title: 'See where the order is copied',
          body: 'Start from the “Purchasing and procurement” process type: need, approval, quote, offer comparison, order, receipt, matching with the invoice, payment. TblFlow estimates the cost of each step from your volumes.',
        },
        {
          label: 'Build',
          title: 'Requests, orders, receipts and invoices linked',
          body: 'The “Financial management” template provides the supplier invoice and expense report tables. A request is entered through a form, and the order and invoice stay linked to it.',
        },
        {
          label: 'Automate, then delegate',
          title: 'The matching proposed, the decision kept',
          body: 'An automation creates the order as soon as the request is approved. Drop the supplier invoice into the AI Chat: it proposes the lines, an agent matches them to the order and the receipt, and you approve before payment.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'A purchase request form', body: 'The right fields, the right approver depending on the amount, a status visible to everyone.' },
          { title: 'A supplier invoice register', body: 'Each invoice linked to its order and its receipt, with its due date.' },
          { title: 'A check before payment', body: 'Gaps between ordered, received and invoiced flagged before the invoice goes to payment.' },
        ],
      },
      limits:
        'TblFlow does not pay your suppliers: the transfer is made from your bank. It does not automatically read scanned invoices; the AI Chat proposes the lines from the invoice you upload, and you approve them. It does not do bank reconciliation.',
      prompts: [
        'Create a purchase request form with a different approver above €1,500.',
        'Match this supplier invoice to order BC-1187 and its receipt, and flag the gaps.',
        'List the supplier invoices to pay this week, including those with a gap.',
      ],
      faq: [
        {
          q: 'Does TblFlow read PDF invoices?',
          a: 'The AI Chat reads the invoice you upload and proposes the matching records; nothing is created before you accept. It is not an automatic bulk reading of scanned invoices.',
        },
        {
          q: 'Does my accounting software stay in place?',
          a: 'Yes. TblFlow handles the flow before accounting: request, order, receipt, checks. Accounting entries stay in your software.',
        },
        {
          q: 'Can we require approval above a given amount?',
          a: 'Yes: status, amount and approver are fields; an automation notifies the right approver according to the threshold you set.',
        },
      ],
    },

    'financial-close': {
      nav: 'Close and financial reporting',
      card: 'Margins, EBITDA and budget versus actual, without copying exports every month.',
      metaTitle: 'Month-end close and EBITDA without copied sheets | TblFlow',
      metaDescription:
        'Import your accounting exports, let formulas recalculate margins, EBITDA and budget versus actual, and receive a summary to approve each month.',
      eyebrow: 'Use case · Finance and management control',
      title: 'Month-end close without copying the same exports into the same spreadsheets',
      subtitle:
        'Your accounting exports land in a database; margins, EBITDA and the variance to budget are recalculated; the month’s summary is prepared for management.',
      flow: {
        steps: [
          { title: 'Trial balance export', tool: 'Accounting software', after: 'human' },
          { title: 'Formatting', tool: 'Excel', after: 'automation' },
          { title: 'Margins and EBITDA', tool: 'Excel', after: 'automation' },
          { title: 'Monthly summary', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: 'October trial balance · 186 lines',
        calc: '1 close per month × 4 files copied × 1 h 30 min ≈ 6 hours per month.',
      },
      problem: {
        title: 'Every month, the same copy-pastes',
        body: 'The trial balance export is copied into a reprocessing file, then into the margin table, then into the management presentation. One broken formula or one forgotten line, and the figure presented is no longer the right one.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your close procedure',
          body: 'Your close calendar and reprocessing rules are indexed in DocIndex: your teams consult them, and the agents use them.',
        },
        {
          label: 'Map',
          title: 'See where the figures are copied',
          body: 'Start from the “Month-end close” process type: bank statements, bank reconciliation, invoice entry, chasing supporting documents, adjustments, review, trial balance, presentation to management.',
        },
        {
          label: 'Build',
          title: 'Tables that calculate for you',
          body: 'Import the trial balance or general ledger as CSV each month. Formulas and rollups calculate the margin per engagement, EBITDA and the variance to budget; charts and a reporting interface display them.',
        },
        {
          label: 'Automate, then delegate',
          title: 'The summary prepared, the commentary approved',
          body: 'An automation recalculates and notifies you as soon as the import is done. An agent drafts the month’s summary from the tables: variances, items to watch. You review it before it goes out.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'A margin table', body: 'By engagement, project or customer, based on the “Financial management” template.' },
          { title: 'An EBITDA and budget tracker', body: 'The month’s actuals against budget, with the variances that exceed your threshold.' },
          { title: 'A monthly summary', body: 'Prepared by an agent from your tables, reviewed by you before distribution.' },
        ],
      },
      limits:
        'TblFlow is not accounting software: it does not keep journal entries and does not connect to your bank. EBITDA and margins are calculated by your formulas, from the exports you import.',
      prompts: [
        'Import the October trial balance and recalculate EBITDA and the variance to budget.',
        'Show the margin by customer over the last three months, from highest to lowest.',
        'Write the month’s summary for management: variances, items above budget, points to decide.',
      ],
      faq: [
        {
          q: 'Does TblFlow calculate EBITDA by itself?',
          a: 'There is no ready-made EBITDA calculation: you define it once with formulas and rollups, on your own accounts, and it recalculates at every import.',
        },
        {
          q: 'Do I need to connect the accounting software?',
          a: 'No. A CSV export of the trial balance or general ledger is enough. If your software publishes an API, TblFlow can generate a connector to automate the import.',
        },
        {
          q: 'Who sees the amounts?',
          a: 'Permissions are set by role and by field: you choose who reads the amounts, who edits them, and who cannot see them.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: 'From stock to shipping',
      card: 'Inventories, thresholds, restocking and picking in a single database.',
      metaTitle: 'Stock, inventories and restocking without re-entry | TblFlow',
      metaDescription:
        'Cycle counts, threshold alerts, restock orders, picking and shipping: TblFlow links your items, your movements and your orders, under your approval.',
      eyebrow: 'Use case · Stock and logistics',
      title: 'From stock to shipping, without recounting in three files',
      subtitle:
        'The count updates the stock, the threshold triggers restocking, the customer order goes to picking. Quantities are no longer retyped.',
      flow: {
        steps: [
          { title: 'Count', tool: 'Paper sheet', after: 'human' },
          { title: 'Stock variances', tool: 'Excel', after: 'automation' },
          { title: 'Restocking', tool: 'Supplier email', after: 'agent' },
          { title: 'Picking', tool: 'Carrier website', after: 'human' },
        ],
        rekeyed: 'Ref. A-204 · 36 units',
        calc: '150 items counted per month × 2 re-entries × 2 minutes ≈ 10 hours per month.',
      },
      problem: {
        title: 'Stock that is right one day a month',
        body: 'The count is done on paper, the variances are copied into a spreadsheet, the restock order goes out by email. Between two inventories, nobody really knows what is left, and a stock-out is discovered when it is time to pick.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your stock rules',
          body: 'Thresholds, suppliers, lead times, picking rules: indexed in DocIndex, they serve as context for the agents.',
        },
        {
          label: 'Map',
          title: 'See where quantities are copied',
          body: 'Start from the “Cycle count”, “Restocking and supplier order” and “Picking and shipping” process types. TblFlow estimates the cost of each step from your volumes.',
        },
        {
          label: 'Build',
          title: 'Items, movements and inventories linked',
          body: 'The “Stock management” template provides items, movements, locations, suppliers, restock orders and physical inventories, with the stock value and threshold alerts.',
        },
        {
          label: 'Automate, then delegate',
          title: 'The threshold alerts, the agent prepares the order',
          body: 'An automation calculates inventory variances and flags items below the threshold. An agent prepares the restock order with the right supplier; you approve it before it is sent.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'Up-to-date stock', body: 'Every receipt and every issue recorded as a movement, the stock value calculated.' },
          { title: 'Cycle counts', body: 'The items to count, the entry of counts and the variances to recount.' },
          { title: 'Prepared restocking', body: 'The items below the threshold and a draft supplier order to approve.' },
        ],
      },
      limits:
        'TblFlow is not warehouse management software: it does not read barcodes, does not handle picking on radio terminals and does not track stock in real time. It does not produce carrier labels.',
      prompts: [
        'List the items below their restock threshold and prepare one order per supplier.',
        'Create this week’s cycle count: the 30 best-selling items.',
        'Show the variances from the last inventory above 5%, with their value.',
      ],
      faq: [
        {
          q: 'Can we scan barcodes?',
          a: 'No. The EAN code is a field on the item, but TblFlow does not read barcodes. Counts are entered by keyboard or through a form.',
        },
        {
          q: 'Does TblFlow replace my ERP?',
          a: 'No. It handles what the ERP or spreadsheets cover poorly: cycle counts, thresholds, restocking, variance tracking. If your ERP publishes an API, TblFlow can connect to it.',
        },
        {
          q: 'Do restock orders go out on their own?',
          a: 'No. The agent prepares the order; you approve it before it goes to the supplier.',
        },
      ],
    },

    quality: {
      nav: 'Quality and non-conformities',
      card: 'Inspections, non-conformities and corrective actions tracked end to end.',
      metaTitle: 'Non-conformities and corrective actions, paperless | TblFlow',
      metaDescription:
        'Inspection, decision, corrective action: TblFlow links each non-conformity to its batch, rework cost and action, and prepares reminders under your approval.',
      eyebrow: 'Use case · Quality and production',
      title: 'Every non-conformity tracked through to its corrective action',
      subtitle:
        'The inspection records the deviation, the batch is blocked, the decision is traced, the corrective action is chased until it is closed. No more forms lost between the workshop and the office.',
      flow: {
        steps: [
          { title: 'Inspection', tool: 'Paper form', after: 'human' },
          { title: 'Recording', tool: 'Excel', after: 'automation' },
          { title: 'Decision', tool: 'Email', after: 'human' },
          { title: 'Corrective action', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Lot 2611-B · 12 parts',
        calc: '30 non-conformities per month × 3 re-entries × 8 minutes ≈ 12 hours per month.',
      },
      problem: {
        title: 'The workshop form does not reach the office',
        body: 'The inspector fills in a form, someone copies it into a spreadsheet, the decision is made by email and the corrective action lives in another file. The cost of the rework and the cause get lost along the way.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your quality procedures',
          body: 'Inspection plans, acceptance criteria, decision chain: indexed in DocIndex, they guide the agents.',
        },
        {
          label: 'Map',
          title: 'Put a figure on what rework costs',
          body: 'Start from the “Quality control and non-conformities” process type: samples, measurements, results, batch accepted or not, blocking, causes, decision, corrective action. The error rate and the rework cost are part of the estimate.',
        },
        {
          label: 'Build',
          title: 'A register linked to batches',
          body: 'Each non-conformity is linked to its batch, its supplier or its workstation, with its cause and its decision: rework, scrap or waiver.',
        },
        {
          label: 'Automate, then delegate',
          title: 'The decision stays human, the follow-up is no longer lost',
          body: 'The inspection form creates the record and notifies the manager. The decision remains a person’s. An agent chases overdue corrective actions and prepares the month’s summary.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'An inspection form', body: 'Filled in at the workshop, it creates the non-conformity without copying.' },
          { title: 'A non-conformity register', body: 'By batch, cause, decision and rework cost.' },
          { title: 'A corrective action tracker', body: 'Owner, due date, reminder and closure.' },
        ],
      },
      limits:
        'TblFlow is not a certified document management system or shop-floor control software: it does not control machines and does not replace your certified quality system. It links inspections, decisions and actions.',
      prompts: [
        'Create an inspection form that records the batch, the measurement and a photo of the part.',
        'List overdue corrective actions and prepare a reminder for each owner.',
        'Show the cost of rework by supplier over the quarter.',
      ],
      faq: [
        {
          q: 'Can the decision on a batch be automatic?',
          a: 'You can automate the blocking of a batch according to a rule, but the decision to rework, scrap or grant a waiver remains a person’s.',
        },
        {
          q: 'Can we attach photos from the workshop?',
          a: 'Yes: the form accepts attachments, and the public form opens on a phone.',
        },
        {
          q: 'Does TblFlow replace our quality system?',
          a: 'No. It tracks non-conformities and actions; your certified document system stays in place.',
        },
      ],
    },

    procedures: {
      nav: 'Your procedures, finally up to date',
      card: 'Indexed procedures, reviewed on time, and answers drawn from your documents.',
      metaTitle: 'Up-to-date, searchable internal procedures | TblFlow',
      metaDescription:
        'Upload your procedures, TblFlow indexes them, alerts you when a review is overdue, and agents answer from your documents.',
      eyebrow: 'Use case · Internal documentation',
      title: 'Procedures you can find, review on time, and that the AI uses',
      subtitle:
        'Your procedures are indexed in DocIndex, attached to the processes on the map, reviewed on time thanks to alerts, and serve as context for the agents.',
      flow: {
        steps: [
          { title: 'Writing', tool: 'Word', after: 'human' },
          { title: 'Distribution', tool: 'Shared folder', after: 'automation' },
          { title: 'Review', tool: 'Calendar reminder', after: 'automation' },
          { title: 'A colleague’s question', tool: 'Email', after: 'agent' },
        ],
        rekeyed: 'Reminders procedure v3',
        calc: '20 questions per week × 5 minutes ≈ 7 hours per month.',
      },
      problem: {
        title: 'The right version is somewhere',
        body: 'Procedures sit in a shared folder, in several versions. Nobody knows which one is current, the review is forgotten, and the same questions keep coming back by email.',
      },
      journey: [
        {
          label: 'Understand',
          title: 'Upload your documents as they are',
          body: 'PDF, Word, Markdown: DocIndex indexes them for semantic and full-text search. Your teams search in their own words.',
        },
        {
          label: 'Map',
          title: 'Attach each procedure to its process',
          body: 'On the map, each process has its procedure sheet, its owner and its next review date.',
        },
        {
          label: 'Build',
          title: 'A living knowledge base',
          body: 'Procedures, their versions and their owners brought together, searchable by the whole team according to their permissions.',
        },
        {
          label: 'Automate, then delegate',
          title: 'Reviews reminded, questions answered',
          body: 'Every Monday, an email lists the procedures whose review is overdue or coming up. Agents rely on your indexed procedures to answer and to act according to your rules.',
        },
      ],
      build: {
        title: 'What you build',
        items: [
          { title: 'A procedure base', body: 'Indexed, searchable, attached to the processes on the map.' },
          { title: 'Reviews on schedule', body: 'An owner and a review date per procedure, with a weekly alert.' },
          { title: 'Agents that follow your rules', body: 'They read your procedures before proposing an action.' },
        ],
      },
      limits:
        'TblFlow is not certified electronic document management: no electronic signature and no regulated document approval workflow. It indexes your procedures and attaches them to your processes.',
      prompts: [
        'Find the most recent customer reminder procedure and summarize it in five steps.',
        'List procedures with no owner or whose review is overdue.',
        'Answer this colleague’s question from our procedures, with the source.',
      ],
      faq: [
        {
          q: 'Which formats are indexed?',
          a: 'PDF, Word, PowerPoint, Markdown and text documents. The text of PDF, Word and PowerPoint files is extracted and indexed.',
        },
        {
          q: 'Who sees which procedures?',
          a: 'Your workspace permissions apply: everyone sees only what their role allows them to read.',
        },
        {
          q: 'Does the AI make up answers?',
          a: 'Agents search your indexed procedures and show you the source. Always check before acting on an important answer.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Executives',
      card: 'See what re-entry costs, and decide what to hand off.',
      metaTitle: 'TblFlow for executives: see what your re-entry costs',
      metaDescription:
        'A map of your processes with their estimated costs, the list of processes where you lose the most, a printable executive view and a monthly report.',
      eyebrow: 'Who it is for · Executives',
      title: 'See what your re-entry costs you, then decide what to hand off',
      subtitle:
        'You know your teams spend time copying. TblFlow shows you where, how much, and what can be automated or handed to agents.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'Invisible hours', body: 'The same information retyped from one tool to the next appears in no dashboard.' },
          { title: 'Duplicate tools', body: 'A dozen subscriptions, and nobody knows which ones are still useful.' },
          { title: 'Decisions made blind', body: 'Figures arrive late, copied over, and everyone has their own version.' },
        ],
      },
      build: {
        title: 'What you get',
        items: [
          { title: 'A map of your processes', body: 'Who does what, with which tool, where information is re-entered, and the estimated costs.' },
          { title: '“Where are you losing money?”', body: 'Your processes ranked by potential gain, to choose where to start.' },
          { title: 'An executive view and a monthly report', body: 'Cost, potential gain, overdue reviews: a printable page and an email on the 1st of the month.' },
        ],
      },
      faq: [
        {
          q: 'Are the costs measured?',
          a: 'No: they are estimates based on the volumes and rates you enter. You can then enter actual measurements to compare estimated and actual.',
        },
        {
          q: 'Do we have to migrate everything at once?',
          a: 'No. Start with one process. The tools you keep stay connected, and what TblFlow generates stays inactive until you have approved it.',
        },
        {
          q: 'What happens to my team?',
          a: 'Repetitive tasks go to automations and agents; your teams keep the customer relationship, advice and decisions.',
        },
      ],
    },

    finance: {
      nav: 'Finance and accounting',
      card: 'Purchasing, invoices, close and reporting without copying exports.',
      metaTitle: 'TblFlow for finance: invoices and close without re-entry',
      metaDescription:
        'For the CFO, management control and accounting: supplier invoices matched, customer payment schedule, margins and EBITDA recalculated, monthly summary prepared.',
      eyebrow: 'Who it is for · Finance and accounting',
      title: 'The financial reporting that is missing between your accounting and your spreadsheets',
      subtitle:
        'Your accounting software keeps the entries. TblFlow takes over everything around them: purchasing, invoices, reminders, reprocessing and management tables.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'Invoices without orders', body: 'You have to find the request, the order and the receipt before paying.' },
          { title: 'Copied exports', body: 'Every month, the trial balance passes from file to file all the way to the presentation.' },
          { title: 'Reminders from memory', body: 'Nobody can see at a glance what is still to be collected.' },
        ],
      },
      build: {
        title: 'What you build',
        items: [
          { title: 'A supplier invoice workflow', body: 'Request, order, receipt and invoice linked, checked before payment.' },
          { title: 'A payment schedule and reminders', body: 'Customer invoices tracked through to payment, reminders prepared by an agent.' },
          { title: 'Up-to-date margins and EBITDA', body: 'Recalculated at every import, with a monthly summary to review.' },
        ],
      },
      faq: [
        {
          q: 'Is TblFlow accounting software?',
          a: 'No. It does not keep journal entries, does not issue compliant electronic invoices and does not do bank reconciliation. It links the steps around your accounting.',
        },
        {
          q: 'How does accounting data come in?',
          a: 'Through a CSV export of the trial balance or general ledger, imported into a table. If your software publishes an API, TblFlow can generate a connector.',
        },
        {
          q: 'Are the amounts protected?',
          a: 'Permissions are set by role and by field: you decide who reads, who edits and who cannot see the amounts.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Sales administration',
      card: 'From quote to invoice without copying orders.',
      metaTitle: 'TblFlow for sales admin: quote to invoice without re-entry',
      metaDescription:
        'Quotes, orders, invoices and reminders linked in a single database: sales admin enters once, automations do the rest, agents prepare the reminders.',
      eyebrow: 'Who it is for · Sales administration',
      title: 'Enter the order once, not in every tool',
      subtitle:
        'The accepted quote becomes the order, the order prepares the invoice, the overdue invoice is chased. Sales admin keeps the customer relationship, not the data entry.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'The retyped order', body: 'The accepted quote is copied into the orders spreadsheet, then into the invoice.' },
          { title: 'Pricing errors', body: 'Every copy is a chance to pick the wrong line or discount.' },
          { title: 'The customer who waits', body: 'To know where their order stands, you have to open three files.' },
        ],
      },
      build: {
        title: 'What you build',
        items: [
          { title: 'A quote-to-order pipeline', body: 'The quote status triggers the order, with the same lines.' },
          { title: 'An order tracker', body: 'Where each order stands, visible to the whole team according to their permissions.' },
          { title: 'Reminders ready to go', body: 'An agent prepares reminders according to your procedure; you approve.' },
        ],
      },
      faq: [
        {
          q: 'Can we keep our CRM?',
          a: 'Yes. The tools you keep stay connected. TblFlow also includes a “Sales and customer relations” template if you want to bring everything together.',
        },
        {
          q: 'Can customers place orders themselves?',
          a: 'A public form can feed your orders. There are no customer accounts with their own permissions.',
        },
        {
          q: 'How long does it take to get started?',
          a: 'One process can be mapped for free. Tables are generated from the map, and your existing data is imported as CSV or Excel.',
        },
      ],
    },

    manufacturing: {
      nav: 'Industry and production',
      card: 'Quality, procurement and stock managed around the ERP.',
      metaTitle: 'TblFlow for industry: quality, procurement, stock, ERP',
      metaDescription:
        'Non-conformities, materials procurement, stock and shipping linked around your ERP, with the cost of rework estimated and agents under your approval.',
      eyebrow: 'Who it is for · Industry and production',
      title: 'Run the workshop around your ERP, without replacing it',
      subtitle:
        'Your ERP manages production. TblFlow takes over what still circulates on paper and in spreadsheets: inspections, non-conformities, thresholds, restocking and reminders.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'Paper forms', body: 'Inspections and deviations entered twice, between the workshop and the office.' },
          { title: 'Rework with no figure on it', body: 'The cost of non-conformities is reported nowhere.' },
          { title: 'Material stock-outs', body: 'The threshold is crossed before anyone sees it.' },
        ],
      },
      build: {
        title: 'What you build',
        items: [
          { title: 'A quality register', body: 'Non-conformities linked to batches, causes, decisions and corrective actions.' },
          { title: 'Tracked procurement', body: 'Thresholds, requests, orders and material receipts linked.' },
          { title: 'A costed map of the workshop', body: 'Error rate, rework cost and the “manufacturing order” vocabulary on the map.' },
        ],
      },
      faq: [
        {
          q: 'Does TblFlow do scheduling or MRP?',
          a: 'No. It does not plan production and does not track the workshop in real time; the map describes your processes, it does not run them. It takes over the flows around the ERP.',
        },
        {
          q: 'Can we use the factory’s vocabulary?',
          a: 'Yes: the “Industry and logistics” preset shows “manufacturing order” in place of “order” on the map.',
        },
        {
          q: 'Can our ERP be connected?',
          a: 'If it publishes an API, TblFlow can generate a connector from its documentation. For a tool without an API, a recorded web task can be replayed.',
        },
      ],
    },

    retail: {
      nav: 'Retail and distribution',
      card: 'Stock, restocking, orders and after-sales in a single database.',
      metaTitle: 'TblFlow for retail: stock, restocking and after-sales',
      metaDescription:
        'Cycle counts, threshold alerts, restock orders, picking and after-sales linked in a single database, where agents prepare and you approve.',
      eyebrow: 'Who it is for · Retail and distribution',
      title: 'Stock, restocking and after-sales in a single database',
      subtitle:
        'Items, movements, orders and returns in one place. The threshold alerts, the agent prepares the restock, you approve.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'Stock-outs found too late', body: 'The stock is only right at the time of the inventory.' },
          { title: 'Supplier orders by hand', body: 'Each restock is an email written from a spreadsheet.' },
          { title: 'Scattered after-sales', body: 'Warranty, return, repair: each step in a different tool.' },
        ],
      },
      build: {
        title: 'What you build',
        items: [
          { title: 'Stock tracked by movements', body: 'The “Stock management” template: items, movements, stock value, threshold alerts.' },
          { title: 'Prepared restocking', body: 'The items below the threshold and a draft order per supplier, to approve.' },
          { title: 'An after-sales tracker', body: 'Request, warranty, diagnosis, return and closure linked to the order.' },
        ],
      },
      faq: [
        {
          q: 'Does TblFlow connect to my online store?',
          a: 'There is no built-in e-commerce connector. If your platform publishes an API, TblFlow can generate a connector; otherwise, orders are imported as CSV.',
        },
        {
          q: 'Can we read barcodes?',
          a: 'No. The EAN code is a field on the item, but there is no barcode reading.',
        },
        {
          q: 'Where should we start?',
          a: 'With the cycle count or restocking: two process types ready to import onto the map, and a base stock template.',
        },
      ],
    },

    firms: {
      nav: 'Firms and services',
      card: 'Engagements, files, time and invoicing without copied spreadsheets.',
      metaTitle: 'TblFlow for firms: engagements, files and margins',
      metaDescription:
        'For consulting, accounting and legal: engagements and files tracked, margin per engagement, invoicing and reminders, indexed procedures.',
      eyebrow: 'Who it is for · Firms and services',
      title: 'Your engagements and your files, from the engagement letter to payment',
      subtitle:
        'Each engagement or file linked to its client, its time spent, its invoice and its margin. The firm’s procedures indexed, reminders prepared.',
      pains: {
        title: 'What it costs you today',
        items: [
          { title: 'Guessed margins', body: 'Time spent and invoicing live in separate files.' },
          { title: 'Scattered files', body: 'Documents, deadlines and reminders for supporting documents sit in the inbox.' },
          { title: 'Procedures passed on by word of mouth', body: 'The firm’s know-how lives in the heads of a few people.' },
        ],
      },
      build: {
        title: 'What you build',
        items: [
          { title: 'An engagement tracker', body: 'The “Financial management” template: engagements and projects with their gross margin.' },
          { title: 'Files and deadlines', body: 'Each file, its documents, its deadlines and its reminders in one place.' },
          { title: 'The firm’s procedures', body: 'Indexed in DocIndex, attached to processes, used by agents.' },
        ],
      },
      faq: [
        {
          q: 'Can the vocabulary be the firm’s own?',
          a: 'Yes: the “Services and consulting” and “Accounting and legal” presets show “engagement” or “file” on the map.',
        },
        {
          q: 'Can we share a tracker with a client?',
          a: 'Yes, read-only by link or through a public form. There is no client portal with accounts and permissions specific to each client.',
        },
        {
          q: 'Does client data stay with us?',
          a: 'It lives in a real PostgreSQL database, exportable, and TblFlow can be self-hosted with the Enterprise plan.',
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default en;
