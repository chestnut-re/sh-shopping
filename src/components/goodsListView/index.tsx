import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Image, Text } from '@tarojs/components'
import './index.less'

import GoodsItem from './goodsItem'

interface Props {
  data?: any
}

/**
 * 商品列表
 */
const GoodsListView: React.FC<Props> = ({ data }) => {
  useEffect(() => {
  }, [])


  return (
    <View className='goodsListView'>
      {data && data.map((item, index) => (
        <GoodsItem key={`index${index}`} item={item} />
      ))}
    </View>
  )
}

export default GoodsListView