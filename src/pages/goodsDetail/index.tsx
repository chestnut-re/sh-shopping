import React, { useCallback, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { SafeAreaView } from '@components'
import SWiperNav from '../../components/goodsDetail/swiper'
import BasicInfo from '../../components/goodsDetail/basicInfo'
import CaseExplain from '../../components/goodsDetail/caseExplain'
import CommentItem from '../../components/goodsDetail/comment'
import GoodsView from '../../components/goodsDetail/goodsView'
import SubmitBar from '../../components/goodsDetail/submitBar'
import PopupView from '../../components/popupView'
import GoodsSku from '../../components/goodsDetail/goodsSku'
import NoShipment from '../../components/goodsDetail/noShipment'

import './index.less'

const GoodsDetailPage: React.FC = () => {
  const swpierData = {
    banner: [
      { image_src: 'https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709' },
      { image_src: 'https://img0.baidu.com/it/u=1208144021,871142642&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500' },
    ],
  }

  const [showView, setShowView] = useState(false)
  const HandleSubmite = item => {
    console.log('item :>> ', item)
    setPopupInfo('确认订单', 1)
  }

  //弹窗类型 1下单 2，不发货地区
  const [popupType, setPopupType] = useState({
    title: '确认订单',
    type: 1,
  })

  const onChangeReceiveFun = item => {
    const { type } = item
    if (type === '4') {
      setPopupInfo('不发货地区', 2)
    }
  }

  const setPopupInfo = (name, type, b = true) => {
    setPopupType({
      title: name,
      type: type,
    })
    setShowView(b)
  }
  const HandleFunction = () => {
    console.log('object :>> ')
  }
  return (
    <View className='GoodsDetail__root'>
      <SWiperNav {...swpierData} />
      <BasicInfo />
      <View className='caseExplain-box'>
        <CaseExplain receiveChange={onChangeReceiveFun} />
      </View>
      <View className='commentList-box'>
        <CommentItem />
      </View>
      <View className='details-box'>
        <GoodsView />
      </View>
      <View className='submitBar-box'>
        <SubmitBar onClickHandle={HandleSubmite} />
      </View>
      <PopupView
        showView={showView}
        title={popupType.title}
        onClose={() => {
          setShowView(false)
        }}
      >
        {popupType.type === 1 && <GoodsSku HandleFun={HandleFunction} />}
        {popupType.type === 2 && <NoShipment HandleFun={HandleFunction} />}
      </PopupView>
    </View>
  )
}

export default GoodsDetailPage
