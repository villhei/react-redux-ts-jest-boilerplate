import * as React from 'react'
import { Main } from '../src/Main'
import { shallow } from 'enzyme'

describe('Main container', () => {
  it('should render the component', () => {
    const props = {
      count: 0,
      setCount: jest.fn()
    }
    const element = shallow(<Main {...props} />)
    expect(element).toMatchSnapshot()
  })
})
