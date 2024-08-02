import React from 'react'
import style from './OrderList.module.scss'
import Main from './components/Main/Main'
import Bottom from './components/Bottom/Bottom'

const randomItems =()=>Array(10).fill('').map(item=>({
  name:111,
  state:1,
  num:3
}))

const groups = Array(10).fill('').map((item,index)=>({
  orderNum:(index+1).toString(),
  items:randomItems()
}))

export default function Menu() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Main data={groups}></Main>
      </div>
      <div className={style.bottom}>
        <Bottom></Bottom>
      </div>
    </div>
  )
}
