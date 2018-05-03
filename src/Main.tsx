import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { State } from './reducer'
import { setSlideAction } from './actions'

export type Props = {
  slide: number,
  setSlide: (n: number) => void
}

export const Main = (props: Props) => {
  const { setSlide, slide } = props
  return (
    <div>
      <h1>Hello there, the slide is {slide}</h1>
      <button onClick={() => setSlide(props.slide + 1)}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = (state: State): State => state

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  setSlide: (n: number) => { dispatch(setSlideAction(n)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)