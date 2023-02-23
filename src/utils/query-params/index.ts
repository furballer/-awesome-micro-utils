type Params = Record<string, string>

// 方法一
export function getQueryParamsWithURLSearchParams(url: string): Params {
  const queryString = url.split('?')[1]
  const searchParams = new URLSearchParams(queryString)

  const params: Params = {}
  for (const [key, value] of searchParams) {
    params[key] = value
  }
  return params
}

// 方法二
export function getQueryParamsWithSplit(url: string): Params {
  const params: Params = {}
  const queryString = url.split('?')[1]

  queryString.split('&').forEach((it) => {
    const [key, value] = it.split('=')
    params[key] = value
  })

  return params
}
