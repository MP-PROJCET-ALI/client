import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
const DoctorId = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState("in");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/checkdoctor`, {
        id: e.target.DoctorId.value,
      });
      console.log(result.data);
      if (result.data.DoctorId) {
        navigate("/register_doctor", {
          state: { doctorId: e.target.DoctorId.value },
        });
      }
    } catch (error) {
      if (error) {
        Swal.fire("ID is wrong please check");
      }
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
      const result = await axios.post(`${BASE_URL}/adduser`, {
        fullName: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        docID: "12345",
        patientId: e.target.patientId.value,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="section-login home-section section-medical-doctor">
        <div className="medical-doctor-froms">
          <div className="form-options"></div>
          <div>
            {option.includes("in") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={signup}
              >
                <label name>Doctor Id</label>
                <input
                  placeholder="number ID"
                  name="DoctorId"
                  type="ID"
                  required
                  autoFocus
                />

                <button name="submit" type="submit">
                  Sign In
                </button>
                <div></div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      );
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

                  <div className="group">
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
                      Patient username
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
                      name="password"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      phone{" "}
                    </label>
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      name="phone"
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
                    <button placeholder="send" className="button" type="submit">
                      Add patient
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
