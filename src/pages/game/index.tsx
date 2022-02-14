import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView } from '@components'
import './index.less'

const GamePages: React.FC = () => {


  return (
    <View className='GameScreen__root'>
      游戏
    </View>
  )
}

export default GamePages
