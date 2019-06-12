// Module.id       // 模块id
// Module.name     // 模块名字
// Module.src      // 模块的真实的uri路径
// Module.dep      // 模块的依赖
// Module.cb       // 模块的成功回调函数
// Module.errorFn  // 模块的失败回调函数
// Module.STATUS   // 模块的状态（等待中、正在网络请求、准备执行、执行成功、出现错误……）

// Module.prototype.init           // 初始化，用来赋予各种基本值
// Module.prototype.fetch          // 通过网络请求获取模块
// Module.prototype.analyzeDep     // 分析、处理模块的依赖
// Module.prototype.execute        // 运算该模块

// 入口main.js
require(['a', 'b'], function (a, b) {
    a.hi();
    b.goodbye();
}, function () {
    console.error('Something wrong with the dependent modules.');
});
