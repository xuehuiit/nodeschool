const method = require('./common')

/***********集合，哈希表**********/

// 集合
let list = new method.List([1,2,3,4])
console.log(list)
console.log(Array.prototype.constructor)
for (let i of list){
    console.log(i)
}

list.forEach(function (obj) {
    console.log(obj)
})
console.log(list)