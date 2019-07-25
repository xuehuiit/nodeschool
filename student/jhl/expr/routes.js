const express = require('express'),
    router = express.Router(),
    controller = require('./controller')

router.route('/one/:user_id')
    .get(async (req,res)=>{
        console.log(req.params)
        await controller.findOne(req,res)
    })

router.post('/create',async (req,res)=>{
    await controller.create(req,res)
})

router.get('/more/find',async function (req,res) {
    await controller.findAll(req,res)
})

module.exports = router