/**
 * 详情页评价
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Image, Rate } from '@antmjs/vantui'
import ImgView from '../../imgView'
import './index.less'

interface TagTypes {}

const ProductItem: React.FC<TagTypes> = () => {
  return (
   
    <View className='ProductItem__root'>
    
      <View className='product-container'>
      <View className='product-header'>
        <View className='product-header-left'>
        <ImgView src='https://img1.baidu.com/it/u=395408559,567480743&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' width={44} height={44} fit='cover' />
        </View>
        <View className='product-header-center'>
          <Text className='chc-left'>沈*宜</Text>
        </View>
        <View className='product-header-right'>1分钟前</View>
      </View>
      <View className='product-body'>
        <View className='product-body-top'>
          <View className='cbt-score-l'>
            <View className='csl-left'>商品包装</View>
            <View className='csl-right'>
              <Rate value={3} size={12} color='#FF3F4D' voidIcon='star' voidColor='#eee' />
            </View>
          </View>
          <View className='cbt-score-c'></View>
          <View className='cbt-score-r'>
            <View className='csr-left'>描述相符</View>
            <View className='csr-right'>
              <Rate value={3} size={12} color='#FF3F4D' voidIcon='star' voidColor='#eee' />
            </View>
          </View>
        </View>

        <View className='product-body-pic'>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=178217450,2035025185&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' fit='cover' width='100%' height='100%' />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' fit='cover' width='100%' height='100%' />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img0.baidu.com/it/u=1540756952,1687876482&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' fit='cover' width='100%' height='100%' />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=709' fit='cover'width='100%' height='100%' />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=709' fit='cover'width='100%' height='100%' />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=709' fit='cover'width='100%' height='100%' />
          </View>
        </View>
        <View className='product-body-text'>
          车厘子个头很大，很新鲜没有坏果，买来送人车厘子个头很大，很新鲜没有坏果，买来送人车厘子个头很大，很新鲜没有坏果，买来送人
        </View>
      </View>

      <View className='product-footer'>
        <View className='product-f-give pfg-item product-give-active'>
            999
        </View>
        <View className='product-f-discuss pfg-item'>
        评论
        </View>
      </View>
      </View>
    </View>
  )
}

export default ProductItem
