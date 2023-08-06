import React from 'react'
import './EditableStyle.css'


const editable = () => {
  return (
    <>
     <div className="edit-resume">
      <section className="title" >
        <h1 className='intro_name'>Vidushi Gandhi</h1>
        <h3>Developer</h3>
        <p>
          <h5 className='titleDesc'>+918338838366</h5>
          <h5 className='titleDesc'>vgddhvd@sbjh.com</h5>
          <h5 className='titleDesc'> Faridabad</h5>
          <h5 className='titleDesc'>www.egsgs-resume.vercel.app</h5>
        </p>
        <main className='briefing1'>
          <div className="left5">
          <section className="summary">
          <h1>Summary </h1>
          <hr />
        I am a web developer having expertise in frontend development and exposure to back- end development. I design and develop web applications using the latest technologies to deliver the product with quality code.
        </section>
        <section className="experience">
          <h1>Experience</h1>
          <hr />
          <h5>Company 1</h5>
          <h5>Senior Software Developer</h5>
          <h6>Apr 2021 - present</h6>
          {/* <ul>
            <li>

            </li>
          </ul> */}
        </section>

          </div>
          <div className="right5">
          <section className="summary">
          <h1>Objective </h1>
          <hr />
          Eager to expand my skill set through external trainings to help boost all major front desk KPIs. Hoping to leverage organizational skills to help ABC Corp introduce time-saving schemes for all executives.        </section>

          </div>
        </main>
       
      </section>
        </div> 
    </>
  )
}

export default editable
