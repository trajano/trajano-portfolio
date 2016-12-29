/**
 * Start the webpack dev server.  This removes the dev server configuration from webpack.config.js.
 */
var webpack = require("webpack")
var Server = require("webpack-dev-server")
var path = require("path");
var config = require("./webpack.config.js")
var open = require("open")

// absolute path is needed by the server
config.output.path = path.resolve(__dirname, config.output.path)

var devServerOptions = {
    hot: true,
    inline: true,
    port: 8080
}

// Start the server
new Server(webpack(config), devServerOptions).listen(devServerOptions.port)

// Open the default browser
open("http://localhost:" + devServerOptions.port + "/")
