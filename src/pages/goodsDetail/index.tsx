import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { SafeAreaView } from '@components'
import SWiperNav from '../../components/goodsDetail/swiper'
import BasicInfo from '../../components/goodsDetail/basicInfo'
import CaseExplain from '../../components/goodsDetail/caseExplain'
import CommentItem from '../../components/goodsDetail/comment'
import GoodsView from '../../components/goodsDetail/goodsView'
import SubmitBar from '../../components/goodsDetail/submitBar'

import './index.less'

const GoodsDetailPage: React.FC = () => {
  const swpierData = {
    banner: [
      { image_src: 'https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' },
      { image_src: 'https://img0.baidu.com/it/u=1208144021,871142642&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500' },
    ],
  }

  return (
    <View className='GoodsDetail__root'>
      <SWiperNav {...swpierData} />
      <BasicInfo />
      <View className='caseExplain-box'>
        <CaseExplain />
      </View>
      <View className='commentList-box'>
        <CommentItem />
      </View>
      <View className='details-box'>
        <GoodsView />
      </View>
      <View className='submitBar-box'>
        <SubmitBar />
      </View>

    </View>
  )
}

export default GoodsDetailPage
