import './__lib__/material-ui-mocks.jsx'
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../../src/components/App.jsx'

test('Snapshot: components/App.jsx', () => {
  const init = () => 0.123456789
  const tree = renderer.create(<App init={init} />).toJSON()
  expect(tree).toMatchSnapshot()
})
