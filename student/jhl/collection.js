const method = require('./common')
/***********集合，哈希表**********/

// 集合
let list = new method.List([1,2,3,4])

list.iter(function (obj) {
    console.log(obj)
})

// 哈希表
let map = new Map([[1,'one'],['two',2],[3,'three'],['four',4]])
map.forEach(function (obj) {
    console.log(obj)
})