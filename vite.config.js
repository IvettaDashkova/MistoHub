import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
      shared: 'src/shared',
=======
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      assets: '/src/assets',
      components: '/src/components',
      pages: '/src/pages',
      services: '/src/services',
      shared: '/src/shared',
>>>>>>> dev
    },
  },
  base: '/MistoHub/',
});
