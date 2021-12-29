import React, { useEffect, useState } from "react";
import axios from "axios";

const Medicalfile = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [medical, setMedical] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")).result._id);
  const getPosts = () => {
    try {
      
      axios
        .get(`${BASE_URL}/filemodel/${JSON.parse(localStorage.getItem("user")).result._id}`)
        .then((result) => {
          if (result.data) {
            console.log(result.data);
            setMedical(result.data);
          }
        });
   
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
 
    getPosts();
  }, []);

  return (
  <div className="home">
    <h1>htrhhgf</h1>
  </div>
  );
};

export default Medicalfile;