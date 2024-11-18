const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const i18nextPlugin = require('eslint-plugin-i18next');
const storybookPlugin = require('eslint-plugin-storybook');
const boundariesPlugin = require('eslint-plugin-boundaries');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const orderPlugin = require('eslint-plugin-import');

const path = require('path');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  { 
    plugins: {
        i18next: i18nextPlugin,
        import: orderPlugin,
        boundaries: boundariesPlugin,
        storybook: storybookPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin
    }, 
    
    rules: {
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        "@typescript-eslint/no-var-requires": 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'typescript-eslint/no-misused-promises': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        '@typescript-eslint/no-unsafe-return': 'warn',
        'prefer-const': 'error',
        'comma-dangle': ['error', 'never'],
        'i18next/no-literal-string': ['warn', { markupOnly: true }],
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'always',
                pathGroups: [
                    { group: 'internal', position: 'after', pattern: '~/processes/**' },
                    { group: 'internal', position: 'after', pattern: '~/pages/**' },
                    { group: 'internal', position: 'after', pattern: '~/widgets/**' },
                    { group: 'internal', position: 'after', pattern: '~/features/**' },
                    { group: 'internal', position: 'after', pattern: '~/entities/**' },
                    { group: 'internal', position: 'after', pattern: '~/shared/**' }
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
            }
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/app/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/processes/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/pages/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/widgets/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/features/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/entities/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['~/shared/*/*/**'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/app'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/processes'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/pages'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/widgets'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/features'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/entities'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/shared'] }
                ]
            }
        ],
        'boundaries/element-types': [
            'warn',
            {
                default: 'disallow',
                rules: [
                    { from: 'app', allow: ['processes', 'pages', 'widgets', 'features', 'entities', 'shared'] },
                    { from: 'processes', allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
                    { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
                    { from: 'widgets', allow: ['features', 'entities', 'shared'] },
                    { from: 'features', allow: ['entities', 'shared'] },
                    { from: 'entities', allow: ['shared'] },
                    { from: 'shared', allow: ['shared'] }
                ]
            }
        ]
    },
    settings: {
        'boundaries/elements': [
          { type: 'app', pattern: 'app/*' },
          { type: 'processes', pattern: 'processes/*' },
          { type: 'pages', pattern: 'pages/*' },
          { type: 'widgets', pattern: 'widgets/*' },
          { type: 'features', pattern: 'features/*' },
          { type: 'entities', pattern: 'entities/*' },
          { type: 'shared', pattern: 'shared/*' }
        ],
        'boundaries/ignore': ['**/*.test.*']
    }
  },
  {
    files: ['**/*.test.*', '**/*.stories.*'],
    plugins: {
        i18next: i18nextPlugin,
        boundaries: boundariesPlugin
    },
    rules: {
      'boundaries/element-types': 'off',
      'i18next/no-literal-string': 'off'
    }
  },
  { files: ['config/**/*.ts'], rules: { 'no-restricted-imports': 'off' } },
  { files: ['src/shared/**/*.tsx', '**/*.stories.*'], rules: { 'react/jsx-props-no-spreading': 'off' },     plugins: {
    react: reactPlugin,

}, },
  { files: ['src/pages/**/*.ts', 'src/pages/*.tsx'], rules: { 'no-return-await': 'off' } },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: path.resolve(__dirname),
      },
    },
  },
);