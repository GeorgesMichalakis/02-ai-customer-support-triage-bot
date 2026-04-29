# AI Customer Support Triage Bot

Classifies tickets, drafts knowledge-base answers, detects risk, and escalates the right cases.

## Client Value

Cut first response time while keeping high-risk customers in a human review lane.

This is a deployable portfolio demo for SaaS support teams and ecommerce brands. It shows a complete AI automation workflow: intake, deterministic scoring, AI-assisted drafting, human approval, and mock publishing to common business systems.

## Before / What We Provide / After

### Before

- Tickets arrive from Zendesk, Intercom, Slack and are reviewed one by one.
- The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.
- High-value or risky tickets can sit in the same queue as low-value work, so follow-up quality depends on who notices first.

### What We Provide

- A deployable React and Express workflow app tailored to SaaS support teams and ecommerce brands.
- An AI scoring and routing engine for tickets, with deterministic fallback mode and optional live OpenAI Responses API review.
- Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Zendesk, Intercom, Slack, Help Scout, Zapier, n8n.
- Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples.

### After

- Tickets are classified, scored, routed to Tier 1 queue, and prepared for review in seconds.
- The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.
- Approved work is pushed to Zendesk and Intercom, keeping the source workflow and downstream records aligned.

See [BEFORE_AFTER_DEMO.md](./BEFORE_AFTER_DEMO.md) for a client-ready walkthrough script.

## Demo Features

- React operations dashboard for tickets
- Express API with health, analysis, and publish endpoints
- OpenAI Responses API integration when `OPENAI_API_KEY` is configured
- Deterministic fallback mode so the demo works without paid API access
- Mock adapters for Zendesk, Intercom, Slack, Help Scout, Zapier, n8n
- Human-in-loop review controls for risky or high-priority items
- Vitest coverage for classification, scoring, and publish payload behavior
- Dockerfile and Render deploy configuration

## Local Setup

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:8787

## Production Build

```bash
npm run build
npm start
```

## Optional OpenAI Configuration

```bash
cp .env.example .env
export OPENAI_API_KEY="your_api_key"
export OPENAI_MODEL="gpt-5.2"
```

Without an API key, the app uses a deterministic demo engine so clients can still click through the workflow.

## Deployment

Render can use the included `render.yaml`.

Docker:

```bash
docker build -t 02-ai-customer-support-triage-bot .
docker run -p 8787:8787 --env-file .env 02-ai-customer-support-triage-bot
```

## Upwork Pitch

I can adapt this demo to your real stack by replacing the mock adapters with your CRM, inbox, spreadsheet, calendar, support desk, or ecommerce API. The build can start as a focused workflow automation and grow into a full internal tool.
