const Sequelize = require('sequelize')

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

module.exports = User
