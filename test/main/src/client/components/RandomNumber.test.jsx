import React from 'react'
import renderer from 'react-test-renderer'
import RandomNumber from '../../subject-components/RandomNumber.jsx'

test('Snapshot: components/RandomNumber.jsx', () => {
  const init = () => 0.123456789
  const tree = renderer.create(<RandomNumber init={init} />).toJSON()
  expect(tree).toMatchSnapshot()
})
