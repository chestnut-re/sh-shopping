import React, { useCallback, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView, ImgView } from '@components'
import './index.less'
import {
  Tab, Tabs, PowerScrollView,
} from "@antmjs/vantui";

import '@antmjs/vantui/es/tab/style'
import '@antmjs/vantui/es/tabs/style'

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
      >
        <Tab title='全部'>
          <PowerScrollView
            finishedText='没有更多了'
            className={`${IS_WEAPP ? 'min-' : ''}pull-basics`}
            successText='刷新成功'
            successDuration={1500}
            onScrollToUpper={basicsDoRefresh}
            // onScrollToLower={this.basicsLoadMore}
            current={10}
          // finished={this.state.basicsFinished}
          >
            <View className='call'>

            </View>
            <View className='call'>

            </View>
            <View className='call'>

            </View>
            <View className='call'>

            </View>
            <View className='call'>

            </View>
            <View className='call'>

            </View>
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
