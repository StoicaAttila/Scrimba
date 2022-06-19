import React from "react"
import profilePic from "../images/AvatarMaker.png"
import mail from "../images/mail.png"

function Info(){
    return (
        <div className="info-els">
            <img src={profilePic} alt="My Profile Pic" className="image-el"/>
            <h1 className="name-el">Stoica Attila</h1>
            <h3 className="occupation">Student</h3>
            <button className="email-btn">
                <img src={mail} alt="Mail"/>
                Email
            </button>
        </div>
    )
}

export default Info