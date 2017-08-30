import React from 'react'
import AppBar from 'material-ui/AppBar'
import DefaultMuiTheme from './DefaultMuiTheme.jsx'
import RandomNumber from './RandomNumber.jsx'

export default function App ({init}) {
  const display = num =>
    parseFloat(num).toString(16).slice(2, 18)

  return <div>
    <DefaultMuiTheme>
      <AppBar title='Hello, World!!' />
    </DefaultMuiTheme>
    <RandomNumber display={display} init={init} />
  </div>
}
