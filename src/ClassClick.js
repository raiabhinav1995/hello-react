import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
  clickHandler(){
    console.log("Clicked the button");
  }
}

export default ClassClick