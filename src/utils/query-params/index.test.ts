import { getQueryParamsWithSplit, getQueryParamsWithURLSearchParams } from './index'

describe('test query params', () => {
  const url = 'url?key0=0&key1=1&key2=2&key1=11'

  it('return obj', () => {
    expect(getQueryParamsWithSplit(url)).toMatchObject({
      key0: '0',
      key1: '11',
      key2: '2',
    })

    expect(getQueryParamsWithURLSearchParams(url)).toMatchObject({
      key0: '0',
      key1: '11',
      key2: '2',
    })
  })
})
