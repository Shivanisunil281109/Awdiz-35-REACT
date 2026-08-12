
import React, { useReducer } from "react";
 import "../styles/UseReducer.css";


function reducer (state,action){
    console.log(state,"state");
    console.log(action,"action");

    switch(action.type){
      
case "Increment":
        return{...state ,counter:state.counter+1};
       
case "Decrement":
          return {...state,counter:state.counter-1};
        
  case"Reset":
           return {...state,counter:1};
     
   
case"LOGIN":
           return {...state,User: action.payload};

case"LOGOUT":
           return {...state,User:null};





              //  counter2

case"Increment2":
        return{...state ,counter2:state.counter2 +1};

case "Decrement2":
          return {...state,counter2:state.counter2 -1};
         
 case"Reset2":
           return {...state,counter2:1};


           default:
             return state;
    } ;

  };




// return state;
// }


const initialState ={counter:1,counter2 :1,user:null};

const UseReducer =()=>{
const [state,dispatch] = useReducer(reducer,initialState)
console.log(state,"state");

  return (
    <div className="UseReducer-page">
        <h1> Counter 1 : {state.counter} </h1>
   <button onClick={()=> dispatch({type: "Increment",payload:"data"})}>      +</button>
    <button onClick={()=> dispatch({type: "Decrement"})}>     - </button>
     <button onClick={()=> dispatch({type: "Reset"})}>     Reset</button>




<h1> Counter 2 : {state.counter2} </h1>
   <button onClick={()=> dispatch({type: "Increment2"})}> +</button>
    <button onClick={()=> dispatch({type: "Decrement2"})}> - </button>
     <button onClick={()=> dispatch({type: "Reset2"})}> Reset</button>


    </div>
  )

};
export default UseReducer
