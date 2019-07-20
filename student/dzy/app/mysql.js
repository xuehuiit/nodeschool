const mysql      = require('mysql');						//加载mysql
let connection = mysql.createConnection({					//设置连接配置
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});

connection.connect();									//连接数据库


let mysql1 = function (sql,SqlParams){								//创建mysql模块，传入操作参数
	return new Promise((res,rej)=>{
 		connection.query(sql, SqlParams,function (err, result) {
    		let data = new Array();									//定义data对象
    	    if(err){
    	      console.log('[SELECT ERROR] - ',err.message);
    	      rej(err);
    	    }
    	    for(let i =0;i<result.length;i++){		
    	    	data[i] = new Company();							//定义data子元素都为对象
    	    	for(index in result[i]){
    	    		data[i][index]=result[i][index]					//将结果传给data里
    	    	}
    	    };
    	    res(data)												//异步返回data数据
		});	
	})
}
module.exports = mysql1;											//导出数据方法

function Company(){													//定义data子元素的原型对象
	this.id = null;
	this.name = null;
	this.url = null;
	this.country = null;
}
