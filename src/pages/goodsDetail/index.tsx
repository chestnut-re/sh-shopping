import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { SafeAreaView } from '@components'
import SWiperNav from '../../components/goodsDetail/swiper'
import BasicInfo from '../../components/goodsDetail/basicInfo'
import CaseExplain from '../../components/goodsDetail/caseExplain'
import CommentItem from '../../components/goodsDetail/comment'
import GoodsView from '../../components/goodsDetail/goodsView'

import './index.less'

const GoodsDetailPage: React.FC = () => {
  const swpierData = {
    banner: [
      { image_src: 'https://100px.net/assets/img/1.23e4196d.svg' },
      { image_src: 'https://100px.net/assets/img/2.8055de6f.svg' },
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
    </View>
  )
}

export default GoodsDetailPage
