/**
 * 情况说明组件
 */

import React, { useCallback, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import './index.less'

interface CaseExplainTypes {}

const CaseExplain: React.FC<CaseExplainTypes> = () => {
  const caseExplainConfig = [
    { category: "快递", categoryName: '顺丰速运/EMS', isMore:false },
    { category: "保障", categoryName: '礼券过期自动退款；坏了包赔；包邮', isMore:true },
    { category: "礼券有效期", categoryName: '7天', isMore:false },
    { category: "不发货地区", categoryName: '新疆/内蒙古/海南省…', isMore:true },
  ]

  return (
    <View className='CaseExp__root'>
      {caseExplainConfig.map((item,index)=>{
        return (
          <View className='caseexplain-item van-hairline--bottom' key={index}>
            <View className='caseexplain-left'>{item.category}</View>
            <View className='caseexplain-center'>{item.categoryName}</View>
           { item.isMore?<View className='caseexplain-right'></View>:null}
        </View>
        )
      })}
       
    </View>
  )
}

export default CaseExplain
