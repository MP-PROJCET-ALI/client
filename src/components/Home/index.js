import React from "react";
import "./style.css";
import img1 from "../../imge/logo-removebg-preview.png"

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  return (
    <>
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
