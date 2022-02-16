import React from 'react'
import { Image } from '@antmjs/vantui'
import '@antmjs/vantui/es/image/style'
import './index.less'

interface Props {
  className?: string
  src: string
  width?: number
  height?: number
  fit?:string
}

/**
 * 图片组件
 */
const ImgView: React.FC<Props> = ({ className = '',fit="fill", src = '', width = 50, height = 50 }) => {
  return (
    <Image
      className={`image-view ${className}`}
      width={width}
      height={height}
      lazyLoad
      src={src}
      fit={fit}
      renderError={
        <Image
          width={width}
          height={height}
          fit={fit}
          src='https://shanhai-shoping.oss-cn-beijing.aliyuncs.com/img/user/pic/327f2ff9f41a4276a670494e49954fb4.gif'
        />
      }
    />
  )
}
export default ImgView
