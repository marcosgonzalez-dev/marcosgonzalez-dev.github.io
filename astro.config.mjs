// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://marcosgonzalez-dev.github.io',

  server: {
    port: 4321
  }
});