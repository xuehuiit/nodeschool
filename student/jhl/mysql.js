const Sequelize = require('sequelize')

// 连接数据库
const db = new Sequelize('xuehuiit','root','jhl233666',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
})

db.authenticate()
.then(value => {
    console.log('Connected')
})
.catch(e=>{
    console.error('Connection Failed',e)
})

// 定义表
const User = db.define('user',{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: Sequelize.INTEGER
},{
    timestamps: false,
    tableName: 'user'
})

// db.sync({force: true})

// 增加数据
async function create(data) {
    await User.create(data)
        .then(value => {
            console.log('Created:',value.name)
        })
        .catch(e=>{
            console.log('Fail to create user:',data)
            console.log(e)
        })
}

// create({
//     name: 'ddd',
//     password: 'jjj',
//     age: 11
// })

// 删除数据
async function destroy(query) {
    await User.destroy(query)
        .then(value => {
            console.log('Deleted:',value)
        })
        .catch(e=>{
            console.log('Fail to delete user :',query)
            console.log(e)
        })
}


// 修改数据
async function update(set,query) {
    await User.update(set,query)
        .then(value => {
            console.log('Updated :',query,'to',set)
        })
        .catch(e=>{
            console.log('Fail to update user :',query)
            console.log(e)
        })
}


// 查询数据
async function findOne(query) {
    await User.findOne(query)
        .then(value => {
            if (value){
                console.log('Found:',value.dataValues)
            }else {
                console.log('Cannot find user:',query)
            }
        })
        .catch(e=>{
            console.log('Fail to find one',query)
            console.log(e)
        })
}

async function findAll(attributes){
    await User.findAll({attributes:attributes})
        .then(value => {
            if (value){
                console.log('Found:')
                for (let val of value) {
                    console.log(val.dataValues)
                }
            } else {
                console.log('Cannot find users:',attributes)
            }
        })
        .catch(e=>{
            console.log('Fail to find ',e)
        })
}

// 执行测试
async function test(){
    await create({
        name: 'ddd',
        password: '456'
    })

    await create({
        name: 'jjj',
        password: '789'
    })

    await destroy({
        where: {
            name: 'ddd'
        }
    })
    //
    await update({
            age: 18
        },
        {
            where: {
                name: 'jhl'
            }
        })

    await findOne({
        where: {
            name: 'jhl'
        }
    })

    await findAll({
        where: {
            age: 'NULL'
        }
    })
}


test()
