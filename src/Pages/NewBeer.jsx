import React from "react";
import { Link, NavLink } from "react-router-dom";
import header from "../assets/home-header.png"

const NewBeer = () => {
    return(
        <>
            <header> <NavLink to="/"><img src={header} alt="header"/></NavLink></header>
        </>
        )


}

export default NewBeer