/**
 * 下单组件
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Stepper } from '@antmjs/vantui'
import ImgView from '../../imgView'
import WxPay from '../../../assets/goodsdetail/wxpay.png'
import '@antmjs/vantui/es/stepper/style'
import './index.less'

interface GoodsSKUTypes {
  HandleFun: () => void
}

const GoodsSKU: React.FC<GoodsSKUTypes> = ({ HandleFun }) => {
  return (
    <View className='GoodsSKU__root'>
      <View className='sku-container'>
        <View className='sku-header'>
          <View className='sku-header-left'>付款后再输地址提货，或送亲友</View>
          <View className='sku-header-right'></View>
        </View>
        <View className='sku-body'>
          <View className='sku-body-goods'>
            <View className='sbg-left'>
              <ImgView
                src='https://img1.baidu.com/it/u=2284778989,1400001286&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=709'
                fit='cover'
                width={80}
                height={80}
              />
            </View>
            <View className='sbg-right'>
              <View className='sbg-right-name'>智利进口车厘子商品名称</View>
              <View className='sbg-right-tag'>
                <View className='srt-item'>智利进口</View>
                <View className='srt-item'>文字特别长进口国家名称</View>
              </View>
              <View className='sbg-right-num'>
                <View className='srn-price'>¥299</View>
                <View className='srn-discounts'>省 ¥58</View>
                <View className='srn-inventory'>库存3559</View>
              </View>
            </View>
          </View>
          <View className='sku-body-stepper van-hairline--bottom'>
            <View className='sbs-left'>已选：3件装；JJJ</View>
            <View className='sbs-right'>
              <Stepper value={1} min='1' max='8' />
            </View>
          </View>
          <View className='sku-body-specifications'>
            <View className='specifications-species'>
              <View className='species-name'>优惠价分类</View>
              <View className='species-list'>
                <View className='species-list-item species-select'>
                  <View className='sli-ins'>即将恢复¥119/件</View>
                  <View className='sli-box'>
                    <View className='sli-item-t'>
                      <View className='sit-price'>¥184.5</View>
                      <Text>/件</Text>
                    </View>
                    <View className='sli-item-b'>3件装</View>
                  </View>
                </View>
                <View className='species-list-item'>
                  <View className='sli-ins'>即将恢复¥119/件</View>
                  <View className='sli-box'>
                    <View className='sli-item-t'>
                      <View className='sit-price'>¥184.5</View>
                      <Text>/件</Text>
                    </View>
                    <View className='sli-item-b'>3件装</View>
                  </View>
                </View>
                <View className='species-list-item species-disabled'>
                  <View className='sli-ins'>即将恢复¥119/件</View>
                  <View className='sli-box'>
                    <View className='sli-item-t'>
                      <View className='sit-price'>¥184.5</View>
                      <Text>/件</Text>
                    </View>
                    <View className='sli-item-b'>3件装</View>
                  </View>
                </View>
                <View className='species-list-item'>
                  <View className='sli-ins'>即将恢复¥119/件</View>
                  <View className='sli-box'>
                    <View className='sli-item-t'>
                      <View className='sit-price'>¥184.5</View>
                      <Text>/件</Text>
                    </View>
                    <View className='sli-item-b'>3件装</View>
                  </View>
                </View>
              </View>
            </View>
            <View className='specifications-level'>
              <View className='species-name'>品质等级</View>
              <View className='level-list'>
                <View className='level-list-item level-selected'>JJJ</View>
                <View className='level-list-item'>S</View>
                <View className='level-list-item'>L</View>
                <View className='level-list-item'>JJJ</View>
                <View className='level-list-item'>JJJJJJ</View>
                <View className='level-list-item'>JJ==JJJJ</View>
                <View className='level-list-item'>JJJ</View>
                <View className='level-list-item level-disabled'>JJJJJJ</View>
                <View className='level-list-item'>JJ==JJJJ</View>
              </View>
            </View>
          </View>
        </View>
        <View className='sku-footer van-hairline--top'>
          <View className='sku-footer-paytype'>
            <View className='sfp-left'>
              礼币 <Text className='sfp-left-knock'>减¥20</Text>，余下用
            </View>
            <View
              className='pay-icon'
              style={{ background: `url(${WxPay}) no-repeat center`, backgroundSize: '100% auto' }}
            ></View>
            <View className='sfp-right'> 微信支付</View>
          </View>
          <View className='sku-footer-btn'>立即支付 ¥279</View>
        </View>
      </View>

      {/* <View onClick={HandleFun}>点我</View> */}
    </View>
  )
}

export default GoodsSKU
