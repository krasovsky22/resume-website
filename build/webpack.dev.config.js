const merge = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

require("dotenv").config();

const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  plugins: [
    new BrowserSyncPlugin({
      //proxy: process.env.DEV_URL || "127.0.0.1",
      server: {
        baseDir: ".",
        index: "./public/index.html"
      },
      routes: {
        "/dist": "dist"
      },
      open: true,
      ghostMode: false
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/
    })
  ]
});
