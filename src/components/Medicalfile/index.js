import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Medicalfile = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [medical, setMedical] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")).result._id);

  const found = localStorage.getItem("searched")
    ? localStorage.getItem("searched")
    : JSON.parse(localStorage.getItem("user")).result._id;
  const getPosts = () => {
    try {
      console.log('hhhhh');
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


  useEffect(() => {
    getPosts();
  }, []);

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


  return (
    <>
       <>
       {medical?.result?.role=='61c4983a20623279b6c0768c'? <>
       <div className="box">
        <form name="search">
          <input type="text" className="input-sh" name="txt" onmouseout="document.search.txt.value = ''" onChange={(e)=>setSearched(e.target.value)}/> <span onClick={()=>serch()} className="deff"> Search </span>
        </form>
      </div>
              </>:<></>}
 

    </>
      <div className="profile">
        {medical.map((item, i) => {
          console.log(item.DoctorId.DoctorId);
          return (
            <div>
              {/*  */}

              <div className="main">
                <h2>Prescription</h2>
                <div className="card">
                  <div className="card-body">
                    <i className="fa fa-pen fa-xs edit" />
                    {localStorage.getItem("searched")?<button onClick={() => deletePost(item._id)}>Delete</button> :<></>}
                    {localStorage.getItem("searched")?<button>Edit</button> :<></>}
                    
                    <table>
                      <tbody>
                        <tr>
                          <td>Treatment Name</td>
                          <td>:</td>
                          <td>{item.pharmaceutical}</td>
                        </tr>
                        <tr>
                          <td>Dosage</td>
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
                          <td>{item.user.fullName}</td>
                        </tr>
                        <tr>
                          <td>Doctor's Name</td>
                          <td>:</td>
                          <td>{item.DoctorId.fullName}</td>
                        </tr>
                        <tr>
                          <td>Exchange Time</td>
                          <td>:</td>
                          <td>{item.time}</td>
                        </tr>
                        <tr>
                          <td>workAt</td>
                          <td>:</td>
                          <td>{item.DoctorId.workAt.fullName}</td>
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
    </>
  );
};

export default Medicalfile;
