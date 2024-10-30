import request from '../utils/request'
const http = 'public/app'

// 登录
export const login=(data)=> {
  return request({
    url: http + '/login',
    method: 'POST',
    data
  })
}
