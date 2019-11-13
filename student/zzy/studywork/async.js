/*
 *异常处理
 * @authur:zzy
 */

//基于promise框架的异步处理方式
function f() {
    var p = new Promise((resolve, reject) => {
        try {
            throw new Error("异常发生了")
        } catch (err) {
            setTimeout(() => {
                reject(err)
            }, 0)
        }
    })
    p.then(() => {
        console.log("reslove")
    }, (err) => {
        console.log(err)
    })
}

//基于await的异步处理方式

async function f2() {
    try {
        await Promise.reject("出错了")
    }catch (e) {
        console.log(e)
    }
    return await Promise.resolve("旺链科技")
}

f2().then(r=>{
    console.log(r)
})