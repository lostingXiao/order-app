import React, { useState, useEffect } from 'react'
import style from './OrderList.module.scss'
import Main from './components/Main/Main'
import Bottom from './components/Bottom/Bottom'
import { IndexBar,SwipeAction, List, DotLoading, Empty, Mask } from 'antd-mobile'
import { orderList } from '../../../api/order'
import orderListSocket, { orderCancel, orderDetailCancel, orderStatusChange } from '@/socket/orderList'

const randomItems =()=>Array(10).fill('').map(item=>({
  name:111,
  state:1,
  num:3
}))

const groups = Array(10).fill('').map((item,index)=>({
  orderNum:(index+1).toString(),
  items:randomItems()
}))



export default function OrderList() {

  const [ maskVisible, setMaskVisible] = useState(false)
  const [ list, setList ] = useState([])
  const [ amount, seAmount ] = useState(0)

  const getOrderList = ({list, amount})=> {
    setList(list)
    seAmount(amount)
  }

  const init = ()=> {
    orderStatusChange(res=>getOrderList(res))
  }
  const onOrderCancel = async (id) => {
    const res = await orderCancel({id})
    console.log(res)
    getOrderList(res)
  }
  const onDetailCancel = async ({id, orderId}) => {
    setMaskVisible(true)
    const res = await orderDetailCancel({id, orderId})
    console.log(res)
    setMaskVisible(false)
    getOrderList(res)
  }


  useEffect(()=>{
    init()
    return ()=>{}
  },[])

  return (
    <div className={style.container}>
      <Mask visible={maskVisible}>
        <div className={style.loading}>操作中<DotLoading color='var(--adm-color-white)' /></div>
      </Mask>
      <div className={style.content}>
        <Main data={list} onOrderCancel={onOrderCancel} onDetailCancel={onDetailCancel}></Main>
      </div>
      <div className={style.bottom}>
        <Bottom amount={ amount }></Bottom>
      </div>
    </div>
  )
}
