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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attributes-order': 'error',
    'vue/html-quotes': 'error',
    'vue/order-in-components': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/script-indent': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
