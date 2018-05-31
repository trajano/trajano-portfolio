var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebappWebpackPlugin = require('webapp-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var yargs = require("yargs")
var path = require('path')

var optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize

module.exports = {
    module: {
        rules: [
            {
                test: /app\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: 'handlebars-loader'
            },
            {
                test: /font-faces\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
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
        "node-waves": "Waves",
        "jquery": "jQuery"
    },
    plugins: [
        new WebappWebpackPlugin({
            logo: './src/logo-2048x2048.png',
            background: '#216978',
            title: 'Trajano',
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
            minify: {
                minifyJS: optimizeMinimize,
                minifyCSS: optimizeMinimize,
                removeAttributeQuotes: false,
                collapseWhitespace: optimizeMinimize,
                html5: true
            },
            inlineSource: 'styles.css$'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ],
    resolve: {
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    },
    devtool: 'source-map',
    devServer: {
        inline: true
    }
}
