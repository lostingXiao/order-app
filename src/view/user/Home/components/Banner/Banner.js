import React from 'react'
import style from './Banner.module.scss'
import { Swiper,Image } from 'antd-mobile'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']
const DATA_COUNT = 5

export default function Banner({data}) {
  return (
      <Swiper
          className={style.root}
          slideSize={60}
          trackOffset={20}
          stuckAtBoundary={false}
          total={20}
          indicator={false}
          defaultIndex={2}
        >
          {data.map(item=>(
            <Swiper.Item key={item.key}>
              <div className={style.scaleContent}>
                <Image className={style.img} src={item.src} fit='cover' />
              </div>
            </Swiper.Item>
          ))}
          {/* {index => (
            
          )} */}
        </Swiper>
  )
}
