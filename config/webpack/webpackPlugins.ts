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
      filename: !config.isDev
        ? "css/[name].[contenthash:12].css"
        : "css/[name].css",
      chunkFilename: !config.isDev
        ? "css/[name].[contenthash:12].css"
        : "css/[name].css",
    }),
  ];
};
