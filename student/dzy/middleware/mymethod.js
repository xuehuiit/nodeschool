/************ variable.js ******************************/

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
