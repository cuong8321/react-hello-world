import React from 'react'

export default class RandomNumber extends React.Component {
  render () {
    return <div>
      <span className='label'>Random Number: </span>
      <span className='value'>{Math.random()}</span>
    </div>
  }
}
