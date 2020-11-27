import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <nav className="footer">

            <div className="link_footer">
                <div className="col">
                    <h1>Links</h1>
                     <p>first link</p>
                     <p>second link</p>
                     <p>third link</p>
                </div>

                <div className="col">
                    <h1>Links</h1>
                     <p>first link</p>
                     <p>second link</p>
                     <p>third link</p>
                </div>

                <div className="col">
                    <h1>Links</h1>
                     <p>first link</p>
                     <p>second link</p>
                     <p>third link</p>
                </div>
            </div>
            <Link to="/">
            <img className="footer_logo" src="pd/logo.png"
            alt= ""/>
            </Link>

            <img className="footer_img" src="pd/bg.jpg"
            alt= ""/>
            
         
        
        </nav>
    )
}

export default Footer
