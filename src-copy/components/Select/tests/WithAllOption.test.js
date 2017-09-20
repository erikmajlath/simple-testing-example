import React from 'react'
import { shallow } from 'enzyme'
import WithAllOption, { ALL_OPTION } from 'components/Select/WithAllOption'
import Select, { SF, NY, LA, OPTIONS } from 'components/Select'

describe('WithAllOption', () => {
  const Dumber = () => <div />
  const Dumb = props => <Dumber {...props} />
  const Component = WithAllOption(Select)
  const onChange = jest.fn()
  let wrapper = shallow(<Component randomProp />)

  beforeEach(() => {
    onChange.mockReset()
  })

  it('should pass another props', () => {
    expect(wrapper.prop('randomProp')).toBe(true)
  })

  it('should add all Option', () => {
    expect(wrapper.prop('options')).toContain(ALL_OPTION)
  })

  it('should select all options with all value', () => {
    wrapper = shallow(<Component options={OPTIONS} value="all" />)

    expect(wrapper.prop('value')).toEqual([ALL_OPTION.value, 'sf', 'la', 'ny'])
  })

  describe('onChange', () => {
    it('should handle selecting all option', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value={[]} onChange={onChange} />
      )
      const info = { option: ALL_OPTION, isSelected: false }
      wrapper.prop('onChange')(null, info)

      expect(onChange).toBeCalledWith('all', info)
    })

    it('should handle deselecting all option', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value="all" onChange={onChange} />
      )
      const info = { option: ALL_OPTION, isSelected: true }
      wrapper.prop('onChange')(null, info)

      expect(onChange).toBeCalledWith([], info)
    })

    it('should handle deselecting when all are selected', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value="all" onChange={onChange} />
      )
      const info = { option: SF, isSelected: true }
      wrapper.prop('onChange')(null, info)

      expect(onChange).toBeCalledWith(['la', 'ny'], info)
    })

    it('should handle selecting last unselected option', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value={['sf', 'la']} onChange={onChange} />
      )
      const info = { option: NY, isSelected: false }
      wrapper.prop('onChange')(['sf', 'la'], info)

      expect(onChange).toBeCalledWith('all', info)
    })

    it('should handle usual selection', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value={['sf']} onChange={onChange} />
      )
      const info = { option: LA, isSelected: false }
      wrapper.prop('onChange')(['sf', 'la'], info)

      expect(onChange).toBeCalledWith(['sf', 'la'], info)
    })

    it('should handle usual deselection', () => {
      wrapper = shallow(
        <Component options={OPTIONS} value={['sf']} onChange={onChange} />
      )
      const info = { option: SF, isSelected: true }
      wrapper.prop('onChange')([], info)

      expect(onChange).toBeCalledWith([], info)
    })
  })
})
