import React from 'react'

const About = () => {
  const myFunction=()=> {
    alert("Hello! I am an alert box!");
  }
  return (
    <>About
      <button  onClick={()=>myFunction()}>Try it</button>
    </>
    
  )
}

export default About