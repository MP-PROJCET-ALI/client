import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import NAVBAR from "../Navbar";

const Hospital = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [doctors, setdoctors] = useState([]);
  const AddUsewr = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/newdoctor`, {
        DoctorId: e.target.DoctorId.value,
        workAt: e.target.workAt.value,
        // role: "61c4983a20623279b6c0768c",
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctors = async (e) => {
    try {
      const result = await axios.get(`${BASE_URL}/getdoctors`);
      console.log(result.data);
      setdoctors(
        result.data.filter(
          (i) =>
            i.workAt == JSON.parse(localStorage.getItem("user")).result?._id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(JSON.parse(localStorage.getItem("user")).result.role);

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
    <NAVBAR/>
    <div>
        <div className="container">
          <form className="contact-3" action method="post" onSubmit={AddUsewr}>
            <h3>Doctor Statement</h3>
            <div className="col50 colleft">
              <div className="col50 colleft">
                <div className="wd50">
                  <label>DoctorID</label>
                  <br />
                  <br />
                  <input
                    placeholder="DoctorId"
                    name="DoctorId"
                    type="text"
                    required
                    autofocus
                  />
                  <br />
                  <select name="workAt">
                    <option value="61c974d051adae120e611ad7">
                      Qassim Hospital
                    </option>
                    <option value="61c9704fbe6d2e288149056a">
                      Riyadh Hospital
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="wd100">
              <button name="submit" type="submit" id data-submit="...Sending">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <h1>Doctors working in the hospital</h1>
      {JSON.parse(localStorage.getItem("user")).result?.role ==
      "61c4981620623279b6c0768a" ? (
        <>
          {doctors.map((i) => (
            <table>
            <div>
              <div className="boxContiner-1">
                <div className="boxBody-1">
                  <div className="card-12">
                    <div className="profileImage-12" />
                    

                    <div className="nameFamily-12">
                      <h1>Doctor Card</h1>
                      <td>FullName</td>
                      <td>:</td>
                      <td>{i.fullName}</td>
                    </div>
                    <div className="nameFamily-12">
                      <td>Email</td>
                      <td>:</td>
                      <td>{i.email}</td>
                    </div>
                    <div className="nameFamily-12">
                      <td>Phone</td>
                      <td>:</td>
                      <td>{i.phone}</td>
                    </div>

                    <div className="nameFamily-12">
                      <td>DoctorId</td>
                      <td>:</td>
                      <td>{i.DoctorId}</td>
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
          ))}
        </>
      ) : (
        <>
          <h1>Not authorized to view info</h1>
        </>
      )}
    </>
  );
};
export default Hospital;
