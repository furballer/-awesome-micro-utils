import { equal } from './index'

describe('test equan fn', () => {
  it('0.1 + 0.2 = 0.3 true', () => {
    expect(equal(0.1 + 0.2, 0.3)).toBe(true)
  })

  it('1.1 + 1.2 = 2.3 true', () => {
    expect(equal(1.1 + 1.2, 2.3)).toBe(true)
  })

  it('1000.1 + 1000.2 = 2000.3 true', () => {
    expect(equal(1000.1 + 1000.2, 2000.3)).toBe(true)
  })

  it('0 + 0 = 0 true', () => {
    expect(equal(0 + 0, 0)).toBe(true)
  })

  it('0 + 0.1 = 0.09999 false', () => {
    expect(equal(0 + 0.1, 0.0999)).toBe(false)
  })

  it('1 + 0.2 = 1.19 false', () => {
    expect(equal(1 + 0.2, 1.19)).toBe(false)
  })

  it('0.1 + 0.2 = 0.29 false', () => {
    expect(equal(0.1 + 0.2, 0.29)).toBe(false)
  })
})
