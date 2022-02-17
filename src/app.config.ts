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
    // Template页
    'pages/templatePage/index',
    //严选好团页
    'pages/regiment/index',
    //榜单专题页
    'pages/topics/index',
    //店铺页
    'pages/shop/index',
    // 商品详情页
    'pages/goodsDetail/index',
    // 商品评价
    'pages/productEva/index',
  ],
  subpackages: [
    {
      root: 'minePages',
      pages: ['pages/giftlist/index'],
    },
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
        iconPath: './assets/img/tab/home.png',
        selectedIconPath: './assets/img/tab/home.png',
        text: '首页',
      },
      {
        pagePath: 'pages/gift/index',
        iconPath: './assets/img/tab/gift.png',
        selectedIconPath: './assets/img/tab/gift.png',
        text: '礼盒',
      },
      {
        pagePath: 'pages/game/index',
        iconPath: './assets/img/tab/game.png',
        selectedIconPath: './assets/img/tab/game.png',
        text: '游戏',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: './assets/img/tab/mine-selected.png',
        selectedIconPath: './assets/img/tab/mine-selected.png',
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
