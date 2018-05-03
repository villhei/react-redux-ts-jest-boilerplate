import reducer, { initialState } from '../src/reducer'

describe('reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(initialState, { type: 'SOME_ACTION' })
    expect(state).toEqual(initialState)
  })
})
