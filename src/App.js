import logo from './logo.svg';
import './App.css';
import PropsBasic from './PropsBasic';
import ClassBasedComponent from './ClassBasedComponent';
function App() {
  return <div>
    <PropsBasic/>
    <p>Similar to our function we just render our class based component:</p>
    <ClassBasedComponent name="Abhinav"/>
    <p>But in a class based component we don`t have access to props so how to access props?
      <h4>Can we pass props?</h4>
      <h4>Yesss!!!</h4>
      <h4>Then how do I access in class based component??</h4>
      <h4>Using this.props, this allows us to access values passed via props</h4>
    </p>
  </div>;
}

export default App;