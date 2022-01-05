import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./style.css";
import NAVBAR from "../Navbar";

const Doctor = () => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
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

      <div className="grid-medical-doctor">
        <div className="grid1">
          {/* <div className="search-box">

          </div>
          <div className="search-content">

          </div> */}

          <table className="patient-table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ID</th>
            </tr>
            {patients.map((item, i) => {
              return (
                <tr>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item._id}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="grid2">
          <div>
              <form
                className="contact"
                action
                method="post"
                onSubmit={AddUPatient}
              >
                <h3>Prescription</h3>
                <div className="col50 colleft">
                  <div className="col50 colleft">
                    <div className="wd50">
                      <label name>Patient Id</label>
                      <input
                        placeholder="Patient name"
                        name="user"
                        type="text"
                        className="input_Prescription"
                        required
                        autofocus
                      />
                    </div>
                    <div className="wd50">
                      <label name>Pharmaceutical</label>
                      <input
                        placeholder="Pharmaceutical"
                        type="text"
                        name="pharmaceutical"
                        required
                      />
                    </div>
                  </div>
                  <div className="col50 colright">
                    <div className="wd50">
                      <label name> Patients Condition</label>
                      <input
                        name="patientscondition"
                        placeholder=" Patients Condition"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col50 colright">
                  <div className="col50 colleft">
                    <div className="wd50">
                      <label name>Doctor Id</label>
                      <input
                        placeholder="DoctorId"
                        name="DoctorId"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col50 colright">
                    <div className="wd50">
                      <label name>Description</label>
                      <input
                        placeholder="Description"
                        type="text"
                        name="desc"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="wd100">
                  <hr />
                </div>

                <div className="wd100">
                  <button
                    name="submit"
                    type="submit"
                    // id
                    // data-submit="...Sending"
                  >
                    Submit
                  </button>
                </div>
              </form>
          </div>
          <div>
            <form
              className="contact-1"
              action
              method="post"
              onSubmit={AddUsewr}
            >
              <h3>patient</h3>
              <div className="col50 colleft">
                <div className="col50 colleft">
                  <div className="wd50">
                    <label> Patient FullName</label>
                    <input
                      placeholder="username"
                      name="username"
                      type="text"
                      required
                      autofocus
                    />
                  </div>
                  <div className="wd50">
                    <label name>Password</label>
                    <input
                      placeholder="Pharmaceutical"
                      type="text"
                      name="password"
                      required
                    />
                  </div>
                </div>
                <div className="col50 colright">
                  <div className="wd50">
                    <label> phone </label>
                    <input
                      name="phone"
                      placeholder=" Patients Condition"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col50 colright">
                <div className="col50 colleft">
                  <div className="wd50">
                    <label name>Email</label>
                    <input placeholder="email" name="email" type="img" />
                  </div>
                </div>
                <div className="col50 colright">
                  <div className="wd50">
                    <label name>PatientId</label>
                    <input
                      placeholder="patientId"
                      type="text"
                      name="patientId"
                      required
                    />
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
      </div>

      <div className="grid-medical-doctor">
        <div className="box">
          <form name="search">
            <input
              type="text"
              className="input-sh"
              name="txt"
              onmouseout="document.search.txt.value = ''"
              onChange={(e) => setSearched(e.target.value)}
            />{" "}
            <span onClick={() => serch()} className="deff">
              {" "}
              Search{" "}
            </span>
          </form>
        </div>

        {/* {patients.map((item, i) => {
          return (
            <table>
              <div>
                <div className="boxContiner-1">
                  <div className="boxBody-1">
                    <div className="card-12">
                      <div className="profileImage-12" />

                      <div className="nameFamily-12">
                        <h1>Reviewers Card</h1>
                        <td>FullName</td>
                        <td>:</td>
                        <td>{item.fullName}</td>
                      </div>
                      <div className="nameFamily-12">
                        <td>Email</td>
                        <td>:</td>
                        <td>{item.email}</td>
                      </div>
                      <div className="nameFamily-12">
                        <td>Phone</td>
                        <td>:</td>
                        <td>{item.phone}</td>
                      </div>

                      <div className="nameFamily-12">
                        <td>Patient Id</td>
                        <td>:</td>
                        <td>{item.patientId}</td>
                      </div>

                      <div className="socialMedia">
                        <div className="mail"></div>

                        <div className="linkdin"></div>
                        <div className="phone"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </table>
          );
        })} */}
      </div>
    </>
  );
};

export default Doctor;
