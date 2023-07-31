import path from 'path';
import type webpack from 'webpack';
import { getWebpackPlugins } from './config/webpack/webpackPlugins';
import { getWebpackRules } from './config/webpack/webpackRules';
import { getWebpackResolvers } from './config/webpack/webpackResolvers';

import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import {
    type WebpackConfigurationData,
    type WebpackEnv,
} from './config/webpack/types';
import { getWebpackDevtools } from './config/webpack/webpackDevtools';

interface Configuration extends webpack.Configuration {
    devServer?: WebpackDevServerConfiguration;
}

const getConfig = (env: WebpackEnv): Configuration => {
    const mode = env.mode ?? 'development';

    const webpackConfiguration: WebpackConfigurationData = {
        stats: env.stats === 'true' ?? false,
        HTML_PATH: path.resolve(__dirname, 'public', 'index.html'),
        OUTPUT_PATH: path.resolve(__dirname, 'build'),
        ENTRY_PATH: path.resolve(__dirname, 'src', 'index.tsx'),
        mode,
        port: env.port ?? 3000,
        isDev: mode === 'development',
    };
    return {
        entry: webpackConfiguration.ENTRY_PATH,
        mode: webpackConfiguration.mode,
        output: {
            filename: '[name].[contenthash:12].js',
            path: webpackConfiguration.OUTPUT_PATH,
            clean: true,
        },
        module: {
            rules: getWebpackRules(webpackConfiguration),
        },
        resolve: getWebpackResolvers(),
        plugins: getWebpackPlugins(webpackConfiguration),
        ...getWebpackDevtools(webpackConfiguration),
    };
};

export default getConfig;
