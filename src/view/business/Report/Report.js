import React from 'react'
import style from './Report.module.scss'
import Bottom from './components/Bottom/Bottom'
import StatisticalTable from './components/StatisticalTable/StatisticalTable'

export default function Report() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <StatisticalTable></StatisticalTable>
      </div>
      <div className={style.bottom}>
        <Bottom></Bottom>
      </div>
    </div>
  )
}
