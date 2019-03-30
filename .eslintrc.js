module.exports = {
  parser: '@typescript-eslint/parser',
  'env': {
    'browser': true,
    'es6': true
  },
  plugins: ['@typescript-eslint'],
  'extends': ['standard','plugin:@typescript-eslint/recommended','prettier/@typescript-eslint','plugin:prettier/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
  }
}
