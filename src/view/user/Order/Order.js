import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { lorem } from '@/mock'
import Side from './components/Side/Side'
import Main from './components/Main/Main'
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'
import Selected from './components/Selected/Selected'
import { useLogin } from '@/hooks/useLogin'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Popup, List } from 'antd-mobile'
import { goodsList,test } from '@/api/order'

const menus = lorem.map((item,index)=>({
  goods_type_id: item.goods_type_id,
  goods_type_name: item.goods_type_name,
  text:JSON.stringify(item.goodsList()),
  goodsList:item.goodsList()
})) 

export default function Order() {
  const { login } = useLogin()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const [list, setList] = useState([])
  const navigate = useNavigate()
  const [ selectedList, setSelectedList ] = useState([])
  const [ selectedCount, setSelectedCount ] = useState(0)
  const [ selectedVisible, setSelectedVisible ] = useState(false)
  

  const init = async ()=> {
    const loginRes = await login({code})
    loginRes && getGoodsList()
    
  }

  const getGoodsList = async () => {
    const res = await goodsList()
    setList(res.list)
  }

  const onMainScroll = (v) => {
    // console.log('onScroll---order')
    // console.log(v)
  }

  const onMainChange = v => {
    const count=v.reduce((prev,cur)=>prev+cur.quantity,0)
    setSelectedCount(count)
    setSelectedList(v)
  }
  const goOrderList=()=>{
    navigate('/orderList')
  }

  const showDetail=()=>{
    console.log(1111)
    console.log(selectedList)
    setSelectedVisible(true)
  }

  const onMaskClick = ()=> {
    setSelectedVisible(false)
  }
   
  useEffect(()=>{
    init()
  },[])

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Top></Top>
      </div>
      <div className={style.content}>
        <div className={style.side}>
          <Side items={list}></Side>
        </div>
        <div className={style.main}>
          <Main items={list} selected={selectedList} onScroll={onMainScroll} onChange={onMainChange}></Main>
        </div>
        <div className={style.bottom} >
          <Bottom count={selectedCount} showDetail={showDetail} goOrderList={goOrderList}></Bottom>
        </div>
      </div>
      <Selected items={selectedList} visible={selectedVisible} onChange={onMainChange} onMaskClick={onMaskClick} goOrderList={goOrderList} />
    </div>
  )
}

