import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <h1>About this project</h1>
      <p>React app for leave user feedback</p>
      <p>Version 1.0.0</p>
      <p><Link to='/'>Back to homepage</Link></p>
    </div>
  )
}

export default About
