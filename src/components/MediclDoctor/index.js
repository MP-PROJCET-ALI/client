import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./style.css";
import NAVBAR from "../Navbar";

const Doctor = () => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const [option, setOption] = useState("Prescription");
  const [patients, setPatients] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  console.log(JSON.parse(localStorage.getItem("user")));

  const getPatientsForDoctor = async () => {
    console.log(JSON.parse(localStorage.getItem("user")).result.DoctorId);
    try {
      const result = await axios.post(
        `${BASE_URL}/gerusers/${
          JSON.parse(localStorage.getItem("user")).result.DoctorId
        }`
      );
      console.log(result.data[0]);
      setPatients(result.data[0].patients);
    } catch (error) {
      console.log(error);
    }
  };

  const AddUPatient = async (e) => {
    try {
      e.preventDefault();
      console.log("e.target.user.value");
      const result = await axios.post(`${BASE_URL}/newfilemodel`, {
        pharmaceutical: e.target.pharmaceutical.value,
        patientscondition: e.target.patientscondition.value,
        desc: e.target.desc.value,
        user: e.target.user.value,
        DoctorId: JSON.parse(localStorage.getItem("user")).result._id,
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

  const move = () => {
    
  };
  const AddUsewr = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/adduser`, {
        fullName: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        docID: JSON.parse(localStorage.getItem("user")).result.DoctorId,
        patientId: e.target.patientId.value,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const serch = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/search`, {
        patientId: searched,
      });
      console.log(result.data);
      localStorage.setItem("searched", result.data._id);
      navigate("/Medicalfile");
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(searched);
  }, [searched]);
  useEffect(() => {
    getPatientsForDoctor();
  }, []);
  return (
    <>
      <NAVBAR />
      <section className={"home-section section-medical-doctor"}>
        <div className="patient-list">
          <form name="search" className={"search-form"}>
            <span onClick={() => serch()} className="deff">
              Search
            </span>
            <input
              type="text"
              className="input-sh"
              name="txt"
              onMouseOut="document.search.txt.value = ''"
              onChange={(e) => setSearched(e.target.value)}
              
            />
          </form>
         
          <div className="list-row">
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>ID</p>
          </div>
          {patients.map((item, i) => {
            return (
              <>
                <div className="list-row">
                  <p>{item.fullName}</p>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
                  <p>{item._id}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="medical-doctor-froms">
          <div className="form-options">
            <button
              className={`${
                option.includes("Prescription")
                  ? "btn-active"
                  : "btn-not-active"
              }`}
              onClick={() => setOption("Prescription")}
            >
              Prescription
            </button>
            <button
              className={`${
                option.includes("Patient") ? "btn-active" : "btn-not-active"
              }`}
              onClick={() => setOption("Patient")}
            >
              Patient
            </button>
          </div>
          <div>
            {option.includes("Prescription") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={AddUPatient}
              >
                <h3>Prescription</h3>

                <label name>Patient Id</label>
                <input
                  placeholder="Patient name"
                  name="user"
                  type="text"
                  className="input_Prescription"
                  required
                  autoFocus
                />

                <label name>Pharmaceutical</label>
                <input
                  placeholder="Pharmaceutical"
                  type="text"
                  name="pharmaceutical"
                  required
                />

                <label name> Patients Condition</label>
                <input
                  name="patientscondition"
                  placeholder=" Patients Condition"
                  type="text"
                  required
                />

                <label name>Doctor Id</label>
                <input placeholder="DoctorId" name="DoctorId" type="text" />

                <label name>Description</label>
                <input
                  placeholder="Description"
                  type="text"
                  name="desc"
                  required
                />

                <button
                  name="submit"
                  type="submit"
                  // id
                  // data-submit="...Sending"
                >
                  Submit
                </button>
              </form>
            ) : (
              ""
            )}
            {option.includes("Patient") ? (
              <form
                className="from-medical-doctor"
                action
                method="post"
                onSubmit={AddUsewr}
              >
                <h3>patient</h3>
                <label> Patient FullName</label>
                <input
                  placeholder="Enter full name"
                  name="username"
                  type="text"
                  required
                  autoFocus
                />
                <label name>Password</label>
                <input
                  placeholder="Enter password"
                  type="text"
                  name="password"
                  required
                />

                <label> phone </label>
                <input
                  name="phone"
                  placeholder="Enter phone number"
                  type="text"
                  required
                />

                <label name>Email</label>
                <input placeholder="email" name="email" type="img" />

                <label name>PatientId</label>
                <input
                  placeholder="patientId"
                  type="text"
                  name="patientId"
                  required
                />

                <button name="submit" type="submit" id data-submit="...Sending">
                  Submit
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;
