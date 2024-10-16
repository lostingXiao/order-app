import React, { useEffect, useRef,useState } from 'react'
import style from './style.module.scss'
import { List,Image,Stepper } from 'antd-mobile'

export default function ListItem({ item, onChange }) {
  return (
    <List.Item
      className={ style.item }
      description={item.description}
      prefix={
        <Image
          src={item.img_url}
          style={{ borderRadius: 2 }}
          fit='cover'
          width={40}
          height={40}
        />
      }
      extra={ <Stepper className={ style.stepper } min={0} digits={0} step={item.min_quantity} value={item.quantity} onChange={(v)=>onChange(v)} /> }>
      {item.name}
    </List.Item>
  )
}
