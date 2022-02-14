import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView } from '@components'
import './index.less'

const GiftPages: React.FC = () => {
  return (
    <View className='MineScreen__root'>
      {/* View, Text, Image */}
      我的
    </View>
  )
}

export default GiftPages
