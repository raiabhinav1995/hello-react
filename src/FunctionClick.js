import React from 'react'

function FunctionClick() {
    //React events are in camelcase rather than lowercase
  return (
   <>
   {/* Note that here we are not having call function but only the reference to the function, we should not write clickHandler() */}
    <div><button onClick={clickHandler}>Click</button></div>
    </>
  )
  function clickHandler(){
    console.log('Button clicked');
  }
}

export default FunctionClick