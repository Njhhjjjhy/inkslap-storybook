# inkslap-storybook

The Inkslap brand and design system, documented in Storybook.

**Brand:** Inkslap (NCI Trading Co., Ltd.) — a B2B marketplace for custom corporate gifts.
**Source data:** Extracted from `https://inkslap.com` on 2026-05-12. Cross-referenced with the company brand brief.
**Language:** English-first; Traditional Chinese alongside as the translation reference.

## Run locally

```bash
npm install
npm run storybook
```

Open http://localhost:6006.

## Build for deploy

```bash
npm run build-storybook
```

Outputs a static site to `storybook-static/`. Configured for Vercel via `vercel.json`.

## Contents

- **Introduction** — what this site is, how to use it.
- **Foundations** — Logo, Color, Typography, Spacing, Shadows, Iconography, Imagery, Motion.
- **Guidelines** — Brand Principles, Voice & Tone, Writing Style, Bilingual handling, Accessibility.
- **Components** — Buttons, Cards, Forms, Navigation, Modals.
- **Audit** — Findings: the drift catalogue from the live-site extraction; what to normalise.

## Notes on canonical values

The live site exhibits drift between several near-identical values; this design system collapses them to a single canonical token. See **Audit → Findings** for the full list. Examples:

- Brand blue → **`#0099DE`** (drops `#119ADE`, `#0D95DE`).
- Primary text → **`#040404`** (drops `#000`, `#111`).
- Brand name → **`Inkslap`** in body, **`inkslap`** in the wordmark only.
