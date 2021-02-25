module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
