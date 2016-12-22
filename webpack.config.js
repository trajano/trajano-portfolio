var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|png)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [new CopyWebpackPlugin([{
        from: 'assets'
    }]), new HtmlWebpackPlugin({
        template: './app.html',
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            html5: true
        }
    })]
}
