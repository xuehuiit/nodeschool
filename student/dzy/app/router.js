const express = require('express');
const router = express.Router();
const mysql      = require('mysql');						//加载mysql
let connection = mysql.createConnection({					//设置连接配置
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});

connection.connect();



router.get('/', function (req, res) {
	let sql = 'SELECT * FROM web';
    connection.query(sql, function (err, result) {
    	let data = new Array();
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        for(let i =0;i<result.length;i++){
        	data[i] = new Company();
        	for(index in result[i]){
        		data[i][index]=result[i][index]
        	}
        };
        //data.forEach(function(item){
        //	console.log(item.id)
        //})
        res.render('index.html',{
        	data:data
        })
	});
});

router.get('/delete',function(req,res){
	console.log(req.query.id)
	let delSql = 'DELETE FROM web where id='+ parseInt(req.query.id);
	console.log(delSql)
	connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
       console.log('id已经删除');
       
	res.redirect('/')
	});
});
router.get('/change',function(req,res){
	let sql = 'SELECT * FROM web WHERE id = ?';			
	console.log(req.query.id);
    connection.query(sql, req.query.id,function (err, result) {
    	let data = new Array();
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        for(let i =0;i<result.length;i++){
        	data[i] = new Company();
        	for(index in result[i]){
        		data[i][index]=result[i][index]
        	}
        };
        //data.forEach(function(item){
        //	console.log(item.id)
        //})
        res.render('change.html',{
        	data:data[0]
        })
	});
	
});
router.post('/change',function(req,res){
	console.log(req.body);
	var modSql = 'UPDATE web SET name = ?,url = ?,country = ? WHERE Id = ?';//定义更改数据的模板
	var modSqlParams = [req.body.name, req.body.url,req.body.country,req.body.id];		//定义更改的数据变量
	
	connection.query(modSql,modSqlParams,function (err, result) {
	   if(err){
	         console.log('[UPDATE ERROR] - ',err.message);
	         return;
	   }
	   console.log('修改成功成功') 
	   res.redirect('/')
	});
});
router.get('/add',function(req,res){
	res.render('add.html')
})
router.post('/add',function(req,res){
	let  addSql = 'INSERT INTO web(Id,name,url,country) VALUES(0,?,?,?)';	//定义增加数据的模板，id为自加
	let  addSqlParams = [req.body.name, req.body.url,req.body.country];				//增加的数据

	connection.query(addSql,addSqlParams,function (err, result) {	
	        if(err){
	         console.log('[INSERT ERROR] - ',err.message);
	         return;
	        }      
	        console.log('添加成功')  
	 	res.redirect('/')
	});
})
router.post('/search',function(req,res){
	let sql1 = 'SELECT * FROM web WHERE name = ?';				//定义两种查询方式
	connection.query(sql1,req.body.name, function (err, result) {
		let data = new Array();
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        for(let i =0;i<result.length;i++){
        	data[i] = new Company();
        	for(index in result[i]){
        		data[i][index]=result[i][index]
        	}
        };  
        res.render('search.html',{
        	data:data
        })
	});
})

module.exports = router;

function Company(){
	this.id = null;
	this.name = null;
	this.url = null;
	this.country = null;
}