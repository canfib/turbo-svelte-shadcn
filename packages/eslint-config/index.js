import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export const config = ts.config(
  // 1. Base JS rules
  js.configs.recommended,

  // 2. Base TS rules
  ...ts.configs.recommended,

  // 3. Base Svelte rules (this adds svelte-eslint-parser)
  ...svelte.configs['flat/recommended'],

  // 4. Global ignores and settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // 4. Our custom Svelte configuration block
  {
    files: ['**/*.svelte'],
    ignores: ['.svelte-kit/*'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    },
    rules: {
      // Apply base JS rules to <script>
      ...js.configs.recommended.rules,

      // Apply base TS rules to <script>
      ...ts.configs.recommended[0].rules,
      ...ts.configs.recommended[1].rules,

      // Our override for Svelte 5 $props
      'prefer-const': 'off'
    }
  }
);
