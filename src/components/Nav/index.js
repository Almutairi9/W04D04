import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 

const Nav = () => {
    return (
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About" >About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li> 
                <li>
                    <Link to="/Cards" >Cards</Link>
                </li>
            </ul>
    )
}
export default Nav; 