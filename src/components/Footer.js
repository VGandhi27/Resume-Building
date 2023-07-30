import './FooterStyle.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaYoutube,FaLinkedin,FaInstagram,FaHeart, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-container">
        <div className="left">
        <h3 style={{color:"#fff"}}>
        RESUME BUILDER
        </h3>
            <div className="location">
            </div>
            <div className="phone">
                <h4>
                Home
                </h4>
                <h4>About</h4>
            
            </div>
            
        </div>
        
        <div className="right">
        <h3 style={{color:"#fff"}}>
            Contacts
        </h3>
        <div className="social">

       <a href="https://github.com/VGandhi27"><FaGithub size={30} style={{color:'#fff',margin:'2rem'}}/>
</a> 
       <a href="https://www.linkedin.com/in/vidushi-gandhi27/"><FaLinkedin size={30} style={{color:'#fff',margin:'2rem'}}/></a>

       <a href="https://www.youtube.com/@vidushigandhi27/featured"><FaYoutube size={30} style={{color:'#fff',margin:'2rem'}}/></a>

        </div>
        </div>
        
     </div>
     <center style={{color:"#fff" }}>
          <h1 className='foot'>Created by Vidushi Gandhi | © 2023 All Right Reserved.</h1>  
        </center> 
    </div>
  )
}

export default Footer