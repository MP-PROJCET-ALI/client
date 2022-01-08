import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

import NAVBAR from "../Navbar";
import Swal from "sweetalert2";

// console.log(process.env.REACT_APP_BASE_URL);
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [option, setOption] = useState("in");

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
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      } else {
        Swal.fire("Please make sure your password and email");
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
      <NAVBAR />
      <section className="section-login home-section section-medical-doctor">
        <div className="medical-doctor-froms">
          <div className="form-options">
            <button
              className={`${
                option.includes("in") ? "btn-active" : "btn-not-active"
              }`}
              onClick={() => setOption("in")}
            >
              Sign in
            </button>
            <button
              className={`${
                option.includes("up") ? "btn-active" : "btn-not-active"
              }`}
              onClick={() => setOption("up")}
            >
              Sign up
            </button>
          </div>
          <div>
            {option.includes("in") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={login}
              >
                <label name>email</label>
                <input
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                  required
                  autoFocus
                />

                <label name>Password</label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  required
                />

                <button
                  name="submit"
                  type="submit"
                  // id
                  // data-submit="...Sending"
                >
                  Sign In
                </button>
                <div>
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
                <div>
                  <label className="ary_you">Are you a Doctor ?</label>
                  <a
                    onClick={() => navigate("/Doctorid")}
                    type="submit"
                    className="button"
                  >
                    Sign up here
                  </a>
                </div>

                <a href={"/forgot"} className="ary_you">
                  Forgot Password?
                </a>

                <p>{err}</p>
                <label className="ary_you">Are you a Doctor ?</label>
                <button
                  onClick={() => navigate("/Doctorid")}
                  type="submit"
                  className="button"
                >
                  Sign up here
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
          <div>
            {option.includes("up") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={login}
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
                <div>
                  <label className="ary_you">Choose :</label>
                  <select className="button" name="role">
                    <option value="61c4981620623279b6c0768a">Hospital</option>
                    <option value="61c46c8e02f5af6c49d02a17 ">User</option>
                  </select>
                </div>

                <button
                  name="submit"
                  type="submit"
                  // id
                  // data-submit="...Sending"
                >
                  Sign Up
                </button>
                <label htmlFor="tab-1">Already Member?</label>
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

export default Login;
