import React, { useCallback, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { SafeAreaView } from '@components'
import SWiperNav from '../../components/goodsDetail/swiper'
import ProductItem from '../../components/productEva/productItem'

import './index.less'
/**
 * 商品评价页 
 */
const ProductEvaluation: React.FC = () => {
  const swpierData = {
    banner: [
      { image_src: 'https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' },
      { image_src: 'https://img0.baidu.com/it/u=1208144021,871142642&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500' },
    ],
  }

 
  return (
    <View className='Product__root'>
      <View className='product-header'>
          <View className='product-header-l product-item product-active'>
          全部
          </View>
          <View className='product-header-r product-item'>
          视频/图片<Text className='product-nums'>(18)</Text>
          </View>
      </View>
      <View className='product-body'>
          {[1,2,3,4].map((item,index)=>{
              return (<View className='product-body-item' key={index}>
              <ProductItem />
          </View>)
          })}
      </View>
        
    </View>
  )
}

export default ProductEvaluation
