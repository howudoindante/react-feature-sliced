import type webpack from "webpack";

export const getWebpackResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
