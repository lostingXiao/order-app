import React, { useState } from 'react'
import { SideBar } from 'antd-mobile'

export default function Side(props) {
  const [activeKey, setActiveKey] = useState(props.items[0].key)
  return (
    <SideBar
      activeKey={activeKey}
      onChange={key => {
        setActiveKey(key)
        document.getElementById(`anchor-${key}`)?.scrollIntoView()
      }}
    >
      {props.items.map(item => (
        <SideBar.Item key={item.key} title={item.title} />
      ))}
    </SideBar>
  )
}
