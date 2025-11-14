import path from "path";

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    commonjsOptions: {
      include: [/@repo\/ui/, /node_modules/],
    },
  },
  resolve: {
    alias: {
      '@repo/ui': path.resolve("../../packages/ui/src"),
    },
  },
})
