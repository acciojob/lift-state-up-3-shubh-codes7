
import React, {useState} from "react";
import './../styles/App.css';

const ChildComponent2 = ({setSelectedOption}) => {

    function handleClick(){
        setSelectedOption('Option 2')
    }

  return (
    <div className="child">
        <h1>Child Component 2</h1>
        <button onClick={handleClick}>Option 2</button>
    </div>
  )
}

export default ChildComponent2