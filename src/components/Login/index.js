import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import NAVBAR from "../Navbar";
import Swal from "sweetalert2"

// console.log(process.env.REACT_APP_BASE_URL);
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");


  const login = async (e) => {
    console.log(e.target.email.value);
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      });
     
      if (result.data.result) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      } else {
        Swal.fire('Please make sure your password and email')
        setErr(result.data);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (e) => {
    // console.log(e.target.email.value);
    try {
      // prevent default to tell form to not refresh the page when submitted
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/resgister`, {
        // send the body to our backend register endpoint
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.Password1a.value,
        password2: e.target.passwordaa2.value,
        role: e.target.role.value,
      });

      // if register is successful navigate to login page g
      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setErr(result.data.errors[0].msg);
      } else if (result.data.message) {
        setErr(result.data.message);
        navigate("/login");
        console.log(result.data.errors[0].msg);

        // if error set it to the useState and print it in the page
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Doctorid = () => {
    navigate("/Doctorid");
  };
  return (
    <>
    <NAVBAR/>
      <div className="login-wrap">
        <div className="login-html">
        
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <form onSubmit={login}>
                <div className="group" name="email">
                  <label htmlFor="email" className="label">
                    email
                  </label>
                  <input id="user" type="text" name="email" className="input" />
                </div>

                <div className="group" name="password">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    name="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <span className="icon" /> Keep me Signed in
                  </label>
                </div>

                <div className="group">
                  <button
                    type="submit"
                    className="button"
                    defaultValue="Sign In"
                  >
                    Login
                  </button>
                  <p>{err}</p>
                </div>
              </form>
              <div className="group">
              <label>Are you a doctor?</label>
          <button onClick={() => navigate("/Doctorid")}  type="submit"
                    className="button" >Sign up here</button>
          </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href={"/forgot"}>Forgot Password?</a>
              </div>
            </div>
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
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    name="passwordaa2"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" className="input" name="email" />
                </div>
                <div className="group">
                  <label>Choose :</label>
                  <select className="button" name="role">
                    <option value="61c4981620623279b6c0768a">Hospital</option>
                    <option value="61c46c8e02f5af6c49d02a17 ">User</option>
                    <option value="61c4983a20623279b6c0768c">
                      Doctor
                    </option>
                  </select>
                  <br />
                  <br />
                </div>

                <div className="group">
                  <button placeholder="send" className="button">
                    Sign Up
                  </button>
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Login;
