import './PerInfoStyle.css'
import React from 'react'

const Per_Info = () => {
  return (
    <div className="form">
       
       <form action="" className='contacts'>
       <h1>
        Basic Detail Contact
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
        <form action="" className='Link'>
        <h1>
        Basic Detail Links
       </h1>
        <label htmlFor="">LinkedIn</label>
          <input type="text" />
          <label htmlFor="">Twitter</label>
          <input type="text" />
          <label htmlFor="">Github</label>
          <input type="text" />
          <label htmlFor="">Hackerrank</label>
          <input type="text" />
          <label htmlFor="">Leetcode</label>
          <input type="text" />
          <label htmlFor="">Medium</label>
          <input type="text" />
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>

        </form>
        <form action="">
        <label htmlFor="">About me</label>
        <textarea rows="5" placeholder="Type Here"/>
        <label htmlFor="">Career objective</label>
        <textarea rows="5" placeholder="Type Here"/>
        <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>

        </form>
    </div>
    
  )
}

export default Per_Info