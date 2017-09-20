import React from 'react'
import { shallow } from 'enzyme'
import Options, { SF, LA } from '../Options'

const plus = (x, y) => x + y

describe('Options', () => {
  it('should test plus func', () => {
    expect(plus(3, 4)).toBe(7)
  })

  it('should render items', () => {
    const wrapper = shallow(<Options options={[SF, LA]} value={[]} />)

    expect(wrapper.find('li').length).toBe(2)
  })

  it('should render selected items', () => {
    const wrapper = shallow(<Options options={[SF, LA]} value={['la']} />)

    expect(wrapper.find({ children: ' - SELECTED!' }).length).toBe(1)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Options options={[SF, LA]} value={[]} onChange={() => true} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
