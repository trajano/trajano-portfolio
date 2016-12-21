var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        loaders: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app.html',
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            html5: true
        }
    })]
}
