import React, { useCallback } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'
import { SafeAreaView, ImgView } from '@components'
import './index.less'
import { TrendBridge } from '../../jsbridge'

const DebugPage: React.FC = () => {
  const [show] = useModal({
    title: 'Modal!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true,
  })
  const [showToast] = useToast({ mask: true })

  const handleModal = useCallback(() => {
    show({ content: '不如给一个star⭐️!' })
  }, [show])

  return (
    <SafeAreaView className='DebugPage__root'>
      <View className='content' style={{ flex: 1 }}>
        <Button className='button' onClick={handleModal}>
          DebugPage
        </Button>

        <Button
          className='button'
          onClick={() => {
            showToast({ title: 'Toast 弹框!' })
          }}
        >
          使用Toast
        </Button>
        <Button
          className='button'
          onClick={() => {
            TrendBridge.navigateTo({ url: '/pages/demo/listview/index' })
          }}
        >
          list-View 页面
        </Button>
        <View className='imgView'>
          <ImgView width={100} height={100} src='https://img.yzcdn.cn/vant/cat.jpeg' className='img' />
        </View>
        <View className='imgView'>
          <ImgView width={100} height={100} src='xxx' className='img' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DebugPage
