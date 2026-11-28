---
title: "Connectors"
translationKey: "connectors"
description: "Connect TblFlow to an external service: accounts, API keys, operations, sync to a table, the New item trigger and required rights."
section: "Guides"
order: 13
---

A connector links TblFlow to an external service: an account (Gmail, Slack…), an API reached with a key, or a PostgreSQL database. Your columns, tables, automations and agents can then use it.

## Where to find them

In a base, open **Automate**, then the **Connectors** tab. Two views:

- **Yours**: the accounts, APIs and databases already connected;
- **Discover**: what you can add, with a search and categories (Messaging, CRM, Productivity…).

The **Create with AI** button creates a connector from an API's documentation. This page does not describe it.

## Connecting

### An account (OAuth)

In **Discover**, click the **+** button of the service (tooltip "Connect" followed by the name): a window from the service opens to authorize your account. You can give it an **Account name** to recognize it. Then **Reconnect** and **Disconnect** are available in the connector's panel. Disconnecting stops whatever uses the account (automations, columns, agents) until it is reconnected.

If the server has no OAuth application for a service, that service appears under **Not configured (admin)**. A space administrator can then enter the organization's OAuth application in the **Advanced** section of the sign-in window.

### An API with a key

API connectors are in the **Catalog** section of **Discover**. An API connector is first installed (**Install**), then connected (**Connect**): you paste your key, and the address of your account if it is asked for. TblFlow checks at once that the key responds.

The **Account used** setting chooses between a **Shared account** for the whole space and an **Account of each user**. With a shared account, all calls go through a single account, connected by a space manager.

### A PostgreSQL database

The **PostgreSQL** connector reads the tables of an existing database, read-only. No write is sent.

## Operations

The panel of a connector lists **What it allows**. Each operation is of one of the three following kinds:

| Kind | Meaning |
|---|---|
| **Read** | Reads a single item from a value |
| **List** | Returns a list of items |
| **Act** | Creates, changes or sends something at the service |

The **Test** button runs an operation from the panel. An operation is then used in four places (section **Where to use it**): a connected column, a synced table, an automation (step **Call an operation**) or an agent, which can call operations as tools.

For a connector installed from the catalog, the **Allow writes** setting is off by default. When off, operations that create, change or delete something at the service are refused everywhere (automations, buttons, agents); reads continue.

## Syncing to a table

A synced table imports a list from the service, then keeps it up to date: each item becomes a row.

1. Turn on the connector, then open its panel, section **Where to use it** → **Synced table**.
2. Choose the base, then **Create a synced table**.
3. Choose the **Connector** and the **List** (an operation that returns a list). A **Preview** shows the first items.
4. Select the **Columns** (types: Text, Long text, Number, Checkbox, Date, Link, Email) and the **Unique identifier**, which finds each item again from one sync to the next.
5. Set the **Sync**: every 15 minutes, every hour, every 6 hours, every day, or manual.
6. Choose what happens to **Missing items** (**Keep rows** or **Delete rows**), the **Maximum number of items** and the **Mode**, then **Create table**.

The **Incremental** mode only rereads items changed since the last sync, and the whole list every 7 days by default. It is only accepted if the connector declares it for that list. The **Full** mode rereads the whole list each time. Without another setting, reading stops at 5,000 items; the adjustable maximum is 50,000. A synced table has 100 columns at most. If the limit stops the reading, a message says so.

The table's **Sync** menu shows the status, and offers **Sync now**, **Resync everything** and **Stop sync** (the table and its rows are kept).

By default, the table is read-only. The **Send changes back to the API** option offers **After approval by a base administrator** or **Automatically, on each change**; it requires that writes be allowed for the connector.

## Triggering an automation: "New item"

In an [automation](/en/docs/automations), the **New item in a connector** trigger runs the automation once for each new item in a list.

- Choose the connector, a list whose items have an identifier, its parameters, and the **Check** frequency: 15 minutes, 1 hour, 6 hours or 1 day.
- The first reading remembers the items already present without running anything. Only items that appear afterwards trigger the automation.
- The fields of the item are read with `{{item.<path>}}`.
- A reading runs 50 executions at most and goes through 5 pages at most.

## Connectors offered in Discover

### Accounts (OAuth)

| Account | What the panel shows |
|---|---|
| Gmail | Search and read emails, send an email |
| Google Calendar | List events, create an event |
| Google Drive | Search files, read a file's information |
| Google Meet | Create a meeting link |
| Google Chat | List spaces, post a message |
| Slack | List channels, read a channel's messages, send a message |
| GitHub | List and read issues, create issues, list pull requests, comment |
| Outlook | List emails, send an email |
| Microsoft Teams | List your teams and their channels, read, post and reply, create a meeting |
| Discord | Read your profile, list your servers |

### API with a key

| Connector | What it allows | What to provide |
|---|---|---|
| Make | Read your organizations, teams and scenarios, their status and blueprint (read-only) | A Make API token (scopes `scenarios:read` and `teams:read`) and the address of your zone |
| n8n | Read your workflows and their executions, on an n8n Cloud instance | An n8n API key and the address of your instance |
| HubSpot | Read, search, create and update contacts, companies and deals, and associate them | The token of a HubSpot private app |

Make, n8n and HubSpot also feed the [process map](/en/docs/process-map).

### ClickUp (not yet in Discover)

The ClickUp connector exists, but it is still being tested on a real account: it does not appear in **Discover**, which only shows published connectors. There is no button to install it from the interface. Until it is published, do not rely on it for everyday use.

It connects with a ClickUp **personal token** (it starts with `pk_`). The connection guide says where to generate it: in ClickUp, your avatar, **Settings**, **Apps**, section **API token**. The token has no scopes: it acts with your rights, on all the workspaces you have access to. To limit access, generate it from a guest account, and only in the useful workspaces.

| Kind | Operations |
|---|---|
| **List** | Workspaces; the spaces of a workspace; the folders of a space; the lists of a folder; the lists placed directly in a space, outside any folder; the tasks of a list; the members of a list |
| **Read** | A task, with its custom fields and, if needed, its subtasks |
| **Act** | Create a task in a list; change a task or archive it (only the fields sent change; custom fields are not changed here); comment on a task |

The three operations that act are writes: they are refused while the **Allow writes** setting is off, as for the other catalog connectors. A list's tasks are read in pages of 100, the most recent first by default.

TblFlow spaces its calls to ClickUp: 2 at most at the same time, at least 600 ms between two calls. This stays under the limit of 100 requests per minute and per token that ClickUp applies to its lowest plans.

The **New item in a connector** trigger (see above) works with the **List the tasks of a list** operation: an automation runs for each new task in a ClickUp list.

## Required rights

| Action | Space role |
|---|---|
| Use a connector, connect your own account | All roles |
| Create and edit a connector | Owner, Creator, Editor |
| Install from the catalog | Owner; Creator if installation is open |
| Delete a connector | Owner, Creator |

Catalog governance is set in the space: **Open (owners and creators of the space)** or **On approval by a space administrator**. In the second case, other members use **Request installation**.

Creating a synced table requires the right to create a table in the base. The rights of each role are detailed in [Permissions and roles](/en/docs/permissions).

## Call quota

Each plan caps the actual calls to API connectors per month (responses served from the cache do not count): Free 1,000, Essential 50,000, Team 500,000. See [Plans and limits](/en/docs/plans-limits).
