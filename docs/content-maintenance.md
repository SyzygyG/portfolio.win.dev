# Content Maintenance Guide

This repo is easiest to maintain when content edits stay in `src/data/` and components stay presentational.

## Single Source of Truth

- `src/data/profile.ts`: owner identity, hero copy/stickers/coordinates, marquee phrases, about content, resume link, GitHub handle
- `src/data/navigation.ts`: topbar + dock section links (`#about`, `#projects`, `#experience`, `#skills`, `#certificates`, `#contact`)
- `src/data/skills.ts`: tabbed skill inventory (devicon slugs) + "currently exploring" strip
- `src/data/projects.ts`: project postcards (category, domain label, role, year, one-liner, stack, links)
- `src/data/experience.ts`: quote-driven experience rows + education card
- `src/data/certifications.ts`: credential entries; the UI spotlights three and lists the rest in a dialog
- `src/data/contact.ts`: email / phone / LinkedIn / GitHub entries + resume document path
- `src/data/socials.ts`: contact section intro, footer tagline and link ordering

## Section Ownership

- `Topbar`, `Ticker` (marquee): read from `navigation.ts` + `profile.ts`
- `Hero`: reads `profile.ts` (hero + avatar)
- `About`: reads `profile.ts`
- `Projects`: reads `projects.ts`
- `Experience`: reads `experience.ts` + resume link from `profile.ts`
- `Skills`: reads `skills.ts`; devicon images load from jsdelivr with a glyph fallback on error
- `Credentials`: reads `certifications.ts`; spotlight order is controlled by `SPOTLIGHT_SLUGS` in the component
- `Contact`: reads `contact.ts` + `socials.ts`; the form composes a `mailto:` link
- `Footer`: reads `socials.ts`

## Assets

- Ship raster imagery as WebP under `public/images/` (project shots, headshot, resume preview, certificates).
- Decorative mascots live in `public/images/decor/` and are original illustrations; reuse them rather than adding new downloads.
- Fonts are self-hosted woff2 files in `public/fonts/` (Baloo 2, Nunito, IBM Plex Mono) referenced from `globals.css`.

## Placeholder Workflow

- Keep placeholders explicit in data with `kind: "placeholder"` and a `todo` string that starts with `TODO: replace`.
- When the real asset is ready, swap the data entry to `kind: "image"` and provide the asset path plus alt text.
- Store static assets in `public/` and reference them with static-export-safe relative paths such as `images/...` or `documents/...`.

## Review Notes

- `src/data/skills.ts` inventory is grouped for display; verify against the resume and project history before considering it final.
