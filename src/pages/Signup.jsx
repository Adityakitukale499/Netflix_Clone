import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

function Signup({setSignIn}) {
    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value })
        // console.log(userData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://bookmyshow-clone-backend-8h46.onrender.com/users', userData)
        alert('Users has been added successfully')
        setSignIn(false)
    }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input onChange={handleChange} placeholder="Name" type="name" name="name"/>
        <input onChange={handleChange} placeholder="Email" type="email" name="email"/>
        <input onChange={handleChange}  placeholder="Password" type="password" name="password"/>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>

        <h4>
           <span className="signupScreen__gray"> New to Netflix? </span> 
           <span className="signupScreen__link" onClick={()=> setSignIn(false)}>
          Already have an account?
          </span> 
        </h4>
      </form>
    </div>
  );
}

export default Signup;