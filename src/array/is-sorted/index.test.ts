import checksort, { Comparator } from './index'
import data from './data'

const comparators: Record<string, Comparator> = {
  descending: function (a: number, b: number): number {
    return b - a
  },
}

describe('check sorted', () => {
  it('checksort', () => {
    for (const item of data) {
      const { array, expected, comparator: ck } = item
      const comparator = ck ? comparators[ck] : undefined

      expect(checksort(array, comparator)).toBe(expected)
    }
  })
})
