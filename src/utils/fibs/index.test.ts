import { fib_0, fib_1, fib_2 } from './index'

describe('test fib', () => {
  const data = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

  it('should equal', () => {
    data.forEach((value, n) => {
      expect(fib_0(n + 1)).toBe(value)
      expect(fib_1(n + 1)).toBe(value)
      expect(fib_2(n + 1)).toBe(value)
    })
  })

  it('should return 0', () => {
    expect(fib_0(0)).toBe(0)
    expect(fib_1(0)).toBe(0)
    expect(fib_2(0)).toBe(0)
  })
})
