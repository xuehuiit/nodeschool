var express = require('express');
var router = express.Router();
var db = require("./db")

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

//load
router.get('/', function (req, res, next) {
    db.query('select * from student', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('student', {title: '学生信息', datas: []});
        } else {
            res.render('student', {title: '学生信息', datas: rows});
        }
    })
});
//添加界面跳转
router.get('/add',function(req,res){
    res.render('add')
})
//add
router.post('/add',function(req,res,next){
    db.query("insert into student(name,age,context)values('"+req.body.name+"',"+req.body.age+",'"+req.body.context+"')",function(err,rows){
        if(err){
            res.end("新增失败"+err)
        }else{
            res.redirect('/student')
        }
    })
})
//toupdate
router.get('/toUpdate/:id',function(req,res){
    console.log(req.params.id)
    db.query("select * from student where id="+req.params.id,function(err,rows){
        if(err){
            res.end("界面跳转失败"+err)
        }else{
            res.render('update',{datas:rows})
        }
    })
})
//update
router.post('/update',function(req,res,next){
    db.query("update student set name='"+req.body.name+"',age='"+req.body.age+"',context='"+req.body.context+"'where id="+req.body.id,function(err,rows){
        if(err){
            res.end("修改失败"+err)
        }else{
            res.redirect('/student')
        }
    })
})

//delete
router.get('/delete/:id',function(req,res,next){
    db.query("delete from student where id="+req.params.id,function(err,rows){
        if(err){
            res.end("删除失败"+err)
        }else{
            res.redirect('/student')
        }
    })
})
module.exports = router;
