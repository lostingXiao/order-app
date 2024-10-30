import { io } from 'socket.io-client'
import { Toast } from 'antd-mobile'
import store from '../store'
import { getHashParams } from './index'

// const { setSates } = store.common
const socketURL=process.env.REACT_APP_SOCKET_URL
const params=getHashParams()

// const socket = io(socketURL,{autoConnect: false})

// // 监听连接成功事件
// socket.on('connect', () => {
//   console.log('Connected to Socket.IO server')
// });

// // 监听连接错误事件
// socket.on('connect_error', (error) => {
//   console.error('Connection error:', error)
//   Toast.show({ icon: 'fail', content: error })
// });

// // 监听连接超时事件
// socket.on('connect_timeout', (timeout) => {
//   console.error('Connection timeout:', timeout)
//   Toast.show({ icon: 'fail', content: '链接超时' })
// });

// // 监听通用错误事件
// socket.on('error', (error) => {
//   console.error('Error:', error);
//   Toast.show({ icon: 'fail', content: error })
// });

// // 监听连接断开事件
// socket.on('disconnect', (reason) => {
//   console.warn('Disconnected from Socket.IO server. Reason:', reason)
// })

const socketNsp = (namespace) => {
  const socket = io(socketURL+namespace,{ 
    autoConnect: false,
    auth: {
      code: params.code ? params.code : store.common.code || ''
    }
  })
  socket.on('connect', () => {
    console.log (namespace+' Connected to Socket.IO server')
  })
  socket.on('disconnect', () => {
    console.log (namespace+' disconnect to Socket.IO server')
  })
  // // 监听连接错误事件
  socket.on('connect_error', (error) => {
    Toast.show('连接失败，请稍后重试')
    socket.disconnect()
  })
  return socket
}

export const emit = (server,name,data) => {
  Toast.show({ icon: 'loading', duration: 0, maskClickable:false})
  if(!server.connected) server.connect()
  return new Promise((resolve,reject)=>{
    try {
      server.emit(name, data, res => {
        Toast.clear()
        resolve(res)
      })
    } catch (error) {
      reject(error)
    }
  }) 
}

export const on = (server,name,callback) => {
  if(!server.connected) server.connect()
  return server.on(name, (res) => {
    console.log(name)
    console.log(res)
    callback && callback(res)
  })
}

const service = (namespace)=> {
  return socketNsp(namespace)
} 

export default service