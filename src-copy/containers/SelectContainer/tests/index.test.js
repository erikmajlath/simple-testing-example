import React from 'react'
import renderer from 'react-test-renderer'
import { createRenderer } from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SelectContainer from '../index'

describe('SelectContainer', () => {
  const component = <SelectContainer />
  const PH = { value: 'ph', label: 'Prague' }
  let wrapper

  beforeEach(() => {
    wrapper = shallow(component)
  })

  it('should match snapshot', () => {
    expect(renderer.create(component).toJSON()).toMatchSnapshot()
  })

  it('should match snapshot shallowly', () => {
    const renderer = createRenderer()
    renderer.render(component)

    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

  it('should update selected value', () => {
    wrapper.instance().onSelectChange('NICE')

    expect(wrapper.state('value')).toContain('NICE')
  })

  describe('renders according to state', () => {
    it('passes value to select', () => {
      wrapper.setState({ value: ['ph'] })

      expect(wrapper.find({ value: ['ph'] }).length).toBe(1)
    })

    it('matches snapshot with new state', () => {
      wrapper.setState({ value: ['ph'] })

      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
