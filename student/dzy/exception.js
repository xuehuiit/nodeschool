
/**********
异常处理
	异常处理是现代编程语言的基本特性，在本练习中完成异常的基本处理。
***********************************************/
const fs = require('fs');							//加载fs文件模块
let syncError = function (){		
	throw new Error('Sync Error')						//抛出一个错误
};

setInterval(function(){
	console.log('running...')						//设置一个定时器，表示程序没有崩溃
},1000);


/***************try catch******************/

try {										//在程序中可以对部分代码使用try catch来
    syncError()									//捕获错误，不会影响整个程序的进行
} catch (e) {
    console.log('---------try catch-----------------')
    console.log(e)
}

/****************node异步回调函数中的错误*****************/

fs.readFile('./test2.txt',function(err,data){					//异步函数函数回调函数第一个参数为error对象
	if(err){
		console.log('----------node回调函数中的错误----------------');	//error为null则没有错误，否则打印出来
		console.log(err);
	}
})

/****************事件监听error*****************/

let events = require("events");							//加载event事件模块									
let emitter = new events.EventEmitter();					//创建一个事件监听对象	

emitter.addListener("error", function (e) {					//对error事件添加监听器									
    console.log(e)								//处理异常
});
emitter.emit("error", new Error('出错啦'));				//发射error事件

/****************Promise的error*****************/


new Promise((resolve, reject) => {
    syncError()									//primise里抛出错误
}).then(() => {
   })
   .catch((e) => {
       console.log('-----------Promise里的error---------------');//catch 捕获错误
       console.log(e);
   })
