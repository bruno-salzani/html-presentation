import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild', // Minificação eficiente
    cssMinify: true,   // Minificação de CSS
  },
  server: {
    open: true,
  },
});
