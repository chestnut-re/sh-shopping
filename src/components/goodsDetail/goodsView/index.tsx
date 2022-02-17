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
          <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://img1.baidu.com/it/u=178217450,2035025185&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' className='item-pic' width={414} fit='widthFix' />
        </View>
        <View className='goodsview-pic-item'>
          <ImgView src='https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/220824/10/6957/587150/61b096a0E91e46d62/85644a78fc47a1b9.jpg!q70.dpg.webp' className='item-pic' width={414} fit='widthFix' />
        </View>
      </View>
    </View>
  )
}

export default GoodsView
