const merge = require('webpack-merge');
const config = require('./webpack.config');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(config, {
  new CleanWebpackPlugin(["dist"], {
    root: resolve("./")
  }),
  mode: 'production'
});