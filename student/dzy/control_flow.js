const mymethod = require('./middleware/mymethod');							//加载中间件

/**********
选择
	在选择操作部分完成以下操作。
	雷诺数的计算公式是（Re=ρvL/μ），ρ、μ为流体密度和动力粘性系数，v、L为流场的特征速度和特征长度。
	编写一个程序，接收一组数据并计算雷诺数。如果小于2100，则显示“层流”；在2100至4000之间，则显示“过渡状态”；
	大与4000则显示“暂态流”。
*****************************************/
let Data1 = {									//创建数据1,2,3,4.数据4中ρ为null，用来测试中间件函数的返回。
		ρ: 1,
		v: 45,
		l: 78,
		μ: 12,
	},
	Data2 = {
		ρ: 12,
		v: 45,
		l: 78,
		μ: 12,
	},
	Data3 = {
		ρ: 123,
		v: 45,
		l: 78,
		μ: 12,
	},
	Data4 = {
		ρ: null,
		v: 45,
		l: 78,
		μ: 12,
	};
mymethod.getReNumber(Data1,function(status){		//调用中间件的getReNumber函数，判断状态并返回给数据对象。
	Data1.status = status;
	console.log(status)
});
mymethod.getReNumber(Data2,function(status){
	Data2.status = status;
	console.log(status)
});
mymethod.getReNumber(Data3,function(status){
	Data3.status = status;
	console.log(status)
});
mymethod.getReNumber(Data4,function(status){
	Data4.status = status;
	console.log(status)
});

/**********
循环
	循环部分需要完成以下操作
	打印从1到50的自然数
	如何在循环中跳出某次循环
	如何终止某个循环
*****************************************/
mymethod.getRoundNumer(1,50);						//调用中间件函数getRoundNumber,函数参数有两个时循环显示start-end
mymethod.getRoundNumer(1,50,'jump',2);				//有四个参数时,第三个参数为命令，第四个参数为跳过或者关闭循环的索引
mymethod.getRoundNumer(1,50,'shutdown',10)

