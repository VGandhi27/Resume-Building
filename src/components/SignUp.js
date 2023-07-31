import "./SignInStyle.css"
import React from 'react'
import Navbar from '../components/Navbar'
import {Link,Outlet} from 'react-router-dom'


const Form2 = () => {
    
  
  return (
    <>
    <Navbar/>
    <div className="form">
      <h1 style={{textAlign:'center', fontSize:"3rem",padding:"1rem 1rem"}}>Resume Builder</h1>
        <form >
            

            <label htmlFor="">Email</label>
            <input type="email" id="email" name="email"/>

            <label htmlFor="">Name</label>
            <input type="text" id="name" name="name"/>
           
            <label htmlFor="">Password</label>
            <input type="password" id="password" name="password"/>
           
                         <button className="btn" type="submit"> Sign Up </button>

                       <h1 className="register"><Link to='/signin'>Already have an Account?</Link></h1>  
        </form>
    </div>
    </>
  )
}

export default Form2 