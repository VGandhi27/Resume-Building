import React from 'react'
import './PerInfoStyle.css'

const Education = () => {
  return (
    <div  className="form">
    <form action="">
        <h1>Education</h1>
    <label htmlFor="">Email</label>
          <input type="text" placeholder="email"/>
          <label htmlFor="">College</label>
          <input type="text" placeholder="title"/>
          <label htmlFor="">Degree</label>
          <input type="text" placeholder="Web"/>
          <label htmlFor="">Area</label>
          <input type="text" placeholder="phone"/>
          <label htmlFor="">Grade</label>
          <input type="text" />
          <label htmlFor="">Start date</label>
          <input type="date" />
          <label htmlFor="">End Date</label>
          <input type="date" />
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Add More</button>
     
    </form>
    </div>
  )
}

export default Education