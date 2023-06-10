import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  render() {
    // Note: 
    //Very important
    //Calls to set state are asynchronous in nature hence if we try to console in next line we would get previous value;
    //If we want to do something after the state has been updated we can pass a callback function as a second argument to our
    //set state function
    return (
      <div>
        <h1>Never modify state directly!</h1>
        <div>count - {this.state.count} </div>
        <button onClick={()=>this.increment()   }>Increment</button>
      </div>
    )
  }
  increment(){
    //This code basically increments count but UI does not get re-rendered, hence we should never modify state
    // this.state.count=this.state.count;
    // console.log(this.state.count);
    // If we want to do something once our set state is executed we cannot write it outside set state instead we do it under
    //callback passed to setstate
    this.setState({
        count: this.state.count+1
    },()=>{console.log(this.state.count);})
    console.log(this.state.count);
  }
  incrementFive(){
    // This logic would fail, if we execute this we would only get 1 as output of count, this is because react clubs different
    //set state calls together and executes them in one go, hence value gets updated only once. To correct this we would need to
    //pass a callback function to our set state instead of using this.state.count, that would help us change the value by +5, like
    // in the increment function we would change to something like:
    //this.setState((prevValue)=>{
        // count: prevValue.count+1;
    // })
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
}

export default Counter