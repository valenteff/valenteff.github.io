import { defineConfig } from 'astro/config';

// For a project-site subpath deployment, set SITE_BASE to '/<repo>' and
// SITE to 'https://<username>.github.io'. For a user site (<username>.github.io
// repo), leave SITE_BASE empty.
// https://astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://valenteff.github.io',
  base: '/',
});
