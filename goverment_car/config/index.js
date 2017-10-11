// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./prod.env'),
    port: 8000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/register': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/register': '/register'
        }
      },
      '/login': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      },
      '/checktoken': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/checktoken': '/checktoken'
        }
      },
      '/drive': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/drive': '/drive'
        }
      },
      '/finishlist': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/finishlist': '/finishlist'
        }
      },
      '/unfinishlist': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/unfinishlist': '/unfinishlist'
        }
      },
      '/usefinish': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/usefinish': '/usefinish'
        }
      },
      '/addcar': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/addcar': '/addcar'
        }
      },
      '/carlist': {
        target: 'http://115.159.193.226:3001',
        changerOrigin: true,
        pathRewrite: {
          '^/carlist': '/carlist'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
