import React, { useEffect, useState } from 'react'
import style from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import Bottom from './components/Bottom/Bottom'

function Layout() {


  console.log('Layout')
  console.log('-------------')


  const handleEndConcert = () => {
    console.log('Stop this');
  }

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener('beforeunload', handleEndConcert);
     return () => {
      // hit endpoint to end show
      window.removeEventListener('beforeunload', handleEndConcert);
      //handleEndConcert();
    }
  }, []);

  return (
    <div className={style.layout}>
      <div className={style.content}>
        <Outlet />
      </div>
      <div className={style.bottom}>
        <Bottom />
      </div>
    </div>
  )
}

export default Layout;