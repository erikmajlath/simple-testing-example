import React from 'react'
import Options, { SF, NY } from '../Options'
import { shallow, mount } from 'enzyme'

describe('Options', () => {

  it('renders items from options', () => {
    const wrapper = shallow(<Options options={[SF, NY]} value={[]} />)

    expect(wrapper.find('li').length).toBe(2)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Options options={[SF, NY]} value={[]} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('matches snapshot with selected value', () => {
    const wrapper = shallow(<Options options={[SF, NY]} value={['sf']} />)

    expect(wrapper).toMatchSnapshot()
  })
})

