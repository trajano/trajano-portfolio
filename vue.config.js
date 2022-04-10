module.exports = {
  // outputDir: "www",
  publicPath: "",

  configureWebpack: {
    performance: {
      // maxEntrypointSize: 512000,
      // maxAssetSize: 512000
    },
  },

  css: {
    sourceMap: false,
    extract: true,
  },

  pluginOptions: {
    prerenderSpa: {
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
