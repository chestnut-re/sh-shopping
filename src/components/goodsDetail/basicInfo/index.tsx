/**
 * 价签组件
 * indicatorDots Boolean 是否显示面板指示点
 * indicatorColor String 指示点颜色
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Image } from '@antmjs/vantui'
import Spzy_icon from '@/assets/goodsdetail/spzy_icon.png'
import Sqbz_icon from '@/assets/goodsdetail/sqbz_icon.png'
import Pkbz_icon from '@/assets/goodsdetail/pkbz_icon.png'
import Shbz_icon from '@/assets/goodsdetail/shbz_icon.png'
import PricetagBg from '@/assets/goodsdetail/pricetag_bg.png'
import './index.less'

interface TagTypes {}

const BasicInfoTag: React.FC<TagTypes> = () => {
  const basicConfig = [
    { icon_url: Spzy_icon, name: '商品自营', id: '1' },
    { icon_url: Sqbz_icon, name: '授权保障', id: '2' },
    { icon_url: Pkbz_icon, name: '品控保障', id: '3' },
    { icon_url: Shbz_icon, name: '售后保障', id: '4' },
  ]

  return (
    <View className='PriceTag__root' style={{ background: `url(${PricetagBg}) no-repeat top center`,backgroundSize: '100% auto' }}>
      <View className='pricetag-body'>
        <View className='pricetag-body-l'>
          <View className='pricetag-body-lt'><Text className='price__symbol'>¥</Text>99.67</View>
          <View className='pricetag-body-lb'>限时触底价 3件单价</View>
        </View>
        <View className='pricetag-body-r'>
          <View className='pricetag-body-rt'>00:26:32</View>
          <View className='pricetag-body-rb'>将恢复 ¥119</View>
        </View>
      </View>
      <View className='basic-container'>
        <View className='basic-box'>
          <View className='basic-header'>
            {basicConfig.map(item => {
              return (
                <View className='basic-header-item' key={item.id} style={{ backgroundImage: `url(${item.icon_url})` }}>
                  {item.name}
                </View>
              )
            })}
          </View>
          <View className='basic-body'>智利JJJ车厘子</View>
          <View className='basic-foot'>
            <View className='basic-foot-left'>
              <Image width={24} height={24} round fit='cover' src='https://img.yzcdn.cn/vant/cat.jpeg' />
            </View>
            <View className='basic-foot-center'>沈*宜 10秒前付款成功！</View>
            <View className='basic-foot-right'>已销 400+</View>
          </View>
        </View>
        <View className='basic-foot-rank'>
          <View className='bfr-left'>水果礼券赠送榜</View>
          <View className='bfr-right'>第1名</View>
        </View>
      </View>
    </View>
  )
}

export default BasicInfoTag
