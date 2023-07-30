import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type WebpackConfigurationData } from "./types";

export const getWebpackRules = (
  config: WebpackConfigurationData,
): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          sourceMap: config.isDev,
        },
      },
    ],
  };

  return [typescriptLoader, sassLoader, babelLoader];
};
