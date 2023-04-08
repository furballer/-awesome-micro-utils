// is 的使用 类型守卫

function isString(input: unknown): input is string {
  return typeof input === 'string'
}

function foo(input: string | number): string {
  if (isString(input)) {
    return input + '_string'
  }

  return `${input}_number`
}

export type Falsy = false | '' | 0 | null | undefined
export const isFalsy = (val: unknown): val is Falsy => !val

// assert 的使用 类型守卫
// assert condigtion
let name: unknown
function assertIsNumber(val: unknown): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!')
  }
}

assertIsNumber(name)

// number 类型！
name.toFixed()

// 断言守卫和类型守卫最大的不同点在于，在判断条件不通过时，断言守卫需要抛出一个错误，类型守卫只需要剔除掉预期类型


const App: Fun