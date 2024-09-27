import React from 'react'
import style from './style.module.scss'
import Banner from './components/Banner/Banner'
import Hot from './components/Hot/Hot'
import Link from './components/Link/Link';
import img1 from '@/static/images/0113d26061c71411013e87f44fdb13.webp'
import img2 from '@/static/images/012b906061c71111013fb11795797c.webp'
import img3 from '@/static/images/0153426061c71111013fb117fba1e4.webp'
import img4 from '@/static/images/016e2d6061c71011013e87f4361e20.webp'
import img5 from '@/static/images/0187406007e71a11013e3991ade980.webp'
import img6 from '@/static/images/0194b16007e71a11013f7928d304d8.webp'
import icon1 from '../../../static/svg/mendianjianjie.svg'
import icon2 from '../../../static/svg/shipin.svg'
import icon3 from '../../../static/svg/xiaofeijilu.svg'
import icon4 from '../../../static/svg/yipinzulin.svg'


const items=[
  {key:'1',name:'可乐',tips:'土豆片好吃得很',src:img1},
  {key:'2',name:'可乐2',tips:'牛鼻筋爽歪歪',src:img2},
  {key:'3',name:'牛肉串',tips:'掌中宝脆的很',src:img3},
  {key:'4',name:'烤肉串',tips:'鸡爪爪耙和的好',src:img4},
  {key:'5',name:'肥肠',tips:'牛板筋咬起耍',src:img5},
  {key:'6',name:'肥肠',tips:'牛肉串嫩得很',src:img6},
]

const linkItems=[
  {key:'1',name:'门店简介',src:icon1},
  {key:'2',name:'创业VLOG',src:icon2},
  {key:'3',name:'消费记录',src:icon3},
  {key:'4',name:'露营租赁',src:icon4},
]

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentBg}></div>
        <div className={style.contentMain}>
          <div className={style.banner}>
            <Banner data={items}></Banner>
          </div>
          <div className={style.hot}>
            <Hot data={items}></Hot>
          </div>
          <div className={style.link}>
            <Link data={linkItems}></Link>
          </div>
          <div className={style.link}>
            <Link data={linkItems}></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
