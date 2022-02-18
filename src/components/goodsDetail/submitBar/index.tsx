/**
 * 提交组件
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import Kef_icon from '@/assets/img/goods/kef_icon.png'
import Dianp_icon from '@/assets/img/goods/dianp_icon.png'
import Souc_icon from '@/assets/img/goods/souc_icon.png'
import './index.less'

interface SubmitBarTypes {
  onClickHandle:(val)=>void
}

const SubmitBar: React.FC<SubmitBarTypes> = ({onClickHandle}) => {
  const SubmitConfig = [
    { icon_url: Kef_icon, name: '客服', id: '1' },
    { icon_url: Dianp_icon, name: '店铺', id: '2' },
    { icon_url: Souc_icon, name: '收藏', id: '3' },
  ]

  const handleItemFun = ()=>{
    onClickHandle("123")
  }

  return (
    <View className='SubmitBar__root'>
      <View className='submitbar-left'>
      {SubmitConfig.map(item => {
            return (
              <View className='submitbar-left-item' key={item.id} style={{ background: `url(${item.icon_url}) no-repeat top center`,backgroundSize: '23px auto' }}>
                <View className='sli-box'>{item.name}</View>
              </View>
            )
          })}
      </View>
      <View className='submitbar-right'>
        <View className='submitbar-right-l'>
          <View className='srr-box' onClick={handleItemFun}>
            <Text className='srr-top-symbol'>¥</Text>
            <Text className='srr-top-num'>48.9</Text>
            <View className='srr-top-text'>单独买</View>
          </View>
        </View>
        <View className='submitbar-right-r'>
          <View className='srr-box' onClick={handleItemFun}>
            <Text className='srr-top-symbol'>¥</Text>
            <Text className='srr-top-num'>19.9</Text>
            <View className='srr-top-text'>拼团购</View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SubmitBar
