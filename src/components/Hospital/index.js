import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const  Hospital = () => {
    return (
        <>
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
                <form >
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
                  </div>
                </form>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href={"/forgot"}>Forgot Password?</a>
                </div>
              </div>
              <form >
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
                  <form action="/action_page.php" className="group">
                    <label htmlFor="cars">Choose :</label>
                    <select className="button">
                      <option value="Hospital">Hospital</option>
                      <option value="User">User</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                    <br />
                    <br />
                  </form>
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
    )
}

export default Hospital
