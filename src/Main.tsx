import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { State } from './reducer'
import { setCountAction, resetCounterAction } from './actions'

export type Props = {
  count: number,
  setCount: (n: number) => void,
  resetCounter: () => void
}

export const Main = (props: Props) => {
  const { resetCounter, setCount, count } = props
  return (
    <div>
      <h1>Hello there, the count is {count}</h1>
      <button id='increment' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id='reset' onClick={() => resetCounter()}>
        Reset
      </button>
    </div>
  )
}

const mapStateToProps = (state: State): State => state

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  setCount: (n: number) => { dispatch(setCountAction(n)) },
  resetCounter: () => { dispatch(resetCounterAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)