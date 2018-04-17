const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.loaders.scss = options.loaders.scss.concat({
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, './src/assets/styles/settings/_variables.scss')
          }
        })
        return options
      })

    config
      .module
      .rule('scss')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve('./src/styles/settings/_vatiables.scss')
      })
  }
}
