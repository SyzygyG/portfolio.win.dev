# Content Maintenance Guide

Content edits stay in `data/`; views stay presentational. No PHP framework is
involved — each data file simply returns an array.

## Single Source of Truth

- `data/site.php` — name, role, location, contact/social links, navigation, resume.
- `data/profile.php` — hero, about, education, resume copy.
- `data/projects.php` — work section intro, three projects, and their case studies.
- `data/experience.php` — experience intro and entries grouped by Engineering /
  Leadership & community.
- `data/skills.php` — capabilities intro, six skill groups, currently learning.
- `data/certifications.php` — featured credentials + the Alibaba Cloud series.

## Section Ownership

- `views/pages/home.php` renders hero, work, experience, about/capabilities,
  credentials/resume, and contact from the data files above.
- `views/pages/project.php` renders a case study for one project
  (driven by `data/projects.php`).
- `views/layout.php` + `views/partials/` render the shared shell (head, nav,
  footer, section headers, project features).

## How to Add / Edit

- **Add a project**: append to `projects.items` in `data/projects.php` with a
  `slug`, `index`, `title`, `role`, `year`, `summary`, `description`, `stack`,
  `links`, `media`, and a `caseStudy` block. Register a route in
  `lib/pages.php`. Place the screenshot in `public/images/projects/`.
- **Add an experience entry**: append to the relevant group in
  `data/experience.php`.
- **Add a certification**: append to `featured` or `series.items` in
  `data/certifications.php`, and add the certificate image to
  `public/images/certifications/`.

## Asset Conventions

- Static assets live in `public/` and are copied verbatim into `dist/` at build.
- Images are optimized WebP with a `-800.webp` (or `-thumb.webp`) variant where
  responsive sizing is used. Reference them with root-relative paths (`/images/...`).
- The resume is `public/documents/resume.pdf`.

## Rebuild

```bash
corepack pnpm build   # Tailwind CSS + PHP render → dist/
```
