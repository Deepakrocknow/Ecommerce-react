import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up : </h1>
        <div className="loginsignupfields">
             <input type='text' placeholder='Enter Your Name'/>
             <input type='email' placeholder='Enter Your Email'/>
             <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing you agree my conditions</p>
        </div>
            
      </div>
    </div>
  )
}

export default LoginSignup