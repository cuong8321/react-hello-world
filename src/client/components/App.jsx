import React from 'react'
import RandomNumber from './RandomNumber.jsx'

export default function App () {
  const display = num =>
    parseFloat(num).toString(16).slice(2, 18)

  return <div>
    <RandomNumber display={display} />
  </div>
}
