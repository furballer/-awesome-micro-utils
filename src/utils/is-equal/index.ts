export function equal(x: number, y: number, tolerance = Number.EPSILON): boolean {
  return Math.abs(x - y) <= x * tolerance
}
