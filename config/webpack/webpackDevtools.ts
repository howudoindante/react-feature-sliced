import { type WebpackConfigurationData } from "./types";
import type webpack from "webpack";

export const getWebpackDevtools = (
  webpackConfiguration: WebpackConfigurationData,
): {
  devtool?: webpack.Configuration["devtool"];
  devServer?: webpack.Configuration["devServer"];
} => {
  return webpackConfiguration.isDev
    ? {
        devtool: "inline-source-map",
        devServer: {
          static: webpackConfiguration.OUTPUT_PATH,
          port: webpackConfiguration.port,
        },
      }
    : {};
};
