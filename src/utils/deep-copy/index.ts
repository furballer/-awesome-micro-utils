function forEach(array: any[], iteratee: (key: any, value: any) => void) {
  let index = -1
  const length = array.length

  while (++index < length) {
    iteratee(index, array[index])
  }
  return array
}

// export function deepclone(obj: any, map = new WeakMap()): typeof obj {
//   if (obj === null) return null
//   if (typeof obj === 'object') {
//     const isArray = Array.isArray(obj)
//     const copy: any = isArray ? [] : {}

//     if (map.get(obj)) {
//       return map.get(obj)
//     }

//     map.set(obj, copy)
//     for (const key in obj) {
//       copy[key] = deepclone(obj[key], map)
//     }

//     // const interatorData = isArray ? obj : Object.keys(obj)
//     // forEach(interatorData, (key, value) => {
//     //   copy[key] = deepclone(obj[key], map)
//     // })
//   }
//   return obj
// }

export default function deepclone(target: any, map = new WeakMap()): typeof target {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    const clone: any = isArray ? [] : {}

    if (map.has(target)) return map.get(target)
    map.set(target, clone)

    for (const key in target) {
      clone[key] = deepclone(target[key], map)
    }
  } else {
    return target
  }
}
