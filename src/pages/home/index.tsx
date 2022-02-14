import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView } from '@components'
import './index.less'

const HomePages: React.FC = () => {


  return (
    <View className='DemoScreen__root'>
      首页
    </View>
  )
}

export default HomePages
