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
    sourceMap: true,
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
