import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import NAVBAR from "../Navbar";
import { AiFillEdit } from "react-icons/ai";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [editEmail, setEmail] = useState("");
  const [toggleName, setToggleName] = useState(false);
  const [togglePhone, setTogglePhone] = useState(false);

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
    setTogglePhone(false);
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
              <section className="home-section section-profile">
                <div className="profile-container">
                  <form onSubmit={editName} className={"profile-form"}>
                    <h1>PROFILE</h1>
                    <h1> Hi {item.fullName}</h1>

                    <div className={"profile-item"}>
                      <div>
                        <p>Name: </p>
                        <p>{item.fullName}</p>
                      </div>
                      {toggleName ? (
                        <div className={"input-field"}>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your name"
                            className="show"
                          />
                        </div>
                      ) : (
                        <button
                          className={"input-btn"}
                          onClick={() => setToggleName(true)}
                        >
                          <AiFillEdit />
                        </button>
                      )}
                    </div>

                    <div className={"profile-item"}>
                      <div>
                        <p>Email: </p>
                        <p>{item.email}</p>
                      </div>
                    </div>

                    <div className={"profile-item"}>
                      <div>
                        <p>Phone:</p>
                        <p>{item.phone}</p>
                      </div>

                      {togglePhone ? (
                        <div>
                          <input
                            type="text"
                            name="   "
                            placeholder="Enter your phone"
                            className="show"
                          />
                        </div>
                      ) : (
                        <button
                          className="Button_Change"
                          onClick={() => setTogglePhone(true)}
                        >
                          <AiFillEdit />
                        </button>
                      )}
                    </div>
                    <div className={"profile-item"}>
                      <div>
                        <p>Status:</p>

                        <p>{item.status1.status}</p>
                      </div>
                    </div>
                    <div className={"profile-item"}>
                      <div>
                        <p>Work At:</p>
                        <p>{item?.workAt?.fullName}</p>
                      </div>
                    </div>

                    {toggleName || togglePhone ? (
                      <button
                        type="submit"
                        className="profile-submit-btn"
                        className="profile-save"
                      >
                        Save
                      </button>
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
