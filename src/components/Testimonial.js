import "./Testimonial.css"

import React from 'react'
import slice4 from "../assets/sl3.avif"
const Testimonial = () => {
  return (
    <>
    <div className="intro">
           <h2>Testimonial</h2> 
           <h1>
           Ready What Others Have To Say
            </h1>  
            
    </div>
          <div className="pricing">
                       
      <div className="card-container">
        <div className="card">
           
            <span className="bar">
                <img src={slice4} alt="" />
                <h3>OLIVIA COLE</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos quidem aspernatur eveniet quisquam sapiente incidunt possimus in numquam voluptate. Eum commodi minus eius blanditiis vero quod saepe? Explicabo, ratione.</p>
                
            </span>
        </div>

        <div className="card">
           
            <span className="bar">
                <img src={slice4} alt="" />
                <h3>OLIVIA COLE</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos quidem aspernatur eveniet quisquam sapiente incidunt possimus in numquam voluptate. Eum commodi minus eius blanditiis vero quod saepe? Explicabo, ratione.</p>
                
            </span>
        </div>

       
        <div className="card">
           
           <span className="bar">
               <img src={slice4} alt="" />
               <h3>OLIVIA COLE</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos quidem aspernatur eveniet quisquam sapiente incidunt possimus in numquam voluptate. Eum commodi minus eius blanditiis vero quod saepe? Explicabo, ratione.</p>
               
           </span>
       </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial