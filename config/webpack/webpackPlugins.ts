import HtmlWebpackPlugin from 'html-webpack-plugin';
import type webpack from 'webpack';
export const getWebpackPlugins = (templatePath: string): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: templatePath
    })
  ]
}
