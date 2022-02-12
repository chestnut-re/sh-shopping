import Taro from '@tarojs/taro'

/**
 * 多端差异磨平
 * 小程序, 微信h5, App, 普通浏览器
 */
export class TrendBridge {
  /**
   * 页面跳转
   */
  static navigateTo({ url }: { url: string }) {
    Taro.navigateTo({ url: url })
  }
}
