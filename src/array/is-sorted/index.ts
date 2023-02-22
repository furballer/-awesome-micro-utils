export type Comparator<T = number> = (prev: T, next: T) => number
const defaultComparator: Comparator = (a, b) => a - b

// O(n)
export default function checksort(array: number[], comparator: Comparator = defaultComparator): boolean {
  if (!Array.isArray(array)) throw new TypeError('Expected Array, got ' + typeof array)
  comparator = comparator || defaultComparator

  for (let i = 1, length = array.length; i < length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}
