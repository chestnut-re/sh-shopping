import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Image, Text } from '@tarojs/components'
import '@antmjs/vantui/es/tab/style'
import '@antmjs/vantui/es/tabs/style'
import './index.less'
import {
  Tab, Tabs, PowerScrollView,
} from "@antmjs/vantui";


interface TplProps {
  data: any[];
  activeIndex: number;
  onWayClick: (...args: any) => void;
}

/**
 * 商品列表
 */
const HomeTabsView: React.FC<TplProps> = ({ data, onWayClick, activeIndex }) => {
  useEffect(() => {
  }, [])


  const handleClick = (item: any) => () => {
    onWayClick(item);
  };

  return (
    <View className='homeTabsView'>
      <View className='tabs-box'>
        {data.map((item: any, index: number) => {
          return (
            <View
              key={item.id}
              onClick={handleClick(item)}
              className='tabs-content'
            >
              <View className='nameView'>
                <Text
                  className={`text ${activeIndex === item.index
                    ? "text-active"
                    : ""
                    }`}
                >
                  {item.name}
                </Text>
              </View>

              <View className='ticView'>
                <Text
                  className={`text ${activeIndex === item.index
                    ? "text-active"
                    : ""
                    }`}
                >
                  新年好礼
                </Text>
              </View>
              {/* {activeIndex === item.index && (
                <View className='pseudo-content__pseudo' />
              )} */}
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default HomeTabsView