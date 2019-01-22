const fs = require('fs')

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
  parallel: true
}
