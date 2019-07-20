const express = require('express');
const router = express.Router();
const controller = require('./controller')    //加载控制器中间件

router.get('/', controller.home);             //主页

router.get('/delete',controller.deleteID);    //删除

router.get('/change',controller.getChange);   //编辑

router.post('/change',controller.putChange);  //提交编辑

router.get('/add',controller.getAdd)          //增加
router.post('/add',controller.putAdd)         //提交增加
router.post('/search',controller.putSearch)   //搜索

module.exports = router;
