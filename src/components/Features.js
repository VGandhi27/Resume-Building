import "./FeaturesStyle.css"

import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'

import { FaBars ,FaTimes,FaGithub} from 'react-icons/fa'
// import Toggle from "./toggle"

const Navbar = () => {

  
  return (
    <>
    <div className="feature">
     <h1>FEATURE ON</h1>
    <div className={"header2 header-bg"}>
       
           <ul className={"nav-menu1 "} style={{fontSize:"1.2rem"}}>
        <li>
          <Link to="/"> <h2>TechCrunch</h2> </Link>
          </li>
          <li>
          <Link to="/about"><h2>Fast Company</h2> </Link>
          </li>
          <li>
          <Link to="/project"> <h2>MIT</h2> </Link>
          </li>
          <li>
          <Link to="/contact"> <h2>Forbes</h2> </Link>
          </li>
         
          
        </ul>
      
        
    </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar