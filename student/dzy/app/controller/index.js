const mysql = require('../mysql')				//加载数据库方法

let home = async function(req,res,next){		//主页路由
	let sql = 'SELECT * FROM web';
	let data = await mysql(sql);
	res.render('index.html',{
    	data:data
    })
}
let deleteID = async function(req,res,next){			//删除
	let sql = 'DELETE FROM web where id='+ parseInt(req.query.id);
	let data = await mysql(sql);
    console.log('id:'+req.query.id+'已经删除');
	res.redirect('/')									//重定向主页
}

let getChange = async function(req,res,next){			//编辑界面
	let sql = 'SELECT * FROM web WHERE id = ?';	
	let  sqlParams = req.query.id;
	let data = await mysql(sql,sqlParams);
    res.render('change.html',{
    	data:data[0]		
    })
}

let putChange = async function(req,res,next){			//提交修改
	let sql = 'UPDATE web SET name = ?,url = ?,country = ? WHERE Id = ?';//定义更改数据的模板
	let sqlParams = [req.body.name, req.body.url,req.body.country,req.body.id];		//定义更改的数据变量
	let data = await mysql(sql,sqlParams);
	console.log('修改成功成功') 
	res.redirect('/')									//重定向主页
}

let getAdd = function(req,res,next){					//增加
	res.render('add.html')
}

let putAdd = async function(req,res,next){				//提交增加
	let  sql = 'INSERT INTO web(Id,name,url,country) VALUES(0,?,?,?)';	//定义增加数据的模板，id为自加
	let  sqlParams = [req.body.name, req.body.url,req.body.country];				//增加的数据
	let data = await mysql(sql,sqlParams);
	console.log('添加成功')  
	res.redirect('/')
}

let putSearch = async function(req,res,next){			//提交查询
	let sql = 'SELECT * FROM web WHERE name = ?';				
	let sqlParams = req.body.name
	let data = await mysql(sql,sqlParams);
	console.log('查询成功')
    res.render('search.html',{
    	data:data
    })
}
module.exports.home = home;
module.exports.deleteID = deleteID;
module.exports.getChange = getChange;
module.exports.putChange = putChange;
module.exports.getAdd = getAdd;
module.exports.putAdd = putAdd;
module.exports.putSearch = putSearch;
