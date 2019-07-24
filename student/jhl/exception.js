/**********异常处理************/

// try
try {
    throw new Error('一个错误')
}catch (e) {
    console.log('捕捉错误：',e)
}

// listen
// process.on("uncaughtException", error => {
//     console.log('uncaughtException:',error)
// })
//
// function makE() {
//     throw new Error('一个错误')
// }
// makE()
// promise
new Promise((resolve, reject) => {
    throw new Error('错误一号')
})
    .catch(e=>console.log('catch: ',e))

// promise本地捕捉
new Promise((resolve, reject) => {
    resolve()
}).then(value => {
    return new Promise((ful,rej)=>{
        throw new Error('错误一号')
    }).catch(e=>{
        console.log('本地捕捉：',e)
    })
})

// async/await
async function asErr(){
    throw new Error('async error')
}
async function foo() {
    try {
        await asErr()
    }catch (e) {
        console.log('async: ',e)
    }
}

foo()
setTimeout(function (){},1000)