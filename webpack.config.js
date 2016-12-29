var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        loaders: [
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
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: "Archimedes Trajano",
            description: "IT Consultant. Not a model or graphic designer so just using some random stock images of cats for now.",
            template: './src/app.html',
            minify: {
                minifyJS: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true
            }
        })
    ],
    devtool: 'source-map',
}
