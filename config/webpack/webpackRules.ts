import type webpack from 'webpack';

export const getWebpackRules = (): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }

  return [
    typescriptLoader,
    babelLoader
  ]
}
