import React from 'react'
import style from './style.module.scss'
import { Popup, List, Empty } from 'antd-mobile'
import ListItem from '../ListItem/ListItem'

export default function Selected({ items, quantity, amount, visible, onMaskClick, onOrder, onChange, onAddChange, onSubChange }) {

  console.log(items)
  const onNumChange = (num,data,f)=>{
    const list = items.filter(item=>item.quantity)
    if(f==='add') onAddChange && onAddChange(num,data,list)
    else if(f==='sub') onSubChange && onSubChange(num,data,list)
    else onChange && onChange(num,data,list)
  }

  return (
    <Popup
      visible={visible}
      onMaskClick={onMaskClick}
      position='right'
      bodyStyle={{ width: '80vw' }}
    >
      <div className={style.content}>
        <div className={style.title}>
          <span>已点商品 <span className={style.titleNum}>{quantity}</span></span>
          <span className={style.titleNum}>￥{amount} </span>
        </div>
        <List className={style.list}>
          {items.length?items.map((obj,idx)=>(
            <ListItem key={obj.id} item={obj} onAddChange={(num,o)=>onNumChange(num,o,'add')} onSubChange={(num,o)=>onNumChange(num,o,'sub')} onChange={(num,o)=>onNumChange(num,o)} />
          )):<Empty description='暂无数据' />}
        </List>
        <div className={style.handle}>
          <div onClick={onMaskClick}>继续点餐</div>
          <div className={style.admin} onClick={onOrder}>下单</div>
        </div>
      </div>
    </Popup>
  )
}
