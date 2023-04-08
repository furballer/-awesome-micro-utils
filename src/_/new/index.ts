type Constructor = any

// new 关键字会进行如下的操作：

// 1. 创建一个空的简单 JavaScript 对象（即 {}）；
// 2. 为步骤 1 新创建的对象添加属性 __proto__，将该属性链接至构造函数的原型对象；
// 3. 将步骤 1 新创建的对象作为 this 的上下文；
// 4/ 如果该函数没有返回对象，则返回 this。

export default function _new(constructor: Constructor, ...args: any[]) {
  // 1.
  const obj: any = {}

  // 2.
  obj.__proto__ = constructor.prototype

  // 3.
  const res: any = constructor.call(obj, ...args)

  // 4. 确保返回一个对象
  return res instanceof Object ? res : obj
}
