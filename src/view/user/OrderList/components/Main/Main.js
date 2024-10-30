import React, { useState } from 'react'
import style from './Main.module.scss'
import { IndexBar,SwipeAction, List, DotLoading, Empty, Mask } from 'antd-mobile'
import { ClockCircleOutline,CheckCircleOutline,TransportQRcodeOutline  } from 'antd-mobile-icons'

export default function Main({data, onOrderCancel, onDetailCancel}) {

  const cancelHandle = (f,id,orderId) => {
    console.log(f)
    console.log(id)
    f==='order' ? onOrderCancel(id) : onDetailCancel({id, orderId})
  }

  return (
    <div className={style.container}>
      {data.length?data.map(group => {
        return (
          <List key={group.order_id} header={group.order_id}>
          {group.detailList.map((item, index) => {
            return <SwipeAction
              key={item.id}
              rightActions={ !item.status ? [{
                  key: 'cancel',
                  text: '取消',
                  onClick:()=>cancelHandle('detail',item.id,group.order_id)
                }]:[]}
              >
                <List.Item 
                  key={index} 
                  className={style.item} 
                  extra={
                    <>
                      <span className={style.itemExtraText} >X {item.quantity}</span>
                      {!item.status? <ClockCircleOutline />  : item.status===1 ? <TransportQRcodeOutline /> : <CheckCircleOutline color='var(--adm-color-orange)' />}
                    </>
                  }
                >
                  {item.goods_name}
                </List.Item>
              </SwipeAction>
            })}
            <SwipeAction
              rightActions={ !group.order_status ? [{
                key: 'cancel',
                text: '取消订单',
                onClick:()=>cancelHandle('order',group.order_id)
              }]:[]}
            >
              <List.Item 
                extra={
                  <span className={style.state}>
                    { !group.order_status ? '已下单，请稍后' : group.order_status===1 ? '制作中' : '已完成'}
                    { group.order_status===1 ? <DotLoading color='currentColor' /> : '' }
                  </span>
                }
              >
                <span className={style.main}>￥ 222</span>
              </List.Item>
            </SwipeAction>
        </List>
      )}):<Empty description='您还没有点单哦' />}
    </div>
  )
}
