import "./HeroImg4Style.css";
import React from "react";

import slice1 from "../assets/Other 18.png"

const HeroImg2 = () => {
  return (
    <>
    {/* <h1>Features</h1> */}
    <div className="brief">
      
      <div className="left4">
        <h3>FEATURES</h3>
      <h1>Customize with </h1>
        <h1> templates and  </h1>
        <h1>themes</h1>
      </div>
      <div className="right4">
      <div className="img-container">
          <div className="img-stack top">
            <img
              src={slice1}
              alt="about img "
            //   width="100%"
            //   height="80%"
            />
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default HeroImg2;