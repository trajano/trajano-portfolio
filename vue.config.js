module.exports = {
  // outputDir: "www",
  publicPath: '',

  configureWebpack: {
    performance: {
      // maxEntrypointSize: 512000,
      // maxAssetSize: 512000
    }
  },

  css: {
    sourceMap: true
  }
};
