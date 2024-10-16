import React, { useEffect, useRef,useState } from 'react'
import style from './style.module.scss'
import { Popup, List, Space, Button, Empty } from 'antd-mobile'
import ListItem from '../ListItem/ListItem'

export default function Selected({ items, visible, onMaskClick, goOrderList, onChange }) {


  const onNumChange = (i,v)=>{
    items[i].quantity=v
    const list = items.filter(item=>item.quantity)
    onChange(list)
  }

  return (
    <Popup
      visible={visible}
      onMaskClick={onMaskClick}
      position='right'
      bodyStyle={{ width: '80vw' }}
    >
      <div className={style.content}>
        <div className={style.title}>已点商品</div>
        <List className={style.list}>
          {items.length?items.map((obj,idx)=>(
            <ListItem key={obj.id} item={obj} onChange={(v)=>onNumChange(idx,v)} />
          )):<Empty description='暂无数据' />}
        </List>
        <div className={style.handle}>
          <div onClick={onMaskClick}>继续点餐</div>
          <div className={style.admin} onClick={goOrderList}>下单</div>
        </div>
      </div>
    </Popup>
  )
}
