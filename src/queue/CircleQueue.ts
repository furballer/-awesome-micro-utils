abstract class AbsQueue<T> {
  abstract queue: T[]
  abstract n: number
  abstract head: number
  abstract tail: number

  abstract front(): T | -1
  abstract rear(): T | -1
  abstract enQueue<K extends T>(value: K): boolean
  abstract deQueue(): boolean
  abstract isFull(): boolean
  abstract isEmpty(): boolean
}

class CircleQueue<T> implements AbsQueue<T> {
  queue: T[]
  n: number
  head: number
  tail: number

  constructor(k: number) {
    this.queue = new Array(k)
    this.n = k + 1
    this.head = 0
    this.tail = 0
  }

  front(): T | -1 {
    if (this.isEmpty()) return -1
    return this.queue[this.head]
  }

  rear(): T | -1 {
    if (this.isEmpty()) return -1
    return this.queue[(this.tail - 1 + this.n) % this.n]
  }

  enQueue<K extends T>(value: K): boolean {
    if (this.isFull()) return false // 判断队列是否满了
    this.queue[this.tail] = value
    this.tail = (this.tail + 1) % this.n
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false // 判断是否空队列
    this.head = (this.head + 1) % this.n

    return true
  }

  isFull(): boolean {
    return (this.tail + 1) % this.n === this.head
  }

  isEmpty(): boolean {
    return this.head === this.tail
  }
}
