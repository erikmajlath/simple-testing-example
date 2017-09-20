import React from 'react'
import { shallow } from 'enzyme'
import SelectContainer from '../index'

describe('SelectContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SelectContainer />)
  })

  it('passes state value to select', () => {
    wrapper.setState({ value: ['sf', 'ny'] })
    
    expect(wrapper).toMatchSnapshot()
  })
})
