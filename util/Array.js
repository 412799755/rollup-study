//移除后copy
function remove(arr,item){
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === item) continue;
        result.push(arr[i])
    }
    return result
}
//从原数组移除
function removeWithoutCopy(arr, item) {
    for (var i = arr.length-1; i >= 0; i--) {
        if(arr[i] === item)
            arr.splice(i,1)
    }
    return arr
}
//计数
function count(arr, item) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i] === item
    }
    return result
}
// 去重
function duplicates(arr) {
    var array = [];
    var rel = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }else if(!~rel.indexOf(arr[i])){
            rel.push(arr[i])
        }
    }
    return rel;
}
//es6
function duplicates(arr) {
    return Array.from(new Set(arr));
}
//定时输出
function count(start, end) {
    if(start <= end){
        console.log(start);
        start++;
        st = setTimeout(function(){count(start, end)}, 100);
    }
    return {
        cancel: function(){clearTimeout(st);}
    }
}

// 函数curry化
var curry = function(fn) {
    var limit = fn.length
    return function judgeCurry (...args) {
        if (args.length >= limit) {
            return fn.apply(null, args)
        } else {
            return function(...args2) {
                return judgeCurry.apply(null, args.concat(args2))
            }
        }
    }
}
// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
function makeClosures(arr, fn) {
var result = []
    for (var i = 0; i < arr.length; i++) {
        result.push(fn.bind(null,arr[i]))

    }
    return result
}
// 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 1、返回一个函数 result，该函数接受一个参数
// 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
function partial(fn, str1, str2) {
return function(str3){
    return fn(str1,str2,str3)
}
}

// 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
function useArguments() {
    var rel = 0
    for (var i = 0; i < arguments.length; i++) {
        rel+= arguments[i]

    }
    return rel
}

// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
function callIt(fn) {
return fn.apply(fn, [].slice.call(arguments,1))
}

// 实现函数 partialUsingArguments，调用之后满足如下条件：
// 1、返回一个函数 result
// 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
// 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
function partialUsingArguments(fn) {
    var args = [].slice.call(arguments,1)
return function(){
        return fn.apply(null,args.concat([].slice.call(arguments)))
}
}

// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
// 5、fn 的参数依次为函数 a, b, c 的调用参数
function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result =  function (arg){
        args.push(arg);
        length --;
        if(length <= 0 ){
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
}
// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序
var C = function() {this.foo = 'bar'; this.baz = 'bim';};
C.prototype.bop = 'bip';
iterate(new C());
function iterate(obj) {
    var keys = Object.keys(obj)
    var result  = []
    for (var i = 0; i < keys.length; i++) {
        result.push(keys[i] + ': ' + obj[keys[i]])
    }
    return result
}
//是否含有数字
function containsNumber(str) {
return /\d+/.test(str)
}
function endsWithVowel(str) {
return /[aeiou]$/i.test(str)
}
function matchesPattern(str) {
return /^\d{3}-\d{3}-\d{4}$/.test(str)
}
