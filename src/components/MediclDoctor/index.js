import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./style.css";

const Doctor = () => {
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const AddUPatient = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/newfilemodel`, {
        pharmaceutical: e.target.pharmaceutical.value,
        patientscondition: e.target.patientscondition.value,
        desc: e.target.desc.value,
        user: "61c9773f51adae120e611aea",
        DoctorId: "61c975d351adae120e611ade",
      });
      console.log(result.data);
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

  useEffect(() => {
    AddUsewr();
  }, []);
  return (
    <>
      <div>
        <div className="container">
          <form className="contact" action method="post" onSubmit={AddUPatient}>
            <h3>JOb ADDD Survey Form</h3>
            <div className="col50 colleft">
              <div className="col50 colleft">
                <div className="wd50">
                  <label name>Patient name</label>
                  <input
                    placeholder="Patient name"
                    name="user"
                    type="text"
                    required
                    autofocus
                  />
                </div>
                <div className="wd50">
                  <label name>pharmaceutical</label>
                  <input
                    placeholder="pharmaceutical"
                    type="text"
                    name="pharmaceutical"
                    required
                  />
                </div>
              </div>
              <div className="col50 colright">
                <div className="wd50">
                  <label name> patientscondition</label>
                  <input
                   name="patientscondition"
                    placeholder=" patientscondition"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col50 colright">
              <div className="col50 colleft">
                <div className="wd50">
                  <label name>DoctorId</label>
                  <input placeholder="DoctorId"  name="DoctorId" type="img" />
                </div>
              </div>
              <div className="col50 colright">
                <div className="wd50">
                  <label name>desc</label>
                  <input placeholder="Clinic visited" type="text" name="desc" required />
                </div>
              </div>
            </div>
            <div className="wd100">
              <hr />
            </div>

            <div className="wd100">
              <button name="submit" type="submit" id data-submit="...Sending">
                Submit
              </button>
            </div>
          </form>
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

export default Doctor;
