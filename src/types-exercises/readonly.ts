type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Animal {
  sex: 'male' | 'female'
  legs: number
}

const animal: MyReadOnly<Animal> = {
  legs: 4,
  sex: 'male',
}

animal.legs = 5

console.log(animal)
