import React from 'react'
import style from './Bottom.module.scss'
import { Badge, Space,Button } from 'antd-mobile'
import { TruckOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

export default function Bottom({quantity, amount, showDetail, onOrder}) {
  
  
  return (
    <div className={style.box}>
      <div className={style.left}>
        <Badge content={quantity} >
          <TruckOutline onClick={showDetail} fontSize={32} color='var(--adm-color-primary)' />
        </Badge>
        <span>￥<span className={style.amount}>{ amount }</span></span>
      </div>
      <div className={style.right} onClick={onOrder}>下单</div>
    </div>
  )
}
