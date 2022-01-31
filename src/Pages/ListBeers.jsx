import React, {useState, useEffect} from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import header from "../assets/home-header.png";
import axios from "axios";

const ListBeers = () => {
    const [beers, setBeers]=useState([]);

    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(({data}) => {
            console.log(data)
            setBeers(data)
        })
        .catch((e) => console.log(e))
    }, [])

    return(
    <>
        <header> <NavLink to="/"><img src={header} alt="header"/></NavLink></header>

        <Outlet/>

        {beers.map((beer) => {
            return (
                <div>
                <img src={beer.image_url} alt="can't see it but it's fresh"/>
                  <Link to={beer._id}>  <h2> {beer.name}</h2> </Link>
                    <h3> {beer.tagline}</h3>
                    <p> Created by : {beer.contributed_by}</p>
                </div>
            )
        })}
    </>
    )
}

export default ListBeers