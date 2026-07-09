import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    assetsDir: '',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'app',
        entryFileNames: 'script.js',
        assetFileNames: 'style.css',
        inlineDynamicImports: true,
      },
    },
  },
  plugins: [
    {
      name: 'remove-module-type',
      enforce: 'post',
      transformIndexHtml(html) {
        return html
          .replace(/\s+type="module"/g, '')
          .replace(/\s+crossorigin(=[^\s>]*)?/gi, '');
      },
    },
  ],
});
