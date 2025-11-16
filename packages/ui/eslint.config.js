import { config } from '@repo/eslint-config/index.js';

export default [
  ...config,
  {
    ignores: ['.svelte-kit/**', 'dist/**']
  },
  {
    files: ['**/*.svelte'],
    rules: {
      'svelte/no-navigation-without-resolve': 'off'
    }
  }
];
