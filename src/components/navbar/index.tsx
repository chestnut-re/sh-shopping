import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Image, Text } from '@tarojs/components'
import './index.less'

interface Props {
  className?: string
}

/**
 * TabBar
 */
const NavBar: React.FC<Props> = ({ children, className }) => {
  const [systemInfo, setSystemInfo] = useState<object>({}) as any
  useEffect(() => {
    getSystemInfo()
  }, [])

  /**
  * 获取设备信息
  */
  const getSystemInfo = () => {
    try {
      const config = {} as any

      let res = Taro.getSystemInfoSync()
      config.pixelRate = res.windowWidth / 750
      config.platform = res.platform
      config.statusBarHeight = res.statusBarHeight
      if (res.platform.toLowerCase() == 'devtools') {
        config.capsuleHeight = 44
      }
      if (res.platform.toLowerCase() == 'android') {
        config.capsuleHeight = 48
      }
      config.titleHeight = (config.capsuleHeight + config.statusBarHeight) / config.pixelRate
      if (res.statusBarHeight >= 44) {
        config.isHighHead = true
      }
      if (res.windowHeight > 750) config.isAllScreen = true
      config.systemHeight = res.windowHeight
      setSystemInfo(config)
      console.log('resresresres', res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View className={`homeNavBars ${className}`}>
      <View style={{ height: `${systemInfo.statusBarHeight / systemInfo.pixelRate}rpx` }} className='status-bar'></View>
      <View style={{ height: IS_WEAPP ? `${systemInfo.capsuleHeight / systemInfo.pixelRate}rpx` : '60px' }} className='capsule-line'>
        {children}
      </View>
    </View>
  )
}

export default NavBar