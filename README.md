# Erwin Gamalong — Portfolio

An editorial engineering portfolio for **Erwin Gamaliel Gamalong**, full stack
developer & project manager. Built with **PHP + Tailwind CSS** and rendered to
static HTML.

## Stack

- **PHP 8.3** — plain templates (`views/`), content (`data/`), and a small static
  builder (`bin/build.php`). No framework, no database, no runtime.
- **Tailwind CSS v4** — CSS-first design tokens in `src/css/main.css`
  (`@theme`), compiled by the standalone CLI.
- **Vanilla JS** — one small file (`src/js/main.js`) for the mobile menu, email
  copy button, and a subtle scroll reveal.

## Structure

```
bin/build.php         # renders pages → dist/
data/                 # portfolio content (single source of truth)
lib/                  # html/view/dates helpers + page registry
src/css/main.css      # design tokens + component styles
src/js/main.js        # progressive-enhancement interactions
views/                # layout + partials + pages
public/               # optimized images, resume, fonts, favicon, robots, sitemap
scripts/build.mjs     # portable build (Tailwind CLI + PHP-via-wasm)
scripts/serve.mjs     # local static preview of dist/
```

## Build

Requires Node 18+ and pnpm (via corepack).

```bash
corepack pnpm install
corepack pnpm build      # → dist/
```

The build compiles Tailwind CSS, then renders the PHP site through a bundled
PHP 8.3 runtime (php-wasm), so it works anywhere Node runs — including
Cloudflare Pages. With a native PHP CLI you can produce the same HTML with:

```bash
tailwindcss -i src/css/main.css -o dist/assets/main.css --minify
php bin/build.php
```

## Preview locally

```bash
corepack pnpm build
node scripts/serve.mjs 4173
```

## Deployment

Static output in `dist/` (git-ignored). Deploy to Cloudflare Pages with build
command `pnpm install && pnpm build` and output directory `dist`.
