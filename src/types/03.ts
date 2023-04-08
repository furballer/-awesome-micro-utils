type Len = typeof arr.length
const arr: readonly [string, boolean?, number?] = ['cy'] // 可读性不强

//  labeled tuple elements
const larr: [name: string, age: number, male: boolean] = ['cy', 30, true]

// Boxed Types: Object, Boolean, String, Number, Symbol 在非严格模式下 包含了 undefined null void 0

// 严格模式下报错
// const tmp9: String = undefined;
// const tmp10: String = null;
// const tmp11: String = void 0;
// const tmp12: String = 'linbudu';

// object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些：
// const tmp17: object = undefined // 不成立
// const tmp18: object = null // 不成立
// const tmp19: object = void 0 // 不成立

// const tmp20: object = 'linbudu' // X 不成立，值为原始类型
// const tmp21: object = 599 // X 不成立，值为原始类型

const tmp22: object = { name: 'linbudu' }
const tmp23: object = () => {}
const tmp24: object = []

// 总结：在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型

declare const ButtonTypes: ['number', 'input']

type ButtonType = typeof ButtonTypes
const type: ButtonType
