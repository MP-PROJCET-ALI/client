import React from 'react'
import './style.css'
import NAVBAR from "../Navbar";

const About = () => {
    return (
       <>
           <NAVBAR/>

      <div className="about-section">
      <div className="inner-container">
        <h1>About Us</h1>
        <p className="text">
        The HCSHM website is specialized in facilitating the transfer of personal data from one hospital to another, which makes it easier to work and speeds up the pace of work.
        </p>
     
      </div>
    </div>
    </>
    )
}

export default About
