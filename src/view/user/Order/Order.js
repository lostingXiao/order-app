import React from 'react'
import style from './Order.module.scss'
import { lorem } from '@/mock'
import Side from './components/Side/Side'
import Main from './components/Main/Main'
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'

const menus = lorem.map((item,index)=>({
  key: item.key,
  title: item.typeName,
  text:JSON.stringify(item.items()),
  items:item.items()
})) 

export default function Order() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Top></Top>
      </div>
      <div className={style.content}>
        <div className={style.side}>
          <Side items={menus}></Side>
        </div>
        <div className={style.main}>
          <Main items={menus}></Main>
        </div>
        <div className={style.bottom}>
          <Bottom></Bottom>
        </div>
      </div>
    </div>
  )
}
