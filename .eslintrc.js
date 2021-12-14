module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'prettier', 'unused-imports'],
  extends: ['plugin:prettier/recommended', 'plugin:import/typescript'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'sort-imports': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn'],
  },
};
