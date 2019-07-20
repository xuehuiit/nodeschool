const mymethod = require('./middleware/mymethod');							//加载中间件
/**********
异步处理是node.js 核心内容，如果异步处理流程搞不清楚就无法熟练度驾驭node.js。
目前node.js最常用的异步处理框架是promise。同时还有 co 已经 async await等方式，
我们统一使用 async await。因此本练习需要完成一下任务

	基于promise框架的异步处理方式
	基于await的异步处理方式
***********************************************/

const fs = require('fs')

/**************Promise******************/

new Promise ((resolve,reject)=>{								//创建Promise 对象
	fs.readFile('./test1.txt',function(err,data){						//异步读取文件	
		if(err){
			console.log(err);
			reject(err);								//错误返回reject
		}
		resolve(data.toString());							//成功返回data
	})
}).then((value)=>{
	console.log('------Promise----------');
	console.log(value);									//接受异步data数据，并显示
	return new Promise(function(resolve,reject){						//返回新的Promise对象
		setTimeout(()=>{
			resolve('Hi')
		},1000)
	}) 
}).then((value)=>{
	console.log(value);									//接受异步数据
	console.log('------await----------');
	myawait('./test1.txt','Hi');								//然后开始启用 async部分
})


/**************await******************/
async function myawait (file,str){
	let data = await mymethod.asyncReadFile(file);
	
	let string = await mymethod.sayHi(str);
	
};
