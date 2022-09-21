import React, { useState } from "react";

function Counter() {
    const [arr, setArr] = useState([])
    // - Obejects = setObj(newObj); setObj(prevObj => ({...prevObj, quantity: prevObj.quantity + 1}))
    // - Arrays = setArr(newArr); setArr(prevArr => ({...prevArr, 5}))
    function addPlus() {
        setArr(prevArr => [ ...prevArr, '+'])
    }

    function addMinus() {
        setArr(prevArr => [ ...prevArr, '-'])
    }

    // - Numbers = setNum(10); to add 10 from previous number USE a callback; setNum(prevNum => prevNum + 10)
    // - Booleans = setBool(true); to set it top false use '!' MEANING OPPOSITE; setBool(prevBool => !prevBool)
    // - Strings = setStr('Frontend'); setStr(prevStr => prevStr = 'Simplified')

  return (
    <div>
      <button onClick={addMinus} >-</button>
      <button onClick={addPlus} >+</button>
      {arr.toString()}
    </div>
  );
}

export default Counter;
