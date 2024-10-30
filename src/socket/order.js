import socket, { emit as socketEmit, on as socketOn } from '../utils/socket'

// 点单长连接
const server = socket('/order')

//用户主动点单方法
export const emit = (name,data,callback)=> socketEmit(server,name,data,callback)
export const on = (name,callback)=> socketOn(server,name,callback)
// ------------------------------------------emit------------------------------------------
//添加菜品
export const orderAdd = (data) => socketEmit(server,'orderAdd',data)
// 减少菜品
export const orderSub = (data) => socketEmit(server,'orderSub',data)

// ------------------------------------------on------------------------------------------
// 菜品改变
export const orderChange = callback => socketOn(server,'orderChange',callback)

export default server




















