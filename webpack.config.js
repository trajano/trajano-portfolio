var fs = require('fs')
var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
var StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
var yargs = require("yargs")

var optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize

var internalCSS = new ExtractTextPlugin('internal.css')
var externalCSS = new ExtractTextPlugin('styles.css')

module.exports = {
    module: {
        loaders: [
            {
                test: /critical.css/,
                loader: internalCSS.extract(["css-loader?sourceMap"])
            },
            {
                test: /\.scss$/,
                loader: externalCSS.extract(["css-loader?sourceMap", "sass-loader"])
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
        filename: 'bundle.js'
    },
    externals: {
        "node-waves": "Waves",
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
        new HtmlWebpackPlugin({
            title: "Archimedes Trajano",
            description: "IT Polymath. Hands-on Enterprise Consultant. Full-stack Coder.",
            template: './src/app.html',
            minify: {
                minifyJS: optimizeMinimize,
                minifyCSS: optimizeMinimize,
                removeAttributeQuotes: false,
                collapseWhitespace: optimizeMinimize,
                html5: true
            },
            excludeAssets: [/styles.css/]
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        externalCSS
    ],
    devtool: 'source-map',
    devServer: {
        inline: true
    }
}


// Add critical.css if one is present
if (fs.existsSync("src/critical.css")) {
    module.exports.entry.push('./src/critical.css')
    module.exports.plugins.push(
        internalCSS,
        new StyleExtHtmlWebpackPlugin("internal.css")
    )
}
