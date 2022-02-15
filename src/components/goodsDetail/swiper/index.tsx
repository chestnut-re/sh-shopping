/**
 * 轮播图组件
 * indicatorDots Boolean 是否显示面板指示点
 * indicatorColor String 指示点颜色	
 * indicatorActiveColor String 当前选中的指示点颜色
 * autoplay Boolean 是否自动切换
 * interval Number 自动切换时间间隔
 * duration Number 滑动动画时长	
 * current Number 当前所在滑块的 index
 * circular Boolean 是否采用衔接滑动
 * vertical Boolean 滑动方向是否为纵向
 * onChange EventHandle current 改变时会触发 change 事件
 * onAnimationfinish EventHandle 动画结束时会触发 animationfinish 事件
 */

import React, { useCallback, useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View,Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'

interface RopTypes {
  banner: PropTypes.array
}

const SWiperNav: React.FC<RopTypes> = ({ banner }) => {

    const [indicator,setIndicator] = useState({
        current:1,  //当前视图
        total:1 //总条数
    })

    useEffect(()=>{
        setIndicator((v)=>{
            return {
             ...v,
             total:banner.length
            }
         })
    },[banner])

    const onSwiperChange = (current)=>{
        console.log('current :>> ', current);
        const {detail}  = current;
        setIndicator((v)=>{
           return {
            ...v,
            current:detail.current+1
           }
        })
    }

  return (
    <View className='Swiper__root'>
      <Swiper
        className='swiper-container'
        circular={false}
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay={false}
        indicatorDots={false}
        onChange={onSwiperChange}
      >
        {banner.map((item, index) => (
          <SwiperItem key={index}>
            <Image className='swiper-img' mode='aspectFill' src={item.image_src}></Image>
          </SwiperItem>
        ))}
      </Swiper>
      <View className='swiper-indicator'>{indicator.current}/{indicator.total}</View>
    </View>
  )
}

export default SWiperNav
