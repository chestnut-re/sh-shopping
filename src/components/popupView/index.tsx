/**
 * Popup 弹出层组件
 * 插槽形式加载组件
 */

import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { Popup } from '@antmjs/vantui'
import '@antmjs/vantui/es/popup/style'
import './index.less'

interface PopupViewTypes {
  showView:boolean
  onClose:()=>void
  title:string
}

const PopupView: React.FC<PopupViewTypes> = ({showView=false,title="弹框",children=[],onClose}) => {
  const [childrenDom,setChildrenDom] = useState();
 const isArrayFn = (o)=> {
    return Array.isArray(o);
    }
  useEffect(()=>{
      if (showView&&children) {
        if (isArrayFn(children)) {
          const B = children.find(item => { return item })
          setChildrenDom(B)
        }else{
          setChildrenDom(children)
        }
      
      }
  },[showView,children])
  
  console.log('showView :>> ', children);
  return (
    <Popup show={showView} position='bottom' round safeAreaInsetBottom style='height: auto' onClickOverlay={onClose}>
        <View className='wrapper-popup'>
            <View className='wrapper-popup-header'>
              <View className='wph-title'>{title}</View>
              <View className='wph-close' onClick={onClose}></View>
            </View>
            <View className='wrapper-popup-body'>
              {childrenDom}
            </View>
        </View>
      </Popup>
    
  )
}

export default PopupView
