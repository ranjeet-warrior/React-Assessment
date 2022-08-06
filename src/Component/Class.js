import React, { Component } from 'react'

export default class Class extends Component {
  render() {
    return (
      <div>
        <div className="class">
          <p className="first">This is Created Using Class Component</p>
          <p>This is done using external CSS</p>
          <p style={{color:'blue'}}> This is done using internal CSS</p> 
        </div>
      </div>
    )
  }
}

