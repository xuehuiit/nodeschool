/*********variable.js*********/

//整数
Number.prototype.myAdd = function (val){
    if (parseInt(this)==this&&parseInt(val)==val){
        return this+val
    }
    return '不是整数'

}

Number.prototype.mySub = function (val){
    if (parseInt(this)==this&&parseInt(val)==val){
        return this-val
    }
    return '不是整数'
}

Number.prototype.myMul = function (val){
    if (parseInt(this)==this&&parseInt(val)==val){
        return this*val
    }
    return '不是整数'
}

Number.prototype.myDiv = function (val){
    if (parseInt(this)==this&&parseInt(val)==val){
        return this/val
    }
    return '不是整数'
}

// 小数
Number.prototype.myRound = function (count) {
    if (parseInt(this)==this){
        return '不是小数'
    }
    return Math.round(this*10**count)/10**count
}

Number.prototype.myKeep = function (count) {
    if (parseInt(this)==this){
        return '不是小数'
    }
    return Math.floor(this*10**count)/10**count
}


/***********control_flow************/

// 选择
function reno(data) {
    if (['L','p','u','v'].toString()==Object.keys(data).sort().toString()){
        let re = data['p']*data['v']*data['L']/data['u']
        if (re<2100){
            return '层流'
        }else if (re<4000){
            return '过渡状态'
        }else {
            return '暂态流'
        }
    }else{
        return '参数错误'
    }
}

/*********datetime**********/

// 转换为字符串
Date.prototype.format = function(fmt){
    let rule = {
        'YYYY': this.getFullYear(),
        'mm': this.getMonth()+1,
        'dd': this.getDate(),
        'HH': this.getHours(),
        'MM': this.getMinutes(),
        'SS': this.getSeconds(),
    }

    // 将fmt中相应的字符替换为日期
    for (let i in rule){
        fmt = fmt.replace(i,rule[i])
    }
    return fmt
}

String.prototype.toDate = function(format){
    let rule = {
        'YYYY': 0,
        'mm': -1,
        'dd': 1,
        'HH': 0,
        'MM': 0,
        'SS': 0,
    }

    // 将与字符串对应的日期添加到序列中
    for (let i in rule){
        rule[i] += Number(this.slice(format.search(i),format.search(i)+i.length))
    }
    return new Date(...Object.values(rule))
}


/***********collection***********/

let List = function (items){
    this.items = items
}
List.prototype = Array.prototype
List.prototype.iter = function (callback){
    this.items.forEach(callback)
}


module.exports = {
    reno,
    List
}