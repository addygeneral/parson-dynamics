import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
function Header() {
    return (
        <nav className="header">
            <Link to="/">
            <img className="header_logo" src="pd/logo.png"
            alt= ""/>
            
            <img className="home_logo" src="pd/home button.png"
            alt= ""/>

            </Link>
           
            
        </nav>
    )
}

export default Header
