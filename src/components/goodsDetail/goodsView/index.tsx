/**
 * 商品详情多图组件
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import ImgView from '../../imgView'
import './index.less'

interface TagTypes {}

const GoodsView: React.FC<TagTypes> = () => {
  const goodsBasicConfig = [
    { name: '品名', content: '智利进口车厘子', id: '1' },
    { name: '品质等级', content: 'JJJ、JJ、J', id: '2' },
    { name: '净重', content: '2斤/件', id: '3' },
  ]

  return (
    <View className='GoodsView__root'>
      <View className='goodsview-basic'>
        <View className='goodsview-basic-header'>商品详情</View>
        <View className='goodsview-basic-content'>
          {goodsBasicConfig.map((item, index) => {
            return (
              <View className='gbc-item van-hairline--bottom' key={index}>
                <View className='gbc-item-left'>{item.name}</View>
                <View className='gbc-item-right'>{item.content}</View>
              </View>
            )
          })}
        </View>
      </View>
      <View className='goodsview-pic'>
        <View className='goodsview-pic-item'>
          <ImgView src='https://dummyimage.com/414x288/ff3f4d/fff' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://dummyimage.com/640x188/1f6cc0/fff' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://dummyimage.com/375x388/dd578d/fff' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://dummyimage.com/414x288/8d94c1/fff' className='item-pic' width={414} fit='widthFix' />
        </View>
      </View>
    </View>
  )
}

export default GoodsView
