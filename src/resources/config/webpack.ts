import IWebpackChainConfig from 'webpack-chain';

const isDev = process.env.NODE_ENV === 'development';

export default (config: IWebpackChainConfig) => {
  config.module.rule('ts-in-node_modules').include.clear();
  if (!isDev) {
    // share the same chunks across different modules
    config.optimization.runtimeChunk(false).splitChunks({
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: true,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment|bip39|google-protobuf)[\\/]/,
          priority: -10,
        },
        antd: {
          name: 'antd',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          priority: -11,
        },
        antdesigns: {
          name: 'antdesigns',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
          priority: -11,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    });

    //css的修改
    config.plugin('extract-css').use(require('mini-css-extract-plugin'), [
      {
        filename: `[name].css`,
        chunkFilename: `[name].[contenthash:8].chunk.css`,
      },
    ]);
    //js的修改
    config.output.filename('[name].[contenthash:8].js');
  }

  return config;
};
