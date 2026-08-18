// import React from "react";

import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router";
import api from "../components/config/axiosConfig";
import {toast} from "react-hot-toast";




const Register= ()=>{
const [userName,setUserName] = useState("");
const Navigate = useNavigate();

console.log(userName,"userName");
const [userEmail,setUserEmail] = useState("");
console.log(userEmail,"userEmail");
const [userPassword,setUserPassword] = useState("");
console.log(userPassword,"userPassword");
const [userConfirmedPassword,setUserConfirmedPassword] = useState("");
console.log(userConfirmedPassword,"userConfirmedPassword");


function handleChange(event){
console.log(event.target.value, "- user typed value");
console.log(event.target.name, "- user typed value");
}



async function handleSubmit(event) {
    event.preventDefault();

    if (userConfirmedPassword != userPassword) {
        return toast.error("password and confirm password are not same");
    }

    try {
        const response = await api.post(
            "/auth/register",
            {
                username: userName,
                useremail: userEmail,
                userPassword: userPassword
            }
        );

        if (response.data.success == true) {
            toast.success("Registration Successful.");
            Navigate("/login");
        }
    }
    catch (error) {
        console.log(error, "error");
    }
}





























return(

<div  className="register-page" >


 <form onSubmit = {handleSubmit }  >

       {/* <h1>Register</h1> */}


    <label>Name: </label>
 
 <input type="name" 
 onChange={(event)=>setUserName(event.target.value)} 
 name="name"/>

 {/* <input type="text" value={userName} onChange={handleChange} */}

<br/>



<label>Email: </label>
 
 <input type="email" 
  onChange={(event)=>setUserEmail(event.target.value)}
   name="email" />
 <br/>




<label>Password: </label>
 
 <input type="password"
  onChange={(event)=>setUserPassword(event.target.value)}
  name="password" />
<br/>



<label>Confirmed Password:</label>

<input
  type="password"
  onChange={(event) => setUserConfirmedPassword(event.target.value)}
  name="confirmedPassword"
/><br/>

<input type="submit" />  
<br/>


 </form>






</div>
)

}
export default Register;