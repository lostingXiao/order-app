import { makeAutoObservable } from "mobx"
import { getStore, setStore, removeStore } from "../../utils/store"
const moduleName = 'common-'

class Common {
  token = getStore(`${moduleName}token`) ||''
  code = getStore(`${moduleName}code`) ||''

  constructor(){
    makeAutoObservable(this,{},{autoBind:true})
  }

  //设置用户基础信息 
  setSates(data,persistent){
    for(let key in data ){
      this[key]=data[key]
      persistent && setStore({name:moduleName+key,content:data[key]})
    }
  }
  clearSates(){
    const statesArr=[
      { name:'token',value:'' },
      { name:'code',value:'' },
    ]
    statesArr.forEach(item=>{
      this[item.name]=item.value
      removeStore(moduleName+item.name)
    })
  }
}

const common = new Common()

export default common


