type AllKeyType = symbol | number | string

const params: Record<AllKeyType, string> = {}

interface NumberRecord {
  [key: string]: number
  [key: symbol]: string
}

type Stringify<T> = {
  [K in keyof T]: T[K]
}

interface Foo {
  prop1: string
  prop2: number
  prop3: boolean
  prop4: () => void
}

type Clone<T> = {
  [K in keyof T]: T[K]
}

type Fooo = Clone<Foo>

type Func = () => string
type FuncReturnType = ReturnType<Func>
