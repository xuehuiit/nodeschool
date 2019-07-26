const User = require('./db')

// 查询全部并返回页面
async function findAll(req,res){
    await User.findAll()
        .then(value => {
            let users = []
            for (let user of value){
                users.push(user.dataValues)
            }
            res.render('main.html',{users: users})
        })
}

// 查询个人，返回个人信息页面
async function findOne(req,res){
    await User.findOne({
        where: {
            id: Number(req.params.user_id)
        }
    })
        .then(value => {
            res.render('profile.html',{user:value.dataValues})
        })
}

// 增加数据并转至主页面
async function create(req,res) {
    console.log(req.body)
    await User.create(req.body)
    await res.redirect('/users/more/find')
}

// 删除数据并转至主页面
async function destroy(req,res) {
    await User.destroy({
        where: req.body
    })
    await res.redirect('/users/more/find')
}

// 更新数据并转至主页面
async function update(req,res){
    await User.update(req.body,{
        where: {
            id: req.params.user_id
        }
    })
        .then(value => {
            res.redirect('/users/more/find')
        })
}

module.exports = {
    findAll,
    findOne,
    create,
    destroy,
    update
}