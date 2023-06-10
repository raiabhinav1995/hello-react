import Greet from './Greet';

import ReusableGreeting from './ReusableGreeting';

import RenderHtml from './RenderHtml';
function PropsBasic(){
    return (
        <div>
        <h1>Creating components in react</h1>
        <p>Creating components in react is super easy! Components can be created by just creating a function which returns JSX, JSX is javascript combined with XML. </p>
        // We have created a greet component, which just greets me, Hellow Abhinav! The file for that is greet.js.
    
        <h2>To render a component on our react application just do this:
    
    
          <p>Name of component in self closing tag.</p>
          <p>And don`t forget to export this component.</p>
    
        </h2>
        <p>Rendering the component:</p>
        <Greet/>
        <p>Also, please import this component or function from their file</p>
        <p>But, it isn`t fun with just wishing Abhinav, how cool it would be if I had the functionality to wish almost anyone. Good idea! we will get there.</p>
        <br></br>
        <br></br>
        <br></br>
        <h1>Making components reusbale in react</h1>
        <h2>In a react component we have the concept of props in all functions, in each function we can pass key value pairs and those can be used in the child component.</h2>
        <h3>Let us say I have a wishAll Components and it wants to wish 5 friends:
        <ul>
        <li>Raju</li>
        <li>Shyam</li>
        <li>Anuradha</li>
        <li>Babu bhaiya</li>
        <li>Halcat</li> 
        </ul>
    
        <p>But as just saw the current component only allowed us to print Hello Abhinav, to pass something else to the component <b>props</b>Come to our rescue, let us say I want to
        pass name to my component I would just pass an attribute to my component and that would be recieved as a prop</p>
    
        Actual code is: (I know the code won`t be visible on the UI but the result of that would be)
        <ReusableGreeting name="Raju"/>
        <ReusableGreeting name="Shyam"/>
        <ReusableGreeting name="Anuradha"/>
        <ReusableGreeting name="Babu bhaiya"/>
        <ReusableGreeting name="Halcat"/>
        </h3>

        <h1>But what if I want to return a nested HTML node, let us say I have a div and div has 10 children, or let`s say 
            a paragraph having 100`s of children. How to render those. Simple bring react to rescue. Just render props.children as
            a valid js and it will work just. I am placing the code to doing that. And as a content of React component we pass the HTML.
        </h1>
        <p>Hi I am custom Html</p>

        <p>Hello there I am custom HTML too!</p>
        <RenderHtml/>

        <p>If nothing is passed as children then props.children does nothing if there is html it gets rendered</p>



        </div>


    
      );
}
export default PropsBasic;