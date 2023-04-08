declare class TagProtector<T extends string> {
  protected __tag__: T
}

export type Nominal<T, U extends string> = T & TagProtector<U>
type CNY = Nominal<number, 'CNY'>

const CNYCount = 100 as CNY

const total = CNYCount + 200

declare const tag: unique symbol
