/**
 * 完成整数，小数，字符串等变量的定义和基本操作
 * @author:zzy
 **/


//整数
function col() {
    var a = 1;
    var b = 2;
    console.log("a+b=",(a+b));
    console.log("b-a=",(b-a));
    console.log("a*b=",(a*b));
    console.log("b÷a=",(b/a));
}
col()

//完成小数四舍五入的功能
function intercept() {
    var a = 3.141592657
    //完成小数的截取，若截取后一位大于5则四舍五入
    console.log(a.toFixed(4));
}
intercept()

//字符串截取，从第几个字符开始截取的第几个
function sub() {
    var a = "HelloWorld";
    console.log("截取第2位到第5位",a.substring(2,5));
    //在字符串中寻找"l"第一次出现的位置
    console.log("l第一次出现的位置",a.indexOf("l"));
    console.log("字符串A的长度为:",a.length)
}
sub()

//数组
function arr() {
    var array = []
    var array2 = [1,2,3,4,5]
    array.push(...array2)
    //在数据结尾加入元素
    array.push(6)
    console.log("在数据结尾加入元素",array)
    array.unshift(0)
    console.log("在数组开头加入元素",array)
    //在数组指定位置加入元素
    array.splice(2,0,"A")
    console.log(array)
}
arr()