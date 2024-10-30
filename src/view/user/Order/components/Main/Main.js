import React, { useEffect, useRef,useState } from 'react'
import style from './style.module.scss'
import { List, Footer } from 'antd-mobile'
import { useThrottleFn } from 'ahooks'
import ListItem from '../ListItem/ListItem'

export default function Main({ items, onScroll, onChange, selected, onAddChange, onSubChange }) {
  const [ itemList, setItemList ] = useState([])
  const mainElementRef = useRef(null)
  const { run: handleScroll } = useThrottleFn(
    () => {
      let currentKey = itemList[0].type_id
      for (const item of items) {
        const element = document.getElementById(`anchor-${item.type_id}`)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 0) {
          currentKey = item.type_id
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
    const list = Array.from(items.values()).map(item=>{
      const { goodsList:tempList,...rest } = item
      const goodsList = Array.from(tempList.values())
      return { goodsList, ...rest }
    })
    setItemList(list)
    const mainElement = mainElementRef.current
    if (!mainElement) return
    mainElement.addEventListener('scroll', handleScroll)
    return () => {
      mainElement.removeEventListener('scroll', handleScroll)
    }
  }

  const onQuantityChange = (num,data,f) => {
    const seledList = getSeledList()
    if(f==='add') onAddChange && onAddChange(num,data,seledList)
    else if(f==='sub') onSubChange && onSubChange(num,data,seledList)
    else onChange && onChange(num,data,seledList)
  }

  const getSeledList = () => {
    let goodsList = []
    itemList.forEach(item=> goodsList=[...goodsList,...item.goodsList] )
    const list = goodsList.filter(item=>item.quantity)
    return list
  }


  useEffect(() => {
    init()
  }, [items,selected])

  return (
    <div key={1} className={style.container} ref={mainElementRef}>
      {itemList.map((item,index) => (
          <List key={item.type_id} header={
            <div className={ style.title } id={`anchor-${item.type_id}`}>{item.type_name}</div>
          }>
            {item.goodsList.map((obj,idx)=>(
              <ListItem key={obj.id} item={obj} onAddChange={(num,o)=>onQuantityChange(num,o,'add')} onSubChange={(num,o)=>onQuantityChange(num,o,'sub')} onChange={(num,o)=>onQuantityChange(num,o)} />
            ))}
          </List>
        ))}
        <Footer content='没有更多了'></Footer>
    </div>
  )
}