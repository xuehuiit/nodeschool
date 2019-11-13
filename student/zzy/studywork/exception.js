/*
 *异常处理
 * @authur:zzy
 */

//完成基本的异常处理
function f() {
    try {
        var str = "旺达科技"
        console.log(str)
    }catch (err) {
        console.log("这是捕捉到的异常"+err)
    }finally {
        console.log("这是必须进行的操作")
    }
}
f()