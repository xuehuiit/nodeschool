/***********文件读写***********/

const fs = require('fs')

// 读取数据
let read = fs.readFileSync('C:\\Users\\jhl\\Desktop\\read.txt',{encoding: 'utf8'})
console.log(read)

// 写入数据
fs.writeFileSync('C:\\Users\\jhl\\Desktop\\create.txt',read)