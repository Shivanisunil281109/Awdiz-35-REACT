import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router";

const Login= ()=>{



function checkUser() {

    // alert("Hello")

const user =false;

if(user){
alert("Login Successful.")
navigate("/");

}else{
alert("Login failed.")
navigate("/register");
}




}
const navigate =useNavigate()


return(

<div className="login-page">
     
      <h1>Login</h1>

<button className="login-btn" onClick={checkUser}>Login</button>

</div>
);

}
export default Login;