
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import dbatuLogo from "./assets/dbatu.logo.png";
import profile from "./assets/profile.jpeg";

function App() {
  return (
    <div className="container">

    <div className="id-card">

    <div className="header">

      <div className="logo">

            <img src={dbatuLogo} alt="DBATU Logo" />

         </div>

          <div className="header-text">

            <h5>Government of Maharashtra</h5>
<h6>
  Established Vide Act No. Maharashtra Act XXIX of 2014
</h6>
             <h2>
      Dr. Babasaheb Ambedkar <br />
      Technological University
    </h2>

            <p>
              "Vidhyavihar", Lonere 402103 Dist. Raigad (MS)
            </p>

          </div>

        </div>










<div className="course">

    <h3>B. Tech in Information Technology</h3>

</div>



<div className="photo-section">

  <img src={profile} alt="Profile" />


</div>



<div className="student-details">

    <h2>SHIVANI SUNIL SONAWANE</h2>

    <h3>2230331246042</h3>

</div>











{/* Footer */}

<div className="footer">

  

  <div className="website">

    <h3>www.dbatu.ac.in</h3>

  </div>

</div>



      </div>






    </div>




  );
}

export default App;

