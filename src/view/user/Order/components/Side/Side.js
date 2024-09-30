import React, { useState,useEffect } from 'react'
import { SideBar } from 'antd-mobile'

export default function Side({ items }) {
  const [ activeKey, setActiveKey ] = useState('1')
  const [ itemList, setItemList ] = useState([])

  const init = () => {
    const list = items.length ? items.map(item=>({goods_type_id: item.goods_type_id.toString(), goods_type_name: item.goods_type_name})) : []
    const key = list.length ? list[0].goods_type_id :''
    setActiveKey(key)
    setItemList(list)
  }

  const onChange = key => {
    setActiveKey(key)
    document.getElementById(`anchor-${key}`)?.scrollIntoView()
  }

  useEffect(()=>{
    init()
  },[items])

  return (
    <>
    <SideBar
      activeKey={activeKey}
      onChange={onChange}
    >
      {itemList.map(item => (
        <SideBar.Item key={item.goods_type_id} title={item.goods_type_name} />
      ))}
    </SideBar>
    </>
  )
}
