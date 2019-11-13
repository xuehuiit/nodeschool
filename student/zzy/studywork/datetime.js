/*
 *日期和时间的处理
 * @authur:zzy
 */

Date.prototype.format = function (r) {
    var options = {
        //月份
        "M+" : this.getMonth()+1,
        //日
        "d+" : this.getDate(),
        //小时
        "h+" : this.getHours(),
        //分钟
        "m+" : this.getMinutes(),
        //秒
        "s+" : this.getSeconds(),
        //毫秒
        "S+" :this.getMilliseconds()
    };
    //y+:匹配1到多个Y,（y+）y+匹配到的内容可能通过分组取到,这里通过第一个分组取到
    if(/(y+)/.test(r)){
        //RegExp.$1指是与正则匹配的第一个子匹配字符串（以括号为标志）
       r = r.replace(RegExp.$1,(this.getFullYear()+"").substring(4-RegExp.$1.length))
    }
    for(var i in options){
        if(new RegExp("("+i+")").test(r)){
            r = r.replace(RegExp.$1,(RegExp.$1.length===1)?(options[i]):(("00"+options[i]).substr((""+options[i]).length)))
        }
    }
    return r
}
function timeOperation() {
    //获取系统时间
    var date = Date.now();
    console.log(date);
    //将系统时间转化为yyyy-MM-dd E HH:mm:ss
    date = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(date)
    //将指定格式字符串时间转换
    var timpstamp = new Date(date).getTime()
    console.log(timpstamp)
}
timeOperation()
