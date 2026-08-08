import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
import "../styles/UseCallback.css";

const UseCallback = () => {

    const [counter1, setCounter1] = useState(11);
    const [counter2, setCounter2] = useState(22);

// function IncrementCounter2 () {
//   setCounter2(counter2 + 1) 
// }

const  IncrementCounter2 =useCallback(()=> 
  {setCounter2(counter2 + 1)},
 [counter2]);

    return (
        <div  className="usecallback-page">
            <h1>Counter 1 - {counter1}</h1>

            <button onClick={() => setCounter1(counter1 + 1)}>
                Counter 1 +
            </button>

       
        <ChildComponent  counter2={counter2} 
        IncrementCounter2 = {IncrementCounter2}/>

        </div>
    );
};

export default UseCallback;