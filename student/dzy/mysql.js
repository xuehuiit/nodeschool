//require('./middleware/mymethod');							//加载中间件

/**********
mysql数据的操作
	完成对mysql数据的操作
***********************************************/			//没用过mysql，平时用的MongoDB
const mysql      = require('mysql');						//加载mysql
let connection = mysql.createConnection({					//设置连接配置
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();

//'--------------------------查----------------------------'
let sql1 = 'SELECT * FROM web WHERE country = ?',				//定义两种查询方式
	sql2 = 'SELECT * FROM web';
let country = 'USA';

connection.query(sql2, function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------查找所有数据----------------------------');
       console.log(result);
});
connection.query(sql1,country, function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------查找country:USA----------------------------');
       console.log(result);  
});

//--------------------------增----------------------------
let  addSql = 'INSERT INTO web(Id,name,url,country) VALUES(0,?,?,?)';	//定义增加数据的模板，id为自加
let  addSqlParams = ['XIAOMI', 'https://www.mi.com/','CN'];				//增加的数据

connection.query(addSql,addSqlParams,function (err, result) {	
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------增加数据----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);  
});
//--------------------------删----------------------------
let delSql = 'DELETE FROM web where id=7';								//定义删除的变量

connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------删除id：7----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
});

//--------------------------改----------------------------
var modSql = 'UPDATE web SET name = ?,url = ?,country = ? WHERE Id = ?';//定义更改数据的模板
var modSqlParams = ['AMAZON', 'https://www.amazon.cn/','USA',6];		//定义更改的数据变量

connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------改id：6----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
});

connection.end();
