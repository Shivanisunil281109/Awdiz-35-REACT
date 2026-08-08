import "../styles/Home.css";


function Home(){
const isUserLoggedIN = true;
if( isUserLoggedIN){

return<h1> Logged in Successful.</h1>
}




const isAdmin =false;


return (
    <div> 
{ isAdmin && <h1> Please login With admin Panel.</h1>}

    {<h1 className="home-heading">Please Login.  </h1> }

</div>

);


}
export default Home;