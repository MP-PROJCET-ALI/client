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
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{item.email}</td>
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


