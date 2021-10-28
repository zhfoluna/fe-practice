//手动实现apply
    var name = 'foo';
    var age = 5
    function foo(age, height) {
        console.log(this.name);
        console.log(age);
        console.log(height);
    }
    const obj = {
        name: 'obj',
        age: 3
    }
    foo.apply(obj, [obj.age, null])
    //基本思路就是想办法使函数被传入的thisArg调用，那么函数的this就指向调用者
        Function.prototype.apply = function(thisArg, args = Symbol.for(args)) {
            console.dir(this);      // this为这个函数的调用者 => foo函数
            const fn = Symbol('fn');    // 生成一个不可重复的键
            thisArg[fn] = this || window; // 把foo函数作为传入this的一个方法
            args === Symbol.for(args) ? thisArg[fn]() : thisArg[fn](...args); //
            delete thisArg[fn]
        }
        Function.prototype.myCall = function (context) {
            const key = Symbol('key');
            context[key] = this || window;
            const args = [...arguments].slice(1)
            const res = context[key](...args)
            delete context[key]
            return res;
        }
        Function.prototype.myBind = function() {
            var self = this,
                context = [].shift.call(arguments),
                args = [].slice.call(arguments);
            return function () {
                self.apply(context, [].concat.call(args, Array.prototype.slice.call(arguments)))
            }
        }
// 实现new
//     1、创建一个空对象
//     2、继承构造函数的的原型链
//     3、将构造函数的this指向这个对象
//     4、根据构造函数的返回值类型返回结果
       function myNew(fn) {
           let obj = {};
           obj = Object.create(fn.prototype);
           let args = Array.prototype.slice.call(arguments,1) // 获取除去fn外的参数
           let result = fn.call(obj, ...args);
           return typeof result === 'object' || result instanceof Function ? result : obj;
       }

       function Person({}) {
           this.name = name;
           this.age = age;
       }
       Person.prototype.sayName = function () {
           return this.name;
       }
       var person = new Person()


