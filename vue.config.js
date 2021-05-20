const fs = require('fs')

// Only define as externals for production builds
const webpackProductionConfig = {
  externals: {
    'focus-trap': 'focus-trap',
    'focus-trap-vue': 'focus-trap-vue'
  }
}

module.exports = {
  lintOnSave: undefined,
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync(
          './src/assets/styles/settings/_blazevariables.scss',
          'utf-8'
        )
      }
    }
  },
  configureWebpack: process.env.NODE_ENV === 'production' ? webpackProductionConfig : {},
  parallel: true
}
