const express = require('express')
const router = require('./router.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.engine('html', require('express-art-template'));

//配置模板引擎渲染的目录，默认的是./views
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs')

//配置解析post请求体，一定要在挂载路由之前
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(router);


app.listen(3000, function () {
    console.log('running')
});