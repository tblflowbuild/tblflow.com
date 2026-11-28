---
title: "Permissions and roles"
translationKey: "permissions"
description: "Manage permissions in TblFlow: the five default roles and their rights, custom roles on a space, a base or a table, and the rules to know."
section: "Guides"
order: 7
---

Permissions decide who can view, edit or administer what in TblFlow. This page explains **where** and **how** to manage them, and lists the rights of the roles **available by default**.

## Vocabulary

| Term | Meaning |
|---|---|
| **Action** | A single right, for example editing a record or configuring a base's permissions. |
| **Default role** | One of the five fixed roles: Owner, Creator, Editor, Commenter, Viewer. They cannot be modified. |
| **Permission matrix** | A named set of roles on a space, a base or a table. It is called **Permission** in the interface. |
| **Custom role** | A role you name in a matrix, with the list of actions you choose. |
| **Assignment** | The link between a custom role and a user. |

Custom roles are **added on top of** the default roles: their rights are added to the user's role rights, they do not replace them. The assignment screen only offers collaborators within the scope.

## Default roles

### The five roles

The hierarchy is: Owner, Creator, Editor, Commenter, Viewer (from most to fewest rights). A user gets a role by becoming a **collaborator** of a space or a base: email invitation, invitation link, or adding a member or a department of the organization. On a base, the rights of the base role and those of the parent space role are **cumulative**.

The roles you can offer depend on the level:

- **Space**: all five roles.
- **Base**: Creator, Editor, Commenter and Viewer (no Owner).
- **Table**: Creator, Editor and Viewer.

The Owner, Creator and Editor roles count as a billable seat.

### What each role can do

✅ allowed, ❌ denied.

| Right | Owner | Creator | Editor | Commenter | Viewer |
|---|---|---|---|---|---|
| **Space**: create, delete, edit | ✅ | ❌ | ❌ | ❌ | ❌ |
| Space: read | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: invite by email | ✅ | ✅ | ✅ | ✅ | ✅ |
| Space: create an invitation link | ✅ | ✅ | ❌ | ❌ | ❌ |
| Space: configure permissions | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Base**: create, delete, edit | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: read | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: invite by email | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: create an invitation link | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: export tables | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: import tables | ✅ | ✅ | ✅ | ❌ | ❌ |
| Base: configure permissions | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: data queries | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: database connection | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Table**: create, edit, delete, import | ✅ | ✅ | ❌ | ❌ | ❌ |
| Table: read, export | ✅ | ✅ | ✅ | ✅ | ✅ |
| Table: read and edit the trash | ✅ | ✅ | ✅ | ❌ | ❌ |
| Table: empty the trash | ✅ | ✅ | ❌ | ❌ | ❌ |
| Table: configure permissions | ✅ | ✅ | ❌ | ❌ | ❌ |
| Record history | ✅ | ✅ | ✅ | ❌ | ❌ |
| **View**: create, edit, delete, share | ✅ | ✅ | ✅ | ❌ | ❌ |
| View: read | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Field**: create, edit, delete | ✅ | ✅ | ❌ | ❌ | ❌ |
| Field: read | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Record**: create, edit, delete | ✅ | ✅ | ✅ | ❌ | ❌ |
| Record: read, copy | ✅ | ✅ | ✅ | ✅ | ✅ |
| Record: comment | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automation**: create, edit, delete | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automation: read | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Connector**: create, edit | ✅ | ✅ | ✅ | ❌ | ❌ |
| Connector: delete, install from the catalog | ✅ | ✅ | ❌ | ❌ | ❌ |
| Connector: connect your own account | ✅ | ✅ | ✅ | ✅ | ✅ |
| **App**: create, edit, delete | ✅ | ✅ | ❌ | ❌ | ❌ |
| App: read | ✅ | ✅ | ✅ | ✅ | ✅ |

### Rights that no space role grants

Some rights do not go through the roles above and are denied to everyone:

- **Instance administration** (admin pages, org chart import): reserved for the instance's administrators.
- **Enterprise configuration** (actions marked "enterprise"): no space role grants them, and a custom role cannot grant them.

## Where to manage permissions

There are two actions: **give a default role** and **create a custom role**.

### Give a default role

At the level of a space or a base, invite a user (by email or by link) and choose their role. You must have the right to invite at that level (see the table: invitation by link is reserved to the Owner and the Creator).

### Create a custom role

There are three scopes, all using the same screen:

| Scope | Where in the interface | Required right |
|---|---|---|
| **Space** | Space settings, **Permissions** tab | Configure the space's permissions |
| **Base** | Base icons, **Permission** (padlock) | Configure the base's permissions |
| **Table** | Table menu, **Permissions** entry (padlock) | Configure the table's permissions |

By default, a base's **Permission** entry only appears for the Owner and the Creator, and it requires the Team plan or higher: below that, it shows a plan badge and leads to an upgrade. For a table, the users you can target are the **collaborators of the parent base**: a table has no collaborators of its own.

## Create a custom role, step by step

1. **Create the matrix.** On the Permission screen of the scope you want, click **New permission**. A name is enough; the description is optional. A matrix groups several roles.
2. **Add a role** (**Add a role**) to the matrix: give it a name, then tick the actions. They are arranged in collapsible groups (Tables, Fields, Views, Records, Collaboration, Base, Automations, Other), with a search.
3. **Assign the role** (**Assign**) to one or more users, chosen from the collaborators of the scope. The effect is immediate: the user's rights are recalculated as soon as the role is assigned or revoked.
4. **Edit or remove.** A role can be renamed, have its actions changed, or be deleted. An assignment can be removed. Deleting a matrix also deletes its roles and assignments.

## Rules and limits to know

- **Additive only.** A custom role's rights are added to the default role's rights, without removing them. On a table, they are added to those the base already grants.
- **Validated actions.** The server rejects any action that is not on the official list. It also rejects space administration (create, delete or edit the space, assign a role, configure the space's permissions) and instance and enterprise actions. Other actions, including connector actions and those that open a space setting (notifications, email, domains, AI), can be granted.
- **Scope consistency.** The server checks that the matrix belongs to the resource concerned and that the role belongs to the matrix.
- **An assignment is unique** for a given role and user pair: assigning it again does not duplicate it.
- **Personal access token.** It can only restrict its owner's rights, never extend them.
