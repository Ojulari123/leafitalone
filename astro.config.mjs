import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.leafitalone.ca',
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  // Pages build as /about.html and are served at /about, matching every internal link and canonical tag
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
