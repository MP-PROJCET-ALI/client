import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {RiMailSendLine} from 'react-icons/ri'

const Medicalfile = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  //   const token = SignIn.token;
  const [error, seterror] = useState(false);
  const [medical, setMedical] = useState([]);
  const getPosts = () => {
    try {
      axios
        .get(`${BASE_URL}/allfilemodel`, )
        .then((result) => {
          if (result.data.error) {
            seterror(true);
          } else {
            console.log(result.data);
            setMedical(result.data);
          }
        });
      //   if(result.data.error){
      //       navigate("/error")
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/logout`, {
        
      });
      console.log(result.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);


  const [addError, setAddError] = useState('')
  const newPost = async(e) => {
    try {
      e.preventDefault();
      const user =await axios.get(`${BASE_URL}/user`, )
      if(user.data){
        const result =await axios.post(`${BASE_URL}/newfilemodel`,{
          desc: e.target.desc.value,
          img: e.target.img.value,
          // title: e.target.title.value,
          user: user.data.user._id
        }, { withCredentials: true });
        console.log(result.data);
        if(result.data.error){
          setAddError(result.data.error)
        }else{
          e.target.desc.value = "";
          e.target.img.value = "";
          e.target.title.value = "";
          getPosts();
        }
      }else{
        console.log('log in man');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [add, setAdd] = useState(false);
  return (
    <div className="home">
      <div className="blog">
        <h1>Blogs</h1>

        {!error && add ? (
          <form onSubmit={newPost} className="new">
            <p>New file:</p>
         
            <div>
              <p>Description: </p>
              <textarea name="desc" cols="30" rows="10"></textarea>
            </div>
            <div>
              <p>Imge: </p>
              <input type="text" name="img" />
            </div>
            {addError}
            <div>
              <button type="submit">Add</button>
              <button onClick={() => setAdd(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={() => setAdd(true)}>Add Medicalfile</button>
        )}

        {error ? (
          <p style={{ marginTop: "50px" }}>Kindly login first to see Medical</p>
        ) : null}
        <div className="posts-add">
          {medical?.map((item) => {
            return (
              <div key={item._id} className="post" onClick={()=>navigate(`/post/${item._id}`)}>
                <img
                  src="https://images.pexels.com/photos/64699/pexels-photo-64699.jpeg"
                  wdith="100"
                  height="100"
                  alt=""
                />
                <h2 style={{ display: "inline" }}>{item.desc}</h2>
                <p>created at {item.createdAt.slice(0, 10)}</p> 
                 <button onClick={() => (item._id)}><RiMailSendLine/></button>
                <br />
              </div>
            );
          })}
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          {console.log(error)}
          {!error ? <button onClick={logout}>Logout</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Medicalfile;