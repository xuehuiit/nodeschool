/*
 * 程序基本流程的设置
 * @authur:zzy
 */

//选择
function selector(ρ,μ,L,v) {
    if(!ρ||!μ||!L||!v){
        console.log("参数错误")
        return
    }
    const Re = ρ*v*L/μ;
    if(Re<2100) {
        console.log("层流");
    }else if(Re>=2100&&Re<=4000){
        console.log("过度状态");
    }else if(Re>4000){
        console.log("暂态流")
    }
}

selector(50000,100,1,1)

//循环
function loop() {
    for(var i = 0;i <= 50;i++){
        //循环打印0到50
        console.log(i);
    }
    for(var i = 0;i <= 50;i++){
        //如果为1，跳出该次循环
        if(i === 1){
            continue;
        }
        console.log(i)
    }
    for(var i = 0;i <= 50;i++){
         //如果为20，结束循环
        if(i === 20){
            break;
        }
        console.log(i)
    }
}
loop()