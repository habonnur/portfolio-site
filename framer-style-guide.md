# Framer Build Guide — v3 "60s Agency Card"

Governed by the approved DESIGN-SPECS (Codex, 2026-07-17). This file extends that
system to the sections the specs don't cover yet, in the same spirit. Where this
file and DESIGN-SPECS conflict, DESIGN-SPECS wins.

## The system (from specs — non-negotiable)

- **Two colors only:** Warm paper `#F2EBDC` (background, mat) · Soft black ink
  `#171613` (all type, rules, dark fields). Photography true b&w.
- **Two typefaces only:** Helvetica Neue Bold 700 (statements, titles, numbers,
  results) · Baskerville Regular 400 (explanations, editorial copy, lh 1.25–1.4).
  Framer fallback until Helvetica Neue is licensed as a webfont: "Helvetica Neue"
  is available on Mac browsers by default; set stack `"Helvetica Neue", Helvetica,
  Arial`. Do NOT substitute a startup sans.
- **No:** monospace, accent colors, gradients, glows, shadows, rounded corners,
  cards, pills, grain overlays, glass. Rules are `2px` ink. One dominant
  typographic gesture per screen. Hard visible alignments.
- **AI appears through function and evidence, not an "AI" visual style.**
  (The old mono "machine voice" is retired. Receipts/metrics are now **result
  lines**: Helvetica Neue Bold, small, sentence case, `·` separators — exactly
  like "75% faster detection · $2M protected" in the approved index mock.)

## Framer setup

Color styles: `Paper #F2EBDC` · `Ink #171613`. That's all.
Text styles (desktop / from specs where given):
- `Hero/Top` — HN Bold 52, tracking -2.3px → clamp(28px, 4.33vw, 52px)
- `Hero/Bottom` — HN Bold 91, tracking -4px → clamp(48px, 7.58vw, 91px)
- `Section` — HN Bold 92, tracking -4px (mobile ~48)
- `Project/Title` — HN Bold 70, tracking -3px, UPPERCASE + final period (mobile ~36)
- `Project/Number` — HN Bold 23, with period
- `Result` — HN Bold 21, sentence case, `·` separators
- `Kicker` — HN Bold 21, UPPERCASE (rubric labels, nav, dates)
- `Body` — Baskerville 400, 28 (index descriptions) / 22 (long-form), lh 1.3
- `Stat` — HN Bold ~180, tracking -6px (proof-stat number only)

Layout: content max 1200px. Outer margin 62px. Text column starts x=164 inside
sections that use numbers (number sits at x=62). Section rules 2px ink, full
content width. Vertical rhythm ~120–140px between sections.

## Section specs (extending the system)

### Nav / masthead
`HABON NUR` HN Bold 21 left · `WORK · ABOUT · CONTACT` HN Bold 21 right ·
2px ink rule beneath. On paper, sticky optional. No hover effects beyond
underline.

### Hero
Per DESIGN-SPECS exactly: "THE HUMAN IS THE" (52) → matted b&w photograph
(760px, full image, NEVER object-fit: cover, no border/shadow) → "HEADLINE." (91).
All aligned to the photo's left edge (x=220 on the 1200 canvas).

### Proof stat (immediately after hero)
One dominant gesture: `$2M+` in Stat style. Below it, Baskerville 28:
"in revenue protected by an AI monitoring agent built at Square." Then a Result
line: `500+ campaigns · 10+ locales · 4M+ sellers · agents running 24/7`.
Left-aligned to x=220 axis. 2px rule above and below the section.

### Selected Work index
Per DESIGN-SPECS exactly (92 heading, 23 numbers, 70 titles, 28 Baskerville
descriptions, 21 result lines, 2px rules between projects). Additions:
- Rubric kickers between groups: `CLIENT: SQUARE — 2024–2026` in Kicker style,
  sitting on its own line above the group's first rule.
- Entire row is the link target (no buttons, no "READ →" pills). Hover:
  underline the title. That's it.

### The pitch — the one ink field
Full-width `#171613` field (the "reversed" 60s print ad — the single dark
moment on the page). Type in Paper color: headline HN Bold ~64
"OLD-SCHOOL MARKETING. NEW-SCHOOL MACHINERY." + Baskerville body (Paper) +
final line in HN Bold 21: "Every claim on this site carries a receipt — a
metric, a log, or a diagram." No other section may be dark.

### The teacher thread
Paper. HN Bold ~48 "I'VE ALWAYS TAUGHT THE ROOM." + Baskerville 22 body
(co-op → AI Talks, 15+ marketers, 9 production tools). Short section — half
column width, hard-left on the x=220 axis.

### The résumé, in one scroll
Newspaper listing. Each row: 2px rule · employer + dates in HN Bold 23
(`SQUARE — 2024–2026`) · role + promotion in Baskerville 22 · one Result line
per row (the headline metric for that job). Certifications as a final Result
line: `Braze Certified (2026) · Iterable Certified (2024)`.

### Available (looking-for + contact, one section)
Closing dominant gesture: `AVAILABLE.` in Section/Stat scale. Baskerville 22:
the builder's-seat sentence + NYC/Remote. Result-line links:
`Email · LinkedIn · GitHub · Résumé (PDF)`. Last line, Baskerville italic 18:
"Replies within one business day — the human, not an agent."

### Footer
2px rule · HN Bold 14: `HABON NUR · MMXXVI` left, `NYC / REMOTE` right.

### Case-study pages (/work/square, /work/hermes, /work/open-engine)
Same skeleton as home: kicker (`CLIENT: SQUARE`) → Project/Title headline →
Baskerville standfirst → matted artifact (diagram or screenshot, b&w, matted
like the hero photo — never full-bleed) → sections separated by 2px rules →
each system/chapter gets number + title + Baskerville body + Result line.
Diagrams use the print style (paper bg, 2px ink boxes, Helvetica labels,
Baskerville captions) — see /diagrams, regenerated to match.

## Motion (restrained to match the system)
- Scroll reveals only: fade + 16px rise, 0.5s, on section entry. No stagger
  theatrics, no hovers beyond underline, no flicker, no parallax.
- The dominant gesture per screen does the work; motion never competes.

## Build order
1. Color + text styles above
2. Masthead + hero (spec-exact) at desktop, then mobile clamp sizes
3. Sections top-to-bottom with real copy from copy-deck.md
4. One case page fully → componentize → duplicate ×2
5. Page settings from seo-and-assets.md
