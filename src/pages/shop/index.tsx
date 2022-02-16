import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import './index.less'
import { ImgView } from '@components'
import Star from '@/assets/img/shop/collection.png'
import Auth from '@/assets/img/shop/authorize.png'
import Commodity from '@/assets/img/shop/commodity.png'
import Quality from '@/assets/img/shop/quality.png'
import Sale from '@/assets/img/shop/sale.png'

const ShopPage: React.FC = () => {
  const data = [
    {
      key: '1',
      title: '智利进口车厘子JJ10斤装/份',
      price: '99.67',
      originalPrice: '119',
      img: 'url',
    },
    {
      key: '2',
      title: '甜心橙4.5-5斤箱装/份',
      price: '99.67',
      originalPrice: '119',
      img: 'url',
    },
    {
      key: '3',
      title: '山东红富士苹果5斤装/份',
      price: '99.67',
      originalPrice: '119',
      img: 'url',
    },
    {
      key: '4',
      title: '丹东奶油草莓10斤装/份',
      price: '99.67',
      originalPrice: '119',
      img: 'url',
    },
  ]

  return (
    <View className='Shop__root'>
      <View className='topView'>
        <View className='top'>
          <View className='topImg'></View>
          <View className='topText'>
            <View className='text'>
              <Text className='textTitle'>圈礼商城果蔬旗舰店</Text>
              <Image className='textStar' src={Star} />
            </View>
            <View className='textTag'>
              <Text className='tag'>圈礼商城自营</Text>
              <Text className='num'>188人收藏</Text>
            </View>
          </View>
          <View className='topIcon'>
            <View className='icon'>
              <Image src={Commodity} className='iconImg' />
              <View>
                <Text className='iconText'>商品自营</Text>
              </View>
            </View>
            <View className='icon'>
              <Image src={Auth} className='iconImg' />
              <View>
                <Text className='iconText'>授权保障</Text>
              </View>
            </View>
            <View className='icon'>
              <Image src={Quality} className='iconImg' />
              <View>
                <Text className='iconText'>品控保障</Text>
              </View>
            </View>
            <View className='icon'>
              <Image src={Sale} className='iconImg' />
              <View>
                <Text className='iconText'>售后保障</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className='contentView'>
        {data.map((item: any) => {
          return (
            <View className='content' key={item.key}>
              <View>
                <ImgView width={186} height={148} src={item.img} className='contentImg' />
              </View>
              <View className='title'>
                <Text className='contentTitle'>{item.title}</Text>
              </View>
              <View className='tag'>
                <Text className='contentTag'>限时触底价</Text>
              </View>
              <View className='price'>
                <Text className='priceSymbol'>¥</Text>
                <Text className='contentPrice'>{item.price}</Text>
                <Text className='contentOriginalPrice'>{`¥${item.originalPrice}`}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ShopPage
