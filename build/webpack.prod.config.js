const merge = require("webpack-merge");
const { resolve } = require("./utils");
const config = require("./webpack.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: resolve("./")
    })
  ]
});
