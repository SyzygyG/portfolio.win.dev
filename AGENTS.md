# Agent Guidance

## Project Context

This is a professional portfolio website for **Erwin Gamaliel Gamalong**, a full
stack developer & project manager, targeting recruiters, hiring managers, and
clients. It is an **editorial engineering portfolio** built with **PHP +
Tailwind CSS**, rendered to static HTML.

**Stack:**
- Language: PHP 8.3 (templates + data + a small static builder — no framework)
- Styling: Tailwind CSS v4 (CSS-first `@theme` tokens in `src/css/main.css`)
- Build: `scripts/build.mjs` (Tailwind CLI + PHP-via-wasm) → `dist/`
- Deployment: static hosting (Cloudflare Pages), output directory `dist/`
- Client JS: one small vanilla file, `src/js/main.js` (~3 KB, no framework)

**Project structure:**
```
bin/build.php         # renders pages → dist/ (pure PHP)
data/                 # portfolio content (single source of truth)
lib/                  # pure helpers (html, view, dates, pages registry)
src/css/main.css      # Tailwind v4 tokens + component styles
src/js/main.js        # mobile menu, copy button, scroll reveal
views/                # layout.php + partials/ + pages/
public/               # optimized images, resume.pdf, fonts, favicon, robots, sitemap
scripts/build.mjs     # CI runner (Tailwind + PHP-via-wasm)
scripts/serve.mjs     # local static preview
```

**Design system at a glance:**
- Palette: paper `#FAFAF7`, ink `#17191F`, body `#3C3F46`, accent blue `#2050C8`,
  dark `#12141B` (contact/footer)
- Fonts (self-hosted): Archivo (grotesk, headings + UI + body), Newsreader italic
  (occasional emphasis only), IBM Plex Mono (technical metadata)
- Editorial, left-aligned, 12-column grid, max width 1200px, hairline rules
  instead of cards/shadows. No glassmorphism, no gradients, no fake counters.

## Confirmation Behavior

- Ask before replacing or removing factual content in `data/` — these are real
  personal entries (projects, experience, certifications, contact details).
- Ask before changing the visual identity (colors, fonts, layout patterns).
- Ask before adding dependencies or changing the build/deployment setup.
- Keep confirmation requests short: a recommended option plus 1–3 alternatives.

## Programming Direction

- **Content belongs in `data/`, never hardcoded in views.** Portfolio facts live
  in PHP files that return arrays; views only render.
- **Views are templates.** Use the existing partials (`partial()`) and the
  `icon()` helper instead of duplicating markup.
- **Reuse component classes in `src/css/main.css`.** Don't invent one-off styles
  or sprinkle arbitrary Tailwind values.
- **Keep PHP plain.** No framework, no database, no Composer packages, no
  server-side runtime. The site must render to static HTML with `php bin/build.php`.
- **Keep client JS minimal and progressive.** Interactivity only where required
  (mobile menu, copy button, reveal). The site must remain fully readable with
  JavaScript disabled.

## Content & Customization Rules

- All portfolio content lives in `data/*.php` (single source of truth):
  `site.php`, `profile.php`, `projects.php`, `experience.php`, `skills.php`,
  `certifications.php`.
- Adding a project/role/certification means extending the relevant data file and
  reusing the existing views — no component changes required in most cases.
- Placeholder content must be clearly marked with `TODO: replace` comments.

## Workflow Expectations

- **Use `main` only.** Do not create feature branches or worktrees unless the
  user explicitly asks.
- Verify after meaningful changes:
  ```bash
  corepack pnpm install   # first time only
  corepack pnpm build     # Tailwind + PHP render → dist/
  ```
- For accessibility changes, validate semantic HTML, keyboard navigation, ARIA,
  focus states, and color contrast.
- For layout changes, verify behavior at mobile, tablet, and desktop breakpoints.
- Avoid glassmorphism, gradients, large animations, fake counters, typing
  effects, and visual clutter.

## Deployment

- Static output lives in `dist/` (git-ignored). Cloudflare Pages builds with
  `pnpm install && pnpm build` and serves `dist/`.
- `php bin/build.php` reproduces the HTML when a native PHP CLI is available
  (run `tailwindcss -i src/css/main.css -o dist/assets/main.css --minify` first).
