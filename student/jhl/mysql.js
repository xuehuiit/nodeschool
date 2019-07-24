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

// ORM
class User extends Sequelize.Model{}
User.init({
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER
},)