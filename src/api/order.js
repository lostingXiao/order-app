import request from '../utils/request'
import socket from '../utils/socket'
const http = 'app/order'

// 商品列表
export const goodsList=()=> {
  return request({
    url: http + '/goodsList',
    method: 'POST'
  })
}
// 创建订单
export const createOrder=()=> {
  return request({
    url: http + '/createOrder',
    method: 'POST'
  })
}
// 获取已下单订单列表
export const orderList=()=> {
  return request({
    url: http + '/orderList',
    method: 'POST'
  })
}






















