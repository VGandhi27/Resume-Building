import "./NavbarStyle.css"

import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'

import { FaBars ,FaTimes,FaGithub} from 'react-icons/fa'
// import Toggle from "./toggle"

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick=()=> setClick(!click);

  const[color,setColor]= useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 10){
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);

  return (
    <>
    <div className={color?"header header-bg"
    :"header"}>
        <Link to="/">
            <h1>Resume Builder</h1>
        </Link>
        <ul className={click ?"nav-menu active":"nav-menu"} style={{fontSize:"1.2rem"}}>
        <li>
          <Link to="/"> Home </Link>
          </li>
          <li>
          <Link to="/Profile"> About </Link>
          </li>
          <li>
          <Link to="/contact"> Contact </Link>
          </li>
          <li>
          <Link to="https://github.com/VGandhi27/Resume-Building" > <FaGithub size={30} style={{color:"#fff"}} /> </Link>
          </li>
          <li>
          <Link to="/signin"> Login </Link>
          </li>
          <li>
          <Link to="/signup"> Register </Link>
          </li>
          
        </ul>
       
        <div className="hamburger" onClick={handleClick}>
          {click ?(<FaTimes size={20} style={{color:"#fff"}} />
          ):(<FaBars size={20} style={{color:"#fff"}} />)
         }
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar