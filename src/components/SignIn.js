import "./SignIn2Style.css"
import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const SignIn=()=>  {
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
let navigate =useNavigate();

const PostData =()=>{
  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
   M.toast({html: "Invalid Email", classes:"#d32f2f red darken-2"})
   return
  }  
  fetch("http://localhost:3000/signin",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     
      password,
      email
    })
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
   if(data.error){
    alert( data.error)
    }else{
    alert( "Signed In success");
    navigate("/");
  }
  }).catch(err=>{
    console.log(err) 
  })

}

  return (
    <>
    <div className="form">
      <div className="hero3">
     <div className="card auth-card input-field ">
     <h1 style={{textAlign:'center', fontSize:"3rem",padding:"1rem 1rem"}}>Resume Builder</h1>

     <label htmlFor="">Email</label>
        <input type="text" placeholder="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>

<label htmlFor="">Password</label>
        <input type="password" placeholder="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={()=>PostData()}
        >SignIn
        </button>
        <h1 className="register"><Link to="/signup">Don't have an Account ?</Link></h1>

      </div>
      </div>

    </div>

<Navbar/>
    
    </>
    

  )
}


export default SignIn