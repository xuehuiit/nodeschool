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
