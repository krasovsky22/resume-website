const path = require("path");
const webpack = require("webpack");
const { resolve } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: resolve("src/index.jsx"),
    bootstrap: "bootstrap"
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].[contentHash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /bootstrap\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /bootstrap\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"],
    modules: [resolve("node_modules")],
    alias: {
      src: resolve("src"),
      icons: resolve("src/components/icons"),
      links: resolve("src/components/links"),
      lodash$: "lodash-es"
    }
  },
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/index.html"),
      filename: resolve("public/index.html"),
      chunks: ["runtime", "bootstrap", "main"],
      inject: true
    }),
    new CleanWebpackPlugin(["dist"], {
      root: resolve("./")
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name].css`
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
