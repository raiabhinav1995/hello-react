function Difference(){
    return <div>
        <p>The difference between props and state is </p>
    <ul>
      <li>Props are passed to functions, whereas state is internal to function</li>
      <li>Props are analogous to function parameters whereas state is similar to variables defined inside a function</li>
      <li>Props are owned by the parent and the child cannot change whereas the state is owned by child and hence managed
        fully by child only
      </li>
      <li>
        Props are used by using props.key in  function based component and this.props in class based components.
        State are used by using useState hook in function based components and this.state in class based components.
      </li>
      <li>
        Compared to function based components class based components are more prevalent in react 
      </li>

    </ul>
    </div>;
}

export default Difference;