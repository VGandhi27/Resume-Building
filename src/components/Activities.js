import React from 'react'
import './PerInfoStyle.css'

const Activities = () => {
  return (
    <div  className="form">
    
        <h1>Activities</h1>
        <form action="">
        <label htmlFor="">Involvements</label>
        <textarea rows="5" placeholder="Type Here"/>
        <label htmlFor="">Achievements</label>
        <textarea rows="5" placeholder="Type Here"/>
        <button className=" waves-effect waves-light #64b5f6 blue darken-1">Submit</button>
          <button className=" waves-effect waves-light #64b5f6 blue darken-1">Clear</button>

        
    </form>
    </div>
  )
}

export default Activities