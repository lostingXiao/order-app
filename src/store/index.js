import { createContext, useContext } from 'react'
import common from './modules/common'
import { makeAutoObservable } from 'mobx'
class RootStore {
  constructor(){
    makeAutoObservable(this)
    this.common = common
  }
}

const store = new RootStore() 
const context=createContext(store)
export const useStore = () => useContext(context)

export default store

