import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Login = () => {

    let navigate =  useNavigate();
    const [credentials, setCredentials] = useState({email:"", password:""})
    const handleSubmit = async(e) =>{
      e.preventDefalut();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email , password: credentials.password })
          });
      
          const json = await response.json();
          console.log(json);

          

          if(json.success){
            localStorage.setItem('token',json.authtoken)
            navigate('/home');
          }
          else{
            alert("Invalid Credentials");
          }
         
          
    }
     
    const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    
    <>
    <div className="container mx-12">
    <h2>Login</h2>
    <h5>Welcome Back!</h5>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password"/>
        </div>
       
        <button type="submit" className="btn btn-outline-dark">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login