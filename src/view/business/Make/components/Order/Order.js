import React,{useState,useEffect} from 'react'
import style from './Order.module.scss'
import { SideBar,Grid,Button,List } from 'antd-mobile'
import { BellOutline,ReceiptOutline } from 'antd-mobile-icons'

function OrderItem({item,disabled}){
  return (
    <List mode='card' header={`订单号 ${item.id}`}>
      {item.dishes.map(dish=>(
        <List.Item className={style.item} key={dish.id} disabled={disabled} extra={`x ${dish.num}`}>{dish.name} <ReceiptOutline /> {dish.price}</List.Item>
      ))}
    </List>
  )
}

function MakeItem({item}){
  return (
    <List mode='card' header={`${item.name} X ${item.num}`} >
      {item.orderItems.map(order=>(
        <List.Item className={style.item} key={order.id} extra={`x ${order.num}`} description={`订单号：${order.id}`}>{order.name} {order.tableName}</List.Item>
      ))}
      <div className={style.itemHanlde}>
        <Button size='mini' color='primary' shape='rounded' fill='outline'>  完成 </Button>
      </div>
    </List>
  )
}

export default function Order({data}) {
  const [activeKey, setActiveKey] = useState('make')
  const [list, setList] = useState(data.make)
  

  const sideBarChange=v=>{
    setActiveKey(v)
    console.log(data[v])
    setList(data[v])
  }

  return (
    <div className={style.contaier}>
      <SideBar className={style.side} activeKey={activeKey} onChange={sideBarChange}>
        <SideBar.Item key='finish' title='已完成' />
        <SideBar.Item key='make' title='制作中' />
        <SideBar.Item key='new' title='新订单' />
      </SideBar>
      <div className={style.main}>
        <div className={style.content}>
          {list.map( item =>{
            if(activeKey==='make') return (<MakeItem key={item.id} item={item} />)
            else return (<OrderItem key={item.id} item={item} disabled={activeKey==='finish'} />)
          })}
        </div>
        <Grid columns={3} className={style.bottom}>
          <Grid.Item span={2}>
            <div className={style.orderMsg}><BellOutline /> <span>30</span> {activeKey==='make'?'件':'单'}</div>
          </Grid.Item>
          <Grid.Item>
          <Button className={style.handle} block shape='rectangular' color='primary' disabled={activeKey==='finish'}>
            { activeKey==='make'?'全部完成':'制作订单' }
          </Button>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  )
}
