import React,{useState} from 'react'
import style from './style.module.scss'
import { SearchBar,Switch,NoticeBar } from 'antd-mobile'

export default function Top() {
  const [ isAway, setIsAway ]=useState(true)
  const demoLongText='信息adfadfasfdasfdasdfasdfdsafasdfasfd信息adfadfasfdasfdasdfasdfdsafasdfasfd'
  return (
    <div className={style.container}>
      <div className={style.search}>
        <SearchBar className={style.bar} placeholder='请输入内容' />  
        <Switch className={style.away} checked={isAway} uncheckedText='带起走' checkedText='店头吃' onChange={async v=>setIsAway(v)} /> 
      </div>
      <NoticeBar className={style.notice} scrollable content={demoLongText} color='alert' /> 
    </div>
  )
}
