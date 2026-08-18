import "../styles/Home.css";
import toast from "react-hot-toast";

function Home(){
const isUserLoggedIN = false;
if( isUserLoggedIN){

return<h1> Logged in Successful.</h1>


}


const isAdmin =false;


return (
    <div> 
{ isAdmin && <h1> Please login With admin Panel.</h1>}

    {<h1 className="home-heading">Please Login.  </h1> }

<button
    className="toast-btn"
    onClick={() => toast.success("Hello")}
>
    Toast
</button>


</div>

);

}
export default Home;