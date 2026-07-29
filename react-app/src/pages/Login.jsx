// import React from "react";
// import "../styles/Login.css";
// import { useNavigate } from "react-router";

// const Login= ()=>{



// function checkUser() {

//     // alert("Hello")

// const user =false;

// if(user){
// alert("Login Successful.")
// navigate("/");

// }else{
// alert("Login failed.")
// navigate("/register");
// }




// }
// const navigate =useNavigate()


// return(

// <div className="login-page">
     
//       <h1>Login</h1>

// <button className="login-btn" onClick={checkUser}>Login</button>

// </div>
// );

// }
// export default Login;









import React, { useState } from "react";
import "../styles/Login.css";

const Login= ()=>{
const [loginData,setLoginData] = useState({email:"",password:""});
console.log(loginData,"loginData")
const handlechange= (event)=>{ 

// console.log(event.target.value, "value");
//  console.log(event.target.name, "name");

setLoginData( {...loginData ,[event.target.name] :event.target.value} );



};

// const data ={email:"shivanie@gmail.com",password:"password@123"}
// data.email
// data["email"]


const handleSubmit=(event)=> {


    event.preventDefault()
    alert ("submitted");
    if(loginData.password.length < 8 ){
        
    }
};



    return(

<div className="login-page">
     
      <h1>Login</h1>
<form onSubmit={handleSubmit}>  

<label>Email : </label><br/>

<input  onChange={handlechange}  type ="email" name="email"/><br/>


<label>Password : </label><br/>

<input onChange={handlechange} type ="password"  name="password"/><br/>





<input type ="Submit"/><br/>

</form>



</div>
);
    

}

export default Login;
