import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Medicalfile = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [medical, setMedical] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")).result._id);
  const getPosts = () => {
    try {
      axios
        .get(
          `${BASE_URL}/filemodel/${
            JSON.parse(localStorage.getItem("user")).result._id
          }`
        )
        .then((result) => {
          if (result.data) {
            console.log(result.data);
            setMedical(result.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="profile">
      {medical.map((item, i) => {
        return (
          <div>
            <div className="sidenav">
              <div className="profile">
                <img
                  src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="name">{item.medicalcondition}</div>
                <div className="job">Web Developer</div>
              </div>
              <div className="sidenav-url"></div>
            </div>

            <div className="main">
              <h2>The Recipe</h2>
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-pen fa-xs edit" />
                  <table>
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>:</td>
                        <td>{item.pharmaceutical}</td>
                      </tr>
                      <tr>
                        <td>Formula</td>
                        <td>:</td>
                        <td>{item.desc}</td>
                      </tr>
                      <tr>
                        <td>Treatment casing</td>
                        <td>:</td>
                        <td>{item.img}</td>
                      </tr>
                      <tr>
                        <td>Recipient</td>
                        <td>:</td>
                        <td>{item.user}</td>
                      </tr>
                      <tr>
                        <td>Named Doctor</td>
                        <td>:</td>
                        <td>{item.DoctorId}</td>
                      </tr>
                      <tr>
                        <td>Exchange Time</td>
                        <td>:</td>
                        <td>{item.time}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Medicalfile;
