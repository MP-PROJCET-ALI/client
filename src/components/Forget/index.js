import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NAVBAR from "../Navbar";
import { GrLogin } from "react-icons/gr";

const Forget = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const reset = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/forgott`, {
        email: e.target.email.value,
      });
      console.log(result.data);
      if (result.data.success) {
        setErr(result.data.success);
      }
      if (result.data.errors[0].msg) {
        setErr(result.data.errors[0].msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <NAVBAR/>

    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-5"
          type="radio"
          name="tab-5"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-5" className="tab">
          <h1>Why did you forget :(</h1>
        </label>
        <input id="tab-2" type="radio" name="DoctorId" className="sign-up" />
        <label htmlFor="tab-2" className="tab"></label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={reset}>
              <div className="group" name="email">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input id="user" type="text" name="email" className="input" />
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
                <button type="submit" className="button" defaultValue="Send">
                  Send
                </button>
              </div>
              <p>{err}</p>
              <h3
                onClick={() => {
                  navigate("/login");
                }}
              >
               <GrLogin/>
              </h3>
            </form>
            <div className="hr" />
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Forget;
