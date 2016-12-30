var fs = require('fs')
var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
var yargs = require("yargs")

var optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize;

var plugins = [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
    }),
    new CopyWebpackPlugin([{
        from: 'assets',
        to: 'assets'
    }]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
        title: "Archimedes Trajano",
        description: "IT Polymath. Hands-on Enterprise Consultant. Full-stack Coder.",
        template: './src/app.html',
        minify: {
            minifyJS: optimizeMinimize,
            minifyCSS: optimizeMinimize,
            removeAttributeQuotes: optimizeMinimize,
            collapseWhitespace: optimizeMinimize,
            html5: true
        }
    }),

]

// Add critical.css if one is present
if (fs.existsSync("src/critical.css")) {
    plugins.push(
        new ExtractTextPlugin("critical.css"),
        new StyleExtHtmlWebpackPlugin("critical.css")
    )
}
module.exports = {
    module: {
        loaders: [
            {
                test: /\critical.css$/,
                loader: new ExtractTextPlugin("critical.css").extract([
                    "css-loader?sourceMap"
                ])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    "css-loader?sourceMap", "sass-loader"
                ])
            },
            {
                test: /\.woff2|\.woff|\.ttf|\.eot|\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ["file-loader"]
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
    entry: './src/app',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    externals: {
        "node-waves": "Waves",
    },
    plugins: plugins,
    devtool: 'source-map',
    devServer: {
        inline: true
    }
}
