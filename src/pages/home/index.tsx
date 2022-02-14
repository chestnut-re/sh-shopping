import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView } from '@components'
import './index.less'

import HomeBg from '@assets/img/home/homebg.png'

const HomePages: React.FC = () => {


  return (
    <View className='DemoScreen__root'>
      <View className='bannerView'>
        <Image src={HomeBg} />
      </View>
    </View>
  )
}

export default HomePages
