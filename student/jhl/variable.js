require('./common')

/*******整数和小数*******/

// 整数
let i1 = 15,
    i2=89,
    i3=66

console.log(`加:${i1.myAdd(i2)}`)
console.log(`减:${i1.mySub(i2)}`)
console.log(`乘:${i1.myMul(i2)}`)
console.log(`除:${i1.myDiv(i2)}`)

// 小数
let x = Math.PI
console.log(`四舍五入：${x.myRound(4)}`)
console.log(`截取：${x.myKeep(4)}`)


/**********字符串**********/

let str = 'qwertyuiopasdfghjklzxcvbnm'
console.log(`从第二个字开始，截取到第7个： ${str.slice(1,7)}`)
console.log(`/t[a-z]+/: ${str.search(/t[a-z]+/)}`)
console.log('长度：',str.length)


/********数组*********/

let arr = [2,3,4,'2kf','oej',[3,4]]
arr.forEach(obj=>{
    console.log(obj)
})
console.log('开头加个"123"',
    (()=>{
        arr.unshift('123')
        return arr
})())

console.log('结尾加个"345"',(()=>{
    arr.push('345')
    return arr
})())

console.log('第三个位置上加个"789"', (()=>{
    arr.splice(2,0,'789')
    return arr
})())

console.log('删除第三个位置的元素',(()=>{
    arr.splice(2,1)
    return arr
})())
