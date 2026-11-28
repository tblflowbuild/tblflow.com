---
title: "Plans and limits"
translationKey: "plans-limits"
description: "TblFlow's four plans (Free, Essential, Team, Enterprise) and their limits: people, bases, rows, storage, monthly quotas, AI credits and trial."
section: "Guides"
order: 18
---

Every TblFlow space is on a plan. The plan sets the number of people, bases and rows, the storage, the monthly run quotas and the AI credits included. This page describes those limits and what happens when one of them is reached. Prices are on the [Pricing](/en/pricing) page, which is the reference.

## Where to see your plan

Open the space settings, then the **Subscription** tab. It shows the current plan, the four plans with their limits, and the free viewer counter for your space. AI credits are tracked in the **AI usage** tab, which is reserved for the space owner. Other space settings are described in [Space settings](/en/docs/space-settings).

The plans are called **Free**, **Essential**, **Team** and **Enterprise**.

## People and viewers

The price is set per space, not per person: each plan includes a number of people.

| | Free | Essential | Team | Enterprise |
|---|---|---|---|---|
| People included | 2 | 5 | 15 | 50 |
| Free viewers | 2 | 10 | 30 | unlimited |
| Extra people available to buy | no | up to 30 | up to 30 | up to 50 |

A person counts as **billable** if they are an owner, creator or editor of the space (see [Permissions](/en/docs/permissions)). The viewer and commenter roles share a single free viewer counter. Beyond that counter, each viewer takes up an included or extra person; if the space is full, the addition is refused.

To add extra people on your current paid plan, enter the number in **Extra people** then click **Save**. This setting is unavailable during the trial. The **Manage my subscription** button opens the payment portal, where you manage the payment method, invoices and cancellation. It stays inactive until the space has made a payment.

## Content limits

| | Free | Essential | Team | Enterprise |
|---|---|---|---|---|
| Bases per space | 1 | 5 | 30 | unlimited |
| Rows per table | 5,000 | 100,000 | 1,000,000 | unlimited |
| Base storage | 1 GB | 100 GB | 500 GB | unlimited |
| Media library, total | 200 MB | 20 GB | 100 GB | unlimited |
| Media library, per file | 25 MB | 200 MB | 500 MB | 500 MB |
| Free spaces per person | 1 | unlimited | unlimited | unlimited |

The Process map (see [Process map](/en/docs/process-map)) does not count toward the bases of the space. On the Free plan, it is in diagnostic mode: a single process. Paid plans have the full map.

Some features also depend on the plan:

| | Free | Essential | Team | Enterprise |
|---|---|---|---|---|
| Domain verification | no | yes | yes | yes |
| Audit log | no | no | yes | yes |
| Advanced permissions | no | no | yes | yes |
| Custom domain | no | no | yes | yes |

## Monthly quotas

These quotas measure what runs. Each counter resets to zero at the start of each month (UTC calendar).

| Per month | Free | Essential | Team | Enterprise |
|---|---|---|---|---|
| Agent runs | 100 | 5,000 | 50,000 | unlimited |
| Automation runs | 500 | 25,000 | 250,000 | unlimited |
| Automation emails | 50 | 2,000 | 20,000 | unlimited |
| Connector calls | 1,000 | 50,000 | 500,000 | unlimited |
| Computer use minutes | 30 | 600 | 3,000 | unlimited |
| Computer use replays | 10 | 200 | 1,000 | unlimited |
| AI tokens | 2,000,000 | 100,000,000 | 1,000,000,000 | unlimited |
| AI images | 20 | 500 | 5,000 | unlimited |
| AI sounds | 20 | 500 | 5,000 | unlimited |
| AI videos | 0 | 20 | 200 | unlimited |

Connector calls are actual calls: responses served from the cache do not count. The Free plan does not include AI videos (capped at 0). Automations and agents are described in [Automations](/en/docs/automations) and [AI agents](/en/docs/ai-agents).

The note shown in the **Subscription** tab gives an order of magnitude: a source synchronized every 15 minutes for the live map uses about 3,000 automation runs per month, plus its connector calls.

## AI credits

AI credits pay for the AI provided by TblFlow. Calls made with your own key do not consume them. They are granted each month according to the plan:

| | Free | Essential | Team | Enterprise |
|---|---|---|---|---|
| AI credits included per month | 0 | 4,000 | 15,000 | 40,000 |

