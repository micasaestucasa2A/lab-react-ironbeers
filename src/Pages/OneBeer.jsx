import React from "react";
import {NavLink } from "react-router-dom";
import header from "../assets/home-header.png"
import { useParams } from "react-router-dom";

const OneBeer = (props) => {
const params = useParams()
console.log ( " LES PARA MAITRES", params)
    const thisBeer = props.beers.find((beer) => beer.id === (params.id))

    console.log(thisBeer)

    return (
        <>
            <header> <NavLink to="/"> <img src={header} alt="header"/> </NavLink></header>
        </>
        )
}

export default OneBeer