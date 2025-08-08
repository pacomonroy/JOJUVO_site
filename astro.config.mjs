import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE || 'https://www.jojuvo.mx',
  integrations: [react(), tailwind(), sitemap()],
  prefetch: true,
});
