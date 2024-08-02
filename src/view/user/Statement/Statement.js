import React from 'react'
import style from './Statement.module.scss'
import { Result,Button } from 'antd-mobile'
import { SmileOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

export default function Statement() {
  const navigate = useNavigate();
  const goHome=()=>{
    navigate('/user/home')
  }
  return (
    <div className={style.container}>
      <Result
          icon={<SmileOutline />}
          status='success'
          title='￥ 520'
          description='兄弟姐们吃好哦，下次再来哈！'
        />
        <Button block className={style.btn} color='primary' size='large' onClick={goHome}>
          返回首页
        </Button>
    </div>
  )
}
