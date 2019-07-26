const express = require('express'),
    router = express.Router(),
    controller = require('./controller')

// 查询全部数据
router.get('/more/find',async function (req,res) {
    await controller.findAll(req,res)
})

// 增加数据
router.post('/create',async (req,res)=>{
    await controller.create(req,res)
})

// 删除数据
router.post('/delete',async (req,res)=>{
    await controller.destroy(req,res)
})

// 个人信息页面
router.route('/profile/:user_id')
    .get(async (req,res)=>{
        await controller.findOne(req,res)
    })

// 修改数据
router.post('/modify/:user_id',async (req,res)=>{
    await controller.update(req,res)
})

module.exports = router