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
        DoctorId: "61c9761551adae120e611ae4",
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

  const serch = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/search`, {
        patientId: searched,
      });
      console.log(result.data);
      localStorage.setItem('searched', result.data._id)
    } catch (error) {
      console.log(error);
    }
  };
const [searched, setSearched] = useState("")
useEffect(() => {
  console.log(searched);
}, [searched])
  useEffect(() => {
    AddUsewr();
  }, []);
  return (
    <>
       <>
    
    <div className="box">
        <form name="search">
          <input type="text" className="input-sh" name="txt" onmouseout="document.search.txt.value = ''" onChange={(e)=>setSearched(e.target.value)}/> <span onClick={()=>serch()} className="deff"> Search </span>
        </form>
      </div>

    </>

      <div>
        <div className="container">
          <form className="contact" action method="post" onSubmit={AddUPatient}>
            <h3>Prescription</h3>
            <div className="col50 colleft">
              <div className="col50 colleft">
                <div className="wd50">
                  <label name>Patient Name</label>
                  <input
                    placeholder="Patient name"
                    name="user"
                    type="text"
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
                  <label name>DoctorId</label>
                  <input placeholder="DoctorId"  name="DoctorId" type="img" />
                </div>
              </div>
              <div className="col50 colright">
                <div className="wd50">
                  <label name>Description</label>
                  <input placeholder="Description" type="text" name="desc" required />
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
      <div>
        <div className="container">
          <form className="contact-1" action method="post" onSubmit={AddUsewr}>
            <h3>patient</h3>
            <div className="col50 colleft">
              <div className="col50 colleft">
                <div className="wd50">
                  <label > Patient FullName</label>
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
                  <label > phone{" "}</label>
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
                  <input placeholder="email"  name="email" type="img" />
                </div>
              </div>
              <div className="col50 colright">
                <div className="wd50">
                  <label name>PatientId</label>
                  <input placeholder="patientId" type="text" name="patientId" required />
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
      </>
    </>
  );
};




export default Doctor;
