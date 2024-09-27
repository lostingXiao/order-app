import React from 'react'
import style from './style.module.scss' 
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default function Bottom() {
  const tabs=[
    { key: '/user/home',title: '首页',icon: <AppOutline className={style.icon} /> },
    // { key: '/user/order',title: '点单',icon: <AppOutline /> },
    { key: '/orderList',title: '订单',icon: <UnorderedListOutline className={style.icon} /> }
  ]
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  const setRouteActive = (value) => {
    console.log(value)
    navigate(value)
  }
  return (
    <TabBar className={style.bar} activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}
