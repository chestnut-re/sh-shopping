/**
 * 不发货弹窗组件
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

interface NoShipmentTypes {
  HandleFun: () => void
}

const NoShipment: React.FC<NoShipmentTypes> = ({  }) => {
  return (
    <View className='NoShipment__root'>
        <View className='noshipment-item'>甘肃省</View>
        <View className='noshipment-item'>北京</View>
        <View className='noshipment-item'>甘肃</View>
        <View className='noshipment-item'>甘肃</View>
        <View className='noshipment-item'>甘肃省</View>
        <View className='noshipment-item'>天津</View>
        <View className='noshipment-item'>四川</View>
        <View className='noshipment-item'>美国华盛顿</View>
        <View className='noshipment-item'>齐齐哈尔</View>
        <View className='noshipment-item'>乌鲁木齐</View>

    </View>
  )
}

export default NoShipment
