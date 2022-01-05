import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import NAVBAR from "../Navbar";

const Admin = () => {
  const [pendings, setpendings] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getPendingHospitals = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/allstatuspending`);
      setpendings(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${BASE_URL}/updatestatus`,{
        _id:id, status  
      });
      getPendingHospitals();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPendingHospitals();
  }, []);
  return (
    <div>
        <NAVBAR/>
<div className="wrapperAdmin">
    <div className="containerAdmin">
      <div className="row custom-nav">
        <div className="col-md-3 aa">
          <div className="h-left-con"></div>
        </div>
        <div className="col-md-7 aa">
          <div className="h-center-con">
           
          </div>
        </div>
        <div className="col-md-2 aa">
          <div className="h-right-con">
            <ul>
              <li>
                <i className="fa fa-th" style={{ color: "#d9696a" }} />
              </li>
              <li>
                <i className="fa fa-bar-chart-o" style={{ color: "#666" }} />
              </li>
              <li>
                <i className="fa fa-bell-o" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row bottom-nav">
        <div className="col-md-12">
          <div className="nav-con">
            <ul>
              <li>
                <i className="fa fa-users" />
                {/* <h4>MEMBERS</h4> */}
              </li>
              <li>
                <i className="fa fa-truck" />
                {/* <h4>PRODUCT</h4> */}
              </li>
              <li>
                <i className="fa fa-umbrella" />
                {/* <h4>ORDER</h4> */}
              </li>
              <li>
                <i className="fa fa-shopping-cart" />
                {/* <h4>SHOPPING</h4> */}
              </li>
              <li>
                <i className="fa fa-gears" />
                {/* <h4>SETTING</h4> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row quick-bar">
        <div className="col-md-2">
          <div className="search-btn">Hospital waiting approval</div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row content">
        <div className="col-md-12">
          <table className="table table-bordered no-more-tables">
            <thead>
              <tr>
                <th className="text-center" width="5%">
                  Hospital ID
                </th>
                <th className="text-center" width="12%">
                  Hospital Name
                </th>
                <th className="text-center" width="8%">
                  Hospital Email
                </th>
                <th className="text-center" width="7%">
                  Hospital phone
                </th>
                <th className="text-center" width="7%">
                  Hospital Location
                </th>
                <th className="text-center" width="4%">
                  license Number
                </th>
                <th className="text-center" width="4%">
                  Accept registeration
                </th>
                <th className="text-center" width="4%">
                  Decline registeration
                </th>
              </tr>
            </thead>
            <tbody>
              {pendings.map((item) => (
                <tr>
                  <td className="text-center">{item._id}</td>
                  <td className="text-center">{item.fullName}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.phone}</td>
                  <td className="text-center">{item.location}</td>
                  <td className="text-center">{item.licenseNumber}</td>
                  <td>
                    <button className="Button_Admin" id="Button_Accept" onClick={() =>updateStatus(item._id, '61c82191e027be8294db69c8')}>Accept</button>
                  </td>
                  <td>
                    <button  className="Button_Admin" id="Button_Reject"  onClick={() =>updateStatus(item._id, '61c82199e027be8294db69ca')}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Admin;
