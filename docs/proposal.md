# Portfolio Design Overhaul — Proposal

A concise proposal for rebuilding **Erwin Gamalong's developer portfolio** from the
current Next.js/React single-page app into a compact, editorial, PHP + Tailwind site.

## 1. Recommended architecture

A **lightweight, static-rendered PHP site** — not Laravel.

- The portfolio is read-only content: no database, no CMS, no auth, no API, no
  server-side runtime. Laravel (and Blade-on-Laravel tooling like Jigsaw/HydePHP)
  adds Composer, framework lifecycle, and infrastructure this project does not use,
  and it cannot deploy to static hosting (Cloudflare Pages) without extra tooling.
- Instead: plain **PHP templates** (`views/`), **PHP data files** (`data/`, the
  single source of truth), **pure helpers** (`lib/`), and a tiny
  **`bin/build.php`** that renders every page to static HTML in `dist/`.
- This preserves the repository's core principle — *facts separated from
  presentation* — and translates it naturally into PHP rather than doing a
  file-for-file TypeScript port.

### Build & deployment

- `bin/build.php` renders `views/pages/*` into `dist/` and copies `public/` assets.
  Anyone with PHP runs `php bin/build.php` for identical output.
- `scripts/build.mjs` is the CI/portable runner: it compiles Tailwind CSS and runs
  `bin/build.php` through a bundled **PHP 8.3 runtime (php-wasm, dev-only)** so the
  build works anywhere Node runs — including Cloudflare Pages, whose build image has
  no native PHP. Output directory: `dist/`, deployed as static files.
- The shipped site is 100% server-rendered HTML + CSS + ~3 KB of JavaScript.

## 2. Framework & reasoning

Chosen: **lightweight PHP application** (plain-PHP templates + static build).

| Option | Verdict | Reasoning |
| --- | --- | --- |
| Laravel | ✗ | DB/Composer/framework overhead for static content; hard to deploy statically. |
| Blade via Jigsaw/HydePHP | ✗ | Adds a framework for templates a 6-page site does not need. |
| **Plain PHP templates + static build** | ✓ | Zero runtime dependencies, trivial to maintain, fast, deploys anywhere. |

## 3. Tailwind setup

- **Tailwind CSS v4** (`@tailwindcss/cli` standalone, no `tailwind.config.js`).
- Design tokens declared CSS-first in `src/css/main.css` via `@theme`:
  typography, spacing, layout widths, colors, borders, focus states, breakpoints,
  motion. Reusable classes live in `@layer components`; utilities are used for
  one-off layout. No arbitrary values, no utility noise.

## 4. Dependencies

| Dependency | Why |
| --- | --- |
| `tailwindcss` + `@tailwindcss/cli` | Required stack; compiles the stylesheet. |
| `@fontsource-variable/archivo`, `@fontsource-variable/newsreader`, `@fontsource/ibm-plex-mono` | Self-hosted fonts (no CDN, privacy + performance). |
| `php-wasm` (dev) | Lets the PHP build run in PHP-less CI (Cloudflare Pages). |

No icon library (inline SVG), no animation library, no JS framework.

## 5. Information architecture

Small hybrid site. Everything a recruiter needs is on one compact home page; deep
project evidence lives on dedicated pages.

- **`/`** — Hero → **Work** (3 featured projects) → **Experience** (timeline) →
  **About** (bio, education, capabilities) → **Credentials** (certifications +
  resume) → **Contact** (dark section).
- **`/projects/hytec-power-virtual-tour/`** — flagship case study.
- **`/projects/videre/`** — case study.
- **`/projects/qcu-journals/`** — short case study.
- **404** page.

Navigation (desktop): `Erwin Gamalong` · Work · Experience · About · Resume ↗ (PDF).
The long single-page scroll of ~10 equal sections is gone; each page is scannable in
seconds.

## 6. Visual direction

Editorial engineering portfolio: warm paper background, near-black ink, restrained
professional blue accent, one dark near-black section (contact). Left-aligned
default, 12-column grid, max width ~1200px, controlled asymmetry, large project
imagery, hairline rules instead of cards/shadows.

## 7. Typography direction

- **Archivo** (modern grotesk) as the single UI/heading/body face.
- **Newsreader** italic used *occasionally* for a word or pull-quote emphasis only.
- **IBM Plex Mono** reserved for technical metadata: dates, project indices, stack
  lists, labels.
- No more "mono eyebrow → serif heading → sans body" on every section. Clamp-based
  responsive sizing: hero name ~64–88px, positioning ~24–32px, section headings
  ~36–48px, project titles ~28–42px, body 16–18px, metadata 12–14px, labels ≤11px.

## 8. Color direction

Paper `#FAFAF7`, ink `#17191F`, body `#3C3F46`, muted `#686D76`, accent `#2050C8`
(strong professional blue, used sparingly for hierarchy), hairlines `#E4E1D8`,
dark section `#12141B`. No gradients, no glow, no glassmorphism, minimal shadows.

## 9. Interaction strategy

Enhancement only: image scale 1.02 on hover, underline transitions, arrow nudges,
subtle reveal on scroll. No parallax, no typing, no counters, no scroll-jacking.
All motion respects `prefers-reduced-motion`. JavaScript: mobile menu toggle,
email copy button, and a tiny reveal observer — nothing else.

## 10. Accessibility strategy

One H1 per page, logical heading order, semantic landmarks, skip link, keyboard
navigation with visible focus states, correct link/button semantics, accessible
mobile menu (Escape/aria-expanded/focus management), labeled contact links, alt
text on all imagery, ≥44px touch targets, AA contrast, reduced-motion support.

## 11. Performance strategy

Static HTML; single small CSS file; self-hosted WOFF2 fonts (preloaded); optimized
WebP imagery with `width`/`height` + `srcset`; lazy-loading below the fold;
minimal JS (~3 KB, deferred). No framework on the client.

## 12. Proposed project structure

```
├── bin/build.php            # renders pages → dist/ (pure PHP)
├── data/                    # content: site, profile, projects, experience,
│                            #   certifications, skills  (single source of truth)
├── lib/                     # html, view, dates, pages (pure helpers)
├── src/css/main.css         # Tailwind v4 @theme tokens + component CSS
├── views/                   # layout.php + partials/ + pages/
├── public/                  # optimized images, resume.pdf, favicon, robots, sitemap
├── scripts/build.mjs        # CI runner (Tailwind + PHP-via-wasm)
├── package.json             # devDependencies only
├── README.md
└── .gitignore
```
