import React from "react"
import facebook from "../images/fbLogo.png" 
import twitter from "../images/twLogo.png" 
import instagram from "../images/instaLogo.png" 
import github from "../images/ghLogo.png" 

function Footer(){
    return (
        <div className="footer-element">
            <img src={facebook} alt="Facebook Icon" />
            <img src={twitter} alt="Twitter Icon" />
            <img src={instagram} alt="Instagram Icon" />
            <img src={github} alt="GitHub Icon" />
        </div>
    )
}

export default Footer