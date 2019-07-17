const mymethod = require('./middleware/mymethod');							//加载中间件

/**********
日期和时间的处理
	日期和时间在所有编程语言中都是特殊的存在，node.js 也不例外，因此需要专门熟悉如何通过node.js处理日期和时间，

	日期和时间需要完成以下操作。
		获取当前的系统时间
		将系统直接转化成指定格式的字符串
		将指定格式的字符串转化系统时间
*****************************************/
let time = new Date();										//获取当前系统时间
let time1 = new Date().format("yyyy-MM-dd");				//转换为指定的格式字符串
let time2 = new Date().format("yyyy-MM-dd hh:mm:ss");

console.log(time);
console.log(time1);
console.log(time2);

console.log(mymethod.setTime('2019-07-17 12:12:14','yyyy-MM-dd hh:mm:ss'));		//将指定的格式字符串转化为系统时间，
console.log(mymethod.setTime('07-17 12:12','MM-dd hh:mm'));						//如果为空则默认为 0；
console.log(mymethod.setTime('12:12:14','hh:mm:ss'));
