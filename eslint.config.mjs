import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['build/*', 'dist/*', '.next/*'],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off', // Disable the ban-ts-comment rule
    },
  },
];
