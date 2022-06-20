import React from 'react'


function Navbar(){
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}

export default Navbar