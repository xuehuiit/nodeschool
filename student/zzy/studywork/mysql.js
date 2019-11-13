const mysql = require('mysql')
//连接mysql
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456789',
    database : 'zzyDemo'
})
connection.connect();

//查询student表
var sql = 'select * from student'
connection.query(sql,function (err,res) {
    if(err){
        console.log(err)
        return false
    }else{
        console.log(res)
    }
})

//插入数据
var sql = 'insert into student(name,age,context)values(?,?,?)'
connection.query(sql,['赵权',19,'课代表'],function (err,res) {
    if(err){
        console.log(err)
    }else {
        console.log('插入成功！')
    }
})
//修改数据
var sql = 'update student set name = ? where id = ?'
connection.query(sql,['丁庄',1],function (err,res) {
    if(err){
        console.log(err)
    }else {
        console.log("修改成功")
    }
})

//删除数据

var sql = 'delete from student where id = ?'
connection.query(sql,1,function (err,res) {
    if(err){
        console.log(err)
    }else{
        console.log('删除成功')
    }
})