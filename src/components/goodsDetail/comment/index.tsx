/**
 * 详情页评价
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Image, Rate } from '@antmjs/vantui'
import ImgView from '../../imgView'
import './index.less'

interface TagTypes {}

const CommentItem: React.FC<TagTypes> = () => {
  return (
   
    <View className='CommentItem__root'>
      <View className='comment-nav'>
          <View className='comment-nav-header'>
              <View className='cnh-left'>
                <Text className='cnh-left-title'>商品评价</Text>
                <Text  className='cnh-left-num'>200+</Text>
              </View>
              <View className='cnh-right'>
              查看全部
              </View>
          </View>
          <View className='comment-nav-content'>
              <View className='cnc-item'>包装精致 200+</View>
              <View className='cnc-item'>包装精致 200+</View>
          </View>
      </View>
      <View className='comment-container'>
      <View className='comment-header'>
        <View className='comment-header-left'>
          <Image width={24} height={24} round fit='cover' src='https://img.yzcdn.cn/vant/cat.jpeg' />
        </View>
        <View className='comment-header-center'>
          <Text className='chc-left'>沈*宜</Text>
          <Text className='chc-right'>买了3份</Text>
        </View>
        {/* <View className='comment-header-right'>1分钟前</View> */}
      </View>
      <View className='comment-body'>
        <View className='comment-body-top'>
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

        <View className='comment-body-pic'>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=178217450,2035025185&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' fit='cover' width={88} height={88} />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' fit='cover' width={88} height={88} />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img0.baidu.com/it/u=1540756952,1687876482&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400' fit='cover' width={88} height={88} />
          </View>
          <View className='cbp-item'>
            <ImgView src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=709' fit='cover' width={88} height={88} />
          </View>
          <View className='cbp-more'>
            3+
          </View>
        </View>
        <View className='comment-body-text van-multi-ellipsis--l2'>
          车厘子个头很大，很新鲜没有坏果，买来送人车厘子个头很大，很新鲜没有坏果，买来送人车厘子个头很大，很新鲜没有坏果，买来送人
        </View>
      </View>
      </View>
    </View>
  )
}

export default CommentItem
