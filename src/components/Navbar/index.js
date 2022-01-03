import React, { useEffect, useState } from "react";
import img1 from "../../imge/logo-removebg-preview.png"
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "./style.css";
import {GrLogin} from 'react-icons/gr'
// navbar
const NAVBAR = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([])
useEffect(() => {
  setUser(JSON.parse(localStorage.getItem("user")));
},[])
  return (
    <header className="navbar-header">
      
      <div className="container">
        <div className="grid-nav">
          <h1 className="logo">
            
            <img src={img1} className="logo" />
          </h1>
          <div className="routes">
            <ul className="route-list">
              <li className="list-nav">
                <Link to="/">Home</Link>
              </li>
           
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
              {user? <><li>
              <Link to="/Profile">Profile</Link>
              </li></>:<></>}
                
              </li>
              
              {user? <><li>
                <Link to="/Medicalfile">Medical</Link>
              </li></>:<></>}
                
              
              {user?.result?.role=='61c4983a20623279b6c0768c'||user?.result?.role=='61c4660902f5af6c49d02a15'? <><li>
                <Link to="/MediclDoctor">MedicalDoctor</Link>
              </li></>:<></>}
              {user?.result?.role=='61c4981620623279b6c0768a'||user?.result?.role=='61c4660902f5af6c49d02a15'? <><li>
                <Link to="/Hospital">Hospital</Link>
              </li></>:<></>}
              {user?.result?.role=='61c4983a20623279b6c0768c'||user?.result?.role=='61c4660902f5af6c49d02a15'? <><li>
                <Link to="/ControlRoom">Admin</Link>
              </li></>:<></>}
            </ul>
          </div>
          <div className="account-icons">
            <ul className="icons-list">
              {user ? (
                <button className="logout-btn" onClick={()=>{localStorage.removeItem("user"); navigate("/login"); localStorage.removeItem("searched")}}><GrLogin/></button>
              ) : (
                <div className="GrLogin">
                <li >
                  <Link to={"/login"}> <GrLogin/></Link>
                </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default NAVBAR;