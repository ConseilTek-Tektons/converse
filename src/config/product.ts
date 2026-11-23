import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "converse",
  name: "Converse",
  category: "Service & Support",
  tagline: "In-product messaging on your own sockets.",
  description: "A customer-messaging platform for conversations, team inboxes, routing, knowledge, and consent-aware outbound messages.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/converse",
  nav: [
  {
    "label": "Inbox",
    "badge": "4"
  },
  {
    "label": "Contacts"
  },
  {
    "label": "Routing"
  },
  {
    "label": "Knowledge"
  },
  {
    "label": "Reports"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "support_admin", label: "Support administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "teammate", label: "Support teammate" },
  ],
  ai: {
    name: "Converse knowledge guide",
    description: "Ask grounded questions about real-time customer conversations, shared inbox and assignment, routing and service-level policy, or operating policy.",
    systemPrompt: "You are Converse's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain conversation routing.","Explain conversation privacy.","Explain service-level timers."],
  },
};
