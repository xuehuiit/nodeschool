/*
 *文件读写
 * @authur:zzy
 */
//创建文件并写入数据
const fs = require("fs")

fs.writeFile("test.txt","旺达科技",function (err) {
    if(err){
        console.log("文件写入失败")
    }else{
        console.log("文件写入成功")
    }
})

fs.readFile('test.txt',function (err,data) {
    if(err){
        console.log("文件读取错误"+err)
    }else{
        console.log("文件读取成功！")
        console.log(data.toString())
    }
})