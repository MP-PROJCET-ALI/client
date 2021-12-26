import React from "react";
import './style.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
 

  return (
    <>
    <article className="home"> 
  <section class="one">
    {/* <div class="img">
      <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png" alt="twitter"/> 
     </div> */}
    <div>
      <i class="fab fa-twitter"></i>
    </div>
  </section>
  <section class="two">
    <div class="logo">
      <i class="fab fa-twitter"></i>
    </div>
    <div class="log-in">
    <h1>  Welcome to <h1 ><span >AlSalam</span>Hospital</h1></h1>
      <div class="ptn">
      
       
        <a href="login"><i class="fab fa-apple"></i>Login</a>
        <a href="Regestier"> Sign up</a>
      </div>
    </div>
  </section>
</article>

</>
  )

    
    
    
  
};

export default Home;
