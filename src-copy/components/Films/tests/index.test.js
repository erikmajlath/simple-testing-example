import React from 'react'
import { mount, shallow } from 'enzyme'
import Films, { FancyItem } from '../index'
// import 'jest-styled-components'

const getResponse = results => new window.Response(JSON.stringify({ results }))
const results = [{ title: 'one' }, { title: 'two' }]

fetch = jest.fn()

describe('Films', () => {
  let wrapper

  it('should match snapshot', () => {
    fetch.mockImplementation(() => Promise.resolve(getResponse(results)))
    wrapper = mount(<Films />)
    return wrapper.instance().componentDidMount().then(() => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should load films', () => {
    wrapper = shallow(<Films />)
    fetch.mockImplementation(() => Promise.resolve(getResponse(results)))
    return wrapper.instance().componentDidMount().then(() => {
      expect(wrapper.find({ children: 'one' }).length).toBe(1)
      expect(wrapper.find({ children: 'two' }).length).toBe(1)
      // fetch.mockReset()
    })
  })

  it('should call fetch on mount', () => {
    fetch.mockImplementationOnce(() => Promise.resolve(getResponse(results)))
    wrapper = mount(<Films />)

    expect(fetch).toBeCalledWith('http://swapi.co/api/films')
    fetch.mockReset()
  })
})

// jest.mock('utils/request', () =>
//   jest.fn().mockImplementation(url => {
//     const name = url === 'posts/1' ? 'firstPublisher' : 'anotherPublisher'
//     return Promise.resolve({
//       source: { publisher: { name } },
//       media: [{ original_url: { url: 'imageUrl' } }],
//       link: 'postLink',
//     })
//   })
// )

// jest.mock('containers/ModalManager', () => ({
//   popup: jest.fn(),
// }))
