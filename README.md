# fabio-portfolio

Static personal portfolio for Fabio Valente — Technical Project Manager · AI Workflow & Automation Specialist.
Built with [Astro](https://astro.build) in static-output mode. No backend, no client-side SPA JS.

## Commands

```bash
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:4321)
npm run build   # production build to ./dist
npm run preview # preview the production build
```

## Structure

- `src/pages/index.astro` — homepage (hero, stats, selected work, capabilities, process, experience, contact)
- `src/pages/work/*.astro` — four case studies
- `src/pages/404.astro` — custom not-found page
- `src/content/*.ts` — site links, project metadata, experience/education data (**edit content here**)
- `src/components/` — reusable UI components and SVG illustrations
- `src/styles/` — design tokens (`tokens.css`), global styles, component styles
- `public/` — favicon, robots.txt, résumé PDF (when approved), evidence assets (when approved)

## Editing content

- Contact info, nav, résumé link: `src/content/site.ts`
- Project cards: `src/content/projects.ts`
- Experience/education: `src/content/experience.ts`
- Case-study long-form copy: directly in each `src/pages/work/*.astro`
- Design tokens (colors, radii, widths): `src/styles/tokens.css`

## Résumé PDF

Place the approved PDF at `public/assets/resume/fabio-valente-resume.pdf`, then set
`resumeAvailable: true` in `src/content/site.ts`. Until then, résumé buttons stay hidden by design
(never a dead link).

## Deployment

See `DEPLOYMENT.md`. Deployment uses GitHub Actions → GitHub Pages (static `dist` output).
Before publishing, review `CONTENT_REVIEW.md` and run a secrets scan.
