import request from '../utils/request'
const http = '/api/app/order'

// 用户编辑
export const goodsList=(data)=> {
  return request({
    url: http + '/goodsList',
    method: 'POST',
    data
  })
}



















