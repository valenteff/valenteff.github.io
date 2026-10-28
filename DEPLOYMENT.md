# DEPLOYMENT — GitHub Pages via GitHub Actions

## Two supported URL patterns

**Option A — user site (preferred if available):**
- Repository named exactly `<username>.github.io`
- `astro.config.mjs`: `site: 'https://<username>.github.io'`, `base: '/'`

**Option B — project site:**
- Repository e.g. `portfolio`
- `astro.config.mjs`: `site: 'https://<username>.github.io'`, `base: '/portfolio'`

⚠️ The current `astro.config.mjs` uses a placeholder domain. **Set the real username/base before the
first deployment build.** Astro's `base` is applied automatically to all internal links and assets.

## Steps

1. Create the repository on GitHub (decide public vs. private — GitHub Free generally requires a
   **public** repo for Pages; a private repo still produces a **public** website).
2. Fix `site` and `base` in `astro.config.mjs`.
3. Push `main`:
   ```bash
   git init && git checkout -b main
   git add . && git commit -m "Portfolio v1"
   git remote add origin git@github.com:<username>/<repo>.git
   git push -u origin main
   ```
4. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The included `.github/workflows/deploy.yml` builds (`npm ci && npm run build`) and deploys the
   `dist` directory. Required permissions (`pages: write`, `id-token: write`) are already declared.
6. After the Actions run succeeds, open the URL and verify all routes, the résumé link, and 404.

## Testing the base path locally (project-site mode)

```bash
npm run build && npm run preview
```
Astro's preview serves with the configured `base`, so links can be validated without GitHub.

## Rollback

Settings → Pages → Deployments (or the Actions run list): select the last known-good deployment
and re-deploy it, or `git revert` the offending commit and push.

## Custom domain (optional, later)

Not required for launch. If added later: `public/CNAME` + DNS per GitHub docs, and update `site`
in `astro.config.mjs`.
