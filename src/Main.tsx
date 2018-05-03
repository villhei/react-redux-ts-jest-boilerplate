import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { State } from './reducer'
import { setCountAction } from './actions'

export type Props = {
  count: number,
  setCount: (n: number) => void
}

export const Main = (props: Props) => {
  const { setCount, count } = props
  return (
    <div>
      <h1>Hello there, the count is {count}</h1>
      <button onClick={() => setCount(props.count + 1)}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = (state: State): State => state

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  setCount: (n: number) => { dispatch(setCountAction(n)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)