import React from 'react'
import renderer from 'react-test-renderer'
import UpperCaseForm from '../../../../../src/client/components/UpperCaseForm.jsx'
import DefaultMuiTheme from '../../../../../src/client/components/DefaultMuiTheme.jsx'

test('Snapshot: components/UpperCaseForm.jsx', () => {
  const tree = renderer.create(<DefaultMuiTheme>
    <UpperCaseForm />
  </DefaultMuiTheme>).toJSON()
  expect(tree).toMatchSnapshot()
})
