export default {
  pages: [
    // 首页
    'pages/home/index',
    // 礼盒
    'pages/gift/index',
    // 游戏
    'pages/game/index',
    // 我的
    'pages/mine/index',
    // index
    'pages/index/index',
    // 测试页
    'pages/debugPage/index',
  ],
  tabBar: {
    custom: false,
    color: '#5F5F5F',
    selectedColor: '#FF3F4D',
    borderStyle: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/tab/home.png',
        selectedIconPath: './assets/tab/home.png',
        text: '首页',
      },
      {
        pagePath: 'pages/gift/index',
        iconPath: './assets/tab/gift.png',
        selectedIconPath: './assets/tab/gift.png',
        text: '礼盒',
      },
      {
        pagePath: 'pages/game/index',
        iconPath: './assets/tab/game.png',
        selectedIconPath: './assets/tab/game.png',
        text: '游戏',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: './assets/tab/mine-selected.png',
        selectedIconPath: './assets/tab/mine-selected.png',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
}
