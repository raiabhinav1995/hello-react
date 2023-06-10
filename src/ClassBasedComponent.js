import React, {Component} from 'react';


class ClassBasedComponent extends Component{


    render(){


        return (

            <div>
                <h1>Hi I am just a class based Component</h1>
                
                
                <h1>This is the prop passed from parent : {this.props.name}</h1>
            </div>
        );
    }
}

export default ClassBasedComponent;