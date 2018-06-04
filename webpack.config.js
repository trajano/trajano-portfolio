var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var path = require('path')

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /app\.scss$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'handlebars-loader'
      },
      {
        test: /font-faces\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  entry: ['./src/app'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[hash].js'
  },
  externals: {
    'node-waves': 'Waves',
    'jquery': 'jQuery'
  },
  plugins: [
    new WebappWebpackPlugin({
      logo: './src/logo-2048x2048.png',
      favicons: {
        appName: 'Trajano',
        appDescription: 'Archimedes Trajano',
        developerName: 'Archimedes Trajano',
        developerURL: 'https://trajano.net',
        background: '#216978',
        icons: {
          android: true,
          appleIcon: { offset: 15 },
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    }),
    new CopyWebpackPlugin([{
      from: 'assets',
      to: 'assets'
    }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      data: require('./src/ld.json'),
      template: './src/app.html',
      inlineSource: 'main.css$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  resolve: {
    alias: {
      'handlebars': 'handlebars/runtime.js'
    }
  },
  devServer: {
    inline: true
  }
}
