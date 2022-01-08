import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
const RegisterDoctor = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const [user, setUser] = useState([]);
  const [option, setOption] = useState("up");


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
        // alert('wrong registeration info')
        Swal.fire('Any fool can use a computer')
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-login home-section section-medical-doctor">
        <div className="medical-doctor-froms">
          
         
          <div>
            {option.includes("up") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={signup}
              >
                <label name>Username</label>
                <input
                  placeholder="Enter your username"
                  name="username"
                  type="text"
                  required
                  autoFocus
                />

                <label name>Password</label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="Password1a"
                  required
                />
                <label name>Repeat Password</label>
                <input
                  placeholder="Retype your password"
                  type="password"
                  name="passwordaa2"
                  required
                />
                <label name>Email Address</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  required
              />

                <button
                  name="submit"
                  type="submit"
                  // id
                  // data-submit="...Sending"
                >
                  Sign Up
                </button>
              
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    
      );
    </>
  );
};

export default RegisterDoctor;
