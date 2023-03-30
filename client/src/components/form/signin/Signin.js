import React from 'react'
import  './signin.css'
import {useFormik} from 'formik'
import left from '../../asserts/smd.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
  const navigate=useNavigate()
  
  // formik initalizing
  const formik=useFormik({
    initialValues:{
      email:'',
      pass:''
    },
    onSubmit:(values)=>{
       axios.post("http://localhost:4000/post/login",values).then((result)=>{
          //alert("success")
          console.log(result.data);
          localStorage.setItem('token',result.data)
          navigate('/home')
       })
    }
  })
  return (
    <div className='signup-container container'>
      <h1>Sign up</h1>
      <div className='row'>
     <div className='form-left col-md-6'>
      <img src={left}/>
     </div>
     <div className='form-right col-md-6'>
     <form onSubmit={formik.handleSubmit}>
    {/* email field */}
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" 
      name="email" onChange={formik.handleChange}/>
    </div><br/>

    {/* password field */}
    <div className="form-group">
      <label htmlFor="pass">Password:</label>
      <input type="password"  className="form-control" 
      id="pass" placeholder="Enter password" name="pass" onChange={formik.handleChange}/>
    </div><br/>
    <button type="submit"  className="btn btn-primary sub">Submit</button>
    </form>
     </div>
     </div>
    </div>
  )
}

export default Signin
