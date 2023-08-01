import "./SignIn2Style.css"
import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

 const SignIn=()=> {

const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
let navigate =useNavigate();

const PostData =()=>{
  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
   M.toast({html: "Invalid Email", classes:"#d32f2f red darken-2"})
   return
  }  
  fetch("http://localhost:3000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      password,
      email
    })
  }).then(res=>res.json())
  .then(data=>{
   if(data.error){
    M.toast({html: data.error, classes:"#d32f2f red darken-2"})
    }else{
    M.toast({html: data.message, classes:"#43a047 green darken-1"})
    navigate("/signin");
    console.log(data)
  }
  }).catch(err=>{
    console.log(err) 
  })

}



  return (
    <>
    <Navbar/>
    <div className="form">
    <div className="hero3">

     <div className="card auth-card input-field ">
        <h1 style={{textAlign:'center', fontSize:"3rem",padding:"1rem 1rem"}}>Resume Builder</h1>
      
        <label htmlFor="">Email</label>
        <input type="text" placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />

         <label htmlFor="">Name</label>
        <input type="text" placeholder="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" placeholder="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={()=>PostData()}
        >SignUp
        </button>
        <h1 className="register"><Link to="/signin">Already have an Account ?</Link></h1>
      </div>
      </div>
    </div>
    </>
  )
}

export default SignIn