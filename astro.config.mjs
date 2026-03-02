import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swindonblockeddrains.co.uk',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  build: { format: 'directory' },
});
