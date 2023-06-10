import React,{Component} from "react";
// How to set state in class based component:
//Declare state as class variable in our class:
//this.state={message: "Abhinav"};
//If we want to change state we can just do this.setState({message: "This is changed state"});
class UsingComponentState extends Component{
    count=1;
    constructor(){
        super();
        // As we are inside a class hence we have to use this.state.
        this.state={
            // We are initializing welcome visitor here as the state message
             message: 'Welcome visitor'
        };
    }
    render(){
        return (
            <div>
            {/* We can use this state in our component */}
            <h1>{this.state.message}</h1>
             {/* We are adding a button also to change text. */}
            <p>
            <button onClick={()=>this.buttonClickEvent()}>Subscribe</button>
            </p>
            </div>
        );
    }
    buttonClickEvent(){
        // This setState method can change the state, in the set state we pass the updated object we want to set state 
        this.setState({
            message: 'We have changed the text'
        });
        console.log("Button is clicked", this.count++);
    }

}

export default UsingComponentState;