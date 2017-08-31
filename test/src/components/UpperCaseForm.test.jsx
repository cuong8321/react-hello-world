import './__lib__/material-ui-mocks.jsx'
import React from 'react'
import renderer from 'react-test-renderer'
import UpperCaseForm from '../../../src/components/UpperCaseForm.jsx'
import DefaultMuiTheme from '../../../src/components/DefaultMuiTheme.jsx'

test('Snapshot: components/UpperCaseForm.jsx', () => {
  const tree = renderer.create(<UpperCaseForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
