export default function _intanceof(left, right) {
  if (typeof left !== 'object') return false

  let proto = Object.getPrototypeOf(left)
  const condiftion = true
  while (condiftion) {
    if (proto === null) return false
    if (proto === right.prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}
