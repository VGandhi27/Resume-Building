import "./HeroImg2Style.css";
import React from "react";

import slice from "../assets/Slice1.png"

const HeroImg2 = () => {
  return (
    <div className="brief">
      <div className="left">
        <h1>Make your</h1>
        <h1> own </h1>
        <h1>effective</h1>
        <h1> Resume</h1>
        <p>The most easiest way of building resume</p>
        <a href="/signin" className="btn btn-light" style={{span:"2rem"}}>Login/SignUp</a>
        <a href=" k" className="btn">Create Resume</a>

        
      </div>
      <div className="right">
      <div className="img-container">
          <div className="img-stack top">
            <img
              src={slice}
              alt="about img "
            //   width="100%"
            //   height="80%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg2;