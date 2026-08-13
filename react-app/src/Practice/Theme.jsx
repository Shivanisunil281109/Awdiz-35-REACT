import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/Theme.css";

const Theme = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (


        <div className={`theme-page ${theme}`}>

            <div className="theme-card">

       <h1>Current Theme : {theme}</h1>


     <div className="theme-buttons">

         <button onClick={() => setTheme("light")}>
                        Light
                    </button>

    <button onClick={() => setTheme("dark")}>
                        Dark
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Theme;