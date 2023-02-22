export default class CommonQueue<T> {
  constructor(private _list: T[]) {}

  enqueue<TType extends T>(ele: TType): void {
    console.log(ele)
  }
}

const queue = new CommonQueue([1, '2', '4'])

queue.enqueue(1)
