import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>Hello</h1>
      <p> <Link to = "/question">Question</Link></p>
      <p> <Link to = "/resultpage">Results</Link></p>
    </div>
  )
}

export default Landing
