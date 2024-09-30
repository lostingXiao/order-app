import request from '../utils/request'
const http = '/api/app/order'

// 用户编辑
export const goodsList=()=> {
  return request({
    url: http + '/goodsList',
    method: 'POST'
  })
}

export const test=()=> {
  return request({
    url: http + '/test',
    method: 'GET'
  })
}


