To get more, the **AI usage** tab offers:

- **Per-user option**: 5,000 credits per month for each person you tick;
- **Shared pool**: a monthly pool of 20,000 or 100,000 credits;
- **Monthly cap per member**: limits how many shared credits and top-ups a member can consume (empty: no cap);
- **Top up credits**: top-ups of 5,000, 20,000 or 100,000 credits, as a one-time payment with no expiry. The credits are available as soon as the payment is confirmed.

The per-user option and the pool are subscribed to once the paid plan is active. Prices are on the [Pricing](/en/pricing) page. 1,000 credits correspond to 1 US dollar of actual model cost. The tab also shows the balance, consumption per user and per source, and the history of movements.

## Welcome credit

A new Free space, created without starting the trial, receives 200 AI credits once. This credit has no expiry date and is added to the balance of top-ups. It is spent only if the AI provided by TblFlow is active and credit metering applies; otherwise, it has no effect.

Conditions:

- it is granted only once per email address;
- a business address receives only one per domain, across all addresses on that domain; public email services only have the per-address limit;
- the trial and the welcome credit share the same per-address limit: a person receives one or the other, not both;
- it applies only to spaces created after its introduction: an existing space does not receive it.

With your own key, you spend none of it. When it is used up, top up credits or use your own key.

## When a limit is reached

| Limit | What happens |
|---|---|
| Bases | Creation is refused: "Your plan allows at most N bases." |
| Rows per table | Adding rows is refused: "Maximum row limit N exceeded". |
| People | The **People limit reached** window opens. The owner can click **Add a person** (if the plan still sells extra people) or **Upgrade**. Another member is invited to alert the administrator. |
| Storage | File uploads are refused: "Your plan's storage limit is reached". The calculation relies on the last recorded measurement. |
| Media library file | A file that is too large or a total that is exceeded is refused. |
| Free space | A second Free space is refused: the free plan allows a single space. |
| Monthly quota | The run is refused: "Your monthly quota for … is used up." It resumes the following month. |
| AI credits | "Your AI credits are used up. Buy a top-up to continue." |

For a monthly quota, the space owner receives an email at 80%, at 90% and when it is used up, except for a quota of 0, which means "not included". When the app shows the **Limits exceeded** window, its **Upgrade** button opens the **Subscription** tab.

## Essential trial

A space can start with a 14-day Essential trial. A banner shows **Essential trial: N days left**, with the **Upgrade to Essential** button. During the trial, the limits are those of Essential, except for four reduced caps: 10,000,000 AI tokens, 60 minutes of computer use, 200 automation emails and 2 AI videos per month. The trial receives a one-time AI credit grant of 1,000 credits, with no expiry, and not the monthly allotment. This credit replaces the welcome credit: it is granted only once per email address and per business domain.

Without a subscription at the end of the trial, the space goes back to the Free plan. No data is deleted: whatever exceeds the Free plan limits becomes read-only until a subscription is taken out.

## Subscribe, change plan, billing

From the **Subscription** tab, choose **Monthly** or **Annual** (when both are offered), then **Subscribe** and follow the payment steps. For a space that is already subscribed, the button becomes **Change plan**. A confirmation states that the subscription changes immediately, at the same billing rhythm; the prorated amount appears on the next invoice and the extra people are adjusted to the space's headcount. Moving to a plan too small for the number of people in the space is refused: remove collaborators first.

The **Invoices and credit notes** section lists your documents, downloadable as **PDF** or **Factur-X**. If your SIREN is missing, the tab asks you to enter it: without it, your invoices cannot be sent to you.

## Enterprise plan, on quote

Enterprise is taken on quote. On the plan card, the **Request a quote** button opens a public form: **Work email**, **Company**, **Team size**, **Your need**, and optionally **Tools to connect** and **Preferred AI**. Click **Send request**.

You then receive a link to the proposal. The page shows its number, the commitment (monthly with no commitment, annual, 2 years or 3 years), the deployment (shared server, dedicated cloud or on-premises), the quote lines and the total excluding tax. To accept, tick the acceptance of the general terms of sale on behalf of the company, then click **I accept**: you are redirected to secure payment, by card or SEPA direct debit. If the proposal cannot be accepted, the page gives the reason. A link that is invalid or replaced by a more recent send shows "Quote not found".
