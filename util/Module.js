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
Module.prototype.analyzeDep = function () {
    // .......
    let depCount = this.dep ? this.dep.length : 0;
    Object.defineProperty(this, 'depCount', {
        get() {
            return depCount;
        },
        set(newDepCount) {
            depCount = newDepCount;
            if (newDepCount === 0) {
                console.log(`模块${this.name}的依赖已经全部准备好`);
                this.execute();  // 如果depCount===0，执行该模块
            }
        }
    });
    this.depCount = depCount;
    // ....
};
Object.defineProperty(this, 'status', {
    get () {
        return status;
    },
    set (newStatus) {
        status = newStatus;
        if (status === 5) {
            // 假如某个模块已经准备好了（STATUS===5），
            // 那么找出依赖于这个模块的所有模块，让他们都执行depCount--
            let depedModules = mapDepToModule[this.name];
            if (!depedModules) return;
            depedModules.forEach((module) => {
                setTimeout(() => {
                    module.depCount--;
                });
            });
        }
    }
})

// before
require = function (dep, cb, errorFn) {
    // mainEntryModule是主入口模块
    modules[mainEntryModule.name] = mainEntryModule;
    mainEntryModule.dep = dep;
    mainEntryModule.cb = cb;
    mainEntryModule.errorFn = errorFn;
    mainEntryModule.analyzeDep();
};

// after
require = function (dep, cb, errorFn) {
    let task = new Task(dep, cb, errorFn);
    task.analyzeDep();
};

// 引入新的类: Task(任务)
function Task(dep, cb, errorFn) {
    this.tid = ++tid;
    this.init(dep, cb, errorFn);
}

// Task类继承于Module类
Task.prototype = Object.create(Module.prototype);
