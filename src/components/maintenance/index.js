import React from "react";
import "./index.css";
import logo from "../../img/logoW.png";
import AnimacionConfetti from "../../img/animationConfetti.gif"
function Maintenance(){
    return(
        <>
            <div className="bgWelcome">
                <img src={AnimacionConfetti} className="AnimacionConfetti" alt="logo"/>
                <img src={logo} className="logoWelcome" alt="logo"/>
                <h1 className="textWelcome">Launching soon!</h1>
            </div>
 
        </>

        
    )

}
export default Maintenance;