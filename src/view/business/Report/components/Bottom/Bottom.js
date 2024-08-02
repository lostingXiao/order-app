import React from 'react'
import style from './Bottom.module.scss'
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const navigate=useNavigate()
  const goMake=()=>{
    navigate('/make')
  }
  return (
    <div className={style.container} onClick={goMake}>开工了</div>
  )
}
