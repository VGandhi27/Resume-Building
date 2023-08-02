import React from 'react'
import './PerInfoStyle.css'

const Skills_Expertise = () => {
  return (
    <div className="form">
      
      <form action="" className='contacts'>
       <h1>
       Skills_Expertise
       </h1>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="name" 
        //  value={email}
        //  onChange={(e)=>setEmail(e.target.value)}
         />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="email"/>
          <label htmlFor="">Title</label>
          <input type="text" placeholder="title"/>
          <label htmlFor="">Website Url</label>
          <input type="text" placeholder="Web"/>
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="phone"/>
          <label htmlFor="">Location</label>
          <input type="text" />
          <label htmlFor="">Experience</label>
          <input type="text" />
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>
        
        
        
        </form> 
      </div>
  )
}

export default Skills_Expertise