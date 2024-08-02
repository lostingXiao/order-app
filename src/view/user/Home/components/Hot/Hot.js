import React from 'react'
import style from './Hot.module.scss' 
import { Grid } from 'antd-mobile'

function ImgPre({item}){
  return (
    <Grid.Item className={style.item}>
      <img src={item.src} alt='热辣烧烤' />
      <div className={style.tips}>{item.tips}</div>
    </Grid.Item>
  )
}
function TipsPre({item}){
  return (
    <Grid.Item className={style.item}>
      <div className={style.tips}>{item.tips}</div>
      <img src={item.src} alt='热辣烧烤' />
    </Grid.Item>
  )
}
export default function Hot(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>人气选手</div>
      <Grid columns={2} className={style.content}>
        {props.data.map((item,index)=>{
          if(index<2){
            return ( <ImgPre item={item} /> )
          }else if(index>=2&&index<4){
            return ( <TipsPre item={item} />)
          }else{
            return ( <ImgPre item={item} /> )
          }
        })}
      </Grid>
    </div>
  )
}

