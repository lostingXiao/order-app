import React,{useState} from 'react'
import style from './Make.module.scss'
import { NavBar, NoticeBar, Toast,Popup,Grid } from 'antd-mobile'
import Order from './components/Order/Order'
import { AppstoreOutline } from 'antd-mobile-icons'
import { orderList,tableList } from '@/mock'
import { useNavigate } from "react-router-dom";


export default function Make() {
  const navigate=useNavigate()
  const [popupVisible, setPopupVisible] = useState(false)
  const back=()=>{
    navigate('/report')
  }
  const demoLongText='12222222dSDsaaDassssssssssssssssssssssssssssssssssssssssssssssssss'
  return (
    <div className={style.container}>
      <NavBar className={style.nav} onBack={back} right={<AppstoreOutline fontSize={24} onClick={()=>setPopupVisible(true)} />}>订单制作</NavBar>
      <NoticeBar className={style.notice} content={demoLongText} color='alert' />
      <div className={style.content}>
        <Order data={orderList}></Order>
      </div>
      <Popup 
        visible={popupVisible} 
        onMaskClick={()=>setPopupVisible(false)}
        position='right'
        bodyStyle={{ width: '70vw',padding: '20px' }}>
        <Grid columns={3} gap={12}>
          <Grid.Item span={3} style={{ color: 'var(--adm-color-primary)',fontSize:'var(--adm-font-size-10)',textAlign:'center',marginBottom:'20px' }}>堂食情况</Grid.Item>
          {tableList.map(item=>{
            const style={
              height:'80px',
              borderRadius:'10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color:item.state?'var(--adm-color-white)':'var(--adm-color-weak)',
              background:item.state?'var(--adm-color-primary)':'var(--adm-color-light)',
            }
            return (
              <Grid.Item key={item.tableId} style={style}>
                <span>{item.tableName}</span>
                <span>{item.state?`${item.personNum}人`:'空闲'}</span>
              </Grid.Item>
            )
          })}
        </Grid>
      </Popup>
    </div>
  )
}
