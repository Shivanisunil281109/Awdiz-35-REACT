import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";
import "../styles/ReduxCounter.css";

const ReduxCounter = () => {
const counterValue = useSelector ((state)=> state.counter.value);
 const dispatch = useDispatch();


  return (
    <div  className='redux-counter'>

     <h1> Counter from Redux : {counterValue} </h1> 

<button onClick={()=>dispatch(increment())}> +</button>
<button onClick={()=>dispatch(decrement())}> -</button>
<button onClick={()=>dispatch(reset())}> Reset</button>


    </div>
  )
}

export default ReduxCounter;
