import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { lorem } from '@/mock'
import Side from './components/Side/Side'
import Main from './components/Main/Main'
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'
import { useLogin } from '@/hooks/useLogin'
import { useSearchParams } from 'react-router-dom'
import { Button, List } from 'antd-mobile'
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

  const init = async ()=> {
    const loginRes = await login({code})
    loginRes && getGoodsList()
    
  }

  const getGoodsList = async () => {
    const res = await goodsList()
    setList(res.list)
  }

  const onScroll = (v) => {
    // console.log('onScroll---order')
    // console.log(v)
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
          <Side items={list} ></Side>
        </div>
        <div className={style.main}>
          <Main items={list} onScroll={onScroll}></Main>
        </div>
        <div className={style.bottom} >
          <Bottom></Bottom>
        </div>
      </div>
    </div>
  )
}

