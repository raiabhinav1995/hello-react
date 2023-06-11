//Just like in javascript we can render conditionally we can do same in react as well.
//We can use:

//1. If/else
//2. Element variables.
//3. Ternary Variables.
//4.  Short ciruit operator

import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // return (
    //     // So basically we want to show conditionally these two statements, if the user is logged in we would show welcome abhinav
    //     // else if the user is not logged in we would show hello abhinav
    //   <div>
    //     <div>Welcome Abhinav</div>
    //     <div>Welcome Guest</div>
    //   </div>

      
    // )
    //Acheiving it with if else statement:
    // if(this.state.isLoggedIn){
    //     return (<div>Welcome Abhinav</div>);
    //   }
    //   else{
    //     return (<div>Welcome guest!</div>)
    //   }

      //Using variables to conditionally render
    //   let message;
    //   if(this.state.isLoggedIn){
    //     message=<div>Welcome Abhinav</div>
    //   }
    //   else{
    //     message=<div>Welcome Guest!</div>;
    //   }
    //   return <div>{message}</div>;


    //Using ternary operators.
    // return this.state.isLoggedIn?<div>Welcome Abhinav</div>:<div>Welcome Guest!</div>;



    // Using short circuit operator
    //Either display something or nothing.
    //If the first part is true only then the second part is returned else nothing is returned.
    return this.state.isLoggedIn && <div>Welcome Abhinav</div>
  }
}

export default ConditionalRendering