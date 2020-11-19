import React from 'react';
import Option from "./Option";
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="home">
             <img className="home_banner" src="/pd/architecture-astronomy-bright-building-267625.jpg"
            alt= ""/>
            <div className="ind_text">
            <h1>Industry Redesign</h1>
            </div>
            
        <div className="home_row">
            <div className="box">
            <Link to="/option1" style={{ textDecoration: 'none' }}> 
        <Option 
            image="pd/two-man-holding-white-paper-1216589.jpg"
            title="Option 1"
            detail="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       
       />
        </Link>
        </div>

        <div className="box">
        <Link to="/option2" style={{ textDecoration: 'none' }}>
        <Option 
            image="/pd/red-cylindrical-metal-9333.jpg"
            title="Option 2"
            detail="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       
       />
        </Link>
        </div>

        <div className="box">
        <Link to="/option3" style={{ textDecoration: 'none' }}>
        <Option 
            image="/pd/high-angle-view-of-a-man-256381.jpg"
            title="Option 3"
            detail="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       
       />
       </Link>
            </div>
          
        </div>
       
        </div>
    )
}

export default Home
