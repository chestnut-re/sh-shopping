export default {
  pages: ['pages/home/index', 'pages/gift/index', 'pages/game/index', 'pages/mine/index', 'pages/index/index'],
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
