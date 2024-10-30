import React, { useState,useEffect } from 'react'
import { SideBar } from 'antd-mobile'

export default function Side({ items }) {
  const [ activeKey, setActiveKey ] = useState('1')
  const [ itemList, setItemList ] = useState([])

  const init = () => {
    const list = Array.from(items.values()).map(item=>{
      const typeQuantity  = Array.from(item.goodsList.values()).reduce((total,item)=>total+=item.quantity || 0,0)
      return {typeQuantity, typeId: item.type_id, typeName: item.type_name}
    })
    console.log(list.length)
    if(!list.length) return
    console.log(list[0])
    const key = list.length ? list[0].typeId.toString() :''
    console.log(key)
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
      <SideBar activeKey={activeKey} onChange={onChange}>
        {itemList.map(item => (
          <SideBar.Item key={item.typeId} title={item.typeName} badge={item.typeQuantity || ''} />
        ))}
      </SideBar>
    </>
  )
}
