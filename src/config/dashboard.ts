import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "SERVICE & SUPPORT · OPERATIONS",
  heading: "Converse keeps the operating record visible, governed, and ready for action.",
  summary: "Real-time customer conversations, Shared inbox and assignment, Routing and service-level policy are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create conversation", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "conversation.manage", metricLabel: "Converse operating health",
  metrics: [{"label":"Open conversations","value":"286","change":"42 unassigned","context":"current workspace","tone":"positive","progress":"82%"},{"label":"First response","value":"4m 18s","change":"↓ 12%","context":"operational window","tone":"positive","progress":"76%"},{"label":"Resolution","value":"8.4h","change":"within target","context":"current workspace","tone":"warning","progress":"91%"},{"label":"CSAT","value":"94%","change":"2,184 replies","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active conversations", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"CON-842 · Checkout integration question","secondary":"Real-time customer conversations","tertiary":"Updated today","status":"Open","accent":"violet"},{"id":2,"primary":"CON-831 · Production access request","secondary":"Shared inbox and assignment","tertiary":"Evidence current","status":"Assigned","accent":"lime"},{"id":3,"primary":"CON-820 · Renewal terms clarification","secondary":"Routing and service-level policy","tertiary":"Updated today","status":"Waiting","accent":"cyan"},{"id":4,"primary":"CON-809 · Mobile login issue","secondary":"Knowledge suggestions","tertiary":"Evidence current","status":"Resolved","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Real-time customer conversations", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Shared inbox and assignment", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Routing and service-level policy", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Shared inbox and assignment has the clearest next action.",
  insightBody: "The recommendation is grounded in current conversation records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Conversation", modalEyebrow: "NEW CONVERSATION", modalTitle: "Add conversation",
  formFields: [
    { name: "title", label: "Conversation title", placeholder: "Checkout integration question" },
    { name: "owner", label: "Owner", placeholder: "Support teammate" },
    { name: "reference", label: "Reference", placeholder: "CON-843" },
  ],
  defaultSecondary: "Real-time customer conversations", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The conversation inherits workspace visibility, requires conversation.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create conversation",
};
