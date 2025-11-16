import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      '@repo/ui': './src',
      '@repo/ui/*': './src/*',
      '@repo/ui/utils': './src/utils.ts',
      '@repo/ui/components': './src/components',
      '@repo/ui/components/*': './src/components/*',
      '@repo/ui/hooks': './src/hooks',
      '@repo/ui/hooks/*': './src/hooks/*',
      '@repo/ui/lib': './src/lib',
      '@repo/ui/lib/*': './src/lib/*'
    }
  }
};

export default config;
