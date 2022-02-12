import React from 'react'
import { View } from '@tarojs/components'
import './index.less'

interface Props {
  className?: string
  style?: object
  edges?: any
}

/**
 * 安全区域视图
 */
const SafeAreaView: React.FC<Props> = ({
  className = '',
  style = {},
  edges = ['right', 'bottom', 'left'],
  children,
}) => {
  return (
    <View className={`safe-area-view ${className}`} style={{ ...(style as object) }}>
      {children}
    </View>
  )
}
export default SafeAreaView
