import logo from './logo.svg';
import './App.css';
import PropsBasic from './PropsBasic';
import ClassBasedComponent from './ClassBasedComponent';
import Difference from './dfference';
import UsingComponentState from './UsingComponentState';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import ConditionalRendering from './ConditionalRendering';
import RenderingList from './RenderingList';

function App() {
  return <div>
    {/* <PropsBasic/>
    <p>Similar to our function we just render our class based component:</p>
    <ClassBasedComponent name="Abhinav"/>
    <p>But in a class based component we don`t have access to props so how to access props?
      <h4>Can we pass props?</h4>
      <h4>Yesss!!!</h4>
      <h4>Then how do I access in class based component??</h4>
      <h4>Using this.props, this allows us to access values passed via props</h4>
      <h2>Note: Under any circumstances we cannot change props passed to a function. But this raises a new question if props
        are immutable then how do change variables related to a component
      </h2>

      <p>Till now we have saw only one way to pass data to child components, but there has to be other way to do it right because
        props cannot be modified. So what is the other way?
        <p><strong>That would be state, but what the heck is state anyways?</strong></p>
        <Difference/>
      </p>
      <h3>Using our class based component in our file, we are also using state here</h3>
      <UsingComponentState/>
      <Counter/>

      <p>Events happen in our application when user interacts with our application like <strong>Keypress, click, change</strong></p>
    <p>In case of an event our application should handle the functionality</p> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <ConditionalRendering/> */}
    <RenderingList/>
    {/* </p> */}
  </div>;
}

export default App;