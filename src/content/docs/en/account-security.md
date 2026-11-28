---
title: "Account and security"
translationKey: "account-security"
description: "Sign in to TblFlow without a password (passkey, email link, external sign-in), manage your profile, export data and delete your account."
section: "Guides"
order: 16
---

This page covers what concerns **your personal account**: signing in, your profile, preferences, quick search, exporting your data and deleting your account. Settings that apply to a whole space are in [Space settings](/en/docs/space-settings).

## Signing in

The sign-in screen offers **no password**. There are three ways in. The first two are always present; the third depends on the instance.

| Method | How to use it |
|---|---|
| Passkey | Click **Sign in with a passkey**, then confirm with your device's method. |
| Email link | Under **Or sign in by email**, enter your address and click **Send me a link**. |
| External sign-in | Under **Or continue with**, choose a provider: GitHub, Google or OIDC. Only the providers enabled on the instance are shown. |

### Passkey

A passkey relies on Face ID, Touch ID, Windows Hello or a security key. You add it **after** your first sign-in, from your profile (see below).

### Email link

TblFlow sends a sign-in link and a 6-digit code to your address. The message states that the link expires in 10 minutes. You can open the link, or enter the code in the **6-digit code** field and click **Sign in**. **Resend a link** sends it again.

- This method only works for an address that already has an account. For an unknown address, the screen behaves as it would for a known one, but no email is sent. This is intentional, so that it does not reveal which addresses have an account. Create the account through sign-up.
- Requests are spaced out: the screen shows how many seconds to wait before requesting another one.
- After too many wrong codes, sign-in is locked for a few minutes.
- If the instance uses an anti-bot verification challenge, it appears below the field and must be completed before sending.

An instance setting can disable this link. The screen then displays "Passwordless sign-in is unavailable on this instance".

### External sign-in and SSO

The **GitHub**, **Google** and **OIDC** buttons redirect you to the provider. They only appear if the instance has configured them. The **OIDC** button corresponds to an OpenID Connect provider configured at instance level: it is not set in space settings.

## Creating an account

Open **Sign up** from the sign-in screen. The form asks for:

- your email address;
- acceptance of the terms of use and the privacy policy (required);
- a **verification code** sent by email, when the instance requires it;
- an **invitation code**, when the instance works with a waiting list. The **Join the waiting list** link lets you register for it.

No password is created. Depending on the configuration, the instance may also close sign-ups: the sign-up tab then remains available only through an invitation link to a shared space, base or view.

## My profile

Open your avatar menu, then **Settings**. The window groups your personal settings: **My account**, then **My notifications**, **Connectors**, **Personal access tokens**, **My skills** and **OAuth applications**. The settings of the current space appear in the same window when you have access to them.

The **My account** tab (titled **My profile**) contains:

| Setting | Details |
|---|---|
| Avatar | **Change avatar** opens an image picker. |
| Display name | The name by which you are called in TblFlow. It is saved when you leave the field. |
| **First name** and **LAST NAME** | The last name is saved in uppercase. |
| Theme | **Light**, **Dark** or **System**. |
| Language | See below. |
| **Base list view** | How the list of bases in a space is displayed: **Automatic**, **Card** or **List**. |
| **View inside a base** | How a base is displayed when opened: the same three choices. |
| **Interaction mode** | **Mouse mode**, **Touch mode** or **Follow system**. This choice only appears on a device that supports both touch and mouse. |

### Interface language

The **Language** selector offers ten languages, plus a **Default** entry (browser language):

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe and Español (Latinoamérica).

Your choice is saved to your account, then the page reloads.

### Account security

The **Account security** section groups the following items.

**Email address.** **Change email address** asks for the new address, sends a verification code with **Send code**, then **Confirm** validates it. Your session is then closed and you return to the sign-in screen. This operation requires having presented a passkey or a backup code within the last 15 minutes: register a passkey before you need one.

