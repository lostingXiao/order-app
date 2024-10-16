import React from 'react'
import style from './Bottom.module.scss'
import { Badge, Space,Button } from 'antd-mobile'
import { TruckOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

export default function Bottom({count, showDetail, goOrderList}) {
  
  
  return (
    <div className={style.box}>
      <div className={style.left}>
      <Badge content={count} >
        <TruckOutline onClick={showDetail} fontSize={32} color='var(--adm-color-primary)' />
      </Badge>
      </div>
      <div className={style.right} onClick={goOrderList}>下单</div>
    </div>
  )
}
