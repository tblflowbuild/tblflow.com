---
title: "Sharing and publishing"
translationKey: "sharing-publishing"
description: "Share a view, a table or a base by link, open a form to the public, publish an app with public or invitation-only access, and invite collaborators."
section: "Guides"
order: 12
---

TblFlow offers five ways to give access to your data. They do not require the same rights and do not grant the same powers, so choose the narrowest one that does the job.

| You want to | Where | Required right (default roles) |
|---|---|---|
| Show a view, read-only, by link | Table toolbar, **Share** | Edit and share the view: owner, creator, editor |
| Show a table or a base, by link | **Share** (toolbar or base menu) | Edit the base: owner, creator |
| Receive responses | Shared Form view | Same as the view |
| Publish an app | **Publish** button of the app | Edit the app: owner, creator |
| Get someone working in the space or the base | **Invite** button | Invite: see [Permissions and roles](/en/docs/permissions) |

## Share a view by link

In a table's toolbar, **Share** opens a small menu: **Share table** and **Share view**. The button is greyed out without the right to edit the view.

Choose **Share view**, then turn on **Share view to the web**. A link appears, with a one-click copy, a QR code and a button to generate a new link. Anyone with the link sees the view, without an account.

Under **Advanced**, depending on the view type:

- **Allow viewers to copy data from this view** and **Show all fields in expanded records** (Grid view only).
- **Invitation only**: see below.
- **Embed code**: copies an `iframe` code to paste into another page, with a preview. There you choose the theme (system, light or dark) and, outside of forms, **Hide the toolbar**. These settings change the link: copy it again after changing them.

Fields of type Password are never sent to a person viewing a share link. A field that the base forbids reading is not sent either.

Turn off the switch to close the link. Generating a new link changes the address.

## Share a table or a base by link

For a whole base, use **Share** in the base's menu (list of the space's bases). For a table, **Share**, then **Share table**. You must be able to edit the base: owner or creator by default.

Turn on **Share to the web**. The link opens at `/share/…/base`. The **Anyone with the link** menu controls what the link allows:

| Setting | Effect |
|---|---|
| **Can view** | Anyone with the link can view the data. |
| **Can edit** | Signed-in users edit the table's records: they receive editor rights. Offered for a base, a table or a folder. |
| **Save a copy** | Anyone with the link can save a copy to their own space. |

Under **Advanced**: **Allow viewers to copy data**, **Invitation only** and **Embed code** (`iframe` code). **Regenerate link** changes the address. Turning off **Share to the web** asks for confirmation: the action is irreversible and the people who had the link lose access.

Even with **Can edit**, a base link does not give email invitations, view sharing or data queries.

## Restrict a link to guests

**Invitation only** applies to view and base links. An **Invitees** field appears: enter addresses separated by a comma, a semicolon or a space, then click **Invite**.

- The link must be turned on before inviting. Up to 50 addresses per send.
- Only new addresses receive an email with the link.
- The person must sign in to TblFlow. If their account was not invited, they see "Invitation only" and can switch accounts.
- Members of the base have access without an invitation.
- Adding or removing invitees requires the right to edit the space, reserved to the owner by default.

## Public form

A Form view is shared like any other view: **Share** > **Share view** > **Share view to the web**. Anyone who opens the link can fill in the form and submit it; the responses arrive as records of the table.

The **Login required to submit** option requires the person to sign in to TblFlow before submitting. A message and a **Log in** button then cover the form. With **Invitation only**, only invitees and members of the base can access the form.

## Publish an app

In an app's editor, the **Publish** button opens the **App publishing** panel. There you set:

| Setting | Values |
|---|---|
| **Access** | **Public — anyone with the link**, or **Invitation only — invited people and base members** |
| **Allow data writes** | Off by default: visitors are read-only |

The access offered by default is **Invitation only**. Choosing **Public** asks for confirmation: without an account or invitation, anyone who receives the link opens the app and sees the data it displays.

Click **Publish — generate the public link**. The panel then shows the link, which you can copy. You can then change the access and the write setting without republishing.

In **Invitation only** mode, each person signs in with their TblFlow account, without a password: magic link or security key. They get in if they were invited or are members of the base; otherwise the page tells them so. The **Invitees** field works as for view links, but the app must be published before you can invite. There is no share password and no visitor account specific to the app.

The **Customization** section lets you upload a tab icon (favicon) and write the **Page description**, displayed by search engines and link previews.

**Unpublish (revokes the link)** turns off the link after confirmation. Publishing again generates a new link. Publishing, unpublishing and setting access require the right to edit the app; managing invitees requires the right to edit the space.

For building the app itself, see [Build your first app](/en/docs/build-first-app).

## Custom domain

A published app can be served at the root of a domain name that you own. You must first have it verified in the space settings.

1. In the space settings, **Verified domains** tab, click **Add a domain** and enter the name (for example `app.yourdomain.com`).
2. Add the TXT record shown to your DNS provider: its name starts with `_tblflow-verify.`, its value with `tblflow-verify=`.
3. Click **Verify**. The domain switches to **Verified**.
4. In the app's publishing panel, **Custom domain** section, choose the domain in **Choose a verified domain…**. **Unlink** removes it.

A domain serves a single app and can only be verified in a single space. Without a verified domain, the panel shows: "No verified domain available". The TXT record proves that the domain is yours; it is the only thing TblFlow checks. After seven days, the proof is checked again when the domain serves the app: if the record has disappeared, the domain returns to unverified.

## Invite collaborators

Inviting a collaborator gives them a role in the space or the base; it is not a link share. The rights of each role are described in [Permissions and roles](/en/docs/permissions).

- **Space**: the space's **Invite** button, "Share the space" window. A space collaborator has access to all its bases.
- **Base**: the invitation button (user icon, tooltip **Invite**) in the base's bar, "Share" window followed by the base name.

Each window offers:

- **Invite by email**: enter addresses (confirm each one with Enter or Space), choose the role, then **Send invitation**.
- **Invite by link**: choose a role, **Create link**. Anyone who opens the link gets that role, after signing in. The role of a link can be changed, and **Delete link** revokes it. Reserved to the owner and the creator by default.
- Adding a member or a department of the organization, when your account belongs to an organization.
- The list of collaborators, with search by name or email, role change and **Remove collaborator**.

## What's next

- [Permissions and roles](/en/docs/permissions) — what each role can do, custom roles.
- [Build your first app](/en/docs/build-first-app) — generate or build the app to publish.
- [Views and filters](/en/docs/views-and-filters) — the view types you can share.
