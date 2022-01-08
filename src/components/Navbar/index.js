import React, { useEffect, useState } from "react";
import img1 from "../../imge/logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

// navbar//
const NAVBAR = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <header className="navbar-header">
      <div className="grid-nav">
        <img src={img1} className="logo" />
        <div className="routes">
          <ul className="route-list">
            <li className="list-nav">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

            <li className="list-nav">
              <Link to="/About" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              {user ? (
                <>
                  <li className="list-nav">
                    <Link to="/Profile" className="navbar-link">
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </li>
            {user?.result?.role == "61c46c8e02f5af6c49d02a17" ||
            user?.result?.role == "61c4983a20623279b6c0768c" ? (
              <>
                <li className="list-nav">
                  <Link to="/Medicalfile" className="navbar-link">
                    Medical
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {user?.result?.role == "61c4983a20623279b6c0768c" ? (
              <>
                <li className="list-nav">
                  <Link to="/MediclDoctor" className="navbar-link">
                    Medical Doctor
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {user?.result?.role == "61c4981620623279b6c0768a" ? (
              <>
                <li className="list-nav">
                  <Link to="/Hospital" className="navbar-link">
                    Hospital
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {user?.result?.role == "61c4660902f5af6c49d02a15" ? (
              <>
                <li className="list-nav">
                  <Link to="/ControlRoom" className="navbar-link">
                    Admin
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="account-icons">
          <ul className="icons-list">
            {user ? (
              <h1
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                  localStorage.removeItem("searched");
                }}
              >
                <BiLogOutCircle />
              </h1>
            ) : (
              <div className="GrLogin">
                <li>
                  <Link to={"/login"} className="login_nav">
                    {" "}
                    <AiOutlineLogin />
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NAVBAR;
