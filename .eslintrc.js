module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'error',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
