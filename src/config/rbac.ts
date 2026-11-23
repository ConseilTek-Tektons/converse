export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    support_admin: { label: "Support administrator", description: "Owns real-time customer conversations and shared inbox and assignment." },
    teammate: { label: "Support teammate", description: "Operates authorised conversation workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "conversation.manage": "Create and update conversation records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Converse knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    support_admin: ["dashboard.view", "conversation.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    teammate: ["dashboard.view", "conversation.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "converse-owners": "owner", "converse-admins": "admin",
    "converse-managers": "support_admin", "converse-operators": "teammate",
    "converse-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
