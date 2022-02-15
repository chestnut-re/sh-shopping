import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import './index.less'

const RegimentPage: React.FC = () => {
  const data = [
    {
      key: '1',
      title: '湾仔码头 新年全家福梦想礼盒',
      tag: '智利进口',
      price: '99.67',
    },
    {
      key: '2',
      title: '湾仔码头 新年全家福梦想礼盒',
      tag: '智利进口',
      price: '99.67',
      img: 'url',
    },
  ]

  return (
    <View className='Regiment__root'>
      <View className='bannerView'>
        <View className='bannerRule'>
          <Text>规则</Text>
        </View>
      </View>
      <View className='contentView'>
        {data.map((item: any) => {
          return (
            <View className='content' key={item.key}>
              <View className='contentImg'></View>
              <View className='contentText'>
                <View className='textTitle'>
                  <Text>{item.title}</Text>
                </View>
                <View className='textTag'>
                  <Text>{item.tag}</Text>
                </View>
                <View className='textPrice'>
                  <Text>拼团价&nbsp;&nbsp;</Text>
                  <Text>¥</Text>
                  <Text>{item.price}</Text>
                  <Text>立即购买</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default RegimentPage
