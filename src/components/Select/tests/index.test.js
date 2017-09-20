import React from 'react'
import { mount } from 'enzyme'
import Select, { SF, LA, NY } from '../index'
import { ALL_OPTION } from '../WithAllOption'

const OPTIONS = [SF, LA, NY]

describe('Select', () => {
  describe('click', () => {
    let wrapper
    const onChange = jest.fn()

    beforeEach(() => {
      wrapper = mount(
        <Select options={OPTIONS} onChange={onChange} value={[]} />
      )
      onChange.mockReset()
    })

    it('should select all options', () => {
      wrapper
        .find('li')
        .first()
        .simulate('click')

      expect(onChange).toBeCalledWith('all', {
        option: ALL_OPTION,
        isSelected: false,
      })
    })
  })
})
