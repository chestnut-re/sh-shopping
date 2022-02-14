import { resolve } from 'path'

const config = {
  projectName: 'trend_mall_miniapp',
  date: '2022-2-10',
  designWidth: 414,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    414: 1.81 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
    IS_H5: process.env.TARO_ENV === 'h5',
    IS_WEAPP: process.env.TARO_ENV === 'weapp',
  },
  alias: {
    '@': resolve(__dirname, '..', 'src/'),
    '@src': resolve(__dirname, '..', 'src'),
    "@assets": resolve(__dirname, "..", "src/assets"),
    '@components': resolve(__dirname, '..', 'src/components'),
    '@utils': resolve(__dirname, '..', 'src/utils'),
    '@service': resolve(__dirname, '..', 'src/service'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: [/@antmjs[\\/]vantui/],
    router: {
      mode: 'browser',
      customRoutes: {},
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  outputRoot: `dist/${process.env.TARO_ENV}`,
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}