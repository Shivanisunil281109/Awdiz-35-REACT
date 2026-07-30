import React, { useEffect, useState } from "react";
import "../styles/UseEffect.css";

const UseEffect = () => {

    const [counter, setCounter] = useState(1);
     const [counter2, setCounter2] = useState(1);


    // function getData() {
    //     console.log("Function");
    // }

    // getData();




// 4 useEffect scenarios

    useEffect(() => {
        console.log("UseEffect");
    });


//  useEffect(() => {
//         console.log("UseEffect");
//     },[]);


//  useEffect(() => {
//         console.log("UseEffect");
//     },[counter2,counter]);



//  useEffect(() => {
//         console.log("UseEffect");
//     },[counter2]);




    return (
        <div className="useeffect-page">
            <h1>Counter {counter}</h1>

             <button onClick={() => setCounter(counter + 1)}>
            +
        </button>

       <h1>Counter 2 {counter2}</h1>
         <button onClick={() => setCounter2(counter2   +   1)}>
            +
        </button>


        </div>
    );
};
export default UseEffect;