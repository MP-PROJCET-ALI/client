import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./style.css";

const DoctorId = () => {
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.get(`${BASE_URL}/checkdoctor/${result._id}`, {
        

      });
      console.log(result._id,'1111111111111111111');
      console.log(result.data,'2222222222222222222');

      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setErr(result.data.errors[0].msg);
      } else if (result.data.message) {
        setErr(result.data.message);
        //   navigate("/login");
        // if error set it to the useState and print it in the page
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  const AddUsewr = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.put(`${BASE_URL}/editdoctor`, {
        fullName: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password2: e.target.password2.value,
        patientId: e.target.patientId.value,
        role: "61c46c8e02f5af6c49d02a17",
      });
      console.log(result.data);

      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setErr(result.data.errors[0].msg);
      } else if (result.data.message) {
        setErr(result.data.message);
        //   navigate("/login");
        // if error set it to the useState and print it in the page
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            DoctorId
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab"></label>
          <div className="login-form">
            <div className="sign-in-htm">
              <form onChange={signup}>
                <div className="group" name="email">
                  <label htmlFor="email" className="label">
                    Id
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
                  <button
                    type="submit"
                    className="button"
                    defaultValue="Sign In"
                  >
                    Login
                  </button>
                </div>
                <p>{err}</p>
              </form>
              <div className="hr" />
              <div className="foot-lnk">
                <a href={"/forgot"}>Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-7" type="radio" name="tab-7" className="sign-up" />
            <label htmlFor="tab-7" className="tab">
              patient
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <form>
                  <div className="group" name="email">
                    <label htmlFor="email" className="label">
                      email
                    </label>
                    <input
                      id="user"
                      type="text"
                      name="email"
                      className="input"
                    />
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
                  </div>
                </form>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href={"/forgot"}>Forgot Password?</a>
                </div>
              </div>
              <form onSubmit={AddUsewr}>
                <div className="sign-up-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      NewUsername
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
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      name="email"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      patientId
                    </label>
                    <input
                      id="pass"
                      name="patientId"
                      type="patientId"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <button placeholder="send" className="button">
                      Sign Up
                    </button>
                  </div>
                  <div className="hr" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DoctorId;
