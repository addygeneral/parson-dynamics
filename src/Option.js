import React from 'react'
import "./Option.css";
function Option({image, title, detail}) {
    return (
        <div className="home_option">

            <div className="option">
                <div className="option_pic">
                <img src={image} alt="" />
                </div>
             

            <div className="option_info">
            <h3>{title}</h3>
            <p>{detail}</p>
                
            </div>
           
            
        </div>
        </div>

        
    )
}

export default Option
