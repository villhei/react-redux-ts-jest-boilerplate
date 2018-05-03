import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { State } from './reducer'
import { setSlideAction } from './actions'

const root = document.querySelector('#app')

type Props = {
  slide: 0,
  setSlideAction: (n: number) => void
}

const Main = (props: Props) => {
  const { setSlideAction, slide } = props
  return (
    <div>
      <h1>Hello there, the slide is {slide}</h1>
      <button onClick={() => setSlideAction(props.slide + 1)}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = (state: State): State => state

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  setSlideAction: (n: number) => { dispatch(setSlideAction(n)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)