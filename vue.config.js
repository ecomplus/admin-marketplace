const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 9330,
    open: true
  },

  css: {
    extract: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      library: '__ecomplus_marketplace',
      libraryTarget: 'umd'
    }
  },

  publicPath: devMode ? '/' : '/assets/vendor/ecomplus-marketplace/',
  outputDir: devMode ? 'test' : 'dist',
  filenameHashing: false,

  chainWebpack: config => {
    config.externals([
      {
        axios: {
          commonjs: 'axios',
          commonjs2: 'axios',
          root: 'axios'
        }
      },
      {
        eventemitter3: {
          commonjs: 'eventemitter3',
          commonjs2: 'eventemitter3',
          root: 'EventEmitter3'
        }
      },
      {
        'blueimp-md5': {
          commonjs: 'blueimp-md5',
          commonjs2: 'blueimp-md5',
          root: 'md5'
        }
      },
      {
        '@ecomplus/utils': {
          commonjs: '@ecomplus/utils',
          commonjs2: '@ecomplus/utils',
          root: 'ecomUtils'
        }
      },
      {
        '@ecomplus/client': {
          commonjs: '@ecomplus/client',
          commonjs2: '@ecomplus/client',
          root: 'ecomClient'
        }
      },
      {
        '@ecomplus/auth': {
          commonjs: '@ecomplus/auth',
          commonjs2: '@ecomplus/auth',
          root: 'EcomAuth'
        }
      }
    ])
  }
}