**Passkeys.** **Add a passkey** starts registration on your device and asks you to name the key. Each listed key has a **Delete** button. As soon as your account has a passkey or a backup code, adding or deleting a key requires the same recent presentation of a strong factor. An account that has none yet can register its first key directly.

**Backup codes.** **Generate** creates ten single-use codes. They replace your passkey if you lose it, but they are not used to sign in. They are only displayed once: use **Copy** or **Download** right away. **Regenerate** replaces the entire set, and the old codes stop working. The number of remaining codes is shown.

**TblFlow support access.** A toggle allows TblFlow support to sign in on your behalf when you request help. It is disabled by default. According to the text displayed, each session lasts 30 minutes at most, is read-only unless agreed otherwise, and is recorded along with its reason. You can withdraw it at any time.

**Processing of your data.** Two toggles:

- **Restrict processing of my data (GDPR Art. 18)**: freezes non-essential automated processing, without deleting anything. Your account keeps working.
- **Object to AI processing of my content (GDPR Art. 21)**: the documents you have imported stop being indexed and read by AI features. They remain stored and downloadable.

Restriction already covers AI processing: in that case, the second toggle is locked.

The section also shows your authorized third-party integrations, which you can revoke. Connectors, personal tokens and OAuth applications have their own pages: see [Connectors](/en/docs/connectors) and [API and developers](/en/docs/api-developers).

## Notifications

### The notification center

The bell icon shows the number of unread notifications. The panel offers two lists, unread and read (**Read**), the **Mark all as read** button and **Show more** to load the rest.

### Email

**My notifications** controls what you receive by email. Three levels:

| Level | Content |
|---|---|
| **All notifications** | Mentions and comments, plus platform messages: end of an import or export, failed automation or AI generation, quotas and billing. |
| **Mentions and comments only** | Only when someone names you in a cell or a comment, or comments. |
| **No email** | Notifications remain visible in the application. |

Relaying to Slack, Teams or Google Chat is a space setting, not a personal one: see [Space settings](/en/docs/space-settings).

## Command palette and search

**Ctrl+K** (**⌘+K** on Mac) opens the **Quick actions** palette. A magnifying glass button also opens it, and the same shortcut closes it.

- **Inside a base**: the palette lists the base's tables, applications and automations. It also offers creation actions, **Open the AI assistant** (or **Ask the assistant** with the typed text), the theme choice and opening settings.
- **Inside a space**: typing runs a server-side search within the space. Results can be bases, tables, views, dashboards, automations or applications, in pages of 10 with **Load more**. A result opens the item. The **Create a base** action appears there if your role allows it.

Available actions depend on your rights: an action you are not allowed to perform does not appear.

**Inside a table**, **Ctrl+F** (**⌘+F** on Mac) places the cursor in the search field of the toolbar. It offers **Global search** (all fields except dates, checkboxes and buttons) or **Search by field**. See [Views and filters](/en/docs/views-and-filters).

## Exporting my data

At the bottom of the **My account** tab, **Download archive** produces a zip file. It contains a `profile.json` file with your profile fields, one folder per base you own through a space (records and attachments), and, if you have any, the metadata of your third-party site credentials. The associated passwords are not exported.

## Deleting my account

At the bottom of the **My account** tab, **Delete account** opens a confirmation. The action is irreversible.

1. Leave your spaces first. As long as you are a member of a space, or the owner or creator of a space placed in the trash, deletion is refused and the screen lists the affected spaces, with a link to each one.
2. Type `DELETE` in the confirmation field. The **Delete** button stays inactive as long as the entry differs.
3. The server requires a sign-in less than 15 minutes old (a passkey or a recent backup code if you have one). Otherwise, sign in again and restart.

What happens next:

- your email address is replaced, your name is erased, and your avatar is replaced with a default avatar;
- your access tokens, linked accounts, passkeys, backup codes, notifications and agent conversations are deleted;
- your comments are emptied;
- the records of shared bases are kept: they belong to the team, and you only appear there under the name "Deleted User".
