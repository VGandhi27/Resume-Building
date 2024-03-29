import React from 'react'
import { BrowserRouter, Route, Routes,Navigate} from "react-router-dom";

import Home from "./routes/Home"
import About from "./routes/About"
import SignUp from "./routes/SignUp"
import SignIn from './routes/SignIn'
import Dashboard from './routes/Dashboard';
// import Skills from './routes/Skills'
// import Timelines from './routes/Timelines'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route index element={<><Home  /></>} /> */}
            <Route exact path="signin" element={<SignIn  />} />
            <Route exact path="signup" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/"/>} />
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App