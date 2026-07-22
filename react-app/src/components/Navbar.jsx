import React from "react";
import {Link} from "react-router";

import "../styles/Navbar.css";


 const Navbar = () => {
return(

<div className="Navbarstyle">

      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>

)



 }

 export default Navbar;
