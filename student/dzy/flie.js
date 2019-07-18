const mymethod = require('./middleware/mymethod');							//加载中间件

/**********
	文件读写是所有编程语言的基本操作，本练习的代码统一命名为：flie.js。本练习需要完成一下操作。
	
	读取指定的文件的数据。
	创建文件并写入数据
***********************************************/

let str = 'it is a test file too.',							//定义写入字符串
	file1 = './test.txt',
	file2 = './test1.txt';
mymethod.readFile(file1);									//读取文件数据
mymethod.writeFile(file2,str)								//创建并写入文件