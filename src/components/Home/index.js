import React from "react";
import "./style.css";
import img1 from "../../imge/logo-removebg-preview.png"
import { BiRightArrowAlt } from 'react-icons/bi';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  return (
    <>
    <>
    
    <div className="stage">
        <input id="trigger" type="checkbox" />
        <div className="stage_bg" />
        <div className="stage_inner">
          <div className="stage_inner__logo">
            THE
            <span>HEALTH</span>
          </div>
          <div className="stage_inner__menu">
            <div className="menu">
             
              <div className="menu_part" />
          
            </div>
          </div>
          <div className="stage_inner__footer">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            
          </div>
        
          <div className="stage_inner__articleTwo">
            <h3>Should You Be Taking Fish Oil? What a Cardiologist Tells His Patients</h3>
            <p>The story of fish oil and heart health started with the observation that several populations ...</p>
            <p className="auth">Delia Freeman</p>
            <p className="date">21 Feb 2019</p>
          </div>
          <div className="stage_inner__article">
            <h2 className="fade">Article of the day</h2>
            <h3> How Sugar Really <br/> <br/> Affects Your Cholesterol</h3>
            <p>If you're like most people, you probably think it's high-cholesterol foods like eggs or shrimp that are the worst for your cholesterol levels. But that's not really the case.</p>
            <p className="auth">Delia Freeman</p>
            <p className="date">21 Feb 2019</p>
          </div>
          <div className="stage_inner__bottom">
          
            <div className="link fade">
              <a href="#">These are the best health books that came out in 2018</a>
              <p>Sam Knight</p>
              <p className="date">28.12.2018</p>
            </div>
            
          </div>
          <div className="stage_inner__list">
            <li>Nutrition &amp; healthy food</li>
            <li>Mind and mood</li>
            <li>Fitness and sport</li>
            <li>Beauty and skincare</li>
          </div>
          <div className="stage_inner__centerbox">
            <div className="illustration" />
            <div className="arrow">
              <label htmlFor="trigger">
                  <BiRightArrowAlt className="fas fa-arrow-right"/>
              </label>
            </div>
            <div className="text">
              <div className="title">
                Heart Health
              </div>
              <div className="articles">
                78 Articles
              </div>
            </div>
          </div>
          <div className="stage_inner__right">
            <div className="input">
              <input placeholder="Symptom Checker" />
            </div>
            <h2 className="fade">Popular</h2>
           
            <div className="link fade">
              <a href="#">These are the best health books that came out in 2018</a>
              <p>Sam Knight</p>
              <p className="date">28.12.2018</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
      <div className="marquee">
        <div className="marquee__item">
        Researchers have explored the relationship between climate change and mental health in a major literature review.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Known as SARS-CoV-2, the virus has resulted in more than 277 million
          infections and over 5.3 million deaths.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Opening of Health care System for Hostpital management Short: HCSHM
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          The United Kingdom recorded 106,122 cases of SARS-CoV-2 infection on Wednesday for the first time since the COVID-19 pandemic began. The surge has been largely fueled by the more infectious Omicron variant.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Scientists discover a new type of heart cell
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Throughout this year, researchers, healthcare workers, and public health experts have been working tirelessly to find the best ways of limiting the impact of SARS-CoV-2, the virus that causes COVID-19
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Research in mouse models may have uncovered the likely cause of Alzheimer’s disease: an overabundance of toxic fat-protein complexes in the blood
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
        </div>
        {/* الفاصل بين الاول والثاني لتحريك الشريط يجب تكرار الجمله فوق وتحت التعليق لعدم حصول تداخل بتعليق */}
        <div className="marquee__item">
        Researchers have explored the relationship between climate change and mental health in a major literature review.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Known as SARS-CoV-2, the virus has resulted in more than 277 million
          infections and over 5.3 million deaths.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Opening of Health care System for Hostpital management Short: HCSHM
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          The United Kingdom recorded 106,122 cases of SARS-CoV-2 infection on Wednesday for the first time since the COVID-19 pandemic began. The surge has been largely fueled by the more infectious Omicron variant.
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Scientists discover a new type of heart cell
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Throughout this year, researchers, healthcare workers, and public health experts have been working tirelessly to find the best ways of limiting the impact of SARS-CoV-2, the virus that causes COVID-19
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
          Research in mouse models may have uncovered the likely cause of Alzheimer’s disease: an overabundance of toxic fat-protein complexes in the blood
          <span className="marquee__seperator"><img src={img1} className="show-img" /></span>
        </div>
      </div>
    </>
  );
};

export default Home;
