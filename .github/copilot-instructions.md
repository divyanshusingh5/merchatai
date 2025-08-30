# Copilot Instructions for project-bolt-sb1-lpcougj3

## Big Picture Architecture

- The project is a full-stack AI-powered marketing platform for WhatsApp campaigns.
- **Frontend**: React (TypeScript) app in `src/` with modular components for analytics, campaigns, customers, dashboard, inventory, offers, and layout.
- **Backend**: Node.js/Express server in `server/index.js` exposes REST endpoints for campaign actions and integrates with WhatsApp via `whatsapp-web.js` and OpenAI via `openai`.
- **Python Scripts**: Located in `scripts/`, used for advanced AI message generation and bulk WhatsApp sending (not directly wired to UI/backend).

## Developer Workflows

- **Build/Run Frontend**: Use Vite (`vite.config.ts`).
  - Start: `npm run dev` (from project root)
- **Backend**: Start server with `node server/index.js` (port 3001 by default).
- **Install Dependencies**: Use `npm install` for JS/TS, `pip install -r scripts/requirements.txt` for Python scripts.
- **WhatsApp Integration**: On first backend run, scan QR code in terminal to authenticate WhatsApp session.

## Project-Specific Patterns

- **Campaign Triggering**: UI components (e.g., `CampaignGenerator`, Quick Campaign button in `Campaigns.tsx`) POST to `/send-campaign` endpoint to generate and send WhatsApp messages.
- **AI Message Generation**: Backend uses OpenAI API (key in `.env`) to create personalized campaign messages before sending via WhatsApp.
- **Service Layer**: Frontend calls backend via service modules (e.g., `src/services/whatsappService.ts`).
- **Component Structure**: Each feature (analytics, campaigns, etc.) has its own folder under `src/components/` and `src/pages/`.
- **Environment Variables**: Store secrets (OpenAI key, phone numbers) in `.env` at project root.

## Integration Points

- **WhatsApp**: `whatsapp-web.js` for sending messages, requires WhatsApp Web authentication.
- **OpenAI**: Used for message content generation, configured via `.env`.
- **Python Scripts**: Can be run manually for bulk operations, not auto-triggered by UI/backend.

## Examples

- To send a campaign: UI triggers `sendCampaign()` in `whatsappService.ts`, which POSTs to backend `/send-campaign`, backend generates message and sends via WhatsApp.
- To run AI message generation manually: `python scripts/ai_campaign_generator.py generate_message ...`

## Key Files/Directories

- `src/pages/Campaigns.tsx`, `src/components/campaigns/CampaignGenerator.tsx`: UI campaign triggers
- `src/services/whatsappService.ts`: Frontend-backend integration
- `server/index.js`: Backend logic for WhatsApp and OpenAI
- `scripts/`: Python utilities for advanced/bulk operations
- `.env`: Secrets/configuration

---

If any section is unclear or missing details, please specify so it can be improved for future AI agents.
