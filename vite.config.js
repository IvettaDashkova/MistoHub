import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      pages: '/src/pages',
      assets: '/src/assets',
      services: '/src/services',
      shared: '/src/shared',
    },
  },
  base: '/MistoHub/',
});
