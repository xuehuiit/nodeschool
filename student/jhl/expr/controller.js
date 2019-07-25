const User = require('./db')

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

async function findOne(req,res){
    await User.findOne({
        where: {
            id: Number(req.params.user_id)
        }
    })
        .then(value => {
            res.render('main.html',{users:value.dataValues})
        })
}

async function create(req,res) {
    console.log(req.body)
    await User.create(req.body)
    await findAll(req,res)
}

module.exports = {
    findAll,
    findOne,
    create
}