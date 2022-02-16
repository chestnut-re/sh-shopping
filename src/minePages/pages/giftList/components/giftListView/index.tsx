import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Image, Text } from '@tarojs/components'
import './index.less'


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
    <View className='giftListView'>
      {data && data.map((item, index) => (
        <View key={`index${index}`} className='giftItemView'>
          <View className='shopView'>
            <View className='shopInfo'>
              <View className='shopLogo'>

              </View>
              <View className='name'>
                圈礼商城果蔬旗舰店
              </View>
            </View>
            <View className='isUse'>
              已使用
            </View>
          </View>

          <View className='giftInfoView'>
            <View className='giftImgView'>

            </View>
            <View className='giftNameView'>
              <View className='name'>
                福利幸运盒{item}
              </View>
              <View className='info'>
                {`3件装 ¥${'99.67'}/件 x1`}
              </View>
            </View>
          </View>

          <View className='giftBottomInfo'>
            <View className='item'>

            </View>
            <View className='item'>
              <View className='btn'>
                送亲友
              </View>
              <View className='btn'>
                拆礼盒
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default GoodsListView