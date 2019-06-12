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
//ie6不支持indexOf
var indexOf = [].indexOf ?
    function(arr, item) {
        return arr.indexOf(item)
    } :
    function indexOf(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i
            }
        }
        return -1
    }
    //IE 不可枚举属性bug
var obj = { toString: 1, hasOwnProperty: 1 }
for (var p in obj) {
    console.log(p)
}
var keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
        DontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        DontEnumsLength = DontEnums.length;

    return function (o) {
        if (typeof o != "object" && typeof o != "function" || o === null)
            throw new TypeError("Object.keys called on a non-object");

        var result = [];
        for (var name in o) {
            if (hasOwnProperty.call(o, name))
                result.push(name);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < DontEnumsLength; i++) {
                if (hasOwnProperty.call(o, DontEnums[i]))
                    result.push(DontEnums[i]);
            }
        }

        return result;
    };
})();
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
// reduce polyfill
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
        value: function(callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError( 'Array.prototype.reduce ' +
                    'called on null or undefined' );
            }
            if (typeof callback !== 'function') {
                throw new TypeError( callback +
                    ' is not a function');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // Steps 3, 4, 5, 6, 7
            var k = 0;
            var value;

            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in o)) {
                    k++;
                }

                // 3. If len is 0 and initialValue is not present,
                //    throw a TypeError exception.
                if (k >= len) {
                    throw new TypeError( 'Reduce of empty array ' +
                        'with no initial value' );
                }
                value = o[k++];
            }

            // 8. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kPresent be ? HasProperty(O, Pk).
                // c. If kPresent is true, then
                //    i.  Let kValue be ? Get(O, Pk).
                //    ii. Let accumulator be ? Call(
                //          callbackfn, undefined,
                //          « accumulator, kValue, k, O »).
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }

                // d. Increase k by 1.
                k++;
            }

            // 9. Return accumulator.
            return value;
        }
    });
}

// 整数字面量默认是有符号数
// 有符号数31位表示数值 1位表示符号
// -2147483648 到2147483647
// 负数也存储为二进制代码，不过采用的形式是二进制补码。计算数字二进制补码的步骤有三步：
//
// 确定该数字的非负版本的二进制表示（例如，要计算 -18的二进制补码，首先要确定 18 的二进制表示）
// 求得二进制反码，即要把 0 替换为 1，把 1 替换为 0
// 在二进制反码上加 1
var iNum = 18;
alert(iNum.toString(2));//输出 "10010"
var iNum = -18;
alert(iNum.toString(2));//输出 "-10010"

// 位运算 NOT ~
// 位运算 NOT 是三步的处理过程：
//
// 1.把运算数转换成 32 位数字
// 2.把二进制数转换成它的二进制反码
// 3.把二进制数转换成浮点数
// 位运算 AND &
// 位运算 OR |
// 位运算 XOR ^
// 左移运算 << 左移运算保留数字的符号位。
// 有符号右移运算
// 无符号右移运算 >>>
