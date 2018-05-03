
import { Action as ReduxAction } from 'redux'


export interface Action<T> extends ReduxAction {
  readonly type: string,
  readonly payload: T
}

export const SET_COUNT = 'SET_COUNT'

export const RESET_COUNTER = 'RESET_COUNTER'

export function setCountAction(n: number): Action<number> {
  return {
    type: SET_COUNT,
    payload: n
  }
}

export function resetCounterAction(): Action<null> {
  return {
    type: RESET_COUNTER,
    payload: null
  }
}

export function isResetAction(candidate: any): candidate is Action<null> {
  return candidate.type === RESET_COUNTER
}

export function isSetCountAction(candidate: any): candidate is Action<number> {
  return candidate.type === SET_COUNT
}