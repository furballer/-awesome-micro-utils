type State = any
type GetState = any
type Dispatch = any
type Subcribe = any
type Listener = any

type Action<T = unknown> = {
  type: string
  payload?: T
}

interface Store {
  getState: GetState
  dispatch: Dispatch
  subcribe: Subcribe
}

export function createStore(reducer: any, initialState: State = {}): Store {
  const listeners: any[] = []

  const subcribe = (listener: Listener) => {
    listeners.push(listener)
  }

  const getState = () => initialState

  const dispatch = (state: State, action: Action = { type: 'init' }) => {
    initialState = reducer(state, action)
    listeners.forEach((i) => i())
  }

  dispatch(initialState)

  return {
    getState,
    dispatch,
    subcribe,
  }
}
