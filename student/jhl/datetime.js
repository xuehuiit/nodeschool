require('./common')

/***********日期和时间的处理**********/

// 获取当前系统时间
const now = new Date()
console.log('当前时间',now)

// 将系统时间转化成指定格式的字符串
console.log(now.format('YYYY-mm-dd'))
console.log(now.format('YYYY-mm-dd HH:MM:SS'))
console.log(now.toLocaleString())

// 将指定的字符串转化为系统时间
console.log('2019-03-04 12:16:34'.toDate('YYYY-mm-dd HH:MM:SS'))
