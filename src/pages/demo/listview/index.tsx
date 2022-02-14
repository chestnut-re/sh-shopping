
import React, { useEffect, useState } from 'react'

import { View } from "@tarojs/components";
import "./index.less";
import {
  SafeAreaView
  // eslint-disable-next-line import/first
} from "@components";
import ListView, { LazyBlock } from "taro-listview";

/**
 * 安全区域视图
 */
const ListViews: React.FC = () => {

  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)



  const pullDownRefresh = () => {
    setIsLoaded(true)
    setTimeout(() => {
      setIsLoaded(false)
    }, 3000)

  }
  return (
    <SafeAreaView className='lazy-view'>
      <ListView
        // ref={node => this.insRef(node)}
        style={{ height: "90vh" }}
        isLoaded={isLoaded}

        onPullDownRefresh={pullDownRefresh}
        distanceToRefresh={50}
        lazyStorage='lazyView'
      >

        <View className='listItem'>哈哈哈1</View>
        <View className='listItem'>哈哈哈2</View>
        <View className='listItem'>哈哈哈3</View>
        <View className='listItem'>哈哈哈4</View>
        <View className='listItem'>哈哈哈5</View>
        <View className='listItem'>哈哈哈6</View>
        <View className='listItem'>哈哈哈7</View>

      </ListView>
    </SafeAreaView>
  )
}

export default ListViews
