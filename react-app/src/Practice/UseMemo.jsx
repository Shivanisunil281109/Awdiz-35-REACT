import React, { useState } from "react";
import "../styles/UseMemo.css";


const UseMemo = () => {

   
    const [counter1, setCounter1] = useState(11);
const [counter2, setCounter2] = useState(22);


    const value = lengthyCalculations(counter1);



// const value = useMemo(
//     () => lengthyCalculations(counter1),
//     [counter1]
// );




    function increment() {
        setCounter1(counter1 + 1);
    }

    return (


     <div className="useMemo-page">

            <h2>Value - {value}</h2>

            <h1>Counter 1 : {counter1}</h1>

            <button onClick={increment}>+</button>

  <h2>Counter 2 : {counter2}</h2>
<button onClick={() => setCounter2(counter2 + 1)}>+</button>

            </div>
    );
};

function lengthyCalculations(counter) {
    console.log("RE-CALCULATING...");
    for (let i = 0; i < 100000000; i++) {
        
    }

    return counter;
}

 export default UseMemo;