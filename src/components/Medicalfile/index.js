import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import NAVBAR from "../Navbar";
import { useNavigate } from "react-router-dom";
import { GrDocumentOutlook } from "react-icons/gr";
import { VscDebugStepBack } from "react-icons/vsc";

const Medicalfile = () => {
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [searched, setSearched] = useState("");

  const [show, setShow] = useState(false);
  const [onePerscription, setOnePerscription] = useState([]);
  const [medical, setMedical] = useState([]);
  const [patients, setPatients] = useState([]);

  console.log(JSON.parse(localStorage.getItem("user")).result._id);

  const found = localStorage.getItem("searched")
    ? localStorage.getItem("searched")
    : JSON.parse(localStorage.getItem("user")).result._id;
  const getPosts = () => {
    try {
      console.log("hhhhh");
      axios.get(`${BASE_URL}/filemodel/${found}`).then((result) => {
        console.log(result.data);
        if (result.data) {
          setMedical(result.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  // delete
  const deletePost = (i) => {
    console.log(i);
    try {
      axios.put(`${BASE_URL}/softDelete/${i}`).then((result) => {
        console.log(result.data);
        getPosts();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // updeate

  // const editName = async (e) => {
  //   e.preventDefault();
  //   if (edit.length > 0) {
  //     const editFullName = await axios.put(
  //       `${BASE_URL}/updatefilemodel/${_id}`,

  //       {
  //         fullName: edit,
  //         newEmail:editEmail,
  //         phone:edit,
  //         status1:edit,
  //       }
  //     );
  //     console.log(editFullName);
  //     document.getElementById("username");
  //     getData();
  //   } else {
  //     console.log("");
  //   }
  // };

  useEffect(() => {
    getPosts();
  }, []);
  // search
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

      <section className={"home-section section-medical-doctor"}>
        <div className="patient-list">
          <h2>Prescription</h2>
          <div className="list-row" id={"grid-5"}>
            <p>Treatment Name</p>
            <p>Data</p>
            <p>Show</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>
          {medical.map((item, i) => {
            console.log(item.DoctorId.DoctorId);
            return (
              <>
                <div className="list-row " id={"grid-5"}>
                  <p>{item.pharmaceutical}</p>
                  <p>{item.time}</p>
                  <p
                    className="back_inf"
                    onClick={() => {
                      setShow(true);
                      setOnePerscription(item);
                    }}
                  >
                    <GrDocumentOutlook />
                  </p>

                  {localStorage.getItem("searched") ? <p>Edit</p> : <></>}
                  {localStorage.getItem("searched") ? (
                    <p onClick={() => deletePost(item._id)}>Delete</p>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            );
          })}
        </div>

        {show ? (
          <>
            <div className="patient-list">
              <h1 className="Perscription">Perscription info</h1>
              <div className="list-row" id={"grid-7"}>
                <p>Treatment Name</p>
                <p>Dosage</p>
                <p>Recipient</p>
                <p>Doctor's</p>
                <p>Data</p>
                <p className="back_info_Backing" onClick={() => setShow(false)}>
                  <VscDebugStepBack />
                </p>
              </div>
              <div className="list-row" id={"grid-7"}>
                <td>{onePerscription.pharmaceutical}</td>
                <td>{onePerscription.desc}</td>
                <td>{onePerscription.user.fullName}</td>
                <td>{onePerscription.DoctorId.fullName}</td>
                <p>{onePerscription.time}</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Medicalfile;
