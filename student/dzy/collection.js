const mymethod = require('./middleware/mymethod');					//加载中间件

/**********
集合，哈希表（MAP）
	node.js 提供了list和map相关的数据类型。
	
	定义一个对象的集合（List）并且编列这个对象的集合
	定义一个Hash(Map)结构并且遍历
***********************************************/



let arr = new ArrayList([3, 6, 5, 'xyz', 'foo', 'xyz']);				//ArrayList原型 已经在中间件里定义完成，
 											//直接new进行创建 arr
arr.listAll();										//调用原型方法中的listAll来遍历集合，通过控制台显示

let map0 = new Map([[1,'one'],[2,'two'],[3,'three'],[4,'four']]);			//定义一个hash(Map)数据结构

map0.forEach(function(value,key,map){							//遍历 map0
	console.log('key:%d  value:%s',key,value);
})
