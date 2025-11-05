import React from 'react'
import './/CSS/LoginSigup.css'

function LoginSigup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1 className="">Sign Up</h1>
        <div className="loginsignup-failds">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password' />
        </div>

       <button className="loginsignup-button">Continue</button>

        <p className="loginsignup-login">Already have an Account? <span>Login Here</span> </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p className="">By continuing , i agree to the  terms of use & privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSigup