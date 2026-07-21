// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mdpva.org',
  output: 'static',

  // Emit images as plain static assets (no /_image runtime endpoint), so they
  // render on static Cloudflare hosting even if the build runs in Worker mode.
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});