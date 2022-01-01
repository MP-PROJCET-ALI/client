import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterDoctor = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const [user, setUser] = useState([]);

  useEffect(() => {
      console.log(loc.state.doctorId);
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
  }, []);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.put(`${BASE_URL}/editdoctor/${loc.state.doctorId}`, {
        fullName: e.target.username.value,
        email: e.target.email.value,
        password: e.target.Password1a.value,
        phone: e.target.phone.value,
      });
console.log(result.data);
      if (result.data.fullName) {
          navigate("/login");
      }
    } catch (error) {
        alert('wrong registeration info')
      console.log(error);
    }
  };

  return (
    <>
    
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab-1" className="sign-up" />
          <label htmlFor="tab-1" className="tab">
            Sign Up
          </label>
          <div className="login-form">
           
            <form onSubmit={signup}>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    name="username"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    name="Password1a"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                  phone
                  </label>
                  <input
                    id="user"
                    name="phone"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" className="input" name="email" />
                </div>
           

                <div className="group">
                  <button placeholder="send" className="button" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="hr" />
                
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default RegisterDoctor;
