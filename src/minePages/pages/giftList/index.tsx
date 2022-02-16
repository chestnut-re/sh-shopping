import React, { useCallback, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView, ImgView } from '@components'
import {
  Tab, Tabs, PowerScrollView,
} from "@antmjs/vantui";

import '@antmjs/vantui/es/tab/style'
import '@antmjs/vantui/es/tabs/style'
import './index.less'

import GiftListView from './components/giftListView'

const GiftList: React.FC = () => {

  const [active, setActive] = useState(0)

  const onChange = (event) => {
    console.log('event', event)
    // setActive()
  }

  const basicsDoRefresh = async (event) => {

  }

  return (
    <SafeAreaView className='GiftListScreen__root'>
      <Tabs
        animated
        active={active}
        onChange={onChange}
        className='giftTabs'
      >
        <Tab title='全部'>
          <View className='box_wrapper'>
            <View className='manyGiftView'>
              <View className='titleView'>
                礼券送亲友，可单券送、多券打包送
              </View>
              <View className='btn'>
                多券打包送
              </View>
            </View>
          </View>
          <PowerScrollView
            finishedText='没有更多了'
            className={`${IS_WEAPP ? 'min-' : ''}pull-basics`}
            successText='刷新成功'
            successDuration={1500}
            onScrollToUpper={basicsDoRefresh}
            // onScrollToLower={this.basicsLoadMore}
            current={10}
            finished={false}
          >
            <GiftListView data={[1, 2, 3, 4, 5]} />

          </PowerScrollView>
        </Tab>
        <Tab title='未使用'>
          未使用
        </Tab>
        <Tab title='未领取'>
          未领取
        </Tab>
        <Tab title='已使用'>
          已使用
        </Tab>
        <Tab title='已失效'>
          已失效
        </Tab>
      </Tabs>
    </SafeAreaView>
  )
}

export default GiftList
