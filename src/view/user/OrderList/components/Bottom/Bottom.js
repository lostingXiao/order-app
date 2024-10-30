import React from 'react'
import style from './Bottom.module.scss'
import { Grid } from 'antd-mobile'
import { useNavigate } from "react-router-dom";

export default function Bottom({amount}) {
  const navigate = useNavigate();
  const goCheckout=()=>{
    navigate('/statement');
  }
  const goOrder=()=>{
    navigate('/order');
  }

  return (
    <Grid columns={2} className={style.container}>
      <Grid.Item className={`${style.item} ${style.itemOutline}`} onClick={goCheckout}>
        ￥{ amount } 买单
      </Grid.Item>
      <Grid.Item className={`${style.item} ${style.itemSolid}`} onClick={goOrder}>
        还要吃
      </Grid.Item>
    </Grid>
  )
}
