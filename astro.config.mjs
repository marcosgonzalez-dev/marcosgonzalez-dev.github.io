// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcosgonzalez-dev.github.io',

  // Agrega esto para cambiar el nombre de la carpeta de estilos
  build: {
    assets: 'assets'
  },

  server: {
    port: 4321
  }
});