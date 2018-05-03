import * as React from 'react'
import { Main } from '../src/Main'
import { shallow } from 'enzyme'

describe('Main container', () => {
  const minimumProps = {
    count: 0,
    setCount: () => null,
    resetCounter: () => null
  }
  it('should render the component', () => {
    const element = shallow(<Main {...minimumProps} />)
    expect(element).toMatchSnapshot()
  })

  it('should trigger the callback on increment button click', () => {
    const props = { ...minimumProps, setCount: jest.fn() }
    const element = shallow(<Main {...props} />)
    const button = element.find('#increment')
    button.simulate('click')
    expect(props.setCount).toHaveBeenCalled()
  })

  it('should trigger the callback on reset button click', () => {
    const props = { ...minimumProps, resetCounter: jest.fn() }
    const element = shallow(<Main {...props} />)
    const resetButton = element.find('#reset')
    resetButton.simulate('click')
    expect(props.resetCounter).toHaveBeenCalled()
  })

  it('should call the callback with an incremented count', () => {
    const props = { ...minimumProps, setCount: jest.fn() }
    const element = shallow(<Main {...props} />)
    element.find('#increment').simulate('click')
    expect(props.setCount).toHaveBeenCalledWith(1)
  })

  it('should render the given count prop as a value in the view', () => {
    const props = { ...minimumProps, count: 5 }
    const element = shallow(<Main {...props} />)
    const heading = element.find('h1')
    expect(heading.text()).toContain(5)
  })

})
