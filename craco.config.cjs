/* eslint-disable @typescript-eslint/no-var-requires */
//const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
//  babel: {
//    plugins: ['@vanilla-extract/babel-plugin'],
//  },
  webpack: {
//    plugins: [new VanillaExtractPlugin()],
    configure: (webpackConfig) => {
//      const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find(
//        (plugin) => plugin instanceof MiniCssExtractPlugin
//      )
//      if (instanceOfMiniCssExtractPlugin !== undefined) instanceOfMiniCssExtractPlugin.options.ignoreOrder = true

      // Ignore failed source mappings to avoid spamming the console.
      // Source mappings for a package will fail if the package does not provide them, but the build will still succeed,
      // so it is unnecessary (and bothersome) to log it. This should be turned off when debugging missing sourcemaps.
      // See https://webpack.js.org/loaders/source-map-loader#ignoring-warnings.
      webpackConfig.ignoreWarnings = [/Failed to parse source map/]

      return webpackConfig
    },
  },
}
