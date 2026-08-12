import React, {useRef, useState } from 'react'
import "../styles/UseRef.css";

const UseRef = () => {
    const [Counter,setCounter]=useState(1);
    console.log("Counter",Counter);
const counter2=useRef(22);
console.log(counter2,"counter2F")

  return (

    < div className="UseRef-page">
      <h1>Ref counter : {counter2.current} </h1>
<button onClick={()=>counter2.current++}>+ </button>

      <h1> Counter : {Counter} </h1>
     <button onClick={() => setCounter(Counter + 1)}> +</button>
    </div>

  )
}

export default UseRef;
