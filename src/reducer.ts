import { Action } from 'redux'
import { isSetSlideAction } from './actions'

export type State = {
  slide: number
}

export const initialState: State = {
  slide: 0
}

export default (state = initialState, action: Action) => {
  if (isSetSlideAction(action)) {
    return {
      ...state,
      slide: action.payload
    }
  }
  return state
}