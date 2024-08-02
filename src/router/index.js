
import { createHashRouter, Navigate } from 'react-router-dom'
import User from '../view/user/Layout/Layout'
import Home from '../view/user/Home/Home'
import OrderList from '../view/user/OrderList/OrderList'
import Order from '../view/user/Order/Order'
import Statement from '../view/user/Statement/Statement'
import Login from '../view/business/Login/Login'
import Make from '../view/business/Make/Make'
import Report from '../view/business/Report/Report'

const router = createHashRouter([
  {
    path: '/user',
    element: <User/>,
    children: [
      {
        path: 'home',
        title:'首页',
        element: <Home/>
      },
      {
        path: 'orderList',
        title:'订单',
        element: <OrderList/>
      },
    ]
  },
  {
    path: 'order',
    title:'点餐',
    element: <Order/>
  },
  {
    path: 'statement',
    title:'点餐',
    element: <Statement/>
  },
  {
    path: 'login',
    title:'商家登录',
    element: <Login/>
  },
  {
    path: 'make',
    title:'订单制作',
    element: <Make/>
  },
  {
    path: 'report',
    title:'订单制作',
    element: <Report/>
  },
  {
    path: '/',
    element: <Navigate to="/order"/>
  }

  
])

export default router