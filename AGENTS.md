# Agent Guidance

## Project Context

This is a professional IT portfolio website targeting recruiters, hiring managers, and freelance clients, with a
Hatsune Miku-inspired visual identity (turquoise `#39C5BB` core palette, dark "console" surfaces, cute sticker
mascots). Built with **Next.js 15 + React 19 + TypeScript** using the App Router and configured for **static export**.

**Stack:**
- Framework: Next.js 15 (App Router, static export)
- Language: TypeScript (strict)
- Runtime: React 19
- Package manager: pnpm via corepack
- Styling: global CSS with custom properties in `src/styles/globals.css` (no CSS framework)
- Fonts: self-hosted woff2 in `public/fonts/` (Baloo 2 rounded display, Nunito body, IBM Plex Mono labels)

**Project structure:**
src/
├── app/              # Next.js App Router pages and layout
├── components/       # layout/, sections/, ui/ components
├── data/             # All portfolio content (projects, experience, skills, etc.)
├── styles/           # globals.css — design tokens and base styles
└── types/            # TypeScript type definitions

**Design system at a glance:**
- Palette: light gray `#EDF1F2`, ink `#1C2B33`, Miku teal `#14C4BB`/deep `#0A8F88`, sun `#FFD84D`, pink `#FF7BAC`
- Fonts: Baloo 2 (rounded display), Nunito (body), IBM Plex Mono (labels/metadata)
- Warm editorial composition: sticker-collage hero, sun marquee band, numbered sections (/ 01-06),
  alternating project postcards, quote-driven experience rows, tabbed devicon skills grid,
  spotlight certificates + "view all" dialog, mailto contact form, mobile bottom dock navigation
- Decorative mascots live in `public/images/decor/` (original AI-illustrated stickers, used sparingly)

**Deployment target:** Static export via Next.js (`output: 'export'`)

## Confirmation Behavior

- Ask before any change that touches the visual identity: new color tokens, new fonts, new layout patterns, or structural component changes.
- Ask before replacing or removing existing portfolio content in `src/data/` — these are real personal entries.
- Ask before adding new dependencies, changing Next.js config, or making architectural decisions with meaningful tradeoffs.
- Keep confirmation requests short. Prefer a recommended option plus 1–3 concrete alternatives over open-ended questions.
- Do not ask for confirmation on clearly scoped, low-risk tasks: fixing a broken link, correcting a typo, adding a missing ARIA label, or updating a data value in `src/data/`.

## Programming Direction

- **Content belongs in `src/data/`, never hardcoded in components.** If a value is specific to the portfolio owner, it goes in the data layer.
- **Reuse components; do not duplicate UI.** Before building a new component, check `src/components/` for an existing one that fits or can be extended.
- **Secondary detail goes behind interactions.** The full certificate list opens in a `Dialog` instead of lengthening the page.
- **Preserve static export compatibility.** No server-side runtime features that break `output: 'export'`.
- **TypeScript is strict.** New data shapes go in `src/types/`. Do not use `any`. Props must be typed.
- **CSS changes use existing custom property tokens** from `globals.css`. Do not hardcode hex values inline or in component styles.
- **JavaScript/React should stay purposeful.** Prefer server components unless interactivity is required.
- **Fonts are self-hosted.** Never reintroduce `next/font/google` — the build environment and deployment must not depend on Google Fonts at build time.

## Content & Customization Rules

- All portfolio content lives in `src/data/`. This is the single source of truth.
- Placeholder content must be clearly marked with `TODO: replace` comments or `todo` strings so the owner knows what needs updating.
- Never remove a section or data entry without confirming with the user.
- When adding a new project, experience entry, or certification, extend the existing data file and reuse the existing component.
- Raster assets ship as WebP in `public/images/` (originals remain in git history). New screenshots should be converted to WebP before committing.

## Workflow Expectations

- **Use `main` only for this repository** for long-lived work. Arena review sessions run on their own `arena/*` branch; do not push session work to `main` unless the user asks.
- After any meaningful change, verify with:

```bash
corepack pnpm lint
corepack pnpm test
corepack pnpm build
```

- For accessibility changes, validate semantic HTML, keyboard navigation, ARIA labels, and color contrast. Dialogs must trap focus, close on Escape, and restore focus.
- For layout changes, verify behavior at mobile, tablet, and desktop breakpoints (dock appears ≤1020px, bottom-sheet dialogs ≤700px).
- Respect `prefers-reduced-motion` for all new animation.
