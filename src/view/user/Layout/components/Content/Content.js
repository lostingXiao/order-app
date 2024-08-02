import React from 'react'
import { Routes,Route } from 'react-router-dom'
import routers from '../../../../../router'

export default function Content() {
  return (
    <Routes>
    {routers.map(item => (
      <Route key={item.path} path={item.path} element={item.element} />
    ))}
    <Route path="*" element={<div>404</div>} />
  </Routes>

  )
}
