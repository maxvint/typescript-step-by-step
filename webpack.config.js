var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  WEBGL_RENDERER: true,
  CANVAS_RENDERER: true
})

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/main.ts')
    ]
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ['ts-loader'], include: path.join(__dirname, 'src') },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            // minimize: true
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve('src'),
      'assets': path.resolve('assets')
    },
    modules: [ // 优化模块查找路径
      path.resolve('src'),
      path.resolve('assets'),
      path.resolve('node_modules'), // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ]
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      chunks: ['vendor', 'app'],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        html5: false,
        minifyCSS: false,
        minifyJS: false,
        minifyURLs: false,
        removeComments: false,
        removeEmptyAttributes: false
      },
      hash: false
    }),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 5000,
      server: {
        baseDir: ['./', './dist']
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
