/**
 * Structure of the features catalogue page. The order here is the order on the
 * page; the copy for each id lives in one sibling file per locale
 * (`satisfies FeaturesCopy`, so a missing id is a compile error rather than a
 * silent fallback to French).
 */
export const GROUPS = [
  { id: 'build', items: ['tables', 'interfaces', 'automations', 'whiteboards', 'browsers', 'agents', 'docs'] },
  { id: 'team', items: ['permissions', 'invitations', 'orgchart', 'tokens', 'myNotifications', 'logs'] },
  { id: 'ai', items: ['providers', 'context', 'usage', 'aiAct', 'gdpr', 'designMd', 'skills'] },
  { id: 'connect', items: ['connectors', 'oauth', 'mcp', 'chatNotifications', 'email', 'preprod'] },
] as const;

export type GroupId = (typeof GROUPS)[number]['id'];
export type FeatureId = (typeof GROUPS)[number]['items'][number];

export interface FeaturesCopy {
  nav: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Short note under the catalogue: availability depends on the plan. */
  availability: string;
  /** Label of the link to the pricing page, next to the availability note. */
  pricingLink: string;
  /** Homepage band that points to the catalogue. */
  home: { title: string; body: string; link: string };
  groups: Record<GroupId, { title: string; intro: string }>;
  items: Record<FeatureId, { title: string; body: string }>;
}
