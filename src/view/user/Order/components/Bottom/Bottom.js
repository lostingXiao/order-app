import React from 'react'
import style from './Bottom.module.scss'
import { Badge, Space,Button } from 'antd-mobile'
import { TruckOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const navigate = useNavigate()
  const goOrderList=()=>{
    navigate('/orderList')
  }
  return (
    <div className={style.box}>
      <div className={style.left}>
      <Badge content='5'>
        <TruckOutline fontSize={32} color='var(--adm-color-primary)' />
      </Badge>
      </div>
      <div className={style.right} onClick={goOrderList}>
        下单
      </div>
    </div>
  )
}
