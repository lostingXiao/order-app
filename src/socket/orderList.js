import socket, { emit as socketEmit, on as socketOn } from '../utils/socket'

// 点单长连接
const server = socket('/orderList')

// ------------------------------------------emit------------------------------------------
// 订单取消
export const orderCancel = (data) => socketEmit(server,'orderCancel',data)
// 订单详情取消
export const orderDetailCancel = (data) => socketEmit(server,'orderDetailCancel',data)

// ------------------------------------------on------------------------------------------
// 菜品订单状态改变
export const orderStatusChange = callback => socketOn(server,'orderStatusChange',callback)

export default server




















