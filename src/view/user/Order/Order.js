import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { Dialog } from 'antd-mobile'
import Side from './components/Side/Side'
import Main from './components/Main/Main'
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'
import Selected from './components/Selected/Selected'
import { useLogin } from '@/hooks/useLogin'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { goodsList, createOrder } from '@/api/order'
import orderSocket, { orderAdd, orderSub, orderChange } from '@/socket/order'

export default function Order() {
  const navigate = useNavigate()
  const { login } = useLogin()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const [ goodsData, setGoodsData ] = useState([])
  const [ goodsMap, setGoodsMap ] = useState(new Map())
  const [ selectedList, setSelectedList ] = useState([])
  const [ selectedVisible, setSelectedVisible ] = useState(false)
  const [ amount, setAmount ] = useState(0)
  const [ quantity, setQuantity ] = useState(0)

  const init = async ()=> {
    const loginRes = await login({code})
    loginRes && getGoodsList()
  }

  const getGoodsList = async () => {
    const res = await goodsList()
    const list = res.list
    setGoodsData(list)
    const map = getGoodsMap(list)
    setGoodsMap(map)
    orderChange(res=>orderListChange(map,res))
  }

  const getGoodsMap = (arr) => {
    const map = new Map()
    for( let item of arr ){
      const goodsListMap = new Map()
      const { goodsList, ...rest } = item
      for( let obj of goodsList ){
        goodsListMap.set(obj.id, { amount:0, quantity:0,...obj })
      }
      const obj = { goodsList: goodsListMap , ...rest }
      map.set(item.type_id, obj)
    }
    return map
  }

  const onMainScroll = (v) => {

  }

  const onMainAddChange = async (num,item,list) => {
    const map = getGoodsMap(goodsData)
    const res = await orderAdd(item)
    orderListChange(map,res)
  }
  const onMainSubChange = async (num,item,list) => {
    const map = getGoodsMap(goodsData)
    const res = await orderSub(item)
    orderListChange(map,res)
  }
  const orderHandle = async ()=>{
    if(!selectedList.length){
      Dialog.show({
        content: '您当前没有选择任何商品，是否查看订单详情？',
        closeOnAction: true,
        actions: [
          [
            {
              key: 'yes',
              text: '是',
              onClick: ()=>navigate(`/orderList?code=${code}`)
            },
            {
              key: 'no',
              text: '否',
            },
          ]
        ]
      })
      return 
    }
    goOrderList()
  }

  const goOrderList = async ()=>{
    await createOrder()
    const map = getGoodsMap(goodsData)
    orderListChange(map, { amount:0, quantity:0, list:[] })
    navigate(`/orderList?code=${code}`)
  }


  const orderListChange = (map,{amount, quantity, list}) => {
    const tempMap = new Map(map)
    list.forEach(item => {
      const typeId = item.type_id
      const goodsId = item.id
      const current = tempMap.get(typeId)
      const goodsTypeMap = current.goodsList
      goodsTypeMap.set(goodsId,item)
    })
    setSelectedList(list)
    setGoodsMap(tempMap)
    setAmount(amount)
    setQuantity(quantity)
  }

  const showDetail=()=>{
    setSelectedVisible(true)
  }

  const onMaskClick = ()=> {
    setSelectedVisible(false)
  }

  useEffect(()=>{
    init()
    return ()=>orderSocket.disconnect()
  },[])

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Top></Top>
      </div>
      <div className={style.content}>
        <div className={style.side}>
          <Side items={goodsMap}></Side>
        </div>
        <div className={style.main}>
          <Main items={goodsMap} selected={selectedList} onScroll={onMainScroll} onAddChange={onMainAddChange} onSubChange={onMainSubChange}></Main>
        </div>
        <div className={style.bottom} >
          <Bottom quantity={quantity} amount={amount} showDetail={showDetail} onOrder={orderHandle}></Bottom>
        </div>
      </div>
      <Selected items={selectedList} quantity={quantity} amount={amount} visible={selectedVisible} onAddChange={onMainAddChange} onSubChange={onMainSubChange} onMaskClick={onMaskClick} onOrder={orderHandle} />
    </div>
  )
}

