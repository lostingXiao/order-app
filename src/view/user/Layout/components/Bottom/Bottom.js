import React from 'react'
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
    { key: '/user/home',title: '首页',icon: <AppOutline /> },
    // { key: '/user/order',title: '点单',icon: <AppOutline /> },
    { key: '/user/orderList',title: '订单',icon: <AppOutline /> }
  ]
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  const setRouteActive = (value) => {
    console.log(value)
    navigate(value)
  }
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}
