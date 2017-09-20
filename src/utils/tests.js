import { createRenderer } from 'react-test-renderer/shallow'
import renderer from 'react-test-renderer'

// Shallow renderer
export const expectShallowSnapshotMatch = component => {
  const rend = createRenderer()
  rend.render(component)

  expect(rend.getRenderOutput()).toMatchSnapshot()
}

// Full cycle renderer
export const expectSnapshotMatch = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}
