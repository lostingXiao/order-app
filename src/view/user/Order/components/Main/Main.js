import React, { useEffect, useRef } from 'react'
import { List,Image,Stepper,Footer } from 'antd-mobile'
import { useThrottleFn } from 'ahooks'

export default function Main(props) {
  const mainElementRef = useRef(null)
  const { run: handleScroll } = useThrottleFn(
    () => {
      for (const item of props.items) {
        const element = document.getElementById(`anchor-${item.key}`)
        if (!element) continue
      }
    },
    {
      leading: true,
      trailing: true,
      wait: 100,
    }
  )

  useEffect(() => {
    const mainElement = mainElementRef.current
    if (!mainElement) return
    mainElement.addEventListener('scroll', handleScroll)
    return () => {
      mainElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={mainElementRef}>
      {props.items.map(item => (
          <List key={item.key} header={
            <h2 id={`anchor-${item.key}`}>{item.title}</h2>
          }>
            {item.items.map((obj,idx)=>(
              <List.Item
                key={idx}
                description={obj.description}
                prefix={
                  <Image
                    src={obj.avatar}
                    style={{ borderRadius: 2 }}
                    fit='cover'
                    width={40}
                    height={40}
                  />
                }
                extra={ <Stepper min={0} digits={0} /> }>
                {obj.name}
              </List.Item>
            ))}
          </List>
        ))}
        {/* <DemoBlock title='基础页脚'> */}
        <Footer content='没有更多了'></Footer>
      {/* </DemoBlock> */}
    </div>
  )
}
