const fs = require('fs')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('./src/assets/styles/settings/_variables.scss', 'utf-8')
      }
    }
  },
  parallel: true
}
