
import { Action as ReduxAction } from 'redux'


export interface Action<T> extends ReduxAction {
  readonly type: string,
  readonly payload: T
}

export const SET_SLIDE = 'SET_SLIDE'


export function setSlideAction(n: number): Action<number> {
  return {
    type: SET_SLIDE,
    payload: n
  }
}

export function isSetSlideAction(candidate: any): candidate is Action<number> {
  return candidate.type === SET_SLIDE
}