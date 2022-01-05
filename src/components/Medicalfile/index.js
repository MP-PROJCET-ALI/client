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
  const [show, setShow] = useState(false);
  const [onePerscription, setOnePerscription] = useState([]);
  const [medical, setMedical] = useState([]);
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
  const [searched, setSearched] = useState("");
  useEffect(() => {
    console.log(searched);
  }, [searched]);

  return (
    <>
      <NAVBAR />

      <>
        {medical?.result?.role == "61c4983a20623279b6c0768c" ? (
          <>
            <div className="">
              <form name="search">
                <input
                  type="text"
                  className="input-sh"
                  name="txt"
                  onmouseout="document.search.txt.value = ''"
                  onChange={(e) => setSearched(e.target.value)}
                />{" "}
                <span
                  onClick={() => serch()}
                  className="deff"
                  onClick={() => navigate("/Medicalfile")}
                >
                  {" "}
                  Search{" "}
                </span>
              </form>
            </div>
          </>
        ) : (
          <></>
        )}
      </>

      <div className="">
        <h2>Prescription</h2>
        {medical.map((item, i) => {
          console.log(item.DoctorId.DoctorId);
          return (
            <div>
              {/*  */}

              <div className="">
                <div className="">
                  <div className="">
                    <i className="" />
                    {localStorage.getItem("searched") ? (
                      <button onClick={() => deletePost(item._id)}>
                        Delete
                      </button>
                    ) : (
                      <></>
                    )}
                    {localStorage.getItem("searched") ? (
                      <button>Edit</button>
                    ) : (
                      <></>
                    )}

                    <table>
                      <tbody>
                        <tr>
                          <td>Treatment Name</td>
                          <td>:</td>
                          <td>{item.pharmaceutical}</td>
                        </tr>

                        <tr>
                          <td>Data</td>
                          <td>:</td>
                          <td>
                            {item.time}
                            <h1
                            className="back_inf"
                              onClick={() => {
                                setShow(true);
                                setOnePerscription(item);
                              }}
                            >
                              <GrDocumentOutlook />
                            </h1>
                          </td>
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

      {show ? (
        <div className="info_per">
          <h1 className="Perscription">Perscription info</h1>
          <div className="info_InPer"></div>
          <table className="tbody_info">
            <tbody className="tbody_info">
              <tr>
                <td>Treatment Name</td>
                <td className="text_center_td">:</td>
                <td>{onePerscription.pharmaceutical}</td>
              </tr>
              <tr>
                <td>Dosage</td>
                <td>:</td>
                <td>{onePerscription.desc}</td>
              </tr>
              <tr>
                <td>Recipient</td>
                <td>:</td>
                <td>{onePerscription.user.fullName}</td>
              </tr>
              <tr>
                <td>Doctor's Name</td>
                <td>:</td>
                <td>{onePerscription.DoctorId.fullName}</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>:</td>
                <td>{onePerscription.time}</td>
              </tr>
            </tbody>
          </table>
          <h2  className="back_info_Backing" onClick={() => setShow(false)}>
            <VscDebugStepBack />
          </h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Medicalfile;
