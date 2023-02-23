// 1 1 2 3 5 8 13 21 34  ...

export function fib_0(n: number): number {
  if (n === 0) return 0
  if (n < 3) return 1

  return fib_0(n - 1) + fib_0(n - 2)
}

export function fib_1(n: number): number {
  if (n === 0) return 0

  return fn(0, 1, n)

  function fn(curr: number, next: number, n: number): number {
    if (n === 0) return curr

    return fn(next, curr + next, n - 1)
  }
}

export function fib_2(n: number) {
  if (n === 0) return 0

  if (n < 3) return 1

  let curr = 0
  let former = 1
  let prev = 1

  for (let i = 3; i <= n; i++) {
    curr = former + prev
    former = prev
    prev = curr
  }

  return curr
}
