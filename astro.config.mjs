import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/gamix/',

  site: 'https://espritmobile.com',
  integrations: [tailwind()],
});