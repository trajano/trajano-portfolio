var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var yargs = require("yargs")

var optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize

var externalCSS = new ExtractTextPlugin('styles.css')

module.exports = {
    module: {
        loaders: [
            {
                test: /app\.scss$/,
                loader: externalCSS.extract(["css-loader?sourceMap", "sass-loader"])
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
        path: './dist',
        filename: 'bundle.[hash].js'
    },
    externals: {
        "node-waves": "Waves",
        "jquery": "jQuery"
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
        externalCSS,
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
    devtool: 'source-map',
    devServer: {
        inline: true
    }
}
