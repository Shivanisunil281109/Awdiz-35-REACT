import { useState } from "react";
import "../styles/UseState.css";

function UseState(){
console.log("component rederering.")




// const [current value, function] =useState(initial value0)
// const [current value, function to update state] =useState(initial value0)    
const[counter, setCounter]= useState(1);
function increment(){
// setCounter((value)=> counter+1);
setCounter(counter+1);

if(counter<10){
    setCounter(counter+1);
} else{
    alert("Not more than 10")
}




// alert("Increment function called.");

}

function decrement(){
    // alert("Decrement function called.");
    setCounter(counter-1);

if(counter>1){
 setCounter(counter-1);
}else{
alert("Not less than 1")
}


};





function reset(){
    setCounter(1);
    // alert("Reset function called.");
}




return(

    <div className="counter-page">

      <h1>Counter = {counter}</h1>

      


      <div className="btn-container">


  <button onClick={increment}>+</button>
 
    <button onClick={decrement}>-</button>



  <button onClick={reset}>Reset</button>

</div>






    </div>

);



}
 export default UseState;