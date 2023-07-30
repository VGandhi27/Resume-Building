import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import HeroImg3 from '../components/HeroImg3'
import HeroImg4 from '../components/HeroImg4'
import Features from '../components/Features'
// import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2/>
       <Features/> 
       <HeroImg3/>
       <HeroImg4/>
       {/* <Testimonial/> */}
    </div>
  )
}

export default Home