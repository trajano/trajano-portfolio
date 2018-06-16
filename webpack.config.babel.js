import ImageminPlugin from 'imagemin-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import PrerenderSPAPlugin from 'prerender-spa-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import WebappWebpackPlugin from 'webapp-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin'
import path from 'path'

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = (env, argv) => {
  const optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all'
    }
  }
  const module = {
    rules: [{
        test: /app\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'handlebars-loader'
      },
      {
        test: /font-face\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: [/app\.scss$/, /font-face\.scss$/]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },   
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          name: '[path][name]-[hash]-[width].[ext]',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash].[ext]',
        }
      },
    ]
  }
  const entry = ['./src/app']
  const output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[hash].js'
  }
  const externals = {
    'node-waves': 'Waves',
    'jquery': 'jQuery'
  }
  const plugins = [
    new WebappWebpackPlugin({
      logo: './src/assets/logo-2048x2048.png',
      favicons: {
        appName: 'Trajano',
        appDescription: 'Archimedes Trajano',
        developerName: 'Archimedes Trajano',
        developerURL: 'https://trajano.net',
        background: '#216978',
        icons: {
          android: true,
          appleIcon: {
            offset: 15
          },
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
    new ImageminPlugin(
      { 
        test: /\.(jpe?g|png|gif|svg)$/i,
        options: {
          jpegtran: {
            progressive: true
          }
        }
      }
    ),
    new HtmlWebpackPlugin({
      data: require('./src/ld.json'),
      template: './src/app.html',
      inlineSource: 'main.css$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new VueLoaderPlugin()
  ]

  if (argv.mode === "production") {
    module.rules[0].use = [MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new PrerenderSPAPlugin({
        // Index.html is in the root directory.
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        // Optional minification.
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        },

        renderer: new Renderer({
          inject: {
            prerendering: true
          },
          renderAfterDocumentEvent: 'render-event'
        })
      }))
  }
  const resolve = {
    alias: {
      'handlebars': 'handlebars/runtime.js',
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
  const devServer = {
    inline: true
  }
  return {
    optimization,
    module,
    entry,
    output,
    externals,
    plugins,
    resolve,
    devServer
  }
}
