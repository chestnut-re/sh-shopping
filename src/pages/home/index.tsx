import React, { useCallback, useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image, Swiper, SwiperItem } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { ImgView, Navbar, GoodsListView } from '@components'
import './index.less'

import HomeBg from '@assets/img/home/homebg.png'
import Banner from '@assets/img/home/banner1.png'
import box1 from '@assets/img/home/box1.png'
import box2 from '@assets/img/home/box2.png'
import box3 from '@assets/img/home/box3.png'
import box4 from '@assets/img/home/box4.png'
import spike from '@assets/img/home/spike.png'

import btn from '@assets/img/home/btn.png'
import btn1 from '@assets/img/home/btn1.png'


const HomePages: React.FC = () => {
  const [navHeight, setNavHeight] = useState(0)
  useEffect(() => {
    getNavbarHeight()
  }, [])
  const getNavbarHeight = () => {
    let res = Taro.getSystemInfoSync()
    const pixelRate = res.windowWidth / 414
    const statusBarHeight = res.statusBarHeight
    let capsuleHeight = 0
    if (res.platform.toLowerCase() == 'devtools') {
      capsuleHeight = 44
    }
    if (res.platform.toLowerCase() == 'android') {
      capsuleHeight = 48
    }
    const titleHeight = (capsuleHeight + statusBarHeight) / pixelRate
    if (IS_WEAPP) {
      setNavHeight(titleHeight)
    } else {
      setNavHeight(65)
    }

  }

  return (
    <View className='HomeScreen__root'>
      <Navbar className='home-navView'>
        <View style={IS_H5 && { marginTop: '25px' }} className='leftTextView'>
          <Text className='leftTextView-txt'>
            有礼有趣
          </Text>
        </View>
      </Navbar>
      <View className='bannerView'>
        <Image className='banner-bg' src={HomeBg} />
        <View style={{ height: `${navHeight}px` }}></View>
        <View className='swiperView'>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='demo-text-1'>
                <Image
                  src='https://shanhai-shoping.oss-cn-beijing.aliyuncs.com/img/user/pic/327f2ff9f41a4276a670494e49954fb4.gif'
                  className='mode'
                />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image
                  src={Banner}
                  className='mode'
                // mode='heightFix'
                />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image
                  src='https://shanhai-shoping.oss-cn-beijing.aliyuncs.com/img/user/pic/327f2ff9f41a4276a670494e49954fb4.gif'
                  className='mode'
                />
              </View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
      <View className='box_wrapper'>
        <View className='box-list'>
          <View className='box'>
            <Image className='box-icon' src={box1} />
            <Text className='box-text'>限时抢购</Text>
          </View>
          <View className='box'>
            <Image className='box-icon' src={box2} />
            <Text className='box-text'>限时抢币</Text>

          </View>
          <View className='box'>
            <Image className='box-icon' src={box3} />
            <Text className='box-text'>惊喜礼物</Text>
          </View>
          <View className='box'>
            <Image className='box-icon' src={box4} />
            <Text className='box-text'>分享达人</Text>
          </View>
        </View>
      </View>



      <View className='box_wrapper'>
        <View className='followView'>
          <View className='box-left'>
            <Text className='text'>关注公众号<Text className='txt'>领88礼币</Text>礼币当钱花</Text>
          </View>
          <View className='box-right'>
            <Text className='text'>
              关注领币
            </Text>

          </View>
        </View>
      </View>

      <View className='box_wrapper'>
        <View className='spike-list'>
          <View className='box'>
            <View className='box-left'>
              <Text className='text1'>幸运秒杀</Text>
              <Text className='text2'>每天都可秒杀</Text>
              <Image
                src={btn}
                className='btnImg'
              />
            </View>
            <View className='imgView'>
              <Image src={spike} className='img' />
            </View>
          </View>
          <View className='box'>
            <View className='box-left'>
              <Text style={{ color: '#444' }} className='text1'>礼币兑</Text>
              <Text className='text2'>花礼币又省一笔</Text>
              <Image
                src={btn1}
                className='btnImg1'
              />
            </View>
            <View className='imgView'>
              <Image src={spike} className='img' />
            </View>
          </View>
        </View>

      </View>

      <View className='box_wrapper'>
        <View className='banner1'>
          <Image
            src={Banner}
            className='mode'
          // mode='heightFix'
          />
        </View>
      </View>
      <View className='box_wrapper'>
        <GoodsListView
          data={[1, 2, 3, 4, 5]}
        />
      </View>

    </View>
  )
}

export default HomePages
