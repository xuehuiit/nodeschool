require('./middleware/mymethod');							//加载中间件

let intA = new Number(124); 								//定义整数变量 iniA
let floatB = new Number(124.513651661);						//定义小数变量 floatB
console.log('%d+124=%d',intA,intA.intAdd(124));				//整数加减乘除
console.log('%d-62=%d',intA,intA.intSub(62));				
console.log('%d*2=%d',intA,intA.intMultiply(2));
console.log('%d/2=%d',intA,intA.intDivide(2));
console.log(floatB.floatRounding());						//小数 四舍五入 （默认不保留数字）
console.log(floatB.floatRounding(4));
console.log(floatB.floatCatch());							//小数小数点后几位截取（默认全部截取）
console.log(floatB.floatCatch(4));

let StringA = new String('good good study, day day up');	//定义字符串 StringA
console.log(StringA.getNewString(10,15));					//截取字符串里指定位置的字符
console.log(StringA.getIndex('study'));						//获取字符出现的第一次位置
console.log(StringA.getLength());							//获取字符串长度

let arrA = ['good','good','study','day','day','up'];		//定义数组 arrA
arrA.addNew(6,'!');											//指定位置添加元素
arrA.listAll();
arrA.delete(6);												//删除指定位置元素
arrA.listAll();