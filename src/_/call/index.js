/* eslint-disable no-undef */

Function.prototype.myCall = function (context, ...args) {
  if (context === undefined || context === null) {
    context = globalThis
  } else {
    context = Object(context)
  }

  const fn = Symbol('fn')
  context[fn] = this

  let result = context[fn](...args)
  delete context[fn]

  return result
}
