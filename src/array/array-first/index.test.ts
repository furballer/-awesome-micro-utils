import arrayFirst from '.'

describe('array first', () => {
  it('should throw a type error ', () => {
    expect(() => {
      arrayFirst({} as any, 0)
    }).toThrowError()
  })

  it('return the first element', () => {
    expect(arrayFirst([1, 2, 3, 4, 5])).toBe(1)
  })

  it('return the first element', () => {
    expect(arrayFirst([1, 2, 3, 4, 5], 0)).toBe(1)
  })

  it('return the first n of array', () => {
    expect(arrayFirst([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3])
  })

  it('return []', () => {
    expect(arrayFirst([], 3)).toStrictEqual([])
  })
})
