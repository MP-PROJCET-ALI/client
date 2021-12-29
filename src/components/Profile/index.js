import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [editEmail, setEmail] = useState("");

  const getData = async () => {
    if (local.result) {
      const item = await axios.get(`${BASE_URL}/email/${local.result.email}`);
    

      setAccount(item.data);
    } else {
      // navigate('/home')
    }
  };

  const getDataLS = () => {
    setLocal(JSON.parse(localStorage.getItem("user")));
  };


 
  useEffect(() => {
    getDataLS();
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  const editName = async (e) => {
    e.preventDefault();
    if (edit.length > 0) {
      const editFullName = await axios.put(
        `${BASE_URL}/edit/${local.result.email}`,

        {
          fullName: edit,
          // newEmail:editEmail,
          // phone:edit,
          // status1:edit,
        }
      );
      console.log(editFullName);
      document.getElementById("username");
      getData();
    } else {
      console.log("");
    }
  };
  const kick = () => {
    // eslint-disable-next-line
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profile">
      {account.map((item, i) => {
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
                <div className="name">{item.fullName}</div>
                <div className="job">Web Developer</div>
              </div>
              <div className="sidenav-url">
                <div className="url">
                  <a href="#profile" className="active">
                    Profile
                  </a>
                  <hr align="center" />
                </div>
                <div className="url">
                  <a href="#settings">Settings</a>
                  <hr align="center" />
                </div>
              </div>
            </div>

            <div className="main">
              <h2>PROFILE</h2>
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-pen fa-xs edit" />
                  <table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>{item.fullName}</td>
                        <input type="submit" value="Changing name" onClick={editName} name="fullName"  className="show"/>
                        <input type="text" placeholder="Changing You username" defaultValue={item.fullName} onChange={(e) => setEdit(e.target.value)} name="fullName" className="show"/>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{item.email}</td>
                        <input type="submit" value="Changing Email" onClick={editName} name="newEmail" className="show"/>
                        <input type="text" placeholder="Changing Email" defaultValue={item.email} onChange={(e) => setEmail(e.target.value)} name="newEmail" className="show"/>
                      </tr>
                      <tr>
                        <td>phone</td>
                        <td>:</td>
                        <td>{item.phone}</td>
                      </tr>
                      <tr>
                        <td>status</td>
                        <td>:</td>
                        <td>{item.status1.status}</td>
                      </tr>
                      <tr>
                        <td>Job</td>
                        <td>:</td>
                        <td>Web Developer</td>
                      </tr>
                      <tr>
                        <td>Skill</td>
                        <td>:</td>
                        <td>PHP, HTML, CSS, Java</td>
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

export default Profile;

// <div className="profile">
//   {account.map((item, i) => {
//     return (
//       <section className="section-login vvv">
//       <div key={i} className="login-box">
//         <form className={"form"} >

//           <div className="input-field">
//           <input type="submit" value="Changing name" onClick={editName}  className="show"/>
//           </div>
//           <div className="input-field">
//           <input type="text" placeholder="Changing You username" onChange={(e) => setEdit(e.target.value)} className="show"/>
//           </div>
//         <h1>Name: {item.fullName}</h1>

//         <h1>Email: {item.email}</h1>

//         <button className="btn btn-danger btn-block" onClick={kick}>Logout</button>

//         </form>
//       </div>
//       </section>
//     );
//   })}
// </div>
