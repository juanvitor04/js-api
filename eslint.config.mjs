import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }], // Limita a 1 linha em branco
      'semi': ['error', 'always'],'no-console':'off','class-methods-use-this':'off','quotes': ['error', 'single',{'avoidEscape':true}],'indent': ['error', 2],         // Ponto e vírgula obrigatório
    }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended']
  }
]);
