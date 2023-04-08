import _new from '.'

interface People {
  name: string
  getName(): string
}

interface PeopleConstructor {
  new (name: string): People // 声明可以作为构造函数调用
  prototype: People // 声明prototype，支持后续修改prototype
}

describe('test my new', () => {
  const People = function (this: People, name: string) {
    console.log(this, name)
    this.name = name
  } as unknown as PeopleConstructor // 类型不兼容，二次转型

  People.prototype.getName = function () {
    return this.name
  }

  const p1 = new People('cy')
  const p2 = _new(People, 'cy')

  it('should equal : true', () => {
    expect(p1 instanceof People).toBe(p2 instanceof People)
  })

  it('should return cy', () => {
    expect(p1.getName()).toBe(p2.getName())
  })
})
