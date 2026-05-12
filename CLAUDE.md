# inkslap-storybook

The Inkslap brand and design system, documented in Storybook. **Live at https://inkslap-storybook.vercel.app.**

The content was extracted from `https://inkslap.com` on 2026-05-12 (see `../inkslap-plan/briefs/inkslap-brand-extraction.md` for the raw extraction). The brand is English-first; Traditional Chinese is the translation reference, not the canonical.

## Deploy workflow

The repo uses a **two-remote pattern** like the sibling `map-prototype` project:

| Remote | URL | Purpose |
|--------|-----|---------|
| `origin` | `github.com/RiaanMOHA/inkslap-storybook` | Work canonical (public) |
| `vercel` | `github.com/Njhhjjjhy/inkslap-storybook` | Vercel deploy mirror (public) |

Vercel is connected to the `Njhhjjjhy` mirror. Auto-deploys on every push to that remote.

**To deploy after changes:**

```bash
git add -A
git commit -m "your message"
npm run deploy
```

`npm run deploy` runs `git push origin main && git push vercel main` — pushes to both remotes in one command. Site rebuilds in ~15 seconds.

If `git push vercel main` ever fails with a credentials error, the gh CLI active account needs to be `Njhhjjjhy`:

```bash
gh auth switch -u Njhhjjjhy
git push vercel main
gh auth switch -u RiaanMOHA
```

## Run locally

```bash
npm install
npm run storybook
```

Open http://localhost:6006.

## Build locally

```bash
npm run build-storybook
```

Outputs to `storybook-static/`. Vercel runs the same command on deploy (configured in `vercel.json`).

## Editing content

The Storybook pages live in `stories/`:

- `Introduction.mdx`
- `Foundations/` — Logo, Color, Typography, Spacing, Shadows, Iconography, Imagery, Motion
- `Guidelines/` — BrandPrinciples, VoiceAndTone, WritingStyle, Bilingual, Accessibility
- `Components/` — Buttons, Cards, Forms, Navigation, Modals
- `Audit/Findings.mdx` — the 20-item drift catalogue from the live-site extraction

Design tokens live in `src/styles/global.css` as CSS custom properties. Reference by token name in MDX (`var(--color-brand-blue)`), never raw hex values.

## Canonical brand decisions

- **Inkslap Blue** is `#0099DE`. The live site also uses `#119ADE` and `#0D95DE` — these are drift; do not use them.
- **Sparkle accent** is `#FFA81B`. Always. Never recolour.
- **Primary text dark** is `#040404`. The live site also uses `#000000` and `#111111` — drift; do not use them.
- **Brand name**: `Inkslap` in body copy, `inkslap` only in the wordmark (closed asset). Never `INKSLAP` or `InkSlap`.
- **Italics are not used anywhere.** No `*italic*`, no `_italic_`, no `<em>`. Use weight 500 for emphasis.
- **English-first.** Every page shows English copy as primary; Chinese sits alongside in `--color-text-muted` at one step down in the type scale.

The full drift catalogue with 20 inconsistencies is in `stories/Audit/Findings.mdx`.

## MDX safety

- Wrap `<` followed by a digit as `&lt;` — MDX 3 will try to parse `<1` as a JSX tag and crash the build.
- Never use italics in MDX content.
- Use straight quotes (`"`) inside JSX attribute values.
