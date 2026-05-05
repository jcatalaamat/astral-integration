# /ai + /integrations + /insights — plan

date: 2026-05-05  
branch: `ai-integrations-insights` (off main, not pushed)

## why

three more pages to fill out the site:
1. **/ai** — AI substrate is currently buried in home + audience sections. dedicated page = SEO-targetable + buyers can compare astral-AI to chatbot-vendor-AI directly.
2. **/integrations** — what tools astral integrates with. SEO + technical credibility for buyers vetting "does this work with my stack?"
3. **/insights** — 3 posts from feb 2026 looks abandoned. subtle date treatment + 1 new post + better CTA → page feels active.

## /ai — dedicated AI page

structure:
- hero: "The AI sits underneath." (lifted from home indigo section, expanded)
- subhead: "Not a chatbot. Not a feature on a marketing page. The substrate."
- what it does (3-4 concrete examples)
  - drafts your launches in your voice
  - answers a student at 3am in the language of your tradition
  - tags + sorts incoming intake forms
  - learns every time you teach
- what it's trained on
  - your past emails
  - your intake forms
  - your live recordings + transcripts
  - your written work
- where it lives
  - on YOUR infrastructure (not a SaaS subscription to my AI)
  - your model, your weights, your prompts
  - migrate-able if you ever leave
- what it's NOT
  - a generic ChatGPT wrapper
  - a chatbot widget
  - a magic feature in a marketing deck
- the honest part
  - it's not magic — it's models + your data + good design
  - results compound: month 1 = decent, month 6 = uncanny, month 18 = irreplaceable
- CTA: "Send me a sample of your writing"

## /integrations — what astral works with

logo grid + brief description per tool:

**payments**: Stripe, Stripe Connect (multi-party), Square (when needed)
**bookings**: Calendly (initial), then native (eventually replaced)
**email**: Resend, Mailerlite, ConvertKit
**SMS / messaging**: Twilio, WhatsApp Business API
**calendar**: Google Calendar, Apple Calendar, Outlook
**code + hosting**: GitHub, Hetzner, Vercel
**AI models**: OpenAI, Anthropic, local (Ollama for self-hosted)
**analytics**: Plausible, PostHog (privacy-first only — no Google Analytics by default)
**community**: Discord, Telegram (notifications), Slack
**video**: Mux, Cloudflare Stream
**storage**: S3-compatible (Hetzner Object Storage, Cloudflare R2)

closing: "Missing your tool? I integrate with whatever the work needs — these are the most common, not the only options. Ask."

## /insights improvements

minimal-touch upgrade:
1. strip explicit dates from card headers — replace with topic/month-only ("Feb 2026" is fine, full date is overkill)
2. update hero copy slightly to feel less time-bound
3. add one new post to make page feel active: **"The studio is small on purpose"** — drafted from the existing line + expanded into a 600-800 word piece on positioning, why one builder vs an agency, what "small" means in practice
4. update CTA from "Start a Conversation" → "Send me your messy notes →" (consistent with site-wide voice)

## routes

- `/ai`
- `/integrations`
- `/insights/the-studio-is-small-on-purpose` (new post)

added to App.tsx, scripts/prerender.js. linked in footer (Work column → "AI" + "Integrations").

## conventions

- jugat tokens
- /ai uses indigo full-bleed sections like home AI substrate (it's the same concept, expanded)
- /integrations uses cream cards, simple grid
- new insights post uses existing post template

## order of work

1. plan + commit. `commit 1`.
2. /ai page + route. `commit 2`.
3. /integrations page + route. `commit 3`.
4. /insights tweaks + new post. `commit 4`.
5. footer links. `commit 5`.
6. local build + smoke test.
7. ship if no issues.

## not doing

- legal-security pages (parked, separate branch)
- testimonials retrofit (still blocked on quotes)
- /access rename (still pending decision)
