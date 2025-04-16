
import React, {useState} from "react";
import './../styles/App.css';

const ChildComponent1 = ({setSelectedOption}) => {

    function handleClick(){
        setSelectedOption('Option 1')
    }
  return (
    <div className="child">
        <h1>Child Component 1</h1>
        <button onClick={handleClick}>Option 1</button>
    </div>
  )
}

export default ChildComponent1