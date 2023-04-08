import _instanceof from './'

describe('test my instanceof', () => {
  class Animal {}
  class Dog extends Animal {}
  class Cat extends Animal {}

  const animal = new Animal()
  const dog = new Dog()
  const cat = new Cat()

  it('dog instanceof Animal: true', () => {
    expect(_instanceof(dog, Animal)).toBe(true)
    expect(_instanceof(dog, Animal)).toBe(dog instanceof Animal)
  })

  it('dog instanceof Dog: true', () => {
    expect(_instanceof(dog, Dog)).toBe(true)
    expect(_instanceof(dog, Dog)).toBe(dog instanceof Dog)
  })

  it('cat instanceof Dog: false', () => {
    expect(_instanceof(cat, Animal)).toBe(false)
    expect(_instanceof(cat, Animal)).toBe(!(cat instanceof Dog))
  })

  it('animal instanceof Dog: false', () => {
    expect(_instanceof(animal, Dog)).toBe(false)
    expect(_instanceof(animal, Dog)).toBe(animal instanceof Dog)
  })
})
