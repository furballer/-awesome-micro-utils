type Constructor<T = unknown> = new (...args: any[]) => T

export default function _instanceof(left: object, right: Constructor): boolean {
  // 如果是原始类型 直接 false
  if (typeof left !== 'object' || left === null) return false

  let proto = Object.getPrototypeOf(left)
  const condition = true
  while (condition) {
    // 找到尽头
    if (proto === null) return false

    // 找到相同的原型
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }

  return false
}
