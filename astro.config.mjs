import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE || 'https://www.jojuvo.com',
  integrations: [react(), tailwind(), sitemap()],
  prefetch: true,
});

export default defineConfig({ site: 'https://yourdomain.com/sub', base: '/sub' });
