/************ variable.js ******************************/

//整数和小数
Number.prototype.intAdd = function(value){
	if(parseInt(this) == this){
		return this + value;
	}else{
		return '不是整数';
	}
};
Number.prototype.intSub = function(value){
	if(parseInt(this) == this){
		return this - value;
	}else{
		return '不是整数';
	}
};
Number.prototype.intMultiply = function(value){
	if(parseInt(this) == this){
		return this * value;
	}else{
		return '不是整数';
	}
};
Number.prototype.intDivide = function(value){
	if(parseInt(this) == this){
		return this / value;
	}else{
		return '不是整数';
	}
};
Number.prototype.floatRounding = function(value){
	let number = new Number();
	if(parseInt(this) == this){
		return '不是小数'
	}else{
		let number;
		value?(number = Math.round(this * Math.pow(10,value))/(Math.pow(10,value))):(number = Math.round(this));
		return number;
	}
};
Number.prototype.floatCatch = function(value){
	let number = new Number();
	if(parseInt(this) == this){
		return '不是小数'
	}else{
		let number;
		value?(number = Math.floor(this * Math.pow(10,value))/(Math.pow(10,value))):(number = Math.floor(this));
		return number;
	}
};
String.prototype.getNewString = function(start, end){
	if(arguments.length == 0){
		return '请输入截取位置'
	}else if(arguments.length == 1){
		return this.slice(arguments[0])
	}else{
		return this.slice(arguments[0],arguments[1])
	}
};
String.prototype.getIndex = function(str){
	return this.indexOf(str)
};
String.prototype.getLength = function(str){
	return this.length
};
Array.prototype.listAll = function(){
	for(let i=0; i<this.length; i++){
		console.log(this[i])
	}
};
Array.prototype.addNew = function(index,item){
	this.splice(index,0,item)
}
Array.prototype.delete = function(index){
	this.splice(index,1)
}

/************ control_flow.js ******************************/

//程序基本流程的设置
let getReNumber = function(data,callback){
	//Re=ρvL/μ
	for(index in data){
		if(!data[index]){
			return console.log('data error')
		}
	}
	let statusNumber = data.ρ * data.v * data.l / data.μ;
	if(statusNumber < 2100){
		callback('层流')
	}else if(statusNumber>=2100 && statusNumber < 4000){
		callback('过度状态')
	}else{
		callback('暂留态')
	}
}

let getRoundNumer = function(start,end,command,index){
	if(arguments.length ==2){
		for(let i = start; i<= end ;i++){
			console.log(i);
		}
		return;
	};
	switch(command){
		case 'jump':
			for(let i = start; i<= end ;i++){
				if(i == index){
					continue;
				}
				console.log(i);
			};
			break;
		case 'shutdown':
			for(let i = start; i<= end ;i++){
				if(i == index){
					break;
				}
				console.log(i);
			};
			break;
		default:
			console.log('command is null')
	}		
}



module.exports.getReNumber = getReNumber;
module.exports.getRoundNumer = getRoundNumer;

/************ datetime.js ******************************/

//转换为指定的格式字符串
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, 						//月份 
        "d+": this.getDate(), 							//日 
        "h+": this.getHours(), 							//小时 
        "m+": this.getMinutes(), 						//分 
        "s+": this.getSeconds(), 						//秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), 	//季度 	
        "S": this.getMilliseconds() 					//毫秒 
    };
    if (/(y+)/.test(fmt)){					//正则表达式提取FMT里的格式，将fmt里的数据进行替换当前时间
    	//console.log(RegExp.$1)
    	fmt.indexOf(RegExp.$1)
    	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    	//console.log(fmt)
    }
    for (var k in o){						//正则表达式提取FMT里的格式，将fmt里的数据进行替换当前时间
    	if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
    }
    return fmt;
}
//  //将指定的格式字符串转化为系统时间，
let setTime = function (dateString,fmt) {
    let o = {
    	"y+": null,							//年
        "M+": null, 						//月份 
        "d+": null, 						//日 
        "h+": null, 						//小时 
        "m+": null, 						//分 
        "s+": null, 						//秒 	
    };
    let i = 0;date = [];
    for (var k in o){						//正则表达式提取FMT里的格式，将dateString 里的数据拿出放入date里
    	date[i] = 0;						//如果为空则默认为 0；
    	if (new RegExp("(" + k + ")").test(fmt)){
    		date[i] = parseInt(dateString.slice(fmt.indexOf(RegExp.$1),fmt.indexOf(RegExp.$1)+RegExp.$1.length));
    		if(i==1){
    			date[i] = parseInt(dateString.slice(fmt.indexOf(RegExp.$1),fmt.indexOf(RegExp.$1)+RegExp.$1.length))-1;
    		}；
		if(i==3){
    			date[i] = parseInt(dateString.slice(fmt.indexOf(RegExp.$1),fmt.indexOf(RegExp.$1)+RegExp.$1.length))+8;
    		};
    	}
    	i++;
	}
	i=0;									//i清零
    return new Date(date[0],date[1],date[2],date[3],date[4],date[5],)
};
module.exports.setTime = setTime;
