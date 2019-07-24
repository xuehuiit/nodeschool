/************异步处理************/

// Promise
new Promise((resolve, reject) => {
    let v = '成功'
    if (v=='成功'){
        resolve(v)
    } else {
        reject('失败')
    }
})
.then(value => {
    console.log(value)
})
.catch(err=>{
    console.log(err)
})

// await
async function asy1() {
    console.log('异步一号')
}

async function asy() {
    await asy1()
    console.log('我也完事儿了')
}

asy()