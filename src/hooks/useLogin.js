

import { useNavigate } from 'react-router-dom'
import { login as loginApi } from '@/api/public'
import { useStore } from '@/store'

export const useLogin = () => {
  const navigate = useNavigate()
  const { common } = useStore()
  const { setSates, clearSates  } = common

  const login = async ({ password, username, code }) => {
    const res = await loginApi({ password, username, code })
    const { token } = res
    setSates({token},true)
    return true
  }

  const loginOut =  () => {
    clearSates()
  }
  return { login, loginOut }
}
