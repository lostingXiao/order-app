import React from 'react'
import style from './StatisticalTable.module.scss'
import { CapsuleTabs,Grid,Button,List,Footer } from 'antd-mobile'

export default function StatisticalTable() {
  return (
    <div className={style.container}>
      <div className={`${style.card} ${style.turnover}`}>
         <CapsuleTabs>
          <CapsuleTabs.Tab title='今日' key='1' />
          <CapsuleTabs.Tab title='昨日' key='2' />
          <CapsuleTabs.Tab title='本周' key='3' />
          <CapsuleTabs.Tab title='本月' key='4' />
        </CapsuleTabs>
        <Grid columns={3} className={style.data}>
          <Grid.Item>
            <div className={style.title}>营业额</div>
            <Button color='danger' fill='none' size='large'> 100000  </Button>
          </Grid.Item>
          <Grid.Item>
            <div className={style.title}>订单数</div>
            <Button color='warning' fill='none' size='large'> 20  </Button>
          </Grid.Item>
          <Grid.Item>
            <div className={style.title}>商品数</div>
            <Button color='success' fill='none' size='large'> 40  </Button>
          </Grid.Item>
        </Grid>
      </div>
      <div className={`${style.card} ${style.rank}`}>
        <div className={style.header}>商品销售榜</div>
        <div className={style.list}>
          <List>
            {['肥肠','鸡爪','爆浆豆腐','羊肉串','牛肉串','啤酒','肥肠','鸡爪','爆浆豆腐','羊肉串','牛肉串','啤酒','肥肠','鸡爪','爆浆豆腐','羊肉串','牛肉串','啤酒'].map((item,index)=>(
              <List.Item prefix={index+1} extra={(index+1)*10}>{item}</List.Item>
            ))}
            <Footer className={style.footer} label='没有更多了'></Footer>
          </List>
        </div>
        {/*  */}
      </div>
    </div>
  )
}
