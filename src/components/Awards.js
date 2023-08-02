import React from 'react'

const Awards = () => {
  return (
    <div  className="form">
    <form action="">
        <h1>Volunteering</h1>
    <label htmlFor="">Certificate Name</label>
          <input type="text" placeholder="email"/>
          <label htmlFor="">Awarded By</label>
          <input type="text" placeholder="title"/>
          <label htmlFor="">Area</label>
          <input type="text" placeholder="phone"/>
          <label htmlFor="">Start date</label>
          <input type="date" />
           <label htmlFor="">About the award</label>
          <textarea rows="5" placeholder="Type Here"/>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Add More</button>
     
    </form>
    </div>  )
}

export default Awards