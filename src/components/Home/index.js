import React from "react";
import img1 from "../../imge/logo-removebg-preview.png";
import { BiRightArrowAlt } from "react-icons/bi";
import NAVBAR from "../Navbar";
import {
  GiBassetHoundHead,
  GiBrainLeak,
  GiMagnifyingGlass,
  GiStomach,
} from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import "./style.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;
// test meta
const Home = () => {
  return (
    <>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <NAVBAR />
      <section className="home-section">
        <div className="home-left">
          <h1 className="welcome-text">
            {/*Your Health Our Happiness*/}
            welcome to <span className={"logo-name"}>HCSHM</span> <br />
            Quality <span>Doctors</span> <br /> For Your{" "}
            <span>
              Best <br /> Care
            </span>
          </h1>
        </div>
        <div className="home-right">
          <div className="home-img-first">
            <img src={require("../../imge/home-img.jpg")} alt="" />
          </div>
          <div className="home-img-second">
            <img src={require("../../imge/home-img-second.jpg")} alt="" />
          </div>
        </div>
      </section>
      <section className="section-future">
        <div className="future-cards">
          <div className="future-top">
            <div className="future-top-title">
              <h1>We make the Future</h1>
              <p>consult top doctors online for any health concern</p>
            </div>
            <div className="future-top-desc">
              <p>
                Our site holds a wealth of information about the services and
                programs we offer for our regional community as well as general
                health news, a provider listing and career opportunities.
              </p>
            </div>
          </div>
          <div className="future-bottom">
            <div className="future-card">
              <span>
                <GiBrainLeak />
              </span>
              <p>Headache</p>
            </div>
            <div className="future-card">
              <span>
                <GiStomach />
              </span>
              <p>Stomach</p>
            </div>

            <div className="future-card">
              <span>
                <FaBrain />
              </span>
              <p>Psychiatry</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
