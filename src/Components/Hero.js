import React from "react";
import "../App.css";
import Hand from "../images/waving-hand.svg";

function Hero() {
  return (
    <>
      {/* <div className="Hero">
    <div className="Hero-text">
    <h1 className="Hero-header">
        Provide You best
        <br /> Best Ui Service
      </h1>
      <p className="Hero-slogan">
        Mobile App Design and Development Studio. You can hire us
      </p>
    </div>
     
      <div className="img">
<img src="../images/Hero.svg" alt="Hero" width="50%"   /> 
      </div> */}

      <div className="Hero-container">
        <div className="Hero-text">
          <h1 className="Hero-header">
            Provide You best
            <br /> Best Ui Service
          </h1>
          <p className="Hero-slogan">
            Mobile App Design and Development Studio,
            <br /> You can hire us.
          </p>
          <button className="wave-me">
            <img src={Hand} alt="wave me" className="hand-btn" />
            <span>Wave Me</span>
          </button>
        </div>
        <img src="../images/Hero.svg" alt="" width="50%" className="Hero " />
      </div>
    </>
  );
}

export default Hero;
