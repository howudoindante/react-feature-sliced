import path from 'path'
import type webpack from 'webpack'
import { getWebpackPlugins } from './config/webpack/webpackPlugins'
import { getWebpackRules } from './config/webpack/webpackRules'
import { getWebpackResolvers } from './config/webpack/webpackResolvers'

import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration
}

const HTML_PATH = path.resolve(__dirname, 'public', 'index.html')
const OUTPUT_PATH = path.resolve(__dirname, 'build')
const ENTRY_PATH = path.resolve(__dirname, 'src', 'index.tsx')

const config: Configuration = {
  entry: ENTRY_PATH,
  mode: 'development',
  output: {
    filename: '[name].[contenthash:12].js',
    path: OUTPUT_PATH,
    clean: true
  },
  devServer: {
    static: OUTPUT_PATH
  },
  module: {
    rules: getWebpackRules()
  },
  resolve: getWebpackResolvers(),
  plugins: getWebpackPlugins(HTML_PATH),
  optimization: {
    runtimeChunk: 'single'
  }
}

export default config
