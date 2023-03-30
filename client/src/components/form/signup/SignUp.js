import React from 'react'
import  './signup.css'
import {useFormik} from 'formik'
import * as yup from 'yup'
import left from '../../asserts/smd.png'
import axios from 'axios'
function SignUp() {

  
  // formik initalizing
  const formik=useFormik({
    initialValues:{
      name:'',
      dob:'',
      email:'',
      pass:''
    },
    onSubmit:(values)=>{
      try{
       axios.post("http://localhost:4000/post",values)
      }
      catch(err){
        console.log(err);
      }
        console.log(values);
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
       
        {/* name filed */}
     <div className="form-group">
      <label htmlFor="user">Name:</label>
      <input type="text" className="form-control" id="user" name='name' onChange={formik.handleChange}/>
    </div><br/>
    {/* dob */}
    <input type="date"  className="dob" id="dob" name="dob" onChange={formik.handleChange}/><br/><br/>
    {/* email field */}
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={formik.handleChange}/>
    </div><br/>

    {/* password field */}
    <div className="form-group">
      <label htmlFor="pass">Password:</label>
      <input type="password"  className="form-control" id="pass" placeholder="Enter password" name="pass" onChange={formik.handleChange}/>
    </div><br/>
    <button type="submit"  className="btn btn-primary sub">Submit</button>
    </form>
     </div>
     </div>
    </div>
  )
}

export default SignUp
