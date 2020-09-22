import { defineConfig } from 'umi';
import { resolve } from 'path';
import routes from './routes';

import theme from '../theme/variables';
import chainWebpack from './webpack';

const isDev = process.env.NODE_ENV === 'development';
const config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  outputPath: `../../dist`,
  alias: {
    '@/common': resolve(__dirname, '../../common'),
    '@/bridge': resolve(__dirname, '../../bridge'),
    theme: resolve(__dirname, '../theme'),
  },
  locale: {
    default: 'zh-CN',
  },
  routes,
  theme,
  history: { type: isDev ? 'hash' : 'browser' },
  exportStatic: { htmlSuffix: true, dynamicRoot: true },
  chainWebpack,
  chunks: isDev
    ? undefined
    : ['antdesigns', 'antd', 'vendors', 'default.umi', 'umi'],
});

export default config;
