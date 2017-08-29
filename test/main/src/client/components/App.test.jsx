import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../subject-components/App.jsx'

test('Snapshot: components/App.jsx', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
