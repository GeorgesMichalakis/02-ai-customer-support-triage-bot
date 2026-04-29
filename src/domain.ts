import type { DomainConfig } from "./automation";

export const domainConfig: DomainConfig = {
  "slug": "02-ai-customer-support-triage-bot",
  "title": "AI Customer Support Triage Bot",
  "tagline": "Classifies tickets, drafts knowledge-base answers, detects risk, and escalates the right cases.",
  "workflow": "Support ticket triage",
  "audience": "SaaS support teams and ecommerce brands",
  "itemNoun": "ticket",
  "itemPlural": "tickets",
  "primaryAction": "Triage ticket",
  "accent": "#0f766e",
  "businessGoal": "Cut first response time while keeping high-risk customers in a human review lane.",
  "integrations": [
    "Zendesk",
    "Intercom",
    "Slack",
    "Help Scout",
    "Zapier",
    "n8n"
  ],
  "routes": [
    "Tier 1 queue",
    "Billing specialist",
    "Engineering escalation",
    "Customer success manager"
  ],
  "categories": [
    {
      "name": "Billing issue",
      "keywords": [
        "invoice",
        "charged",
        "billing",
        "refund",
        "plan"
      ],
      "route": "Billing specialist",
      "boost": 12
    },
    {
      "name": "Bug report",
      "keywords": [
        "bug",
        "error",
        "broken",
        "crash",
        "api"
      ],
      "route": "Engineering escalation",
      "boost": 20
    },
    {
      "name": "Angry customer",
      "keywords": [
        "angry",
        "cancel",
        "terrible",
        "unacceptable"
      ],
      "route": "Customer success manager",
      "boost": 28
    },
    {
      "name": "How-to request",
      "keywords": [
        "how do i",
        "setup",
        "guide",
        "configure"
      ],
      "route": "Tier 1 queue",
      "boost": 5
    }
  ],
  "positiveKeywords": [
    "thanks",
    "help",
    "guide",
    "setup",
    "question"
  ],
  "riskKeywords": [
    "angry",
    "cancel",
    "refund",
    "broken",
    "lawsuit",
    "unacceptable",
    "down"
  ],
  "outputLabels": [
    "Public reply",
    "Internal note",
    "Escalation payload"
  ],
  "sampleItems": [
    {
      "id": "ticket-8821",
      "title": "API sync is broken for a VIP account",
      "source": "Zendesk",
      "customer": "Atlas Dental Group",
      "owner": "Unassigned",
      "value": 18000,
      "urgency": 91,
      "description": "The nightly API sync failed again and our operations team is blocked. This is unacceptable for our launch week.",
      "tags": [
        "api",
        "broken",
        "vip"
      ],
      "receivedAt": "2026-04-29T07:50:00Z"
    },
    {
      "id": "ticket-8822",
      "title": "Question about invoice line item",
      "source": "Intercom",
      "customer": "Craft House",
      "owner": "Unassigned",
      "value": 4200,
      "urgency": 48,
      "description": "Can you explain why we were charged for two extra seats on this invoice?",
      "tags": [
        "invoice",
        "billing"
      ],
      "receivedAt": "2026-04-29T10:11:00Z"
    },
    {
      "id": "ticket-8823",
      "title": "Need help setting up automations",
      "source": "Help Scout",
      "customer": "Nora Fields",
      "owner": "Tier 1",
      "value": 900,
      "urgency": 35,
      "description": "How do I configure the welcome automation for new customers? A guide would help.",
      "tags": [
        "setup",
        "guide"
      ],
      "receivedAt": "2026-04-29T11:03:00Z"
    }
  ],
  "demo": {
    "beforeTitle": "Manual support ticket triage",
    "beforeState": [
      "Tickets arrive from Zendesk, Intercom, Slack and are reviewed one by one.",
      "The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.",
      "High-value or risky tickets can sit in the same queue as low-value work, so follow-up quality depends on who notices first."
    ],
    "whatWeProvide": [
      "A deployable React and Express workflow app tailored to SaaS support teams and ecommerce brands.",
      "An AI scoring and routing engine for tickets, with deterministic fallback mode and optional live OpenAI Responses API review.",
      "Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Zendesk, Intercom, Slack, Help Scout, Zapier, n8n.",
      "Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples."
    ],
    "afterTitle": "Automated support ticket triage",
    "afterState": [
      "Tickets are classified, scored, routed to Tier 1 queue, and prepared for review in seconds.",
      "The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.",
      "Approved work is pushed to Zendesk and Intercom, keeping the source workflow and downstream records aligned."
    ],
    "demoFlow": [
      "Open the dashboard and show the client the incoming tickets queue.",
      "Select the highest-value sample ticket and explain the before state: manual review, copy/paste, and slow routing.",
      "Click \"Triage ticket\" to run deterministic AI automation, or enable live OpenAI review if an API key is configured.",
      "Review the score, route, confidence, timeline, and generated outputs with the client.",
      "Click a mock integration button to show exactly what would be sent to Zendesk, Zapier, Make, n8n, or the client tool stack.",
      "Close with the after state: faster response time, cleaner records, and a human approval lane for sensitive work."
    ],
    "successMetrics": [
      "Manual review steps reduced",
      "Average response time improved",
      "High-priority items routed faster",
      "Records updated consistently",
      "Human approval preserved for risky cases"
    ],
    "clientOffer": "I will replace the demo data and mock adapters with your real Zendesk, Intercom, Slack setup, connect the API credentials, tune the routing rules, and deploy the workflow for your team."
  }
};
