module.exports = {
  // outputDir: "www",
  publicPath: "",

  configureWebpack: {
    performance: {
      // maxEntrypointSize: 512000,
      // maxAssetSize: 512000
    }
  },

  css: {
    sourceMap: false,
    extract: false
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
