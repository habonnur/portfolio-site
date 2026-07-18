# Site Structure Blueprint v2 — "The Agency of One"

Replaces the section 3 structure in the original plan. Based on analysis of
causehouse.co (structural skeleton) and shader.se (form-proves-capability idea),
mapped onto Habon's content and the existing Night/Amber/Paper palette.

---

## Why CauseHouse works (the part to steal)

Its structure is actually a *conventional* agency site. What makes it feel unique
is **one extended metaphor carried through everything**: "Build the house your
mission grows in" → the process is "Lay the foundation / Frame the structure /
Wire the house / Make it livable" → the illustrations are a house on a hill →
the final CTA is "build a stronger house." Structure, copy, and art all serve
ONE concept. That's the move — not exotic layout.

Second-order tricks worth stealing directly:
- A **big proof stat immediately after the hero** ($10M+) before any explanation
- **Numbered devices (01–04)** for principles and process
- **Kicker labels on case-study cards** ("48HR TURNAROUND") + small tag chips
- A **"Certified Partners" logo marquee** — platforms clients already trust
- **Reassurance microcopy at the contact form** (✓ response within one day)

## Why Shader works (the part to translate, not copy)

Shader sells interactive 3D — so their site IS a 3D scene, and scrolling drives
the whole experience ("Scroll to inspect our closed deals"). The insight isn't
WebGL; it's **the site's form demonstrates the service being sold.** Don't build
3D in Framer (that's custom-code territory and it's their product, not yours).
Habon's equivalent: **the site should behave like an instrumented, agent-run
system** — receipts, tickers, status readouts, an ops-log aesthetic. The form
proves the capability.

---

## The unifying metaphor: THE AGENCY OF ONE

Habon's site is a 1960s ad agency… whose entire staff is machines she built.
This carries Mad Men *structurally* (not just visually), gives every section a
reason to exist, and is a pitch no other candidate can copy:

- The hero introduces **the agency** (one human principal)
- The work section is **client work** (case studies)
- The team page section is **the departments** — her actual AI systems presented
  as an agency staff roster (this is the unique centerpiece)
- The process section is **how the agency runs a brief**
- The contact section is **new business**

## Home page, section by section (v2)

1. **HERO** — "The agency of one." Headline + subhead + the one motion moment.
   Kicker above headline (mono): `A FULL-SERVICE MARKETING SYSTEMS SHOP · STAFF OF ONE (HUMAN)`

2. **PROOF STAT** *(CauseHouse move — stat before story)* — one huge serif number:
   **80%** "less manual campaign setup, from the AI pipeline I shipped at Square"
   + two smaller mono stats (24/7 agent uptime · 1,500+ entities in the memory graph).

3. **THE DEPARTMENTS** *(the centerpiece — her agents as agency staff roster)*
   Numbered 01–04, each a card: department name (serif), what it does (sans),
   status line (mono, like a staff directory meets a systems dashboard):
   - 01 **Media Monitoring Dept.** — Hermes. Reads the inbox 6×/day, briefs every morning. `STATUS: RUNNING · SINCE 2026`
   - 02 **Production Dept.** — Open Engine. Claims scoped tasks in Linear, leaves receipts. `STATUS: RUNNING`
   - 03 **Research & Archives** — Open Brain. Self-owned memory: 1,500+ entities. `STATUS: RUNNING`
   - 04 **The Principal** — Habon. Hires, fires, and audits the machines. Seven years of lifecycle marketing. `STATUS: AVAILABLE FOR HIRE` ← the joke that lands the CTA
   
4. **CLIENT WORK** (case studies) — cards with CauseHouse-style kicker labels + tag chips:
   - `SHIPPED IN PRODUCTION` — Square pipeline — chips: GOOSE · SLACK · JIRA
   - `24/7 UPTIME` — Hermes — chips: DOCKER · CRON · GUARDRAILS
   - `GOVERNED AI` — Open Engine — chips: LINEAR · SEMVER · EVALS
   *(Shader-inspired build: make this a sticky scroll-driven section in Framer —
   cards stack/swap as you scroll, mono progress `01 / 03` counter. Framer can do
   this natively with sticky positioning + scroll transforms. If it fights you,
   plain cards still work.)*

5. **CERTIFIED PLATFORMS** *(direct CauseHouse steal — recruiters scan for this)*
   Mono marquee strip: `ITERABLE (CERTIFIED) · BRAZE (CERTIFIED) · KLAVIYO · HUBSPOT · SIMON DATA · SNOWFLAKE · LOOKER · N8N · SUPABASE`

6. **HOW THE AGENCY RUNS A BRIEF** (process, numbered 01–04, cream print-ad panel):
   01 Find the leverage (where hours die) → 02 Draw the boundary (what's code,
   what's model judgment) → 03 Wire it into production (the tools the team already
   trusts) → 04 Audit the machines (evals, receipts, fail-loud errors).
   *This is her actual method AND the house-metaphor equivalent.*

7. **THE PRINCIPAL** (background) — condensed career + the co-op teaching line +
   what she's looking for (roles, NYC/Remote) folded together.

8. **NEW BUSINESS** (contact) — with CauseHouse-style reassurance microcopy:
   `✓ REPLIES WITHIN ONE BUSINESS DAY (THE HUMAN, NOT AN AGENT)` — on-brand joke,
   real reassurance. Email · LinkedIn · GitHub · résumé PDF.

## What this changes in existing files

- **copy-deck.md** — needs a v2 pass: new hero kicker, proof-stat section,
  the Departments roster copy, process renamed to "How the agency runs a brief,"
  platforms marquee, new-business microcopy. Case-study pages are unchanged.
- **framer-style-guide.md** — still fully valid (palette/type/motion untouched).
  Add: sticky scroll-stack spec for the work section; status-line component
  (mono, small, with a colored dot: amber = running, cyan = available).
- **Diagrams** — unchanged.

## Feasibility notes (so nothing here becomes a trap)

- Everything above is native Framer: sticky sections, scroll transforms, marquee
  (Framer has a built-in ticker component), hover variants. No code components needed.
- The shader.se-style WebGL scene is NOT worth attempting — weeks of custom work,
  fights Framer, and demonstrates a skill you're not selling.
- Depth budget: the sticky work-scroll is the ONE structural flourish. If it's
  janky on mobile, ship plain cards — CauseHouse itself is proof that discipline
  + metaphor beats spectacle.
