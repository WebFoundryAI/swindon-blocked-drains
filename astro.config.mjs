import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swindonblockeddrains.co.uk',
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date('2026-03-20'),
      serialize(item) {
        if (item.url === 'https://swindonblockeddrains.co.uk/') {
          return { ...item, priority: 1.0 };
        }
        return { ...item, priority: 0.7 };
      },
    }),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
