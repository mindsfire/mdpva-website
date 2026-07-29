// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mdpva.org',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', kn: 'kn-IN' },
      },
    }),
  ],

  // English stays unprefixed at the site root, so no existing URL changes and
  // nothing needs redirecting. Kannada lives under /kn/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kn'],
    routing: { prefixDefaultLocale: false },
  },

  // Emit images as plain static assets (no /_image runtime endpoint), so they
  // render on static Cloudflare hosting even if the build runs in Worker mode.
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});