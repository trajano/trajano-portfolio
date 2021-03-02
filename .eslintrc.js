// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },

  env: {
    browser: true,
    jest: true,
    node: true
  },

  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',

  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript'
  ]
}
