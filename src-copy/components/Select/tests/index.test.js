import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Select, { OPTIONS, SF, LA, NY } from '../index'
import { ALL_OPTION } from '../WithAllOption'

describe('Select', () => {
  const onChange = jest.fn()
  const component = (
    <Select options={OPTIONS} value={['sf']} onChange={onChange} />
  )

  it('should match snapshot', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('clicks', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(component)
      onChange.mockReset()
    })

    it('should call onChange on selected', () => {
      wrapper.find('li').first().simulate('click')

      expect(onChange).toBeCalledWith('all', {
        option: ALL_OPTION,
        isSelected: false,
      })
    })

    it('should call onChange on not selected', () => {
      wrapper.find('li').at(2).simulate('click')

      expect(onChange).toBeCalledWith(['sf', 'la'], {
        option: LA,
        isSelected: false,
      })
    })
  })
})
