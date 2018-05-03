import { Action } from 'redux'
import { isSetCountAction } from './actions'

export type State = {
  count: number
}

export const initialState: State = {
  count: 0
}

export default (state = initialState, action: Action) => {
  if (isSetCountAction(action)) {
    return {
      ...state,
      count: action.payload
    }
  }
  return state
}