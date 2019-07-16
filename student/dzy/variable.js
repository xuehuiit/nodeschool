require('./middleware/mymethod');							//加载中间件

/**********
整数和小数
	完成整数和小数的定义，同时完成下面基本操作
	整数需要完成加、减、乘、除四则运算
	小数需要完成四舍五入的功能。
	小数需要完成笑小数点后面指定位数的截取

***********************************************/

let intA = 124; 								//定义整数变量 iniA
//let intA = new Number(124);					//intAl类型为 object
let floatB = 124.513651661;						//定义小数变量 floatB
//let floatB = new Number(124.513651661);	
console.log('intA=%d',intA);
console.log('floatB=%d',floatB);				
console.log('%d+124=%d',intA,intA.intAdd(124));				//整数加减乘除
console.log('%d-62=%d',intA,intA.intSub(62));				
console.log('%d*2=%d',intA,intA.intMultiply(2));
console.log('%d/2=%d',intA,intA.intDivide(2));
console.log(floatB.floatRounding());						//小数 四舍五入 （默认不保留数字）
console.log(floatB.floatRounding(4));
console.log(floatB.floatCatch());							//小数小数点后几位截取（默认全部截取）
console.log(floatB.floatCatch(4));

/***********
字符串
	字符串需要完成初始化和定义的功能，同时需要完成以下基本操作
	字符串截取，从第几个字符开始截取的第几个
	在字符串中寻找特定格式字符串第一次出现的位置
	获取字符串的长度
**********************************************/

let StringA = 'good good study, day day up';				//定义字符串 StringA
//let StringA = new String('good good study, day day up');
console.log(StringA.getNewString(10,15));					//截取字符串里指定位置的字符
console.log(StringA.getIndex('study'));						//获取字符出现的第一次位置
console.log(StringA.getLength());							//获取字符串长度

/***********
数组
	完成数组的定义，初始化等基本操作，同时完成下面基本操作。
	定义一个数组，遍历该数组
	在数组的开头、结尾或者指定位置添加元素
	删除数组中某个具体位置的元素
**********************************************/

let arrA = ['good','good','study','day','day','up'];		//定义数组 arrA
arrA.addNew(6,'!');											//指定位置添加元素
arrA.listAll();
arrA.delete(6);												//删除指定位置元素
arrA.listAll();
