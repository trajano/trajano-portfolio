module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
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
    }
}
