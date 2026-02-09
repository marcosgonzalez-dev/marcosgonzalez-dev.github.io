// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://marcosgonzalez-dev.github.io',

  build: {
    assets: 'assets'
  },

  server: {
    port: 4321
  },

  vite: {
    plugins: [tailwind()],
  },
});