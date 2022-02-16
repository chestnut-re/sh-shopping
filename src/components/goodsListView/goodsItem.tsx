import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Image, Text } from '@tarojs/components'
import './index.less'

import ImgView from './../imgView'

interface Props {
  item?: any
}

/**
 * 商品列表
 */
const GoodsItem: React.FC<Props> = ({ item }) => {
  useEffect(() => {
  }, [])


  return (
    <View className='goodsItemView'>
      <View className='goodsItemImg'>
        <ImgView
          className=''
          src='xxx'
          width={120}
          height={120}
        />
      </View>
      <View className='goodsIteminfo'>
        <View className='goodsName'>
          <Text className='txt'>智利进口车厘子商品名称</Text>
        </View>
        <View className='tagView'>
          <View className='item'>
            <Text className='txt'>巨无霸3JJJ</Text>
          </View>
          <View className='item'>
            <Text className='txt'>巨无霸2JJ</Text>
          </View>
        </View>
        <View className='goodsPriceHint'>
          <Text className='txt'>限时触底价</Text>
        </View>
        <View className='goodsPriceView'>
          <View className='priceView'>
            <Text className='RMB'>￥</Text>
            <Text className='price'>99.78</Text>
          </View>
          <View className='linePriceView'>
            <Text className='txt'>￥199</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GoodsItem