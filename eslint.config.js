import eslint from '@eslint/js';
import stylexPlugin from '@stylexjs/eslint-plugin';
import vitestPlugin from '@vitest/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    name: 'ignore setting',
    ignores: ['dist', 'coverage'],
  },
  {
    name: 'common setting',
    languageOptions: {
      // ECMAScriptのバージョンを指定
      ecmaVersion: 'latest',
      // グローバル変数を定義
      globals: globals.browser,
    },
  },
  {
    name: 'eslint setting',
    files: ['**/*.{js,jsx}'],
    extends: [eslint.configs.recommended],
  },
  {
    // https://typescript-eslint.io/
    name: 'typescript eslint setting',
    files: ['**/*.{ts,tsx}'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  },
  {
    // https://www.npmjs.com/package/eslint-plugin-react
    name: 'react eslint setting',
    files: ['**/*.{jsx,tsx}'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // 分割代入を強制します。
      'react/destructuring-assignment': 'error',
      // コンポーネントの定義方法をアロー関数に統一します。
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      // useStateの返り値の命名を[value, setValue]に統一します。
      'react/hook-use-state': 'error',
      // boolean型のPropsの渡し方を統一します。
      'react/jsx-boolean-value': 'error',
      // React Fragmentの掻き方を統一します。
      'react/jsx-fragments': 'error',
      // Propsとchildrenで不要な中括弧を削除します。
      'react/jsx-curly-brace-presence': 'error',
      // 不要なReact Fragmentを削除します。
      'react/jsx-no-useless-fragment': 'error',
      // Propsの並び順をアルファベット順に統一します。
      'react/jsx-sort-props': 'error',
      // 子要素がない場合は自己終了タグを使用します。
      'react/self-closing-comp': 'error',
      // コンポーネントをパスカルケースに統一します。
      'react/jsx-pascal-case': 'error',
      // dangerouslySetInnerHTMLを許可しません。
      // https://qiita.com/ushi_osushi/items/2c09e2d3a1f3db63e5a3
      'react/no-danger': 'error',
      // Propsの型チェックはTypeScriptで行うため無効化します。
      'react/prop-types': 'off',
    },
  },
  {
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    name: 'react hooks eslint setting',
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      // 依存配列に使用されている全ての変数が含まれていないとエラーとします。
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    // https://www.npmjs.com/package/eslint-plugin-import
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    name: 'import eslint setting',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        'warn',
        {
          // グループごとのインポート順を設定します。
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'type',
            'index',
            'object',
          ],
          // 独自グループの設定をします。
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          // pathGroupsのpattern判定が影響されないグループを設定します。
          pathGroupsExcludedImportTypes: ['builtin'],
          // グループ内の順位付けを設定します。
          alphabetize: { order: 'asc', caseInsensitive: true },
          // グループ間のスペースは必須とします。
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    // https://www.npmjs.com/package/eslint-plugin-vitest
    name: 'vitest eslint setting',
    plugins: { vitest: vitestPlugin },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      // it ではなく test に統一します。
      'vitest/consistent-test-it': ['error', { fn: 'test' }],
    },
  },
  {
    // https://stylexjs.com/docs/api/configuration/eslint-plugin/
    // https://www.npmjs.com/package/@stylexjs/eslint-plugin
    name: 'stylex eslint setting',
    plugins: {
      '@stylexjs': stylexPlugin,
    },
    rules: {
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/sort-keys': 'warn',
    },
  },
  prettierConfig,
);
