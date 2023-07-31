import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type WebpackConfigurationData } from './types';

export const getWebpackRules = (
    config: WebpackConfigurationData
): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            config.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module.s[ac]ss$/i,
                        localIdentName: config.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: config.isDev,
                },
            },
        ],
    };

    return [typescriptLoader, sassLoader, babelLoader];
};
