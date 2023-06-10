


function ReusableGreeting(props){
    //Here if we want we can destructure props in the function parameter like:

    // {name, any other values we want separated by comma} and these can be used in our function like normal variables.


    return <h1>{props.name}</h1>;
}

export default ReusableGreeting;