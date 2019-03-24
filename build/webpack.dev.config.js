const path = require("path");
const webpack = require('webpack');
const merge = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

require("dotenv").config();

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist",
    publicPath: "/",
    hot: true,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: process.env.DEV_URL || "127.0.0.1:8080",
      open: true,
      ghostMode: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/
    })
  ]
});
