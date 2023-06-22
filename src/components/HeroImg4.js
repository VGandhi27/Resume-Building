import "./HeroImg2Style.css";
import React from "react";

import slice2 from "../assets/Other 17.png"

const HeroImg4 = () => {
  return (
    <div className="brief">
      <div className="left">
        <h3>FEATURES</h3>
        <h1>Simple interface </h1>
        <h1>That helps you build  </h1>
        <h1>Quickly</h1>
       
      </div>
      <div className="right">
      <div className="img-container">
          <div className="img-stack top">
            <img
              src={slice2}
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

export default HeroImg4;