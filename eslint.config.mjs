import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      semi: 'warn',
      quotes: ['warn', 'single', { avoidEscape: true }]
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        imports: 'readonly',
      }
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  }
]);
