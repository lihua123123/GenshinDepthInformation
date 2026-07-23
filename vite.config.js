import { defineConfig } from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
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
      },
    },
  },
});