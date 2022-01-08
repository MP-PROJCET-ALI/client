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
      <NAVBAR />

      <h1>Doctors working in the hospital</h1>
      {JSON.parse(localStorage.getItem("user")).result?.role ==
      "61c4981620623279b6c0768a" ? (
        <>
          {doctors.map((i) => (
            <>
              <td>{i.fullName}</td>

              <td>{i.email}</td>

              <td>{i.phone}</td>

              <td>{i.DoctorId}</td>
            </>
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
