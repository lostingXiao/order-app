import React from 'react'
import style from './Link.module.scss'
import { Grid } from 'antd-mobile'

export default function Link({data}) {
  return (
    <Grid columns={4} className={style.content}>
      {data.map(item=>(
        <Grid.Item className={style.item}>
          <img src={item.src} alt='热辣烧烤' />
          <span>{item.name}</span>
        </Grid.Item>
      ))}
    </Grid>
  )
}
