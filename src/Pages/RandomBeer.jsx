import React from "react";
import {NavLink } from "react-router-dom";
import header from "../assets/home-header.png"

const RandomBeer = () => {
    
    return(
        <>
            <header> <NavLink to="/"> <img src={header} alt="header"/> </NavLink> </header>
        </>
        )

}

export default RandomBeer