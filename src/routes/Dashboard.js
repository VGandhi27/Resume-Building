import React from 'react'
import Navbar from '../components/Navbar'
import Per_Info from '../components/Per_Info'
import Skills_Expertise from '../components/Skills_Expertise'
import Education from '../components/Education'
import Work from '../components/Work'
import Activities from '../components/Activities'
import Volunteering from '../components/Volunteering'
import Awards from '../components/Awards'


const Dashboard = () => {
  return (
    <>
    <Navbar/>
    {/* <Per_Info/> */}
    <Skills_Expertise/>
    <Education/>
    <Work/>
    <Activities/>
    <Volunteering/>
    <Awards/>
    
    </>
  )
}

export default Dashboard