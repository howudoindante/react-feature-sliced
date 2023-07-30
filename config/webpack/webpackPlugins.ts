import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type WebpackConfigurationData } from "./types";
export const getWebpackPlugins = (
  config: WebpackConfigurationData,
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: config.HTML_PATH,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:7].css",
      chunkFilename: "[name].[contenthash:7].css",
    }),
  ];
};
