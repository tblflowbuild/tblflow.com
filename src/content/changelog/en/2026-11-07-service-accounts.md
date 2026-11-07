---
title: "Service accounts and service tokens per space"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Scripts, CI and integrations no longer need to borrow a person's account.

- **Where**: space settings, Security and audit, Service accounts. Reserved for space owners.
- **Roles**: viewer, editor or creator. A service account does not take up a seat.
- **Tokens**: valid for this space only, with the access of your choice (read-only, read and write records, or everything the role allows) and a lifetime of 30, 90, 180 or 365 days. The token is shown only once; revoking it takes effect immediately.
- **Tracking**: last use displayed, email alert to owners before expiry, creation and revocation recorded in the space log.

This is the recommended way to use the [TblFlow CLI](/en/docs/cli) in continuous integration.
