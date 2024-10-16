import React, { useEffect, useRef,useState } from 'react'
import style from './style.module.scss'
import { List,Image,Stepper,Footer } from 'antd-mobile'
import { useThrottleFn } from 'ahooks'

import { lorem } from '@/mock'


const menus = lorem.map((item,index)=>({
  goods_type_id: item.goods_type_id,
  goods_type_name: item.goods_type_name,
  text:JSON.stringify(item.goodsList()),
  goodsList:item.goodsList()
})) 

export default function Main({ items, onScroll, onChange }) {

  const [ selectedList, setSelectedList ] = useState([])
  const [ itemList, setItemList ] = useState([])
  const mainElementRef = useRef(null)
  const { run: handleScroll } = useThrottleFn(
    () => {
      let currentKey = itemList[0].goods_type_id
      for (const item of items) {
        const element = document.getElementById(`anchor-${item.goods_type_id}`)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 0) {
          currentKey = item.goods_type_id
        } else {
          break
        }
      }
      onScroll(currentKey)
    },
    {
      leading: true,
      trailing: true,
      wait: 100,
    }
  )

  const init = () => {
    const list = items.length ? items : []
    setItemList(list)
    const mainElement = mainElementRef.current
    if (!mainElement) return
    mainElement.addEventListener('scroll', handleScroll)
    return () => {
      mainElement.removeEventListener('scroll', handleScroll)
    }
  }

  const stepperChange = (index,idx,v) => {
    console.log(index,idx,v)
  }


  useEffect(() => {
    init()
  }, [items])

  return (
    <div key={1} className={style.container} ref={mainElementRef}>
      {itemList.map((item,index) => (
          <List key={item.goods_type_id} header={
            <div className={ style.title } id={`anchor-${item.goods_type_id}`}>{item.goods_type_name}</div>
          }>
            {item.goodsList.map((obj,idx)=>(
              <List.Item
                className={ style.item }
                key={obj.id}
                description={obj.description}
                prefix={
                  <Image
                    src={obj.img_url}
                    style={{ borderRadius: 2 }}
                    fit='cover'
                    width={40}
                    height={40}
                  />
                }
                extra={ <Stepper className={ style.stepper } min={0} digits={0} step={obj.min_quantity} onChange={(v)=>stepperChange(index,idx,v)} /> }>
                {obj.name}
              </List.Item>
            ))}
          </List>
        ))}
        <Footer content='没有更多了'></Footer>
    </div>
  )
}
