import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

export default class UpperCaseForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    const onChange = (event, text) => this.setState({text})
    const clear = () => this.setState({text: ''})

    return <Paper zDepth={1}><div>
      <div>
        <TextField id='input' hintText='Your Text Here...' onChange={onChange} value={this.state.text} />
        <FlatButton secondary label='Clear' onClick={clear} />
        <Paper zDepth={0}>
          <label htmlFor='output-upper'>Upper Case: </label>
          <output id='output-upper'>{this.state.text.toUpperCase() || <i>(Empty)</i>}</output>
        </Paper>
        <Paper zDepth={0}>
          <label htmlFor='output-lower'>Lower Case: </label>
          <output id='output-lower'>{this.state.text.toLowerCase() || <i>(Empty)</i>}</output>
        </Paper>
      </div>
      <div>
        <Paper zDepth={0} />
      </div>
    </div></Paper>
  }
}
