import React from 'react'
import style from './style.module.scss'
import { List, Image, Stepper } from 'antd-mobile'

export default function ListItem({ item, onAddChange, onSubChange, onChange }) {
  const onStepperChange = (v) => {
    const { quantity=0 } = item
    item.quantity = v
    if(v>quantity) onAddChange(v,item)
    else onSubChange(v,item)
    onChange && onChange(v,item)
  }
  return (
    <List.Item
      className={ style.item }
      description={ <div><div>{item.description}</div><div className={style.price}>￥{item.price}</div></div> }
      prefix={
        <Image
          src={item.img_url}
          style={{ borderRadius: 2 }}
          fit='cover'
          width={40}
          height={40}
        />
      }
      extra={ 
        <Stepper className={ style.stepper } min={0} digits={0} step={item.min_quantity} value={item.quantity} onAddChange={onStepperChange} onSubChange={onStepperChange} onChange={onStepperChange} /> 
      }>
      {item.name}
    </List.Item>
  )
}
