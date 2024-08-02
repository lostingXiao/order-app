const lorem=[
  {
    key:'111',
    typeName:'第1种',
    items:()=>{
      return Array(20).fill({
        avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
      })
    }
  },
  {
    key:'222',
    typeName:'第2种',
    items:()=>{
      return Array(20).fill({
        avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
      })
    }
  },
  {
    key:'333',
    typeName:'第3种',
    items:()=>{
      return Array(20).fill({
        avatar: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
      })
    }
  },
  {
    key:'444',
    typeName:'第4种',
    items:()=>{
      return Array(20).fill({
        avatar: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        name: 'Novalee Spicer',
        description: 'Deserunt dolor ea eaque eos',
      })
    }
  }
]

const orderList={
  finish:[{
    state:0,//0:未完成，1：已完成，2：制作中
    id:'qwer3457',
    tableId:1,
    tableName:'第一桌',
    dishes:[
      {name:'牛肉',num:2,price:5.4,id:'nr'},
      {name:'鸡肉串',num:2,price:5.4,id:'jr'},
      {name:'土豆',num:13,price:5.4,id:'td'},
      {name:'爆浆豆腐',num:3,price:5.4,id:'bjtf'},
      {name:'韭菜',num:5,price:5.4,id:'jc'},
      {name:'茄子',num:48,price:5.4,id:'qz'},
      {name:'鸡脚',num:2,price:5.4,id:'jj'},
      {name:'翅尖',num:34,price:14.9,id:'cj'},
      {name:'猪脚',num:2,price:5.4,id:'zj'},
      {name:'玉米',num:2,price:5.4,id:'ym'},
    ]
  }],
  make:[
    {
      name:'牛肉',
      num:12,
      price:5.4,
      id:'nr',
      state:2,
      orderItems:[
        {id:'qqq111',tableId:2,tableName:'第二桌',num:3,state:2},
        {id:'www222',tableId:3,tableName:'第三桌',num:4,state:2},
        {id:'eee333',tableId:4,tableName:'第四桌',num:5,state:2},
        {id:'rrr444',tableId:5,tableName:'第五桌',num:8,state:2},
      ]
    },
    {
      name:'土豆',
      num:24,
      price:5.4,
      id:'td',
      state:2,
      orderItems:[
        {id:'qwer3457',tableId:1,tableName:'第一桌',num:2,state:2},
        {id:'qqq111',tableId:2,tableName:'第二桌',num:3,state:2},
        {id:'www222',tableId:3,tableName:'第三桌',num:4,state:2},
        {id:'eee333',tableId:4,tableName:'第四桌',num:5,state:2},
      ]
    },
    {
      name:'鸡肉串',
      num:18,
      price:5.4,
      id:'jr',
      state:2,
      orderItems:[
        {id:'qwer3457',tableId:1,tableName:'第一桌',num:2,state:2},
        {id:'qqq111',tableId:2,tableName:'第二桌',num:3,state:2},
        {id:'www222',tableId:3,tableName:'第三桌',num:4,state:2},
        {id:'eee333',tableId:4,tableName:'第四桌',num:5,state:2},
        {id:'rrr444',tableId:5,tableName:'第五桌',num:8,state:2},
        {id:'ttt6666',tableId:6,tableName:'第六桌',num:12,state:2},
      ]
    },
    {
      name:'爆浆豆腐',
      num:6,
      price:5.4,
      id:'bjtf',
      state:2,
      orderItems:[
        {id:'qwer3457',tableId:1,tableName:'第一桌',num:2,state:2},
        {id:'eee333',tableId:4,tableName:'第四桌',num:5,state:2},
        {id:'rrr444',tableId:5,tableName:'第五桌',num:8,state:2},
      ]
    },
    {
      name:'韭菜',
      num:34,
      price:5.4,
      id:'jc',
      state:2,
      orderItems:[
        {id:'qwer3457',tableId:1,tableName:'第一桌',num:2,state:2},
        {id:'qqq111',tableId:2,tableName:'第二桌',num:3,state:2},
        {id:'www222',tableId:3,tableName:'第三桌',num:4,state:2},
        {id:'eee333',tableId:4,tableName:'第四桌',num:5,state:2},
        {id:'rrr444',tableId:5,tableName:'第五桌',num:8,state:2},
        {id:'yyy666',tableId:5,tableName:'第六桌',num:8,state:2},
        {id:'uuu777',tableId:5,tableName:'第七桌',num:8,state:2},
      ]
    },
  ],
  new:[
    {
      state:0,//0:未完成，1：已完成，2：制作中
      id:'asdfa23232323',
      tableId:1,
      tableName:'第一桌',
      dishes:[
        {name:'牛肉',num:2,price:5.4,id:'nr'},
        {name:'鸡肉串',num:2,price:5.4,id:'jr'},
        {name:'土豆',num:13,price:5.4,id:'td'},
        {name:'爆浆豆腐',num:3,price:5.4,id:'bjtf'},
        {name:'韭菜',num:5,price:5.4,id:'jc'},
        {name:'茄子',num:48,price:5.4,id:'qz'},
        {name:'鸡脚',num:2,price:5.4,id:'jj'},
        {name:'翅尖',num:34,price:14.9,id:'cj'},
        {name:'猪脚',num:2,price:5.4,id:'zj'},
        {name:'玉米',num:2,price:5.4,id:'ym'},
      ]
    },
    {
      state:0,//0:未完成，1：已完成，2：制作中
      id:'asdfa24545454453',
      tableId:1,
      tableName:'第一桌',
      dishes:[
        {name:'牛肉',num:2,price:5.4,id:'nr'},
        {name:'鸡肉串',num:2,price:5.4,id:'jr'},
        {name:'土豆',num:13,price:5.4,id:'td'},
        {name:'爆浆豆腐',num:3,price:5.4,id:'bjtf'},
        {name:'韭菜',num:5,price:5.4,id:'jc'},
        {name:'茄子',num:48,price:5.4,id:'qz'},
        {name:'鸡脚',num:2,price:5.4,id:'jj'},
        {name:'翅尖',num:34,price:14.9,id:'cj'},
        {name:'猪脚',num:2,price:5.4,id:'zj'},
        {name:'玉米',num:2,price:5.4,id:'ym'},
      ]
    }
  ]
}

const tableList=[
  {tableId:1,tableName:'第一桌',state:0,personNum:4},
  {tableId:2,tableName:'第二桌',state:1,personNum:4},
  {tableId:3,tableName:'第三桌',state:0,personNum:5},
  {tableId:4,tableName:'第四桌',state:1,personNum:6},
  {tableId:5,tableName:'第五桌',state:1,personNum:2},
  {tableId:6,tableName:'第六桌',state:1,personNum:3},
  {tableId:7,tableName:'第七桌',state:1,personNum:6},
  {tableId:8,tableName:'第八桌',state:0,personNum:5}
]



export {
  lorem,
  orderList,
  tableList
}