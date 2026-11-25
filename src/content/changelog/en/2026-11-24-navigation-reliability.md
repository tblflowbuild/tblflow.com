---
title: "Faster navigation, reliable automations and updates without downtime"
date: 2026-11-24
translationKey: "navigation-reliability"
type: "improvement"
---

- **Quick filters** in the grid toolbar and a labelled view bar.
- **Cmd+K with actions**: quick search can also run actions, and a “Create” button gathers everything you can create.
- **Reliable automations**: an event is no longer lost when the service restarts or an outgoing call briefly fails. It is recorded, replayed with a growing delay, and final failures stay visible. A webhook sent twice with the same key runs the automation only once.
- **Updates without downtime**: the API now runs on two replicas behind a load balancer.
- **Accessibility and translations**: page titles, names for screen readers, contrast and sign-in improved; the Settings tabs stay in your language.
- **Small fixes**: OAuth sign-in, duplicate default folders, labels.
