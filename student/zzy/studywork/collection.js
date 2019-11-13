/*
 * 集合，哈希表（MAP)
 * @authur:zzy
 */


//定义一个对象(list)的集合并遍历这个集合
function f1() {
    var arr = [
        {"0":"98"},
        {"1":"100"},
        {"2":"80"},
        {"3":"88"}
    ]
    for(var i in arr){
        console.log(arr[i])
    }
  }
  f1()


//定义一个hashmap并遍历
function HashMap() {
    var length = 0          //定义长度
    var obj  = new Object() //创建对象
    //判断Map是否为空
    this.IsEmpty = function () {
        return length === 0
    }
    //判断对象中是否包含指定key
    this.containKey = function (key) {
        return (key in obj)
    }
    //判断对象中是否有指定value
    
    //向map中添加数据
    this.put = function (key,value) {
        if(!this.containKey(key)){
            length++
        }
        obj[key] = value
    }
    //获得map中所有key
    this.Keys = function () {
        var _keys = new Array()
        for(var key in obj){
            _keys.push(key)
        }
        return _keys
    }
    //获得map中所有的value
    this.Values = function () {
        var _values = new Array()
        for(var key in obj){
            _values.push(obj[key])
        }
        return _values
    }
}
function f2() {
    var map = new HashMap()
    map.put("1","98")
    map.put("2","100")
    map.put("3","80")
    map.put("4","88")
    var keys = map.Keys()
    var values = map.Values()
    for(var i in values){
            console.log(i+":"+values[i]+"   ")
    }

}
f2()