import React from 'react'
import style from './Main.module.scss'
import { IndexBar, List } from 'antd-mobile'
import { ClockCircleOutline,CheckCircleOutline } from 'antd-mobile-icons'

export default function Main({data}) {
  return (
    <div className={style.container}>
      <IndexBar>
        {data.map(group => {
          const { orderNum, items } = group
          return (
            <IndexBar.Panel
              brief={orderNum}
              index={orderNum}
              title={`标题${orderNum}`}
              key={`标题${orderNum}`}
            >
              <List>
                {items.map((item, index) => {
                  return <List.Item 
                    key={index} 
                    className={style.item} 
                    extra={
                      <div>
                        <span className={style.itemExtraText} >X {item.num}</span>
                        {item.state?<CheckCircleOutline color='var(--adm-color-orange)' />:<ClockCircleOutline />}
                      </div>
                    }>
                    {item.name}</List.Item>
                  })}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}
