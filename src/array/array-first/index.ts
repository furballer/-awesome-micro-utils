type ArrayFirst<T = unknown, K extends number = number> = (arr: T[], num?: K) => K extends 0 | undefined ? T : T[]

const arrayFirst: ArrayFirst = (arr, num = 0) => {
  if (!Array.isArray(arr)) throw TypeError(`expect array, but got ${typeof arr}`)
  if (arr.length === 0) return []
  if (num === 0) return arr[0]

  const r = arr.slice(0, num)

  return r
}

export default arrayFirst
