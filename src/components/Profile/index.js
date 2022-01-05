import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import NAVBAR from "../Navbar";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [editEmail, setEmail] = useState("");
  const [toggleName, setToggleName] = useState(false);
  const [togglePhone, setTogglePhone] = useState(false)

  const getData = async () => {
    const item = await axios.get(`${BASE_URL}/email/${local.result.email}`);
    console.log(item.data);
    setAccount(item.data);
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
    console.log(e.target[1].value);

    const editFullName = await axios.put(
      `${BASE_URL}/updateProfile/${local.result._id}`,

      {
        fullName: e.target[0].value,
        phone: e.target[1].value,
        // password: e.target.password.value,
      }
    );
    console.log(editFullName);
    setToggleName(false);
    setTogglePhone(false)
    document.getElementById("username");
    getData();
  };
  const kick = () => {
    // eslint-disable-next-line
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <NAVBAR />
      <div className="profile">
        {account.map((item, i) => {
          return (
            <>
              <div>
                <div className="main">
                  <div className="card">
                    <div className="card-body">
                      <i className="fa fa-pen fa-xs edit" />
                      <form onSubmit={editName}>
                        <table>
                          <div className="profile_P">
                            <h2>PROFILE</h2>
                          </div>
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>:</td>

                              <td>{item.fullName}</td>
                              {toggleName ? (
                                <div>
                                  <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Changing You fullName"
                                    className="show"
                                  />
                                </div>
                              ) : (
                                <button
                                  className="Button_Change"
                                  onClick={() => setToggleName(true)}
                                >
                                  Edit name
                                </button>
                              )}
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
                              
                               {togglePhone ? (
                                <div>
                                  <input
                                type="text"
                                name="phone"
                                placeholder="Changing You phone"
                                className="show"
                              /> 
                                </div>
                              ) : (
                                <button
                                  className="Button_Change"
                                  onClick={() => setTogglePhone(true)}
                                >
                                  Edit name
                                </button>
                              )}
                            </tr>
                            <tr>
                              <td>status</td>
                              <td>:</td>
                              <td>{item.status1.status}</td>
                            </tr>
                            <tr>
                              <td>workAt</td>
                              <td>:</td>
                              <td>{item?.workAt?.fullName}</td>
                            </tr>
                          </tbody>
                        </table>
                        <button
                          type="submit"
                          // className="button"
                          className="Button_Change"
                        >
                          Change
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
