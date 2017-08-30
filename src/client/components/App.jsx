import React from 'react'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import DefaultMuiTheme from './DefaultMuiTheme.jsx'
import RandomNumber from './RandomNumber.jsx'

export default function App ({init}) {
  const display = num =>
    parseFloat(num).toString(16).slice(2, 18)

  return <div>
    <DefaultMuiTheme><div>
      <AppBar title='Hello, World!!' />
      <Paper zDepth={1}>
        <RandomNumber display={display} init={init} />
      </Paper>
    </div></DefaultMuiTheme>
  </div>
}
