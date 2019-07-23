const method = require('./common')

/***********程序基本流程的设置************/

// 选择
let data1 = {
        p: 60,
        v: 100,
        u: 130,
        L: 30
    },
    data2 = {
        p: 70,
        v: 100,
        u: 130,
        L: 60
    },
    data3 = {
        p: 70,
        v: 100,
        u: 60,
        L: 60
    }

console.log(method.reno(data1))
console.log(method.reno(data2))
console.log(method.reno(data3))


// 循环
let i=1

// 循环打印
while(i<=50){
    console.log(i)
    i++
}

i=1

// 跳出某次循环
while(i<=50){
    if (i==11){
        i++
        continue
    }
    console.log(i)
    i++
}

i=1

// 终止循环
while(i<=50){
    if (i==11)break
    console.log(i)
    i++
}