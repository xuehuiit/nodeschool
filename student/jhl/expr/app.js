const app = require('express')()
const routes = require('./routes')
const nunjucks = require('nunjucks')
const parser = require('body-parser')

nunjucks.configure('./views',{
    autoescape: true,
    express: app
})
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.all('/',(req,res)=>{
    console.log(req.method,req.url)
    res.send('Hello World!')
})

app.use('/users',routes)

app.listen(3000,()=>console.log(`app is listening at port 3000`))